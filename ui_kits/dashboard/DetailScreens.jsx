const DS3 = window.OpofiDesignSystem_dbd458;
const { Button: B3, Card: C3, MetricTile: M3, LineChart: LC3, DataTable: DT3, StatusPill: SP3, Modal, ConfirmDialog, SidePanel, Select, Input, Checkbox, Stepper: St3, Icon: I3, PageHeader: PH3, DataTable: DT3b } = DS3;

function PositionDetail({ go, showToast }) {
  const [confirm, setConfirm] = React.useState(false);
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 24, flex: 1, minHeight: 0, position: 'relative', margin: -32, padding: '32px 32px 0' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><div style={{ fontSize: 24, fontWeight: 500 }}>Profit share · USDT</div><SP3 tone="success">In profit</SP3><span style={{ fontSize: 13, color: 'var(--text-secondary)', marginLeft: 'auto' }}>Started 12 Aug 2026 · Position #PS-2041</span></div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}><M3 size="lg" label="Principal" value="1,000.00 USDT" style={{ padding: 16 }} /><M3 size="lg" label="Current value" value="1,042.50 USDT" style={{ padding: 16 }} /><M3 size="lg" label="Profit you can transfer" value="42.50 USDT" valueColor="var(--profit)" style={{ padding: 16 }} /><M3 size="lg" label="Return since start" value="+4.25%" sub="36 days" style={{ padding: 16 }} /></div>
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
      <C3 padding={24} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontSize: 16, fontWeight: 500 }}>Value</span><span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Dashed line is your principal</span></div><LC3 height={200} gridLines={0} data={[1000, 996, 1001, 993, 1005, 1008, 1004, 1012, 1015, 1019, 1022, 1025, 1031, 1042]} thresholds={[{ value: 1000, label: '1,000.00' }]} xLabels={['12 Aug', 'Today']} /></C3>
      <C3 padding={24} style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, lineHeight: 1.55 }}><div style={{ fontSize: 16, fontWeight: 500 }}>How this position works</div><div style={{ color: 'var(--text-secondary)' }}>Your 1,000.00 USDT funds a pool traded by Opofi bots inside the prop firm. The pool's result is shared with you.</div><div style={{ color: 'var(--text-secondary)' }}>You can move out only the profit above 1,000.00 USDT. At breakeven or in loss, there is nothing to move.</div><div style={{ color: 'var(--text-secondary)' }}>Cancelling returns whatever the position is worth right now, which may be less than 1,000.00 USDT.</div></C3>
    </div>
    <DT3 title="History" rowHeight={44} columns={[{ key: 'd', label: 'Date' }, { key: 'e', label: 'Event', width: '1.5fr' }, { key: 'a', label: 'Amount', align: 'right', render: (v, r) => <span style={{ color: r.pos ? 'var(--profit)' : undefined }}>{v}</span> }, { key: 's', label: 'Status', align: 'right', render: v => v === 'Confirmed' ? <SP3 tone="success">{v}</SP3> : <span style={{ color: 'var(--text-secondary)' }}>{v}</span> }]}
      rows={[{ d: '1 Sep 2026', e: 'Monthly result · pool +2.91%', a: '+28.40 USDT', pos: true, s: 'Added to value' }, { d: '12 Aug 2026', e: 'Position started', a: '1,000.00 USDT', s: 'Confirmed' }]} style={{ marginBottom: 80 }} />
    <div style={{ position: 'sticky', bottom: 0, marginTop: 'auto', marginLeft: -32, marginRight: -32, padding: '16px 32px', background: 'var(--bg-page)', borderTop: '1px solid var(--hairline)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <B3 variant="danger" onClick={() => setConfirm(true)}>Cancel position</B3>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}><span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Goes to your wallet instantly</span><B3 onClick={() => showToast('42.50 USDT transferred to your wallet')}>Transfer 42.50 USDT</B3></div>
    </div>
    <Modal open={confirm} onClose={() => setConfirm(false)}><ConfirmDialog destructive title="Cancel this position?" body="1,042.50 USDT will be returned to your wallet within 24 hours. Your position stops earning immediately." cancelLabel="Keep position" confirmLabel="Cancel and return 1,042.50 USDT" onCancel={() => setConfirm(false)} onConfirm={() => { setConfirm(false); go('portfolio'); showToast('Position cancelled · 1,042.50 USDT on its way'); }} /></Modal>
  </div>;
}

function WalletScreen({ openPanel }) {
  return <>
    <PH3 title="Wallet" subtitle="$2,030.00 available · $2,656.72 deployed" action={<div style={{ display: 'flex', gap: 8 }}><B3 variant="secondary" size="sm" onClick={() => openPanel('withdraw')}>Withdraw</B3><B3 variant="shared" size="sm" onClick={() => openPanel('deposit')}>Deposit</B3></div>} />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}><M3 label="USDT" value="2,030.00" sub="TRC20 · $2,030.00" /><M3 label="ETH" value="0.250" sub="ERC20 · locked in Fixed invest" /><M3 label="BTC" value="0.000" sub="—" /><M3 label="TON" value="0.00" sub="—" /></div>
    <DT3b title="Transactions" rowHeight={40} columns={[{ key: 'd', label: 'Date' }, { key: 't', label: 'Type', width: '1.4fr', strong: true }, { key: 'n', label: 'Network', muted: true }, { key: 'a', label: 'Amount', align: 'right' }, { key: 's', label: 'Status', align: 'right', render: v => <SP3 tone={{ Confirmed: 'success', Paid: 'success', Pending: 'warning', Rejected: 'danger' }[v]}>{v}</SP3> }]}
      rows={[{ d: '15 Sep 2026', t: 'Payout request', n: '—', a: '+$1,744.00', s: 'Pending' }, { d: '12 Aug 2026', t: 'Transfer to Profit share', n: '—', a: '−1,000.00 USDT', s: 'Confirmed' }, { d: '2 Aug 2026', t: 'Deposit', n: 'TRC20', a: '+3,000.00 USDT', s: 'Confirmed' }, { d: '30 Jul 2026', t: 'Withdrawal', n: 'TRC20', a: '−250.00 USDT', s: 'Paid' }]} />
  </>;
}

/** Deposit / Withdraw / Checkout / Payout flows in one side panel: form → submitting → success. */
function FlowPanel({ kind, arg, onClose, showToast }) {
  const [step, setStep] = React.useState('form'); const [asset, setAsset] = React.useState('USDT'); const [net, setNet] = React.useState('TRC20'); const [ok, setOk] = React.useState(false);
  const submit = () => { setStep('busy'); setTimeout(() => setStep('done'), 1200); };
  const titles = { deposit: 'Deposit', withdraw: 'Withdraw', checkout: 'Checkout', payout: 'Request payout' };
  const primary = kind === 'checkout' ? 'primary' : 'shared';
  if (step === 'done') return <SidePanel title={titles[kind]} onClose={onClose} footer={<B3 variant={primary} fullWidth onClick={onClose}>{kind === 'checkout' ? 'Open account' : 'Done'}</B3>}>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, textAlign: 'center', minHeight: 240 }}><span style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--success-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><I3 name="check" size={16} strokeWidth={2.5} color="var(--success)" /></span>
      <div style={{ fontSize: 15, fontWeight: 500 }}>{kind === 'checkout' ? `Your ${arg} challenge is live` : kind === 'payout' ? '$1,744.00 requested' : kind === 'withdraw' ? '249.00 USDT on its way' : 'Address ready'}</div>
      <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{kind === 'checkout' ? 'Credentials arrive within 10 minutes.' : kind === 'payout' ? 'Reviews take up to 2 business days.' : kind === 'withdraw' ? 'TRC20 transfers usually land within 5 minutes.' : 'Send only USDT on TRC20 to this address.'}</div></div>
  </SidePanel>;
  const busy = step === 'busy';
  return <SidePanel title={titles[kind]} onClose={onClose} busy={busy} footer={<B3 variant={primary} fullWidth loading={busy} disabled={kind === 'checkout' && !ok} onClick={submit}>{busy ? 'Submitting…' : kind === 'deposit' ? 'Continue' : kind === 'withdraw' ? 'Withdraw 250.00 USDT' : kind === 'checkout' ? `Pay ${arg === '$50K' ? '$299' : '$199'} from wallet` : 'Request $1,744.00'}</B3>}>
    {kind === 'checkout' && <St3 orientation="vertical" steps={['Size and platform', 'Rules acknowledgement', 'Payment']} current={1} />}
    {(kind === 'deposit' || kind === 'withdraw') && <><Select label="Asset" options={['USDT', 'BTC', 'ETH', 'TON']} value={asset} onChange={setAsset} /><Select label="Network" options={['TRC20', 'ERC20']} value={net} onChange={setNet} /></>}
    {kind === 'withdraw' && <><Input label="Amount" defaultValue="250.00" suffix="Max" /><Input label="Address" defaultValue="TQn4…8xKp" /><div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>You receive</div><div style={{ fontSize: 14, marginTop: -10 }}>249.00 USDT <span style={{ color: 'var(--text-secondary)' }}>· 1.00 USDT network fee</span></div></>}
    {kind === 'deposit' && <C3 tile padding={14} style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>Minimum deposit 50 USDT. Funds appear after 1 network confirmation.</C3>}
    {kind === 'checkout' && <><div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '8px 20px', fontSize: 14 }}><span style={{ color: 'var(--text-secondary)' }}>Size</span><span>{arg} · MT5</span><span style={{ color: 'var(--text-secondary)' }}>Rules</span><span>v1 · 5% daily · 10% max drawdown</span></div><Checkbox checked={ok} onChange={setOk} label="I accept rules v1" /></>}
    {kind === 'payout' && <><M3 label="Your share" value="$1,744.00" sub="80% of $2,180 available profit" /><Select label="Pay to" options={['Wallet · USDT']} value="Wallet · USDT" /><div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Next eligible 28 Sep 2026. Requesting now locks today's profit.</div></>}
  </SidePanel>;
}

Object.assign(window, { PositionDetail, WalletScreen, FlowPanel });
