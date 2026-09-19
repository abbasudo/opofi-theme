/* Opofi showcase: presents the screens from ../design/*.dc.html one at a time, scaled to fit,
   with click-through navigation. The design files are read as-is and never modified. */
(() => {
  const DESIGN = '../design/';
  const FILES = ['Opofi Invest.dc.html', 'Opofi Prop.dc.html', 'Opofi Shared.dc.html', 'Opofi Components.dc.html'];
  const ISSUES = 'https://github.com/abbasudo/opofi-theme/issues/new';

  // Text of an element inside a screen -> screen it navigates to.
  const LINKS = {
    'Portfolio': '2a', 'Available plans': '2c', 'My investments': '2e', 'Earnings': '2g',
    'Dashboard': '3b', 'My challenges': '3d', 'New challenge': '3k', 'Funded & payouts': '3m',
    'Signals & tools': '3n', 'Rulebook & certificates': '3o',
    'Go to Prop': '3b', 'Go to Trade': '3b', 'Go to Invest': '2a',
    'Wallet': '4a', 'Deposit': '4b', 'Withdraw': '4c', 'Referrals': '4j', 'Support': '4k',
    'SKSara K.Verified': '4d', 'Account': '4d',
  };
  // Tab labels only link while you are inside the matching set of screens.
  const TABSETS = [
    { ids: ['3e', '3f', '3g', '3h', '3i', '3j'], links: { 'Overview': '3e', 'Objectives': '3f', 'Trades': '3g', 'Credentials': '3h', 'Documents': '3i' } },
    { ids: ['4d', '4e', '4f', '4g', '4h'], links: { 'Profile': '4d', 'Verification': '4e', 'Security': '4f', 'Connections': '4g', 'Payment addresses': '4h' } },
  ];
  const VIEW_LABEL = { desktop: 'Desktop', mobile: 'Mobile', flow: 'Flow', all: 'All variants' };

  const $ = (id) => document.getElementById(id);
  const app = $('app'), stage = $('stage');
  const norm = (s) => s.replace(/\s+/g, ' ').replace(/→/g, '').trim();
  const pref = {
    get() { try { return localStorage.getItem('opofi-showcase-view'); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem('opofi-showcase-view', v); } catch (e) { /* private mode */ } },
  };

  let groups = [], screens = [], byId = {}, current = null, currentView = null;

  // ---- load + index the design -------------------------------------------------------------
  const hoverRules = new Map();
  const dynamicStyle = document.head.appendChild(document.createElement('style'));
  function hoverClass(value) {
    if (!hoverRules.has(value)) {
      const cls = 'hv' + hoverRules.size;
      const body = value.split(';').filter(Boolean).map((d) => d.trim() + ' !important').join(';');
      dynamicStyle.appendChild(document.createTextNode(`.surface .${cls}:hover{${body}}\n`));
      hoverRules.set(value, cls);
    }
    return hoverRules.get(value);
  }

  function groupColor(title) {
    if (/trade|prop/i.test(title)) return 'var(--cyan)';
    if (/invest/i.test(title)) return 'var(--lavender)';
    if (/foundation|collapsed/i.test(title)) return 'var(--grey)';
    return '#fff';
  }

  function widthOf(el) {
    const m = (el.getAttribute('style') || '').match(/(?:^|;)\s*width:(\d+)px/);
    return m ? +m[1] : null;
  }

  function indexDoc(doc) {
    // keyframes used by the screens (shimmer, flow dots)
    doc.querySelectorAll('helmet style, head style').forEach((st) => {
      (st.textContent.match(/@keyframes[^{]+\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}/g) || []).forEach((k) => {
        if (!dynamicStyle.textContent.includes(k)) dynamicStyle.appendChild(document.createTextNode(k + '\n'));
      });
    });
    doc.querySelectorAll('section').forEach((sec) => {
      const head = sec.firstElementChild;
      const parts = head ? [...head.children].map((c) => norm(c.textContent)) : [];
      const raw = parts[0] || norm(head ? head.textContent : 'Screens');
      const m = raw.match(/^(\d+)\s*·\s*(.*)$/);
      const g = { num: m ? +m[1] : 99, title: m ? m[2] : raw, desc: parts[1] || '', screens: [] };
      g.color = groupColor(g.title);
      sec.querySelectorAll('[data-screen-label]').forEach((el) => {
        const rows = [...el.children].slice(1);
        const items = rows[0] ? [...rows[0].children] : [];
        const kinds = { desktop: [], mobile: [], flow: [], other: [] };
        items.forEach((n) => {
          const w = widthOf(n);
          (w >= 900 ? kinds.desktop : w === 390 ? kinds.mobile : w === 440 ? kinds.flow : kinds.other).push(n);
        });
        const label = el.getAttribute('data-screen-label');
        const caption = el.firstElementChild ? [...el.firstElementChild.children].map((c) => norm(c.textContent))[1] || '' : '';
        const views = {};
        if (kinds.desktop.length) views.desktop = { nodes: kinds.desktop.slice(0, 1) };
        if (kinds.mobile.length) views.mobile = { nodes: kinds.mobile };
        if (kinds.flow.length) views.flow = { nodes: kinds.flow };
        if (kinds.other.length || rows.length > 1 || Object.keys(views).length > 1 || !Object.keys(views).length) {
          views.all = { nodes: rows, col: true };
        }
        const s = { id: el.id, group: g, name: label.replace(/^\d+\s*/, ''), caption, views };
        g.screens.push(s);
      });
      if (g.screens.length) groups.push(g);
    });
  }

  async function load() {
    const docs = await Promise.all(FILES.map(async (f) => {
      const res = await fetch(DESIGN + encodeURIComponent(f));
      if (!res.ok) throw new Error(f + ' → ' + res.status);
      return new DOMParser().parseFromString(await res.text(), 'text/html');
    }));
    docs.forEach(indexDoc);
    groups.sort((a, b) => a.num - b.num);
    screens = groups.flatMap((g) => g.screens);
    screens.forEach((s, i) => { s.index = i; byId[s.id] = s; });
  }

  // ---- rail --------------------------------------------------------------------------------
  function buildRail() {
    const nav = $('railNav');
    nav.textContent = '';
    groups.forEach((g) => {
      const box = nav.appendChild(document.createElement('div'));
      box.className = 'group';
      box.style.setProperty('--g', g.color);
      const t = box.appendChild(document.createElement('div'));
      t.className = 'group-title';
      t.appendChild(document.createElement('i'));
      t.appendChild(document.createTextNode(g.title));
      g.screens.forEach((s) => {
        const a = box.appendChild(document.createElement('a'));
        a.className = 'item';
        a.href = '#/' + s.id;
        a.dataset.id = s.id;
        const id = a.appendChild(document.createElement('span'));
        id.className = 'item-id';
        id.textContent = s.id;
        a.appendChild(document.createTextNode(s.name.replace(/^[^/]+\/\s*/, '')));
      });
    });
  }

  // ---- rendering ---------------------------------------------------------------------------
  function prepare(node, screen) {
    const clone = node.cloneNode(true);
    const all = [clone, ...clone.querySelectorAll('*')];
    const tabs = (TABSETS.find((t) => t.ids.includes(screen.id)) || {}).links || {};
    all.forEach((el) => {
      if (el.tagName === 'IMG') {
        const src = el.getAttribute('src') || '';
        if (!/^(https?:|data:|\/)/.test(src)) el.setAttribute('src', DESIGN + src);
      }
      const hv = el.getAttribute('style-hover');
      if (hv) el.classList.add(hoverClass(hv));
      if (el.closest('svg') || el.children.length > 4) return;
      const text = norm(el.textContent);
      if (!text || text.length > 40) return;
      const target = tabs[text] || LINKS[text];
      if (!target || target === screen.id || !byId[target]) return;
      if ([...el.children].some((c) => norm(c.textContent) === text)) return; // mark the deepest match only
      el.setAttribute('data-go', target);
    });
    return clone;
  }

  function fit() {
    const surface = stage.querySelector('.surface');
    if (!surface) return;
    const wrap = surface.parentElement;
    const cs = getComputedStyle(stage);
    const availW = stage.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const availH = stage.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    const w = surface.offsetWidth, h = surface.offsetHeight;
    let scale = Math.min(1, availW / w);
    if (currentView === 'flow' || currentView === 'all') scale = Math.min(1, Math.max(scale, 0.5));
    else if (currentView === 'mobile' || app.classList.contains('present')) scale = Math.min(scale, Math.max(availH / h, currentView === 'mobile' ? 0.6 : 0));
    surface.style.transform = `scale(${scale})`;
    wrap.style.width = Math.ceil(w * scale) + 'px';
    wrap.style.height = Math.ceil(h * scale) + 'px';
  }

  function pickView(screen, wanted) {
    const narrow = window.innerWidth < 700;
    const order = [wanted, pref.get(), narrow ? 'mobile' : 'desktop', 'desktop', 'mobile', 'flow', 'all'];
    return order.find((v) => v && screen.views[v]);
  }

  function showScreen(screen, wanted) {
    current = screen;
    currentView = pickView(screen, wanted);
    const view = screen.views[currentView];

    app.style.setProperty('--g', screen.group.color);
    $('bar').style.setProperty('--g', screen.group.color);
    $('eyebrow').textContent = screen.group.title;
    $('screenName').textContent = screen.name;
    $('note').textContent = screen.caption;
    $('counter').textContent = (screen.index + 1) + ' / ' + screens.length;
    $('prevBtn').disabled = false;
    $('nextBtn').disabled = screen.index === screens.length - 1;
    document.title = screen.name + ' — Opofi showcase';

    const seg = $('viewSeg');
    seg.textContent = '';
    const keys = Object.keys(screen.views);
    if (keys.length > 1) keys.forEach((k) => {
      const b = seg.appendChild(document.createElement('button'));
      b.textContent = VIEW_LABEL[k];
      b.className = k === currentView ? 'on' : '';
      b.onclick = () => { if (k === 'desktop' || k === 'mobile') pref.set(k); location.hash = '#/' + screen.id + '/' + k; };
    });

    const url = location.href.split('#')[0] + '#/' + screen.id;
    $('requestBtn').style.display = '';
    $('requestBtn').href = ISSUES + '?title=' + encodeURIComponent(`[${screen.id}] ${screen.name}: change request`) +
      '&body=' + encodeURIComponent(`Screen: ${screen.name} (${screen.id})\nLink: ${url}\n\nWhat should change:\n\nWhy:\n`);

    stage.textContent = '';
    const wrap = stage.appendChild(document.createElement('div'));
    wrap.className = 'fit';
    const surface = wrap.appendChild(document.createElement('div'));
    surface.className = 'surface' + (view.col ? ' col' : '');
    view.nodes.forEach((n) => surface.appendChild(prepare(n, screen)));
    stage.scrollTop = 0; stage.scrollLeft = 0;
    fit();

    document.querySelectorAll('.item').forEach((a) => a.classList.toggle('on', a.dataset.id === screen.id));
    const on = document.querySelector('.item.on');
    if (on) on.scrollIntoView({ block: 'nearest' });
  }

  function showCover() {
    current = null; currentView = null;
    $('eyebrow').textContent = 'Shareholder review';
    $('bar').style.removeProperty('--g');
    $('screenName').textContent = 'Opofi dashboard redesign';
    $('note').textContent = '';
    $('viewSeg').textContent = '';
    $('counter').textContent = screens.length + ' screens';
    $('prevBtn').disabled = true;
    $('nextBtn').disabled = false;
    $('requestBtn').style.display = 'none';
    document.title = 'Opofi Dashboard — Showcase';
    document.querySelectorAll('.item.on').forEach((a) => a.classList.remove('on'));

    const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; };
    stage.textContent = '';
    const cover = stage.appendChild(el('div', 'cover'));
    const intro = cover.appendChild(el('div'));
    intro.style.cssText = 'display:flex;flex-direction:column;gap:16px';
    intro.appendChild(el('h1', '', 'Opofi dashboard redesign'));
    intro.appendChild(el('p', '', `A walkthrough of all ${screens.length} designed screens across the Trade and Invest workspaces and the pages they share. Every screen is shown exactly as designed, on desktop and mobile.`));
    const cta = intro.appendChild(el('div', 'cover-cta'));
    const start = cta.appendChild(el('a', 'btn primary', 'Start the tour'));
    start.href = '#/' + screens[0].id;
    const raw = cta.appendChild(el('a', 'btn ghost', 'Open the raw design canvas'));
    raw.href = DESIGN;

    const cards = cover.appendChild(el('div', 'cards'));
    groups.forEach((g) => {
      const c = cards.appendChild(el('a', 'card'));
      c.href = '#/' + g.screens[0].id;
      c.style.setProperty('--g', g.color);
      const top = c.appendChild(el('div', 'card-top'));
      top.appendChild(el('span', '', g.title));
      top.appendChild(el('span', '', '→'));
      c.appendChild(el('div', 'card-desc', g.desc));
      c.appendChild(el('div', 'card-meta', g.screens.length + (g.screens.length === 1 ? ' screen' : ' screens')));
    });

    const how = cover.appendChild(el('div', 'how'));
    [['Move around', 'Use ← and → or the list on the left. Inside a screen, the sidebar, tabs and wallet buttons navigate like the real app.'],
     ['Switch device', 'Desktop, Mobile and Flow views appear above a screen whenever the design includes them.'],
     ['Present', 'Press F for a clean full-screen view. Esc brings the controls back.'],
     ['Ask for changes', '“Request a change” opens a pre-filled note that names the screen you are looking at.'],
    ].forEach(([t, d]) => { const b = how.appendChild(el('div')); b.appendChild(el('b', '', t)); b.appendChild(document.createTextNode(d)); });
  }

  // ---- routing + input ---------------------------------------------------------------------
  function route() {
    app.classList.remove('menu');
    const [, id, view] = location.hash.split('/');
    const s = byId[decodeURIComponent(id || '')];
    if (s) showScreen(s, view); else showCover();
  }
  function step(d) {
    if (!current) { if (d > 0) location.hash = '#/' + screens[0].id; return; }
    const n = screens[current.index + d];
    location.hash = n ? '#/' + n.id : (d < 0 ? '#/' : location.hash);
  }
  function present(on) {
    app.classList.toggle('present', on);
    try {
      if (on && !document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
      if (!on && document.fullscreenElement) document.exitFullscreen().catch(() => {});
    } catch (e) { /* fullscreen unavailable */ }
    $('presentBtn').textContent = on ? 'Exit' : 'Present';
    fit();
  }

  stage.addEventListener('click', (e) => {
    const go = e.target.closest && e.target.closest('[data-go]');
    if (go) { e.preventDefault(); location.hash = '#/' + go.getAttribute('data-go'); return; }
    if (e.target.closest && e.target.closest('.surface a')) e.preventDefault(); // design links go nowhere
  });
  $('prevBtn').onclick = () => step(-1);
  $('nextBtn').onclick = () => step(1);
  $('presentBtn').onclick = () => present(!app.classList.contains('present'));
  $('menuBtn').onclick = () => app.classList.toggle('menu');
  $('scrim').onclick = () => app.classList.remove('menu');
  document.addEventListener('fullscreenchange', () => { if (!document.fullscreenElement && app.classList.contains('present')) present(false); });
  document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey || /INPUT|TEXTAREA/.test(e.target.tagName)) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); step(1); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); step(-1); }
    else if (e.key === 'f' || e.key === 'F') present(!app.classList.contains('present'));
    else if (e.key === 'Escape') present(false);
  });
  window.addEventListener('resize', fit);
  window.addEventListener('hashchange', route);

  load().then(() => { buildRail(); route(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit); })
    .catch((err) => { stage.textContent = ''; const d = stage.appendChild(document.createElement('div')); d.className = 'loading'; d.textContent = 'Could not load the design files (' + err.message + ').'; });
})();
