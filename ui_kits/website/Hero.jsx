const { Button, IconButton, Icon, Eyebrow, Badge, Wordmark, MetricCard } = window.MX;

function useInView(opts = {}) {
  const ref = React.useRef(null);
  const [inView, set] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { set(true); if (!opts.repeat) io.disconnect(); } else if (opts.repeat) set(false); }, { threshold: opts.threshold ?? .3, rootMargin: opts.rootMargin });
    io.observe(el); return () => io.disconnect();
  }, []);
  return [ref, inView];
}

function useCountUp(target, run, dur = 1600) {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    if (!run) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setV(target); return; }
    let raf, t0;
    const step = (t) => { t0 = t0 || t; const p = Math.min(1, (t - t0) / dur); setV(target * (1 - Math.pow(1 - p, 3))); if (p < 1) raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step); return () => cancelAnimationFrame(raf);
  }, [target, run]);
  return v;
}

const NAV = [['soluciones', 'Soluciones'], ['proceso', 'Cómo trabajamos'], ['casos', 'Casos de éxito'], ['etapas', 'Empresas'], ['nosotros', 'Nosotros'], ['contacto', 'Contacto']];

function Nav({ onPropose }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState('');
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener('scroll', on, { passive: true });
    const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }), { rootMargin: '-45% 0px -50% 0px' });
    NAV.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el); });
    return () => { window.removeEventListener('scroll', on); io.disconnect(); };
  }, []);
  React.useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);
  return (
    <header className={'nav' + (scrolled ? ' nav--scrolled' : '')}>
      <div className="mx-container nav__in">
        <Wordmark href="#top" size={23} />
        <nav aria-label="Principal">
          <ul className="nav__links">
            {NAV.map(([id, l]) => <li key={id}><a className="nav__link" href={'#' + id} aria-current={active === id}>{l}</a></li>)}
          </ul>
        </nav>
        <div className="nav__cta"><Button size="sm" arrow onClick={onPropose}>Solicitar propuesta</Button></div>
        <IconButton className="nav__burger" icon={open ? 'x' : 'menu'} label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)} aria-expanded={open} />
      </div>
      {open && (
        <div className="mnav" role="dialog" aria-label="Menú">
          {NAV.map(([id, l]) => <a key={id} href={'#' + id} onClick={() => setOpen(false)}>{l}<Icon name="arrow-up-right" size={20} /></a>)}
          <div className="mnav__cta">
            <Button size="lg" arrow fullWidth onClick={() => { setOpen(false); onPropose(); }}>Solicitar propuesta</Button>
            <Button size="lg" variant="secondary" fullWidth href="#diagnostico" onClick={() => setOpen(false)}>Diagnóstico digital</Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ onPropose }) {
  const bg = React.useRef(null);
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf;
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { const y = Math.min(window.scrollY, 900); if (bg.current) bg.current.style.transform = `translate3d(0,${y * 0.12}px,0) scale(${1 + y * 0.00005})`; }); };
    window.addEventListener('scroll', on, { passive: true }); return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <section className="hero" id="top" aria-labelledby="hero-t">
      <div className="hero__bg" ref={bg}><img src={MX_DATA.IMG + 'hero.jpg'} alt="Dos especialistas de Mextas revisan un tablero de crecimiento en una oficina" fetchpriority="high" /></div>
      <div className="hero__shade"></div>
      <div className="mx-container hero__grid">
        <div className="hero__copy">
          <div className="rv"><Eyebrow>Soluciones digitales para empresas</Eyebrow></div>
          <h1 id="hero-t" className="rv" style={{ '--d': '80ms' }}>Tu empresa puede funcionar mejor. <span className="mx-accent">Nosotros construimos cómo.</span></h1>
          <p className="hero__lead rv" style={{ '--d': '160ms' }}>Diseñamos y desarrollamos soluciones digitales que ayudan a las empresas a vender más, operar mejor y crecer con tecnología.</p>
          <div className="hero__ctas rv" style={{ '--d': '240ms' }}>
            <Button size="lg" arrow onClick={onPropose}>Solicitar propuesta</Button>
            <Button size="lg" variant="secondary" href="#soluciones">Ver soluciones</Button>
          </div>
          <ul className="hero__pills rv" style={{ '--d': '320ms', listStyle: 'none', padding: 0, margin: 0 }}>
            {[['puzzle', 'Soluciones a la medida'], ['target', 'Tecnología orientada a resultados'], ['life-buoy', 'Acompañamiento continuo']].map(([i, l]) => <li key={l} className="hero__pill"><span className="i"><Icon name={i} size={15} /></span>{l}</li>)}
          </ul>
        </div>
        <div className="hero__stack" aria-label="Resultados de ejemplo">
          {[['trending-up', 'Crecimiento', '+230%', 'ventas online'], ['workflow', 'Automatización', '+12h', 'ahorradas / semana'], ['users', 'Clientes', '+180%', 'oportunidades']].map(([i, l, v, c], k) => (
            <div key={l} className="rv" style={{ '--d': 420 + k * 140 + 'ms' }}><div className="float"><MetricCard icon={i} label={l} value={v} caption={c} /></div></div>
          ))}
        </div>
      </div>
      <a className="hero__scroll" href="#empresas" aria-label="Ir a la siguiente sección">Explorar<i></i></a>
    </section>
  );
}

function TrustItem({ name }) {
  const cls = { 'Grupo Lumen': 'lumen', 'Novatec': 'novatec', 'Constructa': 'constructa', 'Distribuidora Orión': 'orion', 'Alpha': 'alpha', 'Rivera': 'rivera' }[name];
  const inner = cls === 'orion' ? <span className="wm wm--orion"><small>DISTRIBUIDORA</small><b>ORIÓN</b></span>
    : cls === 'lumen' ? <span className="wm wm--lumen">Grupo·Lumen</span>
    : <span className={'wm wm--' + cls}>{cls === 'constructa' ? 'Constructa' : name.toUpperCase()}</span>;
  return <div className="trust__item" title={name}>{inner}</div>;
}

function TrustBar() {
  return (
    <section className="trust" id="empresas" aria-label="Empresas que confían en Mextas">
      <div className="mx-container">
        <div className="trust__label"><Eyebrow tone="muted" mark={false}>Empresas que confían en Mextas</Eyebrow></div>
        <div className="trust__row">
          <div className="trust__track">
            {MX_DATA.trust.map(n => <TrustItem key={n} name={n} />)}
            {MX_DATA.trust.map(n => <div key={'d' + n} className="trust__dup" aria-hidden="true" style={{ display: 'contents' }}><TrustItem name={n} /></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { useInView, useCountUp, Nav, Hero, TrustBar });
