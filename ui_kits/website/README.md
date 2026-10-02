# Mextas — Website UI kit
Full interactive B2B landing. Open `index.html`.

- `data.js` — all local/mock content (solutions, problems, flow, dashboards, cases, diagnosis rules)
- `Hero.jsx` — `useInView`, `useCountUp`, `Nav` (scroll state, mobile menu), `Hero` (parallax, KPI chips), `TrustBar`
- `Solutions.jsx` — `ProblemSection` (problem picker → solution/result), `Solutions` grid, `SolutionModal`
- `Platform.jsx` — `Automation` flow (animated nodes, tooltips), `Systems` demo app (tabs/modules), `Analytics` dashboard
- `Proof.jsx` — `Process` scroll timeline, `Cases` + `CaseModal` (prev/next), `Metrics` counters, `Stages` picker
- `Convert.jsx` — `Diagnostic` configurator, `About`, `FinalCTA`, `ContactDialog` (validation → sending → success), `Footer`
- `site.css` — page-level layout; primitives come from the design system (`window.MX`)
- `ds-loader.js` — uses `_ds_bundle.js` if compiled, else loads component sources directly

No network requests: the form simulates sending.
