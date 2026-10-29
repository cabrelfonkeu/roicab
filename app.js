(function () {
  var S = window.SITE;
  var root = document.getElementById('root');
  var ui = { filter: '' };

  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function slug(t) { return String(t).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 24); }
  function route() { var h = (location.hash || '').replace('#', ''); return ['projets', 'cv', 'contact'].indexOf(h) >= 0 ? h : 'home'; }
  function fmtDate(d) { try { return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }); } catch (e) { return d; } }
  function statusCls(s) { return s === 'Réalisé' ? 'ok' : s === 'En cours' ? 'warn' : 'plan'; }
  function topTags(n) {
    var c = {};
    S.projects.forEach(function (p) { (p.tags || []).forEach(function (t) { c[t] = (c[t] || 0) + 1; }); });
    return Object.keys(c).sort(function (a, b) { return c[b] - c[a]; }).slice(0, n);
  }
  function currentCv() { return S.cvs.filter(function (c) { return c.current; })[0] || S.cvs[0]; }

  function header(r) {
    var L = [['home', 'Accueil', '#'], ['projets', 'Projets', '#projets'], ['cv', 'CV', '#cv'], ['contact', 'Contact', '#contact']];
    return '<header class="top"><div class="wrap bar"><a class="brand" href="#"><span class="pr">&gt;_</span>roicab</a><nav aria-label="Navigation">' +
      L.map(function (l) { return '<a href="' + l[2] + '"' + (r === l[0] ? ' aria-current="page"' : '') + '>' + l[1] + '</a>'; }).join('') + '</nav></div></header>';
  }
  function projectCard(p) {
    var h = '<article class="card"><div class="meta"><span>' + esc(p.year || '') + '</span><span class="pill ' + statusCls(p.status) + '">' + esc(p.status) + '</span></div>';
    h += '<h3>' + esc(p.title) + '</h3><p>' + esc(p.summary) + '</p>';
    if (p.details) h += '<details><summary>Détails</summary><p>' + esc(p.details) + '</p></details>';
    if ((p.tags || []).length) h += '<div class="tags">' + p.tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div>';
    if (p.link) h += '<a class="mono" style="font-size:13px" href="' + esc(p.link) + '" target="_blank" rel="noopener">Voir le projet ↗</a>';
    return h + '</article>';
  }
  function homeView() {
    var P = S.profile, tags = topTags(6);
    var ls = S.projects.slice(0, 4).map(function (p) { return slug(p.title); }).join('  ');
    var h = '<section class="hero"><div class="who">' + (P.available ? '<span class="badge"><i class="dot"></i>Disponible pour un stage</span>' : '') +
      '<h1>' + esc(P.name) + '</h1><div class="role">' + esc(P.title) + '</div><p class="lead">' + esc(P.about) + '</p>' +
      '<div class="cta"><a class="btn pri" href="#projets">Voir mes projets</a>' + (currentCv() ? '<a class="btn" href="#cv">Télécharger mon CV</a>' : '<a class="btn" href="#contact">Me contacter</a>') + '</div></div>' +
      '<div class="photo-wrap"><img class="photo" src="' + esc(P.photo) + '" alt="Portrait de ' + esc(P.name) + '"></div></section>';
    h += '<section class="term" aria-label="Terminal"><div class="term-h"><i></i><i></i><i></i><span style="margin-left:8px">roicab@lab: ~</span></div><pre>' +
      '<span class="p">$</span> whoami\n<span class="o">' + esc(P.name.toLowerCase()) + ' · ' + esc(P.location.toLowerCase()) + '</span>\n' +
      '<span class="p">$</span> ls projets/ | head -4\n<span class="o">' + esc(ls) + '</span>\n' +
      '<span class="p">$</span> cat stack.txt\n<span class="o">' + esc(tags.join(' · ')) + '</span>\n<span class="p">$</span> <span class="cur"></span></pre></section>';
    h += '<section><div class="sec-h"><h2>Projets récents</h2><a href="#projets">Tous les projets →</a></div><div class="grid">' + S.projects.slice(0, 3).map(projectCard).join('') + '</div></section>';
    h += '<section><div class="sec-h"><h2>Compétences</h2></div><div class="skills">' + S.skills.map(function (s) { return '<div><h3>' + esc(s.cat) + '</h3><ul>' + s.items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul></div>'; }).join('') + '</div></section>';
    return h;
  }
  function projetsView() {
    var all = [];
    S.projects.forEach(function (p) { (p.tags || []).forEach(function (t) { if (all.indexOf(t) < 0) all.push(t); }); });
    all.sort();
    var list = S.projects.filter(function (p) { return !ui.filter || (p.tags || []).indexOf(ui.filter) >= 0; });
    var h = '<div class="page-h"><h1>Projets</h1><p class="muted">Travaux d’infrastructure, de réseau et de développement réalisés en formation et en laboratoire personnel.</p></div>';
    if (all.length) h += '<div class="filters" role="group" aria-label="Filtrer par technologie"><button class="tag btn-tag" data-t="" aria-pressed="' + (!ui.filter) + '">Tout</button>' + all.map(function (t) { return '<button class="tag btn-tag" data-t="' + esc(t) + '" aria-pressed="' + (ui.filter === t) + '">' + esc(t) + '</button>'; }).join('') + '</div>';
    h += list.length ? '<div class="grid">' + list.map(projectCard).join('') + '</div>' : '<div class="empty">Aucun projet pour l’instant.</div>';
    return h;
  }
  function cvView() {
    var h = '<div class="page-h"><h1>Curriculum vitæ</h1><p class="muted">Ma dernière version est toujours en haut. Les anciennes versions restent disponibles pour suivre l’évolution de mes compétences.</p></div>';
    var cvs = S.cvs.slice().sort(function (a, b) { return (b.current ? 1 : 0) - (a.current ? 1 : 0) || String(b.date).localeCompare(String(a.date)); });
    if (!cvs.length) return h + '<div class="empty">Aucun CV en ligne pour l’instant.</div>';
    return h + '<div class="list">' + cvs.map(function (c) {
      return '<div class="row"><div class="info"><h3>' + esc(c.label) + (c.current ? ' <span class="pill ok">Version actuelle</span>' : '') + '</h3><span class="muted" style="font-size:14px">' + esc(fmtDate(c.date)) + (c.note ? ' · ' + esc(c.note) : '') + '</span></div>' +
        '<div class="acts"><a class="btn sm pri" href="' + esc(c.file) + '" target="_blank" rel="noopener">Ouvrir ↗</a></div></div>';
    }).join('') + '</div>';
  }
  function contactView() {
    var P = S.profile;
    function item(k, v, extra) { return '<div class="card"><span class="muted mono" style="font-size:12px">' + k + '</span><div class="val">' + v + '</div>' + (extra || '') + '</div>'; }
    var h = '<div class="page-h"><h1>Contact</h1><p class="muted">Je cherche un stage en administration systèmes et réseaux. Écris-moi, je réponds en quelques jours.</p></div><div class="contact">';
    if (P.email) h += item('E-MAIL', '<span id="mail">' + esc(P.email) + '</span>', '<div><button class="btn sm" data-copy="' + esc(P.email) + '">Copier l’adresse</button> <span class="muted mono" id="copied" style="font-size:12px"></span></div>');
    if (P.phone) h += item('TÉLÉPHONE', esc(P.phone));
    if (P.linkedin) h += item('LINKEDIN', '<a href="' + esc(P.linkedin) + '" target="_blank" rel="noopener">' + esc(P.linkedin.replace(/^https?:\/\/(www\.)?/, '')) + ' ↗</a>');
    if (P.github) h += item('GITHUB', '<a href="' + esc(P.github) + '" target="_blank" rel="noopener">' + esc(P.github.replace(/^https?:\/\//, '')) + ' ↗</a>');
    h += item('LIEU', esc(P.location));
    return h + '</div>';
  }
  function render() {
    var r = route();
    var body = { home: homeView, projets: projetsView, cv: cvView, contact: contactView }[r]();
    root.innerHTML = header(r) + '<main class="wrap">' + body + '</main><footer><div class="wrap"><span>© ' + new Date().getFullYear() + ' roicab</span><span>' + esc(S.profile.name) + ' · ' + esc(S.profile.location) + '</span></div></footer>';
    document.title = r === 'home' ? 'Roicab' : { projets: 'Projets', cv: 'CV', contact: 'Contact' }[r] + ' · Roicab';
  }

  document.addEventListener('click', function (ev) {
    var f = ev.target.closest('[data-t]');
    if (f) { ui.filter = f.dataset.t; render(); return; }
    var c = ev.target.closest('[data-copy]');
    if (c) {
      var done = function (t) { var e = document.getElementById('copied'); if (e) e.textContent = t; };
      var sel = function () { var m = document.getElementById('mail'); if (m) { var r = document.createRange(); r.selectNodeContents(m); var s = getSelection(); s.removeAllRanges(); s.addRange(r); done('sélectionné'); } };
      try { navigator.clipboard.writeText(c.dataset.copy).then(function () { done('copié'); }, sel); } catch (e) { sel(); }
    }
  });
  window.addEventListener('hashchange', function () { render(); window.scrollTo(0, 0); });
  render();
})();
