function App() {
  const [sol, setSol] = React.useState(null);
  const [cas, setCas] = React.useState(null);
  const [form, setForm] = React.useState({ open: false, preset: null, mode: 'propose' });
  const propose = (preset) => { setSol(null); setCas(null); setForm({ open: true, preset: preset && preset.nativeEvent ? null : preset, mode: 'propose' }); };
  const talk = () => setForm({ open: true, preset: null, mode: 'talk' });
  React.useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    const scan = () => document.querySelectorAll('.rv:not(.is-in)').forEach(el => io.observe(el));
    scan(); const mo = new MutationObserver(scan); mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, []);
  return (
    <div className="mx-root">
      <a href="#main" className="mx-btn mx-btn--primary mx-btn--sm" style={{ position: 'fixed', top: -60, left: 16, zIndex: 200 }} onFocus={e => e.target.style.top = '12px'} onBlur={e => e.target.style.top = '-60px'}>Saltar al contenido</a>
      <Nav onPropose={() => propose()} />
      <main id="main">
        <Hero onPropose={() => propose()} />
        <TrustBar />
        <ProblemSection onSolution={setSol} onPropose={propose} />
        <Solutions onOpen={setSol} />
        <Automation onSolution={setSol} />
        <Systems onSolution={setSol} />
        <Analytics onSolution={setSol} />
        <Process />
        <Cases onOpen={setCas} />
        <Metrics />
        <Stages onSolution={setSol} />
        <Diagnostic onPropose={propose} />
        <About />
        <FinalCTA onPropose={() => propose()} onTalk={talk} />
      </main>
      <Footer onPropose={() => propose()} onSolution={setSol} />
      <SolutionModal id={sol} onClose={() => setSol(null)} onNav={setSol} onPropose={propose} />
      <CaseModal id={cas} onClose={() => setCas(null)} onNav={setCas} onPropose={propose} />
      <ContactDialog open={form.open} preset={form.preset} mode={form.mode} onClose={() => setForm(f => ({ ...f, open: false }))} />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
