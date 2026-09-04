/* ================================================================
   MARCUS DETREZ F&C — v9 — app.js
   Router · Render functions · Helpers
   ================================================================ */

/* ——— BLOG PHOTOS ——— */
const BLOG_PHOTOS = {
  /* ANGLAIS */
  'reunions-anglais-erreurs-francophones':              'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1400&h=480&fit=crop&auto=format&q=80',
  'toeic-strategie-score-800':                          'https://images.unsplash.com/photo-1434030216411-0b5bd7fe9571?w=1400&h=480&fit=crop&auto=format&q=80',
  'negociation-anglais-face-natif':                     'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&h=480&fit=crop&auto=format&q=80',
  /* FRANÇAIS */
  'prise-de-parole-public-structure-francais':          'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1400&h=480&fit=crop&auto=format&q=80',
  'francais-affaires-formules-cles':                    'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1400&h=480&fit=crop&auto=format&q=80',
  'fle-entreprise-former-non-natifs':                   'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&h=480&fit=crop&auto=format&q=80',
  /* SUÉDOIS */
  'suedois-professionnel-investissement-linguistique':  'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1400&h=480&fit=crop&auto=format&q=80',
  'culture-affaires-suedoise-codes':                    'https://images.unsplash.com/photo-1488972685169-b0da9fc0efca?w=1400&h=480&fit=crop&auto=format&q=80',
  'suedois-vs-norvegien-affaires-choix':                'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1400&h=480&fit=crop&auto=format&q=80',
  /* NORVÉGIEN */
  'norvegien-affaires-secteur-maritime':                'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1400&h=480&fit=crop&auto=format&q=80',
  'norvegien-bokmal-nynorsk-lequel-choisir':            'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1400&h=480&fit=crop&auto=format&q=80',
  'norvege-suede-differences-culturelles-affaires':     'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1400&h=480&fit=crop&auto=format&q=80',
  /* MANDARIN */
  'caracteres-chinois-logique-apprentissage':           'https://images.unsplash.com/photo-1547981729-2c90dbba89cc?w=1400&h=480&fit=crop&auto=format&q=80',
  'hsk4-six-mois-methode':                              'https://images.unsplash.com/photo-1526978101819-b2d3b58c5b80?w=1400&h=480&fit=crop&auto=format&q=80',
  /* INTERCULTUREL */
  'business-chine-codes-culturels':                     'https://images.unsplash.com/photo-1508804185872-173bbde0322a?w=1400&h=480&fit=crop&auto=format&q=80',
  'management-interculturel-erreurs-managers-francais': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=480&fit=crop&auto=format&q=80',
  'intelligence-culturelle-dirigeants-internationaux':  'https://images.unsplash.com/photo-1521737604082-b45e0f3ea98c?w=1400&h=480&fit=crop&auto=format&q=80',
  'expansion-internationale-erreurs-culturelles':       'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1400&h=480&fit=crop&auto=format&q=80',
  /* IA */
  'ia-entreprise-ce-qui-change-vraiment':               'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1400&h=480&fit=crop&auto=format&q=80',
  'prompt-engineering-non-techniciens-guide':           'https://images.unsplash.com/photo-1555949963-ff9fe0c870cb?w=1400&h=480&fit=crop&auto=format&q=80',
  'transformation-digitale-pourquoi-echec':             'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&h=480&fit=crop&auto=format&q=80',
  /* COMMUNICATION */
  'prise-de-parole-secrets-meilleurs-orateurs':         'https://images.unsplash.com/photo-1540575467537-af730f0a22ef?w=1400&h=480&fit=crop&auto=format&q=80',
  'communication-crise-dix-premieres-heures':           'https://images.unsplash.com/photo-1585829365295-ab7a4443bf20?w=1400&h=480&fit=crop&auto=format&q=80',
  'techniques-vente-consultative-b2b':                  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&h=480&fit=crop&auto=format&q=80',
  /* VEILLE */
  'veille-strategique-systeme-30-minutes':              'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=480&fit=crop&auto=format&q=80',
  'guerre-economique-mecanismes-grandes-puissances':    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&h=480&fit=crop&auto=format&q=80',
  'analyse-concurrentielle-methode-48h':                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=480&fit=crop&auto=format&q=80',
  /* VISION */
  'strategie-langues-entreprise-enjeu-strategique':     'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&h=480&fit=crop&auto=format&q=80',
  'personal-branding-dirigeants-reputation-strategique':'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&h=480&fit=crop&auto=format&q=80',
  'ingenierie-pedagogique-formation-resultats':         'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400&h=480&fit=crop&auto=format&q=80',
};

/* ——— LANG ——— */
const LANGS = ['fr','en','zh','no','sv'];
function getLang(){
  const cls = document.body.className;
  return LANGS.includes(cls) ? cls : 'fr';
}
/* Returns obj[field_LANG] with fallback to obj[field_fr] */
function getL(obj, field){
  const lang = getLang();
  return obj[field+'_'+lang] || obj[field+'_fr'] || '';
}
function setLang(lang){
  if(!LANGS.includes(lang)) lang = 'fr';
  document.body.className = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.btn-lang').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  route();
}

/* ——— TRANSLATIONS ——— */
const T = {
  /* nav */
  'nav.home':       {fr:'Accueil',    en:'Home',       zh:'首页',     no:'Hjem',      sv:'Hem'},
  'nav.formation':  {fr:'Formations', en:'Training',   zh:'培训',     no:'Kurs',      sv:'Kurs'},
  'nav.consulting': {fr:'Consulting', en:'Consulting', zh:'咨询',     no:'Konsultering', sv:'Konsulttjänster'},
  'nav.blog':       {fr:'Blog',       en:'Blog',       zh:'博客',     no:'Blogg',     sv:'Blogg'},
  'nav.contact':    {fr:'Contact',    en:'Contact',    zh:'联系',     no:'Kontakt',   sv:'Kontakt'},
  /* buttons */
  'btn.contact':    {fr:'Prendre contact',      en:'Get in touch',       zh:'联系我们',   no:'Ta kontakt',             sv:'Ta kontakt'},
  'btn.manifeste':  {fr:'Lire le manifeste',    en:'Read the manifesto', zh:'阅读宣言',   no:'Les manifest',           sv:'Läs manifest'},
  'btn.formations': {fr:'Voir les formations',  en:'Browse training',    zh:'查看培训',   no:'Se alle kurs',           sv:'Se alla kurs'},
  'btn.all_articles':{fr:'Tous les articles →', en:'All articles →',    zh:'所有文章 →', no:'Alle artikler →',        sv:'Alla artiklar →'},
  /* breadcrumbs */
  'bc.home':       {fr:'Accueil',    en:'Home',         zh:'首页',   no:'Hjem',       sv:'Hem'},
  'bc.formations': {fr:'Formations', en:'Training',     zh:'培训',   no:'Kurs',       sv:'Kurs'},
  'bc.consulting': {fr:'Consulting', en:'Consulting',   zh:'咨询',   no:'Konsultering', sv:'Konsulttjänster'},
  'bc.blog':       {fr:'Blog',       en:'Blog',         zh:'博客',   no:'Blogg',      sv:'Blogg'},
  /* section labels */
  'lbl.expertise':  {fr:'Domaines d\'expertise',      en:'Areas of expertise',        zh:'专业领域',     no:'Kompetanseområder',         sv:'Kompetensområden'},
  'lbl.about':      {fr:'À propos',                   en:'About',                     zh:'关于',         no:'Om',                        sv:'Om'},
  'lbl.method':     {fr:'Méthode propriétaire — 5 piliers', en:'Proprietary method — 5 pillars', zh:'专有方法 — 5大支柱', no:'Proprietær metode — 5 pilarer', sv:'Proprietär metod — 5 pelare'},
  'lbl.certs':      {fr:'Qualifications & certifications', en:'Qualifications & certifications', zh:'资质与认证', no:'Kvalifikasjoner og sertifikater', sv:'Kvalifikationer och certifikat'},
  'certs.intro':   {fr:'Chaque diplôme et chaque certification ci-dessous est téléchargeable en PDF — pièce justificative à l\'appui.', en:'Every degree and certificate below is downloadable as a PDF — supporting document included.', zh:'以下每一份学历与证书均可下载 PDF 原件。', no:'Hvert vitnemål og sertifikat nedenfor kan lastes ned som PDF — med dokumentasjon.', sv:'Varje examen och certifikat nedan kan laddas ner som PDF — med underlag.'},
  'certs.dl':      {fr:'Télécharger le PDF',   en:'Download PDF',      zh:'下载 PDF',   no:'Last ned PDF',   sv:'Ladda ner PDF'},
  'certs.cv':      {fr:'Télécharger mon CV',   en:'Download my CV',    zh:'下载我的简历', no:'Last ned CV-en min', sv:'Ladda ner mitt CV'},
  'certs.cv_sub':  {fr:'PDF · parcours complet, références et missions', en:'PDF · full track record, references and assignments', zh:'PDF · 完整履历、推荐与项目', no:'PDF · fullstendig bakgrunn, referanser og oppdrag', sv:'PDF · fullständig bakgrund, referenser och uppdrag'},
  'lbl.partners':   {fr:'Partenaires institutionnels', en:'Institutional partners',   zh:'合作院校',     no:'Institusjonelle partnere',  sv:'Institutionella partners'},
  'lbl.reviews':    {fr:'Ce qu\'ils en disent',        en:'What they say',             zh:'他们的评价',   no:'Hva de sier',               sv:'Vad de säger'},
  'lbl.blog':       {fr:'Articles & réflexions',       en:'Articles & insights',       zh:'文章与思考',   no:'Artikler og refleksjoner',  sv:'Artiklar och reflektioner'},
  'lbl.pro_training':{fr:'Formations professionnelles', en:'Professional training',   zh:'专业培训',     no:'Faglig opplæring',          sv:'Professionell utbildning'},
  'lbl.consulting_missions':{fr:'Missions consulting', en:'Consulting missions',       zh:'咨询任务',     no:'Konsulentoppdrag',          sv:'Konsultuppdrag'},
  'lbl.position':   {fr:'Positionnement',              en:'Position',                  zh:'我的定位',     no:'Posisjonering',             sv:'Positionering'},
  'lbl.pitch':      {fr:'Pitch',                       en:'Pitch',                     zh:'简介',         no:'Beskrivelse',               sv:'Beskrivning'},
  'lbl.scope':      {fr:'Périmètre d\'intervention',   en:'Scope of work',             zh:'工作范围',     no:'Arbeidsomfang',             sv:'Uppdragets omfång'},
  'lbl.phases':     {fr:'Déroulé type',                en:'Typical phases',            zh:'典型阶段',     no:'Typiske faser',             sv:'Typiska faser'},
  'lbl.deliverables':{fr:'Livrables',                  en:'Deliverables',              zh:'交付成果',     no:'Leveranser',                sv:'Leveranser'},
  'lbl.content':    {fr:'Contenu',                     en:'Content',                   zh:'内容',         no:'Innhold',                   sv:'Innehåll'},
  'lbl.terrain':    {fr:'Expériences terrain',         en:'Field experience',          zh:'实地经验',     no:'Felterfaring',              sv:'Fälterfarenhet'},
  'lbl.methods':    {fr:'Approches mobilisées',        en:'Methods deployed',          zh:'使用的方法',   no:'Metoder som brukes',        sv:'Metoder som används'},
  'lbl.pour_qui':   {fr:'À qui s\'adresse cette formation', en:'Who is this training for', zh:'培训对象', no:'Hvem er dette for',        sv:'Vem är detta för'},
  'lbl.deroulement':{fr:'Déroulé détaillé',            en:'Detailed breakdown',        zh:'详细安排',     no:'Detaljert program',         sv:'Detaljerat program'},
  'lbl.exercices':  {fr:'Méthodes & exercices',        en:'Methods & exercises',       zh:'方法与练习',   no:'Metoder og øvelser',        sv:'Metoder och övningar'},
  'lbl.resultats':  {fr:'Résultats concrets',          en:'Concrete outcomes',         zh:'具体成果',     no:'Konkrete resultater',       sv:'Konkreta resultat'},
  'lbl.related':    {fr:'Articles liés',               en:'Related articles',          zh:'相关文章',     no:'Relaterte artikler',        sv:'Relaterade artiklar'},
  'lbl.similar_cat':{fr:'Dans la même catégorie',      en:'In the same category',      zh:'同类文章',     no:'I samme kategori',          sv:'I samma kategori'},
  'lbl.blog_nav':   {fr:'Articles & réflexions',       en:'Articles & insights',       zh:'文章与思考',   no:'Artikler og refleksjoner',  sv:'Artiklar och reflektioner'},
  'lbl.get_in_touch':{fr:'Prenons contact',            en:'Get in touch',              zh:'联系我们',     no:'Ta kontakt',                sv:'Ta kontakt'},
  /* section titles */
  'h2.expertise':   {fr:'5 VOLETS D\'<span class="mk-r">INTERVENTION</span>', en:'5 AREAS OF <span class="mk-r">EXPERTISE</span>', zh:'5个<span class="mk-r">专业领域</span>', no:'5 <span class="mk-r">KOMPETANSEOMRÅDER</span>', sv:'5 <span class="mk-r">KOMPETENSOMRÅDEN</span>'},
  'h2.about':       {fr:'FORMATEUR <span class="mk-r">ET OPÉRATEUR</span>', en:'TRAINER <span class="mk-r">AND OPERATOR</span>', zh:'培训师<span class="mk-r">与实操者</span>', no:'TRENER <span class="mk-r">OG OPERATØR</span>', sv:'TRÄNARE <span class="mk-r">OCH OPERATÖR</span>'},
  'h2.certs':       {fr:'MES <span class="mk-r">CERTIFICATIONS</span>', en:'MY <span class="mk-r">CERTIFICATIONS</span>', zh:'我的<span class="mk-r">认证</span>', no:'MINE <span class="mk-r">SERTIFIKATER</span>', sv:'MINA <span class="mk-r">CERTIFIKAT</span>'},
  'h2.partners':    {fr:'ÉCOLES & <span class="mk-r">ÉTABLISSEMENTS</span>', en:'SCHOOLS & <span class="mk-r">INSTITUTIONS</span>', zh:'合作<span class="mk-r">院校</span>', no:'SKOLER & <span class="mk-r">INSTITUSJONER</span>', sv:'SKOLOR & <span class="mk-r">INSTITUTIONER</span>'},
  'h2.reviews':     {fr:'AVIS & <span class="mk-r">TÉMOIGNAGES</span>', en:'REVIEWS & <span class="mk-r">TESTIMONIALS</span>', zh:'评价与<span class="mk-r">见证</span>', no:'ANMELDELSER & <span class="mk-r">ATTESTER</span>', sv:'RECENSIONER & <span class="mk-r">VITTNESMÅL</span>'},
  'h2.blog':        {fr:'ACTUALITÉS & <span class="mk-r">RÉFLEXIONS</span>', en:'NEWS & <span class="mk-r">INSIGHTS</span>', zh:'文章与<span class="mk-r">思考</span>', no:'AKTUALITETER & <span class="mk-r">REFLEKSJONER</span>', sv:'NYHETER & <span class="mk-r">REFLEKTIONER</span>'},
  'h2.formations_hub':{fr:'5 VOLETS <span class="glitch">D\'INTERVENTION</span>', en:'5 AREAS OF <span class="glitch">EXPERTISE</span>', zh:'5个<span class="glitch">专业领域</span>', no:'5 <span class="glitch">KOMPETANSEOMRÅDER</span>', sv:'5 <span class="glitch">KOMPETENSOMRÅDEN</span>'},
  'h2.consulting_hub':{fr:'10 MISSIONS <span class="glitch">D\'INTERVENTION</span>', en:'10 <span class="glitch">CONSULTING MISSIONS</span>', zh:'10个<span class="glitch">咨询任务</span>', no:'10 <span class="glitch">KONSULENTOPPDRAG</span>', sv:'10 <span class="glitch">KONSULTUPPDRAG</span>'},
  'h2.blog_hub':    {fr:'LE <span class="glitch">BLOG</span>', en:'THE <span class="glitch">BLOG</span>', zh:'<span class="glitch">博客</span>', no:'<span class="glitch">BLOGGEN</span>', sv:'<span class="glitch">BLOGGEN</span>'},
  'h3.pour_qui':    {fr:'POUR <span class="mk-r">QUI</span> ?', en:'FOR <span class="mk-r">WHOM</span>?', zh:'适合<span class="mk-r">谁</span>？', no:'FOR <span class="mk-r">HVEM</span>?', sv:'FÖR <span class="mk-r">VEM</span>?'},
  'h3.deroulement': {fr:'CE QUI SE PASSE <span class="mk-r">CONCRÈTEMENT</span>', en:'WHAT HAPPENS <span class="mk-r">IN PRACTICE</span>', zh:'实际<span class="mk-r">内容</span>', no:'HVA SOM SKJER <span class="mk-r">I PRAKSIS</span>', sv:'VAD SOM HÄNDER <span class="mk-r">I PRAKTIKEN</span>'},
  'h3.exercices':   {fr:'CE QUE VOUS <span class="mk-r">PRATIQUEZ</span>', en:'WHAT YOU <span class="mk-r">PRACTISE</span>', zh:'你将<span class="mk-r">练习</span>什么', no:'HVA DU <span class="mk-r">ØVER PÅ</span>', sv:'VAD DU <span class="mk-r">TRÄNAR PÅ</span>'},
  'h3.resultats':   {fr:'CE QUE VOUS <span class="mk-r">REPARTEZ</span>', en:'WHAT YOU <span class="mk-r">TAKE AWAY</span>', zh:'你将<span class="mk-r">收获</span>什么', no:'HVA DU <span class="mk-r">TAR MED DEG</span>', sv:'VAD DU <span class="mk-r">TAR MED DIG</span>'},
  'h3.programme':   {fr:'LE <span class="mk-r">PROGRAMME</span>', en:'THE <span class="mk-r">PROGRAMME</span>', zh:'<span class="mk-r">课程</span>内容', no:'<span class="mk-r">PROGRAMMET</span>', sv:'<span class="mk-r">PROGRAMMET</span>'},
  'h3.references':  {fr:'RÉFÉRENCES <span class="mk-r">MARCUS</span>', en:'MARCUS\'S <span class="mk-r">REFERENCES</span>', zh:'马库斯的<span class="mk-r">经历</span>', no:'MARCUS SINE <span class="mk-r">REFERANSER</span>', sv:'MARCUS <span class="mk-r">REFERENSER</span>'},
  'h3.savoir_faire':{fr:'SAVOIR-FAIRE <span class="mk-r">& MÉTHODES</span>', en:'EXPERTISE <span class="mk-r">& METHODS</span>', zh:'技能与<span class="mk-r">方法</span>', no:'FAGKUNNSKAP <span class="mk-r">OG METODER</span>', sv:'KOMPETENS <span class="mk-r">OCH METODER</span>'},
  'h3.scope':       {fr:'CE QUE COUVRE LA MISSION', en:'WHAT THE MISSION COVERS', zh:'任务涵盖的内容', no:'HVA OPPDRAGET DEKKER', sv:'VAD UPPDRAGET TÄCKER'},
  'h3.phases':      {fr:'PHASES D\'INTERVENTION', en:'INTERVENTION PHASES', zh:'介入阶段', no:'INTERVENSJONSFASER', sv:'INTERVENTIONSFASER'},
  'h3.deliverables':{fr:'CE QUE VOUS RECEVEZ', en:'WHAT YOU RECEIVE', zh:'您将收到什么', no:'HVA DU MOTTAR', sv:'VAD DU FÅR'},
  'h3.similar':     {fr:'ARTICLES <span class="mk-r">SIMILAIRES</span>', en:'SIMILAR <span class="mk-r">ARTICLES</span>', zh:'相关<span class="mk-r">文章</span>', no:'LIGNENDE <span class="mk-r">ARTIKLER</span>', sv:'LIKNANDE <span class="mk-r">ARTIKLAR</span>'},
  /* contact */
  'contact.h1':     {fr:'PARLONS <span class="glitch">RÉSULTATS</span>', en:'LET\'S TALK <span class="glitch">RESULTS</span>', zh:'谈谈<span class="glitch">成果</span>', no:'LA OSS SNAKKE <span class="glitch">RESULTATER</span>', sv:'LÅT OSS PRATA <span class="glitch">RESULTAT</span>'},
  'contact.why':    {fr:'Pourquoi me contacter', en:'Why reach out', zh:'为什么联系我', no:'Hvorfor ta kontakt', sv:'Varför kontakta mig'},
  'contact.h3':     {fr:'UNE QUESTION,<br>UNE MISSION,<br>UN PROJET.', en:'A QUESTION,<br>A MISSION,<br>A PROJECT.', zh:'一个问题，<br>一个任务，<br>一个项目。', no:'ET SPØRSMÅL,<br>ET OPPDRAG,<br>ET PROSJEKT.', sv:'EN FRÅGA,<br>ETT UPPDRAG,<br>ETT PROJEKT.'},
  'contact.li1':    {fr:'Demande de devis formation', en:'Training quote request', zh:'申请培训报价', no:'Forespørsel om opplæringstilbud', sv:'Begäran om utbildningsoffert'},
  'contact.li2':    {fr:'Mission consulting', en:'Consulting mission', zh:'咨询任务', no:'Konsulentoppdrag', sv:'Konsultuppdrag'},
  'contact.li3':    {fr:'Partenariat institutionnel', en:'Institutional partnership', zh:'机构合作', no:'Institusjonelt partnerskap', sv:'Institutionellt partnerskap'},
  'contact.li4':    {fr:'Prise de parole / intervention', en:'Speaking engagement', zh:'演讲/发言', no:'Foredrag/innlegg', sv:'Föredrag/inlägg'},
  'contact.li5':    {fr:'Autre demande', en:'Other inquiry', zh:'其他咨询', no:'Annen forespørsel', sv:'Annan förfrågan'},
  'contact.delay':  {fr:'Temps de réponse habituel : 24-48h', en:'Usual response time: 24-48h', zh:'通常回复时间：24-48小时', no:'Vanlig svartid: 24-48t', sv:'Vanlig svarstid: 24-48h'},
  'contact.first':  {fr:'Prénom *', en:'First name *', zh:'名 *', no:'Fornavn *', sv:'Förnamn *'},
  'contact.last':   {fr:'Nom *', en:'Last name *', zh:'姓 *', no:'Etternavn *', sv:'Efternamn *'},
  'contact.org':    {fr:'Organisation', en:'Organisation', zh:'机构', no:'Organisasjon', sv:'Organisation'},
  'contact.subject':{fr:'Objet de la demande *', en:'Subject *', zh:'咨询主题 *', no:'Emne *', sv:'Ämne *'},
  'contact.msg':    {fr:'Message *', en:'Message *', zh:'留言 *', no:'Melding *', sv:'Meddelande *'},
  'contact.placeholder':{fr:'Décrivez votre besoin, le contexte, les contraintes…', en:'Describe your need, context, constraints…', zh:'请描述您的需求、背景和限制条件……', no:'Beskriv behovet ditt, konteksten, begrensningene…', sv:'Beskriv ditt behov, kontexten, begränsningarna…'},
  'contact.select': {fr:'— Sélectionner —', en:'— Select —', zh:'— 请选择 —', no:'— Velg —', sv:'— Välj —'},
  'contact.opt1':   {fr:'Formation — devis', en:'Training — quote', zh:'培训 — 报价', no:'Opplæring — tilbud', sv:'Utbildning — offert'},
  'contact.opt2':   {fr:'Mission consulting', en:'Consulting mission', zh:'咨询任务', no:'Konsulentoppdrag', sv:'Konsultuppdrag'},
  'contact.opt3':   {fr:'Partenariat institutionnel', en:'Institutional partnership', zh:'机构合作', no:'Institusjonelt partnerskap', sv:'Institutionellt partnerskap'},
  'contact.opt4':   {fr:'Autre', en:'Other', zh:'其他', no:'Annet', sv:'Annat'},
  'contact.send':   {fr:'Envoyer le message', en:'Send message', zh:'发送消息', no:'Send melding', sv:'Skicka meddelande'},
  'contact.sending':{fr:'Envoi en cours…', en:'Sending…', zh:'发送中……', no:'Sender…', sv:'Skickar…'},
  'contact.ok':     {fr:'✓ Message envoyé. Je vous réponds sous 24-48h.', en:'✓ Message sent. I will get back to you within 24-48h.', zh:'✓ 消息已发送。我将在24-48小时内回复您。', no:'✓ Melding sendt. Jeg svarer deg innen 24-48t.', sv:'✓ Meddelande skickat. Jag återkommer inom 24-48h.'},
  'contact.err':    {fr:'✗ Erreur d\'envoi. Réessayez ou écrivez directement à marcus.detrez@gmail.com', en:'✗ Send error. Try again or email marcus.detrez@gmail.com directly.', zh:'✗ 发送失败。请重试或直接发邮件至 marcus.detrez@gmail.com', no:'✗ Sendefeil. Prøv igjen eller skriv direkte til marcus.detrez@gmail.com', sv:'✗ Sändningsfel. Försök igen eller mejla direkt till marcus.detrez@gmail.com'},
  /* blog */
  'blog.min_read':  {fr:'min', en:'min', zh:'分钟', no:'min', sv:'min'},
  'blog.all':       {fr:'Tous', en:'All', zh:'全部', no:'Alle', sv:'Alla'},
  'blog.writing':   {fr:'Cet article est en cours de rédaction. <a href="#/contact" style="color:var(--red)">Contactez-moi</a> pour être notifié.', en:'This article is being written. <a href="#/contact" style="color:var(--red)">Contact me</a> to be notified.', zh:'本文正在撰写中。<a href="#/contact" style="color:var(--red)">联系我</a>以获取通知。', no:'Denne artikkelen skrives. <a href="#/contact" style="color:var(--red)">Kontakt meg</a> for å bli varslet.', sv:'Denna artikel skrivs. <a href="#/contact" style="color:var(--red)">Kontakta mig</a> för att bli notifierad.'},
  'blog.not_found': {fr:'Article introuvable', en:'Article not found', zh:'文章未找到', no:'Artikkelen finnes ikke', sv:'Artikeln hittades inte'},
  /* cat labels */
  'cat.langues':      {fr:'Langues',       en:'Languages',   zh:'语言',   no:'Språk',     sv:'Språk'},
  'cat.interculturel':{fr:'Interculturel', en:'Intercultural', zh:'跨文化', no:'Interkulturell', sv:'Interkulturell'},
  'cat.ia':           {fr:'IA & Tech',     en:'AI & Tech',   zh:'人工智能与科技', no:'KI & Tech', sv:'AI & Tech'},
  'cat.communication':{fr:'Communication', en:'Communication', zh:'沟通',  no:'Kommunikasjon', sv:'Kommunikation'},
  'cat.veille':       {fr:'Veille',        en:'Intelligence', zh:'市场情报', no:'Etterretning', sv:'Omvärldsbevakning'},
  'cat.vision':       {fr:'Vision',        en:'Vision',      zh:'愿景',   no:'Visjon',    sv:'Vision'},
  /* home pills */
  'pill.trainer':   {fr:'Formateur',    en:'Trainer',       zh:'培训师',   no:'Trener',      sv:'Tränare'},
  'pill.pro_lang':  {fr:'Langues pro',  en:'Pro languages', zh:'专业语言', no:'Fagspråk',    sv:'Fackspråk'},
  'pill.intercult': {fr:'Interculturel',en:'Intercultural', zh:'跨文化',   no:'Interkulturell', sv:'Interkulturell'},
  /* misc */
  '404.text':       {fr:'Page introuvable.', en:'Page not found.', zh:'页面未找到。', no:'Siden finnes ikke.', sv:'Sidan hittades inte.'},
  '404.back':       {fr:'← Accueil', en:'← Home', zh:'← 首页', no:'← Hjem', sv:'← Hem'},
  'not_found.volet':{fr:'Volet introuvable', en:'Section not found', zh:'模块未找到', no:'Delen finnes ikke', sv:'Avsnittet hittades inte'},
  'not_found.module':{fr:'Page introuvable', en:'Page not found', zh:'页面未找到', no:'Siden finnes ikke', sv:'Sidan hittades inte'},
  'not_found.mission':{fr:'Mission introuvable', en:'Mission not found', zh:'任务未找到', no:'Oppdraget finnes ikke', sv:'Uppdraget hittades inte'},
  /* pedagogy */
  'ped.taught':     {fr:'Enseignées :', en:'Taught:', zh:'教授：', no:'Undervises:', sv:'Undervisas:'},
  'ped.spoken':     {fr:'Parlées :', en:'Also spoken:', zh:'亦通：', no:'Snakkes også:', sv:'Talas också:'},
  /* blog description */
  'blog.hub_desc':  {fr:'Langues, interculturalité, IA, communication, veille des marchés, positionnement — des articles de terrain avec des prises de position.', en:'Languages, interculturality, AI, communication, market intelligence, positioning — field articles with clear standpoints.', zh:'语言、跨文化、人工智能、沟通、市场情报、定位——来自实地的观点文章。', no:'Språk, interkulturalitet, KI, kommunikasjon, markedsovervåking, posisjonering — feltartikler med klare standpunkter.', sv:'Språk, interkulturalitet, AI, kommunikation, omvärldsbevakning, positionering — fältartiklar med tydliga ståndpunkter.'},
  /* consulting hub desc */
  'consulting.desc':{fr:'Conseil interculturel, ingénierie pédagogique, intelligence économique, personal branding, campagne politique — des missions chirurgicales avec des livrables concrets.', en:'Intercultural consulting, pedagogical engineering, economic intelligence, personal branding, political campaign — surgical mandates with concrete deliverables.', zh:'跨文化咨询、教学工程、经济情报、个人品牌、政治活动——精准执行的任务，有具体交付成果。', no:'Interkulturelt rådgivning, pedagogisk engineering, etterretning, personal branding, politisk kampanje — kirurgiske oppdrag med konkrete leveranser.', sv:'Interkulturell rådgivning, pedagogisk ingenjörskonst, ekonomisk underrättelse, personal branding, politisk kampanj — kirurgiska uppdrag med konkreta leveranser.'},
  /* formation hub desc */
  'formation.desc': {fr:'Langues, interculturalité, IA, communication, veille des marchés — 20+ modules de formation sur-mesure ou en programme.', en:'Languages, interculturality, AI, communication, market intelligence — 20+ tailored or programmed training modules.', zh:'语言、跨文化、人工智能、沟通、市场情报——20多个量身定制的培训模块。', no:'Språk, interkulturalitet, KI, kommunikasjon, markedsovervåking — 20+ skreddersydde opplæringsmoduler.', sv:'Språk, interkulturalitet, AI, kommunikation, omvärldsbevakning — 20+ skräddarsydda utbildningsmoduler.'},
  /* CTA sections */
  'cta.home.title':  {fr:'TRAVAILLONS <span class="glitch">ENSEMBLE</span>', en:'LET\'S WORK <span class="glitch">TOGETHER</span>', zh:'携手<span class="glitch">合作</span>', no:'LA OSS JOBBE <span class="glitch">SAMMEN</span>', sv:'LÅT OSS ARBETA <span class="glitch">TILLSAMMANS</span>'},
  'cta.home.sub':    {fr:'Formations, consulting, missions courtes ou longues — prenez contact pour définir ce dont vous avez besoin.', en:'Training, consulting, short or long mandates — get in touch to define what you need.', zh:'培训、咨询、长短期合作——联系我们，明确您的需求。', no:'Opplæring, konsultering, korte eller lange oppdrag — ta kontakt for å definere hva du trenger.', sv:'Utbildning, konsulttjänster, korta eller långa uppdrag — ta kontakt för att definiera dina behov.'},
  'cta.formation.title':{fr:'BESOIN D\'UNE <span class="glitch">FORMATION</span> ?', en:'NEED <span class="glitch">TRAINING</span>?', zh:'需要<span class="glitch">培训</span>吗？', no:'TRENGER DU <span class="glitch">OPPLÆRING</span>?', sv:'BEHÖVER DU <span class="glitch">UTBILDNING</span>?'},
  'cta.formation.sub':{fr:'Chaque programme est conçu sur-mesure. Prenez contact pour définir vos besoins.', en:'Every programme is tailored. Get in touch to define your needs.', zh:'每个项目都量身定制。联系我们，明确您的需求。', no:'Hvert program er skreddersydd. Ta kontakt for å definere behovene dine.', sv:'Varje program är skräddarsytt. Ta kontakt för att definiera dina behov.'},
  'cta.programme.title':{fr:'CONSTRUISONS VOTRE <span class="glitch">PROGRAMME</span>', en:'LET\'S BUILD YOUR <span class="glitch">PROGRAMME</span>', zh:'打造您的<span class="glitch">专属课程</span>', no:'LA OSS BYGGE DITT <span class="glitch">PROGRAM</span>', sv:'LÅT OSS BYGGA DITT <span class="glitch">PROGRAM</span>'},
  'cta.programme.sub':{fr:'Chaque module est adaptable à votre contexte, vos objectifs, votre secteur.', en:'Every module is adaptable to your context, objectives and sector.', zh:'每个模块可根据您的背景、目标和行业进行调整。', no:'Hvert modul er tilpasningsdyktig til din kontekst, dine mål og din sektor.', sv:'Varje modul är anpassningsbar till din kontext, dina mål och din sektor.'},
  'cta.mission.title':{fr:'UNE MISSION EN <span class="glitch">TÊTE</span> ?', en:'GOT A <span class="glitch">MISSION</span> IN MIND?', zh:'有特定<span class="glitch">任务</span>想探讨？', no:'HAR DU ET <span class="glitch">OPPDRAG</span> I TANKENE?', sv:'HAR DU ETT <span class="glitch">UPPDRAG</span>?'},
  'cta.mission.sub':  {fr:'Prenez contact pour définir le périmètre, le déroulé et les livrables.', en:'Get in touch to define scope, process and deliverables.', zh:'联系我们以确定范围、流程和交付成果。', no:'Ta kontakt for å definere omfang, forløp og leveranser.', sv:'Ta kontakt för att definiera omfång, process och leveranser.'},
  'cta.this_mission.title':{fr:'PRENDRE CONTACT POUR <span class="glitch">CETTE MISSION</span>', en:'GET IN TOUCH ABOUT <span class="glitch">THIS MISSION</span>', zh:'关于此任务<span class="glitch">联系我们</span>', no:'TA KONTAKT OM <span class="glitch">DETTE OPPDRAGET</span>', sv:'KONTAKTA OSS OM <span class="glitch">DETTA UPPDRAG</span>'},
  'cta.this_mission.sub':{fr:'Définissons ensemble le périmètre, le calendrier et les livrables.', en:'Let\'s define scope, timeline and deliverables together.', zh:'让我们共同确定范围、时间表和交付成果。', no:'La oss definere omfang, tidsplan og leveranser sammen.', sv:'Låt oss definiera omfång, tidsplan och leveranser tillsammans.'},
  'cta.devis.title':  {fr:'DEMANDER UN <span class="glitch">DEVIS</span>', en:'REQUEST A <span class="glitch">QUOTE</span>', zh:'申请<span class="glitch">报价</span>', no:'BE OM ET <span class="glitch">TILBUD</span>', sv:'BEGÄR EN <span class="glitch">OFFERT</span>'},
  'cta.devis.sub':    {fr:'Programme individuel ou groupe, intra-entreprise, sur site ou à distance.', en:'Individual or group programme, in-company, on-site or remote.', zh:'个人或团体课程，企业内训，现场或远程。', no:'Individuelt eller gruppeprogram, bedriftsinternt, på stedet eller eksternt.', sv:'Individuellt eller grupprogram, företagsinternt, på plats eller på distans.'},
  'cta.question.title':{fr:'UNE QUESTION <span class="glitch">PRÉCISE</span> ?', en:'A SPECIFIC <span class="glitch">QUESTION</span>?', zh:'有具体<span class="glitch">问题</span>？', no:'ET SPESIFIKT <span class="glitch">SPØRSMÅL</span>?', sv:'EN SPECIFIK <span class="glitch">FRÅGA</span>?'},
  'cta.question.sub': {fr:'Je réponds aux questions spécifiques. Prenez contact directement.', en:'I answer specific questions. Get in touch directly.', zh:'我回答具体问题。请直接联系我。', no:'Jeg svarer på spesifikke spørsmål. Ta kontakt direkte.', sv:'Jag svarar på specifika frågor. Ta kontakt direkt.'},
};
function t(key){ const lang=getLang(); return (T[key]&&(T[key][lang]||T[key].fr))||key; }

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

  app.innerHTML = `<div class="not-found sec"><div class="container"><h1>404</h1><p>${t('404.text')}</p><a href="#/" class="btn-ghost" style="margin-top:2rem">${t('404.back')}</a></div></div>`;
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'fr';
  const lang = LANGS.includes(saved) ? saved : 'fr';
  document.body.className = lang;
  document.querySelectorAll('.btn-lang').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
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
  const key = 'cat.'+c;
  return T[key] ? t(key) : c;
}

function relatedArticles(slugs){
  if(!slugs || !slugs.length) return '';
  const arts = slugs.map(s => BLOG.find(b => b.slug === s)).filter(Boolean);
  if(!arts.length) return '';
  return `<div class="section-block">
    <div class="container">
      <span class="sec-label">${t('lbl.related')}</span>
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

/* titleKey/subKey are T keys; or pass a raw string as fallback */
function ctaSectionHTML(titleKey, subKey){
  const title = T[titleKey] ? t(titleKey) : titleKey;
  const sub   = T[subKey]   ? t(subKey)   : subKey;
  return `<div class="cta-section">
    <div class="container">
      <h2>${title}</h2>
      <p>${sub}</p>
      <div class="cta-btns">
        <a href="#/contact" class="btn-red">${t('btn.contact')}</a>
        <a href="#/manifeste" class="btn-ghost">${t('btn.manifeste')}</a>
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
        <span class="pill r" data-fr>Formateur</span><span class="pill r" data-en>Trainer</span><span class="pill r" data-zh>培训师</span><span class="pill r" data-no>Trener</span><span class="pill r" data-sv>Tränare</span>
        <span class="pill r">Consultant</span>
        <span class="pill w" data-fr>Langues pro</span><span class="pill w" data-en>Pro languages</span><span class="pill w" data-zh>专业语言</span><span class="pill w" data-no>Fagspråk</span><span class="pill w" data-sv>Fackspråk</span>
        <span class="pill w" data-fr>Interculturel</span><span class="pill w" data-en>Intercultural</span><span class="pill w" data-zh>跨文化</span><span class="pill w" data-no>Interkulturell</span><span class="pill w" data-sv>Interkulturell</span>
      </div>
      <h1>
        <span data-fr>MON EXPÉRIENCE.<br>MON SAVOIR.<br>MON <span class="glitch">ARSENAL</span>.<br>À VOTRE SERVICE.</span>
        <span data-en>MY EXPERIENCE.<br>MY KNOWLEDGE.<br>MY <span class="glitch">ARSENAL</span>.<br>AT YOUR SERVICE.</span>
        <span data-zh>我的经验。<br>我的知识。<br>我的<span class="glitch">实力</span>。<br>为您服务。</span>
        <span data-no>MIN ERFARING.<br>MIN KUNNSKAP.<br>MITT <span class="glitch">ARSENAL</span>.<br>TIL DIN TJENESTE.</span>
        <span data-sv>MIN ERFARENHET.<br>MIN KUNSKAP.<br>MITT <span class="glitch">ARSENAL</span>.<br>TILL DIN TJÄNST.</span>
      </h1>
      <p class="hero-sub">
        <span data-fr>Formateur et consultant indépendant — langues étrangères professionnelles, management interculturel et conseil à l'internationalisation. 3 500+ apprenants formés dans les meilleures écoles françaises depuis 2016.</span>
        <span data-en>Independent trainer and consultant — professional foreign languages, intercultural management and internationalisation advisory. 3,500+ learners trained across France's top schools since 2016.</span>
        <span data-zh>独立培训师与顾问——职业外语、跨文化管理与国际化咨询。自2016年以来，已在法国顶尖学府培训3500+名学员。</span>
        <span data-no>Uavhengig trener og konsulent — profesjonelle fremmedspråk, interkulturell ledelse og internasjonaliseringsrådgivning. 3 500+ lærende trent ved Frankrikes beste skoler siden 2016.</span>
        <span data-sv>Oberoende tränare och konsult — professionella främmande språk, interkulturell ledning och internationaliseringsrådgivning. 3 500+ deltagare utbildade vid Frankrikes ledande skolor sedan 2016.</span>
      </p>
      <div class="hero-ctas">
        <a href="#/formation" class="btn-fill" data-fr>Voir les formations</a>
        <a href="#/formation" class="btn-fill" data-en>Browse training</a>
        <a href="#/formation" class="btn-fill" data-zh>查看培训</a>
        <a href="#/formation" class="btn-fill" data-no>Se kurs</a>
        <a href="#/formation" class="btn-fill" data-sv>Se kurs</a>
        <a href="#/contact" class="btn-ghost">Contact</a>
      </div>
      <div class="hero-stats">
        <div><span class="stat-n">3500+</span><span class="stat-l" data-fr>apprenants</span><span class="stat-l" data-en>learners</span><span class="stat-l" data-zh>学员</span><span class="stat-l" data-no>deltakere</span><span class="stat-l" data-sv>deltagare</span></div>
        <div><span class="stat-n w">8</span><span class="stat-l" data-fr>langues</span><span class="stat-l" data-en>languages</span><span class="stat-l" data-zh>种语言</span><span class="stat-l" data-no>språk</span><span class="stat-l" data-sv>språk</span></div>
        <div><span class="stat-n">7</span><span class="stat-l" data-fr>écoles partenaires</span><span class="stat-l" data-en>partner schools</span><span class="stat-l" data-zh>合作院校</span><span class="stat-l" data-no>partnerskoler</span><span class="stat-l" data-sv>partnerskolor</span></div>
        <div><span class="stat-n w">2016</span><span class="stat-l" data-fr>depuis</span><span class="stat-l" data-en>since</span><span class="stat-l" data-zh>年起</span><span class="stat-l" data-no>siden</span><span class="stat-l" data-sv>sedan</span></div>
      </div>
    </div>
    <div class="hero-right">
      <img class="hero-photo" src="assets/portrait.png" alt="Marcus Detrez" onerror="this.style.display='none'">
      <div class="hero-accent">MD</div>
    </div>
  </section>

  <!-- FORMATIONS PREVIEW -->
  <section class="sec sec-dark" id="services">
    <div class="container">
      <span class="sec-label">${t('lbl.expertise')}</span>
      <h2>${t('h2.expertise')}</h2>
      <div class="tabs">
        <button class="tab-btn active" data-tab="tab-f">
          <span data-fr>Formation</span><span data-en>Training</span><span data-zh>培训</span><span data-no>Kurs</span><span data-sv>Kurs</span>
        </button>
        <button class="tab-btn" data-tab="tab-c">Consulting</button>
      </div>
      <div id="tab-f" class="tab-content active svc-grid-2">
        <a href="#/formation/langues" class="svc-card">
          <h3 data-fr>Langues étrangères</h3><h3 data-en>Foreign Languages</h3><h3 data-zh>外语培训</h3><h3 data-no>Fremmedspråk</h3><h3 data-sv>Främmande språk</h3>
          <p data-fr>Anglais, Français, Suédois, Norvégien, Mandarin — du A2 au C2.</p>
          <p data-en>English, French, Swedish, Norwegian, Mandarin — A2 to C2.</p>
          <p data-zh>英语、法语、瑞典语、挪威语、普通话——A2至C2。</p>
          <p data-no>Engelsk, Fransk, Svensk, Norsk, Mandarin — A2 til C2.</p>
          <p data-sv>Engelska, Franska, Svenska, Norska, Mandarin — A2 till C2.</p>
          <ul class="svc-bullets">
            <li data-fr>17 modules certifiants</li><li data-en>17 certified modules</li><li data-zh>17个认证模块</li><li data-no>17 sertifiserende moduler</li><li data-sv>17 certifierade moduler</li>
            <li data-fr>Approche par objectifs communicatifs</li><li data-en>Communicative objectives approach</li><li data-zh>以沟通目标为导向</li><li data-no>Kommunikativ målstyrt tilnærming</li><li data-sv>Kommunikativt målinriktat angreppssätt</li>
          </ul>
          <span class="svc-tag">17 modules</span>
        </a>
        <a href="#/formation/interculturel" class="svc-card">
          <h3 data-fr>Interculturalité</h3><h3 data-en>Interculturality</h3><h3 data-zh>跨文化交际</h3><h3 data-no>Interkulturalitet</h3><h3 data-sv>Interkulturalitet</h3>
          <p data-fr>Négociation cross-culturelle, management multiculturel, expansion internationale.</p>
          <p data-en>Cross-cultural negotiation, multicultural management, international expansion.</p>
          <p data-zh>跨文化谈判、多元文化管理、国际扩张。</p>
          <p data-no>Tverrkulturell forhandling, multikulturell ledelse, internasjonal ekspansjon.</p>
          <p data-sv>Tvärkulturella förhandlingar, mångkulturell ledning, internationell expansion.</p>
          <ul class="svc-bullets">
            <li data-fr>Asie, Nordiques, Anglophones</li><li data-en>Asia, Nordics, Anglophones</li><li data-zh>亚洲、北欧、英语国家</li><li data-no>Asia, Norden, Engelskspråklige</li><li data-sv>Asien, Norden, Engelsktalande</li>
            <li data-fr>Simulations haute pression</li><li data-en>High-pressure simulations</li><li data-zh>高压情景模拟</li><li data-no>Høytrykkssimuleringer</li><li data-sv>Högtryckssimulationer</li>
          </ul>
          <span class="svc-tag">3 modules</span>
        </a>
        <a href="#/formation/ia" class="svc-card">
          <h3 data-fr>IA & Nouvelles technologies</h3><h3 data-en>AI & New Technologies</h3><h3 data-zh>人工智能与新技术</h3><h3 data-no>KI & Ny teknologi</h3><h3 data-sv>AI & Ny teknik</h3>
          <p data-fr>Transformation digitale, IA appliquée aux métiers, déploiement en équipes.</p>
          <p data-en>Digital transformation, AI for professionals, team deployment.</p>
          <p data-zh>数字化转型、职业AI应用、团队推广。</p>
          <p data-no>Digital transformasjon, KI for fagfolk, teamutrulling.</p>
          <p data-sv>Digital transformation, AI för yrkesverksamma, teamutrullning.</p>
          <span class="svc-tag">3 modules</span>
        </a>
        <a href="#/formation/communication" class="svc-card">
          <h3>Communication</h3>
          <p data-fr>Management de l'humain, gestion de crise, vente, prise de parole en public.</p>
          <p data-en>Human management, crisis communication, sales, public speaking.</p>
          <p data-zh>人员管理、危机沟通、销售、公开演讲。</p>
          <p data-no>Personalledelse, krisehåndtering, salg, offentlig tale.</p>
          <p data-sv>Personalledning, krishantering, försäljning, offentligt tal.</p>
          <span class="svc-tag">4 modules</span>
        </a>
        <a href="#/formation/veille" class="svc-card" style="grid-column:1/3">
          <h3 data-fr>Veille des marchés</h3><h3 data-en>Market Intelligence</h3><h3 data-zh>市场情报</h3><h3 data-no>Markedsovervåking</h3><h3 data-sv>Marknadsbevakning</h3>
          <p data-fr>Veille stratégique, analyse concurrentielle, intelligence sectorielle appliquée.</p>
          <p data-en>Strategic monitoring, competitive analysis, applied sectoral intelligence.</p>
          <p data-zh>战略监测、竞争分析、行业情报应用。</p>
          <p data-no>Strategisk overvåking, konkurranseanalyse, anvendt sektorintelligens.</p>
          <p data-sv>Strategisk bevakning, konkurrensanalys, tillämpad branschintelligens.</p>
          <span class="svc-tag">3 modules</span>
        </a>
      </div>
      <div id="tab-c" class="tab-content svc-grid-3" style="display:none">
        ${CONSULTING.slice(0,6).map((m,i) => `<a href="#/consulting/${m.slug}" class="svc-card">
          <span class="mission-num">0${i+1}</span>
          <h3>${getL(m,'label')}</h3>
          <p>${getL(m,'pitch').split('.')[0]}.</p>
        </a>`).join('')}
        <a href="#/consulting" class="svc-card" style="border-style:dashed;align-items:center;justify-content:center;text-align:center">
          <p style="color:var(--ink3)">${t('btn.all_articles').replace('articles','missions').replace('Alle artikler','Alle oppdrag').replace('Alla artiklar','Alla uppdrag').replace('所有文章','所有任务')}</p>
        </a>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section class="sec" id="about">
    <div class="container">
      <span class="sec-label">${t('lbl.about')}</span>
      <h2>${t('h2.about')}</h2>
      <div class="about-grid">
        <div class="about-col">
          <p data-fr style="margin-bottom:1.5rem">Depuis 2016, j'interviens là où les organisations ont besoin de résultats. 8 langues. 10+ projets fondés et dirigés. 3 500+ apprenants formés dans 7 des meilleures écoles françaises. Marchés asiatiques, nordiques, francophones.</p>
          <p data-en style="margin-bottom:1.5rem">Since 2016, I intervene where organisations need results. 8 languages. 10+ projects founded and led. 3,500+ learners trained across France's top 7 schools. Asian, Nordic, Francophone markets.</p>
          <p data-zh style="margin-bottom:1.5rem">自2016年以来，我在需要成果的组织中进行干预。8种语言。10个以上创立并领导的项目。在法国7所顶尖学府培训了3500名以上学员。亚洲、北欧、法语市场。</p>
          <p data-no style="margin-bottom:1.5rem">Siden 2016 griper jeg inn der organisasjoner trenger resultater. 8 språk. 10+ prosjekter grunnlagt og ledet. 3 500+ lærende trent ved Frankrikes 7 beste skoler. Asiatiske, nordiske, franskspråklige markeder.</p>
          <p data-sv style="margin-bottom:1.5rem">Sedan 2016 ingriper jag där organisationer behöver resultat. 8 språk. 10+ projekt grundade och ledda. 3 500+ deltagare utbildade vid Frankrikes 7 bästa skolor. Asiatiska, nordiska, franskspråkiga marknader.</p>
          <div class="methodo-cats">
            <div>
              <div class="methodo-cat-label" data-fr>Pédagogie</div><div class="methodo-cat-label" data-en>Pedagogy</div><div class="methodo-cat-label" data-zh>教学法</div><div class="methodo-cat-label" data-no>Pedagogikk</div><div class="methodo-cat-label" data-sv>Pedagogik</div>
              <div class="methodo-items">
                <span class="methodo-item" data-fr>Approche par objectifs</span><span class="methodo-item" data-en>Objective-based</span><span class="methodo-item" data-zh>目标导向</span><span class="methodo-item" data-no>Målstyrt tilnærming</span><span class="methodo-item" data-sv>Målinriktat</span>
                <span class="methodo-item" data-fr>Ingénierie de formation</span><span class="methodo-item" data-en>Training engineering</span><span class="methodo-item" data-zh>培训工程</span><span class="methodo-item" data-no>Opplæringsteknikk</span><span class="methodo-item" data-sv>Utbildningsteknik</span>
                <span class="methodo-item" data-fr>Méthodo 5 piliers</span><span class="methodo-item" data-en>5-pillar method</span><span class="methodo-item" data-zh>5大支柱方法论</span><span class="methodo-item" data-no>5-pilarmetode</span><span class="methodo-item" data-sv>5-pelarmetod</span>
                <span class="methodo-item">Qualiopi</span>
              </div>
            </div>
            <div>
              <div class="methodo-cat-label" data-fr>Interculturel</div><div class="methodo-cat-label" data-en>Intercultural</div><div class="methodo-cat-label" data-zh>跨文化</div><div class="methodo-cat-label" data-no>Interkulturell</div><div class="methodo-cat-label" data-sv>Interkulturell</div>
              <div class="methodo-items">
                <span class="methodo-item" data-fr>Modèles cross-culturels</span><span class="methodo-item" data-en>Cross-cultural models</span><span class="methodo-item" data-zh>跨文化模型</span><span class="methodo-item" data-no>Tverrkulturelle modeller</span><span class="methodo-item" data-sv>Tvärkulturella modeller</span>
                <span class="methodo-item" data-fr>Intelligence culturelle</span><span class="methodo-item" data-en>Cultural intelligence</span><span class="methodo-item" data-zh>文化智商</span><span class="methodo-item" data-no>Kulturell intelligens</span><span class="methodo-item" data-sv>Kulturell intelligens</span>
                <span class="methodo-item" data-fr>Styles de négociation</span><span class="methodo-item" data-en>Negotiation styles</span><span class="methodo-item" data-zh>谈判风格</span><span class="methodo-item" data-no>Forhandlingsstiler</span><span class="methodo-item" data-sv>Förhandlingsstilar</span>
              </div>
            </div>
            <div>
              <div class="methodo-cat-label" data-fr>Tech & Produit</div><div class="methodo-cat-label" data-en>Tech & Product</div><div class="methodo-cat-label" data-zh>技术与产品</div><div class="methodo-cat-label" data-no>Tech & Produkt</div><div class="methodo-cat-label" data-sv>Tech & Produkt</div>
              <div class="methodo-items">
                <span class="methodo-item" data-fr>Architecture edtech</span><span class="methodo-item" data-en>Edtech architecture</span><span class="methodo-item" data-zh>教育技术架构</span><span class="methodo-item" data-no>Edtech-arkitektur</span><span class="methodo-item" data-sv>Edtech-arkitektur</span>
                <span class="methodo-item" data-fr>IA appliquée</span><span class="methodo-item" data-en>Applied AI</span><span class="methodo-item" data-zh>人工智能应用</span><span class="methodo-item" data-no>Anvendt KI</span><span class="methodo-item" data-sv>Tillämpad AI</span>
              </div>
            </div>
          </div>
          <div class="lang-tags" style="margin-top:2rem">
            <span class="lang-tag" data-fr>Enseignées :</span><span class="lang-tag" data-en>Taught:</span><span class="lang-tag" data-zh>教授：</span><span class="lang-tag" data-no>Undervises:</span><span class="lang-tag" data-sv>Undervisas:</span>
            <span class="lang-tag teach">Anglais</span><span class="lang-tag teach">Français</span><span class="lang-tag teach">Suédois</span><span class="lang-tag teach">Norvégien</span><span class="lang-tag teach">Mandarin</span>
            <span class="lang-tag" data-fr>Parlées :</span><span class="lang-tag" data-en>Also spoken:</span><span class="lang-tag" data-zh>亦通：</span><span class="lang-tag" data-no>Snakkes også:</span><span class="lang-tag" data-sv>Talas också:</span>
            <span class="lang-tag">Allemand B2+</span><span class="lang-tag">Japonais B1</span><span class="lang-tag">HSK 4</span>
          </div>
        </div>
        <div class="about-col">
          <span class="sec-label">${t('lbl.method')}</span>
          <div class="method-item"><div class="m-num">01</div><div class="m-body">
            <h4 data-fr>Ancrage syntaxique</h4><h4 data-en>Syntactic anchoring</h4><h4 data-zh>句法锚定</h4><h4 data-no>Syntaktisk forankring</h4><h4 data-sv>Syntaktisk förankring</h4>
            <p data-fr>Les structures avant le vocabulaire. Ce qui reste, c'est la grammaire profonde.</p><p data-en>Structures before vocabulary. What sticks is deep grammar.</p><p data-zh>结构优先于词汇。留下的是深层语法。</p><p data-no>Strukturer før vokabular. Det som sitter, er dyp grammatikk.</p><p data-sv>Strukturer före vokabulär. Det som fastnar är djup grammatik.</p>
          </div></div>
          <div class="method-item"><div class="m-num">02</div><div class="m-body">
            <h4 data-fr>Immersion contextuelle</h4><h4 data-en>Contextual immersion</h4><h4 data-zh>情境沉浸</h4><h4 data-no>Kontekstuell fordypning</h4><h4 data-sv>Kontextuell fördjupning</h4>
            <p data-fr>Chaque séance part de situations réelles issues du contexte professionnel du client.</p><p data-en>Every session starts from real situations from the client's professional context.</p><p data-zh>每节课从客户职业环境中的真实情境出发。</p><p data-no>Hver økt starter fra virkelige situasjoner fra klientens profesjonelle kontekst.</p><p data-sv>Varje session utgår från verkliga situationer från klientens professionella kontext.</p>
          </div></div>
          <div class="method-item"><div class="m-num">03</div><div class="m-body">
            <h4 data-fr>Progression spirale</h4><h4 data-en>Spiral progression</h4><h4 data-zh>螺旋式进阶</h4><h4 data-no>Spiralprogresjon</h4><h4 data-sv>Spiralprogression</h4>
            <p data-fr>On revient sur les mêmes points avec une complexité croissante. Rien n'est vu une seule fois.</p><p data-en>We return to the same points with increasing complexity. Nothing is seen only once.</p><p data-zh>以递增的复杂度反复回到相同的知识点。没有内容只学一遍。</p><p data-no>Vi vender tilbake til de samme punktene med økende kompleksitet. Ingenting ses bare én gang.</p><p data-sv>Vi återvänder till samma punkter med ökande komplexitet. Ingenting ses bara en gång.</p>
          </div></div>
          <div class="method-item"><div class="m-num">04</div><div class="m-body">
            <h4 data-fr>Feedback immédiat</h4><h4 data-en>Immediate feedback</h4><h4 data-zh>即时反馈</h4><h4 data-no>Umiddelbar tilbakemelding</h4><h4 data-sv>Omedelbar återkoppling</h4>
            <p data-fr>La correction se fait en production, pas après. Le cerveau retient l'erreur corrigée dans le vif.</p><p data-en>Correction happens during production, not after. The brain retains errors corrected in the moment.</p><p data-zh>纠正在产出过程中进行，而非之后。大脑在当场纠正错误时记忆最深。</p><p data-no>Korreksjonen skjer under produksjon, ikke etterpå. Hjernen husker feil korrigert i øyeblikket.</p><p data-sv>Korrigering sker under produktion, inte efteråt. Hjärnan minns fel som korrigeras i stunden.</p>
          </div></div>
          <div class="method-item"><div class="m-num">05</div><div class="m-body">
            <h4 data-fr>Automatisation</h4><h4 data-en>Automatisation</h4><h4 data-zh>自动化</h4><h4 data-no>Automatisering</h4><h4 data-sv>Automatisering</h4>
            <p data-fr>L'objectif final : que les structures deviennent des réflexes. Pas de réflexion — de l'action.</p><p data-en>The final goal: structures become reflexes. No thinking — acting.</p><p data-zh>最终目标：让结构成为反射。不再思考——直接行动。</p><p data-no>Det endelige målet: at strukturene blir reflekser. Ikke tenkning — handling.</p><p data-sv>Det slutliga målet: att strukturerna blir reflexer. Inget tänkande — handling.</p>
          </div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- CERTIFICATIONS -->
  <section class="sec sec-darker" id="certs">
    <div class="container">
      <span class="sec-label">${t('lbl.certs')}</span>
      <h2>${t('h2.certs')}</h2>
      <div class="certs-head">
        <p class="certs-intro">${t('certs.intro')}</p>
        <a class="cv-btn" href="CERTIF/CV-Marcus-Detrez.pdf" download>
          <span class="cv-btn-txt">${t('certs.cv')}<em>${t('certs.cv_sub')}</em></span>
          ${DL_ICON}
        </a>
      </div>
      <div class="certs-tabs tabs">
        <button class="tab-btn active" data-tab="ct-langues" data-fr>Langues</button><button class="tab-btn active" data-tab="ct-langues" data-en>Languages</button><button class="tab-btn active" data-tab="ct-langues" data-zh>语言</button><button class="tab-btn active" data-tab="ct-langues" data-no>Språk</button><button class="tab-btn active" data-tab="ct-langues" data-sv>Språk</button>
        <button class="tab-btn" data-tab="ct-academique" data-fr>Académique</button><button class="tab-btn" data-tab="ct-academique" data-en>Academic</button><button class="tab-btn" data-tab="ct-academique" data-zh>学术</button><button class="tab-btn" data-tab="ct-academique" data-no>Akademisk</button><button class="tab-btn" data-tab="ct-academique" data-sv>Akademisk</button>
        <button class="tab-btn" data-tab="ct-business">Business & Tech</button>
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
        <span class="sec-label">${t('lbl.partners')}</span>
        <h2>${t('h2.partners')}</h2>
        <p data-fr>J'interviens comme formateur et chargé de cours dans ces établissements d'enseignement supérieur.</p>
        <p data-en>I deliver courses and training at these French higher education institutions.</p>
        <p data-zh>我在这些法国高等教育机构担任讲师和培训师。</p>
        <p data-no>Jeg underviser og holder kurs ved disse franske høyere utdanningsinstitusjonene.</p>
        <p data-sv>Jag undervisar och håller kurser vid dessa franska högre utbildningsinstitutioner.</p>
      </div>
      <div class="schools-grid">
        <div class="school-card"><div class="sc-logo-wrap"><img class="sc-logo" src="assets/logos/22.png" alt="EM Normandie"></div><div><div class="sc-name">EM NORMANDIE</div><div class="sc-type" data-fr>École de management</div><div class="sc-type" data-en>Business school</div><div class="sc-type" data-zh>管理学院</div><div class="sc-type" data-no>Handelshøyskole</div><div class="sc-type" data-sv>Handelshögskola</div></div></div>
        <div class="school-card"><div class="sc-logo-wrap"><img class="sc-logo" src="assets/logos/albert-school-1680613084.png" alt="Albert School"></div><div><div class="sc-name">ALBERT SCHOOL</div><div class="sc-type" data-fr>École de commerce</div><div class="sc-type" data-en>Business school</div><div class="sc-type" data-zh>商学院</div><div class="sc-type" data-no>Handelshøyskole</div><div class="sc-type" data-sv>Handelshögskola</div></div></div>
        <div class="school-card"><div class="sc-logo-wrap"><img class="sc-logo" src="assets/logos/18.png" alt="Mines Paris PSL"></div><div><div class="sc-name">MINES PARIS PSL</div><div class="sc-type" data-fr>Grande école</div><div class="sc-type" data-en>Engineering grande école</div><div class="sc-type" data-zh>精英工程学院</div><div class="sc-type" data-no>Ingeniørhøyskole</div><div class="sc-type" data-sv>Ingenjörshögskola</div></div></div>
        <div class="school-card" style="border-right:none"><div class="sc-logo-wrap"><img class="sc-logo" src="assets/logos/19.png" alt="CESI"></div><div><div class="sc-name">CESI</div><div class="sc-type" data-fr>École d'ingénieurs</div><div class="sc-type" data-en>Engineering school</div><div class="sc-type" data-zh>工程学院</div><div class="sc-type" data-no>Ingeniørskole</div><div class="sc-type" data-sv>Ingenjörsskola</div></div></div>
        <div class="school-card" style="border-bottom:none"><div class="sc-logo-wrap"><img class="sc-logo" src="assets/logos/20.png" alt="ESAIP"></div><div><div class="sc-name">ESAIP</div><div class="sc-type" data-fr>École d'ingénieurs La Salle</div><div class="sc-type" data-en>Engineering school</div><div class="sc-type" data-zh>拉萨尔工程学院</div><div class="sc-type" data-no>Ingeniørskole La Salle</div><div class="sc-type" data-sv>Ingenjörsskola La Salle</div></div></div>
        <div class="school-card" style="border-bottom:none"><div class="sc-logo-wrap"><img class="sc-logo" src="assets/logos/21.png" alt="Euridis"></div><div><div class="sc-name">EURIDIS</div><div class="sc-type">Business School</div></div></div>
        <div class="school-card" style="border-bottom:none"><div class="sc-logo-wrap"><img class="sc-logo" src="assets/logos/lsi.png" alt="LSI Education"></div><div><div class="sc-name">LSI</div><div class="sc-type">Learny Society Intl</div></div></div>
        <div class="school-card" style="border-right:none;border-bottom:none"><div class="sc-logo-wrap"><img class="sc-logo" src="assets/logos/23.png" alt="Aix-Marseille"></div><div><div class="sc-name">AIX-MARSEILLE</div><div class="sc-type" data-fr>Université</div><div class="sc-type" data-en>University</div><div class="sc-type" data-zh>大学</div><div class="sc-type" data-no>Universitet</div><div class="sc-type" data-sv>Universitet</div></div></div>
      </div>
    </div>
  </section>

  <!-- REVIEWS -->
  <section class="sec sec-dark" id="reviews">
    <div class="container">
      <span class="sec-label">${t('lbl.reviews')}</span>
      <h2>${t('h2.reviews')}</h2>
      <div class="reviews-grid">
        <div class="rev-card"><div class="stars">★★★★★</div><p class="rev-text" data-fr>"Une pédagogie qui sort vraiment des sentiers battus. Marcus ancre les structures avant le vocabulaire — résultat, ça reste. En 3 mois j'ai progressé plus qu'en 2 ans de cours classiques."</p><p class="rev-text" data-en>"A truly unconventional approach. Marcus anchors structures before vocabulary — and it sticks. In 3 months I progressed more than in 2 years of conventional classes."</p><p class="rev-text" data-zh>"真正与众不同的教学法。Marcus先建立语法结构再学词汇——效果立竿见影。3个月的进步超过了2年的传统课程。"</p><p class="rev-text" data-no>"En virkelig ukonvensjonell tilnærming. Marcus forankrer strukturer før vokabular — og det sitter. På 3 måneder progrederte jeg mer enn på 2 år med konvensjonelle klasser."</p><p class="rev-text" data-sv>"Ett verkligt okonventionellt angreppssätt. Marcus förankrar strukturer före vokabulär — och det fastnar. På 3 månader avancerade jag mer än på 2 år med konventionella klasser."</p><div class="rev-who"><strong>Camille R.</strong><span>EM Normandie · Business English</span></div></div>
        <div class="rev-card"><div class="stars">★★★★★</div><p class="rev-text" data-fr>"Le module interculturel qu'il a conçu pour nos équipes Asie a changé la façon dont nos managers abordent les négociations. Concret, percutant, immédiatement applicable."</p><p class="rev-text" data-en>"The intercultural module he designed for our Asia teams changed how our managers approach negotiations. Concrete, impactful, immediately applicable."</p><p class="rev-text" data-zh>"他为我们亚洲团队设计的跨文化模块，改变了我们的管理者处理谈判的方式。具体、有力、立即可用。"</p><p class="rev-text" data-no>"Den interkulturelle modulen han designet for Asia-teamene våre endret måten lederne våre nærmer seg forhandlinger. Konkret, slagkraftig, umiddelbart anvendelig."</p><p class="rev-text" data-sv>"Den interkulturella modul han designade för våra Asien-team förändrade hur våra chefer hanterar förhandlingar. Konkret, slagkraftigt, omedelbart tillämpbart."</p><div class="rev-who"><strong>Thomas L.</strong><span data-fr>Directeur RH · Industrie internationale</span><span data-en>HR Director · International industry</span><span data-zh>人力资源总监 · 国际工业</span><span data-no>HR-direktør · Internasjonal industri</span><span data-sv>HR-direktör · Internationell industri</span></div></div>
        <div class="rev-card"><div class="stars">★★★★★</div><p class="rev-text" data-fr>"Je recommande Marcus sans réserve pour les langues scandinaves en contexte professionnel. Rare, rigoureux, très à l'écoute des contraintes terrain."</p><p class="rev-text" data-en>"I recommend Marcus without reservation for Scandinavian languages in a professional context. Rare expertise, rigorous, and very attuned to operational constraints."</p><p class="rev-text" data-zh>"我毫无保留地推荐Marcus担任职业环境中的斯堪的纳维亚语培训师。罕见的专业知识，严谨，非常了解实际操作限制。"</p><p class="rev-text" data-no>"Jeg anbefaler Marcus uten forbehold for skandinaviske språk i profesjonell sammenheng. Sjelden ekspertise, grundig og svært lydhør overfor operative begrensninger."</p><p class="rev-text" data-sv>"Jag rekommenderar Marcus utan förbehåll för skandinaviska språk i professionella sammanhang. Sällsynt expertis, rigorös och mycket lyhörd för operativa begränsningar."</p><div class="rev-who"><strong>Ingrid M.</strong><span data-fr>Responsable formation · Secteur maritime</span><span data-en>Training Manager · Maritime sector</span><span data-zh>培训经理 · 海事行业</span><span data-no>Opplæringsansvarlig · Maritim sektor</span><span data-sv>Utbildningsansvarig · Maritim sektor</span></div></div>
      </div>
    </div>
  </section>

  <!-- BLOG PREVIEW -->
  <section class="sec" id="blog-preview">
    <div class="container">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:3rem;flex-wrap:wrap;gap:1rem">
        <div><span class="sec-label">Blog</span><h2>${t('h2.blog')}</h2></div>
        <a href="#/blog" class="btn-ghost">${t('btn.all_articles')}</a>
      </div>
      <div class="blog-grid-main">
        ${blogCardHTML(BLOG[10])}
        ${blogCardHTML(BLOG[11])}
        ${blogCardHTML(BLOG[15])}
      </div>
    </div>
  </section>

  <!-- CTA -->
  ${ctaSectionHTML('cta.home.title','cta.home.sub')}
  `;
  initTabs();
}

const DL_ICON = '<svg class="dl-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" aria-hidden="true"><path d="M12 3v12M7 11l5 5 5-5M4 20h16"/></svg>';

function certCardHTML(c){
  return `<a class="cert-card" href="CERTIF/${c.pdf}" download title="${t('certs.dl')} — ${c.nom}">
    <div class="cert-head">
      <span class="cert-level ${c.badge}">${c.niveau}</span>
      <span class="cert-year">${c.annee}</span>
    </div>
    <div class="cert-name">${c.nom}</div>
    <div class="cert-sub">${c.sub}</div>
    <div class="cert-desc">${c.desc}</div>
    <span class="cert-dl">${DL_ICON}${t('certs.dl')}</span>
  </a>`;
}

/* ================================================================
   MANIFESTE
   ================================================================ */
function renderManifeste(app){
  const lang = getLang();
  const closing = {
    fr:'MON EXPÉRIENCE. MON SAVOIR.<br>MON <span class="glitch">ARSENAL</span>.<br>À VOTRE SERVICE.',
    en:'MY EXPERIENCE. MY KNOWLEDGE.<br>MY <span class="glitch">ARSENAL</span>.<br>AT YOUR SERVICE.',
    zh:'我的经验。我的知识。<br>我的<span class="glitch">实力</span>。<br>为您服务。',
    no:'MIN ERFARING. MIN KUNNSKAP.<br>MITT <span class="glitch">ARSENAL</span>.<br>TIL DIN TJENESTE.',
    sv:'MIN ERFARENHET. MIN KUNSKAP.<br>MITT <span class="glitch">ARSENAL</span>.<br>TILL DIN TJÄNST.'
  };
  const intro = {
    fr:'Je ne suis pas un formateur de plus.<br>Je suis un <span class="glitch">opérateur</span>.',
    en:'I am not just another trainer.<br>I am an <span class="glitch">operator</span>.',
    zh:'我不只是又一个培训师。<br>我是一个<span class="glitch">实操者</span>。',
    no:'Jeg er ikke nok en trener.<br>Jeg er en <span class="glitch">operatør</span>.',
    sv:'Jag är inte bara ännu en tränare.<br>Jag är en <span class="glitch">operatör</span>.'
  };
  const sections = {
    fr:{
      p1:'Depuis 2016, j\'interviens là où les organisations ont besoin de résultats — pas de présentations PowerPoint, pas de journées de team building, pas de certifications qui finissent dans un tiroir.',
      p2:'Je parle 8 langues. J\'ai fondé et dirigé plus de 10 projets. J\'ai formé plus de 3 500 personnes dans 7 des meilleures écoles françaises. J\'ai travaillé sur des marchés asiatiques, nordiques, francophones. J\'ai construit des programmes de formation de A à Z. J\'ai conseillé des organisations sur leur stratégie linguistique, interculturelle et internationale.',
      p3:'Ce que j\'ai appris : la compétence ne suffit pas. Il faut la méthode. Et la méthode ne suffit pas. Il faut le terrain.',
      who:'QUI JE SUIS',
      p4:'Un opérateur pluridisciplinaire. Pas un académicien — quelqu\'un qui a construit des choses réelles, dans des contextes réels, avec des contraintes réelles. Les langues, l\'interculturel, l\'IA, la stratégie : ce ne sont pas des cases cochées sur un CV — ce sont des outils que j\'utilise tous les jours.',
      quote:'La différence entre un expert et un opérateur : l\'expert sait. L\'opérateur fait.',
      why:'POURQUOI',
      p5:'Parce que le marché de la formation professionnelle en France est structurellement médiocre. Des organismes qui vendent du volume, des formateurs qui récitent leurs slides, des certifications qui ne forment à rien. Ce n\'est pas de la formation — c\'est de la conformité administrative.',
      p6:'Je ne travaille pas dans ce marché-là. Je travaille pour les organisations qui ont compris que la compétence linguistique et interculturelle est un avantage compétitif réel, pas une obligation légale.',
      how:'COMMENT',
      p7:'Par une méthode propriétaire construite sur 10 ans de terrain. Ancrage syntaxique, immersion contextuelle, progression spirale, feedback immédiat, automatisation. Cinq piliers. Zéro remplissage.',
      p8:'Chaque intervention est conçue sur-mesure. Pas de module standard sorti d\'un catalogue — un diagnostic, un programme, une livraison.',
      redline:'LA LIGNE ROUGE',
      p9:'Je ne travaille pas avec des organisations qui veulent cocher des cases. Je travaille avec celles qui veulent changer quelque chose — dans leurs équipes, dans leurs marchés, dans leurs résultats.',
      p10:'Si vous cherchez un prestataire qui validera vos convictions existantes, je ne suis pas la bonne personne. Si vous cherchez quelqu\'un qui dit ce qui est vrai, construit ce qui fonctionne, et livre ce qui a été promis — on peut parler.'
    },
    en:{
      p1:'Since 2016, I intervene where organisations need results — no PowerPoint presentations, no team-building days, no certifications that end up in a drawer.',
      p2:'I speak 8 languages. I have founded and led more than 10 projects. I have trained more than 3,500 people at 7 of France\'s best schools. I have worked on Asian, Nordic and Francophone markets. I have built training programmes from scratch. I have advised organisations on their linguistic, intercultural and international strategy.',
      p3:'What I have learned: competence is not enough. You need the method. And the method is not enough. You need the field.',
      who:'WHO I AM',
      p4:'A multidisciplinary operator. Not an academic — someone who has built real things, in real contexts, with real constraints. Languages, interculturality, AI, strategy: these are not boxes ticked on a CV — they are tools I use every day.',
      quote:'The difference between an expert and an operator: the expert knows. The operator does.',
      why:'WHY',
      p5:'Because the professional training market in France is structurally mediocre. Organisations that sell volume, trainers who recite their slides, certifications that train nothing. That is not training — it is administrative compliance.',
      p6:'I do not work in that market. I work for organisations that have understood that linguistic and intercultural competence is a real competitive advantage, not a legal obligation.',
      how:'HOW',
      p7:'Through a proprietary method built on 10 years in the field. Syntactic anchoring, contextual immersion, spiral progression, immediate feedback, automatisation. Five pillars. Zero filler.',
      p8:'Every intervention is bespoke. No standard module pulled from a catalogue — a diagnosis, a programme, a delivery.',
      redline:'THE RED LINE',
      p9:'I do not work with organisations that want to tick boxes. I work with those that want to change something — in their teams, in their markets, in their results.',
      p10:'If you are looking for a provider who will validate your existing convictions, I am not the right person. If you are looking for someone who says what is true, builds what works, and delivers what was promised — we can talk.'
    },
    zh:{
      p1:'自2016年以来，我在需要成果的组织中进行干预——没有PowerPoint演示，没有团建活动，没有最终被遗忘在抽屉里的证书。',
      p2:'我会说8种语言。我创立并领导了10个以上的项目。我在法国7所顶尖学府培训了3500名以上的人员。我在亚洲、北欧和法语市场工作过。我从零开始构建培训项目。我就语言、跨文化和国际战略为组织提供建议。',
      p3:'我学到的：仅有能力是不够的。需要方法。仅有方法也不够。需要实地经验。',
      who:'我是谁',
      p4:'一个多学科的实操者。不是学者——而是在真实环境中、在真实约束下构建真实事物的人。语言、跨文化、人工智能、战略：这些不是简历上的勾选项——而是我每天使用的工具。',
      quote:'专家与实操者的区别：专家知道。实操者做到。',
      why:'为什么',
      p5:'因为法国职业培训市场在结构上存在问题。机构出售数量，培训师背诵幻灯片，证书什么都没培训。这不是培训——这是行政合规。',
      p6:'我不在那个市场工作。我为那些已经明白语言和跨文化能力是真正竞争优势（而非法律义务）的组织工作。',
      how:'如何做',
      p7:'通过一个在10年实地经验基础上构建的专有方法。句法锚定、情境沉浸、螺旋进阶、即时反馈、自动化。五大支柱。零填充。',
      p8:'每次干预都是量身定制的。没有从目录中取出的标准模块——有诊断、有项目、有交付。',
      redline:'红线',
      p9:'我不与想要勾选方框的组织合作。我与那些想要改变一些事情的组织合作——在他们的团队中，在他们的市场中，在他们的成果中。',
      p10:'如果您在寻找一个会验证您现有信念的提供者，我不是合适的人选。如果您在寻找一个说真话、构建有效方案、兑现承诺的人——我们可以谈谈。'
    },
    no:{
      p1:'Siden 2016 griper jeg inn der organisasjoner trenger resultater — ingen PowerPoint-presentasjoner, ingen teambuilding-dager, ingen sertifikater som ender i en skuff.',
      p2:'Jeg snakker 8 språk. Jeg har grunnlagt og ledet mer enn 10 prosjekter. Jeg har trent mer enn 3 500 mennesker ved 7 av Frankrikes beste skoler. Jeg har jobbet i asiatiske, nordiske og franskspråklige markeder. Jeg har bygget opplæringsprogrammer fra bunnen av. Jeg har rådgitt organisasjoner om deres språklige, interkulturelle og internasjonale strategi.',
      p3:'Det jeg har lært: kompetanse er ikke nok. Du trenger metoden. Og metoden er ikke nok. Du trenger feltet.',
      who:'HVEM JEG ER',
      p4:'En tverrfaglig operatør. Ikke en akademiker — noen som har bygget virkelige ting, i virkelige kontekster, med virkelige begrensninger. Språk, interkulturalitet, KI, strategi: dette er ikke avkryssede bokser på en CV — dette er verktøy jeg bruker hver dag.',
      quote:'Forskjellen mellom en ekspert og en operatør: eksperten vet. Operatøren gjør.',
      why:'HVORFOR',
      p5:'Fordi det profesjonelle opplæringsmarkedet i Frankrike er strukturelt middelmådig. Organisasjoner som selger volum, trenere som leser fra lysbilder, sertifikater som ikke trener noe. Det er ikke opplæring — det er administrativ samsvar.',
      p6:'Jeg jobber ikke i det markedet. Jeg jobber for organisasjoner som har forstått at språklig og interkulturell kompetanse er en reell konkurransefordel, ikke en juridisk forpliktelse.',
      how:'HVORDAN',
      p7:'Gjennom en proprietær metode bygget på 10 år i felten. Syntaktisk forankring, kontekstuell fordypning, spiralprogresjon, umiddelbar tilbakemelding, automatisering. Fem pilarer. Null fyll.',
      p8:'Hver intervensjon er skreddersydd. Ingen standardmodul hentet fra en katalog — en diagnose, et program, en levering.',
      redline:'DEN RØDE LINJEN',
      p9:'Jeg jobber ikke med organisasjoner som vil krysse av bokser. Jeg jobber med de som ønsker å endre noe — i teamene sine, i markedene sine, i resultatene sine.',
      p10:'Hvis du leter etter en leverandør som vil validere dine eksisterende overbevisninger, er jeg ikke rett person. Hvis du leter etter noen som sier det som er sant, bygger det som fungerer, og leverer det som ble lovet — kan vi snakke.'
    },
    sv:{
      p1:'Sedan 2016 ingriper jag där organisationer behöver resultat — inga PowerPoint-presentationer, inga teambuilding-dagar, inga certifieringar som slutar i en låda.',
      p2:'Jag talar 8 språk. Jag har grundat och lett mer än 10 projekt. Jag har utbildat mer än 3 500 personer vid 7 av Frankrikes bästa skolor. Jag har arbetat på asiatiska, nordiska och franskspråkiga marknader. Jag har byggt utbildningsprogram från grunden. Jag har rådgett organisationer om deras språkliga, interkulturella och internationella strategi.',
      p3:'Vad jag har lärt mig: kompetens räcker inte. Du behöver metoden. Och metoden räcker inte. Du behöver fältet.',
      who:'VEM JAG ÄR',
      p4:'En tvärvetenskaplig operatör. Inte en akademiker — någon som har byggt riktiga saker, i riktiga kontexter, med riktiga begränsningar. Språk, interkulturalitet, AI, strategi: dessa är inte kryssade rutor på ett CV — de är verktyg jag använder varje dag.',
      quote:'Skillnaden mellan en expert och en operatör: experten vet. Operatören gör.',
      why:'VARFÖR',
      p5:'För att den professionella utbildningsmarknaden i Frankrike är strukturellt medioker. Organisationer som säljer volym, tränare som läser från bilder, certifieringar som inte tränar något. Det är inte utbildning — det är administrativ efterlevnad.',
      p6:'Jag arbetar inte på den marknaden. Jag arbetar för organisationer som har förstått att språklig och interkulturell kompetens är en verklig konkurrensfördel, inte en laglig skyldighet.',
      how:'HUR',
      p7:'Genom en proprietär metod byggd på 10 år i fältet. Syntaktisk förankring, kontextuell fördjupning, spiralprogression, omedelbar återkoppling, automatisering. Fem pelare. Noll fyllnad.',
      p8:'Varje intervention är skräddarsydd. Ingen standardmodul hämtad från en katalog — en diagnos, ett program, en leverans.',
      redline:'DEN RÖDA LINJEN',
      p9:'Jag arbetar inte med organisationer som vill kryssa i rutor. Jag arbetar med dem som vill förändra något — i sina team, på sina marknader, i sina resultat.',
      p10:'Om du letar efter en leverantör som bekräftar dina befintliga övertygelser är jag inte rätt person. Om du letar efter någon som säger vad som är sant, bygger det som fungerar och levererar det som lovats — kan vi prata.'
    }
  };
  const s = sections[lang] || sections.fr;
  app.innerHTML = `
  <section class="manifeste-hero-section">
    <div class="container">
      <span class="sec-label">${t('lbl.position')}</span>
      <h1>LE <span class="glitch">MANIFESTE</span></h1>
      <p class="manifeste-intro">${intro[lang]||intro.fr}</p>
    </div>
  </section>

  <section class="sec">
    <div class="container">
      <div class="manifeste-content">
        <div class="manifeste-section">
          <p>${s.p1}</p>
          <p>${s.p2}</p>
          <p>${s.p3}</p>
        </div>
        <div class="manifeste-section">
          <span class="manifeste-section-title">${s.who}</span>
          <p>${s.p4}</p>
          <blockquote>${s.quote}</blockquote>
        </div>
        <div class="manifeste-section">
          <span class="manifeste-section-title">${s.why}</span>
          <p>${s.p5}</p>
          <p>${s.p6}</p>
        </div>
        <div class="manifeste-section">
          <span class="manifeste-section-title">${s.how}</span>
          <p>${s.p7}</p>
          <p>${s.p8}</p>
        </div>
        <div class="manifeste-section">
          <span class="manifeste-section-title">${s.redline}</span>
          <div class="ligne-rouge-box">
            <p>${s.p9}</p>
            <p style="margin-bottom:0">${s.p10}</p>
          </div>
        </div>
        <div class="manifeste-closing">${closing[lang]||closing.fr}</div>
        <div class="hero-ctas">
          <a href="#/contact" class="btn-red">${t('btn.contact')}</a>
          <a href="#/formation" class="btn-ghost">${t('btn.formations')}</a>
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
      <h3>${getL(v,'label')}</h3>
      <p style="font-size:.85rem;color:var(--ink3);line-height:1.5">${getL(v,'desc')}</p>
      <div class="volet-count">${countAllModules(v)} modules</div>
    </a>`).join('');

  app.innerHTML = `
  <div class="hub-header sec sec-dark">
    <div class="container">
      <div class="breadcrumb"><a href="#/">${t('bc.home')}</a><span class="sep">→</span><span class="current">${t('bc.formations')}</span></div>
      <span class="sec-label">${t('lbl.pro_training')}</span>
      <h1>${t('h2.formations_hub')}</h1>
      <p style="margin-top:1rem;max-width:600px">${t('formation.desc')}</p>
    </div>
  </div>
  <section class="sec">
    <div class="container">
      <div class="volets-grid">${voletsHTML}</div>
    </div>
  </section>
  ${ctaSectionHTML('cta.formation.title','cta.formation.sub')}`;
}

/* ================================================================
   FORMATION VOLET
   ================================================================ */
function renderFormationVolet(app, voletSlug){
  const volet = FORMATIONS[voletSlug];
  if(!volet){ app.innerHTML = `<div class="not-found sec container"><h2>${t('not_found.volet')}</h2></div>`; return; }

  const ssHTML = Object.entries(volet.sous_services).map(([ssKey, ss]) => {
    const modulesHTML = (ss.modules||[]).map(m => `
      <a href="#/formation/${voletSlug}/${ssKey}/${m.slug}" class="module-card">
        <h3>${getL(m,'label')}</h3>
        <p style="font-size:.85rem;line-height:1.5">${getL(m,'pitch').split('.')[0]}.</p>
        <div class="module-tag">${getL(volet,'label')} · ${getL(ss,'label')}</div>
      </a>`).join('');
    return `<div class="sous-service-section">
      <span class="sous-label">${getL(ss,'label')}</span>
      <div class="modules-grid">${modulesHTML}</div>
    </div>`;
  }).join('');

  const voletLabel = getL(volet,'label');
  app.innerHTML = `
  <div class="hub-header sec sec-dark">
    <div class="container">
      <div class="breadcrumb">
        <a href="#/">${t('bc.home')}</a><span class="sep">→</span>
        <a href="#/formation">${t('bc.formations')}</a><span class="sep">→</span>
        <span class="current">${voletLabel}</span>
      </div>
      <span class="sec-label">${voletLabel}</span>
      <h1>${voletLabel.toUpperCase()}</h1>
      <p style="margin-top:1rem;max-width:600px">${getL(volet,'desc')}</p>
    </div>
  </div>
  <section class="sec">
    <div class="container">${ssHTML}</div>
  </section>
  ${ctaSectionHTML('cta.programme.title','cta.programme.sub')}`;
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
  if(!mod) return app.innerHTML = `<div class="not-found sec container"><h2>${t('not_found.module')}</h2></div>`;

  const key = `${voletSlug}/${ssSlug}/${moduleSlug}`;
  const fc = (typeof FORMATIONS_CONTENT !== 'undefined') ? FORMATIONS_CONTENT[key] : null;

  function pourQuiHTML(){
    if(!fc || !fc.pour_qui) return '';
    return `<div class="section-block">
      <div class="container">
        <span class="sec-label">${t('lbl.pour_qui')}</span>
        <h3>${t('h3.pour_qui')}</h3>
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
        <span class="sec-label">${t('lbl.deroulement')}</span>
        <h3>${t('h3.deroulement')}</h3>
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
        <span class="sec-label">${t('lbl.exercices')}</span>
        <h3>${t('h3.exercices')}</h3>
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
        <span class="sec-label">${t('lbl.resultats')}</span>
        <h3>${t('h3.resultats')}</h3>
        <ul class="resultats-list">
          ${fc.resultats.map(r => `<li class="res-item">
            <span class="res-check">✓</span>
            <div class="res-text"><strong>${r.titre}</strong>${r.desc}</div>
          </li>`).join('')}
        </ul>
      </div>
    </div>`;
  }

  const modLabel = getL(mod,'label');
  app.innerHTML = `
  <div class="page-hero">
    <div class="container">
      <div class="breadcrumb">
        <a href="#/">${t('bc.home')}</a><span class="sep">→</span>
        <a href="#/formation">${t('bc.formations')}</a><span class="sep">→</span>
        <a href="#/formation/${voletSlug}">${getL(volet,'label')}</a><span class="sep">→</span>
        <span class="current">${modLabel}</span>
      </div>
      <div class="pill r" style="margin-bottom:1rem">${getL(ss,'label')}</div>
      <h1>${modLabel.toUpperCase()}</h1>
      <p style="margin-top:1.25rem;font-size:1.05rem;line-height:1.85;max-width:780px;color:var(--ink2)">${getL(mod,'pitch')}</p>
      <div class="format-box" style="margin-top:1.5rem">${getL(mod,'format')}</div>
    </div>
  </div>

  ${pourQuiHTML()}

  <div class="section-block">
    <div class="container">
      <span class="sec-label">${t('lbl.content')}</span>
      <h3>${t('h3.programme')}</h3>
      <ul class="programme-list">
        ${(getL(mod,'programme')||[]).map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>
  </div>

  ${deroulementHTML()}
  ${exercicesHTML()}
  ${resultatsHTML()}

  <div class="section-block">
    <div class="container">
      <span class="sec-label">${t('lbl.terrain')}</span>
      <h3>${t('h3.references')}</h3>
      <p style="max-width:700px;font-size:.97rem">${getL(mod,'experiences')}</p>
    </div>
  </div>

  <div class="section-block sec-dark">
    <div class="container">
      <span class="sec-label">${t('lbl.methods')}</span>
      <h3>${t('h3.savoir_faire')}</h3>
      <div class="savoir-tags">
        ${(getL(mod,'savoir_faire')||[]).map(s => `<span class="savoir-tag">${s}</span>`).join('')}
      </div>
    </div>
  </div>

  ${relatedArticles(mod.articles_lies)}

  ${ctaSectionHTML('cta.devis.title','cta.devis.sub')}`;
}

/* ================================================================
   CONSULTING HUB
   ================================================================ */
function renderConsultingHub(app){
  const missionsHTML = CONSULTING.map((m,i) => `
    <a href="#/consulting/${m.slug}" class="consulting-card">
      <div class="mission-num">0${i+1}</div>
      <h3>${getL(m,'label')}</h3>
      <p>${getL(m,'pitch').split('.')[0]}.</p>
    </a>`).join('');

  app.innerHTML = `
  <div class="hub-header sec sec-dark">
    <div class="container">
      <div class="breadcrumb"><a href="#/">${t('bc.home')}</a><span class="sep">→</span><span class="current">Consulting</span></div>
      <span class="sec-label">${t('lbl.consulting_missions')}</span>
      <h1>${t('h2.consulting_hub')}</h1>
      <p style="margin-top:1rem;max-width:600px">${t('consulting.desc')}</p>
    </div>
  </div>
  <section class="sec">
    <div class="container">
      <div class="consulting-grid">${missionsHTML}</div>
    </div>
  </section>
  ${ctaSectionHTML('cta.mission.title','cta.mission.sub')}`;
}

/* ================================================================
   CONSULTING MISSION
   ================================================================ */
function renderConsultingMission(app, slug){
  const mission = CONSULTING.find(m => m.slug === slug);
  if(!mission){ app.innerHTML = `<div class="not-found sec container"><h2>${t('not_found.mission')}</h2></div>`; return; }
  const idx = CONSULTING.indexOf(mission);
  const missionLabel = getL(mission,'label');

  app.innerHTML = `
  <div class="page-hero">
    <div class="container">
      <div class="breadcrumb">
        <a href="#/">${t('bc.home')}</a><span class="sep">→</span>
        <a href="#/consulting">Consulting</a><span class="sep">→</span>
        <span class="current">${missionLabel}</span>
      </div>
      <div class="pill r" style="margin-bottom:1rem">Mission 0${idx+1}</div>
      <h1>${missionLabel.toUpperCase()}</h1>
    </div>
  </div>

  <div class="section-block">
    <div class="container">
      <span class="sec-label">${t('lbl.pitch')}</span>
      <p style="font-size:1.05rem;line-height:1.85;max-width:800px;color:var(--ink)">${getL(mission,'pitch')}</p>
    </div>
  </div>

  <div class="section-block sec-dark">
    <div class="container">
      <span class="sec-label">${t('lbl.scope')}</span>
      <h3>${t('h3.scope')}</h3>
      <ul class="perimeter-list">
        ${(getL(mission,'perimetre')||[]).map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>
  </div>

  <div class="section-block">
    <div class="container">
      <span class="sec-label">${t('lbl.phases')}</span>
      <h3>${t('h3.phases')}</h3>
      <div class="deroulement">
        ${(getL(mission,'deroulement')||[]).map((step,i) => `
          <div class="deroulement-step">
            <span class="step-num">0${i+1}</span>
            <span class="step-label">${step}</span>
          </div>`).join('')}
      </div>
    </div>
  </div>

  <div class="section-block sec-dark">
    <div class="container">
      <span class="sec-label">${t('lbl.deliverables')}</span>
      <h3>${t('h3.deliverables')}</h3>
      <p style="max-width:700px">${getL(mission,'livrables')}</p>
    </div>
  </div>

  ${relatedArticles(mission.articles_lies)}

  ${ctaSectionHTML('cta.this_mission.title','cta.this_mission.sub')}`;
}

/* ================================================================
   BLOG LIST
   ================================================================ */
function renderBlog(app){
  const cats = ['langues','interculturel','ia','communication','veille','vision'];
  const filtersHTML = `<div class="blog-filters">
    <button class="filter-btn active" data-cat="">${t('blog.all')}</button>
    ${cats.map(c => `<button class="filter-btn" data-cat="${c}">${catLabel(c)}</button>`).join('')}
  </div>`;

  const sorted = [...BLOG].sort((a,b) => b.date.localeCompare(a.date));

  app.innerHTML = `
  <div class="hub-header sec sec-dark">
    <div class="container">
      <div class="breadcrumb"><a href="#/">${t('bc.home')}</a><span class="sep">→</span><span class="current">Blog</span></div>
      <span class="sec-label">${t('lbl.blog_nav')}</span>
      <h1>${t('h2.blog_hub')}</h1>
      <p style="margin-top:1rem;max-width:600px">${t('blog.hub_desc')}</p>
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
  if(!art){ app.innerHTML = `<div class="not-found sec container"><h2>${t('blog.not_found')}</h2></div>`; return; }

  const related = BLOG.filter(b => b.categorie === art.categorie && b.slug !== art.slug).slice(0,3);
  const content = (typeof BLOG_CONTENT !== 'undefined' && BLOG_CONTENT[art.slug])
    ? BLOG_CONTENT[art.slug]
    : `<p style="color:var(--ink3);font-style:italic;border-left:3px solid var(--border);padding-left:1rem">${t('blog.writing')}</p>`;

  const coverUrl = BLOG_PHOTOS[art.slug];
  app.innerHTML = `
  <div class="art-header">
    <div class="art-header-inner">
      <div class="breadcrumb">
        <a href="#/">${t('bc.home')}</a><span class="sep">→</span>
        <a href="#/blog">Blog</a><span class="sep">→</span>
        <span class="current">${catLabel(art.categorie)}</span>
      </div>
      <div class="art-meta">
        <span class="art-cat-label">${catLabel(art.categorie)}</span>
        <span class="art-date">${art.date} · ${art.temps_lecture} ${t('blog.min_read')}</span>
      </div>
      <h1 class="art-title">${art.titre.toUpperCase()}</h1>
      <p class="art-chapeau">${art.chapeau}</p>
      <div class="art-tags">${(art.tags||[]).map(tag => `<span class="pill w">${tag}</span>`).join('')}</div>
    </div>
  </div>

  ${coverUrl ? `<figure class="art-cover"><img src="${coverUrl}" alt="${art.titre}" loading="lazy"></figure>` : ''}

  <div class="art-body-wrap">
    <div class="art-body">${content}</div>
  </div>

  ${related.length ? `<section class="sec sec-dark">
    <div class="container">
      <span class="sec-label">${t('lbl.similar_cat')}</span>
      <h3 style="margin-bottom:1.5rem">${t('h3.similar')}</h3>
      <div class="related-grid">${related.map(a => blogCardHTML(a,true)).join('')}</div>
    </div>
  </section>` : ''}

  ${ctaSectionHTML('cta.question.title','cta.question.sub')}`;
}

/* ================================================================
   CONTACT
   ================================================================ */
function renderContact(app){
  app.innerHTML = `
  <div class="hub-header sec sec-dark">
    <div class="container">
      <div class="breadcrumb"><a href="#/">${t('bc.home')}</a><span class="sep">→</span><span class="current">Contact</span></div>
      <span class="sec-label">${t('lbl.get_in_touch')}</span>
      <h1>${t('contact.h1')}</h1>
    </div>
  </div>
  <section class="sec">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-left">
          <span class="sec-label">${t('contact.why')}</span>
          <h3>${t('contact.h3')}</h3>
          <ul class="ci-list">
            <li>${t('contact.li1')}</li>
            <li>${t('contact.li2')}</li>
            <li>${t('contact.li3')}</li>
            <li>${t('contact.li4')}</li>
            <li>${t('contact.li5')}</li>
          </ul>
          <div style="margin-top:3rem">
            <p style="font-size:.85rem;color:var(--ink2)">${t('contact.delay')}</p>
          </div>
        </div>
        <div class="contact-right">
          <form id="contact-form">
            <input type="hidden" name="access_key" value="VOTRE_CLE_WEB3FORMS">
            <input type="hidden" name="subject" value="Nouveau message — Marcus Detrez F&C">
            <input type="hidden" name="from_name" value="Site marcusdetrez.fr">
            <input type="checkbox" name="botcheck" style="display:none">
            <div class="form-row">
              <div class="fg"><label>${t('contact.first')}</label><input type="text" name="prenom" required></div>
              <div class="fg"><label>${t('contact.last')}</label><input type="text" name="nom" required></div>
            </div>
            <div class="fg"><label>Email *</label><input type="email" name="email" required></div>
            <div class="fg"><label>${t('contact.org')}</label><input type="text" name="organisation"></div>
            <div class="fg">
              <label>${t('contact.subject')}</label>
              <select name="objet" required>
                <option value="">${t('contact.select')}</option>
                <option value="Formation — devis">${t('contact.opt1')}</option>
                <option value="Mission consulting">${t('contact.opt2')}</option>
                <option value="Partenariat institutionnel">${t('contact.opt3')}</option>
                <option value="Autre">${t('contact.opt4')}</option>
              </select>
            </div>
            <div class="fg">
              <label>${t('contact.msg')}</label>
              <textarea name="message" required placeholder="${t('contact.placeholder')}"></textarea>
            </div>
            <button type="submit" id="contact-btn" class="btn-red">${t('contact.send')}</button>
            <div id="contact-result" style="display:none;margin-top:1.5rem;padding:1rem 1.25rem;border-left:3px solid var(--red);font-size:.9rem"></div>
          </form>
        </div>
      </div>
    </div>
  </section>`;

  const form = document.getElementById('contact-form');
  const btn  = document.getElementById('contact-btn');
  const result = document.getElementById('contact-result');

  form.addEventListener('submit', async function(e){
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = t('contact.sending');
    result.style.display = 'none';

    const data = new FormData(form);
    try {
      const res  = await fetch('https://api.web3forms.com/submit', { method:'POST', body:data });
      const json = await res.json();
      if(json.success){
        result.style.borderColor = '#22c55e';
        result.textContent = t('contact.ok');
        result.style.display = 'block';
        form.reset();
        btn.disabled = false;
        btn.textContent = t('contact.send');
      } else {
        throw new Error(json.message || 'Error');
      }
    } catch(err){
      result.style.borderColor = 'var(--red)';
      result.textContent = t('contact.err');
      result.style.display = 'block';
      btn.disabled = false;
      btn.textContent = t('contact.send');
    }
  });
}
