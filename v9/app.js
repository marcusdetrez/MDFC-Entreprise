/* ================================================================
   MARCUS DETREZ F&C — v9 — app.js
   Router · Render functions · Helpers
   ================================================================ */

/* ——— BLOG PHOTOS ——— */
const BLOG_PHOTOS = {
  'reunions-anglais-erreurs-francophones':              'https://picsum.photos/seed/meeting-en/1400/480',
  'toeic-strategie-score-800':                          'https://picsum.photos/seed/toeic-exam/1400/480',
  'negociation-anglais-face-natif':                     'https://picsum.photos/seed/negociation-en/1400/480',
  'prise-de-parole-public-structure-francais':          'https://picsum.photos/seed/prise-parole-fr/1400/480',
  'francais-affaires-formules-cles':                    'https://picsum.photos/seed/francais-biz/1400/480',
  'fle-entreprise-former-non-natifs':                   'https://picsum.photos/seed/fle-formation/1400/480',
  'suedois-professionnel-investissement-linguistique':  'https://picsum.photos/seed/stockholm-biz/1400/480',
  'culture-affaires-suedoise-codes':                    'https://picsum.photos/seed/swedish-culture/1400/480',
  'suedois-vs-norvegien-affaires-choix':                'https://picsum.photos/seed/nordic-choice/1400/480',
  'norvegien-affaires-secteur-maritime':                'https://picsum.photos/seed/maritime-norway/1400/480',
  'norvegien-bokmal-nynorsk-lequel-choisir':            'https://picsum.photos/seed/bokmal-nynorsk/1400/480',
  'norvege-suede-differences-culturelles-affaires':     'https://picsum.photos/seed/nordic-diff/1400/480',
  'caracteres-chinois-logique-apprentissage':           'https://picsum.photos/seed/chinese-chars/1400/480',
  'hsk4-six-mois-methode':                              'https://picsum.photos/seed/hsk4-methode/1400/480',
  'business-chine-codes-culturels':                     'https://picsum.photos/seed/china-business/1400/480',
  'management-interculturel-erreurs-managers-francais': 'https://picsum.photos/seed/intercult-mgmt/1400/480',
  'intelligence-culturelle-dirigeants-internationaux':  'https://picsum.photos/seed/cultural-intel/1400/480',
  'expansion-internationale-erreurs-culturelles':       'https://picsum.photos/seed/expansion-intl/1400/480',
  'ia-entreprise-ce-qui-change-vraiment':               'https://picsum.photos/seed/ai-entreprise/1400/480',
  'prompt-engineering-non-techniciens-guide':           'https://picsum.photos/seed/prompt-eng/1400/480',
  'transformation-digitale-pourquoi-echec':             'https://picsum.photos/seed/digital-trans/1400/480',
  'prise-de-parole-secrets-meilleurs-orateurs':         'https://picsum.photos/seed/orateurs-pub/1400/480',
  'communication-crise-dix-premieres-heures':           'https://picsum.photos/seed/comm-crise/1400/480',
  'techniques-vente-consultative-b2b':                  'https://picsum.photos/seed/vente-b2b/1400/480',
  'veille-strategique-systeme-30-minutes':              'https://picsum.photos/seed/veille-strat/1400/480',
  'guerre-economique-mecanismes-grandes-puissances':    'https://picsum.photos/seed/guerre-eco/1400/480',
  'analyse-concurrentielle-methode-48h':                'https://picsum.photos/seed/analyse-conc/1400/480',
  'strategie-langues-entreprise-enjeu-strategique':     'https://picsum.photos/seed/strategie-lang/1400/480',
  'personal-branding-dirigeants-reputation-strategique':'https://picsum.photos/seed/personal-brand/1400/480',
  'ingenierie-pedagogique-formation-resultats':         'https://picsum.photos/seed/ingenierie-ped/1400/480',
};

/* ——— LANG ——— */
function getLang(){ return document.body.classList.contains('en') ? 'en' : 'fr' }
function setLang(lang){
  document.body.className = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.btn-lang').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
}

/* ——— ROUTER ——— */
function route(){
  const hash = location.hash.replace('#','') || '/';
  const parts = hash.split('/').filter(Boolean);
  const app = document.getElementById('app');
  window.scrollTo(0,0);

  if(hash === '/') return renderHome(app);
  if(hash === '/manifeste') return renderManifeste(app);
  if(hash === '/contact') return renderContact(app);
  if(hash === '/blog') return renderBlog(app);
  if(parts[0]==='blog' && parts.length===2) return renderBlogArticle(app, parts[1]);
  if(hash === '/formation') return renderFormationHub(app);
  if(parts[0]==='formation' && parts.length===2) return renderFormationVolet(app, parts[1]);
  if(parts[0]==='formation' && parts.length===4) return renderFormationModule(app, parts[1], parts[2], parts[3]);
  if(hash === '/consulting') return renderConsultingHub(app);
  if(parts[0]==='consulting' && parts.length===2) return renderConsultingMission(app, parts[1]);

  app.innerHTML = `<div class="not-found sec"><div class="container"><h1>404</h1><p>Page introuvable.</p><a href="#/" class="btn-ghost" style="margin-top:2rem">← Accueil</a></div></div>`;
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'fr';
  setLang(saved);
  if(!location.hash || location.hash==='#') location.hash = '#/';
  route();
});

/* ——— NAV ACTIVE ——— */
function updateNavActive(){
  const hash = location.hash || '#/';
  document.querySelectorAll('#nav .nav-links a').forEach(a => {
    const h = a.getAttribute('href');
    a.classList.toggle('active', h && hash.startsWith(h) && h !== '#/');
    if(h === '#/' && hash === '#/') a.classList.add('active');
  });
}
window.addEventListener('hashchange', updateNavActive);
window.addEventListener('DOMContentLoaded', updateNavActive);

/* ——— TABS INIT ——— */
function initTabs(){
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.tabs-wrapper') || btn.parentElement;
      const target = btn.dataset.tab;
      group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const parent = btn.closest('section') || document.getElementById('app');
      parent.querySelectorAll('.tab-content').forEach(c => {
        c.classList.remove('active');
        c.style.display = 'none';
      });
      const tc = parent.querySelector('#'+target);
      if(tc){ tc.classList.add('active'); tc.style.display = 'grid'; }
    });
  });
}

/* ——— BLOG FILTERS ——— */
function initBlogFilters(){
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      document.querySelectorAll('.blog-card').forEach(card => {
        card.style.display = (!cat || card.dataset.cat === cat) ? '' : 'none';
      });
    });
  });
}

/* ——— HELPERS ——— */
function countAllModules(voletData){
  let n = 0;
  Object.values(voletData.sous_services).forEach(ss => { n += (ss.modules||[]).length; });
  return n;
}

function catLabel(c){
  const map = {langues:'Langues',interculturel:'Interculturel',ia:'IA & Tech',communication:'Communication',veille:'Veille',vision:'Vision'};
  return map[c] || c;
}

function relatedArticles(slugs){
  if(!slugs || !slugs.length) return '';
  const arts = slugs.map(s => BLOG.find(b => b.slug === s)).filter(Boolean);
  if(!arts.length) return '';
  return `<div class="section-block">
    <div class="container">
      <span class="sec-label">Articles liés</span>
      <div class="related-grid">
        ${arts.map(a => blogCardHTML(a, true)).join('')}
      </div>
    </div>
  </div>`;
}

function blogCardHTML(a, small=false){
  const photo = BLOG_PHOTOS[a.slug];
  return `<a href="#/blog/${a.slug}" class="blog-card" data-cat="${a.categorie}">
    <div class="blog-img">${photo ? `<img src="${photo.replace('1400/480','800/300')}" alt="${a.titre}" loading="lazy">` : '✦'}</div>
    <div class="blog-body">
      <span class="blog-cat">${catLabel(a.categorie)}</span>
      <h3 class="blog-title">${a.titre}</h3>
      ${small ? '' : `<p>${a.chapeau}</p>`}
      <div class="blog-meta">${a.date} · ${a.temps_lecture} min</div>
    </div>
  </a>`;
}

function ctaSectionHTML(title_fr, subtitle_fr){
  return `<div class="cta-section">
    <div class="container">
      <h2>${title_fr}</h2>
      <p>${subtitle_fr}</p>
      <div class="cta-btns">
        <a href="#/contact" class="btn-red">Prendre contact</a>
        <a href="#/manifeste" class="btn-ghost">Lire le manifeste</a>
      </div>
    </div>
  </div>`;
}

/* ================================================================
   HOME
   ================================================================ */
function renderHome(app){
  app.innerHTML = `
  <!-- HERO -->
  <section id="hero">
    <div class="hero-left">
      <div class="hero-eyebrow">
        <span class="pill r" data-fr>Formateur</span><span class="pill r" data-en>Trainer</span>
        <span class="pill r">Consultant</span>
        <span class="pill w" data-fr>Langues pro</span><span class="pill w" data-en>Pro languages</span>
        <span class="pill w" data-fr>Interculturel</span><span class="pill w" data-en>Intercultural</span>
      </div>
      <h1>
        <span data-fr>MON EXPÉRIENCE.<br>MON SAVOIR.<br>MON <span class="glitch">ARSENAL</span>.<br>À VOTRE SERVICE.</span>
        <span data-en>MY EXPERIENCE.<br>MY KNOWLEDGE.<br>MY <span class="glitch">ARSENAL</span>.<br>AT YOUR SERVICE.</span>
      </h1>
      <p class="hero-sub">
        <span data-fr>Formateur et consultant indépendant — langues étrangères professionnelles, management interculturel et conseil à l'internationalisation. 3 500+ apprenants formés dans les meilleures écoles françaises depuis 2016.</span>
        <span data-en>Independent trainer and consultant — professional foreign languages, intercultural management and internationalisation advisory. 3,500+ learners trained across France's top schools since 2016.</span>
      </p>
      <div class="hero-ctas">
        <a href="#/formation" class="btn-fill" data-fr>Voir les formations</a>
        <a href="#/formation" class="btn-fill" data-en>Browse services</a>
        <a href="#/contact" class="btn-ghost">Contact</a>
      </div>
      <div class="hero-stats">
        <div><span class="stat-n">3500+</span><span class="stat-l" data-fr>apprenants</span><span class="stat-l" data-en>learners</span></div>
        <div><span class="stat-n w">8</span><span class="stat-l" data-fr>langues</span><span class="stat-l" data-en>languages</span></div>
        <div><span class="stat-n">7</span><span class="stat-l" data-fr>écoles partenaires</span><span class="stat-l" data-en>partner schools</span></div>
        <div><span class="stat-n w">2016</span><span class="stat-l" data-fr>depuis</span><span class="stat-l" data-en>since</span></div>
      </div>
    </div>
    <div class="hero-right">
      <img class="hero-photo" src="../ChatGPT%20Image%20May%2020%2C%202026%2C%2007_40_15%20AM.png" alt="Marcus Detrez" onerror="this.style.display='none'">
      <div class="hero-accent">MD</div>
    </div>
  </section>

  <!-- FORMATIONS PREVIEW -->
  <section class="sec sec-dark" id="services">
    <div class="container">
      <span class="sec-label" data-fr>Domaines d'expertise</span>
      <span class="sec-label" data-en>Areas of expertise</span>
      <h2 data-fr>5 VOLETS D'<span class="mk-r">INTERVENTION</span></h2>
      <h2 data-en>5 AREAS OF <span class="mk-r">EXPERTISE</span></h2>
      <div class="tabs">
        <button class="tab-btn active" data-tab="tab-f">
          <span data-fr>Formation</span><span data-en>Training</span>
        </button>
        <button class="tab-btn" data-tab="tab-c">Consulting</button>
      </div>
      <div id="tab-f" class="tab-content active svc-grid-2">
        <a href="#/formation/langues" class="svc-card">
          <h3 data-fr>Langues étrangères</h3><h3 data-en>Foreign Languages</h3>
          <p data-fr>Anglais, Français, Suédois, Norvégien, Mandarin — du A2 au C2.</p>
          <p data-en>English, French, Swedish, Norwegian, Mandarin — A2 to C2.</p>
          <ul class="svc-bullets"><li data-fr>17 modules certifiants</li><li data-en>17 certified modules</li><li data-fr>Approche par objectifs communicatifs</li><li data-en>Communicative objectives approach</li></ul>
          <span class="svc-tag" data-fr>17 modules</span><span class="svc-tag" data-en>17 modules</span>
        </a>
        <a href="#/formation/interculturel" class="svc-card">
          <h3 data-fr>Interculturalité</h3><h3 data-en>Interculturality</h3>
          <p data-fr>Négociation cross-culturelle, management multiculturel, expansion internationale.</p>
          <p data-en>Cross-cultural negotiation, multicultural management, international expansion.</p>
          <ul class="svc-bullets"><li data-fr>Asie, Nordiques, Anglophones</li><li data-en>Asia, Nordics, Anglophones</li><li data-fr>Simulations haute pression</li><li data-en>High-pressure simulations</li></ul>
          <span class="svc-tag" data-fr>3 modules</span><span class="svc-tag" data-en>3 modules</span>
        </a>
        <a href="#/formation/ia" class="svc-card">
          <h3 data-fr>IA & Nouvelles technologies</h3><h3 data-en>AI & New Technologies</h3>
          <p data-fr>Transformation digitale, IA appliquée aux métiers, déploiement en équipes.</p>
          <p data-en>Digital transformation, AI for professionals, team deployment.</p>
          <span class="svc-tag" data-fr>3 modules</span><span class="svc-tag" data-en>3 modules</span>
        </a>
        <a href="#/formation/communication" class="svc-card">
          <h3>Communication</h3>
          <p data-fr>Management de l'humain, gestion de crise, vente, prise de parole en public.</p>
          <p data-en>Human management, crisis communication, sales, public speaking.</p>
          <span class="svc-tag" data-fr>4 modules</span><span class="svc-tag" data-en>4 modules</span>
        </a>
        <a href="#/formation/veille" class="svc-card" style="grid-column:1/3">
          <h3 data-fr>Veille des marchés</h3><h3 data-en>Market Intelligence</h3>
          <p data-fr>Veille stratégique, analyse concurrentielle, intelligence sectorielle appliquée.</p>
          <p data-en>Strategic monitoring, competitive analysis, applied sectoral intelligence.</p>
          <span class="svc-tag" data-fr>3 modules</span><span class="svc-tag" data-en>3 modules</span>
        </a>
      </div>
      <div id="tab-c" class="tab-content svc-grid-3" style="display:none">
        ${CONSULTING.slice(0,6).map((m,i) => `<a href="#/consulting/${m.slug}" class="svc-card">
          <span class="mission-num">0${i+1}</span>
          <h3>${m.label_fr}</h3>
          <p>${m.pitch_fr.split('.')[0]}.</p>
        </a>`).join('')}
        <a href="#/consulting" class="svc-card" style="border-style:dashed;align-items:center;justify-content:center;text-align:center">
          <p data-fr style="color:var(--ink3)">Voir les 10 missions →</p>
          <p data-en style="color:var(--ink3)">View all 10 missions →</p>
        </a>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section class="sec" id="about">
    <div class="container">
      <span class="sec-label" data-fr>À propos</span>
      <span class="sec-label" data-en>About</span>
      <h2 data-fr>FORMATEUR <span class="mk-r">ET OPÉRATEUR</span></h2>
      <h2 data-en>TRAINER <span class="mk-r">AND OPERATOR</span></h2>
      <div class="about-grid">
        <div class="about-col">
          <p data-fr style="margin-bottom:1.5rem">Depuis 2016, j'interviens là où les organisations ont besoin de résultats. 8 langues. 10+ projets fondés et dirigés. 3 500+ apprenants formés dans 7 des meilleures écoles françaises. Marchés asiatiques, nordiques, francophones.</p>
          <p data-en style="margin-bottom:1.5rem">Since 2016, I intervene where organisations need results. 8 languages. 10+ projects founded and led. 3,500+ learners trained across France's top 7 schools. Asian, Nordic, Francophone markets.</p>
          <div class="methodo-cats">
            <div><div class="methodo-cat-label" data-fr>Pédagogie</div><div class="methodo-cat-label" data-en>Pedagogy</div><div class="methodo-items"><span class="methodo-item" data-fr>Approche par objectifs</span><span class="methodo-item" data-en>Objective-based</span><span class="methodo-item" data-fr>Ingénierie de formation</span><span class="methodo-item" data-en>Training engineering</span><span class="methodo-item" data-fr>Méthodo 5 piliers</span><span class="methodo-item" data-en>5-pillar method</span><span class="methodo-item">Qualiopi</span></div></div>
            <div><div class="methodo-cat-label" data-fr>Interculturel</div><div class="methodo-cat-label" data-en>Intercultural</div><div class="methodo-items"><span class="methodo-item" data-fr>Modèles cross-culturels</span><span class="methodo-item" data-en>Cross-cultural models</span><span class="methodo-item" data-fr>Intelligence culturelle</span><span class="methodo-item" data-en>Cultural intelligence</span><span class="methodo-item" data-fr>Styles de négociation</span><span class="methodo-item" data-en>Negotiation styles</span></div></div>
            <div><div class="methodo-cat-label" data-fr>Tech & Produit</div><div class="methodo-cat-label" data-en>Tech & Product</div><div class="methodo-items"><span class="methodo-item" data-fr>Architecture edtech</span><span class="methodo-item" data-en>Edtech architecture</span><span class="methodo-item" data-fr>IA appliquée</span><span class="methodo-item" data-en>Applied AI</span></div></div>
          </div>
          <div class="lang-tags" style="margin-top:2rem">
            <span class="lang-tag" data-fr>Enseignées :</span>
            <span class="lang-tag teach">Anglais</span><span class="lang-tag teach" data-fr>Français</span><span class="lang-tag teach">Suédois</span><span class="lang-tag teach">Norvégien</span><span class="lang-tag teach">Mandarin</span>
            <span class="lang-tag" data-fr>Parlées :</span><span class="lang-tag" data-en>Also spoken :</span>
            <span class="lang-tag">Allemand B2+</span><span class="lang-tag">Japonais B1</span><span class="lang-tag">HSK 4</span>
          </div>
        </div>
        <div class="about-col">
          <span class="sec-label" data-fr>Méthode propriétaire — 5 piliers</span>
          <span class="sec-label" data-en>Proprietary method — 5 pillars</span>
          <div class="method-item"><div class="m-num">01</div><div class="m-body"><h4 data-fr>Ancrage syntaxique</h4><h4 data-en>Syntactic anchoring</h4><p data-fr>Les structures avant le vocabulaire. Ce qui reste, c'est la grammaire profonde.</p><p data-en>Structures before vocabulary. What sticks is deep grammar.</p></div></div>
          <div class="method-item"><div class="m-num">02</div><div class="m-body"><h4 data-fr>Immersion contextuelle</h4><h4 data-en>Contextual immersion</h4><p data-fr>Chaque séance part de situations réelles issues du contexte professionnel du client.</p><p data-en>Every session starts from real situations from the client's professional context.</p></div></div>
          <div class="method-item"><div class="m-num">03</div><div class="m-body"><h4 data-fr>Progression spirale</h4><h4 data-en>Spiral progression</h4><p data-fr>On revient sur les mêmes points avec une complexité croissante. Rien n'est vu une seule fois.</p><p data-en>We return to the same points with increasing complexity. Nothing is seen only once.</p></div></div>
          <div class="method-item"><div class="m-num">04</div><div class="m-body"><h4 data-fr>Feedback immédiat</h4><h4 data-en>Immediate feedback</h4><p data-fr>La correction se fait en production, pas après. Le cerveau retient l'erreur corrigée dans le vif.</p><p data-en>Correction happens during production, not after. The brain retains errors corrected in the moment.</p></div></div>
          <div class="method-item"><div class="m-num">05</div><div class="m-body"><h4 data-fr>Automatisation</h4><h4 data-en>Automatisation</h4><p data-fr>L'objectif final : que les structures deviennent des réflexes. Pas de réflexion — de l'action.</p><p data-en>The final goal: structures become reflexes. No thinking — acting.</p></div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- CERTIFICATIONS -->
  <section class="sec sec-darker" id="certs">
    <div class="container">
      <span class="sec-label" data-fr>Qualifications & certifications</span>
      <span class="sec-label" data-en>Qualifications & certifications</span>
      <h2 data-fr>MES <span class="mk-r">CERTIFICATIONS</span></h2>
      <h2 data-en>MY <span class="mk-r">CERTIFICATIONS</span></h2>
      <div class="certs-tabs tabs">
        <button class="tab-btn active" data-tab="ct-langues" data-fr>Langues</button>
        <button class="tab-btn active" data-tab="ct-langues" data-en>Languages</button>
        <button class="tab-btn" data-tab="ct-academique" data-fr>Académique</button>
        <button class="tab-btn" data-tab="ct-academique" data-en>Academic</button>
        <button class="tab-btn" data-tab="ct-business" data-fr>Business & Tech</button>
        <button class="tab-btn" data-tab="ct-business" data-en>Business & Tech</button>
      </div>
      <div id="ct-langues" class="tab-content certs-grid ct-active active">
        ${CERTS.langues.map(c => certCardHTML(c)).join('')}
      </div>
      <div id="ct-academique" class="tab-content certs-grid ct-hidden" style="display:none">
        ${CERTS.academique.map(c => certCardHTML(c)).join('')}
      </div>
      <div id="ct-business" class="tab-content certs-grid ct-hidden" style="display:none">
        ${CERTS.business.map(c => certCardHTML(c)).join('')}
      </div>
    </div>
  </section>

  <!-- PARTNERS -->
  <section class="sec" id="partners">
    <div class="container">
      <div style="max-width:540px;margin-bottom:3.5rem">
        <span class="sec-label" data-fr>Partenaires institutionnels</span>
        <span class="sec-label" data-en>Institutional partners</span>
        <h2 data-fr>ÉCOLES & <span class="mk-r">ÉTABLISSEMENTS</span></h2>
        <h2 data-en>SCHOOLS & <span class="mk-r">INSTITUTIONS</span></h2>
        <p data-fr>J'interviens comme formateur et chargé de cours dans ces établissements d'enseignement supérieur.</p>
        <p data-en>I deliver courses and training at these French higher education institutions.</p>
      </div>
      <div class="schools-grid">
        <div class="school-card"><div class="sc-logo-wrap"><img class="sc-logo" src="../logo%20des%20partenaires/22.png" alt="EM Normandie"></div><div><div class="sc-name">EM NORMANDIE</div><div class="sc-type" data-fr>École de management</div><div class="sc-type" data-en>Business school</div></div></div>
        <div class="school-card"><div class="sc-logo-wrap"><img class="sc-logo" src="../logo%20des%20partenaires/albert-school-1680613084.png" alt="Albert School"></div><div><div class="sc-name">ALBERT SCHOOL</div><div class="sc-type" data-fr>École de commerce</div><div class="sc-type" data-en>Business school</div></div></div>
        <div class="school-card"><div class="sc-logo-wrap"><img class="sc-logo" src="../logo%20des%20partenaires/18.png" alt="Mines Paris PSL"></div><div><div class="sc-name">MINES PARIS PSL</div><div class="sc-type" data-fr>Grande école</div><div class="sc-type" data-en>Engineering grande école</div></div></div>
        <div class="school-card" style="border-right:none"><div class="sc-logo-wrap"><img class="sc-logo" src="../logo%20des%20partenaires/19.png" alt="CESI"></div><div><div class="sc-name">CESI</div><div class="sc-type" data-fr>École d'ingénieurs</div><div class="sc-type" data-en>Engineering school</div></div></div>
        <div class="school-card" style="border-bottom:none"><div class="sc-logo-wrap"><img class="sc-logo" src="../logo%20des%20partenaires/20.png" alt="ESAIP"></div><div><div class="sc-name">ESAIP</div><div class="sc-type" data-fr>École d'ingénieurs La Salle</div><div class="sc-type" data-en>Engineering school</div></div></div>
        <div class="school-card" style="border-bottom:none"><div class="sc-logo-wrap"><img class="sc-logo" src="../logo%20des%20partenaires/21.png" alt="Euridis"></div><div><div class="sc-name">EURIDIS</div><div class="sc-type">Business School</div></div></div>
        <div class="school-card" style="border-bottom:none"><div class="sc-logo-wrap"><img class="sc-logo" src="../logo%20des%20partenaires/39.png" alt="LSI"></div><div><div class="sc-name">LSI</div><div class="sc-type">Learny Society Intl</div></div></div>
        <div class="school-card" style="border-right:none;border-bottom:none"><div class="sc-logo-wrap"><img class="sc-logo" src="../logo%20des%20partenaires/23.png" alt="Aix-Marseille"></div><div><div class="sc-name">AIX-MARSEILLE</div><div class="sc-type" data-fr>Université</div><div class="sc-type" data-en>University</div></div></div>
      </div>
    </div>
  </section>

  <!-- REVIEWS -->
  <section class="sec sec-dark" id="reviews">
    <div class="container">
      <span class="sec-label" data-fr>Ce qu'ils en disent</span>
      <span class="sec-label" data-en>What they say</span>
      <h2 data-fr>AVIS & <span class="mk-r">TÉMOIGNAGES</span></h2>
      <h2 data-en>REVIEWS & <span class="mk-r">TESTIMONIALS</span></h2>
      <div class="reviews-grid">
        <div class="rev-card"><div class="stars">★★★★★</div><p class="rev-text" data-fr>"Une pédagogie qui sort vraiment des sentiers battus. Marcus ancre les structures avant le vocabulaire — résultat, ça reste. En 3 mois j'ai progressé plus qu'en 2 ans de cours classiques."</p><p class="rev-text" data-en>"A truly unconventional approach. Marcus anchors structures before vocabulary — and it sticks. In 3 months I progressed more than in 2 years of conventional classes."</p><div class="rev-who"><strong>Camille R.</strong><span>EM Normandie · Business English</span></div></div>
        <div class="rev-card"><div class="stars">★★★★★</div><p class="rev-text" data-fr>"Le module interculturel qu'il a conçu pour nos équipes Asie a changé la façon dont nos managers abordent les négociations. Concret, percutant, immédiatement applicable."</p><p class="rev-text" data-en>"The intercultural module he designed for our Asia teams changed how our managers approach negotiations. Concrete, impactful, immediately applicable."</p><div class="rev-who"><strong>Thomas L.</strong><span data-fr>Directeur RH · Industrie internationale</span><span data-en>HR Director · International industry</span></div></div>
        <div class="rev-card"><div class="stars">★★★★★</div><p class="rev-text" data-fr>"Je recommande Marcus sans réserve pour les langues scandinaves en contexte professionnel. Rare, rigoureux, très à l'écoute des contraintes terrain."</p><p class="rev-text" data-en>"I recommend Marcus without reservation for Scandinavian languages in a professional context. Rare expertise, rigorous, and very attuned to operational constraints."</p><div class="rev-who"><strong>Ingrid M.</strong><span data-fr>Responsable formation · Secteur maritime</span><span data-en>Training Manager · Maritime sector</span></div></div>
      </div>
    </div>
  </section>

  <!-- BLOG PREVIEW -->
  <section class="sec" id="blog-preview">
    <div class="container">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:3rem;flex-wrap:wrap;gap:1rem">
        <div><span class="sec-label">Blog</span><h2 data-fr>ACTUALITÉS & <span class="mk-r">RÉFLEXIONS</span></h2><h2 data-en>NEWS & <span class="mk-r">INSIGHTS</span></h2></div>
        <a href="#/blog" class="btn-ghost" data-fr>Tous les articles →</a>
        <a href="#/blog" class="btn-ghost" data-en>All articles →</a>
      </div>
      <div class="blog-grid-main">
        ${blogCardHTML(BLOG[10])}
        ${blogCardHTML(BLOG[11])}
        ${blogCardHTML(BLOG[15])}
      </div>
    </div>
  </section>

  <!-- CTA -->
  ${ctaSectionHTML('TRAVAILLONS <span class="glitch">ENSEMBLE</span>', 'Formations, consulting, missions courtes ou longues — prenez contact pour définir ce dont vous avez besoin.')}
  `;
  initTabs();
}

function certCardHTML(c){
  return `<div class="cert-card">
    <span class="cert-year">${c.annee}</span>
    <div class="cert-name">${c.nom}</div>
    <div class="cert-sub">${c.sub}</div>
    <span class="cert-level ${c.badge}">${c.niveau}</span>
    <div class="cert-desc">${c.desc}</div>
  </div>`;
}

/* ================================================================
   MANIFESTE
   ================================================================ */
function renderManifeste(app){
  app.innerHTML = `
  <section class="manifeste-hero-section">
    <div class="container">
      <span class="sec-label" data-fr>Positionnement</span>
      <span class="sec-label" data-en>Position</span>
      <h1>LE <span class="glitch">MANIFESTE</span></h1>
      <p class="manifeste-intro">Je ne suis pas un formateur de plus.<br>Je suis un <span class="glitch">opérateur</span>.</p>
    </div>
  </section>

  <section class="sec">
    <div class="container">
      <div class="manifeste-content">
        <div class="manifeste-section">
          <p>Depuis 2016, j'interviens là où les organisations ont besoin de résultats — pas de présentations PowerPoint, pas de journées de team building, pas de certifications qui finissent dans un tiroir.</p>
          <p>Je parle 8 langues. J'ai fondé et dirigé plus de 10 projets. J'ai formé plus de 3 500 personnes dans 7 des meilleures écoles françaises. J'ai travaillé sur des marchés asiatiques, nordiques, francophones. J'ai construit des programmes de formation de A à Z. J'ai conseillé des organisations sur leur stratégie linguistique, interculturelle et internationale.</p>
          <p>Ce que j'ai appris : la compétence ne suffit pas. Il faut la méthode. Et la méthode ne suffit pas. Il faut le terrain.</p>
        </div>

        <div class="manifeste-section">
          <span class="manifeste-section-title" data-fr>QUI JE SUIS</span>
          <span class="manifeste-section-title" data-en>WHO I AM</span>
          <p>Un opérateur pluridisciplinaire. Pas un académicien — quelqu'un qui a construit des choses réelles, dans des contextes réels, avec des contraintes réelles. Les langues, l'interculturel, l'IA, la stratégie : ce ne sont pas des cases cochées sur un CV — ce sont des outils que j'utilise tous les jours.</p>
          <blockquote>La différence entre un expert et un opérateur : l'expert sait. L'opérateur fait.</blockquote>
        </div>

        <div class="manifeste-section">
          <span class="manifeste-section-title" data-fr>POURQUOI</span>
          <span class="manifeste-section-title" data-en>WHY</span>
          <p>Parce que le marché de la formation professionnelle en France est structurellement médiocre. Des organismes qui vendent du volume, des formateurs qui récitent leurs slides, des certifications qui ne forment à rien. Ce n'est pas de la formation — c'est de la conformité administrative.</p>
          <p>Je ne travaille pas dans ce marché-là. Je travaille pour les organisations qui ont compris que la compétence linguistique et interculturelle est un avantage compétitif réel, pas une obligation légale.</p>
        </div>

        <div class="manifeste-section">
          <span class="manifeste-section-title" data-fr>COMMENT</span>
          <span class="manifeste-section-title" data-en>HOW</span>
          <p>Par une méthode propriétaire construite sur 10 ans de terrain. Ancrage syntaxique, immersion contextuelle, progression spirale, feedback immédiat, automatisation. Cinq piliers. Zéro remplissage.</p>
          <p>Chaque intervention est conçue sur-mesure. Pas de module standard sorti d'un catalogue — un diagnostic, un programme, une livraison.</p>
        </div>

        <div class="manifeste-section">
          <span class="manifeste-section-title" data-fr>LA LIGNE ROUGE</span>
          <span class="manifeste-section-title" data-en>THE RED LINE</span>
          <div class="ligne-rouge-box">
            <p>Je ne travaille pas avec des organisations qui veulent cocher des cases. Je travaille avec celles qui veulent changer quelque chose — dans leurs équipes, dans leurs marchés, dans leurs résultats.</p>
            <p style="margin-bottom:0">Si vous cherchez un prestataire qui validera vos convictions existantes, je ne suis pas la bonne personne. Si vous cherchez quelqu'un qui dit ce qui est vrai, construit ce qui fonctionne, et livre ce qui a été promis — on peut parler.</p>
          </div>
        </div>

        <div class="manifeste-closing">MON EXPÉRIENCE. MON SAVOIR.<br>MON <span class="glitch">ARSENAL</span>.<br>À VOTRE SERVICE.</div>
        <div class="hero-ctas">
          <a href="#/contact" class="btn-red" data-fr>Prendre contact</a>
          <a href="#/contact" class="btn-red" data-en>Get in touch</a>
          <a href="#/formation" class="btn-ghost" data-fr>Voir les formations</a>
          <a href="#/formation" class="btn-ghost" data-en>View training</a>
        </div>
      </div>
    </div>
  </section>`;
}

/* ================================================================
   FORMATION HUB
   ================================================================ */
function renderFormationHub(app){
  const voletsHTML = Object.entries(FORMATIONS).map(([key, v]) => `
    <a href="#/formation/${v.slug}" class="volet-card">
      <div class="volet-icon">${v.icon}</div>
      <h3>${v.label_fr}</h3>
      <p style="font-size:.85rem;color:var(--ink3);line-height:1.5">${v.desc_fr}</p>
      <div class="volet-count">${countAllModules(v)} modules</div>
    </a>`).join('');

  app.innerHTML = `
  <div class="hub-header sec sec-dark">
    <div class="container">
      <div class="breadcrumb"><a href="#/">Accueil</a><span class="sep">→</span><span class="current">Formations</span></div>
      <span class="sec-label" data-fr>Formations professionnelles</span>
      <span class="sec-label" data-en>Professional training</span>
      <h1 data-fr>5 VOLETS <span class="glitch">D'INTERVENTION</span></h1>
      <h1 data-en>5 AREAS OF <span class="glitch">EXPERTISE</span></h1>
      <p style="margin-top:1rem;max-width:600px" data-fr>Langues, interculturalité, IA, communication, veille des marchés — 20+ modules de formation sur-mesure ou en programme.</p>
      <p style="margin-top:1rem;max-width:600px" data-en>Languages, interculturality, AI, communication, market intelligence — 20+ tailored or programmed training modules.</p>
    </div>
  </div>
  <section class="sec">
    <div class="container">
      <div class="volets-grid">${voletsHTML}</div>
    </div>
  </section>
  ${ctaSectionHTML('BESOIN D\'UNE <span class="glitch">FORMATION</span> ?', 'Chaque programme est conçu sur-mesure. Prenez contact pour définir vos besoins.')}`;
}

/* ================================================================
   FORMATION VOLET
   ================================================================ */
function renderFormationVolet(app, voletSlug){
  const volet = FORMATIONS[voletSlug];
  if(!volet){ app.innerHTML = '<div class="not-found sec container"><h2>Volet introuvable</h2></div>'; return; }

  const ssHTML = Object.entries(volet.sous_services).map(([ssKey, ss]) => {
    const modulesHTML = (ss.modules||[]).map(m => `
      <a href="#/formation/${voletSlug}/${ssKey}/${m.slug}" class="module-card">
        <h3>${m.label_fr}</h3>
        <p style="font-size:.85rem;line-height:1.5">${m.pitch_fr.split('.')[0]}.</p>
        <div class="module-tag">${volet.label_fr} · ${ss.label_fr}</div>
      </a>`).join('');
    return `<div class="sous-service-section">
      <span class="sous-label">${ss.label_fr}</span>
      <div class="modules-grid">${modulesHTML}</div>
    </div>`;
  }).join('');

  app.innerHTML = `
  <div class="hub-header sec sec-dark">
    <div class="container">
      <div class="breadcrumb">
        <a href="#/">Accueil</a><span class="sep">→</span>
        <a href="#/formation">Formations</a><span class="sep">→</span>
        <span class="current">${volet.label_fr}</span>
      </div>
      <span class="sec-label">${volet.label_fr}</span>
      <h1>${volet.label_fr.toUpperCase().replace('É','<span class="glitch">É</span>')}</h1>
      <p style="margin-top:1rem;max-width:600px">${volet.desc_fr}</p>
    </div>
  </div>
  <section class="sec">
    <div class="container">${ssHTML}</div>
  </section>
  ${ctaSectionHTML('CONSTRUISONS VOTRE <span class="glitch">PROGRAMME</span>', 'Chaque module est adaptable à votre contexte, vos objectifs, votre secteur.')}`;
}

/* ================================================================
   FORMATION MODULE
   ================================================================ */
function renderFormationModule(app, voletSlug, ssSlug, moduleSlug){
  const volet = FORMATIONS[voletSlug];
  if(!volet) return app.innerHTML = '<div class="not-found sec container"><h2>Page introuvable</h2></div>';
  const ss = volet.sous_services[ssSlug];
  if(!ss) return app.innerHTML = '<div class="not-found sec container"><h2>Page introuvable</h2></div>';
  const mod = (ss.modules||[]).find(m => m.slug === moduleSlug);
  if(!mod) return app.innerHTML = '<div class="not-found sec container"><h2>Page introuvable</h2></div>';

  const key = `${voletSlug}/${ssSlug}/${moduleSlug}`;
  const fc = (typeof FORMATIONS_CONTENT !== 'undefined') ? FORMATIONS_CONTENT[key] : null;

  function pourQuiHTML(){
    if(!fc || !fc.pour_qui) return '';
    return `<div class="section-block">
      <div class="container">
        <span class="sec-label">À qui s'adresse cette formation</span>
        <h3>POUR <span class="mk-r">QUI</span> ?</h3>
        <div class="pour-qui-grid">
          ${fc.pour_qui.map(p => `<div class="pq-card">
            <span class="pq-icon">${p.icon||'◆'}</span>
            <div class="pq-label">${p.label}</div>
            <div class="pq-desc">${p.desc}</div>
          </div>`).join('')}
        </div>
      </div>
    </div>`;
  }

  function deroulementHTML(){
    if(!fc || !fc.deroulement) return '';
    return `<div class="section-block sec-dark">
      <div class="container">
        <span class="sec-label">Déroulé détaillé</span>
        <h3>CE QUI SE PASSE <span class="mk-r">CONCRÈTEMENT</span></h3>
        <div class="deroulement-detail">
          ${fc.deroulement.map((p,i) => `<div class="dd-phase">
            <div class="dd-num">0${i+1}</div>
            <div class="dd-body">
              <div class="dd-title">${p.titre}</div>
              ${p.duree ? `<div class="dd-duration">${p.duree}</div>` : ''}
              <p>${p.desc}</p>
              ${p.items ? `<ul>${p.items.map(it => `<li>${it}</li>`).join('')}</ul>` : ''}
            </div>
          </div>`).join('')}
        </div>
      </div>
    </div>`;
  }

  function exercicesHTML(){
    if(!fc || !fc.exercices) return '';
    return `<div class="section-block">
      <div class="container">
        <span class="sec-label">Méthodes & exercices</span>
        <h3>CE QUE VOUS <span class="mk-r">PRATIQUEZ</span></h3>
        <div class="exo-grid">
          ${fc.exercices.map((e,i) => `<div class="exo-card">
            <div class="exo-num">0${i+1}</div>
            <div class="exo-title">${e.titre}</div>
            <div class="exo-desc">${e.desc}</div>
          </div>`).join('')}
        </div>
      </div>
    </div>`;
  }

  function resultatsHTML(){
    if(!fc || !fc.resultats) return '';
    return `<div class="section-block sec-dark">
      <div class="container">
        <span class="sec-label">Résultats concrets</span>
        <h3>CE QUE VOUS <span class="mk-r">REPARTEZ</span></h3>
        <ul class="resultats-list">
          ${fc.resultats.map(r => `<li class="res-item">
            <span class="res-check">✓</span>
            <div class="res-text"><strong>${r.titre}</strong>${r.desc}</div>
          </li>`).join('')}
        </ul>
      </div>
    </div>`;
  }

  app.innerHTML = `
  <div class="page-hero">
    <div class="container">
      <div class="breadcrumb">
        <a href="#/">Accueil</a><span class="sep">→</span>
        <a href="#/formation">Formations</a><span class="sep">→</span>
        <a href="#/formation/${voletSlug}">${volet.label_fr}</a><span class="sep">→</span>
        <span class="current">${mod.label_fr}</span>
      </div>
      <div class="pill r" style="margin-bottom:1rem">${ss.label_fr}</div>
      <h1>${mod.label_fr.toUpperCase()}</h1>
      <p style="margin-top:1.25rem;font-size:1.05rem;line-height:1.85;max-width:780px;color:var(--ink2)">${mod.pitch_fr}</p>
      <div class="format-box" style="margin-top:1.5rem">${mod.format_fr}</div>
    </div>
  </div>

  ${pourQuiHTML()}

  <div class="section-block">
    <div class="container">
      <span class="sec-label">Contenu</span>
      <h3>LE <span class="mk-r">PROGRAMME</span></h3>
      <ul class="programme-list">
        ${(mod.programme_fr||[]).map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>
  </div>

  ${deroulementHTML()}
  ${exercicesHTML()}
  ${resultatsHTML()}

  <div class="section-block">
    <div class="container">
      <span class="sec-label">Expériences terrain</span>
      <h3>RÉFÉRENCES <span class="mk-r">MARCUS</span></h3>
      <p style="max-width:700px;font-size:.97rem">${mod.experiences_fr}</p>
    </div>
  </div>

  <div class="section-block sec-dark">
    <div class="container">
      <span class="sec-label">Approches mobilisées</span>
      <h3>SAVOIR-FAIRE <span class="mk-r">& MÉTHODES</span></h3>
      <div class="savoir-tags">
        ${(mod.savoir_faire_fr||[]).map(s => `<span class="savoir-tag">${s}</span>`).join('')}
      </div>
    </div>
  </div>

  ${relatedArticles(mod.articles_lies)}

  ${ctaSectionHTML('DEMANDER UN <span class="glitch">DEVIS</span>', 'Programme individuel ou groupe, intra-entreprise, sur site ou à distance.')}`;
}

/* ================================================================
   CONSULTING HUB
   ================================================================ */
function renderConsultingHub(app){
  const missionsHTML = CONSULTING.map((m,i) => `
    <a href="#/consulting/${m.slug}" class="consulting-card">
      <div class="mission-num">0${i+1}</div>
      <h3>${m.label_fr}</h3>
      <p>${m.pitch_fr.split('.')[0]}.</p>
    </a>`).join('');

  app.innerHTML = `
  <div class="hub-header sec sec-dark">
    <div class="container">
      <div class="breadcrumb"><a href="#/">Accueil</a><span class="sep">→</span><span class="current">Consulting</span></div>
      <span class="sec-label">Missions consulting</span>
      <h1>10 MISSIONS <span class="glitch">D'INTERVENTION</span></h1>
      <p style="margin-top:1rem;max-width:600px">Conseil interculturel, ingénierie pédagogique, intelligence économique, personal branding, campagne politique — des missions chirurgicales avec des livrables concrets.</p>
    </div>
  </div>
  <section class="sec">
    <div class="container">
      <div class="consulting-grid">${missionsHTML}</div>
    </div>
  </section>
  ${ctaSectionHTML('UNE MISSION EN <span class="glitch">TÊTE</span> ?', 'Prenez contact pour définir le périmètre, le déroulé et les livrables.')}`;
}

/* ================================================================
   CONSULTING MISSION
   ================================================================ */
function renderConsultingMission(app, slug){
  const mission = CONSULTING.find(m => m.slug === slug);
  if(!mission){ app.innerHTML = '<div class="not-found sec container"><h2>Mission introuvable</h2></div>'; return; }
  const idx = CONSULTING.indexOf(mission);

  app.innerHTML = `
  <div class="page-hero">
    <div class="container">
      <div class="breadcrumb">
        <a href="#/">Accueil</a><span class="sep">→</span>
        <a href="#/consulting">Consulting</a><span class="sep">→</span>
        <span class="current">${mission.label_fr}</span>
      </div>
      <div class="pill r" style="margin-bottom:1rem">Mission 0${idx+1}</div>
      <h1>${mission.label_fr.toUpperCase()}</h1>
    </div>
  </div>

  <div class="section-block">
    <div class="container">
      <span class="sec-label">Pitch</span>
      <p style="font-size:1.05rem;line-height:1.85;max-width:800px;color:var(--ink)">${mission.pitch_fr}</p>
    </div>
  </div>

  <div class="section-block sec-dark">
    <div class="container">
      <span class="sec-label">Périmètre d'intervention</span>
      <h3>CE QUE COUVRE LA MISSION</h3>
      <ul class="perimeter-list">
        ${(mission.perimetre_fr||[]).map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>
  </div>

  <div class="section-block">
    <div class="container">
      <span class="sec-label">Déroulé type</span>
      <h3>PHASES D'INTERVENTION</h3>
      <div class="deroulement">
        ${(mission.deroulement_fr||[]).map((step,i) => `
          <div class="deroulement-step">
            <span class="step-num">0${i+1}</span>
            <span class="step-label">${step}</span>
          </div>`).join('')}
      </div>
    </div>
  </div>

  <div class="section-block sec-dark">
    <div class="container">
      <span class="sec-label">Livrables</span>
      <h3>CE QUE VOUS RECEVEZ</h3>
      <p style="max-width:700px">${mission.livrables_fr}</p>
    </div>
  </div>

  ${relatedArticles(mission.articles_lies)}

  ${ctaSectionHTML('PRENDRE CONTACT POUR <span class="glitch">CETTE MISSION</span>', 'Définissons ensemble le périmètre, le calendrier et les livrables.')}`;
}

/* ================================================================
   BLOG LIST
   ================================================================ */
function renderBlog(app){
  const cats = ['langues','interculturel','ia','communication','veille','vision'];
  const filtersHTML = `<div class="blog-filters">
    <button class="filter-btn active" data-cat="">Tous</button>
    ${cats.map(c => `<button class="filter-btn" data-cat="${c}">${catLabel(c)}</button>`).join('')}
  </div>`;

  const sorted = [...BLOG].sort((a,b) => b.date.localeCompare(a.date));

  app.innerHTML = `
  <div class="hub-header sec sec-dark">
    <div class="container">
      <div class="breadcrumb"><a href="#/">Accueil</a><span class="sep">→</span><span class="current">Blog</span></div>
      <span class="sec-label">Articles & réflexions</span>
      <h1>LE <span class="glitch">BLOG</span></h1>
      <p style="margin-top:1rem;max-width:600px">Langues, interculturalité, IA, communication, veille des marchés, positionnement — des articles de terrain avec des prises de position.</p>
    </div>
  </div>
  <section class="sec">
    <div class="container">
      ${filtersHTML}
      <div class="blog-grid-full">
        ${sorted.map(a => blogCardHTML(a)).join('')}
      </div>
    </div>
  </section>`;
  initBlogFilters();
}

/* ================================================================
   BLOG ARTICLE
   ================================================================ */
function renderBlogArticle(app, slug){
  const art = BLOG.find(b => b.slug === slug);
  if(!art){ app.innerHTML = '<div class="not-found sec container"><h2>Article introuvable</h2></div>'; return; }

  const related = BLOG.filter(b => b.categorie === art.categorie && b.slug !== art.slug).slice(0,3);
  const content = (typeof BLOG_CONTENT !== 'undefined' && BLOG_CONTENT[art.slug])
    ? BLOG_CONTENT[art.slug]
    : `<p style="color:var(--ink3);font-style:italic;border-left:3px solid var(--border);padding-left:1rem">Cet article est en cours de rédaction. <a href="#/contact" style="color:var(--red)">Contactez-moi</a> pour être notifié.</p>`;

  const coverUrl = BLOG_PHOTOS[art.slug];
  app.innerHTML = `
  <div class="art-header">
    <div class="art-header-inner">
      <div class="breadcrumb">
        <a href="#/">Accueil</a><span class="sep">→</span>
        <a href="#/blog">Blog</a><span class="sep">→</span>
        <span class="current">${catLabel(art.categorie)}</span>
      </div>
      <div class="art-meta">
        <span class="art-cat-label">${catLabel(art.categorie)}</span>
        <span class="art-date">${art.date} · ${art.temps_lecture} min de lecture</span>
      </div>
      <h1 class="art-title">${art.titre.toUpperCase()}</h1>
      <p class="art-chapeau">${art.chapeau}</p>
      <div class="art-tags">${(art.tags||[]).map(t => `<span class="pill w">${t}</span>`).join('')}</div>
    </div>
  </div>

  ${coverUrl ? `<figure class="art-cover"><img src="${coverUrl}" alt="${art.titre}" loading="lazy"></figure>` : ''}

  <div class="art-body-wrap">
    <div class="art-body">${content}</div>
  </div>

  ${related.length ? `<section class="sec sec-dark">
    <div class="container">
      <span class="sec-label">Dans la même catégorie</span>
      <h3 style="margin-bottom:1.5rem">ARTICLES <span class="mk-r">SIMILAIRES</span></h3>
      <div class="related-grid">${related.map(a => blogCardHTML(a,true)).join('')}</div>
    </div>
  </section>` : ''}

  ${ctaSectionHTML('UNE QUESTION <span class="glitch">PRÉCISE</span> ?', 'Je réponds aux questions spécifiques. Prenez contact directement.')}`;
}

/* ================================================================
   CONTACT
   ================================================================ */
function renderContact(app){
  app.innerHTML = `
  <div class="hub-header sec sec-dark">
    <div class="container">
      <div class="breadcrumb"><a href="#/">Accueil</a><span class="sep">→</span><span class="current">Contact</span></div>
      <span class="sec-label" data-fr>Prenons contact</span>
      <span class="sec-label" data-en>Get in touch</span>
      <h1 data-fr>PARLONS <span class="glitch">RÉSULTATS</span></h1>
      <h1 data-en>LET'S TALK <span class="glitch">RESULTS</span></h1>
    </div>
  </div>
  <section class="sec">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-left">
          <span class="sec-label" data-fr>Pourquoi me contacter</span>
          <span class="sec-label" data-en>Why reach out</span>
          <h3 data-fr>UNE QUESTION,<br>UNE MISSION,<br>UN PROJET.</h3>
          <h3 data-en>A QUESTION,<br>A MISSION,<br>A PROJECT.</h3>
          <ul class="ci-list">
            <li data-fr>Demande de devis formation</li><li data-en>Training quote request</li>
            <li data-fr>Mission consulting</li><li data-en>Consulting mission</li>
            <li data-fr>Partenariat institutionnel</li><li data-en>Institutional partnership</li>
            <li data-fr>Prise de parole / intervention</li><li data-en>Speaking engagement</li>
            <li data-fr>Autre demande</li><li data-en>Other inquiry</li>
          </ul>
          <div style="margin-top:3rem">
            <p style="font-size:.85rem;color:var(--ink2);margin-bottom:.5rem" data-fr>Temps de réponse habituel : 24-48h</p>
            <p style="font-size:.85rem;color:var(--ink2)" data-en>Usual response time: 24-48h</p>
          </div>
        </div>
        <div class="contact-right">
          <form id="contact-form">
            <input type="hidden" name="access_key" value="VOTRE_CLE_WEB3FORMS">
            <input type="hidden" name="subject" value="Nouveau message — Marcus Detrez F&C">
            <input type="hidden" name="from_name" value="Site marcusdetrez.fr">
            <input type="checkbox" name="botcheck" style="display:none">
            <div class="form-row">
              <div class="fg"><label data-fr>Prénom *</label><label data-en>First name *</label><input type="text" name="prenom" required></div>
              <div class="fg"><label data-fr>Nom *</label><label data-en>Last name *</label><input type="text" name="nom" required></div>
            </div>
            <div class="fg"><label>Email *</label><input type="email" name="email" required></div>
            <div class="fg"><label data-fr>Organisation</label><label data-en>Organisation</label><input type="text" name="organisation"></div>
            <div class="fg">
              <label data-fr>Objet de la demande *</label>
              <label data-en>Subject *</label>
              <select name="objet" required>
                <option value="" data-fr>— Sélectionner —</option>
                <option value="" data-en>— Select —</option>
                <option value="Formation — devis" data-fr>Formation — devis</option>
                <option value="Training — quote" data-en>Training — quote</option>
                <option value="Mission consulting" data-fr>Mission consulting</option>
                <option value="Consulting mission" data-en>Consulting mission</option>
                <option value="Partenariat institutionnel" data-fr>Partenariat institutionnel</option>
                <option value="Institutional partnership" data-en>Institutional partnership</option>
                <option value="Autre" data-fr>Autre</option>
                <option value="Other" data-en>Other</option>
              </select>
            </div>
            <div class="fg">
              <label data-fr>Message *</label>
              <label data-en>Message *</label>
              <textarea name="message" required placeholder="Décrivez votre besoin, le contexte, les contraintes…"></textarea>
            </div>
            <button type="submit" id="contact-btn" class="btn-red" data-fr>Envoyer le message</button>
            <button type="submit" id="contact-btn" class="btn-red" data-en>Send message</button>
            <div id="contact-result" style="display:none;margin-top:1.5rem;padding:1rem 1.25rem;border-left:3px solid var(--red);font-size:.9rem"></div>
          </form>
        </div>
      </div>
    </div>
  </section>`;

  const form = document.getElementById('contact-form');
  const btn  = document.getElementById('contact-btn');
  const result = document.getElementById('contact-result');
  const lang = getLang();

  form.addEventListener('submit', async function(e){
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = lang === 'fr' ? 'Envoi en cours…' : 'Sending…';
    result.style.display = 'none';

    const data = new FormData(form);
    try {
      const res  = await fetch('https://api.web3forms.com/submit', { method:'POST', body:data });
      const json = await res.json();
      if(json.success){
        result.style.borderColor = '#22c55e';
        result.textContent = lang === 'fr'
          ? '✓ Message envoyé. Je vous réponds sous 24-48h.'
          : '✓ Message sent. I will get back to you within 24-48h.';
        result.style.display = 'block';
        form.reset();
        btn.disabled = false;
        btn.textContent = lang === 'fr' ? 'Envoyer le message' : 'Send message';
      } else {
        throw new Error(json.message || 'Error');
      }
    } catch(err){
      result.style.borderColor = 'var(--red)';
      result.textContent = lang === 'fr'
        ? '✗ Erreur d\'envoi. Réessayez ou écrivez directement à marcus.detrez@gmail.com'
        : '✗ Send error. Try again or email marcus.detrez@gmail.com directly.';
      result.style.display = 'block';
      btn.disabled = false;
      btn.textContent = lang === 'fr' ? 'Envoyer le message' : 'Send message';
    }
  });
}
