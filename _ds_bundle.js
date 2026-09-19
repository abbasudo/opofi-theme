/* @ds-bundle: {"format":4,"namespace":"OpofiDesignSystem_dbd458","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"LimitBar","sourcePath":"components/data/LimitBar.jsx"},{"name":"MetricTile","sourcePath":"components/data/MetricTile.jsx"},{"name":"Sparkline","sourcePath":"components/data/Sparkline.jsx"},{"name":"LineChart","sourcePath":"components/data/Sparkline.jsx"},{"name":"BarChart","sourcePath":"components/data/Sparkline.jsx"},{"name":"AlertStrip","sourcePath":"components/feedback/AlertStrip.jsx"},{"name":"ConfirmDialog","sourcePath":"components/feedback/ConfirmDialog.jsx"},{"name":"Modal","sourcePath":"components/feedback/ConfirmDialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"SidePanel","sourcePath":"components/feedback/SidePanel.jsx"},{"name":"Stepper","sourcePath":"components/feedback/Stepper.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FilterChips","sourcePath":"components/forms/FilterChips.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Segmented","sourcePath":"components/forms/Segmented.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/forms/Tabs.jsx"},{"name":"MobileTabBar","sourcePath":"components/layout/MobileTabBar.jsx"},{"name":"PageHeader","sourcePath":"components/layout/PageHeader.jsx"},{"name":"AppShell","sourcePath":"components/layout/PageHeader.jsx"},{"name":"TRADE_NAV","sourcePath":"components/layout/Sidebar.jsx"},{"name":"INVEST_NAV","sourcePath":"components/layout/Sidebar.jsx"},{"name":"SHARED_NAV","sourcePath":"components/layout/Sidebar.jsx"},{"name":"Sidebar","sourcePath":"components/layout/Sidebar.jsx"},{"name":"TopBar","sourcePath":"components/layout/TopBar.jsx"},{"name":"WorkspaceSwitch","sourcePath":"components/layout/WorkspaceSwitch.jsx"},{"name":"AccountCard","sourcePath":"components/product/AccountCard.jsx"},{"name":"PositionCard","sourcePath":"components/product/PositionCard.jsx"},{"name":"ProductCard","sourcePath":"components/product/PositionCard.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"891cb4dfc8e7","components/core/Button.jsx":"13fb45766b6a","components/core/Card.jsx":"f619f0110075","components/core/Icon.jsx":"f78da4614c76","components/core/Logo.jsx":"686739ace920","components/core/StatusPill.jsx":"dfee5eafe9bf","components/data/DataTable.jsx":"758dd85e1964","components/data/LimitBar.jsx":"dd6f14ac1cce","components/data/MetricTile.jsx":"bd792186aed9","components/data/Sparkline.jsx":"6538b4b6b06d","components/feedback/AlertStrip.jsx":"6059b54bc1d5","components/feedback/ConfirmDialog.jsx":"c8a5d762d54d","components/feedback/EmptyState.jsx":"768ef67df460","components/feedback/SidePanel.jsx":"c2ba8c67abcc","components/feedback/Stepper.jsx":"bbb15c9275e2","components/feedback/Toast.jsx":"dc318f3d4b3d","components/forms/Checkbox.jsx":"5cb4a465d621","components/forms/FilterChips.jsx":"0036672f5439","components/forms/Input.jsx":"e3e5828438ee","components/forms/Segmented.jsx":"f12ca18bde24","components/forms/Select.jsx":"e3e676f805e0","components/forms/Switch.jsx":"e75a44579fff","components/forms/Tabs.jsx":"a491e1eaca60","components/layout/MobileTabBar.jsx":"1f91d1787899","components/layout/PageHeader.jsx":"86d7b0bd3e28","components/layout/Sidebar.jsx":"97fdd216f7a0","components/layout/TopBar.jsx":"d991a25de9b1","components/layout/WorkspaceSwitch.jsx":"eeac9c5b69c3","components/product/AccountCard.jsx":"7f2239545f88","components/product/PositionCard.jsx":"75037d6b1b71","ui_kits/dashboard/DetailScreens.jsx":"30da9efec38d","ui_kits/dashboard/InvestScreens.jsx":"665a1cefa12b","ui_kits/dashboard/TradeScreens.jsx":"7e15922bd214"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OpofiDesignSystem_dbd458 = window.OpofiDesignSystem_dbd458 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
/** Circular initials avatar, 32px, surface-2 fill. */
function Avatar({
  initials = 'SK',
  size = 32,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--surface-tile)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--text-primary)',
      flex: 'none',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = 'var(--text-on-accent)';
const VARIANTS = {
  trade: {
    bg: 'var(--accent-trade)',
    hover: 'var(--accent-trade-hover)',
    active: 'var(--accent-trade-active)',
    disabled: 'var(--accent-trade-disabled)',
    color: T
  },
  invest: {
    bg: 'var(--accent-invest)',
    hover: 'var(--accent-invest-hover)',
    active: 'var(--accent-invest-active)',
    disabled: 'var(--accent-invest-disabled)',
    color: T
  },
  shared: {
    bg: 'var(--accent-shared)',
    hover: 'var(--accent-shared-hover)',
    active: 'var(--accent-shared-active)',
    disabled: 'var(--accent-shared-disabled)',
    color: T
  },
  primary: {
    bg: 'var(--accent)',
    hover: 'var(--accent-hover)',
    active: 'var(--accent-active)',
    disabled: 'var(--accent-disabled)',
    color: T
  }
};

/** Opofi button. One primary per view; primary colour follows the workspace (trade cyan, invest lavender, shared white). */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  children,
  style,
  onClick,
  ...rest
}) {
  const [state, setState] = React.useState('default');
  const h = size === 'sm' ? 36 : size === 'lg' ? 44 : size === 'xl' ? 48 : 40;
  const fs = size === 'sm' ? 13 : 14;
  const px = size === 'sm' ? 14 : size === 'lg' || size === 'xl' ? 20 : 16;
  const base = {
    height: h,
    padding: `0 ${px}px`,
    borderRadius: 'var(--radius-control)',
    fontFamily: 'var(--font-body)',
    fontSize: fs,
    fontWeight: 500,
    lineHeight: 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    border: '1px solid transparent',
    cursor: disabled ? 'default' : 'pointer',
    width: fullWidth ? '100%' : undefined,
    whiteSpace: 'nowrap',
    transition: 'background var(--duration-fast) var(--ease), border-color var(--duration-fast) var(--ease)',
    outline: 'none',
    userSelect: 'none'
  };
  let s;
  if (variant === 'secondary') {
    s = disabled ? {
      background: 'transparent',
      borderColor: 'var(--border-disabled)',
      color: 'var(--text-disabled)'
    } : state === 'active' ? {
      background: 'var(--surface-card)',
      borderColor: 'var(--border-control-hover)',
      color: 'var(--text-primary)'
    } : state === 'hover' ? {
      background: 'var(--surface-tile)',
      borderColor: 'var(--border-control-hover)',
      color: 'var(--text-primary)'
    } : {
      background: 'transparent',
      borderColor: 'var(--border-control)',
      color: 'var(--text-primary)'
    };
  } else if (variant === 'danger') {
    s = disabled ? {
      background: 'transparent',
      borderColor: 'rgba(242,109,109,0.15)',
      color: 'rgba(242,109,109,0.4)'
    } : state === 'active' ? {
      background: 'var(--danger)',
      borderColor: 'var(--danger)',
      color: T
    } : state === 'hover' ? {
      background: 'var(--danger-tint-weak)',
      borderColor: 'var(--danger-border-btn-hover)',
      color: 'var(--danger)'
    } : {
      background: 'transparent',
      borderColor: 'var(--danger-border-btn)',
      color: 'var(--danger)'
    };
  } else if (variant === 'dangerSolid') {
    s = {
      background: disabled ? 'var(--danger-tint)' : 'var(--danger)',
      color: disabled ? 'var(--text-on-accent-disabled)' : T
    };
  } else if (variant === 'ghost') {
    s = {
      background: state === 'hover' && !disabled ? 'var(--surface-card)' : 'transparent',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)'
    };
  } else {
    const v = VARIANTS[variant] || VARIANTS.primary;
    s = disabled || loading ? {
      background: v.disabled,
      color: 'var(--text-on-accent-disabled)'
    } : {
      background: state === 'active' ? v.active : state === 'hover' ? v.hover : v.bg,
      color: v.color
    };
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: disabled || loading ? undefined : onClick,
    onMouseEnter: () => setState('hover'),
    onMouseLeave: () => setState('default'),
    onMouseDown: () => setState('active'),
    onMouseUp: () => setState('hover'),
    onFocus: e => {
      e.currentTarget.style.boxShadow = 'var(--focus-ring)';
    },
    onBlur: e => {
      e.currentTarget.style.boxShadow = 'none';
    },
    style: {
      ...base,
      ...s,
      ...style
    }
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      border: '2px solid rgba(6,11,20,0.3)',
      borderTopColor: 'var(--navy)',
      animation: 'opofi-spin .8s linear infinite'
    }
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Base surface: ink background, 1px hairline, 12px radius, no shadow. `tile` gives the nested 8px surface-2 tile. */
function Card({
  tile = false,
  padding,
  danger = false,
  strong = false,
  children,
  style,
  ...rest
}) {
  const s = tile ? {
    background: 'var(--surface-tile)',
    borderRadius: 'var(--radius-control)',
    padding: padding ?? 'var(--tile-padding)'
  } : {
    background: 'var(--surface-card)',
    border: `1px solid ${danger ? 'var(--danger-border-card)' : strong ? 'var(--border-control)' : 'var(--border-card)'}`,
    borderRadius: 'var(--radius-card)',
    padding: padding ?? 'var(--card-padding-trade)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...s,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
// Icon glyphs copied from the Opofi Dashboard redesign source. 24 viewBox, 1.5 stroke, no fill.
const ICONS = {
  dashboard: {
    cap: "round",
    join: "round",
    svg: "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1.5\"/>"
  },
  target: {
    cap: undefined,
    join: undefined,
    svg: "<circle cx=\"12\" cy=\"12\" r=\"9\"/><circle cx=\"12\" cy=\"12\" r=\"4.5\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/>"
  },
  plusCircle: {
    cap: "round",
    join: undefined,
    svg: "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 8v8M8 12h8\"/>"
  },
  banknote: {
    cap: undefined,
    join: undefined,
    svg: "<rect x=\"2.5\" y=\"6\" width=\"19\" height=\"12\" rx=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"2.5\"/>"
  },
  activity: {
    cap: "round",
    join: "round",
    svg: "<path d=\"M3 12h4l3-7 4 14 3-7h4\"/>"
  },
  book: {
    cap: undefined,
    join: "round",
    svg: "<path d=\"M4 5.5A1.5 1.5 0 0 1 5.5 4H19v14H5.5A1.5 1.5 0 0 0 4 19.5z\"/><path d=\"M4 19.5V5.5M8 8h7\"/>"
  },
  wallet: {
    cap: undefined,
    join: undefined,
    svg: "<rect x=\"3\" y=\"6\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"M3 10h18M16 14.5h2\"/>"
  },
  user: {
    cap: undefined,
    join: undefined,
    svg: "<circle cx=\"12\" cy=\"8.5\" r=\"3.5\"/><path d=\"M5 19.5c1.2-3.3 3.8-5 7-5s5.8 1.7 7 5\"/>"
  },
  users: {
    cap: undefined,
    join: undefined,
    svg: "<circle cx=\"9\" cy=\"8.5\" r=\"3\"/><circle cx=\"16.5\" cy=\"9.5\" r=\"2.5\"/><path d=\"M3 19c1-3 3.2-4.5 6-4.5s5 1.5 6 4.5M15 15c2.4 0 4.2 1.2 5 3.5\"/>"
  },
  help: {
    cap: "round",
    join: undefined,
    svg: "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M9.5 9.5a2.5 2.5 0 0 1 5 0c0 1.8-2.5 2-2.5 4\"/><circle cx=\"12\" cy=\"17\" r=\"0.6\" fill=\"currentColor\"/>"
  },
  bell: {
    cap: "round",
    join: "round",
    svg: "<path d=\"M6 10a6 6 0 0 1 12 0v4l1.5 2.5h-15L6 14zM10 19.5a2 2 0 0 0 4 0\"/>"
  },
  check: {
    cap: "round",
    join: "round",
    svg: "<path d=\"M5 12l5 5L20 7\"/>"
  },
  copy: {
    cap: "round",
    join: undefined,
    svg: "<rect x=\"9\" y=\"9\" width=\"11\" height=\"11\" rx=\"2\"/><path d=\"M5 15V6a2 2 0 0 1 2-2h9\"/>"
  },
  close: {
    cap: "round",
    join: undefined,
    svg: "<path d=\"M6 6l12 12M18 6L6 18\"/>"
  },
  search: {
    cap: "round",
    join: undefined,
    svg: "<circle cx=\"11\" cy=\"11\" r=\"6.5\"/><path d=\"M16 16l4 4\"/>"
  },
  chevronDown: {
    cap: "round",
    join: "round",
    svg: "<path d=\"M6 9l6 6 6-6\"/>"
  },
  chevronLeft: {
    cap: "round",
    join: "round",
    svg: "<path d=\"M15 6l-6 6 6 6\"/>"
  },
  chevronRight: {
    cap: "round",
    join: "round",
    svg: "<path d=\"M9 6l6 6-6 6\"/>"
  },
  clock: {
    cap: undefined,
    join: undefined,
    svg: "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 3v9l6.5 6.2\"/>"
  },
  layers: {
    cap: undefined,
    join: "round",
    svg: "<path d=\"M12 3l9 5-9 5-9-5z\"/><path d=\"M3 12l9 5 9-5M3 16l9 5 9-5\"/>"
  },
  list: {
    cap: "round",
    join: undefined,
    svg: "<path d=\"M4 6h16M4 12h16M4 18h10\"/>"
  },
  trendUp: {
    cap: "round",
    join: "round",
    svg: "<path d=\"M3 17l6-6 4 4 8-8M15 7h6v6\"/>"
  },
  calendar: {
    cap: undefined,
    join: undefined,
    svg: "<rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M3 10h18M8 3v4M16 3v4\"/>"
  },
  more: {
    cap: "round",
    join: undefined,
    svg: "<path d=\"M5 12h.01M12 12h.01M19 12h.01\"/>"
  }
};
const ICON_NAMES = Object.keys(ICONS);

/** 20px outline glyph from the Opofi set. Inherits color via currentColor. */
function Icon({
  name,
  size = 20,
  color,
  strokeWidth = 1.5,
  style,
  ...rest
}) {
  const g = ICONS[name];
  if (!g) return null;
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color || 'currentColor',
    strokeWidth,
    strokeLinecap: g.cap,
    strokeLinejoin: g.join,
    'aria-hidden': true,
    style: {
      flex: 'none',
      display: 'block',
      ...style
    },
    ...rest,
    dangerouslySetInnerHTML: {
      __html: g.svg
    }
  });
}
Object.assign(__ds_scope, { ICON_NAMES, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
/** Opofi logo. `full` = icon + wordmark (default), `icon` = hexagon mark only. Tone matches dark UI by default. */
function Logo({
  variant = 'full',
  tone = 'default',
  height = 28,
  base = '',
  style
}) {
  const dir = base + 'assets/';
  let src;
  if (variant === 'icon') src = dir + (tone === 'white' ? 'icon-white.svg' : tone === 'dark' ? 'logo-pack/svg/opofi-icon-dark.svg' : 'icon-cyan.svg');else if (variant === 'wordmark') src = dir + (tone === 'dark' ? 'logo-pack/svg/opofi-wordmark-noslogan-dark.svg' : tone === 'white' ? 'logo-pack/svg/opofi-wordmark-noslogan-white.svg' : 'logo-pack/svg/opofi-wordmark-noslogan-gradient.svg');else src = dir + (tone === 'dark' ? 'logo-pack/svg/opofi-logo-noslogan-mono-dark.svg' : tone === 'white' ? 'logo-pack/svg/opofi-logo-noslogan-mono-white.svg' : 'logo.svg');
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Opofi",
    style: {
      height,
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
const TONES = {
  trade: {
    bg: 'var(--accent-trade-tint)',
    color: 'var(--accent-trade)'
  },
  invest: {
    bg: 'var(--accent-invest-tint)',
    color: 'var(--accent-invest)'
  },
  success: {
    bg: 'var(--success-tint)',
    color: 'var(--success)'
  },
  warning: {
    bg: 'var(--warning-tint)',
    color: 'var(--warning)'
  },
  danger: {
    bg: 'var(--danger-tint)',
    color: 'var(--danger)'
  },
  neutral: {
    bg: 'var(--neutral-tint)',
    color: 'var(--text-secondary)'
  }
};

/** 12px status pill: tinted background at 15%, full-colour text. Tone is semantic and identical in both workspaces. */
function StatusPill({
  tone = 'neutral',
  children,
  style
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: 12,
      lineHeight: 1.4,
      padding: 'var(--pill-padding)',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.color,
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
/**
 * Card-wrapped data table. 12px grey header row (40px), 40px rows (44 in Invest), hairline dividers, surface-2 hover.
 * columns: [{ key, label, align, width, render }] ; rows: objects. `loading` shows shimmer rows; `empty` renders when rows is empty.
 */
function DataTable({
  columns = [],
  rows = [],
  title,
  action,
  rowHeight = 40,
  loading = false,
  loadingRows = 3,
  empty,
  onRowClick,
  style
}) {
  const [hover, setHover] = React.useState(-1);
  const grid = columns.map(c => c.width || '1fr').join(' ');
  const cell = (c, extra) => ({
    textAlign: c.align || 'left',
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    ...extra
  });
  const rowBase = {
    display: 'grid',
    gridTemplateColumns: grid,
    padding: '0 16px',
    height: rowHeight,
    alignItems: 'center',
    borderBottom: '1px solid var(--hairline)',
    fontSize: 13
  };
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: 0,
    style: {
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, (title || action) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500
    }
  }, title), action && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--accent)',
      cursor: 'pointer'
    }
  }, action)), /*#__PURE__*/React.createElement("div", {
    style: {
      ...rowBase,
      height: 40,
      color: 'var(--text-secondary)',
      fontSize: 12
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("span", {
    key: c.key,
    style: cell(c)
  }, c.label))), loading && Array.from({
    length: loadingRows
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: 's' + i,
    style: {
      ...rowBase,
      gap: 24
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("span", {
    key: c.key,
    style: {
      height: 12,
      borderRadius: 4,
      background: 'var(--surface-tile)',
      animation: 'opofi-shimmer var(--skeleton-duration) infinite'
    }
  })))), !loading && rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.id ?? i,
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(-1),
    onClick: onRowClick ? () => onRowClick(r, i) : undefined,
    style: {
      ...rowBase,
      borderBottom: i === rows.length - 1 && !empty ? 'none' : rowBase.borderBottom,
      background: hover === i ? 'var(--surface-row-hover)' : 'transparent',
      cursor: onRowClick ? 'pointer' : 'default',
      transition: 'background var(--duration-fast) var(--ease)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("span", {
    key: c.key,
    style: cell(c, {
      fontWeight: c.strong ? 500 : 400,
      color: c.muted ? 'var(--text-secondary)' : 'inherit'
    })
  }, c.render ? c.render(r[c.key], r) : r[c.key])))), !loading && rows.length === 0 && empty && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, empty.title), empty.body && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, empty.body)));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/LimitBar.jsx
try { (() => {
/** 6px limit / progress bar. Loss limits fill white 60% while healthy, amber under 30% left, red under 10%. Profit targets fill green. */
function LimitBar({
  label,
  used = 0,
  total = 1,
  kind = 'limit',
  valueText,
  style
}) {
  const pct = Math.max(0, Math.min(100, total ? used / total * 100 : 0));
  const left = total - used;
  const leftPct = total ? left / total : 0;
  let fill = 'var(--white-60)',
    txt = 'var(--text-primary)';
  if (kind === 'target') fill = 'var(--profit)';else if (kind === 'invest') fill = 'var(--accent-invest)';else if (leftPct < 0.1) {
    fill = 'var(--danger)';
    txt = 'var(--danger)';
  } else if (leftPct < 0.3) {
    fill = 'var(--warning)';
    txt = 'var(--warning)';
  }
  const fmt = n => '$' + Math.round(n).toLocaleString('en-US');
  const text = valueText ?? (kind === 'target' ? `${fmt(used)} of ${fmt(total)}` : `${fmt(left)} left of ${fmt(total)}`);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: txt,
      fontVariantNumeric: 'tabular-nums'
    }
  }, text)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--bar-height)',
      borderRadius: 3,
      background: 'var(--surface-tile)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: fill,
      transition: 'width var(--duration) var(--ease)'
    }
  })));
}
Object.assign(__ds_scope, { LimitBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/LimitBar.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricTile.jsx
try { (() => {
/** Label-over-number tile. `tile` = nested surface-2 (inside account cards); default = card. Delta colours by sign. */
function MetricTile({
  label,
  value,
  delta,
  deltaTone,
  sub,
  tile = false,
  size = 'md',
  valueColor,
  style
}) {
  const fs = size === 'sm' ? 17 : size === 'lg' ? 24 : size === 'xl' ? 32 : tile ? 18 : 22;
  const tone = deltaTone || (typeof delta === 'string' && delta.trim().startsWith('−') || typeof delta === 'string' && delta.trim().startsWith('-') ? 'loss' : 'profit');
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    tile: tile,
    padding: tile ? size === 'sm' ? '8px 10px' : 10 : size === 'lg' || size === 'xl' ? 24 : 12,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: fs,
      fontWeight: 500,
      marginTop: 2,
      lineHeight: 1.15,
      color: valueColor || 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: tone === 'loss' ? 'var(--loss)' : tone === 'neutral' ? 'var(--text-secondary)' : 'var(--profit)'
    }
  }, delta), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: size === 'lg' || size === 'xl' ? 13 : 12,
      color: 'var(--text-secondary)',
      marginTop: size === 'lg' || size === 'xl' ? 8 : 2
    }
  }, sub));
}
Object.assign(__ds_scope, { MetricTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricTile.jsx", error: String((e && e.message) || e) }); }

// components/data/Sparkline.jsx
try { (() => {
function path(data, w, h, pad) {
  const min = Math.min(...data),
    max = Math.max(...data),
    span = max - min || 1;
  const pts = data.map((v, i) => [i / (data.length - 1) * w, pad + (1 - (v - min) / span) * (h - pad * 2)]);
  const line = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  return {
    line,
    area: `${line} V${h} H0 Z`,
    pts,
    min,
    max,
    span
  };
}

/** Sparkline: 1.5px accent line over a 12% accent fill. Stretches to its container. */
function Sparkline({
  data = [],
  height = 40,
  color = 'var(--chart-line)',
  fill = 'var(--chart-fill)',
  style
}) {
  const w = 120,
    p = path(data.length > 1 ? data : [0, 0], w, height, 2);
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${height}`,
    width: "100%",
    height: height,
    preserveAspectRatio: "none",
    style: {
      display: 'block',
      ...style
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: p.area,
    fill: fill
  }), /*#__PURE__*/React.createElement("path", {
    d: p.line,
    fill: "none",
    stroke: color,
    strokeWidth: "1.5",
    vectorEffect: "non-scaling-stroke"
  }));
}

/**
 * Line chart with optional dashed threshold lines and x labels.
 * thresholds: [{ value, label, color }] drawn as 4-4 dashed rules with 11px labels.
 */
function LineChart({
  data = [],
  height = 200,
  thresholds = [],
  xLabels = [],
  gridLines = 3,
  color = 'var(--chart-line)',
  fill = 'var(--chart-fill)',
  style
}) {
  const w = 800,
    padTop = 16,
    padBottom = xLabels.length ? 24 : 8;
  const allVals = [...data, ...thresholds.map(t => t.value)];
  const min = Math.min(...allVals),
    max = Math.max(...allVals),
    span = max - min || 1;
  const y = v => padTop + (1 - (v - min) / span) * (height - padTop - padBottom);
  const pts = data.map((v, i) => [i / (data.length - 1) * w, y(v)]);
  const line = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${height}`,
    width: "100%",
    height: height,
    preserveAspectRatio: "none",
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      ...style
    }
  }, Array.from({
    length: gridLines
  }).map((_, i) => {
    const gy = padTop + (i + 1) / (gridLines + 1) * (height - padTop - padBottom);
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: "0",
      y1: gy,
      x2: w,
      y2: gy,
      stroke: "var(--chart-grid)"
    });
  }), /*#__PURE__*/React.createElement("path", {
    d: `${line} V${height - padBottom} H0 Z`,
    fill: fill
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: color,
    strokeWidth: "1.5",
    vectorEffect: "non-scaling-stroke"
  }), thresholds.map((t, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: y(t.value),
    x2: w,
    y2: y(t.value),
    stroke: t.color || 'var(--grey)',
    strokeDasharray: "4 4",
    vectorEffect: "non-scaling-stroke"
  }), t.label && /*#__PURE__*/React.createElement("text", {
    x: "4",
    y: y(t.value) - 5,
    fill: t.color || 'var(--grey)',
    style: {
      fontSize: 11
    }
  }, t.label))), xLabels.map((l, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: xLabels.length > 1 ? i / (xLabels.length - 1) * w : 0,
    y: height - 6,
    fill: "var(--grey)",
    textAnchor: i === 0 ? 'start' : i === xLabels.length - 1 ? 'end' : 'middle',
    style: {
      fontSize: 11
    }
  }, l)));
}

/** Monthly bar chart: 35% lavender bars, solid accent for the highlighted (current) bar, value above and label below. */
function BarChart({
  data = [],
  height = 200,
  highlightLast = true,
  color = 'var(--accent-invest)',
  style
}) {
  const n = data.length || 1,
    w = 120 * n,
    base = height - 30,
    barW = 60,
    maxV = Math.max(...data.map(d => d.value), 1);
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${height}`,
    width: "100%",
    height: height,
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      ...style
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: base,
    x2: w,
    y2: base,
    stroke: "var(--chart-axis)"
  }), data.map((d, i) => {
    const h = d.value / maxV * (base - 40),
      x = i * 120 + 30,
      hi = highlightLast && i === n - 1;
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("rect", {
      x: x,
      y: base - h,
      width: barW,
      height: h,
      rx: "3",
      fill: hi ? color : 'var(--chart-bar)'
    }), /*#__PURE__*/React.createElement("text", {
      x: x + barW / 2,
      y: base - h - 8,
      fill: hi ? 'var(--white)' : 'var(--grey)',
      textAnchor: "middle"
    }, d.valueLabel ?? d.value), /*#__PURE__*/React.createElement("text", {
      x: x + barW / 2,
      y: base + 20,
      fill: hi ? 'var(--white)' : 'var(--grey)',
      textAnchor: "middle"
    }, d.label));
  }));
}
Object.assign(__ds_scope, { Sparkline, LineChart, BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/feedback/AlertStrip.jsx
try { (() => {
const TONES = {
  info: {
    bg: 'var(--accent-trade-tint-weak)',
    border: 'var(--accent-trade-border)',
    color: 'var(--accent-trade)'
  },
  invest: {
    bg: 'var(--accent-invest-tint-weak)',
    border: 'rgba(196,181,253,0.3)',
    color: 'var(--accent-invest)'
  },
  warning: {
    bg: 'var(--warning-tint-strip)',
    border: 'var(--warning-border)',
    color: 'var(--warning)'
  },
  danger: {
    bg: 'var(--danger-tint-strip)',
    border: 'var(--danger-border)',
    color: 'var(--danger)'
  }
};

/** Full-width alert strip: 13px, 10×14 padding, 8px radius, tinted bg + 30% border. One sentence, one underlined action, dismiss X. */
function AlertStrip({
  tone = 'info',
  children,
  action,
  onAction,
  onDismiss,
  style
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '10px 14px',
      borderRadius: 'var(--radius-control)',
      background: t.bg,
      border: `1px solid ${t.border}`,
      fontSize: 13,
      color: t.color,
      lineHeight: 1.35,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      flex: 'none'
    }
  }, action && /*#__PURE__*/React.createElement("span", {
    onClick: onAction,
    style: {
      fontWeight: 500,
      textDecoration: 'underline',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, action), onDismiss && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 16,
    onClick: onDismiss,
    style: {
      cursor: 'pointer'
    }
  })));
}
Object.assign(__ds_scope, { AlertStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/AlertStrip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ConfirmDialog.jsx
try { (() => {
/** Confirm dialog card: 16px title, 14px grey body, right-aligned secondary + primary/danger pair. Wrap in your own scrim. */
function ConfirmDialog({
  title,
  body,
  cancelLabel = 'Cancel',
  confirmLabel = 'Confirm',
  destructive = false,
  onCancel,
  onConfirm,
  width = 440,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    strong: true,
    padding: 20,
    style: {
      width,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500
    }
  }, title), body && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.5
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    onClick: onCancel
  }, cancelLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: destructive ? 'dangerSolid' : 'primary',
    size: "sm",
    onClick: onConfirm
  }, confirmLabel)));
}

/** Scrim + centered dialog. */
function Modal({
  open = true,
  children,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(6,11,20,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation()
  }, children));
}
Object.assign(__ds_scope, { ConfirmDialog, Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ConfirmDialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
/** Centered empty state inside a card: 20px grey icon, 16px title, 14px grey body, one primary button. */
function EmptyState({
  icon = 'target',
  title,
  body,
  action,
  compact = false,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: compact ? 28 : 32,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: compact ? 6 : 8,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, !compact && icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: compact ? 14 : 16,
      fontWeight: 500
    }
  }, title), body && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: compact ? 13 : 14,
      color: 'var(--text-secondary)'
    }
  }, body), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/SidePanel.jsx
try { (() => {
/**
 * Right-hand side panel, 440px. Header (14px 500 title + X), scrolling body, footer with the single primary action.
 * `inline` renders it as a card for previews; otherwise it is fixed to the right edge with a scrim.
 */
function SidePanel({
  title,
  children,
  footer,
  onClose,
  open = true,
  inline = false,
  width = 440,
  height,
  busy = false,
  style
}) {
  if (!open) return null;
  const panel = /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height: height || (inline ? undefined : '100%'),
      background: 'var(--surface-card)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: inline ? 'var(--radius-card)' : 0,
      borderRight: inline ? undefined : 'none',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: inline ? '12px 14px' : '16px 20px',
      borderBottom: '1px solid var(--hairline)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: inline ? 14 : 16,
      fontWeight: 500
    }
  }, title), onClose && !busy && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 16,
    color: "var(--text-secondary)",
    onClick: onClose,
    style: {
      cursor: 'pointer'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: inline ? 14 : 20,
      flex: 1,
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: inline ? 10 : 16,
      opacity: busy ? 0.5 : 1,
      pointerEvents: busy ? 'none' : 'auto'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: inline ? '12px 14px' : '16px 20px',
      borderTop: '1px solid var(--hairline)',
      flex: 'none'
    }
  }, footer));
  if (inline) return panel;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(6,11,20,0.6)',
      display: 'flex',
      justifyContent: 'flex-end',
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      height: '100%'
    }
  }, panel));
}
Object.assign(__ds_scope, { SidePanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/SidePanel.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Stepper.jsx
try { (() => {
function Dot({
  state,
  size = 20
}) {
  const s = {
    width: size,
    height: size,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 'none'
  };
  if (state === 'done') return /*#__PURE__*/React.createElement("span", {
    style: {
      ...s,
      background: 'var(--success)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: Math.round(size * 0.6),
    strokeWidth: 3,
    color: "var(--navy)"
  }));
  if (state === 'current') return /*#__PURE__*/React.createElement("span", {
    style: {
      ...s,
      border: '2px solid var(--accent)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--accent)'
    }
  }));
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...s,
      border: '1px solid var(--hairline-hover)'
    }
  });
}

/** Progress stepper. steps: string[]; `current` index (steps before it are done). Horizontal (payout flow) or vertical (checkout). */
function Stepper({
  steps = [],
  current = 0,
  orientation = 'horizontal',
  descriptions = [],
  style
}) {
  const stateOf = i => i < current ? 'done' : i === current ? 'current' : 'todo';
  const color = st => st === 'done' ? 'var(--success)' : st === 'current' ? 'var(--text-primary)' : 'var(--text-secondary)';
  if (orientation === 'vertical') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        fontSize: 12,
        fontFamily: 'var(--font-body)',
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, steps.map((_, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement(Dot, {
      state: stateOf(i)
    }), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        flex: 1,
        minHeight: 20,
        background: stateOf(i) === 'done' ? 'var(--success)' : 'var(--border-control)'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        lineHeight: '20px',
        color: color(stateOf(i))
      }
    }, s, descriptions[i] && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-secondary)'
      }
    }, " \xB7 ", descriptions[i])))));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 12,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, steps.map((s, i) => {
    const st = stateOf(i);
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        color: color(st),
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement(Dot, {
      state: st
    }), s), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: st === 'done' ? 'var(--success)' : 'var(--border-control)',
        margin: '0 8px'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/** Toast: surface-2, 14% border, 12px radius, 320px wide. Green check for success, red close for error. */
function Toast({
  tone = 'success',
  children,
  onDismiss,
  style
}) {
  const iconColor = tone === 'error' ? 'var(--danger)' : tone === 'warning' ? 'var(--warning)' : 'var(--success)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 14px',
      borderRadius: 'var(--radius-card)',
      background: 'var(--surface-tile)',
      border: '1px solid var(--border-control)',
      fontSize: 13,
      width: 320,
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: tone === 'error' ? 'close' : 'check',
    size: 16,
    strokeWidth: 2,
    color: iconColor
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), onDismiss && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 14,
    color: "var(--text-secondary)",
    onClick: onDismiss,
    style: {
      cursor: 'pointer'
    }
  }));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** 18px checkbox: accent fill with navy check when on, 24% hairline when off. */
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      cursor: disabled ? 'default' : 'pointer',
      fontFamily: 'var(--font-body)',
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-sm)',
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked ? 'var(--accent)' : 'transparent',
      border: checked ? 'none' : `1px solid ${disabled ? 'var(--border-disabled)' : 'var(--hairline-hover)'}`,
      transition: 'background var(--duration-fast) var(--ease)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12,
    strokeWidth: 3,
    color: "var(--navy)"
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FilterChips.jsx
try { (() => {
/** Pill filter chips (13px, 5×12 padding). Selected = white fill, navy text. Hover = surface-2 + 24% border. */
function FilterChips({
  options = [],
  value,
  onChange,
  multiple = false,
  style
}) {
  const [hover, setHover] = React.useState(null);
  const selected = multiple ? Array.isArray(value) ? value : [] : [value];
  const toggle = v => {
    if (!onChange) return;
    if (!multiple) return onChange(v);
    onChange(selected.includes(v) ? selected.filter(x => x !== v) : [...selected, v]);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, options.map(o => {
    if (o === '|') return /*#__PURE__*/React.createElement("span", {
      key: "sep",
      style: {
        width: 1,
        background: 'rgba(255,255,255,0.12)',
        margin: '0 8px'
      }
    });
    const label = typeof o === 'string' ? o : o.label,
      v = typeof o === 'string' ? o : o.value;
    const on = selected.includes(v),
      h = hover === v;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: v,
      onClick: () => toggle(v),
      onMouseEnter: () => setHover(v),
      onMouseLeave: () => setHover(null),
      style: {
        fontSize: 13,
        lineHeight: 1.4,
        padding: 'var(--chip-padding)',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        fontFamily: 'inherit',
        outline: 'none',
        transition: 'all var(--duration-fast) var(--ease)',
        background: on ? 'var(--white)' : h ? 'var(--surface-tile)' : 'transparent',
        color: on ? 'var(--navy)' : h ? 'var(--text-primary)' : 'var(--text-secondary)',
        border: on ? '1px solid var(--white)' : `1px solid ${h ? 'var(--hairline-hover)' : 'var(--border-control)'}`
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { FilterChips });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FilterChips.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input, 40px, ink fill, 14% border. Accent border + 3px ring on focus, red border + helper on error. */
function Input({
  label,
  value,
  defaultValue,
  placeholder,
  error,
  hint,
  disabled = false,
  suffix,
  size = 'md',
  onChange,
  style,
  inputStyle,
  type = 'text',
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 36 : 40;
  const border = error ? 'var(--danger)' : focus ? 'var(--accent)' : disabled ? 'var(--border-disabled)' : 'var(--border-control)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      height: h,
      borderRadius: 'var(--radius-control)',
      border: `1px solid ${border}`,
      background: 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px',
      gap: 8,
      boxShadow: focus && !error ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease), box-shadow var(--duration-fast) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      fontSize: size === 'sm' ? 13 : 14,
      fontFamily: 'inherit',
      fontVariantNumeric: 'tabular-nums',
      padding: 0,
      ...inputStyle
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--accent)',
      fontWeight: 500,
      cursor: 'pointer',
      flex: 'none'
    }
  }, suffix)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--danger)',
      marginTop: -2
    }
  }, error), !error && hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      marginTop: -2
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Segmented.jsx
try { (() => {
/** Segmented range control (30d / 90d / 1y): surface-2 track, ink selected segment, 12px text. */
function Segmented({
  options = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      background: 'var(--surface-tile)',
      borderRadius: 'var(--radius-control)',
      padding: 3,
      fontSize: 12,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, options.map(o => {
    const label = typeof o === 'string' ? o : o.label,
      v = typeof o === 'string' ? o : o.value;
    const on = v === value;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: v,
      onClick: () => onChange && onChange(v),
      style: {
        padding: '5px 12px',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        outline: 'none',
        background: on ? 'var(--surface-card)' : 'transparent',
        color: on ? 'var(--text-primary)' : 'var(--text-secondary)',
        transition: 'background var(--duration-fast) var(--ease)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Segmented });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Segmented.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/** Select trigger: 36/40px outlined field with chevron. Renders a native select for behaviour. */
function Select({
  label,
  value,
  options = [],
  onChange,
  disabled = false,
  size = 'md',
  style
}) {
  const h = size === 'sm' ? 36 : 40;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      height: h,
      borderRadius: 'var(--radius-control)',
      border: `1px solid ${disabled ? 'var(--border-disabled)' : 'var(--border-control)'}`,
      background: 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 10px',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      fontSize: size === 'sm' ? 13 : 14
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    disabled: disabled,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'inherit',
      fontSize: 'inherit',
      fontFamily: 'inherit',
      padding: 0,
      cursor: disabled ? 'default' : 'pointer'
    }
  }, options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o,
    style: {
      background: '#0b1220'
    }
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value,
    style: {
      background: '#0b1220'
    }
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronDown",
    size: 14,
    color: "var(--text-secondary)",
    style: {
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** 34×20 toggle: accent track with navy knob when on; surface-2 track, grey knob when off. */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      cursor: disabled ? 'default' : 'pointer',
      fontFamily: 'var(--font-body)',
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 20,
      borderRadius: 10,
      position: 'relative',
      flex: 'none',
      background: checked ? 'var(--accent)' : 'var(--surface-tile)',
      border: checked ? 'none' : '1px solid var(--border-control)',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--duration) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: checked ? 2 : 1,
      left: checked ? 16 : 1,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: checked ? 'var(--navy)' : 'var(--grey)',
      transition: 'left var(--duration) var(--ease)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Tabs.jsx
try { (() => {
/** Underline tabs (Simple / Advanced): 14px, 24px gap, 2px accent underline on the active tab, hairline baseline. */
function Tabs({
  tabs = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      fontSize: 14,
      borderBottom: '1px solid var(--hairline)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, tabs.map(t => {
    const label = typeof t === 'string' ? t : t.label,
      v = typeof t === 'string' ? t : t.value;
    const on = v === value;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: v,
      onClick: () => onChange && onChange(v),
      style: {
        padding: '8px 0',
        marginBottom: -1,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        outline: 'none',
        borderBottom: on ? '2px solid var(--accent)' : '2px solid transparent',
        color: on ? 'var(--text-primary)' : 'var(--text-secondary)',
        fontWeight: on ? 500 : 400
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/layout/MobileTabBar.jsx
try { (() => {
/** 64px mobile tab bar, 5 slots, 20px icon over 11px label; active item takes the accent. Last slot is "More". */
function MobileTabBar({
  items = [],
  active,
  onNavigate,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      borderTop: '1px solid var(--hairline)',
      background: 'var(--bg-page)',
      display: 'grid',
      gridTemplateColumns: `repeat(${items.length || 5},1fr)`,
      alignItems: 'center',
      paddingBottom: 6,
      fontSize: 11,
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-body)',
      flex: 'none',
      ...style
    }
  }, items.map(i => {
    const on = i.key === active;
    return /*#__PURE__*/React.createElement("div", {
      key: i.key,
      onClick: () => onNavigate && onNavigate(i.key),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        color: on ? 'var(--accent)' : undefined,
        fontWeight: on ? 500 : 400,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: i.icon
    }), i.label);
  }));
}
Object.assign(__ds_scope, { MobileTabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/MobileTabBar.jsx", error: String((e && e.message) || e) }); }

// components/layout/PageHeader.jsx
try { (() => {
/** Page title row: 24px/500 title, 14px grey subtitle, right-aligned action slot (the one primary button). */
function PageHeader({
  title,
  subtitle,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 500,
      lineHeight: 1.2
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, subtitle)), action && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none'
    }
  }, action));
}

/** Desktop app frame: 240px sidebar + 56px top bar + scrolling main. Set `workspace` to switch the accent. */
function AppShell({
  workspace = 'trade',
  sidebar,
  topbar,
  children,
  width = '100%',
  height = '100%',
  density,
  style
}) {
  const pad = (density || workspace) === 'invest' ? '32px' : '24px 32px';
  const gap = (density || workspace) === 'invest' ? 24 : 16;
  return /*#__PURE__*/React.createElement("div", {
    "data-workspace": workspace,
    className: "opofi-root",
    style: {
      width,
      height,
      background: 'var(--bg-page)',
      display: 'grid',
      gridTemplateColumns: '240px 1fr',
      gridTemplateRows: '56px 1fr',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridRow: '1 / 3',
      minHeight: 0
    }
  }, sidebar), topbar, /*#__PURE__*/React.createElement("main", {
    style: {
      padding: pad,
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap,
      minHeight: 0
    }
  }, children));
}
Object.assign(__ds_scope, { PageHeader, AppShell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/layout/TopBar.jsx
try { (() => {
/** 56px top bar: breadcrumb (grey → white current), available-balance chip, bell with accent dot, avatar. */
function TopBar({
  crumbs = ['Trade'],
  available = '$2,030.00',
  hasNotification = true,
  user = {
    initials: 'SK'
  },
  onBell,
  onAvailable,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
      borderBottom: '1px solid var(--hairline)',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, crumbs.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: i === crumbs.length - 1 && crumbs.length > 1 ? 'var(--text-primary)' : undefined
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onAvailable,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 36,
      padding: '0 12px',
      border: '1px solid var(--hairline)',
      borderRadius: 8,
      background: 'var(--surface-card)',
      fontSize: 13,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Available"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, available)), /*#__PURE__*/React.createElement("div", {
    onClick: onBell,
    style: {
      position: 'relative',
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-secondary)',
      borderRadius: 8,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bell"
  }), hasNotification && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      right: 9,
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--accent)',
      border: '2px solid var(--bg-page)'
    }
  })), /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    initials: user.initials
  })));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/TopBar.jsx", error: String((e && e.message) || e) }); }

// components/layout/WorkspaceSwitch.jsx
try { (() => {
/** "Go to Invest →" / "Go to Trade →" outlined switch. The arrow takes the destination workspace's accent. */
function WorkspaceSwitch({
  target = 'invest',
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const label = target === 'invest' ? 'Go to Invest' : 'Go to Trade';
  const arrow = target === 'invest' ? 'var(--accent-invest)' : 'var(--accent-trade)';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      height: 36,
      borderRadius: 'var(--radius-control)',
      border: `1px solid ${h ? 'var(--hairline-hover)' : 'var(--border-control)'}`,
      background: h ? 'var(--surface-card)' : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-primary)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      transition: 'all var(--duration-fast) var(--ease)',
      ...style
    }
  }, label, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: arrow
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { WorkspaceSwitch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/WorkspaceSwitch.jsx", error: String((e && e.message) || e) }); }

// components/layout/Sidebar.jsx
try { (() => {
const TRADE_NAV = [{
  key: 'dashboard',
  label: 'Dashboard',
  icon: 'dashboard'
}, {
  key: 'challenges',
  label: 'My challenges',
  icon: 'target'
}, {
  key: 'new',
  label: 'New challenge',
  icon: 'plusCircle'
}, {
  key: 'funded',
  label: 'Funded & payouts',
  icon: 'banknote'
}, {
  key: 'signals',
  label: 'Signals & tools',
  icon: 'activity'
}, {
  key: 'rules',
  label: 'Rulebook & certificates',
  icon: 'book'
}];
const INVEST_NAV = [{
  key: 'portfolio',
  label: 'Portfolio',
  icon: 'clock'
}, {
  key: 'products',
  label: 'Products',
  icon: 'layers'
}, {
  key: 'positions',
  label: 'My positions',
  icon: 'list'
}, {
  key: 'earnings',
  label: 'Earnings',
  icon: 'trendUp'
}, {
  key: 'calendar',
  label: 'Maturity calendar',
  icon: 'calendar'
}];
const SHARED_NAV = [{
  key: 'wallet',
  label: 'Wallet',
  icon: 'wallet'
}, {
  key: 'account',
  label: 'Account',
  icon: 'user'
}, {
  key: 'referrals',
  label: 'Referrals',
  icon: 'users'
}, {
  key: 'support',
  label: 'Support',
  icon: 'help'
}];
function NavItem({
  item,
  active,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '9px 12px',
      fontSize: 14,
      cursor: 'pointer',
      color: active ? 'var(--accent)' : h ? 'var(--text-primary)' : 'var(--text-secondary)',
      fontWeight: active ? 500 : 400,
      borderLeft: active ? '3px solid var(--accent)' : '3px solid transparent',
      marginLeft: -12,
      paddingLeft: 21,
      transition: 'color var(--duration-fast) var(--ease)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: item.icon
  }), item.label);
}

/**
 * 240px sidebar. Logo, workspace label, workspace nav, "Go to <other>" switch, hairline, shared nav, user footer.
 * workspace: 'trade' | 'invest'. Set data-workspace on an ancestor so --accent resolves.
 */
function Sidebar({
  workspace = 'trade',
  active,
  onNavigate,
  onSwitchWorkspace,
  user = {
    name: 'Sara K.',
    initials: 'SK',
    verified: true
  },
  base = '',
  style
}) {
  const nav = workspace === 'invest' ? INVEST_NAV : TRADE_NAV;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      height: '100%',
      borderRight: '1px solid var(--hairline)',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 12px',
      background: 'var(--bg-page)',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 8px 20px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    base: base,
    height: 28
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 12px 12px',
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, workspace === 'invest' ? 'Invest' : 'Trade'), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, nav.map(i => /*#__PURE__*/React.createElement(NavItem, {
    key: i.key,
    item: i,
    active: active === i.key,
    onClick: () => onNavigate && onNavigate(i.key)
  }))), /*#__PURE__*/React.createElement(__ds_scope.WorkspaceSwitch, {
    target: workspace === 'invest' ? 'trade' : 'invest',
    onClick: onSwitchWorkspace,
    style: {
      margin: '12px 4px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--hairline)',
      margin: '16px 4px'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, SHARED_NAV.map(i => /*#__PURE__*/React.createElement(NavItem, {
    key: i.key,
    item: i,
    active: active === i.key,
    onClick: () => onNavigate && onNavigate(i.key)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 8px',
      borderRadius: 8,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    initials: user.initials
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, user.name), user.verified && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--success)',
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12,
    strokeWidth: 2
  }), "Verified")), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronDown",
    size: 16,
    color: "var(--text-secondary)"
  })));
}
Object.assign(__ds_scope, { TRADE_NAV, INVEST_NAV, SHARED_NAV, Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/product/AccountCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PILL_TONE = {
  'Near limit': 'warning',
  Active: 'trade',
  Funded: 'success',
  Passed: 'success',
  Breached: 'danger',
  'Payout pending': 'warning'
};

/**
 * Challenge / funded account card (Trade). Header (title, meta, status pill), 4 metric tiles, limit bars, footer links.
 * Breached accounts: red border, red message and a retry CTA instead of metrics.
 */
function AccountCard({
  title,
  meta,
  status = 'Active',
  metrics = [],
  limits = [],
  footer,
  links = ['Credentials', 'Open account'],
  breachMessage,
  retryLabel = 'Retry with 20% off',
  onRetry,
  onLink,
  style
}) {
  const breached = status === 'Breached';
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    danger: breached,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500
    }
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, meta)), /*#__PURE__*/React.createElement(__ds_scope.StatusPill, {
    tone: PILL_TONE[status] || 'neutral'
  }, status)), breached ? /*#__PURE__*/React.createElement(React.Fragment, null, breachMessage && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--danger)'
    }
  }, breachMessage), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onRetry,
    style: {
      alignSelf: 'flex-start'
    }
  }, retryLabel)) : /*#__PURE__*/React.createElement(React.Fragment, null, metrics.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${metrics.length},1fr)`,
      gap: 8
    }
  }, metrics.map((m, i) => /*#__PURE__*/React.createElement(__ds_scope.MetricTile, {
    key: i,
    tile: true,
    label: m.label,
    value: m.value,
    valueColor: m.tone === 'loss' ? 'var(--loss)' : m.tone === 'profit' ? 'var(--profit)' : undefined
  }))), limits.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, limits.map((l, i) => /*#__PURE__*/React.createElement(__ds_scope.LimitBar, _extends({
    key: i
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 12,
      color: 'var(--text-secondary)',
      paddingTop: 8,
      borderTop: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", null, footer), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: l,
    onClick: () => onLink && onLink(l),
    style: {
      color: i === links.length - 1 ? 'var(--accent)' : 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, l))))));
}
Object.assign(__ds_scope, { AccountCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/AccountCard.jsx", error: String((e && e.message) || e) }); }

// components/product/PositionCard.jsx
try { (() => {
const TONE = {
  'In profit': 'success',
  'At breakeven': 'neutral',
  'In loss': 'danger',
  Locked: 'neutral',
  Flexible: 'invest',
  Matured: 'invest',
  Paid: 'success'
};

/** Invest position card: title + asset line, status pill, principal / current value pair, helper sentence, transfer button (disabled when nothing to transfer). */
function PositionCard({
  title,
  meta,
  status = 'In profit',
  principal,
  value,
  delta,
  note,
  actionLabel = 'Transfer profit',
  actionDisabled = false,
  onAction,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: 20,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500
    }
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, meta)), /*#__PURE__*/React.createElement(__ds_scope.StatusPill, {
    tone: TONE[status] || 'neutral'
  }, status)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "Principal"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      marginTop: 2
    }
  }, principal)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "Current value"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      marginTop: 2
    }
  }, value, delta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: status === 'In loss' ? 'var(--loss)' : 'var(--profit)',
      marginLeft: 6
    }
  }, delta)))), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, note), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: actionDisabled ? 'secondary' : 'invest',
    size: "sm",
    disabled: actionDisabled,
    onClick: onAction,
    fullWidth: true
  }, actionLabel));
}

/** Product offer card (Fixed invest / Flexible staking): title, one-line promise, rate tiles, fact grid, CTA. */
function ProductCard({
  title,
  description,
  badge,
  badgeTone = 'neutral',
  rates = [],
  facts = [],
  ctaLabel = 'Start',
  ctaVariant = 'invest',
  onCta,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: 24,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 500
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, description)), badge && /*#__PURE__*/React.createElement(__ds_scope.StatusPill, {
    tone: badgeTone
  }, badge)), rates.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${rates.length},1fr)`,
      gap: 8
    }
  }, rates.map((r, i) => /*#__PURE__*/React.createElement(__ds_scope.Card, {
    key: i,
    tile: true,
    padding: 14
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 500,
      marginTop: 2
    }
  }, r.value), r.sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, r.sub)))), facts.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '8px 20px',
      fontSize: 14,
      lineHeight: 1.4
    }
  }, facts.map((f, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, f.label), /*#__PURE__*/React.createElement("span", null, f.value)))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: ctaVariant,
    onClick: onCta,
    fullWidth: true,
    style: {
      marginTop: 'auto'
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { PositionCard, ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/PositionCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/DetailScreens.jsx
try { (() => {
const DS3 = window.OpofiDesignSystem_dbd458;
const {
  Button: B3,
  Card: C3,
  MetricTile: M3,
  LineChart: LC3,
  DataTable: DT3,
  StatusPill: SP3,
  Modal,
  ConfirmDialog,
  SidePanel,
  Select,
  Input,
  Checkbox,
  Stepper: St3,
  Icon: I3,
  PageHeader: PH3,
  DataTable: DT3b
} = DS3;
function PositionDetail({
  go,
  showToast
}) {
  const [confirm, setConfirm] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      flex: 1,
      minHeight: 0,
      position: 'relative',
      margin: -32,
      padding: '32px 32px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 500
    }
  }, "Profit share \xB7 USDT"), /*#__PURE__*/React.createElement(SP3, {
    tone: "success"
  }, "In profit"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginLeft: 'auto'
    }
  }, "Started 12 Aug 2026 \xB7 Position #PS-2041")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(M3, {
    size: "lg",
    label: "Principal",
    value: "1,000.00 USDT",
    style: {
      padding: 16
    }
  }), /*#__PURE__*/React.createElement(M3, {
    size: "lg",
    label: "Current value",
    value: "1,042.50 USDT",
    style: {
      padding: 16
    }
  }), /*#__PURE__*/React.createElement(M3, {
    size: "lg",
    label: "Profit you can transfer",
    value: "42.50 USDT",
    valueColor: "var(--profit)",
    style: {
      padding: 16
    }
  }), /*#__PURE__*/React.createElement(M3, {
    size: "lg",
    label: "Return since start",
    value: "+4.25%",
    sub: "36 days",
    style: {
      padding: 16
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(C3, {
    padding: 24,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500
    }
  }, "Value"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "Dashed line is your principal")), /*#__PURE__*/React.createElement(LC3, {
    height: 200,
    gridLines: 0,
    data: [1000, 996, 1001, 993, 1005, 1008, 1004, 1012, 1015, 1019, 1022, 1025, 1031, 1042],
    thresholds: [{
      value: 1000,
      label: '1,000.00'
    }],
    xLabels: ['12 Aug', 'Today']
  })), /*#__PURE__*/React.createElement(C3, {
    padding: 24,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontSize: 14,
      lineHeight: 1.55
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500
    }
  }, "How this position works"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Your 1,000.00 USDT funds a pool traded by Opofi bots inside the prop firm. The pool's result is shared with you."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "You can move out only the profit above 1,000.00 USDT. At breakeven or in loss, there is nothing to move."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Cancelling returns whatever the position is worth right now, which may be less than 1,000.00 USDT."))), /*#__PURE__*/React.createElement(DT3, {
    title: "History",
    rowHeight: 44,
    columns: [{
      key: 'd',
      label: 'Date'
    }, {
      key: 'e',
      label: 'Event',
      width: '1.5fr'
    }, {
      key: 'a',
      label: 'Amount',
      align: 'right',
      render: (v, r) => /*#__PURE__*/React.createElement("span", {
        style: {
          color: r.pos ? 'var(--profit)' : undefined
        }
      }, v)
    }, {
      key: 's',
      label: 'Status',
      align: 'right',
      render: v => v === 'Confirmed' ? /*#__PURE__*/React.createElement(SP3, {
        tone: "success"
      }, v) : /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-secondary)'
        }
      }, v)
    }],
    rows: [{
      d: '1 Sep 2026',
      e: 'Monthly result · pool +2.91%',
      a: '+28.40 USDT',
      pos: true,
      s: 'Added to value'
    }, {
      d: '12 Aug 2026',
      e: 'Position started',
      a: '1,000.00 USDT',
      s: 'Confirmed'
    }],
    style: {
      marginBottom: 80
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      bottom: 0,
      marginTop: 'auto',
      marginLeft: -32,
      marginRight: -32,
      padding: '16px 32px',
      background: 'var(--bg-page)',
      borderTop: '1px solid var(--hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(B3, {
    variant: "danger",
    onClick: () => setConfirm(true)
  }, "Cancel position"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "Goes to your wallet instantly"), /*#__PURE__*/React.createElement(B3, {
    onClick: () => showToast('42.50 USDT transferred to your wallet')
  }, "Transfer 42.50 USDT"))), /*#__PURE__*/React.createElement(Modal, {
    open: confirm,
    onClose: () => setConfirm(false)
  }, /*#__PURE__*/React.createElement(ConfirmDialog, {
    destructive: true,
    title: "Cancel this position?",
    body: "1,042.50 USDT will be returned to your wallet within 24 hours. Your position stops earning immediately.",
    cancelLabel: "Keep position",
    confirmLabel: "Cancel and return 1,042.50 USDT",
    onCancel: () => setConfirm(false),
    onConfirm: () => {
      setConfirm(false);
      go('portfolio');
      showToast('Position cancelled · 1,042.50 USDT on its way');
    }
  })));
}
function WalletScreen({
  openPanel
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PH3, {
    title: "Wallet",
    subtitle: "$2,030.00 available \xB7 $2,656.72 deployed",
    action: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(B3, {
      variant: "secondary",
      size: "sm",
      onClick: () => openPanel('withdraw')
    }, "Withdraw"), /*#__PURE__*/React.createElement(B3, {
      variant: "shared",
      size: "sm",
      onClick: () => openPanel('deposit')
    }, "Deposit"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(M3, {
    label: "USDT",
    value: "2,030.00",
    sub: "TRC20 \xB7 $2,030.00"
  }), /*#__PURE__*/React.createElement(M3, {
    label: "ETH",
    value: "0.250",
    sub: "ERC20 \xB7 locked in Fixed invest"
  }), /*#__PURE__*/React.createElement(M3, {
    label: "BTC",
    value: "0.000",
    sub: "\u2014"
  }), /*#__PURE__*/React.createElement(M3, {
    label: "TON",
    value: "0.00",
    sub: "\u2014"
  })), /*#__PURE__*/React.createElement(DT3b, {
    title: "Transactions",
    rowHeight: 40,
    columns: [{
      key: 'd',
      label: 'Date'
    }, {
      key: 't',
      label: 'Type',
      width: '1.4fr',
      strong: true
    }, {
      key: 'n',
      label: 'Network',
      muted: true
    }, {
      key: 'a',
      label: 'Amount',
      align: 'right'
    }, {
      key: 's',
      label: 'Status',
      align: 'right',
      render: v => /*#__PURE__*/React.createElement(SP3, {
        tone: {
          Confirmed: 'success',
          Paid: 'success',
          Pending: 'warning',
          Rejected: 'danger'
        }[v]
      }, v)
    }],
    rows: [{
      d: '15 Sep 2026',
      t: 'Payout request',
      n: '—',
      a: '+$1,744.00',
      s: 'Pending'
    }, {
      d: '12 Aug 2026',
      t: 'Transfer to Profit share',
      n: '—',
      a: '−1,000.00 USDT',
      s: 'Confirmed'
    }, {
      d: '2 Aug 2026',
      t: 'Deposit',
      n: 'TRC20',
      a: '+3,000.00 USDT',
      s: 'Confirmed'
    }, {
      d: '30 Jul 2026',
      t: 'Withdrawal',
      n: 'TRC20',
      a: '−250.00 USDT',
      s: 'Paid'
    }]
  }));
}

/** Deposit / Withdraw / Checkout / Payout flows in one side panel: form → submitting → success. */
function FlowPanel({
  kind,
  arg,
  onClose,
  showToast
}) {
  const [step, setStep] = React.useState('form');
  const [asset, setAsset] = React.useState('USDT');
  const [net, setNet] = React.useState('TRC20');
  const [ok, setOk] = React.useState(false);
  const submit = () => {
    setStep('busy');
    setTimeout(() => setStep('done'), 1200);
  };
  const titles = {
    deposit: 'Deposit',
    withdraw: 'Withdraw',
    checkout: 'Checkout',
    payout: 'Request payout'
  };
  const primary = kind === 'checkout' ? 'primary' : 'shared';
  if (step === 'done') return /*#__PURE__*/React.createElement(SidePanel, {
    title: titles[kind],
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(B3, {
      variant: primary,
      fullWidth: true,
      onClick: onClose
    }, kind === 'checkout' ? 'Open account' : 'Done')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      textAlign: 'center',
      minHeight: 240
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--success-tint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(I3, {
    name: "check",
    size: 16,
    strokeWidth: 2.5,
    color: "var(--success)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 500
    }
  }, kind === 'checkout' ? `Your ${arg} challenge is live` : kind === 'payout' ? '$1,744.00 requested' : kind === 'withdraw' ? '249.00 USDT on its way' : 'Address ready'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, kind === 'checkout' ? 'Credentials arrive within 10 minutes.' : kind === 'payout' ? 'Reviews take up to 2 business days.' : kind === 'withdraw' ? 'TRC20 transfers usually land within 5 minutes.' : 'Send only USDT on TRC20 to this address.')));
  const busy = step === 'busy';
  return /*#__PURE__*/React.createElement(SidePanel, {
    title: titles[kind],
    onClose: onClose,
    busy: busy,
    footer: /*#__PURE__*/React.createElement(B3, {
      variant: primary,
      fullWidth: true,
      loading: busy,
      disabled: kind === 'checkout' && !ok,
      onClick: submit
    }, busy ? 'Submitting…' : kind === 'deposit' ? 'Continue' : kind === 'withdraw' ? 'Withdraw 250.00 USDT' : kind === 'checkout' ? `Pay ${arg === '$50K' ? '$299' : '$199'} from wallet` : 'Request $1,744.00')
  }, kind === 'checkout' && /*#__PURE__*/React.createElement(St3, {
    orientation: "vertical",
    steps: ['Size and platform', 'Rules acknowledgement', 'Payment'],
    current: 1
  }), (kind === 'deposit' || kind === 'withdraw') && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Select, {
    label: "Asset",
    options: ['USDT', 'BTC', 'ETH', 'TON'],
    value: asset,
    onChange: setAsset
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Network",
    options: ['TRC20', 'ERC20'],
    value: net,
    onChange: setNet
  })), kind === 'withdraw' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
    label: "Amount",
    defaultValue: "250.00",
    suffix: "Max"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Address",
    defaultValue: "TQn4\u20268xKp"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "You receive"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      marginTop: -10
    }
  }, "249.00 USDT ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "\xB7 1.00 USDT network fee"))), kind === 'deposit' && /*#__PURE__*/React.createElement(C3, {
    tile: true,
    padding: 14,
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      lineHeight: 1.5
    }
  }, "Minimum deposit 50 USDT. Funds appear after 1 network confirmation."), kind === 'checkout' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '8px 20px',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Size"), /*#__PURE__*/React.createElement("span", null, arg, " \xB7 MT5"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Rules"), /*#__PURE__*/React.createElement("span", null, "v1 \xB7 5% daily \xB7 10% max drawdown")), /*#__PURE__*/React.createElement(Checkbox, {
    checked: ok,
    onChange: setOk,
    label: "I accept rules v1"
  })), kind === 'payout' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(M3, {
    label: "Your share",
    value: "$1,744.00",
    sub: "80% of $2,180 available profit"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Pay to",
    options: ['Wallet · USDT'],
    value: "Wallet \xB7 USDT"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "Next eligible 28 Sep 2026. Requesting now locks today's profit.")));
}
Object.assign(window, {
  PositionDetail,
  WalletScreen,
  FlowPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/DetailScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/InvestScreens.jsx
try { (() => {
const DS2 = window.OpofiDesignSystem_dbd458;
const {
  PageHeader: PH,
  Button: Btn,
  Card: Cd,
  MetricTile: MT,
  Segmented,
  LineChart,
  BarChart,
  DataTable: DT,
  StatusPill: SP,
  Tabs,
  FilterChips: FC,
  ProductCard,
  Icon
} = DS2;
const POS_COLS = [{
  key: 'name',
  label: 'Position',
  width: '1.6fr',
  strong: true
}, {
  key: 'rate',
  label: 'Rate',
  muted: true
}, {
  key: 'value',
  label: 'Value',
  align: 'right',
  width: '1.2fr'
}, {
  key: 'pl',
  label: 'Profit',
  align: 'right',
  render: v => /*#__PURE__*/React.createElement("span", {
    style: {
      color: v.startsWith('−') ? 'var(--loss)' : 'var(--profit)'
    }
  }, v)
}, {
  key: 'note',
  label: '',
  align: 'right',
  width: '1.6fr',
  muted: true
}];
const POS_ROWS = [{
  id: 'fs',
  name: 'Flexible staking · USDT',
  rate: '12% APY',
  value: '503.12 USDT',
  pl: '+3.12',
  note: 'Withdraw profit anytime'
}, {
  id: 'fi',
  name: 'Fixed invest · ETH',
  rate: '90 days at 18%',
  value: '0.271 ETH',
  pl: '+0.021',
  note: 'Locked until 14 Dec'
}, {
  id: 'ps',
  name: 'Profit share · USDT',
  rate: 'Bot-traded pool',
  value: '1,042.50 USDT',
  pl: '+42.50',
  note: 'Cancel returns live value'
}];
function InvestPortfolio({
  go,
  openPanel
}) {
  const [range, setRange] = React.useState('30d');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PH, {
    title: "Portfolio",
    subtitle: "Your deposits fund traders in the Opofi prop firm. Their trading profit pays your return.",
    action: /*#__PURE__*/React.createElement(Btn, {
      variant: "shared",
      size: "sm",
      onClick: () => openPanel('deposit')
    }, "Deposit")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Cd, {
    padding: 24,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "Total value"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36,
      fontWeight: 500,
      marginTop: 2,
      lineHeight: 1.1
    }
  }, "$2,656.72"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      fontSize: 13,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--profit)'
    }
  }, "+$4.18"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "24h")), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--profit)'
    }
  }, "+$131.72"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "30d")))), /*#__PURE__*/React.createElement(Segmented, {
    options: ['30d', '90d', '1y'],
    value: range,
    onChange: setRange
  })), /*#__PURE__*/React.createElement(LineChart, {
    height: 200,
    data: range === '30d' ? [2525, 2529, 2535, 2533, 2545, 2555, 2559, 2565, 2577, 2587, 2595, 2609, 2621, 2635, 2657] : [2400, 2410, 2430, 2445, 2470, 2500, 2525, 2560, 2600, 2657],
    xLabels: range === '30d' ? ['18 Aug', '2 Sep', 'Today'] : ['Jun', 'Aug', 'Today']
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 8,
      height: 8,
      borderRadius: 2,
      background: 'var(--accent)',
      marginRight: 6
    }
  }), "Deployed $2,656.72"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 8,
      height: 8,
      borderRadius: 2,
      background: 'var(--grey)',
      marginRight: 6
    }
  }), "Available $2,030.00")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 8,
      borderRadius: 4,
      overflow: 'hidden',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '56.7%',
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--grey)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Cd, {
    padding: 24,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500
    }
  }, "Next payout"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "14 Dec 2026 \xB7 Fixed invest matures"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 500,
      marginTop: 2
    }
  }, "0.271 ETH"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, "Principal 0.250 ETH plus 0.021 ETH profit, paid to your wallet automatically."))), /*#__PURE__*/React.createElement(Cd, {
    padding: "20px 24px",
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trendUp",
    color: "var(--text-secondary)",
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 13,
      color: 'var(--text-secondary)',
      lineHeight: 1.5
    }
  }, "Traders using your capital are up this month. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      cursor: 'pointer'
    }
  }, "See how funding works"))))), /*#__PURE__*/React.createElement(DT, {
    title: "Positions",
    action: "View all",
    rowHeight: 48,
    columns: POS_COLS,
    rows: POS_ROWS,
    onRowClick: r => go('position', r.id)
  }));
}
function InvestProducts({
  go
}) {
  const [tab, setTab] = React.useState('Simple');
  const [f, setF] = React.useState('All assets');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PH, {
    title: "Products",
    subtitle: "Every product funds traders in the Opofi prop firm. Their trading profit pays your return.",
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--accent)',
        height: 36,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
      }
    }, "Which is right for me?")
  }), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Simple', 'Advanced'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement(FC, {
    options: ['All assets', 'USDT', 'BTC', 'ETH', 'TON', '|', 'Locked', 'Anytime'],
    value: f,
    onChange: setF
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: tab === 'Simple' ? '1fr 1fr' : '1fr 1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(ProductCard, {
    title: "Fixed invest",
    description: "Lock it for a set time, get a fixed return.",
    badge: "Locked",
    rates: [{
      label: '30 days',
      value: '5%',
      sub: '100 USDT becomes 105 USDT'
    }, {
      label: '90 days',
      value: '18%',
      sub: '100 USDT becomes 118 USDT'
    }],
    facts: [{
      label: 'Assets',
      value: 'USDT, BTC, ETH, TON'
    }, {
      label: 'Minimum',
      value: '50 USDT or equivalent'
    }, {
      label: 'Withdraw',
      value: 'Not until the term ends'
    }, {
      label: 'Cancel',
      value: 'Not possible during the term'
    }, {
      label: 'At maturity',
      value: 'Principal and profit paid to your wallet automatically'
    }],
    onCta: () => go('start')
  }), /*#__PURE__*/React.createElement(ProductCard, {
    title: "Flexible staking",
    description: "Earn every day, take your money out any time.",
    badge: "Flexible",
    badgeTone: "invest",
    rates: [{
      label: 'USDT',
      value: '12%',
      sub: 'APY'
    }, {
      label: 'TON',
      value: '10%',
      sub: 'APY'
    }, {
      label: 'ETH',
      value: '7%',
      sub: 'APY'
    }, {
      label: 'BTC',
      value: '5%',
      sub: 'APY'
    }],
    facts: [{
      label: 'Assets',
      value: 'USDT, BTC, ETH, TON'
    }, {
      label: 'Minimum',
      value: '50 USDT or equivalent'
    }, {
      label: 'Withdraw',
      value: 'Profit anytime'
    }, {
      label: 'Cancel',
      value: 'Anytime, principal comes back'
    }, {
      label: 'Profit',
      value: 'Accrues daily'
    }],
    onCta: () => go('start')
  }), tab === 'Advanced' && /*#__PURE__*/React.createElement(ProductCard, {
    title: "Profit share",
    description: "Fund a bot-traded pool. Share its result.",
    badge: "Variable",
    badgeTone: "warning",
    rates: [{
      label: 'Last month',
      value: '+2.91%',
      sub: 'pool result'
    }],
    facts: [{
      label: 'Assets',
      value: 'USDT'
    }, {
      label: 'Minimum',
      value: '500 USDT'
    }, {
      label: 'Withdraw',
      value: 'Only profit above principal'
    }, {
      label: 'Cancel',
      value: 'Returns live value, may be below principal'
    }],
    onCta: () => go('start')
  })));
}
function InvestEarnings() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PH, {
    title: "Earnings",
    subtitle: "Everything your positions have paid or added since April",
    action: /*#__PURE__*/React.createElement(Btn, {
      variant: "secondary",
      size: "sm"
    }, "Export CSV")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 3fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(MT, {
    size: "xl",
    label: "Total earned",
    value: "$131.72",
    sub: "Across 3 positions \xB7 since 12 Apr 2026"
  }), /*#__PURE__*/React.createElement(MT, {
    size: "lg",
    label: "This month so far",
    value: "+$31.52",
    valueColor: "var(--profit)",
    sub: "Best month yet"
  })), /*#__PURE__*/React.createElement(Cd, {
    padding: 24,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500
    }
  }, "Monthly earnings"), /*#__PURE__*/React.createElement(BarChart, {
    height: 200,
    data: [{
      label: 'Apr',
      value: 8.1,
      valueLabel: '$8.10'
    }, {
      label: 'May',
      value: 14.3,
      valueLabel: '$14.30'
    }, {
      label: 'Jun',
      value: 18.2,
      valueLabel: '$18.20'
    }, {
      label: 'Jul',
      value: 24.6,
      valueLabel: '$24.60'
    }, {
      label: 'Aug',
      value: 35,
      valueLabel: '$35.00'
    }, {
      label: 'Sep',
      value: 31.52,
      valueLabel: '$31.52'
    }]
  }))), /*#__PURE__*/React.createElement(DT, {
    rowHeight: 44,
    columns: [{
      key: 'd',
      label: 'Date'
    }, {
      key: 'p',
      label: 'Position',
      width: '1.6fr',
      strong: true
    }, {
      key: 't',
      label: 'Type',
      width: '1.3fr',
      muted: true
    }, {
      key: 'a',
      label: 'Asset',
      width: '.7fr'
    }, {
      key: 'amt',
      label: 'Amount',
      align: 'right',
      render: v => /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--profit)'
        }
      }, v)
    }, {
      key: 's',
      label: 'Status',
      align: 'right',
      render: v => /*#__PURE__*/React.createElement(SP, {
        tone: v === 'Paid' ? 'success' : 'neutral'
      }, v)
    }],
    rows: [{
      d: '17 Sep 2026',
      p: 'Flexible staking · USDT',
      t: 'Reward',
      a: 'USDT',
      amt: '+0.16',
      s: 'Paid'
    }, {
      d: '16 Sep 2026',
      p: 'Flexible staking · USDT',
      t: 'Reward',
      a: 'USDT',
      amt: '+0.16',
      s: 'Paid'
    }, {
      d: '1 Sep 2026',
      p: 'Profit share · USDT',
      t: 'Monthly result',
      a: 'USDT',
      amt: '+28.40',
      s: 'Added to value'
    }, {
      d: '12 Jul 2026',
      p: 'Fixed invest · USDT · 30 days',
      t: 'Maturity payout',
      a: 'USDT',
      amt: '+15.00',
      s: 'Paid'
    }]
  }));
}
Object.assign(window, {
  InvestPortfolio,
  InvestProducts,
  InvestEarnings,
  POS_COLS,
  POS_ROWS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/InvestScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/TradeScreens.jsx
try { (() => {
const DS = window.OpofiDesignSystem_dbd458;
const {
  PageHeader,
  Button,
  AlertStrip,
  AccountCard,
  Card,
  MetricTile,
  Stepper,
  DataTable,
  StatusPill,
  FilterChips,
  EmptyState
} = DS;
function TradeDashboard({
  go,
  openPanel
}) {
  const [alert, setAlert] = React.useState(true);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Dashboard",
    subtitle: "Three accounts \xB7 updated 4s ago",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => go('new')
    }, "New challenge")
  }), alert && /*#__PURE__*/React.createElement(AlertStrip, {
    tone: "warning",
    action: "Open account",
    onDismiss: () => setAlert(false)
  }, "Your $100K challenge lost $1,380 today and has $3,620 left before the daily limit."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(AccountCard, {
    title: "$100K challenge \xB7 Phase 1",
    meta: "MT5 48213 \xB7 Rules v1 \xB7 Day 9",
    status: "Near limit",
    metrics: [{
      label: 'Balance',
      value: '$101,240'
    }, {
      label: 'Equity',
      value: '$100,860'
    }, {
      label: 'Today',
      value: '−$1,380',
      tone: 'loss'
    }, {
      label: 'Total P/L',
      value: '+$860',
      tone: 'profit'
    }],
    limits: [{
      label: 'Daily loss limit',
      used: 1380,
      total: 5000
    }, {
      label: 'Max drawdown',
      used: 860,
      total: 10000
    }, {
      label: 'Profit target',
      kind: 'target',
      used: 860,
      total: 8000
    }],
    footer: "Trading days 3 of 4 \xB7 Updated 4s ago",
    onLink: () => go('challenges')
  }), /*#__PURE__*/React.createElement(AccountCard, {
    title: "$25K challenge \xB7 Phase 2",
    meta: "MT5 47390 \xB7 Rules v1 \xB7 Day 14",
    status: "Active",
    metrics: [{
      label: 'Balance',
      value: '$25,910'
    }, {
      label: 'Equity',
      value: '$25,940'
    }, {
      label: 'Today',
      value: '+$140',
      tone: 'profit'
    }, {
      label: 'Total P/L',
      value: '+$910',
      tone: 'profit'
    }],
    limits: [{
      label: 'Daily loss limit',
      used: 0,
      total: 1250
    }, {
      label: 'Max drawdown',
      used: 0,
      total: 2500
    }, {
      label: 'Profit target',
      kind: 'target',
      used: 910,
      total: 1250
    }],
    footer: "Trading days 6 of 4 \xB7 Updated 4s ago",
    onLink: () => go('challenges')
  }), /*#__PURE__*/React.createElement(AccountCard, {
    title: "$50K funded",
    meta: "MT5 45102 \xB7 Rules v1 \xB7 Day 41",
    status: "Funded",
    metrics: [{
      label: 'Balance',
      value: '$52,180'
    }, {
      label: 'Equity',
      value: '$52,310'
    }, {
      label: 'Today',
      value: '+$130',
      tone: 'profit'
    }, {
      label: 'Available profit',
      value: '$2,180',
      tone: 'profit'
    }],
    limits: [{
      label: 'Daily loss limit',
      used: 130,
      total: 2500
    }, {
      label: 'Max drawdown',
      used: 310,
      total: 5000
    }],
    footer: "80% split \xB7 Next eligible 28 Sep 2026",
    onLink: () => go('funded')
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500
    }
  }, "Next payout"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, "$50K funded \xB7 80% split")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "Eligible 28 Sep 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 500,
      marginTop: 2
    }
  }, "$1,744.00"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, "Last payout $1,744 on 30 Aug")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    style: {
      alignSelf: 'flex-start'
    },
    onClick: () => openPanel('payout')
  }, "Request payout"))));
}
const CH_COLS = [{
  key: 'acct',
  label: 'Account',
  width: '1.4fr',
  strong: true
}, {
  key: 'phase',
  label: 'Phase',
  width: '.8fr'
}, {
  key: 'status',
  label: 'Status',
  width: '.9fr',
  render: v => /*#__PURE__*/React.createElement(StatusPill, {
    tone: {
      'Near limit': 'warning',
      Active: 'trade',
      Funded: 'success',
      Breached: 'danger',
      Passed: 'success'
    }[v]
  }, v)
}, {
  key: 'equity',
  label: 'Equity',
  align: 'right'
}, {
  key: 'target',
  label: 'Target progress',
  align: 'right'
}, {
  key: 'dd',
  label: 'Drawdown left',
  align: 'right'
}, {
  key: 'start',
  label: 'Started',
  align: 'right',
  width: '.8fr',
  muted: true
}];
const CH_ROWS = [{
  id: 1,
  acct: '$100K · MT5 48213',
  phase: 'Phase 1',
  status: 'Near limit',
  equity: '$100,860',
  target: '$860 of $8,000',
  dd: '$9,140',
  start: '8 Sep',
  f: 'Active'
}, {
  id: 2,
  acct: '$25K · MT5 47390',
  phase: 'Phase 2',
  status: 'Active',
  equity: '$25,940',
  target: '$910 of $1,250',
  dd: '$2,500',
  start: '3 Sep',
  f: 'Active'
}, {
  id: 3,
  acct: '$50K · MT5 45102',
  phase: 'Funded',
  status: 'Funded',
  equity: '$52,310',
  target: '—',
  dd: '$4,690',
  start: '7 Aug',
  f: 'Funded'
}, {
  id: 4,
  acct: '$10K · MT5 44018',
  phase: 'Phase 1',
  status: 'Breached',
  equity: '$9,480',
  target: '—',
  dd: '$0',
  start: '1 Aug',
  f: 'Failed'
}];
function TradeChallenges({
  go
}) {
  const [f, setF] = React.useState('Active');
  const rows = CH_ROWS.filter(r => f === 'All' || r.f === f);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "My challenges",
    subtitle: "4 accounts \xB7 2 active \xB7 1 funded \xB7 1 failed",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => go('new')
    }, "New challenge")
  }), /*#__PURE__*/React.createElement(FilterChips, {
    options: ['All', 'Active', 'Passed', 'Funded', 'Failed'],
    value: f,
    onChange: setF
  }), /*#__PURE__*/React.createElement(DataTable, {
    columns: CH_COLS,
    rows: rows,
    onRowClick: () => go('dashboard'),
    empty: {
      title: 'No passed challenges yet',
      body: 'Your $25K challenge is $340 from its Phase 2 target.'
    }
  }));
}
function TradeNewChallenge({
  openPanel
}) {
  const [size, setSize] = React.useState('$50K');
  const sizes = [{
    s: '$10K',
    p: '$99',
    t: '$800'
  }, {
    s: '$25K',
    p: '$199',
    t: '$2,000'
  }, {
    s: '$50K',
    p: '$299',
    t: '$4,000'
  }, {
    s: '$100K',
    p: '$499',
    t: '$8,000'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "New challenge",
    subtitle: "Pick a size, hit the targets, trade funded capital."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 16,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 8
    }
  }, sizes.map(x => /*#__PURE__*/React.createElement(Card, {
    key: x.s,
    onClick: () => setSize(x.s),
    style: {
      cursor: 'pointer',
      border: `1px solid ${size === x.s ? 'var(--accent)' : 'var(--hairline)'}`,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 500
    }
  }, x.s), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      lineHeight: 1.6
    }
  }, "Phase 1 target ", x.t, /*#__PURE__*/React.createElement("br", null), "Daily loss 5% \xB7 Max drawdown 10%", /*#__PURE__*/React.createElement("br", null), "80% split when funded"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      marginTop: 'auto'
    }
  }, x.p, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      fontWeight: 400
    }
  }, "one-time"))))), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500
    }
  }, "Checkout"), /*#__PURE__*/React.createElement(Stepper, {
    orientation: "vertical",
    steps: ['Size and platform', 'Rules acknowledgement', 'Payment'],
    current: 0
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '8px 20px',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Size"), /*#__PURE__*/React.createElement("span", null, size, " \xB7 MT5"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Price"), /*#__PURE__*/React.createElement("span", null, sizes.find(x => x.s === size).p), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Pay from"), /*#__PURE__*/React.createElement("span", null, "Wallet \xB7 $2,030.00")), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => openPanel('checkout', size)
  }, "Choose ", size))));
}
function TradeFunded({
  openPanel
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Funded & payouts",
    subtitle: "$50K funded \xB7 80% split",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => openPanel('payout')
    }, "Request payout")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(MetricTile, {
    label: "Available profit",
    value: "$2,180",
    valueColor: "var(--profit)"
  }), /*#__PURE__*/React.createElement(MetricTile, {
    label: "Your share",
    value: "$1,744.00",
    sub: "80% of available profit"
  }), /*#__PURE__*/React.createElement(MetricTile, {
    label: "Next eligible",
    value: "28 Sep 2026"
  }), /*#__PURE__*/React.createElement(MetricTile, {
    label: "Paid to date",
    value: "$3,488.00",
    sub: "2 payouts"
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500
    }
  }, "Current request"), /*#__PURE__*/React.createElement(Stepper, {
    steps: ['Requested', 'Reviewing', 'Approved', 'Paid'],
    current: 1
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "$1,744.00 requested 15 Sep. Reviews take up to 2 business days.")), /*#__PURE__*/React.createElement(DataTable, {
    title: "Payout history",
    rowHeight: 40,
    columns: [{
      key: 'd',
      label: 'Date'
    }, {
      key: 'a',
      label: 'Account',
      width: '1.4fr',
      strong: true
    }, {
      key: 'amt',
      label: 'Amount',
      align: 'right'
    }, {
      key: 's',
      label: 'Status',
      align: 'right',
      render: v => /*#__PURE__*/React.createElement(StatusPill, {
        tone: v === 'Paid' ? 'success' : 'warning'
      }, v)
    }],
    rows: [{
      d: '15 Sep 2026',
      a: '$50K funded · MT5 45102',
      amt: '$1,744.00',
      s: 'Payout pending'
    }, {
      d: '30 Aug 2026',
      a: '$50K funded · MT5 45102',
      amt: '$1,744.00',
      s: 'Paid'
    }, {
      d: '30 Jul 2026',
      a: '$50K funded · MT5 45102',
      amt: '$1,744.00',
      s: 'Paid'
    }]
  }));
}
Object.assign(window, {
  TradeDashboard,
  TradeChallenges,
  TradeNewChallenge,
  TradeFunded
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/TradeScreens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.LimitBar = __ds_scope.LimitBar;

__ds_ns.MetricTile = __ds_scope.MetricTile;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.LineChart = __ds_scope.LineChart;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.AlertStrip = __ds_scope.AlertStrip;

__ds_ns.ConfirmDialog = __ds_scope.ConfirmDialog;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.SidePanel = __ds_scope.SidePanel;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FilterChips = __ds_scope.FilterChips;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Segmented = __ds_scope.Segmented;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.MobileTabBar = __ds_scope.MobileTabBar;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.AppShell = __ds_scope.AppShell;

__ds_ns.TRADE_NAV = __ds_scope.TRADE_NAV;

__ds_ns.INVEST_NAV = __ds_scope.INVEST_NAV;

__ds_ns.SHARED_NAV = __ds_scope.SHARED_NAV;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.TopBar = __ds_scope.TopBar;

__ds_ns.WorkspaceSwitch = __ds_scope.WorkspaceSwitch;

__ds_ns.AccountCard = __ds_scope.AccountCard;

__ds_ns.PositionCard = __ds_scope.PositionCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

})();
