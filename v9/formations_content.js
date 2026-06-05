/* ================================================================
   MARCUS DETREZ F&C — v9 — formations_content.js
   Contenu détaillé de chaque module de formation
   Structure par clé : "volet/sous_service/module_slug"
   ================================================================ */

const FORMATIONS_CONTENT = {};

/* ================================================================
   LANGUES — ANGLAIS
   ================================================================ */

FORMATIONS_CONTENT['langues/anglais/meetings'] = {
  pour_qui: [
    { icon: '⊞', label: 'Managers & cadres', desc: 'Vous participez à des comités, réunions projet ou comités de direction en anglais et sentez que votre impact est limité par rapport à vos collègues natifs.' },
    { icon: '◈', label: 'Chefs de projet internationaux', desc: 'Vous animez des réunions de projet avec des équipes distribuées à l\'international et cherchez à mieux cadrer, relancer et décider en anglais.' },
    { icon: '◎', label: 'Commerciaux & business developers', desc: 'Vous participez à des calls de prospection ou de suivi client en anglais et voulez en prendre davantage le contrôle.' }
  ],
  deroulement: [
    {
      titre: 'Diagnostic & calibrage',
      duree: 'Demi-journée 1 — matin',
      desc: 'La formation commence par une simulation de réunion enregistrée sur un sujet professionnel pertinent pour le groupe. Chaque participant prend la parole sur un point de son choix. L\'enregistrement est analysé collectivement : qu\'est-ce qui fonctionne, où les interventions perdent en impact, quels patterns de langage freinent la communication.',
      items: ['Simulation de réunion enregistrée (20 min)', 'Écoute collective et identification des leviers', 'Cartographie individuelle des points de blocage', 'Définition des objectifs personnalisés pour chaque participant']
    },
    {
      titre: 'Prendre la parole : formules et timing',
      duree: 'Demi-journée 1 — après-midi',
      desc: 'Travail intensif sur les formules d\'intervention : comment entrer dans une réunion en cours, comment signaler qu\'on a quelque chose à ajouter, comment reprendre la parole après une interruption. Les formules sont pratiquées jusqu\'à l\'automatisme — pas mémorisées, intégrées.',
      items: ['Bank de 40 formules d\'intervention classées par situation', 'Exercices de drill par paire : intervention / interruption / reprise', 'Jeu de rôle : réunion avec interruptions volontaires à gérer', 'Débriefing sur le timing et l\'assertivité']
    },
    {
      titre: 'Structurer et conclure',
      duree: 'Demi-journée 2 — matin',
      desc: 'Techniques de structuration d\'une intervention orale en anglais de réunion : comment annoncer le plan, gérer les transitions, reformuler un point de vue, conclure avec une recommandation actionnable. Travail sur le registre formel/informel selon le type de réunion.',
      items: ['Templates de structure pour 4 types d\'interventions (proposition, objection, synthèse, décision)', 'Exercice de micro-présentation de 90 secondes sur cas professionnel réel', 'Pair work : reformulation et réponse aux contre-arguments', 'Analyse vidéo de discours de réunions professionnelles en anglais']
    },
    {
      titre: 'Simulation finale et plan de progrès',
      duree: 'Demi-journée 2 — après-midi',
      desc: 'Simulation complète d\'une réunion de 45 minutes sur un cas professionnel complexe. Chaque participant a un rôle défini (animateur, expert, contradicteur, synthétiseur). Enregistrement et débriefing individualisé. Chaque participant repart avec un plan de progrès sur 30 jours.',
      items: ['Simulation complète enregistrée (45 min)', 'Débriefing individuel sur enregistrement', 'Document de synthèse : formules maîtrisées + axes de progrès', 'Plan de progrès 30 jours avec objectifs mesurables']
    }
  ],
  exercices: [
    { titre: 'The Interruption Game', desc: 'En binôme, l\'un parle sur n\'importe quel sujet professionnel, l\'autre l\'interrompt toutes les 30 secondes. L\'objectif : reprendre la parole naturellement avec les bonnes formules, sans perdre le fil.' },
    { titre: 'Micro-meetings', desc: 'Réunion flash de 8 minutes sur un enjeu professionnel réel. Contrainte : chaque participant doit intervenir au moins 3 fois, dont une fois pour proposer une action.' },
    { titre: 'The Chair Role', desc: 'Chaque participant anime une réunion de 15 minutes à tour de rôle, en utilisant uniquement les formules d\'animation (ouverture, relance, gestion des désaccords, synthèse, clôture) travaillées en formation.' },
    { titre: 'Speed Objections', desc: 'Un participant présente une proposition (1 min). Les autres ont 30 secondes chacun pour formuler une objection en anglais. Le présentateur dispose de 20 secondes pour répondre à chaque objection.' }
  ],
  resultats: [
    { titre: 'Vous prenez la parole sans attendre le bon moment.', desc: ' Vous avez les formules pour entrer dans une réunion en cours, relancer un échange qui stagne, ou challenger une affirmation — avec autorité et sans froisser.' },
    { titre: 'Vos interventions ont une structure perceptible.', desc: ' Vous savez annoncer votre point, le développer en 3 étapes, et conclure avec une recommandation. Plus de pensée qui s\'étale — des prises de parole qui s\'impriment.' },
    { titre: 'Vous gérez les interruptions et y revenez.', desc: ' Quand on vous coupe, vous finissez votre idée. Quand une réunion part dans tous les sens, vous ramenez le fil. Ce sont des réflexes — pas des techniques à chercher dans l\'urgence.' },
    { titre: 'Vous repartez avec 40 formules prêtes à l\'emploi.', desc: ' Un lexique personnel, annoté, adapté à votre style et vos situations professionnelles spécifiques. À utiliser dès la prochaine réunion.' }
  ]
};

FORMATIONS_CONTENT['langues/anglais/business'] = {
  pour_qui: [
    { icon: '◈', label: 'Niveaux A2 à C1', desc: 'Cette formation s\'adapte à tous les niveaux à partir d\'un niveau élémentaire. Le contenu est modulé selon le diagnostic initial — chaque module est calibré sur les vrais besoins.' },
    { icon: '⊞', label: 'Professionnels en contexte international', desc: 'Vous travaillez régulièrement avec des partenaires anglophones — email, calls, présentations, comptes rendus — et voulez atteindre un niveau d\'aisance qui ne vous freine plus.' },
    { icon: '◎', label: 'Équipes intra-entreprise', desc: 'Votre organisation travaille dans un contexte international ou envisage de se développer à l\'étranger. Vous voulez élever le niveau collectif en anglais des affaires.' }
  ],
  deroulement: [
    {
      titre: 'Audit de compétences & plan personnalisé',
      duree: 'Session 1',
      desc: 'Avant le début de la formation, chaque apprenant passe un audit de 45 minutes couvrant les 4 compétences (compréhension orale, expression orale, compréhension écrite, expression écrite) dans des contextes professionnels réels. Les résultats définissent le plan de formation individuel : quelles compétences renforcer en priorité, quels contenus utiliser, quel rythme adopter.',
      items: ['Test de niveau par mise en situation professionnelle (pas de QCM)', 'Identification des 3 priorités de progression par apprenant', 'Définition des objectifs mesurables à 30, 60 et 90 jours', 'Sélection du contenu adapté au secteur de l\'apprenant']
    },
    {
      titre: 'Communication écrite professionnelle',
      duree: 'Module 1 (2 à 4 sessions)',
      desc: 'Rédaction d\'emails de toutes natures (demande, refus, relance, confirmation, escalade), de comptes rendus de réunion, de synthèses documentaires et de rapports de synthèse. Travail sur les registres formels et informels, la précision lexicale et la concision.',
      items: ['Analyse d\'emails professionnels réels — décryptage des niveaux de registre', 'Rédaction guidée puis autonome sur des cas concrets', 'Correction en temps réel avec explication des choix lexicaux', 'Construction d\'une bibliothèque de formules personnelle par l\'apprenant']
    },
    {
      titre: 'Communication orale : calls et présentations',
      duree: 'Module 2 (2 à 4 sessions)',
      desc: 'Gestion des appels téléphoniques et vidéo-conférences : ouverture, gestion des incompréhensions, formulations de conclusion. Présentations structurées : organisation d\'un pitch ou d\'une mise au point, gestion du Q&A, adaptation du registre selon l\'audience.',
      items: ['Simulation de calls professionnels avec feedback immédiat', 'Micro-présentations chronométrées (3 min puis 8 min)', 'Jeux de rôle Q&A avec questions difficiles', 'Travail sur la phonologie et l\'intelligibilité (pas l\'accent)']
    },
    {
      titre: 'Vocabulaire sectoriel & situations complexes',
      duree: 'Module 3 (2 sessions)',
      desc: 'Travail ciblé sur le vocabulaire du secteur de l\'apprenant (finance, industrie, tech, RH, commercial, juridique). Situations complexes : désaccord avec un client, escalade interne, mauvaise nouvelle à annoncer, feedback à donner en anglais.',
      items: ['Lexique sectoriel personnalisé (200 à 400 termes ciblés)', 'Simulation de situations à haute charge émotionnelle', 'Techniques de désamorçage et de reformulation', 'Session finale de validation sur tous les objectifs initiaux']
    }
  ],
  exercices: [
    { titre: 'Email chain', desc: 'Simulation d\'une chaîne d\'emails professionnels (demande initiale → réponse → relance → escalade → résolution) sur un cas de gestion de projet ou de relation client réel ou fictif.' },
    { titre: 'Pitch en 3 minutes', desc: 'Chaque apprenant prépare et délivre un pitch de 3 minutes sur son activité, son équipe ou un projet en cours. Enregistrement vidéo et débriefing sur structure, registre et impact.' },
    { titre: 'Shadow call', desc: 'Écoute d\'un appel professionnel authentique (podcast d\'affaires, interview de dirigeant) suivie d\'une simulation du même type d\'appel par l\'apprenant. Identification des patterns de langage réels.' },
    { titre: 'Difficult conversations', desc: 'Mise en situation : annoncer un retard de livraison à un client anglophone, recadrer un partenaire, expliquer un problème de facturation. L\'accent est mis sur la précision et la gestion de la relation sous pression.' }
  ],
  resultats: [
    { titre: 'Emails rédigés en autonomie totale.', desc: ' Vous ne cherchez plus vos formules ou ne relisez plus 3 fois avant d\'envoyer. Votre écrit professionnel en anglais est précis, naturel et adapté au registre de votre interlocuteur.' },
    { titre: 'Appels et présentations maîtrisés.', desc: ' Vous ouvrez, guidez et concluez un call en anglais sans moments de flottement. Vos présentations ont une structure claire que votre audience peut suivre.' },
    { titre: 'Vocabulaire sectoriel opérationnel.', desc: ' Vous disposez du lexique précis de votre domaine en anglais — pas des équivalents approximatifs, mais les vrais termes utilisés par vos interlocuteurs natifs.' },
    { titre: 'Un niveau mesuré et documenté.', desc: ' En fin de formation, un test de clôture mesure la progression sur chaque compétence. Vous avez un document de synthèse qui formalise les acquis.' }
  ]
};

FORMATIONS_CONTENT['langues/anglais/toeic'] = {
  pour_qui: [
    { icon: '◈', label: 'Candidats avec deadline', desc: 'Vous avez un TOEIC planifié dans les 4 à 10 semaines et voulez maximiser votre score dans le temps disponible — pas passer 6 mois à réviser de l\'anglais général.' },
    { icon: '⊞', label: 'Étudiants grandes écoles', desc: 'Votre école exige un score TOEIC pour la diplomation ou un programme à l\'international. Vous cherchez une préparation efficace qui s\'adapte à votre emploi du temps chargé.' },
    { icon: '◎', label: 'Professionnels en reconversion', desc: 'Vous avez besoin d\'une certification TOEIC pour accéder à un poste ou valider une mobilité. Votre niveau est réel mais vos stratégies d\'examen sont à développer.' }
  ],
  deroulement: [
    {
      titre: 'Audit de niveau & diagnostic stratégique',
      duree: 'Session 1 (2h)',
      desc: 'Simulation complète d\'un TOEIC blanc dans les conditions d\'examen. Analyse des résultats par section : score par partie, types d\'erreurs les plus fréquentes, temps restant par section. Ce diagnostic définit le plan de préparation personnalisé : quelles sections travailler en priorité, quels types de questions maîtriser en premier.',
      items: ['TOEIC blanc complet chronométré (2h)', 'Analyse détaillée des erreurs par type de question', 'Calcul du potentiel de progression par section', 'Plan de préparation personnalisé avec allocation de temps']
    },
    {
      titre: 'Stratégies par section',
      duree: 'Sessions 2 à 4 (2h chaque)',
      desc: 'Pour chaque section du TOEIC (Parts 1 à 7), une stratégie spécifique est enseignée et entraînée. Ce n\'est pas de la révision d\'anglais — c\'est de la technique d\'examen. Comment aborder chaque type de question, où sont les pièges, comment gérer le temps à l\'intérieur de chaque partie.',
      items: ['Part 1 : technique de fermeture des yeux et écoute pure', 'Part 2 : identification des 7 types de questions et élimination rapide', 'Parts 3 & 4 : lecture des questions avant l\'écoute', 'Parts 5 & 6 : identification du type grammatical avant les options', 'Part 7 : technique de scan ciblé (lecture questions → scan texte)']
    },
    {
      titre: 'Entraînement intensif sur format réel',
      duree: 'Sessions 5 à 7 (2h chaque)',
      desc: 'Entraînement sur des sujets officiels et semi-officiels, section par section. L\'accent est mis sur la vitesse et la précision simultanées. Chaque session d\'entraînement est suivie d\'un débriefing sur les erreurs récurrentes et les ajustements stratégiques.',
      items: ['30 à 50 questions par session, chronométrées', 'Débriefing sur les erreurs avec explication de la logique correcte', 'Travail sur la gestion du stress et de la fatigue cognitive', 'Ajustement du plan de préparation selon la progression observée']
    },
    {
      titre: 'Simulation finale et ajustements',
      duree: 'Session 8 (2h)',
      desc: 'TOEIC blanc final dans les conditions exactes de l\'examen. Comparaison avec le premier test pour mesurer la progression. Ajustements de dernière minute. Préparation mentale et logistique pour le jour J.',
      items: ['TOEIC blanc final complet (2h)', 'Comparaison score initial / score final', 'Check-list logistique pour le jour de l\'examen', 'Stratégie de gestion du stress le jour J']
    }
  ],
  exercices: [
    { titre: 'Photo sprint', desc: 'Parts 1 : 10 photos traitées en 2 minutes 30. L\'objectif n\'est pas d\'écouter — c\'est de classifier instantanément (action / état / position relative / description de scène) avant d\'écouter.' },
    { titre: 'Question typing', desc: 'Part 2 : identification du type de question (ouverte / fermée / alternative / indirecte / tag question) avant l\'écoute. Drill sur 30 questions sans écouter les réponses pour construire le réflexe de classification.' },
    { titre: 'Grammar speed round', desc: 'Parts 5 & 6 : 20 questions de grammaire en 4 minutes. L\'objectif est d\'identifier la structure grammaticale requise en 3 secondes avant de lire les options.' },
    { titre: 'Scan race', desc: 'Part 7 : deux apprenants traitent le même passage, l\'un en lisant d\'abord, l\'autre en scannant d\'abord. Comparaison du score et du temps. Démonstration empirique de l\'efficacité de la stratégie de scan.' }
  ],
  resultats: [
    { titre: 'Vous connaissez exactement ce qu\'est le TOEIC.', desc: ' Les formats, les pièges, les patterns récurrents. Vous entrez dans la salle d\'examen avec une carte du terrain — pas en terra incognita.' },
    { titre: 'Vous avez une stratégie par section.', desc: ' Pas la même approche pour toutes les parties. Une technique spécifique pour chaque type de question, testée et optimisée pendant la préparation.' },
    { titre: 'Vous gérez 2 heures d\'examen sans décrochage.', desc: ' L\'entraînement à la durée complète, chronométré et sans pause, développe l\'endurance cognitive nécessaire.' },
    { titre: 'Progression documentée.', desc: ' Score initial vs score final. Progression par section. Identification précise des acquis et des points résiduels de vigilance.' }
  ]
};

FORMATIONS_CONTENT['langues/anglais/sales'] = {
  pour_qui: [
    { icon: '◈', label: 'Commerciaux B2B', desc: 'Vous prospectez, présentez et négociez avec des clients ou partenaires anglophones et cherchez à gagner en aisance et en efficacité dans tout le cycle de vente.' },
    { icon: '⊞', label: 'Business developers', desc: 'Vous développez des partenariats à l\'international et avez besoin d\'un anglais commercial précis pour les phases de découverte, de proposition et de closing.' },
    { icon: '◎', label: 'Entrepreneurs à l\'export', desc: 'Vous voulez vous développer sur des marchés anglophones (UK, US, Australie, Inde) et devez être capable de vendre votre offre en anglais de façon autonome.' }
  ],
  deroulement: [
    {
      titre: 'Le vocabulaire de la vente en anglais',
      duree: 'Module 1 (3h)',
      desc: 'Pas de la grammaire — du lexique actionnable. Les formules pour ouvrir un appel de prospection, présenter son entreprise en 30 secondes, qualifier un prospect, présenter une proposition de valeur. Ce module construit le socle lexical du cycle de vente complet.',
      items: ['Cold call opening : les 5 premières phrases qui fonctionnent', 'Vocabulary of qualification : BANT + MEDDIC en anglais', 'Présentation de valeur : structure problem / solution / proof', 'Lexique commercial par secteur (adapté au contexte de l\'apprenant)']
    },
    {
      titre: 'La découverte client en anglais',
      duree: 'Module 2 (3h)',
      desc: 'Les questions qui font parler le prospect — et celles qui le ferment. Techniques d\'écoute active en anglais, reformulation, approfondissement. Simulation d\'entretiens de découverte complets avec feedback sur la qualité des questions posées.',
      items: ['SPIN Questions en anglais : situation, problème, implication, bénéfice', 'Techniques de silence et de relance', 'Reformulation : "If I understand you correctly..." et ses variantes', 'Simulation : découverte complète de 20 minutes enregistrée']
    },
    {
      titre: 'Objections, négociation et closing',
      duree: 'Module 3 (3h)',
      desc: 'Les objections prix, timing et concurrence en anglais — et comment les traiter sans être sur la défensive. Techniques d\'ancrage, de concession et de closing adaptées aux codes culturels anglophones. Le closing consultif vs le closing agressif.',
      items: ['Les 6 objections les plus fréquentes en B2B anglophone et comment les traiter', 'Formules de négociation de prix : "Given the volume...", "If you could commit to...", etc.', 'Closing questions : "What would need to be true for you to move forward?"', 'Différences UK / US / australien dans le style de closing']
    },
    {
      titre: 'Simulation de cycle de vente complet',
      duree: 'Module 4 (2h)',
      desc: 'Simulation d\'un cycle de vente complet en anglais : du cold call à la signature, en passant par la démo, la gestion des objections et le closing. Enregistrement et débriefing individualisé.',
      items: ['Jeu de rôle intégral (cold call → démo → objections → closing)', 'Enregistrement et analyse', 'Points forts + axes de progrès documentés', 'Script personnel développé par l\'apprenant pendant la formation']
    }
  ],
  exercices: [
    { titre: 'The 30-second pitch', desc: 'Chaque apprenant développe et affine son pitch d\'entreprise de 30 secondes en anglais : le problème résolu, la solution, la preuve. Enregistré, analysé, amélioré jusqu\'à fluidité complète.' },
    { titre: 'Objection tennis', desc: 'Un apprenant présente, l\'autre objecte. Turnover rapide : 5 objections en 10 minutes. L\'objectif est de développer des réponses automatiques et naturelles, pas de chercher ses mots sous pression.' },
    { titre: 'Email de relance froide', desc: 'Rédaction d\'un email de relance après 3 semaines de silence. Contrainte : 5 lignes maximum, une valeur ajoutée, une question de fin. Comparaison des approches et identification des formules les plus efficaces.' },
    { titre: 'Demo in English', desc: 'Présentation d\'un produit ou service réel (le propre produit de l\'apprenant) à l\'oral en anglais, en 8 minutes, suivie d\'un Q&A simulé avec des questions-pièges.' }
  ],
  resultats: [
    { titre: 'Un script de vente en anglais adapté à votre offre.', desc: ' Pas un script générique — votre script, avec vos mots, pour votre marché. Rédigé et affiné pendant la formation.' },
    { titre: 'Les réponses aux 6 objections principales mémorisées.', desc: ' Automatisées en anglais, adaptées à votre contexte. Vous ne cherchez plus vos mots sous pression.' },
    { titre: 'La capacité à mener un cycle de vente complet en anglais.', desc: ' De la prospection au closing, vous avez les formules, la structure et la confiance pour vendre dans la langue de vos clients internationaux.' },
    { titre: 'Une connaissance des codes culturels de la vente anglophone.', desc: ' UK, US, Australie : les différences de style que vos concurrents ne connaissent pas.' }
  ]
};

FORMATIONS_CONTENT['langues/anglais/public-speaking'] = {
  pour_qui: [
    { icon: '◈', label: 'Dirigeants & managers', desc: 'Vous êtes amené à prendre la parole en public en anglais : conférences, assemblées, comités, présentations clients seniors. Vous voulez projeter autorité et clarté, pas simplement être compris.' },
    { icon: '⊞', label: 'Étudiants grandes écoles', desc: 'Pitchs, soutenances, présentations de groupe, concours d\'éloquence — vous avez besoin d\'un anglais oral de niveau professionnel pour des situations à enjeux.' },
    { icon: '◎', label: 'Experts techniques', desc: 'Vous avez l\'expertise mais la prise de parole en anglais devant un public freine votre capacité à la valoriser. Vous cherchez à transformer votre maîtrise du fond en impact à l\'oral.' }
  ],
  deroulement: [
    {
      titre: 'Diagnostic vocal et présence physique',
      duree: 'Demi-journée 1 — matin',
      desc: 'La formation commence par une prise de parole de 3 minutes filmée sur un sujet professionnel libre. L\'analyse couvre : le débit, l\'articulation, les pauses, la posture, le contact visuel, la gestion des mains. Un plan de travail individuel est défini à partir de cette analyse.',
      items: ['Prise de parole de 3 min filmée', 'Analyse vidéo collective sur les dimensions vocales et physiques', 'Identification des 2 à 3 axes de progrès prioritaires', 'Exercices de respiration, ancrage et projection vocale']
    },
    {
      titre: 'Structure d\'une intervention en anglais',
      duree: 'Demi-journée 1 — après-midi',
      desc: 'Les 4 types d\'intervention orale en anglais professionnel (informer, convaincre, motiver, décider) ont des structures différentes. Travail sur l\'ouverture (hook), le développement (3 points max), les transitions, la conclusion (call to action). Application immédiate sur des cas professionnels réels.',
      items: ['Template PREP (Point / Reason / Example / Point) et ses variantes', 'Les 5 types de hooks qui captent une audience anglophone', 'Transitions en anglais : formules et timing', 'Exercice : restructuration d\'une présentation existante selon la méthode']
    },
    {
      titre: 'Storytelling et Q&A en anglais',
      duree: 'Demi-journée 2 — matin',
      desc: 'Le storytelling professionnel en anglais : comment illustrer un point avec une histoire brève, comment utiliser des exemples qui résonnent avec une audience anglophone, comment gérer l\'humour (et le risque interculturel qu\'il représente). Session Q&A : gérer les questions hostiles, les questions piège, les silences.',
      items: ['Structure narrative en 3 actes appliquée au contexte professionnel', 'Formules de transition entre le story et le point clé', 'Exercice Q&A avec questions difficiles préparées par le formateur', 'Techniques de gestion du silence et des questions déstabilisantes']
    },
    {
      titre: 'Présentation finale et feedback individualisé',
      duree: 'Demi-journée 2 — après-midi',
      desc: 'Chaque participant délivre une présentation préparée de 8 à 10 minutes sur un sujet professionnel réel, suivie d\'un Q&A de 5 minutes. Présentation filmée. Débriefing individuel sur vidéo avec points de progrès documentés.',
      items: ['Présentation finale filmée (8-10 min + Q&A)', 'Débriefing individuel sur vidéo (20 min par participant)', 'Comparaison avec la vidéo de J1 : mesure des progrès', 'Fiche de progrès personnelle avec plan de continuation']
    }
  ],
  exercices: [
    { titre: 'The Hook Sprint', desc: '5 façons différentes d\'ouvrir la même présentation (question, statistique, citation, anecdote, affirmation provocatrice). Chaque participant teste les 5 en 30 secondes chacune. Le groupe identifie ce qui fonctionne le mieux pour chaque profil.' },
    { titre: 'Impromptu Speech', desc: 'Un sujet professionnel tiré au sort. 30 secondes de préparation. 2 minutes de prise de parole. L\'objectif est de structurer rapidement sous pression — compétence clé pour les Q&A et les prises de parole imprévues.' },
    { titre: 'The Hostile Q&A', desc: 'Après chaque présentation, un participant joue le rôle du contradicteur : questions pièges, demandes de chiffres précis, remises en question des hypothèses. L\'orateur doit répondre avec calme et précision.' },
    { titre: 'Silence drill', desc: '3 silences intentionnels de 3 secondes placés dans une présentation de 5 minutes, sur les moments les plus importants. Exercice qui développe le confort avec le silence — l\'outil le plus puissant de l\'orateur.' }
  ],
  resultats: [
    { titre: 'Une présentation livrée avec impact et clarté.', desc: ' Vous entrez, vous structurez, vous concluez. Le public sait où vous l\'emmenez à chaque étape.' },
    { titre: 'La gestion du trac transformée en présence.', desc: ' Vous avez des outils concrets pour réguler le stress et le convertir en énergie de présence. Vous n\'éliminez pas le trac — vous l\'utilisez.' },
    { titre: 'Un Q&A maîtrisé.', desc: ' Les questions difficiles ne vous déstabilisent plus. Vous avez des formules pour gagner du temps, reformuler, répondre avec précision ou décliner élégamment.' },
    { titre: 'Une vidéo de votre progression.', desc: ' Vous repartez avec la vidéo de J1 et la vidéo de J2. La différence est visible, concrète, motivante.' }
  ]
};

FORMATIONS_CONTENT['langues/anglais/negociation'] = {
  pour_qui: [
    { icon: '◈', label: 'Acheteurs & responsables contrats', desc: 'Vous négociez des conditions contractuelles, des prix ou des délais avec des fournisseurs ou partenaires anglophones et voulez cesser de subir l\'asymétrie linguistique.' },
    { icon: '⊞', label: 'Commerciaux & key account managers', desc: 'Vous êtes du côté vendeur dans des négociations B2B complexes avec des acheteurs natifs ou des grands comptes internationaux.' },
    { icon: '◎', label: 'Dirigeants & DG', desc: 'Vous négociez des partenariats, acquisitions ou accords stratégiques en anglais et voulez maîtriser les codes culturels et linguistiques de la négociation anglophone.' }
  ],
  deroulement: [
    {
      titre: 'Cartographie des styles de négociation anglophones',
      duree: 'Module 1 (3h)',
      desc: 'Les styles de négociation varient significativement entre UK, US, Australie, Inde, Singapour. Ce module donne une carte de ces variations et les formules qui fonctionnent dans chaque contexte. Identification de son propre style de négociation et de ses forces/angles morts.',
      items: ['Américain vs Britannique : directness vs understatement', 'Codes de la négociation avec des Anglo-Indiens et des Singapouriens', 'Exercice : décodage de 10 formules d\'atténuation britannique', 'Auto-diagnostic : votre style de négociation et ses implications en contexte anglophone']
    },
    {
      titre: 'Ancrage, positionnement et gestion des concessions',
      duree: 'Module 2 (3h)',
      desc: 'Les techniques d\'ancrage en anglais : comment poser le premier chiffre, comment répondre à un ancrage adverse, comment déplacer la discussion du prix vers la valeur. Les formules de concession conditionnelle — donner quelque chose en obtenant quelque chose en échange.',
      items: ['Les formules d\'ancrage les plus utilisées dans les négociations B2B anglophones', 'Réponse à un ancrage adverse : formules et posture', '"If you can... then we might be able to..." — la structure de la concession conditionnelle', 'Simulation : négociation de prix avec ancrage et contre-ancrage']
    },
    {
      titre: 'Gestion des blocages et des tensions',
      duree: 'Module 3 (3h)',
      desc: 'Comment dire non en anglais sans fermer la relation. Comment gérer une atmosphère tendue sans perdre le contrôle de la situation. Comment utiliser le silence stratégiquement. Comment demander du temps sans paraître faible.',
      items: ['Formules de refus poli qui maintiennent la relation ouverte', 'Techniques de désescalade en anglais', 'Le silence stratégique : exercice de tenue du silence sous pression', '"Let me take this back to my team" — les formules qui gagnent du temps sans fermer']
    },
    {
      titre: 'Simulation de négociation complète',
      duree: 'Module 4 (2h)',
      desc: 'Simulation d\'une négociation B2B complète sur un cas réaliste proche du contexte professionnel des participants. Enregistrement vidéo. Débriefing sur les formules utilisées, les concessions faites, les résultats obtenus.',
      items: ['Négociation complète en binôme (30 min)', 'Enregistrement et analyse', 'Calcul de la valeur négociée vs la valeur optimale', 'Identification des formules à renforcer']
    }
  ],
  exercices: [
    { titre: 'The Anchoring Game', desc: 'Deux participants négocient un contrat fictif. Règle : celui qui pose le premier chiffre gagne 10 points automatiquement (démonstration de l\'effet d\'ancrage). Analyse des formules utilisées pour ancrer.' },
    { titre: 'Decode the message', desc: '10 formules d\'atténuation britannique à décoder. Exercice collectif : que signifie vraiment chaque formule ? Développe la compétence de lecture des sous-entendus — crucial en négociation anglophone.' },
    { titre: 'Silence drill', desc: 'Après avoir formulé une proposition de valeur ou un contre-offre, les participants pratiquent un silence de 15 secondes minimum. L\'exercice montre que le silence n\'est pas une position de faiblesse — c\'est une pression.' },
    { titre: 'Value-shifting', desc: 'Simulation : l\'acheteur attaque systématiquement sur le prix. Le vendeur doit rediriger 5 fois de suite la conversation vers la valeur sans paraître esquiver. Développe le réflexe de sortie du terrain prix.' }
  ],
  resultats: [
    { titre: 'Vous ancrez la négociation, vous ne la subissez pas.', desc: ' Vous savez poser le premier chiffre, répondre à un ancrage adverse, et déplacer la conversation du prix vers la valeur.' },
    { titre: 'Vous décodez les sous-entendus anglophones.', desc: ' Les atténuations britanniques, les directness américaines, les silences asiatiques — vous lisez au-delà des mots.' },
    { titre: 'Vous gérez les tensions sans perdre la relation.', desc: ' Vous avez les formules pour dire non, pour gagner du temps, pour désescalader — sans jamais fermer la porte.' },
    { titre: 'Un résultat de négociation documenté.', desc: ' La simulation finale produit un résultat chiffré. Vous repartez avec une mesure concrète de votre efficacité en négociation anglophone.' }
  ]
};

/* ================================================================
   LANGUES — FRANÇAIS
   ================================================================ */

FORMATIONS_CONTENT['langues/francais/prise-de-parole'] = {
  pour_qui: [
    { icon: '◈', label: 'Cadres et dirigeants', desc: 'Vous prenez la parole régulièrement en réunion, en comité de direction, face à des clients ou en conférence et voulez projeter plus d\'autorité et de clarté.' },
    { icon: '⊞', label: 'Non-natifs en contexte francophone', desc: 'Vous travaillez dans un environnement professionnel français et devez présenter, argumenter ou débattre en français avec des locuteurs natifs dans des contextes formels.' },
    { icon: '◎', label: 'Étudiants et jeunes professionnels', desc: 'Vous préparez des soutenances, jurys, entretiens ou pitchs en français et voulez acquérir une structure et une présence que votre talent oral seul ne donne pas encore.' }
  ],
  deroulement: [
    {
      titre: 'Structure en 3 actes et pratique immédiate',
      duree: 'Matin J1',
      desc: 'Introduction à la structure en 3 actes (tension / développement / action) et application immédiate sur des sujets professionnels réels. Chaque participant développe une ouverture en 5 variantes et teste celles qui fonctionnent le mieux pour son style.',
      items: ['Modèle en 3 actes : tension → développement → action', '5 types d\'ouvertures testées : question, statistique, anecdote, citation, affirmation', 'Exercice de reformulation d\'une présentation existante selon la structure', 'Drill : 3 ouvertures en 5 minutes sur le même sujet']
    },
    {
      titre: 'Voix, corps, présence',
      duree: 'Après-midi J1',
      desc: 'Travail sur les dimensions physiques et vocales de la prise de parole : débit, volume, articulation, pauses, posture, regard. Exercices de régulation du trac. La présence physique n\'est pas innée — c\'est une posture qui s\'apprend.',
      items: ['Exercices de respiration abdominale et d\'ancrage au sol', 'Travail sur le débit : ralentir sans perdre l\'énergie', 'Contact visuel : technique du 3-2-1 pour couvrir la salle', 'Exercice vocal : projection sans forcer']
    },
    {
      titre: 'Argumentation et rhétorique française',
      duree: 'Matin J2',
      desc: 'Le français a une tradition rhétorique spécifique : dialectique, nuance, prise de position tranchée sur fond de structure logique. Ce module travaille les techniques d\'argumentation formelle, de réfutation polie et de synthèse percutante.',
      items: ['Structure OREO (Opinion / Raison / Exemple / Opinion) en contexte professionnel', 'Réfutation polie : "Je comprends votre point, mais..." et ses variantes', 'La synthèse en 1 phrase : exercice de condensation', 'Improvisation encadrée : sujet tiré au sort, 2 min de préparation, 3 min de discours']
    },
    {
      titre: 'Présentation finale et plan de progrès',
      duree: 'Après-midi J2',
      desc: 'Chaque participant délivre une présentation préparée de 8 minutes sur un sujet professionnel. Suivi d\'un Q&A de 5 minutes. Enregistrement et débriefing individualisé.',
      items: ['Présentation finale filmée (8 min + Q&A)', 'Débriefing individuel sur vidéo', 'Fiche de progrès personnelle', 'Plan d\'entraînement pour les 30 jours suivants']
    }
  ],
  exercices: [
    { titre: 'Pitch 90 secondes', desc: 'Sur n\'importe quel sujet professionnel, 90 secondes de prise de parole structurée. Répété 3 fois avec un feedback entre chaque prise. Développe la capacité à aller à l\'essentiel rapidement.' },
    { titre: 'La réfutation chronométrée', desc: 'Une affirmation professionnelle est posée. 30 secondes pour formuler un contre-argument structuré en 3 parties (point / raison / exemple). Développe la réactivité rhétorique.' },
    { titre: 'Silence et impact', desc: '3 silences intentionnels de 3 secondes dans une présentation de 5 minutes. Exercice enregistré. L\'écoute de l\'enregistrement montre à quel point les silences augmentent l\'impact des phrases qui les suivent.' },
    { titre: 'Q&A fire', desc: '5 minutes de questions difficiles consécutives sans pause. L\'objectif est de rester structuré, précis et calme sous pression. Développe l\'endurance rhétorique.' }
  ],
  resultats: [
    { titre: 'Vous ouvrez avec impact.', desc: ' Plus de "Donc voilà, je vais vous présenter..." Vous commencez par une tension qui capte. Automatisé, reproductible.' },
    { titre: 'Vous avez une structure perceptible par votre audience.', desc: ' 3 points, 3 transitions, 1 conclusion actionnable. Simple, efficace, mémorable.' },
    { titre: 'Vous gérez le trac — il travaille pour vous.', desc: ' Vous ne l\'éliminez pas. Vous l\'utilisez. La régulation émotionnelle est une compétence apprise, pas un trait de personnalité.' },
    { titre: 'Une vidéo de progression.', desc: ' J1 vs J2. La comparaison est concrète et motivante.' }
  ]
};

FORMATIONS_CONTENT['langues/francais/remise-a-niveau'] = {
  pour_qui: [
    { icon: '◈', label: 'Professionnels non-natifs', desc: 'Vous travaillez dans un environnement francophone et devez produire des écrits professionnels corrects — emails, rapports, comptes rendus — sans aide extérieure systématique.' },
    { icon: '⊞', label: 'Natifs avec des lacunes à l\'écrit', desc: 'Votre français oral est solide mais votre écrit professionnel manque de rigueur : fautes d\'orthographe récurrentes, syntaxe hésitante, registre inadapté. Vous voulez corriger ça rapidement.' },
    { icon: '◎', label: 'Managers et cadres en mobilité interne', desc: 'Vous prenez un poste qui implique davantage de communication écrite formelle en français et voulez renforcer rapidement ce registre.' }
  ],
  deroulement: [
    {
      titre: 'Diagnostic de niveau et priorités',
      duree: 'Session 1 (1h30)',
      desc: 'Rédaction d\'un email, d\'un compte rendu court et d\'une note de synthèse sur des sujets professionnels réels. Analyse des productions : quelles erreurs sont systématiques, lesquelles sont occasionnelles, quels registres posent problème. Définition du plan de formation individualisé.',
      items: ['3 productions écrites sur cas professionnels réels', 'Grille d\'analyse des erreurs par type (orthographe, syntaxe, registre, ponctuation)', 'Identification des 5 points prioritaires', 'Plan de formation individualisé sur 4 à 8 semaines']
    },
    {
      titre: 'Grammaire fonctionnelle appliquée',
      duree: 'Sessions 2 à 4',
      desc: 'Travail sur les points grammaticaux les plus impactants pour l\'écrit professionnel : accord sujet-verbe dans les constructions complexes, participes passés, subjonctif dans les formules professionnelles, ponctuation. Uniquement les règles qui s\'appliquent dans les contextes professionnels courants.',
      items: ['Accord du participe passé : règle et exercices en contexte professionnel', 'Subjonctif : les 15 formules incontournables en écrit pro', 'Ponctuation : virgule, point-virgule, deux-points, guillemets', 'Exercices d\'application sur des emails et notes réels (ou simulés)']
    },
    {
      titre: 'Registre et formules professionnelles',
      duree: 'Sessions 5 à 6',
      desc: 'Les formules codifiées du français professionnel écrit : ouvertures et clôtures d\'email, formules de recommandation, de condition, de formalisation. Travail sur la hiérarchisation formelle des demandes et la gradation du registre selon l\'interlocuteur.',
      items: ['Bibliothèque de 50 formules professionnelles classées par usage', 'Exercice de graduation : réécriture du même message en 3 niveaux de formalité', 'Email de refus, de relance, de réclamation : structures et formules', 'Production finale autonome : rapport court sur sujet professionnel']
    }
  ],
  exercices: [
    { titre: 'Error hunt', desc: 'Un document professionnel comportant 15 à 20 erreurs volontaires. L\'apprenant les identifie et les corrige en autonomie. Les corrections sont analysées collectivement.' },
    { titre: 'Register shift', desc: 'Un même message (information, demande, relance) rédigé 3 fois : en registre informel, en registre standard, en registre très formel. L\'exercice développe la conscience des niveaux de registre.' },
    { titre: 'Timed email', desc: 'Rédaction d\'un email professionnel complet en 15 minutes sur un sujet donné. Développe la fluence sans perdre la qualité — compétence clé pour les professionnels très occupés.' }
  ],
  resultats: [
    { titre: 'Vos écrits professionnels sont autonomes.', desc: ' Vous rédigez sans relecture systématique externe. La confiance dans votre écrit supprime un frein quotidien.' },
    { titre: 'Vos erreurs récurrentes sont corrigées durablement.', desc: ' Pas mémorisées — comprises. La compréhension de la règle produit une correction qui dure.' },
    { titre: 'Vous maîtrisez le registre formel français.', desc: ' Vous savez quand utiliser quelle formule et pourquoi. Votre image professionnelle s\'en ressent immédiatement.' }
  ]
};

/* ================================================================
   INTERCULTUREL
   ================================================================ */

FORMATIONS_CONTENT['interculturel/core/negociation-cross'] = {
  pour_qui: [
    { icon: '◈', label: 'Acheteurs & négociateurs internationaux', desc: 'Vous négociez régulièrement avec des partenaires de cultures différentes (Chine, Japon, pays nordiques, Moyen-Orient) et voulez cesser de commettre les erreurs culturelles qui coûtent de la valeur.' },
    { icon: '⊞', label: 'Équipes commerciales à l\'export', desc: 'Vous développez des marchés étrangers et avez besoin de comprendre les codes relationnels et les styles de décision de vos interlocuteurs pour adapter votre approche commerciale.' },
    { icon: '◎', label: 'Managers de projets internationaux', desc: 'Vous gérez des projets avec des équipes ou partenaires multiculturels et devez naviguer les différences de style de communication, de rapport au temps et d\'expression du désaccord.' }
  ],
  deroulement: [
    {
      titre: 'Cartographie des cultures de négociation',
      duree: 'Matin J1',
      desc: 'Introduction aux modèles de communication cross-culturelle (Hall, Hofstede, Meyer). Application aux grandes zones géographiques représentées dans le contexte des participants. Identification de son propre profil culturel et de ses angles morts.',
      items: ['Axe haute / basse contextualité : ce que vous dites vs ce que vous laissez entendre', 'Axe direct / indirect : l\'expression du désaccord selon les cultures', 'Axe rapport au temps et à l\'accord formel', 'Auto-évaluation : votre profil culturel et ses forces / angles morts en négociation']
    },
    {
      titre: 'Asie du Nord-Est : Chine, Japon, Corée',
      duree: 'Après-midi J1',
      desc: 'Les codes spécifiques de la négociation avec les cultures asiatiques orientales : guanxi, mianzi, décision par consensus silencieux, interprétation du "oui" japonais et coréen. Simulations d\'ouverture de réunion et de découverte client dans ces contextes.',
      items: ['Guanxi et mianzi : les deux leviers du business en Chine', 'Le "oui" japonais et coréen : comment distinguer l\'accord du désaccord poli', 'Le rôle du repas et du cadeau dans les cultures asiatiques', 'Simulation : première réunion avec un partenaire chinois senior']
    },
    {
      titre: 'Anglophones et Nordiques',
      duree: 'Matin J2',
      desc: 'Les codes de la négociation avec les Britanniques, Américains, Scandinaves. L\'atténuation britannique, la directness américaine, le consensus suédois. Différences entre cultures à décision rapide (US) et cultures à décision collective (Scandinavie).',
      items: ['Décoder l\'atténuation britannique : "quite interesting" et autres formules codées', 'L\'américain : direct sur le fond, positif dans le ton', 'La Scandinavie : consensus, égalité hiérarchique, ponctualité', 'Simulation : négociation de prix avec un acheteur américain']
    },
    {
      titre: 'Simulations interculturelles croisées',
      duree: 'Après-midi J2',
      desc: 'Simulation complète d\'une négociation internationale entre participants jouant des rôles culturellement définis (acheteur chinois / vendeur français ; partenaire américain / équipe européenne ; etc.). Débriefing sur les malentendus culturels produits et les ajustements possibles.',
      items: ['Simulation complète (45 min) avec attribution de profils culturels', 'Débriefing : quels malentendus se sont produits ?', 'Identification des ajustements qui auraient changé le résultat', 'Plan de préparation culturelle pour la prochaine négociation réelle']
    }
  ],
  exercices: [
    { titre: 'Cultural map', desc: 'En groupe, positionnement de 10 nationalités sur 3 axes (contextualité, directness, rapport au temps). Discussion des cas limites et des généralisations à éviter.' },
    { titre: 'Silent negotiation', desc: 'Négociation par écrit seulement (messages courts de 2 lignes max). Développe la précision lexicale et la conscience des ambiguïtés culturelles — tout doit être dit explicitement.' },
    { titre: 'Culture switch', desc: 'Le même scénario de négociation joué deux fois : d\'abord avec les codes culturels français, puis avec les codes d\'une culture désignée. Comparaison des résultats et des dynamiques.' },
    { titre: 'The misunderstanding debrief', desc: 'Présentation de 5 cas réels de malentendus interculturels en négociation. En groupe, identification de l\'erreur culturelle, de son mécanisme et de l\'ajustement qui aurait évité la situation.' }
  ],
  resultats: [
    { titre: 'Une carte des styles de négociation de vos marchés cibles.', desc: ' Personnalisée à votre contexte. Pas de généralités — des outils pour vos situations réelles.' },
    { titre: 'La capacité à adapter votre style selon l\'interlocuteur.', desc: ' Vous savez quand être direct, quand atténuer, quand accélérer, quand ralentir.' },
    { titre: 'Les erreurs culturelles les plus coûteuses éliminées.', desc: ' Faire perdre la face, pousser trop tôt vers une décision, ignorer les signaux de désaccord indirect — vous ne les ferez plus.' },
    { titre: 'Un résultat de simulation documenté.', desc: ' Votre comportement observé en simulation, les ajustements identifiés, le plan de travail pour les négociations réelles suivantes.' }
  ]
};

FORMATIONS_CONTENT['interculturel/core/management-multiculturel'] = {
  pour_qui: [
    { icon: '◈', label: 'Managers d\'équipes internationales', desc: 'Vous managez une équipe dont les membres viennent de 3 pays ou plus et constatez que vos méthodes de management ne produisent pas les mêmes résultats selon les profils.' },
    { icon: '⊞', label: 'RH et DRH de groupes internationaux', desc: 'Vous déployez des processus de management (évaluation, feedback, gestion de conflit, onboarding) dans des contextes multiculturels et cherchez à les adapter sans perdre leur cohérence.' },
    { icon: '◎', label: 'Managers en prise de poste international', desc: 'Vous prenez un poste dans un environnement multiculturel nouveau pour vous et voulez développer rapidement les compétences interculturelles qui vous permettront d\'être efficace dès les premières semaines.' }
  ],
  deroulement: [
    {
      titre: 'Diagnostic de son style de management en contexte multiculturel',
      duree: 'Matin J1',
      desc: 'Identification de son style de management dominant (Hersey-Blanchard, DISC appliqué au contexte interculturel) et de ses implications dans des contextes culturellement différents. Quand mon style "direct" crée de l\'inconfort. Quand mon style "participatif" est perçu comme de l\'incompétence.',
      items: ['Auto-diagnostic du style de management', 'Croisement style personnel / cultures de l\'équipe', 'Cartographie des frictions culturelles probables', 'Identification des 3 situations managériales les plus à risque dans son contexte']
    },
    {
      titre: 'Feedback, conflit et autorité selon les cultures',
      duree: 'Après-midi J1',
      desc: 'Comment donner du feedback positif et négatif dans des cultures différentes. Comment exercer l\'autorité dans des cultures hiérarchiques vs plates. Comment gérer les conflits ouverts (cultures germaniques, américaines) et les conflits silencieux (cultures asiatiques, africaines).',
      items: ['Feedback négatif : en privé toujours, mais comment selon les cultures', 'Autorité adaptée : quand être directif, quand faciliter', 'Conflit ouvert vs conflit silencieux : comment les détecter et les traiter', 'Simulation : conversation de recadrage avec un collaborateur de profil culturel défini']
    },
    {
      titre: 'Décision, délais et réunions multiculturelles',
      duree: 'Matin J2',
      desc: 'La prise de décision collective dans des équipes multiculturelles. Le rapport au temps et aux délais dans les cultures monochroniques (France, Allemagne, Scandinavie) et polychroniques (Méditerranée, Amérique latine, Afrique). Comment animer une réunion quand les codes de participation sont différents.',
      items: ['Cultures de consensus vs cultures de décision rapide', 'Rapport au temps : délai contractuel vs délai indicatif', 'Animer une réunion où certains ne prennent pas la parole spontanément', 'Simulation : réunion d\'équipe avec participants à profils culturels contrastés']
    },
    {
      titre: 'Plan d\'action et cas concrets',
      duree: 'Après-midi J2',
      desc: 'Chaque participant apporte 2 situations managériales réelles difficiles qu\'il a rencontrées ou qu\'il anticipe. Analyse collective et co-construction de réponses adaptées. Chaque participant repart avec un plan d\'action personnel.',
      items: ['Analyse de 6 à 8 cas réels apportés par les participants', 'Co-construction de réponses managériales culturellement adaptées', 'Plan d\'action individuel : les 3 changements à mettre en œuvre', 'Ressources recommandées pour continuer à développer son CQ']
    }
  ],
  exercices: [
    { titre: 'The cultural bridge', desc: 'En binôme interculturel (deux profils culturels différents dans l\'équipe), chacun explique comment il vit une situation managériale donnée depuis sa perspective culturelle. Exercice de prise de conscience mutuelle.' },
    { titre: 'Meeting simulation', desc: 'Réunion de 20 minutes avec des participants jouant des rôles culturels définis (Japonais qui ne prend pas la parole, Américain qui décide vite, Français qui argumente longuement). Le manager doit faire fonctionner la réunion.' },
    { titre: 'Feedback rewrite', desc: 'Un feedback négatif rédigé "à la française" est réécrit pour 3 contextes culturels différents (asiatique, nordique, américain). Développe la conscience du registre et de l\'adaptation.' }
  ],
  resultats: [
    { titre: 'Vous savez adapter votre style sans perdre votre authenticité.', desc: ' Adapter n\'est pas changer de personnalité — c\'est choisir le bon registre pour le bon contexte. Vous avez les outils pour faire ce choix consciemment.' },
    { titre: 'Vous détectez les conflits silencieux avant qu\'ils explosent.', desc: ' Les signaux de désaccord indirect, les absences de participation, les "oui" qui ne sont pas des ouis — vous les voyez.' },
    { titre: 'Vos réunions multiculturelles produisent des décisions.', desc: ' Vous savez comment créer les conditions de participation pour des profils culturels très différents.' },
    { titre: 'Un plan d\'action sur vos 3 situations à risque.', desc: ' Concret, personnalisé, actionnable dès la semaine suivante.' }
  ]
};

/* ================================================================
   IA
   ================================================================ */

FORMATIONS_CONTENT['ia/core/ia-metiers'] = {
  pour_qui: [
    { icon: '◈', label: 'Managers et cadres', desc: 'Vous entendez parler d\'IA partout mais vous ne voyez pas encore comment ça s\'applique concrètement à votre activité quotidienne. Vous voulez aller au-delà des buzzwords et identifier vos vrais cas d\'usage.' },
    { icon: '⊞', label: 'Professions libérales et consultants', desc: 'Production de contenu, recherche documentaire, synthèse, reporting — vous voulez comprendre comment l\'IA peut vous faire gagner plusieurs heures par semaine sur des tâches récurrentes.' },
    { icon: '◎', label: 'Dirigeants de PME', desc: 'Vous avez une entreprise à piloter avec des ressources limitées. L\'IA bien utilisée peut vous donner l\'équivalent d\'un assistant temps plein sur certaines tâches. Vous voulez comprendre lesquelles et comment.' }
  ],
  deroulement: [
    {
      titre: 'Panorama des outils et cas d\'usage réels',
      duree: 'Matin J1',
      desc: 'Tour d\'horizon des outils IA professionnels disponibles (Claude, GPT-4, Gemini, Perplexity, Midjourney, Copilot, Notion AI) par cas d\'usage. Ce n\'est pas une présentation théorique — chaque outil est démontré en live sur des tâches professionnelles réelles.',
      items: ['Cartographie des outils par cas d\'usage (rédaction, recherche, analyse, image, code)', 'Démonstrations live sur des tâches professionnelles des participants', 'Comparaison des forces et faiblesses de chaque outil', 'Identification des 3 outils les plus pertinents pour chaque participant']
    },
    {
      titre: 'Prompt engineering appliqué',
      duree: 'Après-midi J1',
      desc: 'La qualité d\'un output IA dépend à 80% de la qualité du prompt. Ce module enseigne les techniques de prompt engineering de façon pratique : rôle, contexte, tâche, format, contraintes. Chaque participant travaille sur ses propres cas d\'usage.',
      items: ['Structure RCTFC (Rôle / Contexte / Tâche / Format / Contraintes)', 'Exercice : réécriture de 5 prompts médiocres en prompts performants', 'Atelier : chaque participant écrit 3 prompts pour ses 3 tâches récurrentes', 'Débriefing collectif et partage des meilleures pratiques']
    },
    {
      titre: 'Automatisation de workflows',
      duree: 'Matin J2',
      desc: 'Comment chaîner plusieurs outils IA pour automatiser des workflows complets : de la collecte d\'information à la synthèse, du brief à la rédaction, du constat au rapport. Introduction à Zapier/Make pour les non-techniciens qui veulent aller plus loin.',
      items: ['Identification des workflows récurrents automatisables', 'Démonstration : un workflow de veille automatisé de A à Z', 'Démonstration : un workflow de rédaction de contenu de A à Z', 'Construction de son propre workflow prioritaire pendant la formation']
    },
    {
      titre: 'Limites, risques et pratique responsable',
      duree: 'Après-midi J2',
      desc: 'Ce que l\'IA ne peut pas faire. Les hallucinations et comment les détecter. Les risques de confidentialité. La question des droits sur les contenus générés. Construire une politique d\'usage de l\'IA adaptée à son organisation.',
      items: ['Les 5 types d\'hallucinations IA et comment les détecter', 'Données confidentielles : ce qu\'on ne met pas dans un prompt', 'Propriété intellectuelle : ce que dit la loi sur le contenu généré par IA', 'Draft de politique d\'usage IA pour son équipe ou organisation']
    }
  ],
  exercices: [
    { titre: 'Before / After', desc: 'Chaque participant apporte une tâche récurrente qu\'il fait "à la main". Il la refait avec IA pendant la formation. Comparaison du temps, de la qualité, de l\'effort.' },
    { titre: 'Prompt duel', desc: 'Même tâche, deux prompts différents. Comparaison des outputs. Identification de ce qui change d\'un prompt à l\'autre et pourquoi.' },
    { titre: 'Hallucination hunt', desc: 'L\'IA génère un texte comportant 3 à 5 informations fausses. Les participants identifient lesquelles et comment les détecter sans vérifier chaque fait.' },
    { titre: 'Workflow builder', desc: 'Chaque participant dessine son workflow IA idéal pour l\'une de ses tâches récurrentes. Présentation au groupe et feedback sur la faisabilité et les outils appropriés.' }
  ],
  resultats: [
    { titre: 'Vous avez identifié vos 3 cas d\'usage prioritaires.', desc: ' Pas "l\'IA en général" — vos tâches spécifiques, vos outils, vos gains de temps estimés.' },
    { titre: 'Vous maîtrisez le prompt engineering de base.', desc: ' Vous savez construire un prompt qui donne un résultat utile du premier coup (ou en 2 itérations).' },
    { titre: 'Vous avez un ou deux workflows IA opérationnels.', desc: ' Construits pendant la formation, utilisables le lendemain.' },
    { titre: 'Vous savez ce que vous ne devez pas faire.', desc: ' Les risques de confidentialité, les hallucinations, les limites légales — vous naviguez l\'IA de façon responsable.' }
  ]
};

FORMATIONS_CONTENT['ia/core/transformation-digitale'] = {
  pour_qui: [
    { icon: '◈', label: 'Dirigeants et C-suite', desc: 'Vous pilotez ou vous apprêtez à piloter une transformation digitale et voulez comprendre les facteurs de succès et d\'échec avant d\'engager des ressources significatives.' },
    { icon: '⊞', label: 'Directeurs de département', desc: 'Vous devez conduire un changement digital dans votre périmètre (SI, processus, outils) et avez besoin d\'un cadre méthodologique pour éviter les erreurs classiques.' },
    { icon: '◎', label: 'Chefs de projet transformation', desc: 'Vous êtes en charge opérationnelle d\'un projet de transformation digitale et cherchez à renforcer votre maîtrise des dimensions humaines et organisationnelles — les vrais leviers d\'adoption.' }
  ],
  deroulement: [
    {
      titre: 'Diagnostic de maturité digitale',
      duree: 'Matin',
      desc: 'Évaluation du niveau de maturité digitale de l\'organisation sur 5 dimensions : infrastructure, données, processus, compétences, culture. Identification des gaps les plus bloquants. Ce diagnostic est fait sur le cas réel de l\'organisation des participants (ou sur un cas proxy si nécessaire).',
      items: ['Grille de maturité digitale sur 5 dimensions (1 à 5)', 'Identification des 2 à 3 gaps prioritaires', 'Benchmarking sectoriel : où se situe votre organisation par rapport au marché ?', 'Priorisation des leviers d\'action à court, moyen et long terme']
    },
    {
      titre: 'Les 5 erreurs qui font échouer les transformations',
      duree: 'Après-midi partie 1',
      desc: 'Analyse des 5 erreurs documentées les plus fréquentes dans les transformations digitales : commencer par la technologie, négliger les managers intermédiaires, former trop peu et trop tard, ne pas définir les KPIs humains, et ne pas maintenir l\'attention de la direction dans la durée. Chaque erreur est illustrée par un cas réel.',
      items: ['Cas étudié 1 : une grande enseigne retail française, 3 ans de transformation, adoption à 20%', 'Cas étudié 2 : une PME industrielle, transformation réussie en 18 mois', 'Identification des erreurs déjà présentes dans le projet des participants', 'Définition des actions correctrices immédiates']
    },
    {
      titre: 'Conduite du changement : les leviers humains',
      duree: 'Après-midi partie 2',
      desc: 'La conduite du changement n\'est pas de la communication — c\'est de l\'ingénierie comportementale. Ce module travaille les leviers concrets : la création d\'une coalition de champions internes, la communication ciblée par profil de résistance, la formation continue plutôt qu\'événementielle, et les quick wins qui maintiennent la motivation.',
      items: ['Cartographie des parties prenantes : alliés, résistants, indifférents', 'Le champion interne : comment l\'identifier et l\'activer', 'Communication de transformation : les messages qui créent l\'adhésion', 'Feuille de route conduite du changement pour votre projet']
    }
  ],
  exercices: [
    { titre: 'Stakeholder map', desc: 'Cartographie de toutes les parties prenantes d\'une transformation digitale (réelle ou fictive) selon leur niveau d\'influence et leur disposition au changement. Identification des groupes prioritaires à adresser.' },
    { titre: 'Change message workshop', desc: 'Rédaction de 3 messages de communication de transformation pour 3 audiences différentes (équipe terrain, managers intermédiaires, direction). Développe la conscience de la diversité des motivations et résistances.' },
    { titre: 'KPI design', desc: 'Pour un projet de transformation donné, définir 3 KPIs technologiques et 3 KPIs humains (adoption, compétences, satisfaction) qui permettent de mesurer le vrai succès du projet.' }
  ],
  resultats: [
    { titre: 'Un diagnostic de maturité documenté pour votre organisation.', desc: ' Pas une vue générale — une évaluation ciblée sur vos gaps prioritaires et vos leviers d\'action.' },
    { titre: 'La capacité à anticiper et gérer les résistances.', desc: ' Vous savez cartographier les parties prenantes, identifier les profils de résistance et adapter votre approche.' },
    { titre: 'Une feuille de route conduite du changement.', desc: ' Acteurs clés, messages, timing, quick wins — construite pendant la formation sur votre projet réel.' },
    { titre: 'Des KPIs humains pour mesurer l\'adoption.', desc: ' Pas seulement les métriques techniques — les indicateurs qui montrent si les équipes utilisent vraiment ce qui a été déployé.' }
  ]
};

/* ================================================================
   COMMUNICATION
   ================================================================ */

FORMATIONS_CONTENT['communication/core/gestion-de-crise'] = {
  pour_qui: [
    { icon: '◈', label: 'Comités de direction', desc: 'Vous êtes responsable de la communication institutionnelle de votre organisation et voulez disposer d\'un protocole testé avant que la crise n\'arrive.' },
    { icon: '⊞', label: 'Directeurs de communication', desc: 'Vous avez en charge la gestion de la réputation de votre organisation et cherchez à formaliser et tester votre dispositif de communication de crise.' },
    { icon: '◎', label: 'Porte-paroles et directeurs généraux', desc: 'Vous êtes ou serez le visage de l\'organisation en situation de crise. Vous voulez préparer votre posture, vos messages et votre capacité à communiquer sous pression.' }
  ],
  deroulement: [
    {
      titre: 'Anatomie d\'une crise communicationnelle',
      duree: 'Matin J1',
      desc: 'Analyse de 4 crises réelles (2 gérées efficacement, 2 gérées catastrophiquement). Identification des facteurs qui ont déterminé le résultat. Construction d\'une grille d\'analyse des crises applicable à n\'importe quel contexte.',
      items: ['Analyse Johnson & Johnson / BP : les deux extrêmes', 'Grille d\'analyse : rapidité / cohérence / compassion / crédibilité', 'Cartographie des scénarios de crise propres à l\'organisation des participants', 'Identification des vulnérabilités communicationnelles prioritaires']
    },
    {
      titre: 'Les 10 premières heures : protocole d\'intervention',
      duree: 'Après-midi J1',
      desc: 'Le protocole heure par heure pour les 10 premières heures d\'une crise communicationnelle. Qui décide quoi, dans quel ordre, avec quel message, sur quel canal. Construction du plan de communication de crise de chaque organisation participante.',
      items: ['H+0 à H+2 : les décisions qui ne peuvent pas attendre', 'H+2 à H+6 : structurer la communication externe et interne', 'H+6 à H+24 : gérer la pression médiatique et les réseaux sociaux', 'Construction du plan de crise : chaque participant adapte le protocole à son contexte']
    },
    {
      titre: 'Media training et communication sous pression',
      duree: 'Matin J2',
      desc: 'Formation pratique au media training : comment répondre aux questions des journalistes en situation de crise. Les techniques de bridging (répondre à la question posée et amener sa propre réponse), de flagging (souligner les points clés), de deflecting (esquiver élégamment les questions pièges).',
      items: ['Techniques bridge, flag, deflect avec exemples réels', 'Exercice : interview de crise en conditions réelles (caméra allumée)', 'Gestion des questions pièges, des hypothèses, des questions de type "quand avez-vous arrêté de frapper votre femme ?"', 'Débriefing sur vidéo']
    },
    {
      titre: 'Simulation de crise complète',
      duree: 'Après-midi J2',
      desc: 'Simulation d\'une crise complète sur 3 heures : incident initial → premières communications → montée en pression médiatique → conférence de presse simulée → gestion des réseaux sociaux. Chaque participant joue un rôle (porte-parole, directeur communication, DG, juriste).',
      items: ['Scénario de crise adapté au secteur des participants', 'Rôles distribués : porte-parole, cellule de crise, service com, juriste', 'Simulation en temps réel avec pression montante', 'Débriefing collectif et individuel : ce qui a fonctionné, ce qu\'il faut corriger']
    }
  ],
  exercices: [
    { titre: 'Message house', desc: 'Construction d\'un "message house" pour un scénario de crise : le message chapeau (une phrase), les 3 piliers (arguments), les preuves (faits, chiffres). Outil de préparation pré-crise qui structure la communication sous pression.' },
    { titre: 'Hot seat interview', desc: 'Un participant joue le porte-parole, deux autres jouent des journalistes avec des questions préparées spécifiquement pour déstabiliser. 8 minutes d\'interview filmée. Débriefing sur vidéo.' },
    { titre: 'Social media drill', desc: 'Simulation de 30 minutes de gestion de réseaux sociaux en crise : tweets hostiles, commentaires, rumeurs. Les participants doivent décider quoi répondre, quoi ignorer, quoi corriger, et en combien de temps.' }
  ],
  resultats: [
    { titre: 'Un plan de communication de crise documenté.', desc: ' Protocole heure par heure, rôles définis, messages clés par scénario. Prêt à être activé.' },
    { titre: 'Un porte-parole formé et entraîné.', desc: ' Avec une vidéo de sa performance en simulation. La différence entre une répétition et une vraie crise est souvent là.' },
    { titre: 'La capacité à décider vite sous pression.', desc: ' La simulation a créé un muscle de décision rapide. Le vrai bénéfice d\'un exercice de crise.' },
    { titre: 'Un audit de vulnérabilité réalisé.', desc: ' Vous savez quels sont vos points faibles communicationnels avant que la crise n\'arrive pour vous le montrer.' }
  ]
};

FORMATIONS_CONTENT['communication/core/techniques-de-vente'] = {
  pour_qui: [
    { icon: '◈', label: 'Commerciaux B2B et B2C', desc: 'Vous avez de l\'expérience en vente mais cherchez à structurer votre approche, augmenter votre taux de closing et gérer les objections avec plus d\'efficacité et moins d\'effort.' },
    { icon: '⊞', label: 'Dirigeants et fondateurs', desc: 'Vous "vendez" votre vision, votre entreprise ou votre produit en permanence — à des clients, des investisseurs, des partenaires. Vous voulez des techniques de persuasion éthique adaptées à votre profil.' },
    { icon: '◎', label: 'Consultants et indépendants', desc: 'Votre activité repose sur votre capacité à convaincre des clients de vous faire confiance sur des engagements souvent importants et des prix élevés. Vous voulez professionnaliser votre approche commerciale.' }
  ],
  deroulement: [
    {
      titre: 'Psychologie de la décision d\'achat',
      duree: 'Matin J1',
      desc: 'Comprendre pourquoi les gens achètent — et pourquoi ils ne le font pas. Les travaux de Kahneman (système 1 / système 2), Cialdini (les 7 principes de persuasion), Pink (les nouveaux ressorts de la vente). Application concrète aux situations de vente des participants.',
      items: ['Les 7 principes de Cialdini en contexte B2B', 'Système 1 (émotionnel) vs Système 2 (rationnel) : lequel décide vraiment ?', 'L\'acheteur moderne : informé, méfiant, pressé', 'Auto-diagnostic : votre profil de vendeur et ses forces / angles morts']
    },
    {
      titre: 'La découverte consultative : SPIN en pratique',
      duree: 'Après-midi J1',
      desc: 'Le modèle SPIN (Situation / Problem / Implication / Need-payoff) de Neil Rackham appliqué aux cas réels des participants. Les questions d\'Implication sont les plus puissantes — elles font prendre conscience de l\'urgence au client lui-même. Simulation complète de phase de découverte.',
      items: ['Les 4 types de questions SPIN et leur moment d\'utilisation', 'Les questions d\'Implication : ce qui crée vraiment la motivation d\'achat', 'Exercice : réécriture de 10 questions fermées en questions SPIN ouvertes', 'Simulation de découverte complète (20 min) avec feedback']
    },
    {
      titre: 'Proposition de valeur et traitement des objections',
      duree: 'Matin J2',
      desc: 'Comment formuler une proposition de valeur dans le langage du client (pas dans le vôtre). Les 6 objections les plus fréquentes en B2B et comment les traiter. La distinction entre objections réelles et prétextes. Les formules de concession conditionnelle.',
      items: ['Structure Problem / Solution / Proof / ROI', 'Les 6 objections standards et les réponses qui fonctionnent', 'Identifier une vraie objection vs un prétexte', '"If you can X, we can Y" — la formule de la concession conditionnelle', 'Simulation : 5 objections en 10 minutes avec réponses']
    },
    {
      titre: 'Closing et fidélisation',
      duree: 'Après-midi J2',
      desc: 'Les techniques de closing adaptées au B2B complexe (pas de closing agressif — de la facilitation de décision). Comment reconnaître les signaux d\'achat. Comment relancer sans harceler. La relation post-vente comme actif commercial.',
      items: ['Les signaux d\'achat : ce que dit le client quand il est prêt à signer', '"On the basis of what we\'ve discussed, what would be the logical next step?"', 'La relance : fréquence, ton, valeur ajoutée à chaque contact', 'Simulation de cycle de vente complet avec closing']
    }
  ],
  exercices: [
    { titre: 'Value proposition rewrite', desc: 'Chaque participant réécrit son pitch de vente habituel en structure Problem / Solution / Proof / ROI. Comparaison avant / après et identification de ce qui change dans la réception.' },
    { titre: 'Objection tennis', desc: 'Un participant vend, l\'autre objecte sans relâche. 6 objections différentes en 12 minutes. Développe les réponses automatiques et élimine les hésitations sous pression.' },
    { titre: 'Closing simulation', desc: 'Simulation complète d\'un entretien de vente de 20 minutes sur un cas professionnel réel. Enregistrement vidéo. Débriefing sur le moment et la façon dont le closing a été tenté ou manqué.' },
    { titre: 'Discovery mastery', desc: '20 minutes de phase de découverte sans parler de son produit ou service. Uniquement des questions. L\'objectif est de faire parler le "client" jusqu\'à ce qu\'il verbalize lui-même le besoin de changer de situation.' }
  ],
  resultats: [
    { titre: 'Un pitch restructuré dans le langage du client.', desc: ' Plus de liste de caractéristiques — une proposition de valeur qui parle du client, pas de vous.' },
    { titre: 'Les 6 objections traitées avec précision.', desc: ' Automatisées, adaptées à votre contexte, testées en simulation.' },
    { titre: 'Un closing naturel qui ne force pas.', desc: ' Vous savez reconnaître les signaux d\'achat et faciliter la décision sans pression ni manipulation.' },
    { titre: 'Un taux de closing documenté.', desc: ' Avant / après la formation, mesuré sur les 30 jours suivants avec les outils de suivi définis pendant la formation.' }
  ]
};

/* ================================================================
   VEILLE
   ================================================================ */

FORMATIONS_CONTENT['veille/core/veille-strategique'] = {
  pour_qui: [
    { icon: '◈', label: 'Dirigeants de PME et ETI', desc: 'Vous prenez des décisions stratégiques sans avoir l\'information actualisée sur votre marché. Vous voulez un système de veille simple et efficace qui tient dans votre emploi du temps.' },
    { icon: '⊞', label: 'Responsables marketing et stratégie', desc: 'Vous devez alimenter la réflexion stratégique de votre organisation avec des informations fiables sur la concurrence, les tendances et la réglementation.' },
    { icon: '◎', label: 'Consultants et indépendants', desc: 'La veille de votre marché est un avantage compétitif direct — elle vous permet d\'apporter à vos clients des perspectives qu\'ils n\'ont pas. Vous voulez structurer ce que vous faites déjà intuitivement.' }
  ],
  deroulement: [
    {
      titre: 'Cadrage stratégique de la veille',
      duree: 'Matin partie 1 (2h)',
      desc: 'La veille commence par une question : quelles décisions cette veille est-elle censée éclairer ? Sans cette question, la veille devient une accumulation d\'information non actionnée. Ce module définit les axes, les questions stratégiques et les indicateurs de pertinence pour chaque organisation.',
      items: ['Les 5 axes de veille : concurrentielle, technologique, réglementaire, marché, géopolitique', 'Pour chaque axe : quelle décision cette information doit-elle éclairer ?', 'Priorisation des axes selon la stratégie de l\'organisation', 'Définition de 3 à 5 signaux "déclencheurs" qui nécessitent une action immédiate']
    },
    {
      titre: 'Architecture du système de veille',
      duree: 'Matin partie 2 (2h)',
      desc: 'Construction du système de collecte automatisée : sélection des sources par axe, configuration des outils (Feedly, Google Alerts, Mention, LinkedIn), définition de la routine quotidienne. Chaque participant configure son propre système pendant la session.',
      items: ['Configuration Feedly : 30 à 40 sources par axe (fait pendant la formation)', 'Configuration Google Alerts : 10 à 15 alertes sur mots-clés stratégiques', 'LinkedIn : suivis stratégiques, alertes offres d\'emploi concurrents', 'Création d\'un tableau de bord de veille partageable']
    },
    {
      titre: 'Traitement et valorisation de l\'information',
      duree: 'Après-midi partie 1 (2h)',
      desc: 'La veille ne vaut que si elle se transforme en connaissance actionnée. Ce module enseigne comment trier rapidement le signal du bruit, comment synthétiser les informations pertinentes, et comment les transformer en recommandations concrètes pour la décision.',
      items: ['La règle des 3 questions : est-ce nouveau ? est-ce important ? est-ce actionnable ?', 'Construction de fiches de synthèse de veille (template fourni)', 'Format de newsletter interne mensuelle de veille', 'Présentation d\'une veille en 10 minutes en réunion de direction']
    },
    {
      titre: 'Simulation et plan de déploiement',
      duree: 'Après-midi partie 2 (2h)',
      desc: 'Simulation d\'une semaine de veille en accéléré : les participants travaillent sur de vraies informations de leur secteur, trient, synthétisent et présentent leurs insights. Chaque participant définit son plan de déploiement sur 2 semaines.',
      items: ['Simulation de veille sur 45 minutes : tri, synthèse, présentation', 'Débriefing sur les choix de priorisation', 'Plan de déploiement individuel sur 2 semaines', 'Point de suivi à J+15 (optionnel) pour ajustement']
    }
  ],
  exercices: [
    { titre: 'Signal/noise sort', desc: '20 titres d\'articles sur un secteur donné. En 3 minutes, identifier les 5 signaux forts et les 15 à ignorer. Développe la rapidité de tri — compétence clé pour une routine de 30 min/jour.' },
    { titre: 'Competitor deep-dive', desc: 'Analyse approfondie d\'un concurrent en 45 minutes : site web, offres d\'emploi, réseaux sociaux, avis clients, presse. Production d\'une fiche de 1 page. Révèle les informations disponibles publiquement et les méthodologies d\'extraction.' },
    { titre: 'The weak signal', desc: 'Identification d\'un signal faible dans un corpus d\'informations : une offre d\'emploi qui révèle un pivot stratégique, un brevet déposé qui annonce un nouveau produit, un recrutement en Asie qui annonce une expansion. Développe la lecture entre les lignes.' }
  ],
  resultats: [
    { titre: 'Un système de veille opérationnel et automatisé.', desc: ' Configuré pendant la formation, utilisable le lendemain. 30 minutes par jour, pas 3 heures.' },
    { titre: 'Des sources sélectionnées et qualifiées pour chaque axe.', desc: ' Plus de navigation à l\'intuition — une liste de sources curatées, actualisées et pertinentes.' },
    { titre: 'Un format de synthèse partageable.', desc: ' Template de newsletter interne, de fiche de veille, de présentation en réunion. La veille devient visible pour l\'organisation.' },
    { titre: 'La capacité à transformer l\'information en recommandation.', desc: ' Pas de data dump — des insights actionnables liés à des décisions concrètes.' }
  ]
};

FORMATIONS_CONTENT['veille/core/analyse-concurrentielle'] = {
  pour_qui: [
    { icon: '◈', label: 'Directeurs stratégie et développement', desc: 'Vous devez produire une analyse concurrentielle pour éclairer une décision de positionnement, d\'entrée sur marché ou de lancement produit. Vous voulez une méthodologie rigoureuse et reproductible.' },
    { icon: '⊞', label: 'Équipes marketing et produit', desc: 'Vous suivez la concurrence mais de façon ad hoc et non structurée. Vous voulez formaliser ce processus pour que l\'intelligence concurrentielle alimente vraiment les décisions produit et go-to-market.' },
    { icon: '◎', label: 'Consultants et analystes', desc: 'Vous réalisez des analyses concurrentielles pour des clients et cherchez à standardiser et enrichir votre méthodologie pour livrer des analyses plus pertinentes en moins de temps.' }
  ],
  deroulement: [
    {
      titre: 'Cadrage et sélection des concurrents',
      duree: 'Matin partie 1',
      desc: 'La première question d\'une analyse concurrentielle n\'est pas "qui sont mes concurrents" — c\'est "quelle décision cette analyse est-elle censée éclairer ?". Ce cadrage détermine le périmètre, la profondeur et les dimensions à analyser. Exercice de définition du périmètre concurrentiel (directs / indirects / substituts / entrants potentiels).',
      items: ['Les 4 types de concurrents : directs, indirects, substituts, entrants potentiels', 'Matrice de priorisation des concurrents à analyser', 'Définition du périmètre géographique et temporel', 'Sélection des 3 à 5 concurrents prioritaires']
    },
    {
      titre: 'Collecte d\'information : sources et techniques',
      duree: 'Matin partie 2',
      desc: 'Les sources d\'information concurrentielle disponibles publiquement et comment les exploiter efficacement. Sites web, offres d\'emploi (qui révèlent les priorités stratégiques), brevets, comptes annuels, avis clients, réseaux sociaux, conférences. La technique du "client mystère" pour les offres commerciales.',
      items: ['Pappers et Infogreffe : extraire les données financières', 'LinkedIn Insights : effectifs, croissance, recrutements', 'Offres d\'emploi comme signal stratégique (exercice)', 'Client mystère : demander une démo ou un devis en simulant un prospect']
    },
    {
      titre: 'Analyse et construction de la grille de valeur',
      duree: 'Après-midi partie 1',
      desc: 'Analyse des propositions de valeur, positionnements prix et communications de 3 à 5 concurrents. Construction d\'une grille de valeur comparative sur les attributs clés du marché. Identification des zones de sur-pondération (tout le monde le fait mais les clients ne le valorisent pas) et de sous-pondération (personne ne le fait mais les clients le voudraient).',
      items: ['Grille de valeur comparative sur 8 à 12 attributs', 'Identification des "océans rouges" (hyperconcurrence) et "bleus" (sous-exploités)', 'Analyse des angles morts des concurrents', 'Construction du positionnement différenciant optimal']
    },
    {
      titre: 'Production de l\'analyse et recommandations',
      duree: 'Après-midi partie 2',
      desc: 'Mise en forme de l\'analyse concurrentielle en un livrable actionnable (10 à 12 slides). Présentation des recommandations de positionnement. Définition du processus de mise à jour régulière de l\'analyse.',
      items: ['Template de livrable concurrentiel (fourni)', 'Structure : cartographie → analyse top 3 → opportunités → recommandations', 'Exercice : présentation de l\'analyse en 10 minutes', 'Fréquence et processus de mise à jour']
    }
  ],
  exercices: [
    { titre: 'Mystery shopping sprint', desc: 'En 45 minutes, chaque participant "shoppe" un concurrent défini : site web, pricing, formulaire de contact, argumentaire de vente. Production d\'une fiche de 10 informations clés.' },
    { titre: 'Job posting intel', desc: 'Analyse de 5 offres d\'emploi récentes d\'un concurrent. Identification des signaux stratégiques cachés : nouveau marché, nouvelle technologie, nouveau segment, pivot de modèle.' },
    { titre: 'Value grid construction', desc: 'En groupe, construction d\'une grille de valeur pour un secteur réel avec 5 attributs et 4 concurrents. Débriefing sur les désaccords de scoring — révèle les hypothèses implicites sur ce que les clients valorisent.' }
  ],
  resultats: [
    { titre: 'Une méthodologie d\'analyse concurrentielle reproductible.', desc: ' Pas une analyse unique — un processus que vous pouvez refaire en 48 heures sur n\'importe quel marché.' },
    { titre: 'Un livrable concurrentiel opérationnel.', desc: ' Construit pendant la formation sur un cas réel ou proxy. Utilisable immédiatement.' },
    { titre: 'La capacité à identifier les opportunités de positionnement.', desc: ' Les zones non occupées, les besoins non servis, les angles morts de la concurrence.' },
    { titre: 'Un réseau de sources curatées par secteur.', desc: ' Les sources clés de votre secteur identifiées, qualifiées, organisées pour la surveillance continue.' }
  ]
};

/* ================================================================
   LANGUES — SUÉDOIS
   ================================================================ */

FORMATIONS_CONTENT['langues/suedois/business'] = {
  pour_qui: [
    { icon: '🏢', label: 'Professionnels en poste en Suède', desc: 'Vous travaillez pour une entreprise suédoise ou avec des partenaires scandinaves. Réunions, emails, négociations — vous avez besoin d\'un suédois opérationnel pour votre secteur d\'activité.' },
    { icon: '🤝', label: 'Managers d\'équipes mixtes franco-suédoises', desc: 'Vous encadrez des collaborateurs suédois ou coordonnez avec un siège à Stockholm. Maîtriser le registre professionnel suédois renforce votre autorité et votre lisibilité managériale.' },
    { icon: '🌍', label: 'Candidats à l\'expatriation en Scandinavie', desc: 'Vous vous préparez à une mobilité professionnelle en Suède, Norvège ou dans les pays nordiques. Ce module vous donne les fondations lexicales et culturelles pour une intégration rapide.' }
  ],
  deroulement: [
    {
      titre: 'Phase 1 — Le suédois professionnel : structure et registres',
      duree: '2 × 2h',
      desc: 'Nous commençons par cartographier les spécificités du suédois des affaires : ton direct, hiérarchie plate, consensus comme mode de décision. Vous apprenez à formuler des propositions, exprimer des réserves et poser des questions — sans passer pour agressif ou effacé.',
      items: [
        'Vocabulaire core B1/B2 des secteurs tech, industrie et services',
        'Structures de phrases pour proposer, refuser, négocier poliment',
        'Tournures formelles vs informelles dans le contexte suédois (tutoiement systématique du "du-reformen")',
        'Emails professionnels types : prise de contact, relance, rapport de réunion'
      ]
    },
    {
      titre: 'Phase 2 — Communication réelle en contexte',
      duree: '2 × 2h',
      desc: 'Mises en situation réelles tirées de votre secteur d\'activité. Vous menez des réunions en suédois, vous défendez une position, vous répondez à des objections. L\'objectif : que la langue devienne un outil fluide, pas un obstacle.',
      items: [
        'Simulation de réunion en suédois (ordre du jour, prise de parole, compte rendu)',
        'Présentation d\'un projet ou d\'un produit en 5 minutes chrono',
        'Gestion des incompréhensions : reformuler, vérifier, clarifier',
        'Téléphone et visioconférence : spécificités phonétiques et rythme de parole'
      ]
    },
    {
      titre: 'Phase 3 — Négociation et décision en culture suédoise',
      duree: '2h + travail personnel',
      desc: 'La Suède a une culture de décision par consensus. Savoir naviguer ce processus sans le court-circuiter est une compétence professionnelle à part entière. Nous travaillons les séquences de négociation longues, la patience stratégique et la lecture des silences.',
      items: [
        'Identifier les signaux d\'accord implicite dans la culture suédoise',
        'Formuler des concessions sans perdre sa position',
        'Clôturer une négociation et formaliser un accord oral',
        'Suivi écrit post-réunion : le compte rendu suédois standard'
      ]
    }
  ],
  exercices: [
    { titre: 'L\'email de relance parfait', desc: 'Vous rédigez un email de relance client en suédois à partir d\'un brief. Correction collective sur le ton, la structure et les formules de politesse adaptées au contexte B2B nordique.' },
    { titre: 'La réunion de projet simulée', desc: 'Vous participez à une réunion de projet fictive en suédois — ordre du jour fourni. Chaque participant joue un rôle (chef de projet, client, expert technique). Débriefing sur les prises de parole et les incompréhensions.' },
    { titre: 'Pitch produit en 3 minutes', desc: 'Vous préparez et délivrez un pitch de 3 minutes en suédois sur votre produit ou service réel. Feedback sur la clarté, l\'accent, et l\'adaptation culturelle du message.' },
    { titre: 'Négociation tarifaire en tandem', desc: 'Exercice de négociation en duo : l\'un joue l\'acheteur suédois, l\'autre le vendeur francophone. Objectif : parvenir à un accord en suédois uniquement, dans le respect du style de décision scandinave.' }
  ],
  resultats: [
    { titre: 'Un suédois professionnel utilisable dès lundi.', desc: 'Pas un suédois parfait — un suédois fonctionnel pour vos usages réels : email, réunion, appel, négociation courte.' },
    { titre: 'La compréhension de la culture professionnelle suédoise.', desc: 'Vous savez lire un silence, respecter le consensus, et éviter les erreurs culturelles qui nuisent aux relations d\'affaires nordiques.' },
    { titre: 'Un lexique sectoriel construit sur vos cas réels.', desc: 'Vous repartez avec un glossaire personnalisé de 100+ termes dans votre secteur, en suédois et français.' },
    { titre: 'La confiance pour communiquer directement.', desc: 'Finies les hésitations à prendre la parole en réunion. Vous avez pratiqué suffisamment pour que la langue ne soit plus un frein à votre influence.' }
  ]
};

FORMATIONS_CONTENT['langues/suedois/colloquial'] = {
  pour_qui: [
    { icon: '🏠', label: 'Expatriés en Suède au quotidien', desc: 'Vous vivez ou allez vivre en Suède. Vous voulez vous intégrer socialement, pas seulement survivre en anglais. Ce module vous donne un suédois vivant, naturel, celui que les Suédois utilisent vraiment.' },
    { icon: '👫', label: 'Partenaires de Suédois dans la vie personnelle', desc: 'Vous parlez suédois avec votre famille suédoise ou votre cercle social. Vous comprenez les grandes lignes mais les conversations rapides, l\'humour ou les expressions idiomatiques vous échappent.' },
    { icon: '🎓', label: 'Apprenants ayant une base scolaire', desc: 'Vous avez appris le suédois à l\'école ou en autodidacte mais vous parlez un suédois "de manuel". Ce module vous fait passer du registre formel au registre naturel et courant.' }
  ],
  deroulement: [
    {
      titre: 'Phase 1 — Le suédois vivant : prononciation et rythme',
      duree: '2h',
      desc: 'La prosodie suédoise est sa signature. Ce module commence par l\'oreille : vous écoutez du suédois authentique (podcasts, conversations, émissions TV) et reprogrammez votre perception du rythme, des contractions et des élisions naturelles.',
      items: [
        'Les pièges phonétiques : le "sj-ljud", le "tjek-ljud", les voyelles longues/courtes',
        'Contractions naturelles du suédois oral ("jag" → "ja", "det" → "de")',
        'Prosodie et intonation : le suédois est une langue à tons lexicaux',
        'Entraînement à la compréhension de l\'accents régionaux : Stockholm, Göteborg, Skåne'
      ]
    },
    {
      titre: 'Phase 2 — Expressions idiomatiques et registre familier',
      duree: '2 × 2h',
      desc: 'Vous apprenez le suédois tel qu\'il est parlé, pas tel qu\'il est écrit. Expressions figées, interjections, formules de convivialité — tout ce qui fait que vous passez de "l\'étranger qui parle suédois" à "quelqu\'un avec qui on a plaisir à parler".',
      items: [
        '50 expressions idiomatiques suédoises incontournables avec leur contexte d\'usage',
        'Humour suédois : comprendre l\'ironie nordique, lagom, and the "jantelagen"',
        'Formules de politesse informelle : fika, tack, varsågod — et leurs nuances',
        'Small talk suédois : météo, nature, sport, la culture du consensus'
      ]
    },
    {
      titre: 'Phase 3 — Pratique libre et correction naturelle',
      duree: '2h',
      desc: 'Conversation libre sur des sujets de la vie quotidienne. L\'objectif : parler sans censure, faire confiance à votre instinct linguistique, et recevoir un feedback en temps réel sur ce qui sonne vrai versus artificiel.',
      items: [
        'Débats informels sur des sujets suédois courants (logement, travail, nature)',
        'Jeux de rôle : au café, chez des amis, en magasin',
        'Auto-correction guidée : identifier ses propres patterns d\'erreur',
        'Ressources pour continuer seul : séries suédoises, podcasts, apps recommandées'
      ]
    }
  ],
  exercices: [
    { titre: 'L\'écoute active', desc: 'Vous écoutez un extrait de 3 minutes d\'une émission suédoise sans sous-titres. Vous reconstituez le sens, identifiez les mots inconnus, et discutez des stratégies d\'inférence contextuelle.' },
    { titre: 'Le jeu des expressions', desc: 'Flashcards d\'expressions idiomatiques : vous devez trouver l\'équivalent français ET produire une phrase d\'exemple en contexte réel. Travail en duo avec correction immédiate.' },
    { titre: 'La fika simulation', desc: 'Une "fika" simulée : conversation informelle sur n\'importe quel sujet, en suédois uniquement. L\'objectif n\'est pas la correction grammaticale mais la fluidité et la naturalité.' },
    { titre: 'Le monologue spontané', desc: 'Vous parlez 2 minutes en suédois sur un sujet tiré au sort (votre week-end, un film, une actualité). Analyse des hésitations, des contournements et des erreurs récurrentes.' }
  ],
  resultats: [
    { titre: 'Un suédois qui sonne naturel, pas scolaire.', desc: 'Les Suédois remarquent et apprécient quand un étranger parle leur langue avec fluidité et authenticité. Vous repartez avec ce suédois vivant.' },
    { titre: 'La compréhension du suédois oral rapide.', desc: 'Émissions TV, conversations entre natifs, podcasts — vous pouvez suivre sans décrocher à chaque phrase complexe.' },
    { titre: 'Un répertoire de 50+ expressions idiomatiques contextualisées.', desc: 'Avec des exemples d\'usage réels, pas des définitions de dictionnaire.' },
    { titre: 'La confiance sociale en suédois.', desc: 'Vous pouvez participer à une soirée, un repas de famille, une conversation de rue — sans passer par l\'anglais par défaut.' }
  ]
};

FORMATIONS_CONTENT['langues/suedois/institutional'] = {
  pour_qui: [
    { icon: '🏛️', label: 'Diplomates et fonctionnaires en poste nordique', desc: 'Vous représentez une institution française ou européenne en Suède. Le protocole institutionnel suédois, la langue des discours officiels et des documents administratifs sont votre quotidien.' },
    { icon: '📋', label: 'Juristes et consultants travaillant avec des institutions suédoises', desc: 'Contrats, appels d\'offres, textes réglementaires — vous lisez et rédigez des documents officiels suédois. Ce module vous donne la maîtrise du registre légal et institutionnel.' },
    { icon: '🎓', label: 'Chercheurs et universitaires en collaboration avec des universités nordiques', desc: 'Conférences, publications, communications académiques en suédois. Vous avez besoin d\'un suédois précis, nuancé, adapté aux codes de la communication scientifique.' }
  ],
  deroulement: [
    {
      titre: 'Phase 1 — La langue institutionnelle suédoise',
      duree: '2 × 2h',
      desc: 'Le suédois institutionnel a ses propres codes, son vocabulaire, ses formules figées. Nous cartographions les registres : administratif, juridique, diplomatique, académique. Vous apprenez à distinguer ce qui est obligatoire (protocole) de ce qui est stylistique (choix).',
      items: [
        'Vocabulaire institutionnel : termes juridiques, administratifs, parlementaires',
        'Structure des documents officiels suédois : rapports, protocoles, communiqués',
        'Abréviations et sigles institutionnels suédois courants',
        'Le "klarspråk" : la politique suédoise de langage clair dans les communications publiques'
      ]
    },
    {
      titre: 'Phase 2 — Rédaction et prise de parole institutionnelle',
      duree: '3 × 2h',
      desc: 'Production écrite et orale dans des contextes institutionnels réels. Rédaction de communiqués, préparation de discours, participation à des commissions ou des réunions de travail interinstitutionnelles.',
      items: [
        'Rédaction d\'un communiqué de presse institutionnel en suédois',
        'Discours protocolaire : ouverture de conférence, remerciements officiels, conclusion',
        'Prise de parole en commission : tour de table, question-réponse, mocion',
        'Correspondance officielle : lettres formelles, réponses à des demandes institutionnelles'
      ]
    },
    {
      titre: 'Phase 3 — Lecture et analyse de documents officiels',
      duree: '2h',
      desc: 'Exercices de compréhension sur des documents authentiques : législation suédoise, rapports de commission, appels d\'offres publics, publications académiques. Développement de la lecture rapide des documents denses.',
      items: [
        'Analyse d\'un texte de loi suédois : structure, terminologie, implications',
        'Synthèse d\'un rapport gouvernemental en français à partir d\'un original suédois',
        'Repérage des points clés dans un appel d\'offres public',
        'Lecture critique d\'un article académique en suédois'
      ]
    }
  ],
  exercices: [
    { titre: 'Le communiqué officiel', desc: 'Vous rédigez un communiqué de presse de 300 mots en suédois sur un événement institutionnel fictif. Correction sur la conformité au registre, la précision terminologique et le respect des formats officiels.' },
    { titre: 'Le discours protocolaire', desc: 'Vous préparez et délivrez un discours d\'ouverture de 3 minutes pour une conférence fictive. Feedback sur la posture, le vocabulaire et l\'adéquation au protocole suédois.' },
    { titre: 'La synthèse administrative', desc: 'Vous lisez un document officiel de 2 pages en suédois et rédigez une synthèse d\'une page en français. Exercice de compréhension approfondie et de transposition.' },
    { titre: 'La commission simulée', desc: 'Simulation d\'une réunion de travail interinstitutionnelle en suédois. Chaque participant représente une institution et doit défendre une position sur un sujet fictif.' }
  ],
  resultats: [
    { titre: 'La maîtrise du registre institutionnel suédois.', desc: 'Vous savez produire des documents conformes aux standards officiels suédois, sans erreur de registre ou de protocole.' },
    { titre: 'Une lecture fluide des textes officiels.', desc: 'Rapports, lois, appels d\'offres — vous naviguez ces documents sans dictionnaire, en identifiant rapidement les points essentiels.' },
    { titre: 'La crédibilité dans les contextes officiels.', desc: 'Votre suédois institutionnel est reconnu par vos interlocuteurs comme conforme aux standards. Vous n\'êtes plus perçu comme étranger dans les échanges formels.' },
    { titre: 'Un glossaire institutionnel personnalisé.', desc: 'Construit sur vos domaines d\'activité spécifiques — juridique, diplomatique, académique ou autre.' }
  ]
};

/* ================================================================
   LANGUES — NORVÉGIEN
   ================================================================ */

FORMATIONS_CONTENT['langues/norvegien/business'] = {
  pour_qui: [
    { icon: '⚡', label: 'Professionnels du secteur énergétique', desc: 'La Norvège est le plus grand producteur de pétrole et gaz d\'Europe. Si vous travaillez avec Equinor, des sous-traitants offshore ou dans les énergies renouvelables nordiques, le norvégien professionnel est un avantage compétitif décisif.' },
    { icon: '🚢', label: 'Acteurs du maritime et de la logistique', desc: 'Oslo et Bergen sont des hubs maritimes mondiaux. Shipping, construction navale, logistique offshore — ce module vous donne le vocabulaire et les codes de communication du secteur maritime norvégien.' },
    { icon: '🤝', label: 'Managers en partenariat avec des entreprises norvégiennes', desc: 'Vous négociez, co-développez ou supervisez des opérations avec des partenaires en Norvège. Communiquer en norvégien — même partiellement — change radicalement la qualité de la relation.' }
  ],
  deroulement: [
    {
      titre: 'Phase 1 — Le norvégien bokmål des affaires',
      duree: '2 × 2h',
      desc: 'Le norvégien bokmål est la variante standard des affaires. Nous commençons par ses spécificités par rapport au suédois et au danois — pour ceux qui ont une base scandinave — et par les fondations pour les débutants complets. Focus sur la communication professionnelle immédiatement utile.',
      items: [
        'Vocabulaire sectoriel : énergie, maritime, finance, technologie',
        'Structures de phrases courantes en contexte professionnel',
        'Les différences bokmål/nynorsk : comprendre pour ne pas être pris au dépourvu',
        'Communication asynchrone : emails, messages, rapports courts'
      ]
    },
    {
      titre: 'Phase 2 — Réunions et négociations en norvégien',
      duree: '2 × 2h',
      desc: 'Vous pratiquez le norvégien dans des situations de travail réelles. La culture norvégienne d\'affaires valorise la franchise, l\'égalité et l\'efficacité. Vous apprenez à communiquer dans ce registre direct sans heurter les sensibilités.',
      items: [
        'Mener ou participer à une réunion de travail en norvégien',
        'Présenter des données, des résultats, des recommandations',
        'Répondre à des questions inattendues et gérer l\'improvisation',
        'Négociation de contrat : proposer, contre-proposer, conclure en norvégien'
      ]
    },
    {
      titre: 'Phase 3 — Culture professionnelle norvégienne',
      duree: '2h',
      desc: 'La Norvège a une culture d\'entreprise spécifique : horizontale, fondée sur la confiance, peu hiérarchique. Ce dernier module est autant culturel que linguistique — vous apprenez à naviguer les dynamiques de travail norvégiennes pour être efficace, pas seulement compris.',
      items: [
        'La "Janteloven" norvégienne et son impact sur la communication professionnelle',
        'Prise de décision et consensus : similitudes et différences avec la Suède',
        'Les tabous professionnels : ce qu\'on ne dit pas en Norvège',
        'Humour, convivialité et intégration sociale dans un environnement de travail norvégien'
      ]
    }
  ],
  exercices: [
    { titre: 'Le rapport d\'activité', desc: 'Vous rédigez un rapport d\'activité mensuel de 300 mots en norvégien pour un supérieur fictif. Exercice d\'écriture professionnelle avec feedback sur la précision et l\'adéquation au registre.' },
    { titre: 'La réunion offshore', desc: 'Simulation d\'une réunion de sécurité sur une plateforme pétrolière fictive. Vocabulaire technique spécialisé, communication sous pression, gestion des incidents.' },
    { titre: 'La négociation de partenariat', desc: 'En binôme, vous négociez les termes d\'un accord commercial entre une entreprise française et une entreprise norvégienne. 30 minutes de négociation en norvégien avec un débriefing culturel.' },
    { titre: 'L\'appel vidéo imprévu', desc: 'Exercice de spontanéité : vous recevez un appel vidéo inopiné d\'un interlocuteur norvégien fictif qui vous pose 5 questions sur un projet en cours. Entraînement à la réactivité linguistique.' }
  ],
  resultats: [
    { titre: 'Un norvégien professionnel opérationnel.', desc: 'Vous pouvez conduire vos activités courantes en norvégien : emails, réunions, négociations simples, rapports.' },
    { titre: 'La compréhension de la culture d\'affaires norvégienne.', desc: 'Vous ne faites plus d\'erreurs culturelles qui nuisent à la relation. Vous comprenez les codes non-dits du management nordique.' },
    { titre: 'Un avantage concurrentiel réel dans votre secteur.', desc: 'Dans l\'énergie, le maritime ou la technologie, les interlocuteurs norvégiens respectent et préfèrent les partenaires qui font l\'effort de leur langue.' },
    { titre: 'Un lexique sectoriel documenté.', desc: 'Termes techniques de votre secteur en norvégien, avec contexte d\'usage et exemples de phrases.' }
  ]
};

FORMATIONS_CONTENT['langues/norvegien/colloquial'] = {
  pour_qui: [
    { icon: '🏔️', label: 'Expatriés en Norvège', desc: 'Vous vivez en Norvège et voulez vous intégrer socialement, comprendre vos voisins, vous faire des amis locaux — pas seulement gérer vos démarches administratives en anglais.' },
    { icon: '❤️', label: 'Personnes liées à la Norvège par la famille ou l\'amitié', desc: 'Votre famille est norvégienne ou vous avez un réseau amical fort en Norvège. Vous comprenez les grandes lignes mais le suivi des conversations familières rapides reste difficile.' },
    { icon: '🎿', label: 'Passionnés de culture et de nature norvégiennes', desc: 'Vous aimez la Norvège — ses paysages, sa littérature, son cinéma, sa musique. Vous voulez accéder à cette culture dans sa langue originale, pas traduite.' }
  ],
  deroulement: [
    {
      titre: 'Phase 1 — Phonologie et rythme norvégiens',
      duree: '2h',
      desc: 'Le norvégien oral est très différent du norvégien écrit. Ce module commence par une immersion auditive : vous réajustez votre oreille à la musique de la langue, aux contractions naturelles et aux variantes dialectales que vous allez rencontrer.',
      items: [
        'Le spectre dialectal norvégien : du bokmål au nynorsk, de l\'est à l\'ouest',
        'Contractions orales courantes qui déstabilisent les apprenants',
        'Intonation et prosodie : ce qui donne au norvégien son caractère mélodique',
        'Sons difficiles pour les francophones : le "kj", le "skj", les voyelles arrondies'
      ]
    },
    {
      titre: 'Phase 2 — Vocabulaire courant et expressions authentiques',
      duree: '2 × 2h',
      desc: 'Vous construisez un vocabulaire de la vie réelle : ce qui se dit dans les conversations, pas ce qui s\'écrit dans les manuels. Expressions du quotidien, humour, formules de convivialité, culture de la "koselig".',
      items: [
        'Expressions courantes du quotidien et leur contexte d\'usage',
        'La culture du "koselig" : convivialité, confort, présence — l\'art de vivre norvégien',
        'Humour norvégien : auto-dérision, rapport à la nature, culture de la modestie',
        'Interactions sociales : au marché, chez des amis, en randonnée, dans les transports'
      ]
    },
    {
      titre: 'Phase 3 — Conversation libre et immersion',
      duree: '2h',
      desc: 'Sessions de conversation libre sur des thèmes de la vie quotidienne norvégienne. L\'objectif est de construire la confiance pour parler spontanément, faire des erreurs, les corriger et continuer.',
      items: [
        'Débat informel : nature, politique, société norvégienne contemporaine',
        'Jeux de rôle du quotidien : cafés, randonnée, soirée chez des amis',
        'Consommation de contenu authentique : recommandations personnalisées',
        'Construction de routines d\'apprentissage autonome post-formation'
      ]
    }
  ],
  exercices: [
    { titre: 'L\'écoute dialectale', desc: 'Comparaison de 3 extraits audio de dialectes différents (oslo, bergen, trondheim). Vous identifiez les mots-clés communs malgré les variations phonétiques et discutez des stratégies d\'adaptation.' },
    { titre: 'La soirée "koselig"', desc: 'Simulation d\'une soirée informelle chez des Norvégiens. Small talk, plaisanteries, discussions sur la nature — tout en norvégien, dans le registre familier.' },
    { titre: 'Le journal télévisé norvégien', desc: 'Vous regardez 5 minutes du journal télévisé NRK sans sous-titres et résumez les 3 informations principales. Exercice de compréhension globale du norvégien journalistique.' },
    { titre: 'La chanson populaire', desc: 'Apprentissage d\'une chanson populaire norvégienne (traditionelle ou contemporaine) avec analyse des structures idiomatiques et des références culturelles.' }
  ],
  resultats: [
    { titre: 'Un norvégien naturel, pas de manuel.', desc: 'Vous parlez le norvégien des Norvégiens, avec les bonnes expressions, le bon rythme, le bon humour.' },
    { titre: 'La capacité à suivre des conversations authentiques.', desc: 'Films, séries, conversations familiales rapides — vous ne perdez plus le fil à chaque tournure idiomatique.' },
    { titre: 'Une intégration sociale réelle.', desc: 'Vous pouvez vous faire des amis, partager des moments de convivialité, exister dans la vie sociale locale — en norvégien.' },
    { titre: 'Des outils pour continuer seul.', desc: 'Séries, podcasts, apps, méthodes — vous repartez avec un plan d\'apprentissage autonome adapté à votre niveau et vos objectifs.' }
  ]
};

FORMATIONS_CONTENT['langues/norvegien/institutional'] = {
  pour_qui: [
    { icon: '🛢️', label: 'Représentants de secteurs régulés travaillant avec la Norvège', desc: 'Énergie, pêche, finance — la Norvège a des cadres réglementaires spécifiques. Comprendre et naviguer ces textes en norvégien est une compétence critique pour les professionnels de ces secteurs.' },
    { icon: '🏛️', label: 'Fonctionnaires en contact avec des administrations norvégiennes', desc: 'Douanes, autorités portuaires, administrations fiscales — vous avez des échanges avec des institutions norvégiennes. Ce module vous donne la langue et les codes de ces interactions.' },
    { icon: '⚖️', label: 'Juristes et compliance officers', desc: 'Droit maritime norvégien, GDPR appliqué à la Norvège, code du travail — vous avez besoin de lire et comprendre des textes juridiques en norvégien avec précision.' }
  ],
  deroulement: [
    {
      titre: 'Phase 1 — Le norvégien institutionnel et juridique',
      duree: '2 × 2h',
      desc: 'Introduction à la langue officielle norvégienne : sa structure, ses registres, ses conventions. Nous couvrons le vocabulaire des principaux secteurs institutionnels (énergie, maritime, droit, finance) et les formats standards des documents officiels.',
      items: [
        'Terminologie juridique norvégienne : contrats, responsabilité, procédures',
        'Vocabulaire des administrations : "Petroleumstilsynet", "Fiskeridirektoratet", "Skatteetaten"',
        'Structure des documents officiels norvégiens : lois, règlements, arrêtés',
        'Les sources officielles : Lovdata, Stortinget, Regjeringen — navigation et lecture'
      ]
    },
    {
      titre: 'Phase 2 — Rédaction et correspondance officielle',
      duree: '2 × 2h',
      desc: 'Production de documents dans les registres institutionnel et juridique. Rédaction de courriers officiels, de synthèses réglementaires, de notes de conformité en norvégien.',
      items: [
        'Correspondance avec des administrations norvégiennes : formulaires, demandes, réponses',
        'Note de conformité réglementaire sur un texte de loi norvégien',
        'Synthèse d\'une décision administrative ou judiciaire en français',
        'Compréhension des appels d\'offres publics : "anbud" en norvégien'
      ]
    },
    {
      titre: 'Phase 3 — Simulation de situations institutionnelles',
      duree: '2h',
      desc: 'Mise en pratique dans des situations institutionnelles simulées : réunion avec une autorité de régulation, présentation de compliance, gestion d\'un contrôle administratif.',
      items: [
        'Réunion avec un régulateur norvégien : préparer, présenter, répondre',
        'Gestion d\'un contrôle documentaire : produire les pièces requises',
        'Prise de parole en contexte formel : ton, posture, vocabulaire attendu',
        'Débriefing culturel : les spécificités de l\'administration norvégienne vs française'
      ]
    }
  ],
  exercices: [
    { titre: 'La lecture réglementaire', desc: 'Vous lisez un extrait de 1 page d\'une loi norvégienne (fournie) et en rédigez une synthèse des obligations clés pour une entreprise française. Exercice de compréhension juridique et de transfert inter-langues.' },
    { titre: 'La demande officielle', desc: 'Vous rédigez une demande officielle à une administration norvégienne fictive (ex. exemption de taxe, autorisation d\'exploitation). Format, ton et vocabulaire conformes aux standards.' },
    { titre: 'La réunion de compliance', desc: 'Simulation d\'une réunion entre un compliance officer français et un régulateur norvégien fictif. Vous défendez votre dossier, répondez aux objections, documentez les engagements.' },
    { titre: 'La veille réglementaire', desc: 'À partir d\'une liste de sites officiels norvégiens, vous identifiez une modification réglementaire récente pertinente pour un secteur donné et rédigez une note d\'alerte en français.' }
  ],
  resultats: [
    { titre: 'La lecture autonome des textes officiels norvégiens.', desc: 'Lois, règlements, arrêtés — vous pouvez les lire, les comprendre et en extraire les obligations pratiques sans intermédiaire.' },
    { titre: 'La capacité à rédiger dans le registre institutionnel norvégien.', desc: 'Vos courriers officiels, vos notes et vos documents respectent les conventions attendues par les institutions norvégiennes.' },
    { titre: 'Une crédibilité renforcée dans vos relations institutionnelles.', desc: 'Vos interlocuteurs norvégiens constatent que vous maîtrisez leur langue et leurs codes. Cela change le niveau de confiance et la qualité des échanges.' },
    { titre: 'Un glossaire sectoriel personnalisé.', desc: 'Les 150+ termes clés de votre secteur en norvégien — prêts pour une consultation rapide dans vos futures interactions.' }
  ]
};

/* ================================================================
   LANGUES — MANDARIN
   ================================================================ */

FORMATIONS_CONTENT['langues/mandarin/logique'] = {
  pour_qui: [
    { icon: '🧩', label: 'Débutants complets en chinois mandarin', desc: 'Vous n\'avez jamais étudié le mandarin. Vous voulez comprendre la logique de cette langue avant de vous lancer dans l\'apprentissage — pour éviter les blocages et les fausses routes que prennent la plupart des apprenants occidentaux.' },
    { icon: '🔄', label: 'Apprenants en difficulté avec les méthodes classiques', desc: 'Vous avez essayé le mandarin via des applications ou des cours standards et vous avez décroché. Ce module explique pourquoi les méthodes occidentales échouent souvent sur le mandarin et comment y remédier.' },
    { icon: '🏢', label: 'Professionnels préparant une collaboration avec la Chine', desc: 'Vous allez travailler avec des partenaires chinois. Comprendre la logique de leur langue — même sans la parler — vous donne une grille de lecture de leur façon de penser, de structurer l\'information et de communiquer.' }
  ],
  deroulement: [
    {
      titre: 'Phase 1 — Le mandarin comme système logique',
      duree: '3h',
      desc: 'Le mandarin n\'est pas une langue difficile — c\'est une langue différente. Ce module commence par déconstruire les a priori : pas de conjugaison, pas de genre, pas d\'accord — mais un système tonal et un système d\'écriture qui ont leur propre logique, remarquablement cohérente.',
      items: [
        'La grammaire mandarine : ordre des mots, aspects, classificateurs — logique et non-arbitraire',
        'Le système tonal : 4 tons + neutre, comment les distinguer et les produire',
        'Le pinyin : romanisation standard du mandarin, outil d\'apprentissage (pas la langue)',
        'Pourquoi le mandarin n\'est pas "la langue la plus difficile du monde" — démystification'
      ]
    },
    {
      titre: 'Phase 2 — Les caractères : logique et mnémotechnique',
      duree: '3h',
      desc: 'Les caractères chinois font peur. Ce module montre leur logique : clés radicales, caractères composés, sémantique visuelle. Avec les bons outils mnémotechniques, retenir 500 caractères courants n\'est pas une performance extraordinaire — c\'est un processus maîtrisable.',
      items: [
        'Les 214 clés radicales : clé de lecture de la majorité des caractères courants',
        'Caractères simples vs composés : comment la signification se construit',
        'Systèmes mnémotechniques : histoires visuelles, associations phonétiques',
        'Les 100 caractères les plus fréquents en communication professionnelle'
      ]
    },
    {
      titre: 'Phase 3 — Premiers pas communicatifs en mandarin',
      duree: '2h',
      desc: 'Application pratique de la logique apprise : production des premiers mots, phrases et échanges. L\'objectif n\'est pas la maîtrise mais la proof of concept — démontrer que la logique comprise se traduit en communication réelle.',
      items: [
        'Salutations, présentations et formules de politesse courantes',
        'Chiffres, dates, heures — indispensables dans tout contexte professionnel',
        'Phrases simples de négociation : coût, délai, quantité',
        'Phonologie pratique : entraînement aux 4 tons sur des mots courants'
      ]
    }
  ],
  exercices: [
    { titre: 'La décomposition de caractères', desc: 'Vous recevez 20 caractères inconnus. En utilisant votre connaissance des radicaux, vous déduisez leur signification probable et vérifiez. Exercice de décodage logique — pas de mémorisation brute.' },
    { titre: 'Le dictée tonale', desc: 'Vous entendez 20 syllabes en mandarin avec des tons différents. Vous les transcrivez en pinyin avec les tons corrects. Exercice d\'oreille critique pour le système tonal.' },
    { titre: 'La phrase par blocs', desc: 'Construction de phrases mandarine par blocs sémantiques : sujet + temps + verbe + complément. Vous montez des phrases de 5-8 mots en suivant la logique syntaxique — sans erreur possible si la logique est respectée.' },
    { titre: 'La négociation chiffrée', desc: 'Simulation d\'une négociation de prix simple en mandarin : chiffres, monnaie, quantité. Exercice pratique immédiatement transférable dans un contexte commercial.' }
  ],
  resultats: [
    { titre: 'Une compréhension profonde de la logique du mandarin.', desc: 'Vous ne cherchez plus à appliquer la grammaire française au chinois. Vous pensez dans la logique mandarine et progressez beaucoup plus vite.' },
    { titre: 'Une base solide en caractères : 100+ caractères courants mémorisés.', desc: 'Avec leur logique, pas en bourrage. Ce qui vous permet de continuer à mémoriser seul avec les mêmes outils.' },
    { titre: 'La confiance pour commencer vraiment.', desc: 'Vous n\'avez plus peur du mandarin. Vous avez le mode d\'emploi. Vous savez comment apprendre — ce qui est plus précieux que ce que vous avez déjà appris.' },
    { titre: 'Un plan d\'apprentissage personnalisé.', desc: 'Selon vos objectifs (professionnel, voyage, culturel), vous repartez avec une roadmap sur 6 mois avec les ressources adaptées à votre style d\'apprentissage.' }
  ]
};

FORMATIONS_CONTENT['langues/mandarin/ecriture'] = {
  pour_qui: [
    { icon: '✍️', label: 'Apprenants ayant une base orale en mandarin', desc: 'Vous parlez ou comprenez du mandarin à l\'oral mais l\'écrit — caractères, lecture de documents, rédaction — reste un angle mort. Ce module ferme cette lacune de façon méthodique.' },
    { icon: '📄', label: 'Professionnels lisant des documents chinois', desc: 'Vous recevez des documents, contrats, emails ou présentations en chinois. Vous avez besoin de les comprendre — au moins partiellement — sans dépendre systématiquement d\'un traducteur.' },
    { icon: '🎭', label: 'Passionnés de culture chinoise classique et contemporaine', desc: 'Calligraphie, littérature, presse, réseaux sociaux chinois — vous voulez accéder à la culture écrite chinoise dans sa langue originale, du classique aux posts WeChat.' }
  ],
  deroulement: [
    {
      titre: 'Phase 1 — Fondations de l\'écriture mandarine',
      duree: '3h',
      desc: 'L\'écriture chinoise a une logique interne. Nous commençons par les fondations : ordre des traits, structure des caractères, radicaux sémantiques et phonétiques. Vous construisez les bonnes habitudes dès le départ — celles qui permettent de mémoriser 10 caractères par jour plutôt que de les oublier après une semaine.',
      items: [
        'Ordre des traits : les 8 règles fondamentales et leur logique',
        'Structure des caractères : encadrement, emboîtement, juxtaposition',
        'Les 50 radicaux les plus productifs : clés pour décoder des centaines de caractères',
        'Caractères simplifiés (RPC) vs traditionnels (Taiwan/HK) : différences et usages'
      ]
    },
    {
      titre: 'Phase 2 — Lecture de documents authentiques',
      duree: '3 × 2h',
      desc: 'Entraînement à la lecture de documents réels : emails professionnels, articles de presse, extraits de contrats, menus, panneaux. Le but est de développer des stratégies de lecture partielle efficaces — comprendre l\'essentiel sans tout déchiffrer.',
      items: [
        'Email professionnel en mandarin : structure, formules types, points clés',
        'Article de presse : vocabulaire des thèmes courants (économie, politique, technologie)',
        'Extrait de contrat : termes juridiques récurrents, clauses standards',
        'WeChat et médias sociaux : mandarin oral, abréviations, emojis culturels'
      ]
    },
    {
      titre: 'Phase 3 — Production écrite de base',
      duree: '2h',
      desc: 'Vous produisez vos premiers textes en mandarin : email simple, carte de visite, message de remerciement. L\'objectif est fonctionnel — des textes courts, corrects et appropriés au registre.',
      items: [
        'Email de remerciement post-réunion en mandarin',
        'Message de présentation professionnelle (carte de visite numérique)',
        'SMS ou message WeChat court pour un contexte commercial',
        'Les formules de politesse écrites obligatoires selon le registre et la relation'
      ]
    }
  ],
  exercices: [
    { titre: 'Le décryptage d\'email', desc: 'Vous recevez un email professionnel en mandarin. Sans dictionnaire, vous identifiez l\'expéditeur, le sujet, le ton (formel/informel) et l\'action demandée. Exercice de lecture partielle et d\'inférence contextuelle.' },
    { titre: 'La calligraphie des radicaux', desc: 'Exercice de calligraphie : vous tracez 20 caractères fondamentaux avec l\'ordre des traits correct. L\'objectif n\'est pas artistique — c\'est de créer une mémoire kinesthésique qui renforce la mémorisation.' },
    { titre: 'La rédaction du message commercial', desc: 'Vous rédigez un email de remerciement de 5-6 lignes après une réunion avec un partenaire chinois. Correction sur la formulation, le registre et les formules obligatoires.' },
    { titre: 'La lecture de contrat', desc: 'Vous lisez un extrait de contrat en mandarin et identifiez les 5 termes les plus importants, leur sens probable et les clauses qu\'ils introduisent. Débriefing sur les stratégies de lecture juridique en langue étrangère.' }
  ],
  resultats: [
    { titre: 'La lecture autonome des documents mandarin courants.', desc: 'Emails, articles, menus, panneaux — vous déchiffrez sans aide, en comprenant l\'essentiel même quand vous ne maîtrisez pas chaque caractère.' },
    { titre: '200+ caractères écrits et reconnus avec leur logique.', desc: 'Pas mémorisés par cœur — compris dans leur structure. Ce qui vous permet de continuer à mémoriser seul.' },
    { titre: 'La capacité à produire des textes courts et corrects.', desc: 'Email, message, carte de visite — vous pouvez écrire en mandarin dans des contextes professionnels simples sans dépendre d\'un traducteur.' },
    { titre: 'Une relation différente à l\'écriture chinoise.', desc: 'Les caractères ne vous font plus peur. Vous y voyez une logique, une beauté, un système — pas une masse opaque de symboles arbitraires.' }
  ]
};

/* ================================================================
   INTERCULTUREL — EXPANSION INTERNATIONALE
   ================================================================ */

FORMATIONS_CONTENT['interculturel/core/expansion-internationale'] = {
  pour_qui: [
    { icon: '🌍', label: 'Dirigeants préparant une entrée sur un nouveau marché', desc: 'Vous allez lancer vos activités dans un nouveau pays. Comprendre les codes culturels du marché cible n\'est pas du soft — c\'est de la stratégie. Les erreurs culturelles coûtent des contrats, des partenariats et des années.' },
    { icon: '📈', label: 'Business developers en charge de marchés étrangers', desc: 'Vous prospecterez, négocierez et signerez dans des cultures différentes de la vôtre. Ce module vous donne les outils pour adapter votre approche commerciale à chaque culture — sans perdre votre identité ni votre efficacité.' },
    { icon: '🏗️', label: 'Managers d\'équipes locales à l\'international', desc: 'Vous encadrez des équipes dans des pays où vous n\'avez pas grandi. Les pratiques managériales qui fonctionnent en France peuvent être contre-productives ailleurs. Ce module vous évite les erreurs les plus coûteuses.' }
  ],
  deroulement: [
    {
      titre: 'Phase 1 — Cartographie culturelle des marchés cibles',
      duree: '3h',
      desc: 'Chaque marché a ses dimensions culturelles. Nous utilisons les modèles de Hofstede, Trompenaars et Hall pour cartographier objectivement les dimensions culturelles de vos marchés cibles — et identifier où vos angles morts sont les plus risqués.',
      items: [
        'Distance hiérarchique : quel niveau d\'autorité est attendu de vous ?',
        'Individualisme vs collectivisme : comment se prend une décision dans cette culture ?',
        'Orientation long terme : combien de temps faut-il pour établir la confiance ?',
        'Communication haute contexte vs basse contexte : ce qui se dit vs ce qui est sous-entendu'
      ]
    },
    {
      titre: 'Phase 2 — Adaptation de l\'approche commerciale et managériale',
      duree: '3 × 2h',
      desc: 'Nous travaillons sur les situations concrètes de votre expansion : premier contact, pitch, négociation, signature, onboarding de partenaires ou d\'équipes locales. Pour chaque étape, vous adaptez votre approche aux codes culturels de votre marché cible.',
      items: [
        'Le premier contact : comment se présenter dans chaque culture (formalité, carte de visite, âge)',
        'Le pitch commercial adapté : ce qui convainc en Allemagne ne convainc pas en Chine',
        'La négociation interculturelle : rythme, concessions, silence, accord verbal vs écrit',
        'L\'onboarding de partenaires locaux : confiance, autonomie, contrôle — selon la culture'
      ]
    },
    {
      titre: 'Phase 3 — Gestion des incidents interculturels',
      duree: '2h',
      desc: 'Que faire quand quelque chose se passe mal entre cultures ? Ce module couvre la gestion des malentendus, des offenses involontaires et des crises relationnelles interculturelles — avec des outils pour réparer sans perdre la face de part et d\'autre.',
      items: [
        'Identifier la nature d\'un incident interculturel : malentendu, offense, incompatibilité',
        'Réparer une relation interculturelle dégradée : approche adaptée à chaque culture',
        'Gérer les attentes divergentes sur les délais, la qualité, la relation',
        'Construire des protocoles d\'équipe pour prévenir les incidents récurrents'
      ]
    }
  ],
  exercices: [
    { titre: 'Le profil culturel de mon marché cible', desc: 'Vous réalisez un profil culturel complet de votre marché cible réel sur 8 dimensions. Présentation en 10 minutes au groupe avec discussion critique et apports complémentaires.' },
    { titre: 'Le pitch interculturel adapté', desc: 'Vous préparez le même pitch commercial dans deux versions culturellement adaptées (ex. version Allemagne et version Japon). Présentation et débriefing sur les différences de structure, de rythme et d\'argumentation.' },
    { titre: 'La négociation cross-culturelle', desc: 'Simulation de négociation en binômes ou trinômes où chaque participant représente une culture assignée. 30 minutes de négociation suivies d\'un débriefing culturel détaillé.' },
    { titre: 'L\'incident critique', desc: 'Analyse de 3 cas réels d\'incidents interculturels en contexte commercial. Par groupes, vous diagnostiquez la cause culturelle, évaluez les conséquences et proposez une stratégie de réparation.' }
  ],
  resultats: [
    { titre: 'Une grille de lecture culturelle opérationnelle pour vos marchés cibles.', desc: 'Pas une liste de clichés — un outil d\'analyse qui vous permet d\'anticiper les zones de friction et d\'adapter votre approche en temps réel.' },
    { titre: 'Des tactiques commerciales et managériales adaptées par culture.', desc: 'Vous savez comment modifier votre pitch, votre rythme de négociation et votre style de management selon la culture de vos interlocuteurs.' },
    { titre: 'La capacité à gérer les incidents interculturels.', desc: 'Vous ne les évitez pas tous — personne ne le peut. Mais vous les diagnostiquez vite et vous savez les réparer avant qu\'ils ne deviennent des ruptures.' },
    { titre: 'Un avantage concurrentiel réel à l\'international.', desc: 'Les entreprises qui perdent des marchés internationaux le font souvent pour des raisons culturelles, pas techniques. Vous évitez cette catégorie d\'erreur.' }
  ]
};

/* ================================================================
   IA — OUTILS IA POUR LES ÉQUIPES
   ================================================================ */

FORMATIONS_CONTENT['ia/core/outils-ia-equipes'] = {
  pour_qui: [
    { icon: '👥', label: 'Équipes souhaitant intégrer l\'IA dans leur workflow', desc: 'Votre équipe entend parler d\'IA depuis des mois mais n\'a pas encore structuré son adoption. Ce module transforme l\'enthousiasme diffus en pratiques concrètes, adaptées à vos outils et vos usages réels.' },
    { icon: '👩‍💼', label: 'Managers pilotant la transformation IA de leur service', desc: 'Vous êtes responsable de l\'adoption de l\'IA dans votre périmètre. Vous avez besoin de comprendre ce que les outils peuvent vraiment faire (et ne pas faire) pour prendre des décisions éclairées et accompagner votre équipe.' },
    { icon: '🔧', label: 'Opérationnels voulant aller plus vite et mieux', desc: 'Rédaction, analyse, synthèse, code, images, présentation — vous passez des heures sur des tâches que l\'IA peut accélérer. Ce module vous donne le savoir-faire pratique pour en tirer un gain de productivité immédiat et mesurable.' }
  ],
  deroulement: [
    {
      titre: 'Phase 1 — Cartographie des outils IA pertinents',
      duree: '3h',
      desc: 'Le marché des outils IA évolue tellement vite que la plupart des équipes sont désorientées. Ce module commence par une cartographie : quels outils pour quels usages, avec quelles forces et limites réelles, à quel coût. Pas de marketing — une évaluation pragmatique.',
      items: [
        'Les grandes catégories : LLM (GPT-4, Claude, Gemini), image, audio, vidéo, code, données',
        'Évaluation comparative sur des cas d\'usage réels de l\'équipe',
        'Coûts, données, sécurité : ce que votre DSI et votre DPO doivent valider',
        'Les outils qui surapproment et ceux qui sous-vendent — guide de lecture critique'
      ]
    },
    {
      titre: 'Phase 2 — Intégration dans les workflows réels',
      duree: '3 × 2h',
      desc: 'Nous travaillons directement sur les tâches de l\'équipe. Vous identifiez vos tâches à fort potentiel d\'automatisation, construisez vos premiers prompts efficaces, et mesurez le gain réel. L\'objectif : des pratiques adoptées, pas des outils essayés.',
      items: [
        'Audit des tâches de l\'équipe : potentiel d\'automatisation et niveau de risque',
        'Prompt engineering pratique : structure d\'un prompt efficace, itération, templates',
        'Automatisation de tâches récurrentes : compte rendu, synthèse, veille, rédaction',
        'Intégration dans les outils existants : Notion, Slack, Google Workspace, Microsoft 365'
      ]
    },
    {
      titre: 'Phase 3 — Gouvernance et adoption durable',
      duree: '2h',
      desc: 'L\'adoption de l\'IA sans gouvernance crée des risques. Ce module couvre les règles de base pour une utilisation responsable : données confidentielles, vérification des outputs, droits d\'auteur, biais. Et comment créer une culture d\'adoption continue dans l\'équipe.',
      items: [
        'Politique d\'usage IA de l\'équipe : ce qui est autorisé, ce qui est interdit, ce qui est à risque',
        'Vérification des outputs IA : quand faire confiance, quand vérifier, quand rejeter',
        'Données sensibles et IA : règles de base pour rester conforme RGPD',
        'Créer un rituel d\'apprentissage IA collectif : comment continuer à progresser ensemble'
      ]
    }
  ],
  exercices: [
    { titre: 'L\'audit de workflow', desc: 'Chaque participant liste ses 10 tâches les plus chronophages. En groupe, vous les classez par potentiel d\'automatisation IA. Vous repartez avec un top 3 de tâches à automatiser en priorité.' },
    { titre: 'Le prompt marathon', desc: 'Vous avez 45 minutes pour créer le meilleur prompt possible pour automatiser une tâche réelle de votre quotidien. Présentation des résultats, vote du groupe, déconstruction de ce qui fonctionne.' },
    { titre: 'Le test aveugle', desc: 'Vous recevez 5 textes : certains rédigés par un humain, d\'autres par une IA. Vous devez les distinguer et identifier les indices. Débriefing sur la vérification des outputs IA et les signes de génération automatique.' },
    { titre: 'La politique d\'usage', desc: 'En sous-groupes, vous rédigez une politique d\'usage IA pour votre équipe réelle — 1 page maximum. Présentation et débriefing sur les choix faits et les angles morts potentiels.' }
  ],
  resultats: [
    { titre: 'Une carte claire des outils IA adaptés à vos usages.', desc: 'Pas une liste générique — un panorama évalué sur vos cas réels, avec des recommandations concrètes d\'adoption.' },
    { titre: 'Des pratiques IA opérationnelles dès le lendemain.', desc: 'Vous repartez avec des prompts testés, des workflows améliorés et des outils déjà intégrés dans votre quotidien.' },
    { titre: 'Un gain de productivité mesurable à 30 jours.', desc: 'Les participants qui appliquent les pratiques apprises reportent en moyenne 2 à 4 heures gagnées par semaine sur les tâches à faible valeur ajoutée.' },
    { titre: 'Une gouvernance IA minimale mais efficace.', desc: 'Vous savez ce que votre équipe peut faire avec l\'IA, ce qui est interdit, et comment vérifier la qualité des outputs. Sans bureaucratie excessive.' }
  ]
};

/* ================================================================
   COMMUNICATION — MANAGEMENT HUMAIN
   ================================================================ */

FORMATIONS_CONTENT['communication/core/management-humain'] = {
  pour_qui: [
    { icon: '🌱', label: 'Nouveaux managers en prise de poste', desc: 'Vous venez d\'être promu ou vous prenez un nouveau poste de management. Vous avez les compétences techniques — maintenant il faut acquérir les compétences humaines qui font la différence entre un manager subi et un manager choisi.' },
    { icon: '🔄', label: 'Managers expérimentés voulant se réinventer', desc: 'Vos méthodes fonctionnent, mais vous sentez qu\'il y a un plafond. Ce module vous aide à identifier vos angles morts managériaux et à développer les compétences relationnelles qui débloquent l\'engagement des équipes.' },
    { icon: '⚡', label: 'Dirigeants gérant des périodes de tension', desc: 'Restructuration, crise, surcharge, turnover — vous managez dans un contexte difficile. Ce module vous donne les outils concrets pour maintenir la cohésion, la clarté et l\'engagement même dans la tempête.' }
  ],
  deroulement: [
    {
      titre: 'Phase 1 — Comprendre ce qui motive vraiment les gens',
      duree: '3h',
      desc: 'Le management humain commence par une question simple : qu\'est-ce qui fait que quelqu\'un donne le meilleur de lui-même ? Les théories de la motivation (Maslow, Herzberg, Deci & Ryan) sont connues — mais peu de managers savent les appliquer à des individus concrets dans des situations réelles.',
      items: [
        'Les 3 leviers de la motivation intrinsèque : autonomie, maîtrise, sens (Self-Determination Theory)',
        'Identifier les motivateurs dominants de chaque collaborateur — outils pratiques',
        'Ce qui démotive sans qu\'on le sache : reconnaître les signaux avant le désengagement',
        'Manager des profils très différents dans la même équipe sans créer d\'inégalités perçues'
      ]
    },
    {
      titre: 'Phase 2 — Communication managériale efficace',
      duree: '3 × 2h',
      desc: 'Le management, c\'est 80% de communication. Ce module travaille les conversations difficiles — feedback, recadrage, reconnaissance, demande difficile — avec des outils concrets : CNV, méthode DESC, écoute active. Vous pratiquez sur vos situations réelles.',
      items: [
        'Feedback constructif : la différence entre feedback et jugement, structure DESC',
        'L\'écoute active managériale : poser les bonnes questions, reformuler, valider',
        'Le recadrage bienveillant : recadrer sans humilier, exiger sans menacer',
        'La reconnaissance au quotidien : pourquoi les managers ne disent pas assez merci et comment y remédier'
      ]
    },
    {
      titre: 'Phase 3 — Leadership situationnel et gestion de la performance',
      duree: '2 × 2h',
      desc: 'Un seul style de management ne fonctionne pas avec tout le monde. Le leadership situationnel (Hersey & Blanchard) permet d\'adapter votre posture à la maturité de chaque collaborateur. Nous travaillons aussi la gestion de la sous-performance — l\'une des situations les plus redoutées des managers.',
      items: [
        'Les 4 styles de leadership situationnel et leurs conditions d\'application',
        'Diagnostiquer le niveau de maturité d\'un collaborateur sur une tâche spécifique',
        'L\'entretien de performance : préparation, conduite, suivi',
        'La sous-performance : comment aborder, documenter, accompagner et décider'
      ]
    }
  ],
  exercices: [
    { titre: 'Le feedback en situation réelle', desc: 'Vous préparez un feedback réel que vous devez donner à un collaborateur. Vous le jouez en simulation devant le groupe avec un observateur. Débriefing sur le fond, la forme et l\'impact émotionnel.' },
    { titre: 'La cartographie motivationnelle', desc: 'Vous construisez la carte motivationnelle de 3 collaborateurs réels (anonymisés). Vous identifiez les leviers, les risques de démotivation, et les actions concrètes pour maintenir l\'engagement.' },
    { titre: 'L\'entretien de recadrage', desc: 'Simulation d\'un entretien de recadrage pour un comportement problématique récurrent. Vous jouez alternativement le manager et le collaborateur — pour comprendre les deux perspectives.' },
    { titre: 'Le diagnostic situationnel', desc: 'Pour 5 situations managériales fictives décrites, vous identifiez le niveau de maturité du collaborateur et choisissez le style de leadership adapté. Débriefing en groupe sur les désaccords de diagnostic.' }
  ],
  resultats: [
    { titre: 'Des outils de communication managériale immédiatement utilisables.', desc: 'Feedback DESC, écoute active, entretien de performance — vous repartez avec des structures que vous pouvez appliquer dès le lendemain, pas des théories abstraites.' },
    { titre: 'Une meilleure compréhension de vos collaborateurs.', desc: 'Vous savez mieux lire ce qui motive, ce qui freine et ce qui épuise les gens que vous managez. Ce qui change la qualité de vos conversations et de vos décisions.' },
    { titre: 'La capacité à adapter votre style selon la situation.', desc: 'Vous n\'avez plus un seul mode de management. Vous avez un répertoire — et la lucidité pour choisir le bon outil selon la personne et la situation.' },
    { titre: 'La confiance pour aborder les conversations difficiles.', desc: 'Recadrage, sous-performance, reconnaissance — ces conversations ne disparaissent pas. Mais elles ne vous paralysent plus.' }
  ]
};

FORMATIONS_CONTENT['communication/core/prise-de-parole'] = {
  pour_qui: [
    { icon: '🎤', label: 'Professionnels qui doivent présenter et convaincre', desc: 'Réunions de direction, client meetings, conférences, formations internes — vous prenez la parole régulièrement devant des audiences qui peuvent être sceptiques, distraites ou exigeantes. Ce module transforme chaque prise de parole en moment d\'impact.' },
    { icon: '😰', label: 'Personnes souffrant de trac ou d\'appréhension', desc: 'Le trac n\'est pas une faiblesse — c\'est de l\'énergie mal orientée. Ce module ne supprime pas le trac (ce serait une mauvaise idée), il vous apprend à le transformer en présence et en performance.' },
    { icon: '📊', label: 'Managers et experts qui présentent des données complexes', desc: 'Vous avez des choses importantes à dire mais votre audience décroche, vos slides sont trop denses et vos conclusions ne retiennent pas l\'attention. Ce module vous apprend à rendre le complexe clair et le clair inoubliable.' }
  ],
  deroulement: [
    {
      titre: 'Phase 1 — Le corps comme outil de communication',
      duree: '2 × 2h',
      desc: 'Avant d\'ouvrir la bouche, vous communiquez déjà. Posture, regard, respiration, déplacement — le corps raconte une histoire. Ce module commence par ce que votre corps dit, et comment l\'aligner avec ce que vous voulez transmettre.',
      items: [
        'La posture de présence : ancrage, verticalité, ouverture — sans rigidité ni tension',
        'Le regard : contact visuel, balayage de salle, connexion individuelle',
        'La respiration comme outil de gestion du trac et de la voix',
        'Le déplacement dans l\'espace : quand bouger, quand rester, comment occuper la scène'
      ]
    },
    {
      titre: 'Phase 2 — La voix et l\'articulation',
      duree: '2h',
      desc: 'La voix est l\'instrument principal du speaker. Ce module travaille le volume, le rythme, l\'intonation, la pause — et surtout l\'articulation, qui est le problème numéro un des orateurs non formés. Vous enregistrez et analysez votre propre voix.',
      items: [
        'Exercices d\'articulation : les virelangues comme entraînement technique',
        'Le rythme de parole : pourquoi les bons speakers parlent plus lentement que vous ne le pensez',
        'La pause : l\'outil le plus sous-utilisé de la prise de parole efficace',
        'Intonation et conviction : comment votre voix trahit votre niveau de confiance'
      ]
    },
    {
      titre: 'Phase 3 — Structure du discours et gestion de l\'audience',
      duree: '3 × 2h',
      desc: 'Un bon speaker maîtrise deux choses : ce qu\'il dit et comment il gère son audience. Ce module couvre la structuration d\'un discours persuasif et les techniques de gestion des questions difficiles, des interruptions et des audiences hostiles.',
      items: [
        'La structure PREP (Point-Reason-Example-Point) et ses variantes',
        'L\'introduction qui accroche : les 90 premières secondes sont décisives',
        'La conclusion qui reste : comment fermer sur une note mémorable',
        'Gestion Q&A : répondre sans dérailler, recadrer sans blesser, admettre sans perdre'
      ]
    }
  ],
  exercices: [
    { titre: 'Le pitch de 2 minutes chronométré', desc: 'Vous présentez votre activité, votre projet ou vous-même en exactement 2 minutes. Enregistrement vidéo, visionnage collectif, feedback structuré sur le corps, la voix et le contenu.' },
    { titre: 'Le discours sans slides', desc: 'Vous présentez un sujet complexe de votre domaine en 5 minutes, sans support visuel. L\'exercice révèle si vous maîtrisez vraiment votre sujet — et comment improviser de façon structurée.' },
    { titre: 'La gestion du trac en direct', desc: 'Exercice de démarrage brutal : vous commencez à parler sans préparation sur un sujet tiré au sort. L\'objectif est d\'apprendre à gérer le pic d\'adrénaline des premières secondes.' },
    { titre: 'Le Q&A difficile', desc: 'Vous présentez 5 minutes puis affrontez 15 minutes de questions posées par des "adversaires" désignés dans le groupe — questions pièges, hors sujet, agressives. Débriefing sur les techniques de recadrage et de non-réponse élégante.' }
  ],
  resultats: [
    { titre: 'Une présence physique et vocale qui commande l\'attention.', desc: 'Vous n\'aurez plus à lutter pour que les gens vous écoutent. Votre corps, votre voix et votre structure font le travail.' },
    { titre: 'Un trac transformé en énergie de performance.', desc: 'Le trac ne disparaît pas — il change de forme. Vous repartez avec des techniques concrètes pour le canaliser plutôt que de le subir.' },
    { titre: 'Une structure de discours réutilisable.', desc: 'PREP, introduction d\'accroche, conclusion mémorable — vous avez un cadre que vous appliquez à n\'importe quel sujet, n\'importe quelle audience.' },
    { titre: 'La capacité à gérer les situations de prise de parole difficiles.', desc: 'Questions hostiles, audience distraite, technique défaillante — vous avez pratiqué ces situations et vous savez comment réagir.' }
  ]
};

/* ================================================================
   VEILLE — INTELLIGENCE SECTORIELLE
   ================================================================ */

FORMATIONS_CONTENT['veille/core/intelligence-sectorielle'] = {
  pour_qui: [
    { icon: '🏭', label: 'Dirigeants et décideurs sectoriels', desc: 'Vous pilotez une entreprise dans un secteur en mouvement rapide. Comprendre les tendances, les ruptures technologiques et les évolutions réglementaires avant vos concurrents n\'est pas un luxe — c\'est une condition de survie stratégique.' },
    { icon: '📊', label: 'Analystes et chargés de veille sectorielle', desc: 'Vous produisez déjà des analyses sectorielles mais cherchez à professionnaliser votre démarche, structurer vos sources et rendre vos livrables plus décisionnels et moins informatifs.' },
    { icon: '💼', label: 'Consultants et business developers en conseil sectoriel', desc: 'Votre valeur ajoutée repose sur votre connaissance du secteur de vos clients. Ce module vous donne les méthodes et les outils pour maintenir cette maîtrise à jour et l\'approfondir de façon systématique.' }
  ],
  deroulement: [
    {
      titre: 'Phase 1 — Cartographie sectorielle avancée',
      duree: '3h',
      desc: 'Comprendre un secteur, c\'est comprendre ses forces structurelles, ses acteurs, ses flux et ses points de rupture. Ce module commence par les cadres d\'analyse sectorielle — Porter, chaîne de valeur, mapping d\'écosystème — et les applique à votre secteur réel.',
      items: [
        'Les 5 forces de Porter appliquées à votre secteur spécifique',
        'Cartographie des acteurs : concurrents, fournisseurs, distributeurs, régulateurs, disrupteurs',
        'Analyse de la chaîne de valeur sectorielle : où se crée et se capture la valeur',
        'Identification des signaux de rupture : technologie, régulation, comportement, modèle économique'
      ]
    },
    {
      titre: 'Phase 2 — Sources et méthodes d\'intelligence sectorielle',
      duree: '3 × 2h',
      desc: 'L\'intelligence sectorielle repose sur des sources diversifiées, correctement qualifiées et régulièrement mises à jour. Ce module construit votre dispositif de veille sectorielle sur mesure : sources primaires et secondaires, outils de collecte et de traitement, rythme de mise à jour.',
      items: [
        'Sources sectorielles de référence : associations professionnelles, régulateurs, think tanks, cabinets',
        'Rapports sectoriels payants vs gratuits : lesquels valent le prix, comment les lire efficacement',
        'Veille des acteurs : monitoring de concurrents, de partenaires, de disrupteurs potentiels',
        'IA et veille sectorielle : comment utiliser les LLM pour synthétiser et analyser sans halluciner'
      ]
    },
    {
      titre: 'Phase 3 — Production de livrables décisionnels',
      duree: '2 × 2h',
      desc: 'La veille n\'a de valeur que si elle informe des décisions. Ce module travaille la transformation des données sectorielles en livrables actionnables : notes de conjoncture, benchmarks, analyses de tendances, scénarios stratégiques.',
      items: [
        'La note sectorielle mensuelle : structure, longueur, niveau de lecture, distribution',
        'Le benchmark concurrentiel : quoi comparer, comment visualiser, comment conclure',
        'L\'analyse de tendance : différencier signal faible, tendance émergente et mégatendance',
        'Les scénarios sectoriels : construire 2-3 futurs possibles et leurs implications stratégiques'
      ]
    }
  ],
  exercices: [
    { titre: 'La cartographie Porter en live', desc: 'En 90 minutes, vous construisez une analyse Porter de votre secteur réel avec les données disponibles en open source. Présentation au groupe et débriefing critique sur ce qui est complet, ce qui manque et ce qui est contestable.' },
    { titre: 'L\'audit de sources sectorielles', desc: 'Vous évaluez votre dispositif de veille actuel (si existant) sur 5 critères : couverture, fiabilité, fraîcheur, exploitabilité, coût. Identification des lacunes et plan de remédiation.' },
    { titre: 'La note de conjoncture de 2 pages', desc: 'Vous rédigez une note de conjoncture sectorielle de 2 pages maximum sur votre secteur, avec 3 tendances majeures, 2 signaux faibles et 1 scénario de rupture probable. Correction sur la rigueur analytique et la lisibilité.' },
    { titre: 'Le scénario de rupture', desc: 'En groupes de 3, vous construisez un scénario de rupture plausible pour votre secteur à 5 ans. Présentation et débat critique : les hypothèses sont-elles solides ? les implications correctement tirées ?' }
  ],
  resultats: [
    { titre: 'Un dispositif de veille sectorielle opérationnel et personnalisé.', desc: 'Sources qualifiées, outils configurés, rythme défini — votre veille tourne sans effort excessif et produit de la valeur régulièrement.' },
    { titre: 'La capacité à produire des analyses sectorielles décisionnelles.', desc: 'Notes de conjoncture, benchmarks, scénarios — vos livrables aident vraiment à décider, ils ne documentent pas simplement ce qui se passe.' },
    { titre: 'Une compréhension structurelle de votre secteur.', desc: 'Pas seulement ce qui se passe — pourquoi cela se passe, qui en bénéficie, qui en souffre, et où les prochaines ruptures vont se produire.' },
    { titre: 'Un avantage informationnel sur vos concurrents.', desc: 'Vous savez des choses qu\'ils ne savent pas encore, ou vous les savez plus tôt. Dans un secteur compétitif, l\'information est une arme.' }
  ]
};
