const { Button: CButton, Icon: CIcon, Badge: CBadge, GlassCard: CGlassCard, SectionHeading: CHeading, Dialog: CDialog, Input: CInput, Select: CSelect, OptionCard: COption, Wordmark: CWordmark } = window.MX;

function Diagnostic({ onPropose }) {
  const D = MX_DATA;
  const [step, setStep] = React.useState(0);
  const [a, setA] = React.useState({ goal: null, size: null, timing: null });
  const Q = [
    { k: 'goal', q: '¿Qué quieres conseguir?', opts: D.goals.map(([v, l, i]) => ({ v, l, i })) },
    { k: 'size', q: '¿Qué tamaño tiene tu empresa?', opts: D.sizes.map(s => ({ v: s, l: s === '1–5 personas' ? s : s + ' personas' })) },
    { k: 'timing', q: '¿Qué tan pronto quieres comenzar?', opts: D.timing.map(([v, l]) => ({ v, l })) }
  ];
  const done = step === 3;
  const label = (k) => { const q = Q.find(x => x.k === k); const o = q.opts.find(x => x.v === a[k]); return o ? o.l : '—'; };
  const rec = React.useMemo(() => {
    if (!a.goal) return [];
    let r = [...D.goalRec[a.goal]];
    const big = ['51–100', '100+'].includes(a.size), small = a.size === '1–5 personas';
    if (big && !r.includes('integraciones')) r[2] = 'integraciones';
    if (small && r.includes('sistemas')) r = r.map(x => x === 'sistemas' ? 'web' : x);
    return [...new Set(r)].map(id => D.solutions.find(s => s.id === id));
  }, [a]);
  const next = () => setStep(s => Math.min(3, s + 1));
  const pick = (k, v) => { setA(p => ({ ...p, [k]: v })); setTimeout(next, 260); };
  const nextStepCopy = { explorando: 'Te enviamos un diagnóstico por escrito para que lo revises con calma.', pronto: 'Agendamos una llamada de 30 minutos para aterrizar alcance y prioridades.', mes: 'Preparamos una propuesta con alcance, fases y tiempos en menos de una semana.', ya: 'Un especialista te contacta en menos de 24 horas para arrancar con un diagnóstico exprés.' }[a.timing];
  return (
    <section className="sec" id="diagnostico" aria-labelledby="dx-t">
      <div className="glowbg" style={{ width: 700, height: 600, left: '30%', top: 60 }}></div>
      <div className="mx-container dx">
        <div className="dx__side rv">
          <CHeading id="dx-t" eyebrow="Diagnóstico digital" title="Cuéntanos qué" accent="quieres mejorar." description="Tres preguntas, menos de un minuto. Te decimos con qué podríamos ayudarte y cuál sería el siguiente paso." />
          <div className="dx__sum" aria-label="Tus respuestas">
            <div><span>Objetivo</span><b>{label('goal')}</b></div>
            <div><span>Tamaño</span><b>{label('size')}</b></div>
            <div><span>Inicio</span><b>{label('timing')}</b></div>
          </div>
        </div>
        <CGlassCard className="dx__card rv" padding="none" style={{ '--d': '120ms' }}>
          <div className="dx__prog" aria-hidden="true">{[0, 1, 2, 3].map(i => <i key={i} className={i <= step ? 'on' : ''}></i>)}</div>
          {!done ? (
            <div key={step}>
              <fieldset className="dx__step" style={{ border: 0, margin: 0, minWidth: 0 }}>
                <legend className="demo-note" style={{ padding: 0 }}>Paso {step + 1} de 3</legend>
                <div className="dx__q">{Q[step].q}</div>
                <div className="dx__opts">{Q[step].opts.map(o => <COption key={o.v} name={Q[step].k} value={o.v} label={o.l} icon={o.i} checked={a[Q[step].k] === o.v} onChange={(v) => pick(Q[step].k, v)} />)}</div>
              </fieldset>
              <div className="dx__foot">
                <CButton variant="ghost" size="sm" icon="arrow-left" disabled={step === 0} onClick={() => setStep(s => s - 1)}>Atrás</CButton>
                <CButton variant="accent" size="sm" arrow disabled={!a[Q[step].k]} onClick={next}>{step === 2 ? 'Ver recomendación' : 'Continuar'}</CButton>
              </div>
            </div>
          ) : (
            <div className="dx__res" aria-live="polite">
              <CBadge tone="accent">Por lo que nos cuentas</CBadge>
              <div className="dx__q" style={{ margin: 0 }}>Podríamos ayudarte con:</div>
              <ul className="dx__recs">{rec.map(s => <li key={s.id}><span className="ck"><CIcon name="check" size={15} strokeWidth={2.4} /></span><div><b>{s.title}</b><br /><span>{s.desc}</span></div></li>)}</ul>
              <div><div className="klabel">Siguiente paso</div><p style={{ color: 'var(--fg-2)' }}>{nextStepCopy}</p></div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <CButton variant="ghost" size="sm" icon="rotate-ccw" onClick={() => { setA({ goal: null, size: null, timing: null }); setStep(0); }}>Empezar de nuevo</CButton>
                <CButton arrow onClick={() => onPropose({ need: rec.map(r => r.title).join(', '), type: rec[0] && rec[0].id, size: a.size })}>Solicitar diagnóstico</CButton>
              </div>
              <p className="demo-note">Recomendación orientativa. No calculamos precios sin conocer el alcance.</p>
            </div>
          )}
        </CGlassCard>
      </div>
    </section>
  );
}

function About() {
  const P = [['compass', 'Estrategia', 'Entendemos antes de construir.'], ['cpu', 'Tecnología', 'Utilizamos herramientas modernas y soluciones personalizadas.'], ['briefcase-business', 'Negocio', 'Cada proyecto debe tener un propósito empresarial.']];
  return (
    <section className="sec" id="nosotros" aria-labelledby="about-t">
      <div className="mx-container about">
        <div className="about__img rv"><img src={MX_DATA.IMG + 'oficina-crecimiento.jpg'} alt="Equipo de Mextas trabajando frente a tableros de crecimiento" loading="lazy" /></div>
        <div className="rv" style={{ '--d': '100ms' }}>
          <CHeading id="about-t" eyebrow="Sobre Mextas" title="Tecnología que" accent="entiende el negocio." description="Mextas combina estrategia, diseño y desarrollo para construir soluciones digitales que realmente se integran en la operación de una empresa." />
          <div className="pillars">{P.map(([i, t, d]) => <div key={t} className="pillar"><span className="i"><CIcon name={i} size={19} /></span><h3>{t}</h3><p>{d}</p></div>)}</div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ onPropose, onTalk }) {
  return (
    <section className="cta" id="contacto" aria-labelledby="cta-t">
      <div className="cta__bg"><img src={MX_DATA.IMG + 'cta-montanas.jpg'} alt="" loading="lazy" /></div>
      <div className="mx-container">
        <div className="cta__in rv">
          <window.MX.Eyebrow>Tu próximo paso</window.MX.Eyebrow>
          <h2 id="cta-t">Tu próximo crecimiento puede <span className="mx-accent">empezar aquí.</span></h2>
          <p>Cuéntanos qué quieres mejorar y diseñaremos una solución alrededor de tu negocio.</p>
          <div className="hero__ctas"><CButton size="lg" arrow onClick={onPropose}>Solicitar propuesta</CButton><CButton size="lg" variant="secondary" icon="message-circle" onClick={onTalk}>Hablar con Mextas</CButton></div>
          <div className="cta__pts">{['Respuesta en menos de 24 horas', 'Sin compromiso', 'Atención personalizada'].map(t => <span key={t}><CIcon name="circle-check" size={16} />{t}</span>)}</div>
        </div>
      </div>
    </section>
  );
}

const TYPES = [['web', 'Web'], ['ecommerce', 'E-commerce'], ['sistemas', 'Sistema'], ['automatizacion', 'Automatización'], ['marketing', 'Marketing / SEO'], ['integraciones', 'Integración'], ['otro', 'Otro']];
const TYPE_MAP = { crm: 'sistemas', analitica: 'sistemas' };

function ContactDialog({ open, preset, mode, onClose }) {
  const empty = { nombre: '', empresa: '', correo: '', telefono: '', necesidad: '', presupuesto: '', mensaje: '', tipo: '' };
  const [f, setF] = React.useState(empty);
  const [err, setErr] = React.useState({});
  const [state, setState] = React.useState('idle');
  React.useEffect(() => { if (open) { setState('idle'); setErr({}); setF({ ...empty, necesidad: (preset && preset.need) || '', tipo: preset && preset.type ? (TYPE_MAP[preset.type] || preset.type) : '' }); } }, [open]);
  const set = (k) => (e) => { setF(p => ({ ...p, [k]: e.target.value })); if (err[k]) setErr(p => ({ ...p, [k]: null })); };
  const submit = (e) => {
    e.preventDefault();
    const x = {};
    if (!f.nombre.trim()) x.nombre = 'Escribe tu nombre.';
    if (!f.empresa.trim()) x.empresa = 'Indica el nombre de tu empresa.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.correo)) x.correo = 'Revisa el formato del correo.';
    if (f.telefono && f.telefono.replace(/\D/g, '').length < 10) x.telefono = 'Usa 10 dígitos.';
    if (!f.tipo) x.tipo = 'Selecciona un tipo de proyecto.';
    setErr(x); if (Object.keys(x).length) return;
    setState('sending'); setTimeout(() => setState('ok'), 1400);
  };
  const talk = mode === 'talk';
  return (
    <CDialog open={open} onClose={onClose} size="md" title={state === 'ok' ? null : (talk ? 'Hablar con Mextas' : 'Solicitar propuesta')} label="Formulario de contacto">
      {state === 'ok' ? (
        <div className="ok">
          <span className="ok__i"><CIcon name="check" size={32} strokeWidth={2.2} /></span>
          <h2>Recibimos tu proyecto.</h2>
          <p>Gracias por compartirlo. Un especialista de Mextas revisaría la información para definir el siguiente paso.</p>
          <span className="ok__ref">Folio de demostración · MX-{String(Date.now()).slice(-6)}</span>
          <CButton arrow onClick={onClose}>Volver al sitio</CButton>
        </div>
      ) : (
        <form className="form" onSubmit={submit} noValidate>
          <p className="full" style={{ color: 'var(--fg-3)', fontSize: 14.5, marginTop: -8 }}>{talk ? 'Déjanos tus datos y te contactamos para platicar sin compromiso.' : 'Cinco minutos para contarnos lo esencial. Respondemos en menos de 24 horas hábiles.'}</p>
          <CInput label="Nombre" required value={f.nombre} onChange={set('nombre')} error={err.nombre} autoComplete="name" placeholder="Ana Martínez" />
          <CInput label="Empresa" required value={f.empresa} onChange={set('empresa')} error={err.empresa} autoComplete="organization" placeholder="Grupo Industrial del Norte" />
          <CInput label="Correo" type="email" required value={f.correo} onChange={set('correo')} error={err.correo} autoComplete="email" placeholder="ana@empresa.mx" />
          <CInput label="Teléfono" type="tel" value={f.telefono} onChange={set('telefono')} error={err.telefono} autoComplete="tel" placeholder="55 1234 5678" />
          <div className="full mx-field" role="group" aria-labelledby="tipo-l">
            <span id="tipo-l" className="mx-field__label">Tipo de proyecto<span className="mx-field__req">*</span></span>
            <div className="types">{TYPES.map(([v, l]) => <button key={v} type="button" className="type" aria-pressed={f.tipo === v} onClick={() => { setF(p => ({ ...p, tipo: v })); setErr(p => ({ ...p, tipo: null })); }}>{l}</button>)}</div>
            {err.tipo && <span className="mx-field__error">{err.tipo}</span>}
          </div>
          <CInput className="full" label="¿Qué necesitas?" value={f.necesidad} onChange={set('necesidad')} placeholder="Ej. automatizar el seguimiento de clientes" />
          {!talk && <CSelect className="full" label="Presupuesto aproximado" value={f.presupuesto} onChange={set('presupuesto')} placeholder="Selecciona un rango" hint="Nos ayuda a proponer el alcance adecuado." options={['Menos de $50,000 MXN', '$50,000 – $150,000 MXN', '$150,000 – $400,000 MXN', 'Más de $400,000 MXN', 'Aún no lo sé']} />}
          <CInput className="full" label="Cuéntanos brevemente sobre tu proyecto" multiline rows={3} value={f.mensaje} onChange={set('mensaje')} placeholder="Contexto, qué usan hoy y qué les gustaría lograr." />
          <div className="full form__foot">
            <span className="demo-note" style={{ display: 'flex', alignItems: 'center', gap: 6 }}><CIcon name="lock" size={13} />Demo: no se envía información.</span>
            <CButton type="submit" arrow={state !== 'sending'} disabled={state === 'sending'} icon={null}>{state === 'sending' ? <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><span className="spin"></span>Enviando…</span> : 'Enviar proyecto'}</CButton>
          </div>
        </form>
      )}
    </CDialog>
  );
}

function Footer({ onPropose, onSolution }) {
  const sol = [['Web', 'web'], ['E-commerce', 'ecommerce'], ['Sistemas', 'sistemas'], ['Automatización', 'automatizacion'], ['Marketing', 'marketing'], ['SEO', 'marketing'], ['Integraciones', 'integraciones']];
  return (
    <footer className="foot">
      <div className="mx-container">
        <div className="foot__g">
          <div><CWordmark href="#top" size={26} /><p style={{ marginTop: 16, color: 'var(--fg-3)', maxWidth: 300 }}>Tecnología para empresas que quieren crecer.</p></div>
          <div><h4>Soluciones</h4><ul>{sol.map(([l, id]) => <li key={l}><button type="button" onClick={() => onSolution(id)}>{l}</button></li>)}</ul></div>
          <div><h4>Empresa</h4><ul>{[['Nosotros', 'nosotros'], ['Proceso', 'proceso'], ['Casos de éxito', 'casos'], ['Contacto', 'contacto']].map(([l, id]) => <li key={l}><a href={'#' + id}>{l}</a></li>)}</ul></div>
          <div><h4>Contacto</h4><ul><li><button type="button" onClick={() => onPropose()}>Solicitar propuesta</button></li><li><a href="#diagnostico">Diagnóstico digital</a></li></ul></div>
        </div>
        <div className="foot__b"><span>© 2026 Mextas</span><span>Soluciones digitales para empresas.</span></div>
      </div>
    </footer>
  );
}

Object.assign(window, { Diagnostic, About, FinalCTA, ContactDialog, Footer });
