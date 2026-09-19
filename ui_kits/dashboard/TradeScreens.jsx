const DS = window.OpofiDesignSystem_dbd458;
const { PageHeader, Button, AlertStrip, AccountCard, Card, MetricTile, Stepper, DataTable, StatusPill, FilterChips, EmptyState } = DS;

function TradeDashboard({ go, openPanel }) {
  const [alert, setAlert] = React.useState(true);
  return <>
    <PageHeader title="Dashboard" subtitle="Three accounts · updated 4s ago" action={<Button size="sm" onClick={() => go('new')}>New challenge</Button>} />
    {alert && <AlertStrip tone="warning" action="Open account" onDismiss={() => setAlert(false)}>Your $100K challenge lost $1,380 today and has $3,620 left before the daily limit.</AlertStrip>}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <AccountCard title="$100K challenge · Phase 1" meta="MT5 48213 · Rules v1 · Day 9" status="Near limit"
        metrics={[{ label: 'Balance', value: '$101,240' }, { label: 'Equity', value: '$100,860' }, { label: 'Today', value: '−$1,380', tone: 'loss' }, { label: 'Total P/L', value: '+$860', tone: 'profit' }]}
        limits={[{ label: 'Daily loss limit', used: 1380, total: 5000 }, { label: 'Max drawdown', used: 860, total: 10000 }, { label: 'Profit target', kind: 'target', used: 860, total: 8000 }]}
        footer="Trading days 3 of 4 · Updated 4s ago" onLink={() => go('challenges')} />
      <AccountCard title="$25K challenge · Phase 2" meta="MT5 47390 · Rules v1 · Day 14" status="Active"
        metrics={[{ label: 'Balance', value: '$25,910' }, { label: 'Equity', value: '$25,940' }, { label: 'Today', value: '+$140', tone: 'profit' }, { label: 'Total P/L', value: '+$910', tone: 'profit' }]}
        limits={[{ label: 'Daily loss limit', used: 0, total: 1250 }, { label: 'Max drawdown', used: 0, total: 2500 }, { label: 'Profit target', kind: 'target', used: 910, total: 1250 }]}
        footer="Trading days 6 of 4 · Updated 4s ago" onLink={() => go('challenges')} />
      <AccountCard title="$50K funded" meta="MT5 45102 · Rules v1 · Day 41" status="Funded"
        metrics={[{ label: 'Balance', value: '$52,180' }, { label: 'Equity', value: '$52,310' }, { label: 'Today', value: '+$130', tone: 'profit' }, { label: 'Available profit', value: '$2,180', tone: 'profit' }]}
        limits={[{ label: 'Daily loss limit', used: 130, total: 2500 }, { label: 'Max drawdown', used: 310, total: 5000 }]}
        footer="80% split · Next eligible 28 Sep 2026" onLink={() => go('funded')} />
      <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 16 }}>
        <div><div style={{ fontSize: 16, fontWeight: 500 }}>Next payout</div><div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>$50K funded · 80% split</div></div>
        <div><div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Eligible 28 Sep 2026</div><div style={{ fontSize: 24, fontWeight: 500, marginTop: 2 }}>$1,744.00</div><div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>Last payout $1,744 on 30 Aug</div></div>
        <Button variant="secondary" size="sm" style={{ alignSelf: 'flex-start' }} onClick={() => openPanel('payout')}>Request payout</Button>
      </Card>
    </div>
  </>;
}

const CH_COLS = [
  { key: 'acct', label: 'Account', width: '1.4fr', strong: true }, { key: 'phase', label: 'Phase', width: '.8fr' },
  { key: 'status', label: 'Status', width: '.9fr', render: v => <StatusPill tone={{ 'Near limit': 'warning', Active: 'trade', Funded: 'success', Breached: 'danger', Passed: 'success' }[v]}>{v}</StatusPill> },
  { key: 'equity', label: 'Equity', align: 'right' }, { key: 'target', label: 'Target progress', align: 'right' }, { key: 'dd', label: 'Drawdown left', align: 'right' }, { key: 'start', label: 'Started', align: 'right', width: '.8fr', muted: true },
];
const CH_ROWS = [
  { id: 1, acct: '$100K · MT5 48213', phase: 'Phase 1', status: 'Near limit', equity: '$100,860', target: '$860 of $8,000', dd: '$9,140', start: '8 Sep', f: 'Active' },
  { id: 2, acct: '$25K · MT5 47390', phase: 'Phase 2', status: 'Active', equity: '$25,940', target: '$910 of $1,250', dd: '$2,500', start: '3 Sep', f: 'Active' },
  { id: 3, acct: '$50K · MT5 45102', phase: 'Funded', status: 'Funded', equity: '$52,310', target: '—', dd: '$4,690', start: '7 Aug', f: 'Funded' },
  { id: 4, acct: '$10K · MT5 44018', phase: 'Phase 1', status: 'Breached', equity: '$9,480', target: '—', dd: '$0', start: '1 Aug', f: 'Failed' },
];

function TradeChallenges({ go }) {
  const [f, setF] = React.useState('Active');
  const rows = CH_ROWS.filter(r => f === 'All' || r.f === f);
  return <>
    <PageHeader title="My challenges" subtitle="4 accounts · 2 active · 1 funded · 1 failed" action={<Button size="sm" onClick={() => go('new')}>New challenge</Button>} />
    <FilterChips options={['All', 'Active', 'Passed', 'Funded', 'Failed']} value={f} onChange={setF} />
    <DataTable columns={CH_COLS} rows={rows} onRowClick={() => go('dashboard')} empty={{ title: 'No passed challenges yet', body: 'Your $25K challenge is $340 from its Phase 2 target.' }} />
  </>;
}

function TradeNewChallenge({ openPanel }) {
  const [size, setSize] = React.useState('$50K');
  const sizes = [{ s: '$10K', p: '$99', t: '$800' }, { s: '$25K', p: '$199', t: '$2,000' }, { s: '$50K', p: '$299', t: '$4,000' }, { s: '$100K', p: '$499', t: '$8,000' }];
  return <>
    <PageHeader title="New challenge" subtitle="Pick a size, hit the targets, trade funded capital." />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 16, alignItems: 'start' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
        {sizes.map(x => <Card key={x.s} onClick={() => setSize(x.s)} style={{ cursor: 'pointer', border: `1px solid ${size === x.s ? 'var(--accent)' : 'var(--hairline)'}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 20, fontWeight: 500 }}>{x.s}</div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6 }}>Phase 1 target {x.t}<br />Daily loss 5% · Max drawdown 10%<br />80% split when funded</div>
          <div style={{ fontSize: 16, fontWeight: 500, marginTop: 'auto' }}>{x.p} <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 400 }}>one-time</span></div>
        </Card>)}
      </div>
      <Card style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 16, fontWeight: 500 }}>Checkout</div>
        <Stepper orientation="vertical" steps={['Size and platform', 'Rules acknowledgement', 'Payment']} current={0} />
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '8px 20px', fontSize: 14 }}><span style={{ color: 'var(--text-secondary)' }}>Size</span><span>{size} · MT5</span><span style={{ color: 'var(--text-secondary)' }}>Price</span><span>{sizes.find(x => x.s === size).p}</span><span style={{ color: 'var(--text-secondary)' }}>Pay from</span><span>Wallet · $2,030.00</span></div>
        <Button fullWidth onClick={() => openPanel('checkout', size)}>Choose {size}</Button>
      </Card>
    </div>
  </>;
}

function TradeFunded({ openPanel }) {
  return <>
    <PageHeader title="Funded & payouts" subtitle="$50K funded · 80% split" action={<Button size="sm" onClick={() => openPanel('payout')}>Request payout</Button>} />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
      <MetricTile label="Available profit" value="$2,180" valueColor="var(--profit)" /><MetricTile label="Your share" value="$1,744.00" sub="80% of available profit" /><MetricTile label="Next eligible" value="28 Sep 2026" /><MetricTile label="Paid to date" value="$3,488.00" sub="2 payouts" />
    </div>
    <Card style={{ display: 'flex', flexDirection: 'column', gap: 16 }}><div style={{ fontSize: 16, fontWeight: 500 }}>Current request</div><Stepper steps={['Requested', 'Reviewing', 'Approved', 'Paid']} current={1} /><div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>$1,744.00 requested 15 Sep. Reviews take up to 2 business days.</div></Card>
    <DataTable title="Payout history" rowHeight={40}
      columns={[{ key: 'd', label: 'Date' }, { key: 'a', label: 'Account', width: '1.4fr', strong: true }, { key: 'amt', label: 'Amount', align: 'right' }, { key: 's', label: 'Status', align: 'right', render: v => <StatusPill tone={v === 'Paid' ? 'success' : 'warning'}>{v}</StatusPill> }]}
      rows={[{ d: '15 Sep 2026', a: '$50K funded · MT5 45102', amt: '$1,744.00', s: 'Payout pending' }, { d: '30 Aug 2026', a: '$50K funded · MT5 45102', amt: '$1,744.00', s: 'Paid' }, { d: '30 Jul 2026', a: '$50K funded · MT5 45102', amt: '$1,744.00', s: 'Paid' }]} />
  </>;
}

Object.assign(window, { TradeDashboard, TradeChallenges, TradeNewChallenge, TradeFunded });
