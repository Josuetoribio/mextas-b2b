const { Button: SButton, IconButton: SIconButton, Icon: SIcon, Badge: SBadge, GlassCard: SGlassCard, SectionHeading: SHeading, Dialog: SDialog } = window.MX;

const CHAIN = [['circle-alert', 'Problema', 'Lo que hoy frena a tu empresa'], ['scan-search', 'Análisis', 'Procesos, datos y personas'], ['compass', 'Estrategia', 'Qué construir y en qué orden'], ['cpu', 'Tecnología', 'La herramienta adecuada'], ['flag', 'Resultado', 'Medible desde el primer día']];

function ProblemSection({ onSolution, onPropose }) {
  const P = MX_DATA.problems;
  const [sel, setSel] = React.useState(P[1].id);
  const [lit, setLit] = React.useState(0);
  const p = P.find(x => x.id === sel);
  React.useEffect(() => {
    setLit(0); let i = 0;
    const t = setInterval(() => { i++; setLit(i); if (i >= 4) clearInterval(t); }, 220);
    return () => clearInterval(t);
  }, [sel]);
  return (
    <section className="sec" id="enfoque" aria-labelledby="prob-t">
      <div className="glowbg" style={{ width: 600, height: 600, right: -200, top: 0 }}></div>
      <div className="mx-container">
        <div className="rv"><SHeading id="prob-t" eyebrow="Nuestro enfoque" size="xl" title="No vendemos páginas." accent="Resolvemos problemas de negocio." description="Cada empresa tiene procesos, clientes, operaciones y objetivos diferentes. Por eso no empezamos preguntando qué página necesitas. Empezamos entendiendo qué necesitas conseguir." /></div>
        <div className="prob">
          <ol className="chain rv" style={{ listStyle: 'none', padding: 0, margin: 0 }} aria-label="Cómo pasamos de un problema a un resultado">
            {CHAIN.map(([i, t, s], k) => (
              <li key={t} className={'chain__step' + (k <= lit ? ' on' : '')}>
                <span className="chain__dot"><SIcon name={i} size={19} /></span>
                <div><div className="chain__t">{t}</div><div className="chain__s">{s}</div></div>
              </li>
            ))}
          </ol>
          <SGlassCard className="panel rv" style={{ '--d': '120ms' }} padding="none">
            <div className="panel__top">
              <div style={{ font: '700 17px/1.3 var(--font-display)', color: '#fff' }}>¿Qué está pasando en tu empresa?</div>
              <SBadge tone="accent">Selecciona una</SBadge>
            </div>
            <div className="panel__opts" role="group" aria-label="Problemas frecuentes">
              {P.map(x => <button key={x.id} type="button" className="popt" aria-pressed={x.id === sel} onClick={() => setSel(x.id)}><SIcon name={x.icon} size={16} />{x.label}</button>)}
            </div>
            <div className="panel__out" key={sel} aria-live="polite">
              <div className="pout"><div className="pout__k">Problema</div><div className="pout__v">“{p.problem}”</div></div>
              <div className="pout"><div className="pout__k">Qué podemos construir</div>
                <div className="chips">{p.solution.map((s, i) => <button key={s} type="button" className="chip" onClick={() => onSolution(p.solIds[i])}>{s}</button>)}</div>
              </div>
              <div className="pout"><div className="pout__k">Resultado esperado</div><div className="pout__v" style={{ fontWeight: 500, fontSize: 15, color: 'var(--fg-2)' }}>{p.result}</div><div><div className="pout__kpi">{p.kpi.v}</div><div className="demo-note" style={{ marginTop: 6 }}>{p.kpi.l}</div></div></div>
            </div>
            <div className="panel__foot">
              <span className="demo-note">Cifras ilustrativas; cada proyecto se dimensiona en el diagnóstico.</span>
              <SButton variant="accent" size="sm" arrow onClick={() => onPropose({ need: p.label })}>Hablar de este problema</SButton>
            </div>
          </SGlassCard>
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ s, onOpen, i }) {
  const compact = !s.img;
  return (
    <button type="button" className={'mx-card mx-card--interactive scard rv' + (compact ? ' scard--compact' : '')} style={{ '--d': i * 70 + 'ms' }} onClick={() => onOpen(s.id)} aria-label={s.title + ' — ver detalle'}>
      <div className="scard__txt">
        <div className="scard__row"><span className="scard__icon"><SIcon name={s.icon} size={19} /></span><span className="scard__n">{s.n}</span></div>
        <div className="scard__cat">{s.cat}</div>
        <h3>{s.title}</h3>
        <p>{s.desc}</p>
        {compact && <div className="scard__row" style={{ marginTop: 'auto', paddingTop: 10 }}><span className="scard__stat"><b>{s.stat.v}</b>{s.stat.l}</span><span style={{ display: 'flex', alignItems: 'center' }}><span className="scard__cta">Ver más</span><span className="scard__go"><SIcon name="arrow-right" size={15} /></span></span></div>}
      </div>
      {compact ? (
        <div className="scard__viz" aria-hidden="true">
          {s.chips && <div className="chips">{s.chips.map(c => <span key={c} className="mini-chip">{c}</span>)}</div>}
          {s.pipeline && s.pipeline.map(([l, v]) => <div key={l} className="mini-pipe"><span style={{ width: 70 }}>{l}</span><i style={{ width: v * 2.4 + '%' }}></i><span>{v}</span></div>)}
          {s.spark && <svg viewBox="0 0 120 50" style={{ width: '100%', height: 70 }}><polyline fill="none" stroke="var(--mx-cyan-400)" strokeWidth="1.6" points={s.spark.map((v, k) => `${k * 10.9},${50 - v}`).join(' ')} /><polyline fill="rgba(47,123,255,.15)" stroke="none" points={'0,50 ' + s.spark.map((v, k) => `${k * 10.9},${50 - v}`).join(' ') + ' 120,50'} /></svg>}
        </div>
      ) : (
        <div className="scard__img">
          <img src={s.img} alt="" loading="lazy" decoding="async" />
          <div className="scard__foot"><span className="scard__stat"><b>{s.stat.v}</b>{s.stat.l}</span><span style={{ display: 'flex', alignItems: 'center' }}><span className="scard__cta">Ver más</span><span className="scard__go"><SIcon name="arrow-right" size={15} /></span></span></div>
        </div>
      )}
    </button>
  );
}

function Solutions({ onOpen }) {
  const S = MX_DATA.solutions;
  return (
    <section className="sec" id="soluciones" aria-labelledby="sol-t" style={{ paddingTop: 40 }}>
      <div className="mx-container">
        <div className="sol__head rv">
          <SHeading id="sol-t" eyebrow="Soluciones" title="Todo lo que tu empresa necesita" accent="para crecer digitalmente." />
          <p style={{ maxWidth: 400, color: 'var(--fg-3)' }}>Combinamos diseño, desarrollo y estrategia. Puedes empezar por una sola pieza y sumar las demás cuando el negocio lo pida.</p>
        </div>
        <div className="sol__grid">{S.filter(s => s.img).map((s, i) => <SolutionCard key={s.id} s={s} i={i} onOpen={onOpen} />)}</div>
        <div className="sol__grid2">{S.filter(s => !s.img).map((s, i) => <SolutionCard key={s.id} s={s} i={i} onOpen={onOpen} />)}</div>
      </div>
    </section>
  );
}

function SolutionModal({ id, onClose, onNav, onPropose }) {
  const S = MX_DATA.solutions;
  const idx = S.findIndex(s => s.id === id);
  const s = S[idx];
  return (
    <SDialog open={!!s} onClose={onClose} size="xl" label={s ? s.title : ''}>
      {s && (
        <div className="smod" key={s.id}>
          <div className={'smod__media' + (s.img ? '' : ' smod__media--viz')}>
            {s.img ? <img src={s.img} alt={'Ejemplo de ' + s.title} /> : <SIcon name={s.icon} size={120} strokeWidth={0.9} style={{ color: 'var(--mx-blue-400)', opacity: .5 }} />}
            <div className="smod__cap"><SBadge tone="accent">{s.n} · {s.cat}</SBadge><div style={{ font: '800 34px/1.05 var(--font-display)', color: '#fff', letterSpacing: '-.03em' }}>{s.title}</div></div>
          </div>
          <div className="smod__body">
            <div><h2>{s.detail.headline}</h2><p style={{ marginTop: 14, color: 'var(--fg-3)', fontSize: 16 }}>{s.detail.lead}</p></div>
            <div><div className="klabel">Construimos herramientas para gestionar</div>
              <ul className="checks">{s.detail.bullets.map(b => <li key={b}><SIcon name="check" size={15} />{b.charAt(0).toUpperCase() + b.slice(1)}</li>)}</ul></div>
            <div><div className="klabel">Ideal para</div><p style={{ color: 'var(--fg-2)', fontSize: 15 }}>{s.detail.ideal}</p></div>
            <div><div className="klabel">Podemos construir</div><div className="chips">{s.detail.build.map(b => <span key={b} className="mx-badge" style={{ textTransform: 'none', letterSpacing: 0, fontFamily: 'var(--font-body)', fontSize: 12.5, height: 28 }}>{b}</span>)}</div></div>
            <SButton size="lg" arrow onClick={() => onPropose({ type: s.id, need: s.title })}>Hablar sobre este proyecto</SButton>
            <div className="smod__nav">
              <SButton variant="link" icon="arrow-left" onClick={() => onNav(S[(idx - 1 + S.length) % S.length].id)}>{S[(idx - 1 + S.length) % S.length].title}</SButton>
              <span className="demo-note">{idx + 1} / {S.length}</span>
              <SButton variant="link" iconRight="arrow-right" onClick={() => onNav(S[(idx + 1) % S.length].id)}>{S[(idx + 1) % S.length].title}</SButton>
            </div>
          </div>
        </div>
      )}
    </SDialog>
  );
}

Object.assign(window, { ProblemSection, Solutions, SolutionModal });
