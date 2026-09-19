const DS2 = window.OpofiDesignSystem_dbd458;
const { PageHeader: PH, Button: Btn, Card: Cd, MetricTile: MT, Segmented, LineChart, BarChart, DataTable: DT, StatusPill: SP, Tabs, FilterChips: FC, ProductCard, Icon } = DS2;

const POS_COLS = [
  { key: 'name', label: 'Position', width: '1.6fr', strong: true }, { key: 'rate', label: 'Rate', muted: true }, { key: 'value', label: 'Value', align: 'right', width: '1.2fr' },
  { key: 'pl', label: 'Profit', align: 'right', render: v => <span style={{ color: v.startsWith('−') ? 'var(--loss)' : 'var(--profit)' }}>{v}</span> }, { key: 'note', label: '', align: 'right', width: '1.6fr', muted: true },
];
const POS_ROWS = [
  { id: 'fs', name: 'Flexible staking · USDT', rate: '12% APY', value: '503.12 USDT', pl: '+3.12', note: 'Withdraw profit anytime' },
  { id: 'fi', name: 'Fixed invest · ETH', rate: '90 days at 18%', value: '0.271 ETH', pl: '+0.021', note: 'Locked until 14 Dec' },
  { id: 'ps', name: 'Profit share · USDT', rate: 'Bot-traded pool', value: '1,042.50 USDT', pl: '+42.50', note: 'Cancel returns live value' },
];

function InvestPortfolio({ go, openPanel }) {
  const [range, setRange] = React.useState('30d');
  return <>
    <PH title="Portfolio" subtitle="Your deposits fund traders in the Opofi prop firm. Their trading profit pays your return." action={<Btn variant="shared" size="sm" onClick={() => openPanel('deposit')}>Deposit</Btn>} />
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
      <Cd padding={24} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div><div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Total value</div><div style={{ fontSize: 36, fontWeight: 500, marginTop: 2, lineHeight: 1.1 }}>$2,656.72</div><div style={{ display: 'flex', gap: 16, fontSize: 13, marginTop: 8 }}><span><span style={{ color: 'var(--profit)' }}>+$4.18</span> <span style={{ color: 'var(--text-secondary)' }}>24h</span></span><span><span style={{ color: 'var(--profit)' }}>+$131.72</span> <span style={{ color: 'var(--text-secondary)' }}>30d</span></span></div></div>
          <Segmented options={['30d', '90d', '1y']} value={range} onChange={setRange} />
        </div>
        <LineChart height={200} data={range === '30d' ? [2525, 2529, 2535, 2533, 2545, 2555, 2559, 2565, 2577, 2587, 2595, 2609, 2621, 2635, 2657] : [2400, 2410, 2430, 2445, 2470, 2500, 2525, 2560, 2600, 2657]} xLabels={range === '30d' ? ['18 Aug', '2 Sep', 'Today'] : ['Jun', 'Aug', 'Today']} />
        <div><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 8 }}><span><span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 2, background: 'var(--accent)', marginRight: 6 }} />Deployed $2,656.72</span><span><span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 2, background: 'var(--grey)', marginRight: 6 }} />Available $2,030.00</span></div><div style={{ display: 'flex', height: 8, borderRadius: 4, overflow: 'hidden', gap: 2 }}><div style={{ width: '56.7%', background: 'var(--accent)' }} /><div style={{ flex: 1, background: 'var(--grey)' }} /></div></div>
      </Cd>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Cd padding={24} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}><div style={{ fontSize: 16, fontWeight: 500 }}>Next payout</div><div><div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>14 Dec 2026 · Fixed invest matures</div><div style={{ fontSize: 28, fontWeight: 500, marginTop: 2 }}>0.271 ETH</div><div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4 }}>Principal 0.250 ETH plus 0.021 ETH profit, paid to your wallet automatically.</div></div></Cd>
        <Cd padding="20px 24px" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}><Icon name="trendUp" color="var(--text-secondary)" style={{ marginTop: 2 }} /><div style={{ flex: 1, fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>Traders using your capital are up this month. <span style={{ color: 'var(--accent)', cursor: 'pointer' }}>See how funding works</span></div></Cd>
      </div>
    </div>
    <DT title="Positions" action="View all" rowHeight={48} columns={POS_COLS} rows={POS_ROWS} onRowClick={r => go('position', r.id)} />
  </>;
}

function InvestProducts({ go }) {
  const [tab, setTab] = React.useState('Simple'); const [f, setF] = React.useState('All assets');
  return <>
    <PH title="Products" subtitle="Every product funds traders in the Opofi prop firm. Their trading profit pays your return." action={<span style={{ fontSize: 14, color: 'var(--accent)', height: 36, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>Which is right for me?</span>} />
    <Tabs tabs={['Simple', 'Advanced']} value={tab} onChange={setTab} />
    <FC options={['All assets', 'USDT', 'BTC', 'ETH', 'TON', '|', 'Locked', 'Anytime']} value={f} onChange={setF} />
    <div style={{ display: 'grid', gridTemplateColumns: tab === 'Simple' ? '1fr 1fr' : '1fr 1fr 1fr', gap: 24 }}>
      <ProductCard title="Fixed invest" description="Lock it for a set time, get a fixed return." badge="Locked" rates={[{ label: '30 days', value: '5%', sub: '100 USDT becomes 105 USDT' }, { label: '90 days', value: '18%', sub: '100 USDT becomes 118 USDT' }]}
        facts={[{ label: 'Assets', value: 'USDT, BTC, ETH, TON' }, { label: 'Minimum', value: '50 USDT or equivalent' }, { label: 'Withdraw', value: 'Not until the term ends' }, { label: 'Cancel', value: 'Not possible during the term' }, { label: 'At maturity', value: 'Principal and profit paid to your wallet automatically' }]} onCta={() => go('start')} />
      <ProductCard title="Flexible staking" description="Earn every day, take your money out any time." badge="Flexible" badgeTone="invest" rates={[{ label: 'USDT', value: '12%', sub: 'APY' }, { label: 'TON', value: '10%', sub: 'APY' }, { label: 'ETH', value: '7%', sub: 'APY' }, { label: 'BTC', value: '5%', sub: 'APY' }]}
        facts={[{ label: 'Assets', value: 'USDT, BTC, ETH, TON' }, { label: 'Minimum', value: '50 USDT or equivalent' }, { label: 'Withdraw', value: 'Profit anytime' }, { label: 'Cancel', value: 'Anytime, principal comes back' }, { label: 'Profit', value: 'Accrues daily' }]} onCta={() => go('start')} />
      {tab === 'Advanced' && <ProductCard title="Profit share" description="Fund a bot-traded pool. Share its result." badge="Variable" badgeTone="warning" rates={[{ label: 'Last month', value: '+2.91%', sub: 'pool result' }]}
        facts={[{ label: 'Assets', value: 'USDT' }, { label: 'Minimum', value: '500 USDT' }, { label: 'Withdraw', value: 'Only profit above principal' }, { label: 'Cancel', value: 'Returns live value, may be below principal' }]} onCta={() => go('start')} />}
    </div>
  </>;
}

function InvestEarnings() {
  return <>
    <PH title="Earnings" subtitle="Everything your positions have paid or added since April" action={<Btn variant="secondary" size="sm">Export CSV</Btn>} />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}><MT size="xl" label="Total earned" value="$131.72" sub="Across 3 positions · since 12 Apr 2026" /><MT size="lg" label="This month so far" value="+$31.52" valueColor="var(--profit)" sub="Best month yet" /></div>
      <Cd padding={24} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}><div style={{ fontSize: 16, fontWeight: 500 }}>Monthly earnings</div><BarChart height={200} data={[{ label: 'Apr', value: 8.1, valueLabel: '$8.10' }, { label: 'May', value: 14.3, valueLabel: '$14.30' }, { label: 'Jun', value: 18.2, valueLabel: '$18.20' }, { label: 'Jul', value: 24.6, valueLabel: '$24.60' }, { label: 'Aug', value: 35, valueLabel: '$35.00' }, { label: 'Sep', value: 31.52, valueLabel: '$31.52' }]} /></Cd>
    </div>
    <DT rowHeight={44} columns={[{ key: 'd', label: 'Date' }, { key: 'p', label: 'Position', width: '1.6fr', strong: true }, { key: 't', label: 'Type', width: '1.3fr', muted: true }, { key: 'a', label: 'Asset', width: '.7fr' }, { key: 'amt', label: 'Amount', align: 'right', render: v => <span style={{ color: 'var(--profit)' }}>{v}</span> }, { key: 's', label: 'Status', align: 'right', render: v => <SP tone={v === 'Paid' ? 'success' : 'neutral'}>{v}</SP> }]}
      rows={[{ d: '17 Sep 2026', p: 'Flexible staking · USDT', t: 'Reward', a: 'USDT', amt: '+0.16', s: 'Paid' }, { d: '16 Sep 2026', p: 'Flexible staking · USDT', t: 'Reward', a: 'USDT', amt: '+0.16', s: 'Paid' }, { d: '1 Sep 2026', p: 'Profit share · USDT', t: 'Monthly result', a: 'USDT', amt: '+28.40', s: 'Added to value' }, { d: '12 Jul 2026', p: 'Fixed invest · USDT · 30 days', t: 'Maturity payout', a: 'USDT', amt: '+15.00', s: 'Paid' }]} />
  </>;
}

Object.assign(window, { InvestPortfolio, InvestProducts, InvestEarnings, POS_COLS, POS_ROWS });
