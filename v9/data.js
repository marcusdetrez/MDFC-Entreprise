/* ================================================================
   MARCUS DETREZ F&C — v9 — data.js
   FORMATIONS · CONSULTING · BLOG
   ================================================================ */

const FORMATIONS = {
  langues: {
    slug: 'langues',
    label_fr: 'Langues étrangères', label_en: 'Foreign Languages',
    icon: '語',
    desc_fr: 'Anglais, Français, Suédois, Norvégien, Mandarin — formations professionnelles certifiantes et sur-mesure pour vos équipes et vos projets.',
    desc_en: 'English, French, Swedish, Norwegian, Mandarin — professional certified language training for your teams.',
    sous_services: {
      anglais: {
        slug: 'anglais',
        label_fr: 'Anglais professionnel', label_en: 'Professional English',
        modules: [
          {
            slug: 'meetings',
            label_fr: 'Meetings & réunions en anglais', label_en: 'Meetings in English',
            pitch_fr: 'Vous maîtrisez l\'anglais. Mais en réunion internationale, quelque chose coince — le rythme, les interventions, la précision. Cette formation règle ça. En 1 à 2 jours, vos équipes savent prendre la parole, structurer une intervention, gérer les désaccords et sortir d\'une réunion avec des décisions claires.',
            programme_fr: [
              'Structures de réunion en anglais (agenda, opening, chairing, closing)',
              'Techniques d\'intervention et de prise de parole',
              'Vocabulaire de la décision, du désaccord poli, de la synthèse',
              'Gestion des situations tendues en anglais',
              'Simulation de réunions à enjeux'
            ],
            experiences_fr: 'Intervention en grandes écoles (EM Normandie, Mines Paris PSL, ESAIP) sur des modules Business English pour ingénieurs et managers. Simulation de réunions internationales avec équipes franco-anglo-scandinaves.',
            savoir_faire_fr: [
              'Approche par objectifs communicatifs (pas par règles de grammaire)',
              'Méthode propriétaire d\'ancrage syntaxique 5 piliers',
              'Jeux de rôle à haute pression, feedback immédiat',
              'Enregistrement et analyse des productions orales'
            ],
            format_fr: '1 à 2 jours · Présentiel ou distanciel · Individuel ou groupe jusqu\'à 12',
            articles_lies: ['reunions-anglais-erreurs-francophones']
          },
          {
            slug: 'business',
            label_fr: 'Business English', label_en: 'Business English',
            pitch_fr: 'Le Business English ne s\'apprend pas dans un manuel. Il se maîtrise en situation. Emails, négociations, présentations, calls — cette formation couvre l\'intégralité du spectre de communication professionnelle en anglais, de A2 à C1.',
            programme_fr: [
              'Communication écrite : emails, rapports, synthèses',
              'Communication orale : calls, présentations, pitches',
              'Registres formels et informels selon les interlocuteurs',
              'Vocabulaire sectoriel (finance, tech, RH, commercial)',
              'Correction phonétique et fluidité'
            ],
            experiences_fr: 'Formateur Business English depuis 2016 dans 7 écoles supérieures françaises. +3 500 apprenants formés sur des modules Business English certifiants et non-certifiants.',
            savoir_faire_fr: [
              'Ingénierie de formation sur-mesure selon secteur et niveau',
              'Approche par compétences communicatives',
              'Méthode propriétaire 5 piliers',
              'Taxonomie de Bloom appliquée aux objectifs langagiers'
            ],
            format_fr: '1 journée à 6 mois · Présentiel ou distanciel · Individuel, groupe, intra-entreprise',
            articles_lies: ['reunions-anglais-erreurs-francophones']
          },
          {
            slug: 'toeic',
            label_fr: 'TOEIC / TOEFL / Linguaskills', label_en: 'TOEIC / TOEFL / Linguaskills',
            pitch_fr: 'Certification en vue. Délai serré. Pas de temps à perdre. Cette préparation est calibrée pour maximiser votre score en un minimum de sessions — pas pour vous faire réviser pendant 6 mois ce que vous savez déjà.',
            programme_fr: [
              'Audit de niveau et diagnostic des points faibles',
              'Stratégies d\'examen par section (listening, reading, speaking, writing)',
              'Entraînement sur sujets officiels chronométrés',
              'Techniques de gestion du temps et des pièges récurrents',
              'Simulation d\'examen blanc avec debriefing'
            ],
            experiences_fr: 'Préparation TOEIC pour étudiants grandes écoles (EM Normandie, Euridis, Albert School). Développement d\'une banque de questions TOEIC Part 2 et d\'exercices de listening calibrés par niveau de difficulté.',
            savoir_faire_fr: [
              'Connaissance approfondie des formats TOEIC, TOEFL iBT, Linguaskills',
              'Ingénierie de questions par niveau (A2 à C1)',
              'Approche par stratégies d\'examen, pas par contenu généraliste',
              'Suivi de progression par KPIs mesurables'
            ],
            format_fr: '8h à 30h selon certification visée · Distanciel recommandé · Individuel ou groupe de 6 max',
            articles_lies: ['toeic-strategie-score-800']
          },
          {
            slug: 'sales',
            label_fr: 'Sales English', label_en: 'Sales English',
            pitch_fr: 'Vendre en anglais, c\'est autre chose que parler anglais. Prospecter, convaincre, closer, gérer les objections, relancer — tout ça dans une langue étrangère face à des acheteurs natifs ou internationaux. Cette formation donne les outils pour ne plus subir la négociation en anglais.',
            programme_fr: [
              'Vocabulaire et structures de la vente en anglais',
              'Techniques de cold call et email de prospection',
              'Présentation d\'une offre, pitch produit / service',
              'Gestion des objections et des négociations de prix',
              'Closing et suivi client en anglais'
            ],
            experiences_fr: 'Formation d\'équipes commerciales en anglais des affaires. Intervention à Euridis Business School sur des modules anglais commercial pour futurs commerciaux B2B.',
            savoir_faire_fr: [
              'Anglais des affaires orienté performance commerciale',
              'Simulation de cycles de vente complets',
              'Scripts et cadres de communication adaptés au secteur client'
            ],
            format_fr: '1 à 3 jours · Présentiel recommandé · Groupe commercial ou individuel',
            articles_lies: ['techniques-vente-consultative-b2b']
          },
          {
            slug: 'public-speaking',
            label_fr: 'Public speaking en anglais', label_en: 'Public Speaking in English',
            pitch_fr: 'Prendre la parole en anglais devant un public international est un exercice à part entière. Pas juste de l\'anglais — de la présence, de la structure, de l\'impact. Cette formation transforme un locuteur hésitant en orateur qui commande l\'attention.',
            programme_fr: [
              'Structure d\'une intervention en anglais (opening, body, closing)',
              'Techniques de présence physique et vocale',
              'Gestion du stress et des imprévus',
              'Storytelling en anglais',
              'Q&A en anglais — gérer les questions difficiles',
              'Enregistrement et analyse vidéo'
            ],
            experiences_fr: 'Modules de prise de parole en anglais dans les grandes écoles. Coaching individuel de dirigeants et cadres avant interventions internationales.',
            savoir_faire_fr: [
              'Techniques rhétoriques adaptées à l\'anglais',
              'Feedback vidéo immédiat',
              'Approche corporelle et vocale'
            ],
            format_fr: '1 à 2 jours · Présentiel · Individuel ou groupe de 8 max',
            articles_lies: ['prise-de-parole-secrets-meilleurs-orateurs']
          },
          {
            slug: 'negociation',
            label_fr: 'Negotiation techniques in English', label_en: 'Negotiation in English',
            pitch_fr: 'La négociation en anglais a ses propres codes — indirection britannique, directness américaine, styles nordiques, asiatiques. Cette formation arme vos équipes pour négocier efficacement en anglais quel que soit l\'interlocuteur.',
            programme_fr: [
              'Styles de négociation anglophones (UK, US, Australie, Inde…)',
              'Vocabulaire et structures de la négociation',
              'Techniques de positionnement, ancrage, concession',
              'Gestion des tensions et des blocages',
              'Simulation de négociations à enjeux réels'
            ],
            experiences_fr: 'Formation sur les fondamentaux de la négociation (ESSEC, certifié Coursera). Intervention interculturelle incluant les styles de négociation cross-culturels dans plusieurs grandes écoles.',
            savoir_faire_fr: [
              'Modèles de négociation cross-culturelle (Harvard, IRENE/ESSEC)',
              'Intelligence culturelle appliquée à la négociation',
              'Jeux de rôle haute pression avec debriefing structuré'
            ],
            format_fr: '1 à 2 jours · Présentiel recommandé · Groupe de 6 à 12',
            articles_lies: ['negociation-anglais-face-natif']
          }
        ]
      },
      francais: {
        slug: 'francais',
        label_fr: 'Français professionnel', label_en: 'Professional French',
        modules: [
          {
            slug: 'prise-de-parole',
            label_fr: 'Prise de parole en public', label_en: 'Public Speaking',
            pitch_fr: 'Le français est une langue de précision et de rhétorique. Savoir s\'en servir en public — en réunion, en conférence, face à un client ou un jury — est une compétence qui se travaille. Cette formation donne les outils pour parler avec autorité et clarté.',
            programme_fr: [
              'Structure d\'une intervention en français',
              'Travail vocal et corporel',
              'Argumentation et rhétorique française',
              'Gestion du stress et des silences',
              'Improvisation et Q&A'
            ],
            experiences_fr: 'Modules de prise de parole dans les grandes écoles françaises. Coaching de dirigeants et d\'étudiants en situation de présentation haute pression.',
            savoir_faire_fr: [
              'Rhétorique classique appliquée au contexte professionnel',
              'Feedback vidéo et analyse des enregistrements',
              'Gestion du trac — techniques de régulation émotionnelle'
            ],
            format_fr: '1 journée · Présentiel · Individuel ou groupe de 8 max',
            articles_lies: ['prise-de-parole-secrets-meilleurs-orateurs']
          },
          {
            slug: 'remise-a-niveau',
            label_fr: 'Remise à niveau professionnel', label_en: 'French Proficiency Reset',
            pitch_fr: 'Pour les non-natifs en contexte professionnel français, ou pour les natifs dont l\'écrit professionnel laisse à désirer. Pas de honte — c\'est une compétence comme une autre. On repart des bases et on monte vite.',
            programme_fr: [
              'Diagnostic de niveau et identification des lacunes prioritaires',
              'Grammaire fonctionnelle appliquée au contexte professionnel',
              'Orthographe et syntaxe de l\'écrit professionnel',
              'Expression orale claire et structurée'
            ],
            experiences_fr: 'Formation de cadres non-francophones en immersion dans des environnements professionnels français. Modules de remise à niveau pour apprenants FLE en contexte grande école.',
            savoir_faire_fr: [
              'Diagnostic de compétences langagières',
              'Approche par besoins immédiats',
              'Progression rapide par ancrage contextuel'
            ],
            format_fr: '4h à 20h selon niveau · Distanciel possible · Individuel',
            articles_lies: []
          }
        ]
      },
      suedois: {
        slug: 'suedois',
        label_fr: 'Suédois professionnel', label_en: 'Professional Swedish',
        modules: [
          {
            slug: 'business',
            label_fr: 'Business Swedish', label_en: 'Business Swedish',
            pitch_fr: 'Le suédois des affaires a ses codes — formules, registres, culture de la réunion scandinave (consensus, égalité, sobriété). Certifié Pipplet C2, j\'enseigne le suédois professionnel comme peu d\'autres formateurs en France peuvent le faire.',
            programme_fr: [
              'Vocabulaire professionnel suédois par secteur',
              'Communication écrite : emails, rapports, contrats',
              'Communication orale : réunions, présentations, appels',
              'Culture d\'affaires suédoise et nordique',
              'Exercices de traduction et de reformulation'
            ],
            experiences_fr: 'Certification Pipplet FLEX C2- en suédois (oral C1, écrit C2). Formation de professionnels des secteurs maritime et énergétique aux langues nordiques.',
            savoir_faire_fr: [
              'Maîtrise C2 du suédois — rare en France',
              'Contexte sectoriel : maritime, offshore, industrie',
              'Pédagogie contrastive (français/suédois)'
            ],
            format_fr: 'Modules de 8h à 30h · Distanciel ou présentiel · Individuel ou groupe de 6 max',
            articles_lies: ['suedois-professionnel-investissement-linguistique']
          },
          {
            slug: 'colloquial',
            label_fr: 'Colloquial Swedish', label_en: 'Colloquial Swedish',
            pitch_fr: 'Le suédois courant — celui qu\'on parle vraiment en Suède, avec ses raccourcis, ses expressions, son rythme. Pour ceux qui veulent dépasser le suédois de manuel.',
            programme_fr: [
              'Expressions idiomatiques et langage courant',
              'Prononciation et musicalité du suédois parlé',
              'Registres informels vs formels',
              'Compréhension des accents régionaux principaux'
            ],
            experiences_fr: 'Connaissance native du suédois courant. Séjours prolongés en Suède et réseau de locuteurs natifs.',
            savoir_faire_fr: ['Phonologie du suédois', 'Variation dialectale nordique', 'Méthode immersive audio-orale'],
            format_fr: 'Modules de 8h · Distanciel · Individuel ou binôme',
            articles_lies: ['culture-affaires-suedoise-codes']
          },
          {
            slug: 'institutional',
            label_fr: 'Institutional Swedish', label_en: 'Institutional Swedish',
            pitch_fr: 'Le suédois institutionnel — administration, juridique, politique, diplomatique. Pour ceux qui travaillent avec des institutions suédoises ou nordiques.',
            programme_fr: [
              'Vocabulaire institutionnel et administratif suédois',
              'Lecture et compréhension de documents officiels',
              'Rédaction de correspondances formelles',
              'Culture institutionnelle suédoise'
            ],
            experiences_fr: 'Connaissance approfondie des institutions suédoises et nordiques. Suivi de l\'actualité politique et institutionnelle scandinave.',
            savoir_faire_fr: ['Registre institutionnel nordique', 'Traduction juridique suédois/français', 'Intelligence culturelle institutionnelle'],
            format_fr: 'Modules de 8h à 16h · Distanciel · Individuel',
            articles_lies: []
          }
        ]
      },
      norvegien: {
        slug: 'norvegien',
        label_fr: 'Norvégien professionnel', label_en: 'Professional Norwegian',
        modules: [
          {
            slug: 'business',
            label_fr: 'Business Norwegian', label_en: 'Business Norwegian',
            pitch_fr: 'Le norvégien des affaires — secteurs maritime, offshore, pêche, énergie. Une langue rare, un marché sous-exploité, un avantage compétitif réel pour les entreprises françaises qui l\'osent.',
            programme_fr: [
              'Vocabulaire professionnel norvégien par secteur',
              'Communication écrite et orale en contexte d\'affaires',
              'Culture d\'affaires norvégienne (Bokmål)',
              'Différences clés avec le suédois pour les apprenants bilingues nordiques'
            ],
            experiences_fr: 'Connaissance du norvégien professionnel et de la culture d\'affaires nordique. Réseau dans les secteurs maritime et énergétique norvégiens.',
            savoir_faire_fr: ['Bokmål vs Nynorsk — laquelle selon le contexte', 'Secteurs maritime, offshore, pêche, énergie', 'Pédagogie contrastive suédois/norvégien'],
            format_fr: 'Modules de 8h à 24h · Distanciel ou présentiel · Individuel ou groupe de 6 max',
            articles_lies: ['suedois-professionnel-investissement-linguistique']
          },
          {
            slug: 'colloquial',
            label_fr: 'Colloquial Norwegian', label_en: 'Colloquial Norwegian',
            pitch_fr: 'Le norvégien parlé, vivant. Expressions, humour, registres familiaux — pour ceux qui veulent fonctionner naturellement avec des Norvégiens.',
            programme_fr: [
              'Expressions idiomatiques norvégiennes',
              'Phonologie et rythme du norvégien oral',
              'Registres informels et humour culturel',
              'Dialectes principaux (Oslo, Bergen, Trondheim)'
            ],
            experiences_fr: 'Connaissance approfondie du norvégien courant et de la culture norvégienne.',
            savoir_faire_fr: ['Phonologie norvégienne', 'Variation dialectale', 'Méthode audio-orale immersive'],
            format_fr: 'Modules de 8h · Distanciel · Individuel ou binôme',
            articles_lies: ['culture-affaires-suedoise-codes']
          },
          {
            slug: 'institutional',
            label_fr: 'Institutional Norwegian', label_en: 'Institutional Norwegian',
            pitch_fr: 'Le norvégien administratif et institutionnel — pour les professionnels qui travaillent avec des administrations, collectivités ou institutions norvégiennes.',
            programme_fr: [
              'Vocabulaire administratif et institutionnel norvégien',
              'Lecture de documents officiels',
              'Correspondance formelle en norvégien',
              'Structure institutionnelle norvégienne'
            ],
            experiences_fr: 'Connaissance des institutions norvégiennes et de leur vocabulaire spécifique.',
            savoir_faire_fr: ['Registre institutionnel nordique', 'Documents administratifs et juridiques', 'Traduction fonctionnelle'],
            format_fr: 'Modules de 8h à 16h · Distanciel · Individuel',
            articles_lies: []
          }
        ]
      },
      mandarin: {
        slug: 'mandarin',
        label_fr: 'Chinois mandarin', label_en: 'Mandarin Chinese',
        modules: [
          {
            slug: 'logique',
            label_fr: 'La logique de la langue chinoise', label_en: 'The Logic of Chinese',
            pitch_fr: 'Le mandarin n\'est pas difficile — il est différent. Pas de conjugaison, pas de déclinaison, pas d\'alphabet phonétique latin. Mais une logique interne d\'une cohérence redoutable. Cette formation donne les clés de compréhension de la structure du mandarin pour partir sur des bases solides.',
            programme_fr: [
              'Système tonal — les 4 tons + ton neutre',
              'Structure de la phrase chinoise',
              'Pinyin — romanisation et prononciation',
              'Logique des caractères — clés et radicaux',
              'Premiers patterns de conversation'
            ],
            experiences_fr: 'HSK 4 certifié (248/300, 80e percentile). Connaissance approfondie de la structure du mandarin et des outils d\'apprentissage.',
            savoir_faire_fr: [
              'Maîtrise HSK 4 certifiée',
              'Pédagogie contrastive mandarin/langues européennes',
              'Systèmes mnémotechniques pour les tons',
              'Outils numériques d\'apprentissage du mandarin'
            ],
            format_fr: '8h · Distanciel · Individuel ou groupe de 6 max',
            articles_lies: ['hsk4-six-mois-methode']
          },
          {
            slug: 'ecriture',
            label_fr: 'Écrire en chinois', label_en: 'Writing in Chinese',
            pitch_fr: 'Les caractères chinois effrayent. À tort. Ils ont une logique, une histoire, une structure. Cette formation initie à l\'écriture des caractères les plus courants et donne les outils pour continuer seul.',
            programme_fr: [
              'Ordre des traits — règles fondamentales',
              'Les 214 clés (radicaux) de base',
              'Caractères simplifiés vs traditionnels',
              'Les 300 caractères les plus fréquents',
              'Outils numériques pour apprendre l\'écriture'
            ],
            experiences_fr: 'Pratique régulière de l\'écriture chinoise. HSK 4 incluant la composante écriture (caractères simplifiés).',
            savoir_faire_fr: [
              'Logique des radicaux chinois',
              'Mnémotechnique visuelle pour les caractères',
              'Applications et outils numériques recommandés'
            ],
            format_fr: '4h à 8h · Distanciel · Individuel',
            articles_lies: ['caracteres-chinois-logique-apprentissage']
          }
        ]
      }
    }
  },

  interculturel: {
    slug: 'interculturel',
    label_fr: 'Interculturalité', label_en: 'Interculturality',
    icon: '⊕',
    desc_fr: 'Négociation cross-culturelle, management multiculturel, expansion internationale — les outils pour fonctionner dans la diversité.',
    desc_en: 'Cross-cultural negotiation, multicultural management, international expansion.',
    sous_services: {
      core: {
        slug: 'core',
        label_fr: 'Formations interculturelles', label_en: 'Intercultural Training',
        modules: [
          {
            slug: 'negociation-cross',
            label_fr: 'Négociation cross-culturelle en contexte business', label_en: 'Cross-Cultural Business Negotiation',
            pitch_fr: 'Vous négociez avec des Chinois, des Nordiques, des Anglo-Saxons, des Africains. Chacun a ses codes, ses silences, ses façons de dire non sans le dire. Cette formation décode les styles de négociation des principales cultures d\'affaires mondiales.',
            programme_fr: [
              'Modèles de communication cross-culturelle (haute et basse contextualité)',
              'Styles de négociation par zone géographique (Asie, Nordiques, Anglo-Saxons, Latins, Moyen-Orient)',
              'Signaux non-verbaux et silences selon les cultures',
              'Erreurs fatales à éviter par culture',
              'Simulation de négociations cross-culturelles'
            ],
            experiences_fr: 'Module interculturel enseigné à Albert School. Accompagnement d\'équipes sur des marchés asiatiques et nordiques.',
            savoir_faire_fr: [
              'Modèles cross-culturels (Hofstede, Meyer, Hall)',
              'Intelligence culturelle (CQ)',
              'Styles de négociation comparés',
              'Débriefing structuré des simulations'
            ],
            format_fr: '1 à 2 jours · Présentiel recommandé · Groupe de 6 à 15',
            articles_lies: ['business-chine-codes-culturels', 'culture-affaires-suedoise-codes']
          },
          {
            slug: 'management-multiculturel',
            label_fr: 'Management d\'équipes multiculturelles', label_en: 'Multicultural Team Management',
            pitch_fr: 'Manager une équipe multiculturelle, c\'est manager plusieurs réalités en même temps. Rapport à l\'autorité, au temps, au conflit, à la hiérarchie — tout varie selon les cultures. Cette formation donne les outils pour aligner sans uniformiser.',
            programme_fr: [
              'Dimensions culturelles et leur impact sur le management',
              'Adapter son style de management selon les profils culturels',
              'Gestion des conflits interculturels',
              'Communication interne dans un contexte multiculturel',
              'Construire une culture d\'équipe inclusive'
            ],
            experiences_fr: 'Formation de managers d\'équipes internationales dans les grandes écoles et entreprises. Intervention sur les marchés asiatiques, nordiques et africains.',
            savoir_faire_fr: [
              'Modèles culturels appliqués au management',
              'Diagnostic de style managérial cross-culturel',
              'Outils de médiation interculturelle'
            ],
            format_fr: '1 à 2 jours · Présentiel · Groupe de 8 à 20',
            articles_lies: ['management-interculturel-erreurs-managers-francais', 'intelligence-culturelle-dirigeants-internationaux']
          },
          {
            slug: 'expansion-internationale',
            label_fr: 'Préparer son expansion internationale', label_en: 'Preparing International Expansion',
            pitch_fr: 'Avant d\'entrer sur un marché étranger, il faut comprendre comment ce marché pense. Cette formation prépare les équipes dirigeantes à l\'entrée sur un nouveau marché — culturellement, linguistiquement, stratégiquement.',
            programme_fr: [
              'Analyse culturelle du marché cible',
              'Adaptation du discours commercial et marketing',
              'Codes relationnels et protocoles d\'affaires locaux',
              'Erreurs classiques des entreprises françaises à l\'international',
              'Construction d\'un plan d\'entrée culturellement cohérent'
            ],
            experiences_fr: 'Conseil à l\'internationalisation pour PME et ETI françaises sur les marchés chinois, nordiques et francophones.',
            savoir_faire_fr: [
              'Analyse marchés Asie du Nord-Est et Scandinavie',
              'Adaptation communication B2B cross-culturelle',
              'Réseau de partenaires locaux qualifiés'
            ],
            format_fr: '1 journée · Présentiel · Comité de direction ou équipe commerciale',
            articles_lies: ['expansion-internationale-erreurs-culturelles']
          }
        ]
      }
    }
  },

  ia: {
    slug: 'ia',
    label_fr: 'IA & nouvelles technologies', label_en: 'AI & New Technologies',
    icon: '⌁',
    desc_fr: 'Transformation digitale, IA appliquée aux métiers, intégration des outils IA dans les équipes.',
    desc_en: 'Digital transformation, AI applied to professions, deploying AI tools in teams.',
    sous_services: {
      core: {
        slug: 'core',
        label_fr: 'Formations IA & Digital', label_en: 'AI & Digital Training',
        modules: [
          {
            slug: 'transformation-digitale',
            label_fr: 'Piloter sa transformation digitale', label_en: 'Leading Digital Transformation',
            pitch_fr: 'La transformation digitale ne se pilote pas avec des outils — elle se pilote avec une vision et une méthode. Cette formation donne aux dirigeants et managers les cadres pour comprendre, décider et agir sur leur transformation numérique sans se perdre dans le jargon.',
            programme_fr: [
              'Cartographie des enjeux de la transformation digitale',
              'Identifier les leviers prioritaires pour son organisation',
              'Gérer le changement humain dans la transformation',
              'IA, data, automatisation — ce qui change vraiment',
              'Construire une feuille de route actionnable'
            ],
            experiences_fr: 'Développement de plusieurs projets edtech intégrant l\'IA. Expérience de la transformation digitale dans des contextes formation, conseil et produit.',
            savoir_faire_fr: [
              'Architecture de produits numériques',
              'Conduite du changement organisationnel',
              'Frameworks de transformation digitale'
            ],
            format_fr: '1 journée · Présentiel · Comité de direction ou managers',
            articles_lies: ['transformation-digitale-pourquoi-echec']
          },
          {
            slug: 'ia-metiers',
            label_fr: 'IA appliquée à son métier', label_en: 'AI Applied to Your Profession',
            pitch_fr: 'ChatGPT, Copilot, Midjourney — vous en avez entendu parler. Mais comment ça s\'applique concrètement à votre activité ? Cette formation part de vos cas d\'usage réels et montre comment l\'IA peut vous faire gagner du temps, de la précision et de la compétitivité.',
            programme_fr: [
              'Panorama des outils IA par cas d\'usage professionnel',
              'Prompt engineering appliqué à votre secteur',
              'Automatisation de tâches répétitives',
              'Limites et risques de l\'IA en contexte professionnel',
              'Atelier pratique sur vos outils et workflows'
            ],
            experiences_fr: 'Développement de projets edtech avec les APIs Anthropic et OpenAI. Utilisation intensive des outils IA en contexte de production (formation, contenu, analyse).',
            savoir_faire_fr: [
              'Prompt engineering avancé (Claude, GPT, Gemini)',
              'Automatisation de workflows par l\'IA',
              'IA appliquée à la formation et au contenu',
              'Limites éthiques et pratiques de l\'IA'
            ],
            format_fr: '1 journée · Présentiel ou distanciel · Groupe de 6 à 15',
            articles_lies: ['ia-entreprise-ce-qui-change-vraiment', 'prompt-engineering-non-techniciens-guide']
          },
          {
            slug: 'outils-ia-equipes',
            label_fr: 'Intégrer les outils IA dans ses équipes', label_en: 'Deploying AI Tools in Teams',
            pitch_fr: 'L\'IA n\'est pas un outil individuel — c\'est un changement de façon de travailler collectivement. Cette formation accompagne les managers dans le déploiement et l\'adoption des outils IA au sein de leurs équipes.',
            programme_fr: [
              'Cartographie des outils IA adaptés à votre contexte',
              'Politique d\'usage de l\'IA en entreprise',
              'Formation des équipes à l\'usage responsable',
              'Mesurer le ROI des outils IA déployés',
              'Anticiper les résistances et les dérives'
            ],
            experiences_fr: 'Déploiement d\'outils IA dans des contextes de formation et de production de contenu multilingue.',
            savoir_faire_fr: [
              'Gouvernance IA en entreprise',
              'Change management autour des outils IA',
              'Évaluation ROI des solutions IA'
            ],
            format_fr: '1 à 2 jours · Présentiel · Équipe managériale',
            articles_lies: ['ia-entreprise-ce-qui-change-vraiment']
          }
        ]
      }
    }
  },

  communication: {
    slug: 'communication',
    label_fr: 'Communication', label_en: 'Communication',
    icon: '◎',
    desc_fr: 'Management de l\'humain, gestion de crise, techniques de vente, prise de parole — les compétences de communication qui font la différence.',
    desc_en: 'Human management, crisis communication, sales techniques, public speaking.',
    sous_services: {
      core: {
        slug: 'core',
        label_fr: 'Formations Communication', label_en: 'Communication Training',
        modules: [
          {
            slug: 'management-humain',
            label_fr: 'Management de l\'humain', label_en: 'Human Management',
            pitch_fr: 'Le management, ça s\'apprend. Pas dans les livres — sur le terrain. Cette formation donne les outils concrets pour manager des humains dans des contextes réels : pression, conflit, motivation, feedback, recrutement.',
            programme_fr: [
              'Styles de management et quand les utiliser',
              'Donner et recevoir du feedback efficacement',
              'Gérer les conflits et les personnalités difficiles',
              'Motiver sans manipuler',
              'Entretiens annuels, recadrage, montée en compétences'
            ],
            experiences_fr: 'Formation de managers et futurs managers dans les grandes écoles françaises. Coaching de cadres en prise de fonction.',
            savoir_faire_fr: [
              'Modèles de leadership situationnel',
              'Feedback structuré (SBI, COIN)',
              'Gestion des conflits et médiation'
            ],
            format_fr: '2 jours · Présentiel · Managers et futurs managers',
            articles_lies: ['management-interculturel-erreurs-managers-francais']
          },
          {
            slug: 'gestion-de-crise',
            label_fr: 'Gestion de crise & communication sous pression', label_en: 'Crisis Management & Communication',
            pitch_fr: 'La crise révèle les organisations. Celles qui ont préparé leur communication survivent. Les autres subissent. Cette formation prépare les décideurs à communiquer sous pression — en interne, en externe, face aux médias.',
            programme_fr: [
              'Anatomie d\'une crise de communication',
              'Les 10 premières heures — protocole d\'intervention',
              'Messages clés, porte-parole, tone of voice en crise',
              'Réseaux sociaux et gestion de l\'information en temps réel',
              'Simulation de crise avec media training'
            ],
            experiences_fr: 'Formation à la gestion de crise dans les grandes écoles. Développement de protocoles de communication de crise.',
            savoir_faire_fr: [
              'Anatomie des crises de communication',
              'Media training et gestion des porte-paroles',
              'Protocoles de communication d\'urgence'
            ],
            format_fr: '1 à 2 jours · Présentiel impératif · Comité de direction',
            articles_lies: ['communication-crise-dix-premieres-heures']
          },
          {
            slug: 'techniques-de-vente',
            label_fr: 'Techniques de vente & persuasion', label_en: 'Sales & Persuasion',
            pitch_fr: 'Vendre, c\'est convaincre. Convaincre, ça s\'apprend. Cette formation couvre les techniques de vente consultative, de persuasion éthique et de closing pour les commerciaux B2B et les dirigeants qui vendent leur vision.',
            programme_fr: [
              'Psychologie de la décision d\'achat',
              'Techniques de découverte client',
              'Argumentation et traitement des objections',
              'Techniques de closing',
              'Vente en contexte interculturel'
            ],
            experiences_fr: 'Formation commerciale dans les business schools françaises. Coaching de dirigeants sur leur pitch et leur discours de vente.',
            savoir_faire_fr: [
              'SPIN Selling et vente consultative',
              'Psychologie de la persuasion (Cialdini)',
              'Closing et gestion des objections avancée'
            ],
            format_fr: '1 à 2 jours · Présentiel · Équipes commerciales ou dirigeants',
            articles_lies: ['techniques-vente-consultative-b2b']
          },
          {
            slug: 'prise-de-parole',
            label_fr: 'Prise de parole en public', label_en: 'Public Speaking',
            pitch_fr: 'Parler en public est la compétence la plus sous-estimée du monde professionnel. Et la plus déterminante. Cette formation transforme les gens qui ont peur du micro en orateurs qui commandent l\'attention.',
            programme_fr: [
              'Gestion du trac et du stress de scène',
              'Structure d\'une intervention percutante',
              'Techniques vocales et corporelles',
              'Storytelling professionnel',
              'Improvisation et gestion des imprévus',
              'Enregistrement et feedback vidéo'
            ],
            experiences_fr: 'Formation à la prise de parole dans les grandes écoles françaises depuis 2016. Coaching individuel de cadres et dirigeants.',
            savoir_faire_fr: [
              'Techniques rhétoriques classiques et modernes',
              'Feedback vidéo immédiat',
              'Gestion du trac — méthodes corporelles et cognitives'
            ],
            format_fr: '1 à 2 jours · Présentiel · Individuel ou groupe de 8 max',
            articles_lies: ['prise-de-parole-secrets-meilleurs-orateurs']
          }
        ]
      }
    }
  },

  veille: {
    slug: 'veille',
    label_fr: 'Veille des marchés', label_en: 'Market Intelligence',
    icon: '◈',
    desc_fr: 'Veille stratégique, analyse concurrentielle, intelligence sectorielle — les méthodes pour ne plus naviguer à l\'aveugle.',
    desc_en: 'Strategic monitoring, competitive analysis, sectoral intelligence.',
    sous_services: {
      core: {
        slug: 'core',
        label_fr: 'Formations Veille & Intelligence', label_en: 'Intelligence Training',
        modules: [
          {
            slug: 'veille-strategique',
            label_fr: 'Mettre en place une veille stratégique', label_en: 'Setting Up Strategic Monitoring',
            pitch_fr: 'Ne pas savoir ce que fait votre marché, c\'est naviguer à l\'aveugle. Cette formation donne les outils et la méthode pour construire une veille stratégique efficace, automatisée et actionnnable.',
            programme_fr: [
              'Définir ses axes de veille prioritaires',
              'Outils de veille (Feedly, Google Alerts, Mention, etc.)',
              'Traitement et synthèse de l\'information',
              'Diffusion interne et exploitation des insights',
              'Veille concurrentielle, technologique, réglementaire'
            ],
            experiences_fr: 'Mise en place de dispositifs de veille pour des projets et organisations. Pratique intensive de l\'intelligence économique appliquée.',
            savoir_faire_fr: [
              'Architecture de systèmes de veille',
              'Outils de curation et d\'agrégation',
              'Synthèse et valorisation de l\'information'
            ],
            format_fr: '1 journée · Distanciel ou présentiel · Individuel ou équipe',
            articles_lies: ['veille-strategique-systeme-30-minutes']
          },
          {
            slug: 'analyse-concurrentielle',
            label_fr: 'Analyse concurrentielle & cartographie des acteurs', label_en: 'Competitive Analysis & Actor Mapping',
            pitch_fr: 'Connaître ses concurrents mieux qu\'ils ne se connaissent eux-mêmes — c\'est un avantage décisif. Cette formation donne la méthode pour cartographier un marché, identifier les acteurs clés et positionner son offre stratégiquement.',
            programme_fr: [
              'Méthodologie d\'analyse concurrentielle',
              'Outils de cartographie des acteurs',
              'Analyse des forces et faiblesses concurrentes',
              'Identification des opportunités et des menaces',
              'Présentation d\'une cartographie stratégique'
            ],
            experiences_fr: 'Analyses concurrentielles et cartographies d\'acteurs pour des projets commerciaux et stratégiques.',
            savoir_faire_fr: [
              'Porter\'s Five Forces adapté aux contextes PME',
              'Outils de cartographie (Miro, Kumu, etc.)',
              'Analyse SWOT opérationnelle'
            ],
            format_fr: '1 journée · Distanciel ou présentiel · Équipe stratégie ou direction',
            articles_lies: ['analyse-concurrentielle-methode-48h']
          },
          {
            slug: 'intelligence-sectorielle',
            label_fr: 'Intelligence sectorielle appliquée', label_en: 'Applied Sectoral Intelligence',
            pitch_fr: 'Comprendre un secteur en profondeur — ses acteurs, ses dynamiques, ses codes, ses réseaux — c\'est la condition pour y intervenir avec efficacité.',
            programme_fr: [
              'Anatomie d\'un secteur d\'activité',
              'Sources d\'information sectorielle (institutionnelles, académiques, terrain)',
              'Réseaux et communautés sectorielles',
              'Lecture des signaux faibles',
              'Construction d\'un tableau de bord sectoriel'
            ],
            experiences_fr: 'Intelligence sectorielle appliquée aux marchés de la formation, du conseil, des langues et de l\'edtech.',
            savoir_faire_fr: [
              'Cartographie de l\'écosystème sectoriel',
              'Signaux faibles et tendances émergentes',
              'Tableau de bord sectoriel opérationnel'
            ],
            format_fr: '1 journée · Distanciel ou présentiel · Dirigeants, consultants, commerciaux',
            articles_lies: ['guerre-economique-mecanismes-grandes-puissances']
          }
        ]
      }
    }
  }
};

/* ================================================================
   CONSULTING
   ================================================================ */

const CONSULTING = [
  {
    slug: 'interculturel',
    label_fr: 'Conseil interculturel', label_en: 'Intercultural Consulting',
    pitch_fr: 'Les organisations ratent des marchés, des partenariats et des recrutements à cause de malentendus culturels évitables. J\'interviens pour identifier ces frictions et les éliminer avant qu\'elles coûtent.',
    perimetre_fr: [
      'Audit culturel de l\'organisation',
      'Formation des équipes aux codes culturels des marchés cibles',
      'Préparation de missions et de négociations internationales',
      'Accompagnement de l\'intégration de profils internationaux'
    ],
    deroulement_fr: ['Briefing', 'Diagnostic culturel', 'Plan d\'intervention', 'Formation / Coaching', 'Suivi'],
    livrables_fr: 'Rapport de diagnostic culturel, plan de formation, guide de communication interculturelle adapté au contexte client.',
    articles_lies: ['intelligence-culturelle-dirigeants-internationaux', 'expansion-internationale-erreurs-culturelles']
  },
  {
    slug: 'ingenierie-ped',
    label_fr: 'Ingénierie pédagogique', label_en: 'Pedagogical Engineering',
    pitch_fr: 'Vous avez un besoin de formation. Vous ne savez pas comment le transformer en programme opérationnel, certifiable et finançable. C\'est exactement ce que je fais.',
    perimetre_fr: [
      'Analyse des besoins et audit des compétences',
      'Conception du référentiel pédagogique',
      'Architecture du programme (objectifs, contenus, évaluations)',
      'Alignement Qualiopi si nécessaire',
      'Sélection et coordination des intervenants'
    ],
    deroulement_fr: ['Audit besoins', 'Référentiel', 'Architecture programme', 'Validation', 'Déploiement'],
    livrables_fr: 'Référentiel de formation, programme détaillé, supports pédagogiques, grilles d\'évaluation.',
    articles_lies: ['ia-entreprise-ce-qui-change-vraiment']
  },
  {
    slug: 'internationalisation',
    label_fr: 'Conseil en internationalisation', label_en: 'Internationalisation Advisory',
    pitch_fr: 'Entrer sur un marché étranger sans en comprendre les codes, c\'est brûler des ressources. J\'accompagne les organisations dans leur expansion internationale — culturellement, linguistiquement, stratégiquement.',
    perimetre_fr: [
      'Analyse du marché cible (culturelle, linguistique, concurrentielle)',
      'Adaptation du discours et des outils commerciaux',
      'Identification et qualification des partenaires locaux',
      'Préparation des équipes à l\'environnement culturel',
      'Marchés couverts : Chine & Asie du Nord-Est, Scandinavie, Europe francophone'
    ],
    deroulement_fr: ['Audit marché', 'Stratégie d\'entrée', 'Préparation équipes', 'Déploiement', 'Suivi'],
    livrables_fr: 'Rapport d\'analyse marché, plan d\'entrée culturellement adapté, guide de communication locale.',
    articles_lies: ['expansion-internationale-erreurs-culturelles', 'business-chine-codes-culturels']
  },
  {
    slug: 'campagne-politique',
    label_fr: 'Conseil en campagne politique', label_en: 'Political Campaign Advisory',
    pitch_fr: 'La communication politique est une discipline à part entière. Message, terrain, médias, adversaires, imprévus — chaque élément doit être anticipé et maîtrisé. J\'interviens en amont et pendant les campagnes.',
    perimetre_fr: [
      'Positionnement et plateforme de campagne',
      'Stratégie de communication (médias, terrain, réseaux sociaux)',
      'Préparation aux débats et aux médias',
      'Gestion de crise en cours de campagne',
      'Analyse de l\'adversaire et des dynamiques électorales'
    ],
    deroulement_fr: ['Diagnostic', 'Positionnement', 'Stratégie', 'Préparation terrain', 'Suivi temps réel'],
    livrables_fr: 'Plateforme de campagne, stratégie de communication, kit média, protocole de gestion de crise.',
    articles_lies: ['communication-crise-dix-premieres-heures']
  },
  {
    slug: 'intelligence-eco',
    label_fr: 'Intelligence économique & veille stratégique', label_en: 'Economic Intelligence & Strategic Monitoring',
    pitch_fr: 'L\'information est une arme. Ceux qui la maîtrisent décident. Ceux qui ne la maîtrisent pas subissent. J\'aide les organisations à construire leur dispositif de veille et d\'intelligence économique.',
    perimetre_fr: [
      'Audit du dispositif de veille existant',
      'Construction d\'un système de veille stratégique',
      'Formation des équipes aux méthodes d\'IE',
      'Analyses sectorielles et rapports de situation'
    ],
    deroulement_fr: ['Audit existant', 'Architecture système', 'Formation équipes', 'Déploiement', 'Rapports périodiques'],
    livrables_fr: 'Système de veille opérationnel, formation des équipes, rapports d\'intelligence économique.',
    articles_lies: ['veille-strategique-systeme-30-minutes', 'guerre-economique-mecanismes-grandes-puissances']
  },
  {
    slug: 'guerre-eco',
    label_fr: 'Guerre économique & influence', label_en: 'Economic Warfare & Influence',
    pitch_fr: 'La guerre économique est réelle, permanente et souvent invisible. Conquête de marchés, déstabilisation de concurrents, influence des décideurs, guerre de l\'information — j\'aide les organisations à comprendre ces dynamiques et à s\'y positionner.',
    perimetre_fr: [
      'Cartographie des menaces économiques et informationnelles',
      'Stratégie d\'influence et de positionnement',
      'Protection de l\'information sensible',
      'Analyse des dynamiques de pouvoir sectorielles'
    ],
    deroulement_fr: ['Cartographie menaces', 'Audit vulnérabilités', 'Stratégie défensive/offensive', 'Formation', 'Suivi'],
    livrables_fr: 'Cartographie des menaces, stratégie d\'influence, protocoles de protection de l\'information.',
    articles_lies: ['guerre-economique-mecanismes-grandes-puissances', 'analyse-concurrentielle-methode-48h']
  },
  {
    slug: 'personal-branding',
    label_fr: 'Personal branding dirigeants & experts', label_en: 'Executive & Expert Personal Branding',
    pitch_fr: 'Votre réputation vous précède — ou elle vous manque. Pour les dirigeants, consultants et experts qui veulent construire une présence qui travaille pour eux même quand ils ne sont pas dans la pièce.',
    perimetre_fr: [
      'Audit de présence et de réputation actuelle',
      'Positionnement éditorial et ligne de communication',
      'Stratégie LinkedIn et médias spécialisés',
      'Préparation aux prises de parole publiques',
      'Gestion de l\'e-réputation'
    ],
    deroulement_fr: ['Audit réputation', 'Positionnement', 'Stratégie éditoriale', 'Production contenus', 'Suivi'],
    livrables_fr: 'Audit de présence, charte éditoriale, stratégie LinkedIn, kit de communication personnelle.',
    articles_lies: ['personal-branding-dirigeants-reputation-strategique']
  },
  {
    slug: 'communication-crise',
    label_fr: 'Communication de crise', label_en: 'Crisis Communication',
    pitch_fr: 'Quand la crise arrive, il est trop tard pour improviser. J\'interviens en amont pour préparer les protocoles et pendant la crise pour structurer la communication et protéger la réputation.',
    perimetre_fr: [
      'Audit de vulnérabilité communicationnelle',
      'Élaboration du plan de communication de crise',
      'Formation du porte-parole',
      'Gestion de la crise en temps réel',
      'Communication post-crise et reconstruction de réputation'
    ],
    deroulement_fr: ['Audit vulnérabilités', 'Plan de crise', 'Formation porte-parole', 'Simulation', 'Protocole temps réel'],
    livrables_fr: 'Plan de communication de crise, formation porte-parole, kit de gestion de crise.',
    articles_lies: ['communication-crise-dix-premieres-heures']
  },
  {
    slug: 'dev-commercial',
    label_fr: 'Développement commercial international', label_en: 'International Business Development',
    pitch_fr: 'Conquérir un marché étranger demande une approche commerciale adaptée à ses codes. J\'accompagne les équipes commerciales dans leur déploiement sur des marchés internationaux — méthode, outils, culture.',
    perimetre_fr: [
      'Adaptation de la méthode commerciale au marché cible',
      'Formation aux codes culturels de la vente dans le pays cible',
      'Prospection et qualification des leads internationaux',
      'Accompagnement des premières négociations'
    ],
    deroulement_fr: ['Analyse marché', 'Adaptation méthode', 'Formation équipe', 'Prospection', 'Premières négociations'],
    livrables_fr: 'Méthode commerciale adaptée, formation équipe, scripts de vente localisés.',
    articles_lies: ['expansion-internationale-erreurs-culturelles', 'negociation-anglais-face-natif']
  },
  {
    slug: 'audit-presence',
    label_fr: 'Audit de présence internationale', label_en: 'International Presence Audit',
    pitch_fr: 'Vous êtes présent à l\'international — mais est-ce que votre présence est cohérente, crédible et efficace ? J\'audite votre positionnement international et livre un plan d\'action concret.',
    perimetre_fr: [
      'Audit de la communication internationale (site, réseaux, supports)',
      'Analyse de la cohérence du discours selon les marchés',
      'Benchmarking concurrentiel international',
      'Plan de renforcement de la présence internationale'
    ],
    deroulement_fr: ['Audit complet', 'Analyse cohérence', 'Benchmarking', 'Recommandations', 'Plan d\'action'],
    livrables_fr: 'Rapport d\'audit, benchmarking concurrentiel, plan d\'action priorisé.',
    articles_lies: ['strategie-langues-entreprise-enjeu-strategique']
  }
];

/* ================================================================
   BLOG — 30 articles
   ================================================================ */

const BLOG = [
  /* ANGLAIS */
  {slug:'reunions-anglais-erreurs-francophones',titre:'Réunions en anglais : 5 erreurs fatales des francophones',chapeau:'Vos réunions internationales ne donnent pas les résultats attendus ? Voici les 5 erreurs que font presque tous les francophones — et comment les corriger.',categorie:'langues',tags:['réunions en anglais','business english','prise de parole'],formation_liee:'meetings',date:'2025-02-14',temps_lecture:7},
  {slug:'toeic-strategie-score-800',titre:'TOEIC 800+ : la stratégie d\'examen que personne n\'enseigne',chapeau:'Scorer 800 au TOEIC ne demande pas 6 mois de révision. Il demande la bonne stratégie. Voici la méthode pour maximiser votre score en un minimum de temps.',categorie:'langues',tags:['toeic','certification','anglais'],formation_liee:'toeic',date:'2025-03-08',temps_lecture:8},
  {slug:'negociation-anglais-face-natif',titre:'Négociation en anglais face à un natif : rééquilibrer le rapport de force',chapeau:'Négocier en anglais dans une langue étrangère vous met en position de faiblesse — sauf si vous connaissez les techniques pour rééquilibrer.',categorie:'langues',tags:['négociation','anglais','business english'],formation_liee:'negociation',date:'2025-05-03',temps_lecture:8},
  /* FRANÇAIS */
  {slug:'prise-de-parole-public-structure-francais',titre:'Prise de parole en public en français : la structure qui convainc',chapeau:'Prendre la parole en public, ça ne s\'improvise pas. Voici la structure en 3 actes utilisée par les meilleurs orateurs.',categorie:'langues',tags:['prise de parole','français','communication orale'],formation_liee:'prise-de-parole',date:'2025-01-17',temps_lecture:7},
  {slug:'francais-affaires-formules-cles',titre:'Français des affaires : les 10 formules qui font la différence',chapeau:'Le français des affaires a ses codes. Ces 10 formules, utilisées au bon moment, transforment votre communication professionnelle.',categorie:'langues',tags:['français des affaires','FLE','communication'],formation_liee:'remise-a-niveau',date:'2025-02-28',temps_lecture:6},
  {slug:'fle-entreprise-former-non-natifs',titre:'FLE en entreprise : comment former efficacement des non-natifs en français',chapeau:'Former des collaborateurs non-natifs en français professionnel demande une approche différente du FLE classique. Voici ce qui fonctionne vraiment.',categorie:'langues',tags:['FLE','français professionnel','formation'],formation_liee:'remise-a-niveau',date:'2025-04-11',temps_lecture:7},
  /* SUÉDOIS */
  {slug:'suedois-professionnel-investissement-linguistique',titre:'Suédois professionnel : le meilleur investissement linguistique peu connu',chapeau:'Le suédois professionnel est la langue d\'affaires la plus sous-estimée par les entreprises françaises. Voici pourquoi c\'est une opportunité différenciante majeure.',categorie:'langues',tags:['suédois','nordique','business'],formation_liee:'business',date:'2025-06-17',temps_lecture:7},
  {slug:'culture-affaires-suedoise-codes',titre:'Culture d\'affaires suédoise : ce qu\'il faut savoir avant une réunion à Stockholm',chapeau:'La culture d\'affaires suédoise a ses codes. Méconnaître ces codes peut coûter un partenariat. Décryptage complet avant votre prochain voyage à Stockholm.',categorie:'langues',tags:['suédois','culture d\'affaires','interculturel'],formation_liee:'business',date:'2025-08-19',temps_lecture:8},
  {slug:'suedois-vs-norvegien-affaires-choix',titre:'Suédois vs norvégien pour les affaires : lequel choisir ?',chapeau:'Vous hésitez entre apprendre le suédois ou le norvégien ? Voici une comparaison objective pour faire le bon choix selon votre marché cible.',categorie:'langues',tags:['suédois','norvégien','langues nordiques'],formation_liee:'business',date:'2025-10-14',temps_lecture:7},
  /* NORVÉGIEN */
  {slug:'norvegien-affaires-secteur-maritime',titre:'Norvégien des affaires : guide pour le secteur maritime',chapeau:'Le norvégien est la langue du secteur maritime mondial. Voici pourquoi l\'apprendre change la donne pour les professionnels du maritime, de l\'offshore et de l\'énergie.',categorie:'langues',tags:['norvégien','maritime','offshore'],formation_liee:'business',date:'2025-09-05',temps_lecture:7},
  {slug:'norvegien-bokmal-nynorsk-lequel-choisir',titre:'Apprendre le norvégien : bokmål ou nynorsk, que choisir ?',chapeau:'Bokmål ou nynorsk ? Cette question bloque beaucoup d\'apprenants. Voici la réponse claire pour les professionnels qui veulent apprendre le norvégien.',categorie:'langues',tags:['norvégien','bokmål'],formation_liee:'business',date:'2025-11-22',temps_lecture:6},
  {slug:'norvege-suede-differences-culturelles-affaires',titre:'Norvège vs Suède : différences culturelles en affaires à connaître',chapeau:'Norvégiens et Suédois se ressemblent — mais pas en affaires. Ces différences culturelles subtiles peuvent changer l\'issue d\'une négociation.',categorie:'langues',tags:['norvège','suède','interculturel'],formation_liee:'business',date:'2025-12-05',temps_lecture:7},
  /* MANDARIN */
  {slug:'caracteres-chinois-logique-apprentissage',titre:'Mandarin : les caractères chinois ne sont pas difficiles, ils sont logiques',chapeau:'La peur des caractères chinois est le principal frein à l\'apprentissage du mandarin. Voici pourquoi cette peur est infondée — et comment démarrer avec la bonne méthode.',categorie:'langues',tags:['mandarin','écriture','HSK'],formation_liee:'ecriture',date:'2025-03-19',temps_lecture:8},
  {slug:'hsk4-six-mois-methode',titre:'HSK 4 en 6 mois : la méthode et les erreurs à éviter',chapeau:'Le HSK 4 est accessible en 6 mois avec la bonne méthode. Retour d\'expérience sur la préparation, les ressources efficaces et les pièges qui font perdre du temps.',categorie:'langues',tags:['mandarin','HSK','certification'],formation_liee:'logique',date:'2025-05-28',temps_lecture:8},
  {slug:'business-chine-codes-culturels',titre:'Business en Chine : les codes culturels qui changent tout',chapeau:'Faire des affaires en Chine demande de comprendre des codes culturels radicalement différents. Guanxi, mianzi, négociation indirecte — le guide complet.',categorie:'interculturel',tags:['chine','guanxi','négociation'],formation_liee:'negociation-cross',date:'2025-07-09',temps_lecture:9},
  /* INTERCULTUREL */
  {slug:'management-interculturel-erreurs-managers-francais',titre:'Management interculturel : 5 erreurs des managers français à l\'international',chapeau:'Les managers français ont des angles morts interculturels qui leur coûtent cher. Voici les 5 erreurs les plus fréquentes — et comment les corriger.',categorie:'interculturel',tags:['management interculturel','international','équipes'],formation_liee:'management-multiculturel',date:'2025-01-30',temps_lecture:8},
  {slug:'intelligence-culturelle-dirigeants-internationaux',titre:'Intelligence culturelle (CQ) : la compétence clé des dirigeants internationaux',chapeau:'L\'intelligence culturelle est mesurable, développable et plus prédictive du succès international que le QI ou l\'expérience. Tout ce qu\'il faut savoir.',categorie:'interculturel',tags:['intelligence culturelle','CQ','international'],formation_liee:'negociation-cross',date:'2025-04-24',temps_lecture:8},
  {slug:'expansion-internationale-erreurs-culturelles',titre:'Expansion internationale : 7 erreurs culturelles qui coûtent des marchés',chapeau:'70% des expansions internationales échouent à cause d\'erreurs culturelles évitables. Voici les 7 plus fréquentes — et comment les anticiper.',categorie:'interculturel',tags:['expansion internationale','erreurs culturelles','internationalisation'],formation_liee:'expansion-internationale',date:'2025-06-03',temps_lecture:8},
  /* IA */
  {slug:'ia-entreprise-ce-qui-change-vraiment',titre:'IA en entreprise : ce qui va vraiment changer (et ce qui ne changera pas)',chapeau:'L\'IA va transformer le travail — mais pas de la façon dont on vous le dit. Analyse sobre de ce qui change vraiment pour les professionnels et les organisations.',categorie:'ia',tags:['IA','transformation','travail'],formation_liee:'ia-metiers',date:'2025-03-04',temps_lecture:8},
  {slug:'prompt-engineering-non-techniciens-guide',titre:'Prompt engineering pour non-techniciens : le guide pratique',chapeau:'Le prompt engineering n\'est pas réservé aux développeurs. Voici les techniques concrètes pour obtenir des résultats professionnels de qualité avec n\'importe quel outil IA.',categorie:'ia',tags:['prompt engineering','IA','productivité'],formation_liee:'ia-metiers',date:'2025-05-16',temps_lecture:8},
  {slug:'transformation-digitale-pourquoi-echec',titre:'Transformation digitale : pourquoi 70% des projets échouent',chapeau:'70% des projets de transformation digitale n\'atteignent pas leurs objectifs. La raison n\'est presque jamais technique. Voici les vraies causes et comment les éviter.',categorie:'ia',tags:['transformation digitale','conduite du changement'],formation_liee:'transformation-digitale',date:'2025-07-31',temps_lecture:8},
  /* COMMUNICATION */
  {slug:'prise-de-parole-secrets-meilleurs-orateurs',titre:'Prise de parole en public : les 3 secrets des meilleurs orateurs',chapeau:'Structure, silence, présence — les 3 éléments qui séparent un bon orateur d\'un orateur mémorable. Ce que les formations classiques ne vous apprennent pas.',categorie:'communication',tags:['prise de parole','orateur','communication'],formation_liee:'prise-de-parole',date:'2025-02-06',temps_lecture:7},
  {slug:'communication-crise-dix-premieres-heures',titre:'Communication de crise : les 10 premières heures décident de tout',chapeau:'En situation de crise, les 10 premières heures définissent la trajectoire de la réputation pour des mois. Voici le protocole exact.',categorie:'communication',tags:['crise','communication','protocole'],formation_liee:'gestion-de-crise',date:'2025-09-25',temps_lecture:8},
  {slug:'techniques-vente-consultative-b2b',titre:'Vente consultative B2B : convaincre sans presser',chapeau:'La vente consultative est l\'approche qui fonctionne en B2B complexe. Voici les techniques clés pour convaincre des acheteurs sophistiqués sans pression ni manipulation.',categorie:'communication',tags:['vente','B2B','persuasion'],formation_liee:'techniques-de-vente',date:'2025-11-07',temps_lecture:7},
  /* VEILLE */
  {slug:'veille-strategique-systeme-30-minutes',titre:'Veille stratégique : un système efficace en 30 minutes par jour',chapeau:'La veille stratégique efficace ne demande pas 3 heures par jour. Voici comment construire un système automatisé et actionnable en moins de 30 minutes quotidiennes.',categorie:'veille',tags:['veille stratégique','concurrentielle','outils'],formation_liee:'veille-strategique',date:'2025-04-07',temps_lecture:7},
  {slug:'guerre-economique-mecanismes-grandes-puissances',titre:'Guerre économique : ce qui se passe vraiment entre les grandes puissances',chapeau:'La guerre économique est réelle, permanente et souvent invisible. Comprendre ses mécanismes est devenu indispensable pour tout dirigeant exposé à l\'international.',categorie:'veille',tags:['guerre économique','géopolitique','intelligence économique'],formation_liee:'intelligence-eco',date:'2025-06-27',temps_lecture:9},
  {slug:'analyse-concurrentielle-methode-48h',titre:'Analyse concurrentielle : cartographier un marché en 48 heures',chapeau:'Une bonne analyse concurrentielle ne prend pas des semaines. Voici la méthode structurée pour cartographier un marché et positionner son offre en 48 heures.',categorie:'veille',tags:['analyse concurrentielle','cartographie','positionnement'],formation_liee:'analyse-concurrentielle',date:'2025-10-02',temps_lecture:7},
  /* VISION / CONSULTING */
  {slug:'strategie-langues-entreprise-enjeu-strategique',titre:'Politique langues en entreprise : pourquoi c\'est un sujet de direction générale',chapeau:'La politique langues n\'est pas un sujet RH — c\'est un sujet stratégique. Voici pourquoi les directions générales doivent reprendre la main sur cette décision.',categorie:'vision',tags:['stratégie langues','DRH','formation'],formation_liee:null,date:'2025-01-09',temps_lecture:7},
  {slug:'personal-branding-dirigeants-reputation-strategique',titre:'Personal branding dirigeants : la réputation qui travaille pour vous',chapeau:'La réputation d\'un dirigeant est un actif stratégique. Voici comment construire une présence publique qui attire clients, talents et partenaires — durablement.',categorie:'vision',tags:['personal branding','réputation','LinkedIn'],formation_liee:null,date:'2025-08-28',temps_lecture:7},
  {slug:'ingenierie-pedagogique-formation-resultats',titre:'Ingénierie pédagogique : comment construire une formation qui produit des résultats',chapeau:'La plupart des formations professionnelles ne produisent pas de résultats durables. Voici les principes de l\'ingénierie pédagogique qui change ça.',categorie:'vision',tags:['ingénierie pédagogique','formation','Qualiopi'],formation_liee:null,date:'2025-12-12',temps_lecture:8}
];

/* ================================================================
   CERTIFICATIONS (home page only)
   ================================================================ */

const CERTS = {
  langues: [
    {nom:'Pipplet FLEX Suédois',sub:'Pipplet',niveau:'C2-',badge:'hi',desc:'Oral C1 · Écrit C2',annee:'2024'},
    {nom:'Pipplet Allemand',sub:'Pipplet',niveau:'B2+',badge:'mid',desc:'Évaluation complète',annee:'2023'},
    {nom:'ECTS Göttingen',sub:'Georg-August-Universität',niveau:'B2.1',badge:'mid',desc:'90% · Note A',annee:'2022'},
    {nom:'HSK 4',sub:'Hanban',niveau:'HSK 4',badge:'hi',desc:'248/300 · 80e percentile',annee:'2023'},
    {nom:'Pipplet Japonais',sub:'Pipplet',niveau:'B1',badge:'lo',desc:'Japonais des affaires',annee:'2024'},
    {nom:'JLPT N5',sub:'JLPT',niveau:'N5',badge:'lo',desc:'Japonais fondamental',annee:'2022'},
  ],
  academique: [
    {nom:'Master Commerce Int.',sub:'Université de Poitiers',niveau:'Bac+5',badge:'mid',desc:'Commerce international · Assez bien',annee:'2016'},
    {nom:'Licence Langues',sub:'Université Paris-Est',niveau:'Bac+3',badge:'mid',desc:'Langues étrangères · Bien',annee:'2014'},
    {nom:'Leiden Linguistics',sub:'Universiteit Leiden',niveau:'Honours',badge:'hi',desc:'With honours · Échange Erasmus',annee:'2013'},
  ],
  business: [
    {nom:'Harvard CORe',sub:'Harvard Business School',niveau:'Pass',badge:'hi',desc:'Business Analytics · Economics · Accounting',annee:'2020'},
    {nom:'ESSEC Négociation',sub:'ESSEC Business School',niveau:'Certifié',badge:'mid',desc:'Négociation internationale',annee:'2019'},
    {nom:'Python 3',sub:'Codecademy',niveau:'Certifié',badge:'lo',desc:'Programmation Python',annee:'2022'},
    {nom:'SQL',sub:'Codecademy',niveau:'Certifié',badge:'lo',desc:'Bases de données',annee:'2022'},
  ]
};
