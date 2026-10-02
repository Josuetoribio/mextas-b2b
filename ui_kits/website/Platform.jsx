const { Button: PButton, Icon: PIcon, Badge: PBadge, GlassCard: PGlassCard, SectionHeading: PHeading, Tabs: PTabs } = window.MX;

function Automation({ onSolution }) {
  const F = MX_DATA.flow;
  const [ref, inView] = useInView({ threshold: .35 });
  const [step, setStep] = React.useState(-1);
  const [hot, setHot] = React.useState(null);
  React.useEffect(() => {
    if (!inView) return; let i = -1;
    const t = setInterval(() => { i++; setStep(i); if (i >= F.length - 1) clearInterval(t); }, 380);
    return () => clearInterval(t);
  }, [inView]);
  const shown = hot != null ? hot : step;
  const pct = Math.max(0, shown) / (F.length - 1);
  return (
    <section className="sec auto" id="automatizacion" aria-labelledby="auto-t">
      <div className="auto__bg"><img src={MX_DATA.IMG + 'servicio-automatizacion.jpg'} alt="" loading="lazy" /></div>
      <div className="mx-container">
        <div className="auto__top rv">
          <PHeading id="auto-t" eyebrow="Automatización" size="xl" title="Del primer contacto" accent="a la venta, sin fricción." />
          <p style={{ color: 'var(--fg-3)', fontSize: 17 }}>Así se ve un flujo comercial automatizado. Pasa el cursor o toca cada etapa para ver qué ocurre — y qué deja de hacer tu equipo a mano.</p>
        </div>
        <div className="flowbox rv" ref={ref}>
          <div className="flow" onMouseLeave={() => setHot(null)}>
            <div className="flow__line" style={{ '--p': pct }}><i></i>{step >= F.length - 1 && <span className="flow__pulse"></span>}</div>
            {F.map((n, k) => (
              <button key={n.id} type="button" className={'node' + (k <= shown ? ' lit' : '') + (hot === k ? ' hot' : '')} onMouseEnter={() => setHot(k)} onFocus={() => setHot(k)} onBlur={() => setHot(null)} onClick={() => setHot(hot === k ? null : k)} aria-describedby={hot === k ? 'tip-' + n.id : undefined}>
                <span className="node__c"><PIcon name={n.icon} size={24} /></span>
                <span className="node__meta"><span className="node__l">{n.label}</span><span className="node__t">{n.t}</span></span>
                {hot === k && <span className="tip" role="tooltip" id={'tip-' + n.id}>{n.tip}</span>}
              </button>
            ))}
          </div>
          <div className="flow__foot">
            <div className="bigstat"><b>Hasta 12 h</b><span style={{ color: 'var(--fg-2)' }}>semanales recuperadas<br /><span className="demo-note">Ejemplo de un equipo comercial de 6 personas</span></span></div>
            <PButton variant="secondary" arrow onClick={() => onSolution('automatizacion')}>Explorar automatización</PButton>
          </div>
        </div>
      </div>
    </section>
  );
}

const SYS_TABS = [{ id: 'resumen', label: 'Resumen' }, { id: 'ventas', label: 'Ventas' }, { id: 'clientes', label: 'Clientes' }, { id: 'operaciones', label: 'Operaciones' }];
const MOD_TO_TAB = { Clientes: 'clientes', Ventas: 'ventas', 'Órdenes': 'resumen', Inventario: 'operaciones', Finanzas: 'resumen', Usuarios: 'clientes', Reportes: 'resumen' };
const stClass = (s) => /Entregado|Ganada|Óptimo|Facturado|Premium/.test(s) ? 'st st--ok' : /Revisar|Negociación/.test(s) ? 'st st--warn' : 'st';

function Systems({ onSolution }) {
  const [tab, setTab] = React.useState('resumen');
  const [mod, setMod] = React.useState('Órdenes');
  const d = MX_DATA.systemTabs[tab];
  const max = Math.max(...d.bars);
  const months = ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  return (
    <section className="sec" id="sistemas" aria-labelledby="sys-t">
      <div className="glowbg" style={{ width: 700, height: 500, right: -100, top: 120 }}></div>
      <div className="mx-container sys">
        <div className="rv">
          <PHeading id="sys-t" eyebrow="Sistemas empresariales" title="Tu operación también puede" accent="tener software propio." description="Módulos construidos alrededor de cómo trabaja tu equipo — no al revés. Esta es una vista simulada; explórala." />
          <div className="sys__mods">{MX_DATA.modules.map(([i, l]) => <PBadge key={l}><PIcon name={i} size={12} />{l}</PBadge>)}</div>
          <div className="sys__media"><img src={MX_DATA.IMG + 'servicio-sistemas.jpg'} alt="Sistema empresarial Mextas en un monitor de escritorio" loading="lazy" /></div>
          <div style={{ marginTop: 28 }}><PButton variant="secondary" arrow onClick={() => onSolution('sistemas')}>Ver qué podemos construir</PButton></div>
        </div>
        <div className="app rv" style={{ '--d': '120ms' }} role="region" aria-label="Demostración de sistema empresarial">
          <nav className="app__side" aria-label="Módulos">
            <div className="app__brand"><i></i>Operación · Demo</div>
            {MX_DATA.modules.map(([i, l]) => <button key={l} type="button" className="app__mod" aria-current={mod === l} onClick={() => { setMod(l); setTab(MOD_TO_TAB[l]); }}><PIcon name={i} size={15} />{l}</button>)}
          </nav>
          <div className="app__main">
            <div className="app__bar">
              <PTabs label="Vista del tablero" tabs={SYS_TABS} value={tab} onChange={setTab} />
              <PBadge tone="demo" dot>Demostración</PBadge>
            </div>
            <div className="app__kpis" key={tab}>{d.kpis.map(([l, v, dl], k) => <div key={l} className="kpi" style={{ animationDelay: k * 60 + 'ms' }}><div className="kpi__l">{l}</div><div className="kpi__v">{v}</div><div className="kpi__d" style={dl.startsWith('−') && tab !== 'operaciones' ? { color: 'var(--state-danger)' } : null}>{dl} vs. mes anterior</div></div>)}</div>
            <div className="chartbox">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14, fontSize: 12.5, color: 'var(--fg-3)' }}><span style={{ color: '#fff', fontWeight: 600 }}>{SYS_TABS.find(t => t.id === tab).label} · últimos 12 meses</span><span className="demo-note">MXN</span></div>
              <div className="bars">{d.bars.map((b, k) => <i key={k} style={{ height: (b / max * 100) + '%' }} title={months[k] + ': ' + b}></i>)}</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>{months.map((m, k) => <span key={k} style={{ flex: 1, textAlign: 'center', font: '500 10px/1 var(--font-mono)', color: 'var(--fg-4)' }}>{m}</span>)}</div>
            </div>
            <table className="tbl"><tbody>{d.rows.map(r => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td><span className={stClass(r[2])}>{r[2]}</span></td><td>{r[3]}</td></tr>)}</tbody></table>
          </div>
        </div>
      </div>
    </section>
  );
}

function LineChart({ data, data2 }) {
  const W = 600, H = 220, max = Math.max(...data) * 1.1;
  const pts = (arr, m) => arr.map((v, i) => [i / (arr.length - 1) * W, H - v / m * H]);
  const p = pts(data, max);
  const d = p.map((q, i) => (i ? 'L' : 'M') + q[0].toFixed(1) + ' ' + q[1].toFixed(1)).join(' ');
  const m2 = Math.max(...data2) * 1.6;
  const d2 = pts(data2, m2).map((q, i) => (i ? 'L' : 'M') + q[0].toFixed(1) + ' ' + q[1].toFixed(1)).join(' ');
  return (
    <svg className="linechart" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" role="img" aria-label="Tráfico y leads en el periodo">
      <defs><linearGradient id="lg" x1="0" x2="1"><stop offset="0" stopColor="#2f7bff" /><stop offset="1" stopColor="#45d3ff" /></linearGradient><linearGradient id="la" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="rgba(47,123,255,.28)" /><stop offset="1" stopColor="rgba(47,123,255,0)" /></linearGradient></defs>
      {[0.25, 0.5, 0.75].map(y => <line key={y} x1="0" x2={W} y1={H * y} y2={H * y} stroke="rgba(132,170,255,.08)" />)}
      <path d={d + ` L${W} ${H} L0 ${H} Z`} fill="url(#la)" />
      <path d={d2} className="ln2" vectorEffect="non-scaling-stroke" />
      <path d={d} className="ln" pathLength="1" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function Analytics({ onSolution }) {
  const [range, setRange] = React.useState('30d');
  const [ref, inView] = useInView({ threshold: .25 });
  const a = MX_DATA.analytics[range];
  const vis = useCountUp(a.kpis.visitas, inView), conv = useCountUp(a.kpis.conv, inView), leads = useCountUp(a.kpis.leads, inView), ven = useCountUp(a.kpis.ventas, inView);
  const fmt = (n) => Math.round(n).toLocaleString('es-MX');
  const K = [['Visitas', fmt(vis), '+18.4%', 'eye'], ['Conversiones', '+' + conv.toFixed(1) + '%', 'vs. periodo previo', 'mouse-pointer-click'], ['Leads', fmt(leads), '+26.1%', 'user-plus'], ['Ventas', '$' + fmt(ven), '+14.9%', 'circle-dollar-sign']];
  const funnel = [['Visitas', a.kpis.visitas, 100], ['Interacciones', Math.round(a.kpis.visitas * .21), 72], ['Leads', a.kpis.leads, 44], ['Clientes', Math.round(a.kpis.leads * .14), 22]];
  return (
    <section className="sec" id="analitica" aria-labelledby="ana-t" ref={ref}>
      <div className="mx-container">
        <div className="sol__head rv">
          <PHeading id="ana-t" eyebrow="Marketing, SEO y analítica" title="Lo que no se mide," accent="no se puede mejorar." description="Conectamos campañas, sitio y ventas en un solo tablero para saber qué canal trae clientes — no solo visitas." />
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
            <PBadge tone="demo" dot>Demostración</PBadge>
            <PTabs label="Periodo" value={range} onChange={setRange} tabs={[{ id: '7d', label: '7 días' }, { id: '30d', label: '30 días' }, { id: '90d', label: '90 días' }]} />
          </div>
        </div>
        <div className="ana__kpis">{K.map(([l, v, d, i], k) => <PGlassCard key={l} className="ana__k rv" style={{ '--d': k * 70 + 'ms' }} padding="none"><div className="l">{l}<PIcon name={i} size={16} style={{ color: 'var(--fg-accent)' }} /></div><div className="v">{v}</div><div className="d">{d}</div></PGlassCard>)}</div>
        <div className="ana">
          <PGlassCard padding="lg" className="rv">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
              <div><div style={{ font: '700 17px/1.3 var(--font-display)', color: '#fff' }}>Tráfico y leads</div><div className="demo-note" style={{ marginTop: 4 }}>Datos de ejemplo · {range === '7d' ? 'últimos 7 días' : range === '30d' ? 'últimos 30 días' : 'últimos 90 días'}</div></div>
              <div style={{ display: 'flex', gap: 18, fontSize: 12.5, color: 'var(--fg-3)' }}><span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><i style={{ width: 16, height: 2, background: 'var(--mx-blue-400)' }}></i>Visitas</span><span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><i style={{ width: 16, borderTop: '1.5px dashed var(--mx-gray-500)' }}></i>Leads</span></div>
            </div>
            <LineChart key={range} data={a.traffic} data2={a.leadsS} />
            <div className="funnel">{funnel.map(([l, v, w]) => <div key={l} style={{ width: w + '%' }}><span>{l}</span><b>{v.toLocaleString('es-MX')}</b></div>)}</div>
          </PGlassCard>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <PGlassCard padding="lg" className="rv" style={{ '--d': '100ms' }}>
              <div style={{ font: '700 17px/1.3 var(--font-display)', color: '#fff', marginBottom: 20 }}>Fuentes de tráfico</div>
              <div className="src">{MX_DATA.sources.map(([l, v]) => <div key={l} className="src__r"><span>{l}</span><b>{v}%</b><div className="src__b"><i style={{ width: inView ? v * 2.2 + '%' : 0 }}></i></div></div>)}</div>
            </PGlassCard>
            <div className="ana__photo rv" style={{ '--d': '180ms' }}>
              <img src={MX_DATA.IMG + 'servicio-marketing.jpg'} alt="Tablero de marketing y SEO en pantalla" loading="lazy" />
              <div><div style={{ font: '700 17px/1.3 var(--font-display)', color: '#fff', marginBottom: 12 }}>Reportes mensuales con decisiones, no solo gráficas.</div><PButton size="sm" variant="secondary" arrow onClick={() => onSolution('marketing')}>Marketing & SEO</PButton></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Automation, Systems, Analytics });
