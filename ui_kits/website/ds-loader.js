// Uses the compiled design-system bundle when present; otherwise loads component sources directly (sync) so the kit works before compilation.
(function () {
  var NS = 'MextasDesignSystem_752eb8';
  if (!window[NS]) {
    var files = ['core/Icon', 'core/Button', 'core/IconButton', 'core/Eyebrow', 'core/Badge', 'core/Wordmark', 'surfaces/GlassCard', 'surfaces/MetricCard', 'surfaces/SectionHeading', 'forms/Input', 'forms/Select', 'forms/OptionCard', 'navigation/Tabs', 'overlays/Dialog'];
    var src = '', names = [];
    files.forEach(function (f) {
      var x = new XMLHttpRequest(); x.open('GET', '../../components/' + f + '.jsx', false); x.send();
      src += x.responseText.replace(/^import .*$/mg, '').replace(/^const cx=/mg, 'var cx=').replace(/export function (\w+)/g, function (_, n) { names.push(n); return 'function ' + n; }) + '\n';
    });
    window[NS] = new Function('React', src + 'return {' + names.join(',') + '};')(window.React);
  }
  window.MX = window[NS];
})();
