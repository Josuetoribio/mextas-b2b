const { Button: QButton, IconButton: QIconButton, Icon: QIcon, Badge: QBadge, GlassCard: QGlassCard, SectionHeading: QHeading, Dialog: QDialog } = window.MX;

function Process() {
  const P = MX_DATA.process;
  const [active, setActive] = React.useState(-1);
  const refs = React.useRef([]);
  React.useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { const i = +e.target.dataset.i; setActive(a => Math.max(a, i)); } }), { rootMargin: '0px 0px -35% 0px', threshold: .6 });
    refs.current.forEach(el => el && io.observe(el)); return () => io.disconnect();
  }, []);
  return (
    <section className="sec" id="proceso" aria-labelledby="proc-t">
      <div className="mx-container">
        <div className="rv"><QHeading id="proc-t" eyebrow="Cómo trabajamos" size="xl" title="De un problema a una" accent="solución funcionando." /></div>
        <ol className="proc" style={{ listStyle: 'none', margin: '72px 0 0', padding: 0 }}>
          <div className="proc__line" aria-hidden="true" style={{ '--p': Math.max(0, active) / (P.length - 1) }}><i></i></div>
          {P.map((s, i) => (
            <li key={s.n} ref={el => refs.current[i] = el} data-i={i} className={'pstep' + (i <= active ? ' on' : '')}>
              <span className="pstep__c"><QIcon name={s.icon} size={21} /></span>
              <span className="pstep__n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="pstep__out"><QIcon name="corner-down-right" size={13} />{s.out}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Cases({ onOpen }) {
  const C = MX_DATA.cases;
  const track = React.useRef(null);
  const scroll = (d) => { const el = track.current; if (el) el.scrollBy({ left: d * el.clientWidth * .8, behavior: 'smooth' }); };
  return (
    <section className="sec" id="casos" aria-labelledby="cases-t">
      <div className="glowbg" style={{ width: 800, height: 400, left: -300, top: 200 }}></div>
      <div className="mx-container">
        <div className="cases__head rv">
          <QHeading id="cases-t" eyebrow="Casos de éxito" title="Resultados que hablan" accent="por sí solos." />
          <div className="cases__ctrl">
            <QIconButton icon="chevron-left" label="Casos anteriores" onClick={() => scroll(-1)} />
            <QIconButton icon="chevron-right" label="Más casos" onClick={() => scroll(1)} />
          </div>
        </div>
        <div className="cases" ref={track}>
          {C.map((c, i) => (
            <button key={c.id} type="button" className="mx-card mx-card--interactive ccard rv" style={{ '--d': i * 90 + 'ms' }} onClick={() => onOpen(c.id)} aria-label={'Ver caso ' + c.name}>
              <div className="ccard__img"><img src={c.img} alt="" loading="lazy" decoding="async" /><div className="ccard__tag"><QBadge>{c.industry}</QBadge></div></div>
              <div className="ccard__b">
                <h3>{c.name}</h3>
                <div className="ccard__sol">{c.solutionShort}</div>
                <p style={{ fontSize: 14, color: 'var(--fg-3)' }}><span style={{ color: 'var(--fg-2)', fontWeight: 600 }}>Problema: </span>{c.problem}</p>
                <div className="ccard__m">{c.metrics.slice(0, 2).map(([v, l]) => <div key={l}><b>{v}</b><span>{l}</span></div>)}</div>
                <span className="ccard__more">Ver caso completo<QIcon name="arrow-right" size={15} /></span>
              </div>
            </button>
          ))}
        </div>
        <p className="demo-note rv" style={{ marginTop: 20 }}>Casos representativos con fines de demostración.</p>
      </div>
    </section>
  );
}

function CaseModal({ id, onClose, onNav, onPropose }) {
  const C = MX_DATA.cases;
  const i = C.findIndex(c => c.id === id);
  const c = C[i];
  const prev = C[(i - 1 + C.length) % C.length], next = C[(i + 1) % C.length];
  return (
    <QDialog open={!!c} onClose={onClose} size="xl" label={c ? 'Caso ' + c.name : ''}>
      {c && <div key={c.id} style={{ animation: 'mx-fade .4s var(--ease-out)' }}>
        <div className="cmod__hero"><img src={c.img} alt={'Equipo de ' + c.name} />
          <div className="cmod__ttl"><div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}><QBadge tone="accent">{c.industry}</QBadge><QBadge>{c.city}</QBadge></div><h2>{c.name}</h2><div style={{ color: 'var(--mx-blue-200)', fontWeight: 600 }}>{c.solutionShort}</div></div>
        </div>
        <div className="cmod__body">
          <div className="cmod__col">
            <div><div className="klabel">El reto</div><p>{c.reto}</p></div>
            <div><div className="klabel">La solución</div><p>{c.solucion}</p></div>
            <div><div className="klabel">Lo que construimos</div><ul className="checks">{c.built.map(b => <li key={b}><QIcon name="check" size={15} />{b}</li>)}</ul></div>
          </div>
          <div className="cmod__col">
            <div><div className="klabel">Resultado</div><p style={{ marginBottom: 14 }}>{c.result}</p><div className="cmod__metrics">{c.metrics.map(([v, l]) => <div key={l}><b>{v}</b><span>{l}</span></div>)}</div></div>
            <div><div className="klabel">Tecnologías</div><div className="chips">{c.tech.map(t => <QBadge key={t}>{t}</QBadge>)}</div></div>
            <QButton arrow fullWidth onClick={() => onPropose({ need: 'Proyecto similar a ' + c.name })}>Quiero un proyecto así</QButton>
          </div>
        </div>
        <div className="cmod__nav">
          <QButton variant="ghost" size="sm" icon="arrow-left" onClick={() => onNav(prev.id)}>Caso anterior · {prev.name}</QButton>
          <QButton variant="ghost" size="sm" iconRight="arrow-right" onClick={() => onNav(next.id)}>Siguiente caso · {next.name}</QButton>
        </div>
      </div>}
    </QDialog>
  );
}

function Counter({ to, prefix = '', suffix = '', run }) {
  const v = useCountUp(to, run, 1800);
  return <>{prefix}{Math.round(v)}{suffix}</>;
}

function Metrics() {
  const [ref, inView] = useInView({ threshold: .4 });
  const M = [[150, '+', '', 'proyectos desarrollados'], [98, '', '%', 'clientes satisfechos'], [3, '+', ' años', 'acompañando empresas'], [null, '', '', 'soluciones digitales trabajando', '24/7']];
  return (
    <section className="sec sec--tight" id="resultados" aria-labelledby="met-t">
      <div className="mx-container met">
        <a className="met__media rv" href="#proceso" aria-label="Conoce cómo trabajamos">
          <img src={MX_DATA.IMG + 'edificio.jpg'} alt="Oficinas de Mextas al atardecer" loading="lazy" />
          <div className="met__cap"><b>Conoce cómo<br /><span className="mx-accent">trabajamos</span></b><span>Ver el proceso<QIcon name="arrow-down" size={14} /></span></div>
        </a>
        <div ref={ref} className="rv" style={{ '--d': '120ms' }}>
          <QHeading id="met-t" eyebrow="Mextas en números" title="Empresas que crecen" accent="con tecnología propia." />
          <div className="met__grid">{M.map(([n, p, s, l, fixed]) => <div key={l}><div className="met__n">{fixed || <Counter to={n} prefix={p} suffix={s} run={inView} />}</div><div className="met__l">{l}</div></div>)}</div>
          <p className="demo-note" style={{ marginTop: 32 }}>Métricas representativas de demostración.</p>
        </div>
      </div>
    </section>
  );
}

function Stages({ onSolution }) {
  const ST = MX_DATA.stages, S = MX_DATA.solutions;
  const [sel, setSel] = React.useState(null);
  const s = ST.find(x => x.id === sel);
  return (
    <section className="sec" id="etapas" aria-labelledby="stg-t">
      <div className="mx-container">
        <div className="rv"><QHeading id="stg-t" eyebrow="Para empresas que…" title="No importa en qué" accent="punto estés." description="Elige la etapa que mejor describe a tu empresa y te mostramos por dónde conviene empezar." /></div>
        <div className="stg" role="group" aria-label="Etapa de tu empresa">
          {ST.map((x, i) => <button key={x.id} type="button" className="stg__c rv" style={{ '--d': i * 70 + 'ms' }} aria-pressed={sel === x.id} onClick={() => setSel(sel === x.id ? null : x.id)}><span className="stg__i"><QIcon name={x.icon} size={19} /></span><h3>{x.title}</h3><p>{x.text}</p></button>)}
        </div>
        {s ? (
          <QGlassCard glow className="stg__rec" padding="none" key={s.id} aria-live="polite">
            <div><div className="klabel">Recomendación para “{s.title.toLowerCase()}”</div><p style={{ color: 'var(--fg-2)', fontSize: 16.5, lineHeight: 1.6 }}>{s.note}</p></div>
            <div className="stg__list">{s.rec.map(id => { const x = S.find(q => q.id === id); return <button key={id} type="button" className="stg__sol" onClick={() => onSolution(id)}><QIcon name={x.icon} size={20} style={{ color: 'var(--fg-accent)' }} /><b>{x.title}</b><span>{x.desc}</span></button>; })}</div>
          </QGlassCard>
        ) : <p className="demo-note" style={{ marginTop: 18 }}>Selecciona una opción para ver la recomendación.</p>}
      </div>
    </section>
  );
}

Object.assign(window, { Process, Cases, CaseModal, Metrics, Stages });
