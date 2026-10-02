/* @ds-bundle: {"format":4,"namespace":"MextasDesignSystem_752eb8","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"OptionCard","sourcePath":"components/forms/OptionCard.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlays/Dialog.jsx"},{"name":"GlassCard","sourcePath":"components/surfaces/GlassCard.jsx"},{"name":"MetricCard","sourcePath":"components/surfaces/MetricCard.jsx"},{"name":"SectionHeading","sourcePath":"components/surfaces/SectionHeading.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"bd3569d6bec1","components/core/Button.jsx":"481bfc60bc57","components/core/Eyebrow.jsx":"80265c44b9e0","components/core/Icon.jsx":"aa4d03e7e4ec","components/core/IconButton.jsx":"26e55d3d814d","components/core/Wordmark.jsx":"b70692df31cf","components/forms/Input.jsx":"56f1c0d18839","components/forms/OptionCard.jsx":"ad8c38d8a06d","components/forms/Select.jsx":"1c10f72e8989","components/navigation/Tabs.jsx":"1fd48dfeaab3","components/overlays/Dialog.jsx":"711283bed644","components/surfaces/GlassCard.jsx":"9dc70c54aea3","components/surfaces/MetricCard.jsx":"6c9c0a3c3f30","components/surfaces/SectionHeading.jsx":"6b82cfa7d880","ui_kits/website/App.jsx":"88fb012bc967","ui_kits/website/Convert.jsx":"89f97793cb31","ui_kits/website/Hero.jsx":"1bd576d40be0","ui_kits/website/Platform.jsx":"f986ac195ccc","ui_kits/website/Proof.jsx":"66054c877782","ui_kits/website/Solutions.jsx":"fbec523d606a","ui_kits/website/data.js":"3b572f982e7b","ui_kits/website/ds-loader.js":"8b8367a365d9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MextasDesignSystem_752eb8 = window.MextasDesignSystem_752eb8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  className
}) {
  return React.createElement('span', {
    className: cx('mx-badge', tone !== 'neutral' && 'mx-badge--' + tone, className)
  }, dot && React.createElement('span', {
    className: 'mx-badge__dot'
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function Eyebrow({
  children,
  tone = 'accent',
  mark = true,
  className
}) {
  return React.createElement('span', {
    className: cx('mx-eyebrow', tone === 'muted' && 'mx-eyebrow--muted', className)
  }, mark && React.createElement('span', {
    className: 'mx-eyebrow__mark',
    'aria-hidden': true
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const toPascal = n => n.replace(/(^|[-_ ])(\w)/g, (_, __, c) => c.toUpperCase());
function Icon({
  name,
  size = 18,
  strokeWidth = 1.75,
  className,
  style,
  label
}) {
  const lib = typeof window !== 'undefined' && window.lucide && window.lucide.icons || {};
  let node = lib[toPascal(name || '')] || lib[name];
  if (node && node[0] === 'svg') node = node[2];
  const kids = (node || []).map(([tag, attrs], i) => React.createElement(tag, {
    ...attrs,
    key: i
  }));
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    style: {
      flex: 'none',
      ...style
    },
    'aria-hidden': label ? undefined : true,
    role: label ? 'img' : undefined,
    'aria-label': label
  }, kids);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function Button({
  variant = 'primary',
  size = 'md',
  arrow = false,
  icon,
  iconRight,
  fullWidth,
  href,
  className,
  children,
  type = 'button',
  ...rest
}) {
  const cls = cx('mx-btn', 'mx-btn--' + variant, size !== 'md' && 'mx-btn--' + size, fullWidth && 'mx-btn--full', className);
  const inner = [icon && React.createElement(__ds_scope.Icon, {
    key: 'i',
    name: icon,
    size: size === 'sm' ? 15 : 17
  }), React.createElement('span', {
    key: 't'
  }, children), (arrow || iconRight) && React.createElement(__ds_scope.Icon, {
    key: 'a',
    name: iconRight || 'arrow-right',
    size: size === 'sm' ? 15 : 17,
    className: 'mx-btn__arrow'
  })];
  if (href) return React.createElement('a', {
    href,
    className: cls,
    ...rest
  }, inner);
  return React.createElement('button', {
    type,
    className: cls,
    ...rest
  }, inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function IconButton({
  icon,
  label,
  variant = 'glass',
  size = 'md',
  className,
  ...rest
}) {
  return React.createElement('button', {
    type: 'button',
    'aria-label': label,
    title: label,
    className: cx('mx-iconbtn', variant === 'solid' && 'mx-iconbtn--solid', size !== 'md' && 'mx-iconbtn--' + size, className),
    ...rest
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 15 : size === 'lg' ? 20 : 17
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function Wordmark({
  size = 22,
  href,
  className,
  ...rest
}) {
  const kids = ['Mextas', React.createElement('span', {
    key: 'd',
    className: 'mx-wordmark__dot'
  }, '.')];
  const p = {
    className: cx('mx-wordmark', className),
    style: {
      fontSize: size
    },
    ...rest
  };
  return href ? React.createElement('a', {
    href,
    'aria-label': 'Mextas — inicio',
    ...p
  }, kids) : React.createElement('span', p, kids);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function Input({
  label,
  id,
  hint,
  error,
  required,
  multiline = false,
  className,
  ...rest
}) {
  const fid = id || 'f-' + (label || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const ctl = React.createElement(multiline ? 'textarea' : 'input', {
    id: fid,
    required,
    'aria-invalid': !!error || undefined,
    'aria-describedby': hint || error ? fid + '-d' : undefined,
    className: cx('mx-input', error && 'mx-input--error'),
    ...rest
  });
  return React.createElement('div', {
    className: cx('mx-field', className)
  }, label && React.createElement('label', {
    htmlFor: fid,
    className: 'mx-field__label'
  }, label, required && React.createElement('span', {
    className: 'mx-field__req',
    'aria-hidden': true
  }, '*')), ctl, (error || hint) && React.createElement('span', {
    id: fid + '-d',
    className: error ? 'mx-field__error' : 'mx-field__hint'
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/OptionCard.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function OptionCard({
  type = 'radio',
  name,
  value,
  checked,
  onChange,
  label,
  description,
  icon,
  className
}) {
  return React.createElement('label', {
    className: cx('mx-option', type === 'checkbox' && 'mx-option--checkbox', checked && 'mx-option--checked', className)
  }, React.createElement('input', {
    type,
    name,
    value,
    checked: !!checked,
    onChange: e => onChange && onChange(value, e)
  }), React.createElement('span', {
    className: 'mx-option__ind',
    'aria-hidden': true
  }), icon && React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    className: 'mx-option__icon'
  }), React.createElement('span', {
    className: 'mx-option__body'
  }, React.createElement('span', null, label), description && React.createElement('span', {
    className: 'mx-option__desc'
  }, description)));
}
Object.assign(__ds_scope, { OptionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/OptionCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function Select({
  label,
  id,
  options = [],
  placeholder,
  hint,
  error,
  required,
  className,
  ...rest
}) {
  const fid = id || 's-' + (label || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return React.createElement('div', {
    className: cx('mx-field', className)
  }, label && React.createElement('label', {
    htmlFor: fid,
    className: 'mx-field__label'
  }, label, required && React.createElement('span', {
    className: 'mx-field__req',
    'aria-hidden': true
  }, '*')), React.createElement('div', {
    className: 'mx-select'
  }, React.createElement('select', {
    id: fid,
    required,
    className: cx('mx-input', error && 'mx-input--error'),
    ...rest
  }, placeholder && React.createElement('option', {
    value: ''
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return React.createElement('option', {
      key: v.value,
      value: v.value
    }, v.label);
  })), React.createElement(__ds_scope.Icon, {
    name: 'chevron-down',
    size: 16,
    className: 'mx-select__chev'
  })), (error || hint) && React.createElement('span', {
    className: error ? 'mx-field__error' : 'mx-field__hint'
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function Tabs({
  tabs = [],
  value,
  onChange,
  variant = 'pill',
  label,
  className
}) {
  const ref = React.useRef(null);
  const [ind, setInd] = React.useState({
    x: 0,
    w: 0
  });
  React.useLayoutEffect(() => {
    const el = ref.current && ref.current.querySelector('[aria-selected="true"]');
    if (el) setInd({
      x: el.offsetLeft,
      w: el.offsetWidth
    });
  }, [value, tabs.length]);
  const onKey = e => {
    const i = tabs.findIndex(t => t.id === value);
    let n = i;
    if (e.key === 'ArrowRight') n = (i + 1) % tabs.length;else if (e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;else return;
    e.preventDefault();
    onChange && onChange(tabs[n].id);
    const b = ref.current.querySelectorAll('[role=tab]')[n];
    b && b.focus();
  };
  return React.createElement('div', {
    ref,
    role: 'tablist',
    'aria-label': label,
    className: cx('mx-tabs', variant === 'underline' && 'mx-tabs--underline', className),
    onKeyDown: onKey
  }, React.createElement('span', {
    className: 'mx-tabs__ind',
    style: {
      transform: 'translateX(' + ind.x + 'px)',
      width: ind.w
    },
    'aria-hidden': true
  }), tabs.map(t => React.createElement('button', {
    key: t.id,
    type: 'button',
    role: 'tab',
    'aria-selected': t.id === value,
    tabIndex: t.id === value ? 0 : -1,
    className: 'mx-tab',
    onClick: () => onChange && onChange(t.id)
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Dialog.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function Dialog({
  open,
  onClose,
  title,
  size = 'lg',
  variant = 'modal',
  label,
  children,
  className
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const prev = document.activeElement;
    const k = e => {
      if (e.key === 'Escape') onClose && onClose();
      if (e.key === 'Tab' && ref.current) {
        const f = ref.current.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const a = f[0],
          b = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) {
          e.preventDefault();
          b.focus();
        } else if (!e.shiftKey && document.activeElement === b) {
          e.preventDefault();
          a.focus();
        }
      }
    };
    document.addEventListener('keydown', k);
    const o = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      ref.current && ref.current.focus();
    }, 20);
    return () => {
      document.removeEventListener('keydown', k);
      document.body.style.overflow = o;
      prev && prev.focus && prev.focus();
    };
  }, [open]);
  if (!open) return null;
  return React.createElement('div', {
    className: cx('mx-dialog-backdrop mx-root', variant === 'drawer' && 'mx-dialog-backdrop--drawer'),
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose && onClose();
    }
  }, React.createElement('div', {
    ref,
    role: 'dialog',
    'aria-modal': true,
    'aria-label': label || (typeof title === 'string' ? title : undefined),
    tabIndex: -1,
    className: cx('mx-dialog', 'mx-dialog--' + size, className)
  }, React.createElement(__ds_scope.IconButton, {
    icon: 'x',
    label: 'Cerrar',
    size: 'sm',
    className: 'mx-dialog__close',
    onClick: onClose
  }), title && React.createElement('div', {
    className: 'mx-dialog__head'
  }, React.createElement('h2', {
    className: 'mx-dialog__title'
  }, title)), title ? React.createElement('div', {
    className: 'mx-dialog__body'
  }, children) : children));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/GlassCard.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function GlassCard({
  as = 'div',
  glass = false,
  glow = false,
  interactive = false,
  padding = 'md',
  className,
  children,
  ...rest
}) {
  return React.createElement(as, {
    className: cx('mx-card', glass && 'mx-card--glass', glow && 'mx-card--glow', interactive && 'mx-card--interactive', padding !== 'none' && 'mx-card--pad-' + padding, className),
    ...rest
  }, children);
}
Object.assign(__ds_scope, { GlassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/GlassCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/MetricCard.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function MetricCard({
  label,
  value,
  caption,
  icon,
  className,
  style
}) {
  return React.createElement('div', {
    className: cx('mx-card mx-card--glass mx-metric', className),
    style
  }, icon && React.createElement('span', {
    className: 'mx-metric__icon'
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 19
  })), React.createElement('div', null, React.createElement('div', {
    className: 'mx-metric__label'
  }, label), React.createElement('div', {
    className: 'mx-metric__value'
  }, value), caption && React.createElement('div', {
    className: 'mx-metric__caption'
  }, caption)));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/SectionHeading.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = 'left',
  size = 'lg',
  as = 'h2',
  className,
  id
}) {
  return React.createElement('div', {
    className: cx('mx-heading', align === 'center' && 'mx-heading--center', className)
  }, eyebrow && React.createElement(__ds_scope.Eyebrow, null, eyebrow), React.createElement(as, {
    className: cx('mx-heading__title', size === 'xl' && 'mx-heading__title--xl'),
    id
  }, title, accent && React.createElement('span', {
    className: 'mx-heading__accent'
  }, accent)), description && React.createElement('p', {
    className: 'mx-heading__desc'
  }, description));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
function App() {
  const [sol, setSol] = React.useState(null);
  const [cas, setCas] = React.useState(null);
  const [form, setForm] = React.useState({
    open: false,
    preset: null,
    mode: 'propose'
  });
  const propose = preset => {
    setSol(null);
    setCas(null);
    setForm({
      open: true,
      preset: preset && preset.nativeEvent ? null : preset,
      mode: 'propose'
    });
  };
  const talk = () => setForm({
    open: true,
    preset: null,
    mode: 'talk'
  });
  React.useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    }), {
      threshold: .12,
      rootMargin: '0px 0px -40px 0px'
    });
    const scan = () => document.querySelectorAll('.rv:not(.is-in)').forEach(el => io.observe(el));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, {
      childList: true,
      subtree: true
    });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "mx-root"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#main",
    className: "mx-btn mx-btn--primary mx-btn--sm",
    style: {
      position: 'fixed',
      top: -60,
      left: 16,
      zIndex: 200
    },
    onFocus: e => e.target.style.top = '12px',
    onBlur: e => e.target.style.top = '-60px'
  }, "Saltar al contenido"), /*#__PURE__*/React.createElement(Nav, {
    onPropose: () => propose()
  }), /*#__PURE__*/React.createElement("main", {
    id: "main"
  }, /*#__PURE__*/React.createElement(Hero, {
    onPropose: () => propose()
  }), /*#__PURE__*/React.createElement(TrustBar, null), /*#__PURE__*/React.createElement(ProblemSection, {
    onSolution: setSol,
    onPropose: propose
  }), /*#__PURE__*/React.createElement(Solutions, {
    onOpen: setSol
  }), /*#__PURE__*/React.createElement(Automation, {
    onSolution: setSol
  }), /*#__PURE__*/React.createElement(Systems, {
    onSolution: setSol
  }), /*#__PURE__*/React.createElement(Analytics, {
    onSolution: setSol
  }), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Cases, {
    onOpen: setCas
  }), /*#__PURE__*/React.createElement(Metrics, null), /*#__PURE__*/React.createElement(Stages, {
    onSolution: setSol
  }), /*#__PURE__*/React.createElement(Diagnostic, {
    onPropose: propose
  }), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(FinalCTA, {
    onPropose: () => propose(),
    onTalk: talk
  })), /*#__PURE__*/React.createElement(Footer, {
    onPropose: () => propose(),
    onSolution: setSol
  }), /*#__PURE__*/React.createElement(SolutionModal, {
    id: sol,
    onClose: () => setSol(null),
    onNav: setSol,
    onPropose: propose
  }), /*#__PURE__*/React.createElement(CaseModal, {
    id: cas,
    onClose: () => setCas(null),
    onNav: setCas,
    onPropose: propose
  }), /*#__PURE__*/React.createElement(ContactDialog, {
    open: form.open,
    preset: form.preset,
    mode: form.mode,
    onClose: () => setForm(f => ({
      ...f,
      open: false
    }))
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Convert.jsx
try { (() => {
const {
  Button: CButton,
  Icon: CIcon,
  Badge: CBadge,
  GlassCard: CGlassCard,
  SectionHeading: CHeading,
  Dialog: CDialog,
  Input: CInput,
  Select: CSelect,
  OptionCard: COption,
  Wordmark: CWordmark
} = window.MX;
function Diagnostic({
  onPropose
}) {
  const D = MX_DATA;
  const [step, setStep] = React.useState(0);
  const [a, setA] = React.useState({
    goal: null,
    size: null,
    timing: null
  });
  const Q = [{
    k: 'goal',
    q: '¿Qué quieres conseguir?',
    opts: D.goals.map(([v, l, i]) => ({
      v,
      l,
      i
    }))
  }, {
    k: 'size',
    q: '¿Qué tamaño tiene tu empresa?',
    opts: D.sizes.map(s => ({
      v: s,
      l: s === '1–5 personas' ? s : s + ' personas'
    }))
  }, {
    k: 'timing',
    q: '¿Qué tan pronto quieres comenzar?',
    opts: D.timing.map(([v, l]) => ({
      v,
      l
    }))
  }];
  const done = step === 3;
  const label = k => {
    const q = Q.find(x => x.k === k);
    const o = q.opts.find(x => x.v === a[k]);
    return o ? o.l : '—';
  };
  const rec = React.useMemo(() => {
    if (!a.goal) return [];
    let r = [...D.goalRec[a.goal]];
    const big = ['51–100', '100+'].includes(a.size),
      small = a.size === '1–5 personas';
    if (big && !r.includes('integraciones')) r[2] = 'integraciones';
    if (small && r.includes('sistemas')) r = r.map(x => x === 'sistemas' ? 'web' : x);
    return [...new Set(r)].map(id => D.solutions.find(s => s.id === id));
  }, [a]);
  const next = () => setStep(s => Math.min(3, s + 1));
  const pick = (k, v) => {
    setA(p => ({
      ...p,
      [k]: v
    }));
    setTimeout(next, 260);
  };
  const nextStepCopy = {
    explorando: 'Te enviamos un diagnóstico por escrito para que lo revises con calma.',
    pronto: 'Agendamos una llamada de 30 minutos para aterrizar alcance y prioridades.',
    mes: 'Preparamos una propuesta con alcance, fases y tiempos en menos de una semana.',
    ya: 'Un especialista te contacta en menos de 24 horas para arrancar con un diagnóstico exprés.'
  }[a.timing];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "diagnostico",
    "aria-labelledby": "dx-t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glowbg",
    style: {
      width: 700,
      height: 600,
      left: '30%',
      top: 60
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-container dx"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dx__side rv"
  }, /*#__PURE__*/React.createElement(CHeading, {
    id: "dx-t",
    eyebrow: "Diagn\xF3stico digital",
    title: "Cu\xE9ntanos qu\xE9",
    accent: "quieres mejorar.",
    description: "Tres preguntas, menos de un minuto. Te decimos con qu\xE9 podr\xEDamos ayudarte y cu\xE1l ser\xEDa el siguiente paso."
  }), /*#__PURE__*/React.createElement("div", {
    className: "dx__sum",
    "aria-label": "Tus respuestas"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Objetivo"), /*#__PURE__*/React.createElement("b", null, label('goal'))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Tama\xF1o"), /*#__PURE__*/React.createElement("b", null, label('size'))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Inicio"), /*#__PURE__*/React.createElement("b", null, label('timing'))))), /*#__PURE__*/React.createElement(CGlassCard, {
    className: "dx__card rv",
    padding: "none",
    style: {
      '--d': '120ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dx__prog",
    "aria-hidden": "true"
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("i", {
    key: i,
    className: i <= step ? 'on' : ''
  }))), !done ? /*#__PURE__*/React.createElement("div", {
    key: step
  }, /*#__PURE__*/React.createElement("fieldset", {
    className: "dx__step",
    style: {
      border: 0,
      margin: 0,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("legend", {
    className: "demo-note",
    style: {
      padding: 0
    }
  }, "Paso ", step + 1, " de 3"), /*#__PURE__*/React.createElement("div", {
    className: "dx__q"
  }, Q[step].q), /*#__PURE__*/React.createElement("div", {
    className: "dx__opts"
  }, Q[step].opts.map(o => /*#__PURE__*/React.createElement(COption, {
    key: o.v,
    name: Q[step].k,
    value: o.v,
    label: o.l,
    icon: o.i,
    checked: a[Q[step].k] === o.v,
    onChange: v => pick(Q[step].k, v)
  })))), /*#__PURE__*/React.createElement("div", {
    className: "dx__foot"
  }, /*#__PURE__*/React.createElement(CButton, {
    variant: "ghost",
    size: "sm",
    icon: "arrow-left",
    disabled: step === 0,
    onClick: () => setStep(s => s - 1)
  }, "Atr\xE1s"), /*#__PURE__*/React.createElement(CButton, {
    variant: "accent",
    size: "sm",
    arrow: true,
    disabled: !a[Q[step].k],
    onClick: next
  }, step === 2 ? 'Ver recomendación' : 'Continuar'))) : /*#__PURE__*/React.createElement("div", {
    className: "dx__res",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement(CBadge, {
    tone: "accent"
  }, "Por lo que nos cuentas"), /*#__PURE__*/React.createElement("div", {
    className: "dx__q",
    style: {
      margin: 0
    }
  }, "Podr\xEDamos ayudarte con:"), /*#__PURE__*/React.createElement("ul", {
    className: "dx__recs"
  }, rec.map(s => /*#__PURE__*/React.createElement("li", {
    key: s.id
  }, /*#__PURE__*/React.createElement("span", {
    className: "ck"
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "check",
    size: 15,
    strokeWidth: 2.4
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, s.title), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, s.desc))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "klabel"
  }, "Siguiente paso"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg-2)'
    }
  }, nextStepCopy)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(CButton, {
    variant: "ghost",
    size: "sm",
    icon: "rotate-ccw",
    onClick: () => {
      setA({
        goal: null,
        size: null,
        timing: null
      });
      setStep(0);
    }
  }, "Empezar de nuevo"), /*#__PURE__*/React.createElement(CButton, {
    arrow: true,
    onClick: () => onPropose({
      need: rec.map(r => r.title).join(', '),
      type: rec[0] && rec[0].id,
      size: a.size
    })
  }, "Solicitar diagn\xF3stico")), /*#__PURE__*/React.createElement("p", {
    className: "demo-note"
  }, "Recomendaci\xF3n orientativa. No calculamos precios sin conocer el alcance.")))));
}
function About() {
  const P = [['compass', 'Estrategia', 'Entendemos antes de construir.'], ['cpu', 'Tecnología', 'Utilizamos herramientas modernas y soluciones personalizadas.'], ['briefcase-business', 'Negocio', 'Cada proyecto debe tener un propósito empresarial.']];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "nosotros",
    "aria-labelledby": "about-t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-container about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about__img rv"
  }, /*#__PURE__*/React.createElement("img", {
    src: MX_DATA.IMG + 'oficina-crecimiento.jpg',
    alt: "Equipo de Mextas trabajando frente a tableros de crecimiento",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "rv",
    style: {
      '--d': '100ms'
    }
  }, /*#__PURE__*/React.createElement(CHeading, {
    id: "about-t",
    eyebrow: "Sobre Mextas",
    title: "Tecnolog\xEDa que",
    accent: "entiende el negocio.",
    description: "Mextas combina estrategia, dise\xF1o y desarrollo para construir soluciones digitales que realmente se integran en la operaci\xF3n de una empresa."
  }), /*#__PURE__*/React.createElement("div", {
    className: "pillars"
  }, P.map(([i, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "pillar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "i"
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: i,
    size: 19
  })), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d)))))));
}
function FinalCTA({
  onPropose,
  onTalk
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "cta",
    id: "contacto",
    "aria-labelledby": "cta-t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta__bg"
  }, /*#__PURE__*/React.createElement("img", {
    src: MX_DATA.IMG + 'cta-montanas.jpg',
    alt: "",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mx-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta__in rv"
  }, /*#__PURE__*/React.createElement(window.MX.Eyebrow, null, "Tu pr\xF3ximo paso"), /*#__PURE__*/React.createElement("h2", {
    id: "cta-t"
  }, "Tu pr\xF3ximo crecimiento puede ", /*#__PURE__*/React.createElement("span", {
    className: "mx-accent"
  }, "empezar aqu\xED.")), /*#__PURE__*/React.createElement("p", null, "Cu\xE9ntanos qu\xE9 quieres mejorar y dise\xF1aremos una soluci\xF3n alrededor de tu negocio."), /*#__PURE__*/React.createElement("div", {
    className: "hero__ctas"
  }, /*#__PURE__*/React.createElement(CButton, {
    size: "lg",
    arrow: true,
    onClick: onPropose
  }, "Solicitar propuesta"), /*#__PURE__*/React.createElement(CButton, {
    size: "lg",
    variant: "secondary",
    icon: "message-circle",
    onClick: onTalk
  }, "Hablar con Mextas")), /*#__PURE__*/React.createElement("div", {
    className: "cta__pts"
  }, ['Respuesta en menos de 24 horas', 'Sin compromiso', 'Atención personalizada'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "circle-check",
    size: 16
  }), t))))));
}
const TYPES = [['web', 'Web'], ['ecommerce', 'E-commerce'], ['sistemas', 'Sistema'], ['automatizacion', 'Automatización'], ['marketing', 'Marketing / SEO'], ['integraciones', 'Integración'], ['otro', 'Otro']];
const TYPE_MAP = {
  crm: 'sistemas',
  analitica: 'sistemas'
};
function ContactDialog({
  open,
  preset,
  mode,
  onClose
}) {
  const empty = {
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    necesidad: '',
    presupuesto: '',
    mensaje: '',
    tipo: ''
  };
  const [f, setF] = React.useState(empty);
  const [err, setErr] = React.useState({});
  const [state, setState] = React.useState('idle');
  React.useEffect(() => {
    if (open) {
      setState('idle');
      setErr({});
      setF({
        ...empty,
        necesidad: preset && preset.need || '',
        tipo: preset && preset.type ? TYPE_MAP[preset.type] || preset.type : ''
      });
    }
  }, [open]);
  const set = k => e => {
    setF(p => ({
      ...p,
      [k]: e.target.value
    }));
    if (err[k]) setErr(p => ({
      ...p,
      [k]: null
    }));
  };
  const submit = e => {
    e.preventDefault();
    const x = {};
    if (!f.nombre.trim()) x.nombre = 'Escribe tu nombre.';
    if (!f.empresa.trim()) x.empresa = 'Indica el nombre de tu empresa.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.correo)) x.correo = 'Revisa el formato del correo.';
    if (f.telefono && f.telefono.replace(/\D/g, '').length < 10) x.telefono = 'Usa 10 dígitos.';
    if (!f.tipo) x.tipo = 'Selecciona un tipo de proyecto.';
    setErr(x);
    if (Object.keys(x).length) return;
    setState('sending');
    setTimeout(() => setState('ok'), 1400);
  };
  const talk = mode === 'talk';
  return /*#__PURE__*/React.createElement(CDialog, {
    open: open,
    onClose: onClose,
    size: "md",
    title: state === 'ok' ? null : talk ? 'Hablar con Mextas' : 'Solicitar propuesta',
    label: "Formulario de contacto"
  }, state === 'ok' ? /*#__PURE__*/React.createElement("div", {
    className: "ok"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ok__i"
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "check",
    size: 32,
    strokeWidth: 2.2
  })), /*#__PURE__*/React.createElement("h2", null, "Recibimos tu proyecto."), /*#__PURE__*/React.createElement("p", null, "Gracias por compartirlo. Un especialista de Mextas revisar\xEDa la informaci\xF3n para definir el siguiente paso."), /*#__PURE__*/React.createElement("span", {
    className: "ok__ref"
  }, "Folio de demostraci\xF3n \xB7 MX-", String(Date.now()).slice(-6)), /*#__PURE__*/React.createElement(CButton, {
    arrow: true,
    onClick: onClose
  }, "Volver al sitio")) : /*#__PURE__*/React.createElement("form", {
    className: "form",
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("p", {
    className: "full",
    style: {
      color: 'var(--fg-3)',
      fontSize: 14.5,
      marginTop: -8
    }
  }, talk ? 'Déjanos tus datos y te contactamos para platicar sin compromiso.' : 'Cinco minutos para contarnos lo esencial. Respondemos en menos de 24 horas hábiles.'), /*#__PURE__*/React.createElement(CInput, {
    label: "Nombre",
    required: true,
    value: f.nombre,
    onChange: set('nombre'),
    error: err.nombre,
    autoComplete: "name",
    placeholder: "Ana Mart\xEDnez"
  }), /*#__PURE__*/React.createElement(CInput, {
    label: "Empresa",
    required: true,
    value: f.empresa,
    onChange: set('empresa'),
    error: err.empresa,
    autoComplete: "organization",
    placeholder: "Grupo Industrial del Norte"
  }), /*#__PURE__*/React.createElement(CInput, {
    label: "Correo",
    type: "email",
    required: true,
    value: f.correo,
    onChange: set('correo'),
    error: err.correo,
    autoComplete: "email",
    placeholder: "ana@empresa.mx"
  }), /*#__PURE__*/React.createElement(CInput, {
    label: "Tel\xE9fono",
    type: "tel",
    value: f.telefono,
    onChange: set('telefono'),
    error: err.telefono,
    autoComplete: "tel",
    placeholder: "55 1234 5678"
  }), /*#__PURE__*/React.createElement("div", {
    className: "full mx-field",
    role: "group",
    "aria-labelledby": "tipo-l"
  }, /*#__PURE__*/React.createElement("span", {
    id: "tipo-l",
    className: "mx-field__label"
  }, "Tipo de proyecto", /*#__PURE__*/React.createElement("span", {
    className: "mx-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "types"
  }, TYPES.map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    type: "button",
    className: "type",
    "aria-pressed": f.tipo === v,
    onClick: () => {
      setF(p => ({
        ...p,
        tipo: v
      }));
      setErr(p => ({
        ...p,
        tipo: null
      }));
    }
  }, l))), err.tipo && /*#__PURE__*/React.createElement("span", {
    className: "mx-field__error"
  }, err.tipo)), /*#__PURE__*/React.createElement(CInput, {
    className: "full",
    label: "\xBFQu\xE9 necesitas?",
    value: f.necesidad,
    onChange: set('necesidad'),
    placeholder: "Ej. automatizar el seguimiento de clientes"
  }), !talk && /*#__PURE__*/React.createElement(CSelect, {
    className: "full",
    label: "Presupuesto aproximado",
    value: f.presupuesto,
    onChange: set('presupuesto'),
    placeholder: "Selecciona un rango",
    hint: "Nos ayuda a proponer el alcance adecuado.",
    options: ['Menos de $50,000 MXN', '$50,000 – $150,000 MXN', '$150,000 – $400,000 MXN', 'Más de $400,000 MXN', 'Aún no lo sé']
  }), /*#__PURE__*/React.createElement(CInput, {
    className: "full",
    label: "Cu\xE9ntanos brevemente sobre tu proyecto",
    multiline: true,
    rows: 3,
    value: f.mensaje,
    onChange: set('mensaje'),
    placeholder: "Contexto, qu\xE9 usan hoy y qu\xE9 les gustar\xEDa lograr."
  }), /*#__PURE__*/React.createElement("div", {
    className: "full form__foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "demo-note",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "lock",
    size: 13
  }), "Demo: no se env\xEDa informaci\xF3n."), /*#__PURE__*/React.createElement(CButton, {
    type: "submit",
    arrow: state !== 'sending',
    disabled: state === 'sending',
    icon: null
  }, state === 'sending' ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "spin"
  }), "Enviando\u2026") : 'Enviar proyecto'))));
}
function Footer({
  onPropose,
  onSolution
}) {
  const sol = [['Web', 'web'], ['E-commerce', 'ecommerce'], ['Sistemas', 'sistemas'], ['Automatización', 'automatizacion'], ['Marketing', 'marketing'], ['SEO', 'marketing'], ['Integraciones', 'integraciones']];
  return /*#__PURE__*/React.createElement("footer", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot__g"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CWordmark, {
    href: "#top",
    size: 26
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      color: 'var(--fg-3)',
      maxWidth: 300
    }
  }, "Tecnolog\xEDa para empresas que quieren crecer.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Soluciones"), /*#__PURE__*/React.createElement("ul", null, sol.map(([l, id]) => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onSolution(id)
  }, l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Empresa"), /*#__PURE__*/React.createElement("ul", null, [['Nosotros', 'nosotros'], ['Proceso', 'proceso'], ['Casos de éxito', 'casos'], ['Contacto', 'contacto']].map(([l, id]) => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: '#' + id
  }, l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Contacto"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onPropose()
  }, "Solicitar propuesta")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#diagnostico"
  }, "Diagn\xF3stico digital"))))), /*#__PURE__*/React.createElement("div", {
    className: "foot__b"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Mextas"), /*#__PURE__*/React.createElement("span", null, "Soluciones digitales para empresas."))));
}
Object.assign(window, {
  Diagnostic,
  About,
  FinalCTA,
  ContactDialog,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Convert.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Eyebrow,
  Badge,
  Wordmark,
  MetricCard
} = window.MX;
function useInView(opts = {}) {
  const ref = React.useRef(null);
  const [inView, set] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        set(true);
        if (!opts.repeat) io.disconnect();
      } else if (opts.repeat) set(false);
    }, {
      threshold: opts.threshold ?? .3,
      rootMargin: opts.rootMargin
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
}
function useCountUp(target, run, dur = 1600) {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    if (!run) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setV(target);
      return;
    }
    let raf, t0;
    const step = t => {
      t0 = t0 || t;
      const p = Math.min(1, (t - t0) / dur);
      setV(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, run]);
  return v;
}
const NAV = [['soluciones', 'Soluciones'], ['proceso', 'Cómo trabajamos'], ['casos', 'Casos de éxito'], ['empresas', 'Empresas'], ['nosotros', 'Nosotros'], ['contacto', 'Contacto']];
function Nav({
  onPropose
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState('');
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, {
      passive: true
    });
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) setActive(e.target.id);
    }), {
      rootMargin: '-45% 0px -50% 0px'
    });
    NAV.forEach(([id]) => {
      const el = document.getElementById(id);
      el && io.observe(el);
    });
    return () => {
      window.removeEventListener('scroll', on);
      io.disconnect();
    };
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);
  return /*#__PURE__*/React.createElement("header", {
    className: 'nav' + (scrolled ? ' nav--scrolled' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-container nav__in"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    href: "#top",
    size: 23
  }), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Principal"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "nav__links"
  }, NAV.map(([id, l]) => /*#__PURE__*/React.createElement("li", {
    key: id
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav__link",
    href: '#' + id,
    "aria-current": active === id
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "nav__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    arrow: true,
    onClick: onPropose
  }, "Solicitar propuesta")), /*#__PURE__*/React.createElement(IconButton, {
    className: "nav__burger",
    icon: open ? 'x' : 'menu',
    label: open ? 'Cerrar menú' : 'Abrir menú',
    onClick: () => setOpen(!open),
    "aria-expanded": open
  })), open && /*#__PURE__*/React.createElement("div", {
    className: "mnav",
    role: "dialog",
    "aria-label": "Men\xFA"
  }, NAV.map(([id, l]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: '#' + id,
    onClick: () => setOpen(false)
  }, l, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mnav__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    arrow: true,
    fullWidth: true,
    onClick: () => {
      setOpen(false);
      onPropose();
    }
  }, "Solicitar propuesta"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    fullWidth: true,
    href: "#diagnostico",
    onClick: () => setOpen(false)
  }, "Diagn\xF3stico digital"))));
}
function Hero({
  onPropose
}) {
  const bg = React.useRef(null);
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 900);
        if (bg.current) bg.current.style.transform = `translate3d(0,${y * 0.12}px,0) scale(${1 + y * 0.00005})`;
      });
    };
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top",
    "aria-labelledby": "hero-t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__bg",
    ref: bg
  }, /*#__PURE__*/React.createElement("img", {
    src: MX_DATA.IMG + 'hero.jpg',
    alt: "Dos especialistas de Mextas revisan un tablero de crecimiento en una oficina",
    fetchpriority: "high"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero__shade"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-container hero__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rv"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Soluciones digitales para empresas")), /*#__PURE__*/React.createElement("h1", {
    id: "hero-t",
    className: "rv",
    style: {
      '--d': '80ms'
    }
  }, "Tu empresa puede funcionar mejor. ", /*#__PURE__*/React.createElement("span", {
    className: "mx-accent"
  }, "Nosotros construimos c\xF3mo.")), /*#__PURE__*/React.createElement("p", {
    className: "hero__lead rv",
    style: {
      '--d': '160ms'
    }
  }, "Dise\xF1amos y desarrollamos soluciones digitales que ayudan a las empresas a vender m\xE1s, operar mejor y crecer con tecnolog\xEDa."), /*#__PURE__*/React.createElement("div", {
    className: "hero__ctas rv",
    style: {
      '--d': '240ms'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    arrow: true,
    onClick: onPropose
  }, "Solicitar propuesta"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    href: "#soluciones"
  }, "Ver soluciones")), /*#__PURE__*/React.createElement("ul", {
    className: "hero__pills rv",
    style: {
      '--d': '320ms',
      listStyle: 'none',
      padding: 0,
      margin: 0
    }
  }, [['puzzle', 'Soluciones a la medida'], ['target', 'Tecnología orientada a resultados'], ['life-buoy', 'Acompañamiento continuo']].map(([i, l]) => /*#__PURE__*/React.createElement("li", {
    key: l,
    className: "hero__pill"
  }, /*#__PURE__*/React.createElement("span", {
    className: "i"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 15
  })), l)))), /*#__PURE__*/React.createElement("div", {
    className: "hero__stack",
    "aria-label": "Resultados de ejemplo"
  }, [['trending-up', 'Crecimiento', '+230%', 'ventas online'], ['workflow', 'Automatización', '+12h', 'ahorradas / semana'], ['users', 'Clientes', '+180%', 'oportunidades']].map(([i, l, v, c], k) => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: "rv",
    style: {
      '--d': 420 + k * 140 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "float"
  }, /*#__PURE__*/React.createElement(MetricCard, {
    icon: i,
    label: l,
    value: v,
    caption: c
  })))))), /*#__PURE__*/React.createElement("a", {
    className: "hero__scroll",
    href: "#empresas",
    "aria-label": "Ir a la siguiente secci\xF3n"
  }, "Explorar", /*#__PURE__*/React.createElement("i", null)));
}
function TrustItem({
  name
}) {
  const cls = {
    'Grupo Lumen': 'lumen',
    'Novatec': 'novatec',
    'Constructa': 'constructa',
    'Distribuidora Orión': 'orion',
    'Alpha': 'alpha',
    'Rivera': 'rivera'
  }[name];
  const inner = cls === 'orion' ? /*#__PURE__*/React.createElement("span", {
    className: "wm wm--orion"
  }, /*#__PURE__*/React.createElement("small", null, "DISTRIBUIDORA"), /*#__PURE__*/React.createElement("b", null, "ORI\xD3N")) : cls === 'lumen' ? /*#__PURE__*/React.createElement("span", {
    className: "wm wm--lumen"
  }, "Grupo\xB7Lumen") : /*#__PURE__*/React.createElement("span", {
    className: 'wm wm--' + cls
  }, cls === 'constructa' ? 'Constructa' : name.toUpperCase());
  return /*#__PURE__*/React.createElement("div", {
    className: "trust__item",
    title: name
  }, inner);
}
function TrustBar() {
  return /*#__PURE__*/React.createElement("section", {
    className: "trust",
    id: "empresas",
    "aria-label": "Empresas que conf\xEDan en Mextas"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust__label"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted",
    mark: false
  }, "Empresas que conf\xEDan en Mextas")), /*#__PURE__*/React.createElement("div", {
    className: "trust__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust__track"
  }, MX_DATA.trust.map(n => /*#__PURE__*/React.createElement(TrustItem, {
    key: n,
    name: n
  })), MX_DATA.trust.map(n => /*#__PURE__*/React.createElement("div", {
    key: 'd' + n,
    className: "trust__dup",
    "aria-hidden": "true",
    style: {
      display: 'contents'
    }
  }, /*#__PURE__*/React.createElement(TrustItem, {
    name: n
  })))))));
}
Object.assign(window, {
  useInView,
  useCountUp,
  Nav,
  Hero,
  TrustBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Platform.jsx
try { (() => {
const {
  Button: PButton,
  Icon: PIcon,
  Badge: PBadge,
  GlassCard: PGlassCard,
  SectionHeading: PHeading,
  Tabs: PTabs
} = window.MX;
function Automation({
  onSolution
}) {
  const F = MX_DATA.flow;
  const [ref, inView] = useInView({
    threshold: .35
  });
  const [step, setStep] = React.useState(-1);
  const [hot, setHot] = React.useState(null);
  React.useEffect(() => {
    if (!inView) return;
    let i = -1;
    const t = setInterval(() => {
      i++;
      setStep(i);
      if (i >= F.length - 1) clearInterval(t);
    }, 380);
    return () => clearInterval(t);
  }, [inView]);
  const shown = hot != null ? hot : step;
  const pct = Math.max(0, shown) / (F.length - 1);
  return /*#__PURE__*/React.createElement("section", {
    className: "sec auto",
    id: "automatizacion",
    "aria-labelledby": "auto-t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "auto__bg"
  }, /*#__PURE__*/React.createElement("img", {
    src: MX_DATA.IMG + 'servicio-automatizacion.jpg',
    alt: "",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mx-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "auto__top rv"
  }, /*#__PURE__*/React.createElement(PHeading, {
    id: "auto-t",
    eyebrow: "Automatizaci\xF3n",
    size: "xl",
    title: "Del primer contacto",
    accent: "a la venta, sin fricci\xF3n."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg-3)',
      fontSize: 17
    }
  }, "As\xED se ve un flujo comercial automatizado. Pasa el cursor o toca cada etapa para ver qu\xE9 ocurre \u2014 y qu\xE9 deja de hacer tu equipo a mano.")), /*#__PURE__*/React.createElement("div", {
    className: "flowbox rv",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "flow",
    onMouseLeave: () => setHot(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "flow__line",
    style: {
      '--p': pct
    }
  }, /*#__PURE__*/React.createElement("i", null), step >= F.length - 1 && /*#__PURE__*/React.createElement("span", {
    className: "flow__pulse"
  })), F.map((n, k) => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    type: "button",
    className: 'node' + (k <= shown ? ' lit' : '') + (hot === k ? ' hot' : ''),
    onMouseEnter: () => setHot(k),
    onFocus: () => setHot(k),
    onBlur: () => setHot(null),
    onClick: () => setHot(hot === k ? null : k),
    "aria-describedby": hot === k ? 'tip-' + n.id : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "node__c"
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: n.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("span", {
    className: "node__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "node__l"
  }, n.label), /*#__PURE__*/React.createElement("span", {
    className: "node__t"
  }, n.t)), hot === k && /*#__PURE__*/React.createElement("span", {
    className: "tip",
    role: "tooltip",
    id: 'tip-' + n.id
  }, n.tip)))), /*#__PURE__*/React.createElement("div", {
    className: "flow__foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bigstat"
  }, /*#__PURE__*/React.createElement("b", null, "Hasta 12 h"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-2)'
    }
  }, "semanales recuperadas", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "demo-note"
  }, "Ejemplo de un equipo comercial de 6 personas"))), /*#__PURE__*/React.createElement(PButton, {
    variant: "secondary",
    arrow: true,
    onClick: () => onSolution('automatizacion')
  }, "Explorar automatizaci\xF3n")))));
}
const SYS_TABS = [{
  id: 'resumen',
  label: 'Resumen'
}, {
  id: 'ventas',
  label: 'Ventas'
}, {
  id: 'clientes',
  label: 'Clientes'
}, {
  id: 'operaciones',
  label: 'Operaciones'
}];
const MOD_TO_TAB = {
  Clientes: 'clientes',
  Ventas: 'ventas',
  'Órdenes': 'resumen',
  Inventario: 'operaciones',
  Finanzas: 'resumen',
  Usuarios: 'clientes',
  Reportes: 'resumen'
};
const stClass = s => /Entregado|Ganada|Óptimo|Facturado|Premium/.test(s) ? 'st st--ok' : /Revisar|Negociación/.test(s) ? 'st st--warn' : 'st';
function Systems({
  onSolution
}) {
  const [tab, setTab] = React.useState('resumen');
  const [mod, setMod] = React.useState('Órdenes');
  const d = MX_DATA.systemTabs[tab];
  const max = Math.max(...d.bars);
  const months = ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "sistemas",
    "aria-labelledby": "sys-t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glowbg",
    style: {
      width: 700,
      height: 500,
      right: -100,
      top: 120
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-container sys"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rv"
  }, /*#__PURE__*/React.createElement(PHeading, {
    id: "sys-t",
    eyebrow: "Sistemas empresariales",
    title: "Tu operaci\xF3n tambi\xE9n puede",
    accent: "tener software propio.",
    description: "M\xF3dulos construidos alrededor de c\xF3mo trabaja tu equipo \u2014 no al rev\xE9s. Esta es una vista simulada; expl\xF3rala."
  }), /*#__PURE__*/React.createElement("div", {
    className: "sys__mods"
  }, MX_DATA.modules.map(([i, l]) => /*#__PURE__*/React.createElement(PBadge, {
    key: l
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: i,
    size: 12
  }), l))), /*#__PURE__*/React.createElement("div", {
    className: "sys__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: MX_DATA.IMG + 'servicio-sistemas.jpg',
    alt: "Sistema empresarial Mextas en un monitor de escritorio",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(PButton, {
    variant: "secondary",
    arrow: true,
    onClick: () => onSolution('sistemas')
  }, "Ver qu\xE9 podemos construir"))), /*#__PURE__*/React.createElement("div", {
    className: "app rv",
    style: {
      '--d': '120ms'
    },
    role: "region",
    "aria-label": "Demostraci\xF3n de sistema empresarial"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "app__side",
    "aria-label": "M\xF3dulos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app__brand"
  }, /*#__PURE__*/React.createElement("i", null), "Operaci\xF3n \xB7 Demo"), MX_DATA.modules.map(([i, l]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    type: "button",
    className: "app__mod",
    "aria-current": mod === l,
    onClick: () => {
      setMod(l);
      setTab(MOD_TO_TAB[l]);
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: i,
    size: 15
  }), l))), /*#__PURE__*/React.createElement("div", {
    className: "app__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app__bar"
  }, /*#__PURE__*/React.createElement(PTabs, {
    label: "Vista del tablero",
    tabs: SYS_TABS,
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement(PBadge, {
    tone: "demo",
    dot: true
  }, "Demostraci\xF3n")), /*#__PURE__*/React.createElement("div", {
    className: "app__kpis",
    key: tab
  }, d.kpis.map(([l, v, dl], k) => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: "kpi",
    style: {
      animationDelay: k * 60 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kpi__l"
  }, l), /*#__PURE__*/React.createElement("div", {
    className: "kpi__v"
  }, v), /*#__PURE__*/React.createElement("div", {
    className: "kpi__d",
    style: dl.startsWith('−') && tab !== 'operaciones' ? {
      color: 'var(--state-danger)'
    } : null
  }, dl, " vs. mes anterior")))), /*#__PURE__*/React.createElement("div", {
    className: "chartbox"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 14,
      fontSize: 12.5,
      color: 'var(--fg-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontWeight: 600
    }
  }, SYS_TABS.find(t => t.id === tab).label, " \xB7 \xFAltimos 12 meses"), /*#__PURE__*/React.createElement("span", {
    className: "demo-note"
  }, "MXN")), /*#__PURE__*/React.createElement("div", {
    className: "bars"
  }, d.bars.map((b, k) => /*#__PURE__*/React.createElement("i", {
    key: k,
    style: {
      height: b / max * 100 + '%'
    },
    title: months[k] + ': ' + b
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 8
    }
  }, months.map((m, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      flex: 1,
      textAlign: 'center',
      font: '500 10px/1 var(--font-mono)',
      color: 'var(--fg-4)'
    }
  }, m)))), /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("tbody", null, d.rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0]
  }, /*#__PURE__*/React.createElement("td", null, r[0]), /*#__PURE__*/React.createElement("td", null, r[1]), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: stClass(r[2])
  }, r[2])), /*#__PURE__*/React.createElement("td", null, r[3])))))))));
}
function LineChart({
  data,
  data2
}) {
  const W = 600,
    H = 220,
    max = Math.max(...data) * 1.1;
  const pts = (arr, m) => arr.map((v, i) => [i / (arr.length - 1) * W, H - v / m * H]);
  const p = pts(data, max);
  const d = p.map((q, i) => (i ? 'L' : 'M') + q[0].toFixed(1) + ' ' + q[1].toFixed(1)).join(' ');
  const m2 = Math.max(...data2) * 1.6;
  const d2 = pts(data2, m2).map((q, i) => (i ? 'L' : 'M') + q[0].toFixed(1) + ' ' + q[1].toFixed(1)).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    className: "linechart",
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "none",
    role: "img",
    "aria-label": "Tr\xE1fico y leads en el periodo"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "lg",
    x1: "0",
    x2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#2f7bff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#45d3ff"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "la",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "rgba(47,123,255,.28)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "rgba(47,123,255,0)"
  }))), [0.25, 0.5, 0.75].map(y => /*#__PURE__*/React.createElement("line", {
    key: y,
    x1: "0",
    x2: W,
    y1: H * y,
    y2: H * y,
    stroke: "rgba(132,170,255,.08)"
  })), /*#__PURE__*/React.createElement("path", {
    d: d + ` L${W} ${H} L0 ${H} Z`,
    fill: "url(#la)"
  }), /*#__PURE__*/React.createElement("path", {
    d: d2,
    className: "ln2",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/React.createElement("path", {
    d: d,
    className: "ln",
    pathLength: "1",
    vectorEffect: "non-scaling-stroke"
  }));
}
function Analytics({
  onSolution
}) {
  const [range, setRange] = React.useState('30d');
  const [ref, inView] = useInView({
    threshold: .25
  });
  const a = MX_DATA.analytics[range];
  const vis = useCountUp(a.kpis.visitas, inView),
    conv = useCountUp(a.kpis.conv, inView),
    leads = useCountUp(a.kpis.leads, inView),
    ven = useCountUp(a.kpis.ventas, inView);
  const fmt = n => Math.round(n).toLocaleString('es-MX');
  const K = [['Visitas', fmt(vis), '+18.4%', 'eye'], ['Conversiones', '+' + conv.toFixed(1) + '%', 'vs. periodo previo', 'mouse-pointer-click'], ['Leads', fmt(leads), '+26.1%', 'user-plus'], ['Ventas', '$' + fmt(ven), '+14.9%', 'circle-dollar-sign']];
  const funnel = [['Visitas', a.kpis.visitas, 100], ['Interacciones', Math.round(a.kpis.visitas * .21), 72], ['Leads', a.kpis.leads, 44], ['Clientes', Math.round(a.kpis.leads * .14), 22]];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "analitica",
    "aria-labelledby": "ana-t",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sol__head rv"
  }, /*#__PURE__*/React.createElement(PHeading, {
    id: "ana-t",
    eyebrow: "Marketing, SEO y anal\xEDtica",
    title: "Lo que no se mide,",
    accent: "no se puede mejorar.",
    description: "Conectamos campa\xF1as, sitio y ventas en un solo tablero para saber qu\xE9 canal trae clientes \u2014 no solo visitas."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(PBadge, {
    tone: "demo",
    dot: true
  }, "Demostraci\xF3n"), /*#__PURE__*/React.createElement(PTabs, {
    label: "Periodo",
    value: range,
    onChange: setRange,
    tabs: [{
      id: '7d',
      label: '7 días'
    }, {
      id: '30d',
      label: '30 días'
    }, {
      id: '90d',
      label: '90 días'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ana__kpis"
  }, K.map(([l, v, d, i], k) => /*#__PURE__*/React.createElement(PGlassCard, {
    key: l,
    className: "ana__k rv",
    style: {
      '--d': k * 70 + 'ms'
    },
    padding: "none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, l, /*#__PURE__*/React.createElement(PIcon, {
    name: i,
    size: 16,
    style: {
      color: 'var(--fg-accent)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, v), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, d)))), /*#__PURE__*/React.createElement("div", {
    className: "ana"
  }, /*#__PURE__*/React.createElement(PGlassCard, {
    padding: "lg",
    className: "rv"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 17px/1.3 var(--font-display)',
      color: '#fff'
    }
  }, "Tr\xE1fico y leads"), /*#__PURE__*/React.createElement("div", {
    className: "demo-note",
    style: {
      marginTop: 4
    }
  }, "Datos de ejemplo \xB7 ", range === '7d' ? 'últimos 7 días' : range === '30d' ? 'últimos 30 días' : 'últimos 90 días')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      fontSize: 12.5,
      color: 'var(--fg-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 16,
      height: 2,
      background: 'var(--mx-blue-400)'
    }
  }), "Visitas"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 16,
      borderTop: '1.5px dashed var(--mx-gray-500)'
    }
  }), "Leads"))), /*#__PURE__*/React.createElement(LineChart, {
    key: range,
    data: a.traffic,
    data2: a.leadsS
  }), /*#__PURE__*/React.createElement("div", {
    className: "funnel"
  }, funnel.map(([l, v, w]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      width: w + '%'
    }
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("b", null, v.toLocaleString('es-MX')))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(PGlassCard, {
    padding: "lg",
    className: "rv",
    style: {
      '--d': '100ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 17px/1.3 var(--font-display)',
      color: '#fff',
      marginBottom: 20
    }
  }, "Fuentes de tr\xE1fico"), /*#__PURE__*/React.createElement("div", {
    className: "src"
  }, MX_DATA.sources.map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: "src__r"
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("b", null, v, "%"), /*#__PURE__*/React.createElement("div", {
    className: "src__b"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: inView ? v * 2.2 + '%' : 0
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "ana__photo rv",
    style: {
      '--d': '180ms'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MX_DATA.IMG + 'servicio-marketing.jpg',
    alt: "Tablero de marketing y SEO en pantalla",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 17px/1.3 var(--font-display)',
      color: '#fff',
      marginBottom: 12
    }
  }, "Reportes mensuales con decisiones, no solo gr\xE1ficas."), /*#__PURE__*/React.createElement(PButton, {
    size: "sm",
    variant: "secondary",
    arrow: true,
    onClick: () => onSolution('marketing')
  }, "Marketing & SEO")))))));
}
Object.assign(window, {
  Automation,
  Systems,
  Analytics
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Platform.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Proof.jsx
try { (() => {
const {
  Button: QButton,
  IconButton: QIconButton,
  Icon: QIcon,
  Badge: QBadge,
  GlassCard: QGlassCard,
  SectionHeading: QHeading,
  Dialog: QDialog
} = window.MX;
function Process() {
  const P = MX_DATA.process;
  const [active, setActive] = React.useState(-1);
  const refs = React.useRef([]);
  React.useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        const i = +e.target.dataset.i;
        setActive(a => Math.max(a, i));
      }
    }), {
      rootMargin: '0px 0px -35% 0px',
      threshold: .6
    });
    refs.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "proceso",
    "aria-labelledby": "proc-t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rv"
  }, /*#__PURE__*/React.createElement(QHeading, {
    id: "proc-t",
    eyebrow: "C\xF3mo trabajamos",
    size: "xl",
    title: "De un problema a una",
    accent: "soluci\xF3n funcionando."
  })), /*#__PURE__*/React.createElement("ol", {
    className: "proc",
    style: {
      listStyle: 'none',
      margin: '72px 0 0',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "proc__line",
    "aria-hidden": "true",
    style: {
      '--p': Math.max(0, active) / (P.length - 1)
    }
  }, /*#__PURE__*/React.createElement("i", null)), P.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: s.n,
    ref: el => refs.current[i] = el,
    "data-i": i,
    className: 'pstep' + (i <= active ? ' on' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "pstep__c"
  }, /*#__PURE__*/React.createElement(QIcon, {
    name: s.icon,
    size: 21
  })), /*#__PURE__*/React.createElement("span", {
    className: "pstep__n"
  }, s.n), /*#__PURE__*/React.createElement("h3", null, s.title), /*#__PURE__*/React.createElement("p", null, s.text), /*#__PURE__*/React.createElement("span", {
    className: "pstep__out"
  }, /*#__PURE__*/React.createElement(QIcon, {
    name: "corner-down-right",
    size: 13
  }), s.out))))));
}
function Cases({
  onOpen
}) {
  const C = MX_DATA.cases;
  const track = React.useRef(null);
  const scroll = d => {
    const el = track.current;
    if (el) el.scrollBy({
      left: d * el.clientWidth * .8,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "casos",
    "aria-labelledby": "cases-t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glowbg",
    style: {
      width: 800,
      height: 400,
      left: -300,
      top: 200
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cases__head rv"
  }, /*#__PURE__*/React.createElement(QHeading, {
    id: "cases-t",
    eyebrow: "Casos de \xE9xito",
    title: "Resultados que hablan",
    accent: "por s\xED solos."
  }), /*#__PURE__*/React.createElement("div", {
    className: "cases__ctrl"
  }, /*#__PURE__*/React.createElement(QIconButton, {
    icon: "chevron-left",
    label: "Casos anteriores",
    onClick: () => scroll(-1)
  }), /*#__PURE__*/React.createElement(QIconButton, {
    icon: "chevron-right",
    label: "M\xE1s casos",
    onClick: () => scroll(1)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cases",
    ref: track
  }, C.map((c, i) => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    type: "button",
    className: "mx-card mx-card--interactive ccard rv",
    style: {
      '--d': i * 90 + 'ms'
    },
    onClick: () => onOpen(c.id),
    "aria-label": 'Ver caso ' + c.name
  }, /*#__PURE__*/React.createElement("div", {
    className: "ccard__img"
  }, /*#__PURE__*/React.createElement("img", {
    src: c.img,
    alt: "",
    loading: "lazy",
    decoding: "async"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ccard__tag"
  }, /*#__PURE__*/React.createElement(QBadge, null, c.industry))), /*#__PURE__*/React.createElement("div", {
    className: "ccard__b"
  }, /*#__PURE__*/React.createElement("h3", null, c.name), /*#__PURE__*/React.createElement("div", {
    className: "ccard__sol"
  }, c.solutionShort), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--fg-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-2)',
      fontWeight: 600
    }
  }, "Problema: "), c.problem), /*#__PURE__*/React.createElement("div", {
    className: "ccard__m"
  }, c.metrics.slice(0, 2).map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("b", null, v), /*#__PURE__*/React.createElement("span", null, l)))), /*#__PURE__*/React.createElement("span", {
    className: "ccard__more"
  }, "Ver caso completo", /*#__PURE__*/React.createElement(QIcon, {
    name: "arrow-right",
    size: 15
  })))))), /*#__PURE__*/React.createElement("p", {
    className: "demo-note rv",
    style: {
      marginTop: 20
    }
  }, "Casos representativos con fines de demostraci\xF3n.")));
}
function CaseModal({
  id,
  onClose,
  onNav,
  onPropose
}) {
  const C = MX_DATA.cases;
  const i = C.findIndex(c => c.id === id);
  const c = C[i];
  const prev = C[(i - 1 + C.length) % C.length],
    next = C[(i + 1) % C.length];
  return /*#__PURE__*/React.createElement(QDialog, {
    open: !!c,
    onClose: onClose,
    size: "xl",
    label: c ? 'Caso ' + c.name : ''
  }, c && /*#__PURE__*/React.createElement("div", {
    key: c.id,
    style: {
      animation: 'mx-fade .4s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cmod__hero"
  }, /*#__PURE__*/React.createElement("img", {
    src: c.img,
    alt: 'Equipo de ' + c.name
  }), /*#__PURE__*/React.createElement("div", {
    className: "cmod__ttl"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(QBadge, {
    tone: "accent"
  }, c.industry), /*#__PURE__*/React.createElement(QBadge, null, c.city)), /*#__PURE__*/React.createElement("h2", null, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--mx-blue-200)',
      fontWeight: 600
    }
  }, c.solutionShort))), /*#__PURE__*/React.createElement("div", {
    className: "cmod__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cmod__col"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "klabel"
  }, "El reto"), /*#__PURE__*/React.createElement("p", null, c.reto)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "klabel"
  }, "La soluci\xF3n"), /*#__PURE__*/React.createElement("p", null, c.solucion)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "klabel"
  }, "Lo que construimos"), /*#__PURE__*/React.createElement("ul", {
    className: "checks"
  }, c.built.map(b => /*#__PURE__*/React.createElement("li", {
    key: b
  }, /*#__PURE__*/React.createElement(QIcon, {
    name: "check",
    size: 15
  }), b))))), /*#__PURE__*/React.createElement("div", {
    className: "cmod__col"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "klabel"
  }, "Resultado"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 14
    }
  }, c.result), /*#__PURE__*/React.createElement("div", {
    className: "cmod__metrics"
  }, c.metrics.map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("b", null, v), /*#__PURE__*/React.createElement("span", null, l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "klabel"
  }, "Tecnolog\xEDas"), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, c.tech.map(t => /*#__PURE__*/React.createElement(QBadge, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement(QButton, {
    arrow: true,
    fullWidth: true,
    onClick: () => onPropose({
      need: 'Proyecto similar a ' + c.name
    })
  }, "Quiero un proyecto as\xED"))), /*#__PURE__*/React.createElement("div", {
    className: "cmod__nav"
  }, /*#__PURE__*/React.createElement(QButton, {
    variant: "ghost",
    size: "sm",
    icon: "arrow-left",
    onClick: () => onNav(prev.id)
  }, "Caso anterior \xB7 ", prev.name), /*#__PURE__*/React.createElement(QButton, {
    variant: "ghost",
    size: "sm",
    iconRight: "arrow-right",
    onClick: () => onNav(next.id)
  }, "Siguiente caso \xB7 ", next.name))));
}
function Counter({
  to,
  prefix = '',
  suffix = '',
  run
}) {
  const v = useCountUp(to, run, 1800);
  return /*#__PURE__*/React.createElement(React.Fragment, null, prefix, Math.round(v), suffix);
}
function Metrics() {
  const [ref, inView] = useInView({
    threshold: .4
  });
  const M = [[150, '+', '', 'proyectos desarrollados'], [98, '', '%', 'clientes satisfechos'], [3, '+', ' años', 'acompañando empresas'], [null, '', '', 'soluciones digitales trabajando', '24/7']];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec sec--tight",
    id: "resultados",
    "aria-labelledby": "met-t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-container met"
  }, /*#__PURE__*/React.createElement("a", {
    className: "met__media rv",
    href: "#proceso",
    "aria-label": "Conoce c\xF3mo trabajamos"
  }, /*#__PURE__*/React.createElement("img", {
    src: MX_DATA.IMG + 'edificio.jpg',
    alt: "Oficinas de Mextas al atardecer",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "met__cap"
  }, /*#__PURE__*/React.createElement("b", null, "Conoce c\xF3mo", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "mx-accent"
  }, "trabajamos")), /*#__PURE__*/React.createElement("span", null, "Ver el proceso", /*#__PURE__*/React.createElement(QIcon, {
    name: "arrow-down",
    size: 14
  })))), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "rv",
    style: {
      '--d': '120ms'
    }
  }, /*#__PURE__*/React.createElement(QHeading, {
    id: "met-t",
    eyebrow: "Mextas en n\xFAmeros",
    title: "Empresas que crecen",
    accent: "con tecnolog\xEDa propia."
  }), /*#__PURE__*/React.createElement("div", {
    className: "met__grid"
  }, M.map(([n, p, s, l, fixed]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    className: "met__n"
  }, fixed || /*#__PURE__*/React.createElement(Counter, {
    to: n,
    prefix: p,
    suffix: s,
    run: inView
  })), /*#__PURE__*/React.createElement("div", {
    className: "met__l"
  }, l)))), /*#__PURE__*/React.createElement("p", {
    className: "demo-note",
    style: {
      marginTop: 32
    }
  }, "M\xE9tricas representativas de demostraci\xF3n."))));
}
function Stages({
  onSolution
}) {
  const ST = MX_DATA.stages,
    S = MX_DATA.solutions;
  const [sel, setSel] = React.useState(null);
  const s = ST.find(x => x.id === sel);
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "etapas",
    "aria-labelledby": "stg-t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rv"
  }, /*#__PURE__*/React.createElement(QHeading, {
    id: "stg-t",
    eyebrow: "Para empresas que\u2026",
    title: "No importa en qu\xE9",
    accent: "punto est\xE9s.",
    description: "Elige la etapa que mejor describe a tu empresa y te mostramos por d\xF3nde conviene empezar."
  })), /*#__PURE__*/React.createElement("div", {
    className: "stg",
    role: "group",
    "aria-label": "Etapa de tu empresa"
  }, ST.map((x, i) => /*#__PURE__*/React.createElement("button", {
    key: x.id,
    type: "button",
    className: "stg__c rv",
    style: {
      '--d': i * 70 + 'ms'
    },
    "aria-pressed": sel === x.id,
    onClick: () => setSel(sel === x.id ? null : x.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "stg__i"
  }, /*#__PURE__*/React.createElement(QIcon, {
    name: x.icon,
    size: 19
  })), /*#__PURE__*/React.createElement("h3", null, x.title), /*#__PURE__*/React.createElement("p", null, x.text)))), s ? /*#__PURE__*/React.createElement(QGlassCard, {
    glow: true,
    className: "stg__rec",
    padding: "none",
    key: s.id,
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "klabel"
  }, "Recomendaci\xF3n para \u201C", s.title.toLowerCase(), "\u201D"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg-2)',
      fontSize: 16.5,
      lineHeight: 1.6
    }
  }, s.note)), /*#__PURE__*/React.createElement("div", {
    className: "stg__list"
  }, s.rec.map(id => {
    const x = S.find(q => q.id === id);
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      type: "button",
      className: "stg__sol",
      onClick: () => onSolution(id)
    }, /*#__PURE__*/React.createElement(QIcon, {
      name: x.icon,
      size: 20,
      style: {
        color: 'var(--fg-accent)'
      }
    }), /*#__PURE__*/React.createElement("b", null, x.title), /*#__PURE__*/React.createElement("span", null, x.desc));
  }))) : /*#__PURE__*/React.createElement("p", {
    className: "demo-note",
    style: {
      marginTop: 18
    }
  }, "Selecciona una opci\xF3n para ver la recomendaci\xF3n.")));
}
Object.assign(window, {
  Process,
  Cases,
  CaseModal,
  Metrics,
  Stages
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Proof.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Solutions.jsx
try { (() => {
const {
  Button: SButton,
  IconButton: SIconButton,
  Icon: SIcon,
  Badge: SBadge,
  GlassCard: SGlassCard,
  SectionHeading: SHeading,
  Dialog: SDialog
} = window.MX;
const CHAIN = [['circle-alert', 'Problema', 'Lo que hoy frena a tu empresa'], ['scan-search', 'Análisis', 'Procesos, datos y personas'], ['compass', 'Estrategia', 'Qué construir y en qué orden'], ['cpu', 'Tecnología', 'La herramienta adecuada'], ['flag', 'Resultado', 'Medible desde el primer día']];
function ProblemSection({
  onSolution,
  onPropose
}) {
  const P = MX_DATA.problems;
  const [sel, setSel] = React.useState(P[1].id);
  const [lit, setLit] = React.useState(0);
  const p = P.find(x => x.id === sel);
  React.useEffect(() => {
    setLit(0);
    let i = 0;
    const t = setInterval(() => {
      i++;
      setLit(i);
      if (i >= 4) clearInterval(t);
    }, 220);
    return () => clearInterval(t);
  }, [sel]);
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "enfoque",
    "aria-labelledby": "prob-t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glowbg",
    style: {
      width: 600,
      height: 600,
      right: -200,
      top: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rv"
  }, /*#__PURE__*/React.createElement(SHeading, {
    id: "prob-t",
    eyebrow: "Nuestro enfoque",
    size: "xl",
    title: "No vendemos p\xE1ginas.",
    accent: "Resolvemos problemas de negocio.",
    description: "Cada empresa tiene procesos, clientes, operaciones y objetivos diferentes. Por eso no empezamos preguntando qu\xE9 p\xE1gina necesitas. Empezamos entendiendo qu\xE9 necesitas conseguir."
  })), /*#__PURE__*/React.createElement("div", {
    className: "prob"
  }, /*#__PURE__*/React.createElement("ol", {
    className: "chain rv",
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    "aria-label": "C\xF3mo pasamos de un problema a un resultado"
  }, CHAIN.map(([i, t, s], k) => /*#__PURE__*/React.createElement("li", {
    key: t,
    className: 'chain__step' + (k <= lit ? ' on' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "chain__dot"
  }, /*#__PURE__*/React.createElement(SIcon, {
    name: i,
    size: 19
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "chain__t"
  }, t), /*#__PURE__*/React.createElement("div", {
    className: "chain__s"
  }, s))))), /*#__PURE__*/React.createElement(SGlassCard, {
    className: "panel rv",
    style: {
      '--d': '120ms'
    },
    padding: "none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel__top"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 17px/1.3 var(--font-display)',
      color: '#fff'
    }
  }, "\xBFQu\xE9 est\xE1 pasando en tu empresa?"), /*#__PURE__*/React.createElement(SBadge, {
    tone: "accent"
  }, "Selecciona una")), /*#__PURE__*/React.createElement("div", {
    className: "panel__opts",
    role: "group",
    "aria-label": "Problemas frecuentes"
  }, P.map(x => /*#__PURE__*/React.createElement("button", {
    key: x.id,
    type: "button",
    className: "popt",
    "aria-pressed": x.id === sel,
    onClick: () => setSel(x.id)
  }, /*#__PURE__*/React.createElement(SIcon, {
    name: x.icon,
    size: 16
  }), x.label))), /*#__PURE__*/React.createElement("div", {
    className: "panel__out",
    key: sel,
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pout__k"
  }, "Problema"), /*#__PURE__*/React.createElement("div", {
    className: "pout__v"
  }, "\u201C", p.problem, "\u201D")), /*#__PURE__*/React.createElement("div", {
    className: "pout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pout__k"
  }, "Qu\xE9 podemos construir"), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, p.solution.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s,
    type: "button",
    className: "chip",
    onClick: () => onSolution(p.solIds[i])
  }, s)))), /*#__PURE__*/React.createElement("div", {
    className: "pout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pout__k"
  }, "Resultado esperado"), /*#__PURE__*/React.createElement("div", {
    className: "pout__v",
    style: {
      fontWeight: 500,
      fontSize: 15,
      color: 'var(--fg-2)'
    }
  }, p.result), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pout__kpi"
  }, p.kpi.v), /*#__PURE__*/React.createElement("div", {
    className: "demo-note",
    style: {
      marginTop: 6
    }
  }, p.kpi.l)))), /*#__PURE__*/React.createElement("div", {
    className: "panel__foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "demo-note"
  }, "Cifras ilustrativas; cada proyecto se dimensiona en el diagn\xF3stico."), /*#__PURE__*/React.createElement(SButton, {
    variant: "accent",
    size: "sm",
    arrow: true,
    onClick: () => onPropose({
      need: p.label
    })
  }, "Hablar de este problema"))))));
}
function SolutionCard({
  s,
  onOpen,
  i
}) {
  const compact = !s.img;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: 'mx-card mx-card--interactive scard rv' + (compact ? ' scard--compact' : ''),
    style: {
      '--d': i * 70 + 'ms'
    },
    onClick: () => onOpen(s.id),
    "aria-label": s.title + ' — ver detalle'
  }, /*#__PURE__*/React.createElement("div", {
    className: "scard__txt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scard__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "scard__icon"
  }, /*#__PURE__*/React.createElement(SIcon, {
    name: s.icon,
    size: 19
  })), /*#__PURE__*/React.createElement("span", {
    className: "scard__n"
  }, s.n)), /*#__PURE__*/React.createElement("div", {
    className: "scard__cat"
  }, s.cat), /*#__PURE__*/React.createElement("h3", null, s.title), /*#__PURE__*/React.createElement("p", null, s.desc), compact && /*#__PURE__*/React.createElement("div", {
    className: "scard__row",
    style: {
      marginTop: 'auto',
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "scard__stat"
  }, /*#__PURE__*/React.createElement("b", null, s.stat.v), s.stat.l), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "scard__cta"
  }, "Ver m\xE1s"), /*#__PURE__*/React.createElement("span", {
    className: "scard__go"
  }, /*#__PURE__*/React.createElement(SIcon, {
    name: "arrow-right",
    size: 15
  }))))), compact ? /*#__PURE__*/React.createElement("div", {
    className: "scard__viz",
    "aria-hidden": "true"
  }, s.chips && /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, s.chips.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    className: "mini-chip"
  }, c))), s.pipeline && s.pipeline.map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: "mini-pipe"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 70
    }
  }, l), /*#__PURE__*/React.createElement("i", {
    style: {
      width: v * 2.4 + '%'
    }
  }), /*#__PURE__*/React.createElement("span", null, v))), s.spark && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 120 50",
    style: {
      width: '100%',
      height: 70
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    fill: "none",
    stroke: "var(--mx-cyan-400)",
    strokeWidth: "1.6",
    points: s.spark.map((v, k) => `${k * 10.9},${50 - v}`).join(' ')
  }), /*#__PURE__*/React.createElement("polyline", {
    fill: "rgba(47,123,255,.15)",
    stroke: "none",
    points: '0,50 ' + s.spark.map((v, k) => `${k * 10.9},${50 - v}`).join(' ') + ' 120,50'
  }))) : /*#__PURE__*/React.createElement("div", {
    className: "scard__img"
  }, /*#__PURE__*/React.createElement("img", {
    src: s.img,
    alt: "",
    loading: "lazy",
    decoding: "async"
  }), /*#__PURE__*/React.createElement("div", {
    className: "scard__foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "scard__stat"
  }, /*#__PURE__*/React.createElement("b", null, s.stat.v), s.stat.l), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "scard__cta"
  }, "Ver m\xE1s"), /*#__PURE__*/React.createElement("span", {
    className: "scard__go"
  }, /*#__PURE__*/React.createElement(SIcon, {
    name: "arrow-right",
    size: 15
  }))))));
}
function Solutions({
  onOpen
}) {
  const S = MX_DATA.solutions;
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "soluciones",
    "aria-labelledby": "sol-t",
    style: {
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sol__head rv"
  }, /*#__PURE__*/React.createElement(SHeading, {
    id: "sol-t",
    eyebrow: "Soluciones",
    title: "Todo lo que tu empresa necesita",
    accent: "para crecer digitalmente."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 400,
      color: 'var(--fg-3)'
    }
  }, "Combinamos dise\xF1o, desarrollo y estrategia. Puedes empezar por una sola pieza y sumar las dem\xE1s cuando el negocio lo pida.")), /*#__PURE__*/React.createElement("div", {
    className: "sol__grid"
  }, S.filter(s => s.img).map((s, i) => /*#__PURE__*/React.createElement(SolutionCard, {
    key: s.id,
    s: s,
    i: i,
    onOpen: onOpen
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sol__grid2"
  }, S.filter(s => !s.img).map((s, i) => /*#__PURE__*/React.createElement(SolutionCard, {
    key: s.id,
    s: s,
    i: i,
    onOpen: onOpen
  })))));
}
function SolutionModal({
  id,
  onClose,
  onNav,
  onPropose
}) {
  const S = MX_DATA.solutions;
  const idx = S.findIndex(s => s.id === id);
  const s = S[idx];
  return /*#__PURE__*/React.createElement(SDialog, {
    open: !!s,
    onClose: onClose,
    size: "xl",
    label: s ? s.title : ''
  }, s && /*#__PURE__*/React.createElement("div", {
    className: "smod",
    key: s.id
  }, /*#__PURE__*/React.createElement("div", {
    className: 'smod__media' + (s.img ? '' : ' smod__media--viz')
  }, s.img ? /*#__PURE__*/React.createElement("img", {
    src: s.img,
    alt: 'Ejemplo de ' + s.title
  }) : /*#__PURE__*/React.createElement(SIcon, {
    name: s.icon,
    size: 120,
    strokeWidth: 0.9,
    style: {
      color: 'var(--mx-blue-400)',
      opacity: .5
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "smod__cap"
  }, /*#__PURE__*/React.createElement(SBadge, {
    tone: "accent"
  }, s.n, " \xB7 ", s.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 34px/1.05 var(--font-display)',
      color: '#fff',
      letterSpacing: '-.03em'
    }
  }, s.title))), /*#__PURE__*/React.createElement("div", {
    className: "smod__body"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, s.detail.headline), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      color: 'var(--fg-3)',
      fontSize: 16
    }
  }, s.detail.lead)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "klabel"
  }, "Construimos herramientas para gestionar"), /*#__PURE__*/React.createElement("ul", {
    className: "checks"
  }, s.detail.bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b
  }, /*#__PURE__*/React.createElement(SIcon, {
    name: "check",
    size: 15
  }), b.charAt(0).toUpperCase() + b.slice(1))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "klabel"
  }, "Ideal para"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg-2)',
      fontSize: 15
    }
  }, s.detail.ideal)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "klabel"
  }, "Podemos construir"), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, s.detail.build.map(b => /*#__PURE__*/React.createElement("span", {
    key: b,
    className: "mx-badge",
    style: {
      textTransform: 'none',
      letterSpacing: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      height: 28
    }
  }, b)))), /*#__PURE__*/React.createElement(SButton, {
    size: "lg",
    arrow: true,
    onClick: () => onPropose({
      type: s.id,
      need: s.title
    })
  }, "Hablar sobre este proyecto"), /*#__PURE__*/React.createElement("div", {
    className: "smod__nav"
  }, /*#__PURE__*/React.createElement(SButton, {
    variant: "link",
    icon: "arrow-left",
    onClick: () => onNav(S[(idx - 1 + S.length) % S.length].id)
  }, S[(idx - 1 + S.length) % S.length].title), /*#__PURE__*/React.createElement("span", {
    className: "demo-note"
  }, idx + 1, " / ", S.length), /*#__PURE__*/React.createElement(SButton, {
    variant: "link",
    iconRight: "arrow-right",
    onClick: () => onNav(S[(idx + 1) % S.length].id)
  }, S[(idx + 1) % S.length].title)))));
}
Object.assign(window, {
  ProblemSection,
  Solutions,
  SolutionModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Solutions.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.MX_DATA = (() => {
  const IMG = '../../assets/img/';
  const solutions = [{
    id: 'web',
    n: '01',
    cat: 'Presencia',
    title: 'Web corporativa',
    icon: 'monitor-smartphone',
    img: IMG + 'servicio-web.jpg',
    desc: 'Presencia digital profesional orientada a generar confianza y oportunidades.',
    stat: {
      v: '< 1.5 s',
      l: 'carga objetivo'
    },
    detail: {
      headline: 'Un sitio que trabaja para tu área comercial.',
      lead: 'Diseñamos sitios corporativos que explican con claridad qué haces, a quién sirves y por qué elegirte — y que convierten visitas en conversaciones.',
      bullets: ['arquitectura de contenido', 'diseño a la medida', 'formularios conectados al CRM', 'SEO técnico', 'multi-idioma', 'panel para editar contenido', 'analítica configurada'],
      ideal: 'Empresas cuya web actual no refleja su tamaño real, no genera contactos o no se puede actualizar sin depender de alguien.',
      build: ['sitio corporativo', 'landing de campaña', 'portal de marca', 'micrositio de producto', 'sección de vacantes', 'blog corporativo']
    }
  }, {
    id: 'ecommerce',
    n: '02',
    cat: 'Venta',
    title: 'E-commerce',
    icon: 'shopping-bag',
    img: IMG + 'servicio-ecommerce.jpg',
    desc: 'Tiendas online diseñadas para vender y escalar.',
    stat: {
      v: 'B2B · B2C',
      l: 'catálogos y mayoreo'
    },
    detail: {
      headline: 'Vende en línea con la operación resuelta.',
      lead: 'Tiendas conectadas a tu inventario, logística y facturación, pensadas para vender a consumidores, distribuidores o ambos.',
      bullets: ['catálogo e inventario', 'precios por cliente', 'pagos y facturación CFDI', 'envíos y guías', 'carritos recuperables', 'reportes de venta'],
      ideal: 'Marcas y distribuidoras que quieren vender directo, abrir un canal mayorista o dejar de tomar pedidos por WhatsApp.',
      build: ['tienda en línea', 'portal de pedidos B2B', 'catálogo mayorista', 'integración con ERP', 'marketplace interno', 'programa de lealtad']
    }
  }, {
    id: 'sistemas',
    n: '03',
    cat: 'Operación',
    title: 'Sistemas empresariales',
    icon: 'layout-dashboard',
    img: IMG + 'servicio-sistemas.jpg',
    desc: 'Software interno adaptado a la operación real de cada empresa.',
    stat: {
      v: '7 módulos',
      l: 'base configurable'
    },
    detail: {
      headline: 'Software diseñado alrededor de tu operación.',
      lead: 'Construimos herramientas internas para gestionar lo que hoy vive en hojas de cálculo, correos y sistemas que no se hablan entre sí.',
      bullets: ['clientes', 'órdenes', 'inventario', 'usuarios', 'procesos', 'reportes', 'métricas'],
      ideal: 'Empresas que ya dependen de procesos manuales o múltiples herramientas desconectadas.',
      build: ['panel administrativo', 'sistema interno', 'CRM', 'ERP personalizado', 'dashboard', 'portal de clientes']
    }
  }, {
    id: 'automatizacion',
    n: '04',
    cat: 'Eficiencia',
    title: 'Automatización',
    icon: 'workflow',
    img: IMG + 'servicio-automatizacion.jpg',
    desc: 'Eliminación de tareas repetitivas y optimización de procesos.',
    stat: {
      v: '−60%',
      l: 'captura manual*'
    },
    detail: {
      headline: 'Que el trabajo repetitivo se haga solo.',
      lead: 'Identificamos las tareas que tu equipo repite todos los días y las convertimos en flujos automáticos, medibles y con responsables claros.',
      bullets: ['captura de leads', 'asignación automática', 'notificaciones', 'generación de documentos', 'conciliaciones', 'recordatorios de seguimiento'],
      ideal: 'Equipos que copian datos entre sistemas, persiguen aprobaciones por correo o pierden seguimiento de clientes.',
      build: ['flujos de aprobación', 'bots de notificación', 'sincronización de datos', 'reportes automáticos', 'onboarding de clientes', 'alertas operativas']
    }
  }, {
    id: 'marketing',
    n: '05',
    cat: 'Captación',
    title: 'Marketing & SEO',
    icon: 'chart-no-axes-combined',
    img: IMG + 'servicio-marketing.jpg',
    desc: 'Captación de tráfico, clientes y crecimiento digital.',
    stat: {
      v: 'Mensual',
      l: 'reporte de resultados'
    },
    detail: {
      headline: 'Tráfico que se convierte en clientes.',
      lead: 'Estrategia de posicionamiento, contenido y campañas medidas contra oportunidades reales de negocio, no solo contra clics.',
      bullets: ['SEO técnico y de contenido', 'campañas de pago', 'landing pages', 'medición de conversiones', 'contenido para decisores', 'reportes mensuales'],
      ideal: 'Empresas con buen producto pero poca visibilidad, o que invierten en anuncios sin saber qué funciona.',
      build: ['estrategia SEO', 'campañas Google / Meta / LinkedIn', 'embudos de captación', 'tablero de marketing', 'contenido técnico', 'automatización de correo']
    }
  }, {
    id: 'integraciones',
    n: '06',
    cat: 'Conexión',
    title: 'Integraciones',
    icon: 'plug-zap',
    desc: 'Conectamos herramientas, sistemas y procesos.',
    stat: {
      v: 'API · ERP · CRM',
      l: 'conectores'
    },
    chips: ['ERP', 'CRM', 'Facturación', 'Pagos', 'Paquetería', 'WhatsApp'],
    detail: {
      headline: 'Tus herramientas, hablando entre sí.',
      lead: 'Conectamos los sistemas que ya usas para que la información fluya sin capturas dobles ni archivos intermedios.',
      bullets: ['APIs a la medida', 'ERP y contabilidad', 'pasarelas de pago', 'facturación electrónica', 'paqueterías', 'mensajería'],
      ideal: 'Operaciones donde la misma información se captura dos o tres veces en sistemas distintos.',
      build: ['middleware de integración', 'sincronización ERP ↔ tienda', 'webhooks', 'conectores de facturación', 'APIs para socios', 'migración de datos']
    }
  }, {
    id: 'crm',
    n: '07',
    cat: 'Comercial',
    title: 'CRM & clientes',
    icon: 'contact',
    desc: 'Centralización y gestión de oportunidades comerciales.',
    stat: {
      v: 'Pipeline',
      l: 'por etapa y vendedor'
    },
    pipeline: [['Nuevo', 38], ['Contactado', 26], ['Propuesta', 14], ['Cierre', 7]],
    detail: {
      headline: 'Cada oportunidad, con dueño y siguiente paso.',
      lead: 'Implementamos o construimos el CRM que se adapta a cómo vende tu equipo, conectado a tus canales de entrada.',
      bullets: ['pipeline por etapas', 'historial de cliente', 'tareas y recordatorios', 'cotizaciones', 'metas por vendedor', 'reportes comerciales'],
      ideal: 'Equipos comerciales que gestionan clientes en Excel, WhatsApp personal o la memoria del vendedor.',
      build: ['CRM a la medida', 'implementación de CRM', 'portal de distribuidores', 'cotizador', 'tablero comercial', 'app para vendedores']
    }
  }, {
    id: 'analitica',
    n: '08',
    cat: 'Decisión',
    title: 'Analítica',
    icon: 'chart-line',
    desc: 'Dashboards para entender qué está pasando en el negocio.',
    stat: {
      v: 'Tiempo real',
      l: 'indicadores clave'
    },
    spark: [12, 18, 14, 22, 19, 28, 26, 34, 31, 40, 38, 46],
    detail: {
      headline: 'Decide con datos del día, no del mes pasado.',
      lead: 'Reunimos la información de ventas, operación y marketing en tableros claros para cada nivel de la empresa.',
      bullets: ['indicadores por área', 'tableros directivos', 'alertas', 'reportes automáticos', 'modelado de datos', 'acceso por rol'],
      ideal: 'Direcciones que esperan días por un reporte o reciben números distintos de cada área.',
      build: ['dashboard directivo', 'tablero de ventas', 'reportes operativos', 'data warehouse ligero', 'KPIs financieros', 'alertas de negocio']
    }
  }];
  const problems = [{
    id: 'clientes',
    icon: 'users',
    label: 'Tengo pocos clientes',
    problem: 'Nuestro producto es bueno, pero no llegan suficientes prospectos calificados.',
    solution: ['Marketing & SEO', 'Web corporativa', 'CRM & clientes'],
    solIds: ['marketing', 'web', 'crm'],
    result: 'Un canal de captación medible, con cada prospecto registrado y con seguimiento.',
    kpi: {
      v: '+180%',
      l: 'oportunidades (ejemplo)'
    }
  }, {
    id: 'manual',
    icon: 'timer',
    label: 'Mi empresa pierde tiempo en procesos manuales',
    problem: 'Perdemos mucho tiempo haciendo tareas manuales.',
    solution: ['Automatización', 'Integraciones', 'Sistema interno'],
    solIds: ['automatizacion', 'integraciones', 'sistemas'],
    result: 'Menos trabajo repetitivo y procesos más rápidos.',
    kpi: {
      v: '+12 h',
      l: 'semanales recuperadas (ejemplo)'
    }
  }, {
    id: 'online',
    icon: 'shopping-cart',
    label: 'Necesito vender online',
    problem: 'Nuestros clientes quieren comprar en línea y hoy solo vendemos por teléfono o en sucursal.',
    solution: ['E-commerce', 'Integraciones', 'Analítica'],
    solIds: ['ecommerce', 'integraciones', 'analitica'],
    result: 'Un canal de venta abierto 24/7 conectado a inventario y facturación.',
    kpi: {
      v: '24/7',
      l: 'canal de venta activo'
    }
  }, {
    id: 'desorden',
    icon: 'shuffle',
    label: 'Mi operación está desorganizada',
    problem: 'Cada área trabaja con su propia hoja de cálculo y nadie tiene la información completa.',
    solution: ['Sistema empresarial', 'Analítica', 'Automatización'],
    solIds: ['sistemas', 'analitica', 'automatizacion'],
    result: 'Una sola fuente de información, responsables claros y visibilidad para dirección.',
    kpi: {
      v: '1',
      l: 'fuente única de datos'
    }
  }, {
    id: 'digitalizar',
    icon: 'scan-line',
    label: 'Necesito digitalizar mi empresa',
    problem: 'Seguimos dependiendo de papel, correos y archivos sueltos para operar.',
    solution: ['Diagnóstico', 'Sistema interno', 'Automatización'],
    solIds: ['sistemas', 'automatizacion', 'integraciones'],
    result: 'Procesos digitales por etapas, sin detener la operación actual.',
    kpi: {
      v: 'Por fases',
      l: 'sin frenar la operación'
    }
  }, {
    id: 'sistema',
    icon: 'server-cog',
    label: 'Necesito un sistema interno',
    problem: 'Ningún software comercial se adapta a cómo trabajamos realmente.',
    solution: ['Sistema empresarial', 'Integraciones', 'Portal de clientes'],
    solIds: ['sistemas', 'integraciones', 'crm'],
    result: 'Software propio, alineado a tus procesos y que crece con la empresa.',
    kpi: {
      v: '100%',
      l: 'adaptado a tu proceso'
    }
  }, {
    id: 'web',
    icon: 'globe',
    label: 'Ya tengo página pero no funciona',
    problem: 'Tenemos sitio web, pero no genera contactos ni representa a la empresa.',
    solution: ['Rediseño web', 'SEO técnico', 'Analítica'],
    solIds: ['web', 'marketing', 'analitica'],
    result: 'Un sitio que se encuentra, se entiende y genera solicitudes medibles.',
    kpi: {
      v: '×3',
      l: 'solicitudes (ejemplo)'
    }
  }, {
    id: 'automatizar',
    icon: 'bot',
    label: 'Quiero automatizar',
    problem: 'Sabemos que muchas tareas podrían hacerse solas, pero no sabemos por dónde empezar.',
    solution: ['Mapa de procesos', 'Automatización', 'Integraciones'],
    solIds: ['automatizacion', 'integraciones', 'crm'],
    result: 'Un plan priorizado por impacto y los primeros flujos funcionando en semanas.',
    kpi: {
      v: '4–6 sem',
      l: 'primeros flujos activos'
    }
  }];
  const flow = [{
    id: 'cliente',
    icon: 'user-round',
    label: 'Cliente',
    t: '00:00',
    tip: 'Un prospecto llega desde Google, redes o una recomendación.'
  }, {
    id: 'form',
    icon: 'file-input',
    label: 'Formulario',
    t: '00:01',
    tip: 'Llena un formulario corto; los datos se validan al instante.'
  }, {
    id: 'crm',
    icon: 'database',
    label: 'CRM',
    t: '00:01',
    tip: 'Se crea el contacto y la oportunidad sin captura manual.'
  }, {
    id: 'notif',
    icon: 'bell-ring',
    label: 'Notificación',
    t: '00:02',
    tip: 'El equipo comercial recibe aviso por correo y WhatsApp.'
  }, {
    id: 'asig',
    icon: 'user-check',
    label: 'Asignación',
    t: '00:02',
    tip: 'Se asigna al vendedor según zona, industria o carga de trabajo.'
  }, {
    id: 'seg',
    icon: 'calendar-clock',
    label: 'Seguimiento',
    t: '24 h',
    tip: 'Recordatorios automáticos si no hay contacto en 24 horas.'
  }, {
    id: 'venta',
    icon: 'badge-check',
    label: 'Venta',
    t: 'Cierre',
    tip: 'La venta se registra y dispara facturación y onboarding.'
  }];
  const modules = [['users', 'Clientes'], ['receipt', 'Ventas'], ['package', 'Órdenes'], ['boxes', 'Inventario'], ['landmark', 'Finanzas'], ['shield-check', 'Usuarios'], ['file-bar-chart', 'Reportes']];
  const systemTabs = {
    resumen: {
      kpis: [['Ingresos del mes', '$2.84 M', '+8.2%'], ['Órdenes activas', '312', '+14'], ['Cumplimiento', '96.4%', '+1.1 pt']],
      bars: [42, 48, 45, 52, 58, 55, 62, 60, 68, 72, 70, 78],
      rows: [['OR-10482', 'Constructora Sierra Alta', 'En ruta', '$84,200'], ['OR-10481', 'Ferremax del Bajío', 'Preparando', '$23,950'], ['OR-10479', 'Grupo Vértice', 'Entregado', '$112,400'], ['OR-10477', 'Comercial Tapatía', 'Facturado', '$41,780']]
    },
    ventas: {
      kpis: [['Ventas netas', '$1.92 M', '+11.6%'], ['Ticket promedio', '$18,430', '+4.3%'], ['Cotizaciones', '148', '+22']],
      bars: [30, 38, 35, 44, 50, 47, 58, 64, 61, 70, 76, 82],
      rows: [['CT-2291', 'Hoteles Maren', 'Propuesta', '$236,000'], ['CT-2290', 'Clínica Valle Norte', 'Negociación', '$98,500'], ['CT-2288', 'Agroindustrias Río Verde', 'Ganada', '$154,300'], ['CT-2285', 'Logística Pacífico', 'Enviada', '$67,900']]
    },
    clientes: {
      kpis: [['Clientes activos', '1,286', '+38'], ['Retención 12m', '91.2%', '+2.4 pt'], ['NPS', '64', '+5']],
      bars: [60, 62, 61, 65, 66, 68, 70, 71, 74, 75, 77, 80],
      rows: [['CL-0932', 'Grupo Vértice', 'Premium', '$1.2 M'], ['CL-0918', 'Ferremax del Bajío', 'Recurrente', '$640 K'], ['CL-0907', 'Hoteles Maren', 'Nuevo', '$236 K'], ['CL-0899', 'Comercial Tapatía', 'Recurrente', '$410 K']]
    },
    operaciones: {
      kpis: [['Tiempo de surtido', '3.2 h', '−0.8 h'], ['Inventario disponible', '94%', '+3 pt'], ['Incidencias', '7', '−5']],
      bars: [70, 64, 66, 58, 55, 52, 49, 46, 44, 41, 38, 35],
      rows: [['AL-01', 'Almacén Monterrey', 'Óptimo', '98%'], ['AL-02', 'Almacén CDMX', 'Óptimo', '95%'], ['AL-03', 'Almacén Guadalajara', 'Revisar', '82%'], ['AL-04', 'Cross-dock Querétaro', 'Óptimo', '97%']]
    }
  };
  const seeded = seed => () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  const series = (n, base, growth, noise, seed) => {
    const r = seeded(seed);
    return Array.from({
      length: n
    }, (_, i) => Math.round(base * (1 + growth * i / n) * (1 + (r() - .5) * noise)));
  };
  const analytics = {
    '7d': {
      kpis: {
        visitas: 11842,
        conv: 29.4,
        leads: 318,
        ventas: 104300
      },
      traffic: series(7, 1500, .25, .18, 3),
      leadsS: series(7, 40, .3, .3, 5)
    },
    '30d': {
      kpis: {
        visitas: 48291,
        conv: 32.8,
        leads: 1284,
        ventas: 428900
      },
      traffic: series(30, 1350, .45, .22, 7),
      leadsS: series(30, 34, .55, .35, 11)
    },
    '90d': {
      kpis: {
        visitas: 131560,
        conv: 27.1,
        leads: 3412,
        ventas: 1186400
      },
      traffic: series(45, 1100, .7, .2, 13),
      leadsS: series(45, 26, .8, .3, 17)
    }
  };
  const sources = [['Orgánico (SEO)', 41], ['Campañas de pago', 24], ['Directo', 16], ['Referidos', 11], ['Redes sociales', 8]];
  const process = [{
    n: '01',
    icon: 'search',
    title: 'Entendemos',
    text: 'Analizamos el negocio, operación, objetivos y problemas.',
    out: 'Diagnóstico y mapa de procesos'
  }, {
    n: '02',
    icon: 'pen-tool',
    title: 'Diseñamos',
    text: 'Definimos la solución, arquitectura y experiencia.',
    out: 'Propuesta, alcance y prototipo'
  }, {
    n: '03',
    icon: 'code-xml',
    title: 'Desarrollamos',
    text: 'Construimos, integramos y probamos.',
    out: 'Entregas quincenales y pruebas'
  }, {
    n: '04',
    icon: 'rocket',
    title: 'Evolucionamos',
    text: 'Lanzamos, medimos y seguimos mejorando.',
    out: 'Soporte, métricas y mejoras'
  }];
  const cases = [{
    id: 'constructa',
    name: 'Constructa',
    industry: 'Construcción',
    city: 'Monterrey, N.L.',
    img: IMG + 'caso-constructa.jpg',
    solutionShort: 'Sitio corporativo + estrategia digital',
    problem: 'Necesitaba una presencia digital profesional para generar confianza y oportunidades.',
    result: 'Mayor presencia digital y generación de oportunidades.',
    reto: 'Constructa competía por proyectos de más de $20 M con un sitio de 2014 que no mostraba su portafolio ni sus certificaciones. Los directores de compras que la investigaban no encontraban razones para incluirla en licitaciones.',
    solucion: 'Replanteamos su posicionamiento para desarrolladores e industria, construimos un sitio corporativo con portafolio filtrable por tipo de obra y conectamos cada solicitud a su CRM comercial.',
    built: ['Sitio corporativo bilingüe', 'Portafolio de obras con filtros', 'Formulario de licitaciones conectado al CRM', 'Estrategia SEO local e industrial', 'Tablero de oportunidades'],
    metrics: [['+3.4×', 'solicitudes de cotización'], ['62%', 'tráfico orgánico'], ['8 sem', 'de proyecto']],
    tech: ['Next.js', 'Headless CMS', 'HubSpot', 'Google Analytics 4']
  }, {
    id: 'orion',
    name: 'Distribuidora Orión',
    industry: 'Retail',
    city: 'Guadalajara, Jal.',
    img: IMG + 'caso-orion.jpg',
    solutionShort: 'E-commerce + experiencia de compra',
    problem: 'Vendía únicamente por mostrador y WhatsApp, sin visibilidad de inventario en línea.',
    result: 'Un canal digital que hoy representa una parte relevante de sus ventas.',
    reto: 'Orión tomaba pedidos de mayoristas por WhatsApp y los capturaba a mano en su ERP. Los errores de inventario generaban cancelaciones y los clientes minoristas no tenían forma de comprar en línea.',
    solucion: 'Diseñamos una tienda con dos experiencias — consumidor final y mayoreo con precios por cliente — sincronizada en tiempo real con su inventario y facturación.',
    built: ['Tienda en línea B2C', 'Portal de pedidos mayoristas', 'Sincronización con ERP', 'Facturación CFDI automática', 'Integración con paqueterías'],
    metrics: [['+230%', 'ventas en línea'], ['−70%', 'captura manual'], ['4.8/5', 'satisfacción de compra']],
    tech: ['Shopify Plus', 'Node.js', 'API ERP', 'Stripe', 'Skydropx']
  }, {
    id: 'lumen',
    name: 'Grupo Lumen',
    industry: 'Servicios',
    city: 'Ciudad de México',
    img: IMG + 'caso-lumen.jpg',
    solutionShort: 'Automatización + procesos internos',
    problem: 'Coordinaba 40 personas en campo con hojas de cálculo y correos.',
    result: 'Procesos internos automatizados y más de 15 horas semanales recuperadas.',
    reto: 'Grupo Lumen coordinaba servicios de mantenimiento con hojas de cálculo compartidas. Asignar, confirmar y facturar cada servicio requería cinco pasos manuales y muchas llamadas.',
    solucion: 'Mapeamos el proceso completo, eliminamos pasos duplicados y construimos un sistema interno con asignación automática, app para técnicos y reportes para dirección.',
    built: ['Sistema de órdenes de servicio', 'App para técnicos en campo', 'Asignación automática por zona', 'Notificaciones a clientes', 'Dashboard directivo'],
    metrics: [['+15 h', 'semanales recuperadas'], ['−45%', 'tiempo de asignación'], ['100%', 'servicios trazables']],
    tech: ['React', 'PostgreSQL', 'n8n', 'WhatsApp Business API', 'Metabase']
  }];
  const stages = [{
    id: 'inicio',
    icon: 'sprout',
    title: 'Estoy empezando',
    text: 'Necesito construir mi presencia digital.',
    rec: ['web', 'marketing', 'crm'],
    note: 'Empieza con una base sólida: un sitio que genere confianza, medición desde el primer día y un lugar donde registrar a cada prospecto.'
  }, {
    id: 'clientes',
    icon: 'handshake',
    title: 'Ya tengo clientes',
    text: 'Necesito crecer y profesionalizar mi operación.',
    rec: ['crm', 'ecommerce', 'marketing'],
    note: 'Ordena tu proceso comercial y abre nuevos canales de venta sin sumar trabajo manual.'
  }, {
    id: 'creciendo',
    icon: 'trending-up',
    title: 'Estoy creciendo',
    text: 'Necesito sistemas y automatización.',
    rec: ['automatizacion', 'sistemas', 'integraciones'],
    note: 'Cuando el volumen crece, los procesos manuales se vuelven el cuello de botella. Es momento de automatizar y conectar.'
  }, {
    id: 'grande',
    icon: 'building-2',
    title: 'Mi empresa ya es grande',
    text: 'Necesito tecnología adaptada a procesos complejos.',
    rec: ['sistemas', 'integraciones', 'analitica'],
    note: 'Software a la medida, integraciones con tus sistemas actuales y visibilidad directiva sobre toda la operación.'
  }];
  const goals = [['clientes', 'Conseguir más clientes', 'users'], ['online', 'Vender online', 'shopping-cart'], ['automatizar', 'Automatizar procesos', 'workflow'], ['digitalizar', 'Digitalizar mi empresa', 'scan-line'], ['sistema', 'Crear un sistema', 'server-cog'], ['web', 'Mejorar mi página', 'globe'], ['integrar', 'Integrar herramientas', 'plug-zap'], ['nose', 'No estoy seguro', 'circle-help']];
  const goalRec = {
    clientes: ['marketing', 'web', 'crm'],
    online: ['ecommerce', 'integraciones', 'marketing'],
    automatizar: ['automatizacion', 'integraciones', 'sistemas'],
    digitalizar: ['sistemas', 'automatizacion', 'analitica'],
    sistema: ['sistemas', 'integraciones', 'analitica'],
    web: ['web', 'marketing', 'analitica'],
    integrar: ['integraciones', 'automatizacion', 'analitica'],
    nose: ['web', 'automatizacion', 'analitica']
  };
  const sizes = ['1–5 personas', '6–20', '21–50', '51–100', '100+'];
  const timing = [['explorando', 'Estoy explorando'], ['pronto', 'Próximamente'], ['mes', 'Este mes'], ['ya', 'Lo necesitamos cuanto antes']];
  const trust = ['Grupo Lumen', 'Novatec', 'Constructa', 'Distribuidora Orión', 'Alpha', 'Rivera'];
  return {
    solutions,
    problems,
    flow,
    modules,
    systemTabs,
    analytics,
    sources,
    process,
    cases,
    stages,
    goals,
    goalRec,
    sizes,
    timing,
    trust,
    IMG
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/ds-loader.js
try { (() => {
// Uses the compiled design-system bundle when present; otherwise loads component sources directly (sync) so the kit works before compilation.
(function () {
  var NS = 'MextasDesignSystem_752eb8';
  if (!window[NS]) {
    var files = ['core/Icon', 'core/Button', 'core/IconButton', 'core/Eyebrow', 'core/Badge', 'core/Wordmark', 'surfaces/GlassCard', 'surfaces/MetricCard', 'surfaces/SectionHeading', 'forms/Input', 'forms/Select', 'forms/OptionCard', 'navigation/Tabs', 'overlays/Dialog'];
    var src = '',
      names = [];
    files.forEach(function (f) {
      var x = new XMLHttpRequest();
      x.open('GET', '../../components/' + f + '.jsx', false);
      x.send();
      src += x.responseText.replace(/^import .*$/mg, '').replace(/^const cx=/mg, 'var cx=').replace(/export function (\w+)/g, function (_, n) {
        names.push(n);
        return 'function ' + n;
      }) + '\n';
    });
    window[NS] = new Function('React', src + 'return {' + names.join(',') + '};')(window.React);
  }
  window.MX = window[NS];
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ds-loader.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.OptionCard = __ds_scope.OptionCard;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.GlassCard = __ds_scope.GlassCard;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

})();
