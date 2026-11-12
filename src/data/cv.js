// ============================================================
// CONTENU DU CV — tout le contenu du site est centralisé ici.
// Chaque champ existe en français (fr) et en anglais (en) :
// toute modification doit être faite dans les deux langues.
// Après une modification : `npm run cv:pdf` pour régénérer les PDF.
// ============================================================

const linkedin = 'https://www.linkedin.com/in/ana%C3%AFs-ferron-91783712a/'
const github = 'https://github.com/anaisfrn'

export const cv = {
  fr: {
    identity: {
      name: 'Anaïs Ferron',
      title: 'Analyste fonctionnelle & développeuse full-stack',
      location: 'Québec, Canada',
      email: 'anais.frn@gmail.com',
      phone: '', // volontairement vide : pas de téléphone sur le site public
      linkedin,
      linkedinLabel: 'in/anaïs-ferron',
      github,
      cvFile: 'cv-anais-ferron-fr.pdf', // généré par `npm run cv:pdf`
    },
    nav: {
      profile: 'Profil',
      expertise: 'Expertise',
      skills: 'Compétences',
      experience: 'Expérience',
      projects: 'Réalisations',
      education: 'Formation',
      contact: 'Contact',
    },
    hero: {
      rotator: {
        prefix: 'Je fais le pont entre',
        words: ['le métier et le code.', 'le besoin et la livraison.', 'l’idée et la production.'],
      },
      tagline:
        'Sept ans de développement full-stack en Java/Spring, Vue et Angular, puis l’analyse fonctionnelle chez Desjardins : je cadre le besoin, je maquette la solution et je sais lire le code qui la porte. Banque, télécoms, manufacturier et commerce de détail.',
      ctaContact: 'Me contacter',
      ctaDownload: 'Télécharger le CV',
      companiesLabel: 'Employeurs et clients',
      companies: ['Desjardins', 'BRP', 'Bell', 'Decathlon', 'CGI'],
    },
    profile: {
      title: 'Profil',
      facts: [
        { value: '8+', label: 'années d’expérience' },
        { value: '4', label: 'secteurs d’activité' },
        { value: '2', label: 'pays' },
      ],
      paragraphs: [
        'Dans les TI depuis 2018, formée en informatique en France et installée au Québec depuis 2021.',
        'J’ai développé pendant sept ans en full-stack (Java/Spring, Kotlin, Vue, Angular, React) pour Decathlon, Desjardins, Bell et BRP, presque toujours avec un second rôle : Scrum Master, proxy Product Owner ou responsable d’application. Depuis 2025, je suis analyste fonctionnelle chez Desjardins sur l’ouverture de comptes : je transforme les besoins du métier en user stories prêtes à développer, je maquette les écrans et je vérifie la faisabilité directement dans le code et les API.',
        'L’IA fait partie de mon quotidien : GitHub Copilot et Microsoft 365 Copilot au travail, Claude Code pour mes projets personnels, que je mène du besoin jusqu’à l’application en ligne. Je m’en sers pour aller plus vite sans baisser le niveau d’exigence : ce qui part en production reste relu, testé et compris.',
      ],
    },
    expertise: {
      title: 'Compétences clés',
      items: [
        {
          name: 'Analyse fonctionnelle & produit',
          description:
            'Ateliers de recueil des besoins, user stories et critères d’acceptation, règles d’affaires, priorisation du backlog et maquettes Figma, jusqu’à la validation fonctionnelle et la mise en production.',
        },
        {
          name: 'Développement full-stack',
          description:
            'Back-end Java 17 / Spring Boot et Kotlin avec API REST ; front-end Vue 3, Angular et React en TypeScript. Tests automatisés (JUnit, Cucumber, Jest, Cypress), revues de code et CI/CD.',
        },
        {
          name: 'Agilité & animation d’équipe',
          description:
            'Scrum Master et proxy Product Owner sur plusieurs mandats : mise en place de Scrum, accompagnement d’équipes en transformation agile, animation des cérémonies, suivi de la vélocité et ateliers avec les clients.',
        },
        {
          name: 'IA au quotidien',
          description:
            'GitHub Copilot et Microsoft 365 Copilot au travail pour explorer le code, rédiger, tester et synthétiser ; Claude Code pour bâtir des applications complètes en pilotant un agent : cadrage, itérations et relecture critique.',
        },
      ],
    },
    skills: {
      title: 'Compétences techniques',
      categories: [
        { name: 'IA & productivité', items: ['GitHub Copilot', 'Microsoft 365 Copilot', 'Claude', 'Claude Code', 'Développement assisté par IA', 'Prototypage par IA'] },
        { name: 'Analyse fonctionnelle & produit', items: ['User stories', 'Critères d’acceptation', 'Règles d’affaires', 'Animation d’ateliers', 'Priorisation du backlog', 'Analyse d’API & de flux', 'Maquettes & prototypes', 'Validation fonctionnelle', 'Figma', 'Miro'] },
        { name: 'Back-end', items: ['Java 17', 'Spring Boot', 'Kotlin', 'API REST', 'Swagger', 'PostgreSQL', 'SQL Server', 'Oracle', 'Maven', 'Gradle', 'Shell'] },
        { name: 'Front-end', items: ['Vue 3', 'Angular', 'React', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Pinia', 'Element Plus'] },
        { name: 'Qualité & livraison', items: ['JUnit', 'Mockito', 'Cucumber', 'Jest', 'Cypress', 'TDD / BDD', 'Clean Code', 'Revues de code', 'Git', 'GitHub', 'GitLab', 'Bitbucket', 'Azure DevOps', 'Jenkins', 'Bamboo', 'Docker'] },
        { name: 'Agilité & outils', items: ['Scrum', 'Kanban', 'Scrumban', 'SAFe', 'Jira', 'Confluence', 'Trello', 'Asana'] },
        { name: 'Notions', items: ['Web3', 'Solidity'] },
      ],
    },
    experience: {
      title: 'Expérience',
      jobs: [
        {
          company: 'Desjardins',
          role: 'Analyste fonctionnelle — Ouverture de comptes',
          period: 'Avr. 2025 — aujourd’hui',
          location: 'Québec, Canada',
          highlights: [
            'Analyse fonctionnelle de l’ouverture de comptes pour les particuliers : parcours en ligne, outil des conseillers, services et API.',
            'Recueil et clarification des besoins en atelier avec les lignes d’affaires, le design et les développeurs ; rédaction des user stories, des critères d’acceptation et des règles d’affaires dans Jira.',
            'Appui direct au Product Owner : découpage, alimentation et priorisation du backlog, préparation des refinements. Des stories mieux cadrées, donc moins d’allers-retours en cours de sprint.',
            'Maquettes et prototypes pour aligner métier, design et développement avant d’écrire du code : Figma, Miro, prototypes générés par IA et ajustements rapides directement dans le navigateur.',
            'Analyse des API, des contrats d’interface et des flux entre systèmes : lecture du code Java et Angular pour trancher la faisabilité sans mobiliser un développeur ; correctifs et petites évolutions livrés ponctuellement.',
            'Cas de tests, validation fonctionnelle, soutien à l’assurance qualité et analyse des anomalies jusqu’à la mise en production.',
            'GitHub Copilot et Microsoft 365 Copilot utilisés au quotidien pour explorer le code, rédiger et synthétiser.',
          ],
          tags: ['Analyse fonctionnelle', 'User stories', 'Jira', 'Figma', 'Java', 'Angular', 'GitHub', 'GitHub Copilot'],
        },
        {
          company: 'BRP',
          via: 'KuriosIT',
          role: 'Développeuse back-end Java & Scrum Master',
          period: 'Juin 2024 — avr. 2025',
          location: 'Québec, Canada',
          highlights: [
            'Maintenance et évolution des applications des opérateurs et mécaniciens de la ligne d’assemblage : suivi des véhicules sur la chaîne, suivi de production, KPI et automatisation de processus.',
            'Analyse des besoins, puis conception et développement de nouvelles API REST en Java 17 / Spring Boot.',
            'Introduction des tests de bout en bout (Cucumber) et renforcement des tests unitaires (JUnit) sur les API.',
            'Support de production sur des applications dont dépend la continuité de la ligne d’assemblage ; réduction de la dette technique par le refactoring, les revues de code et la documentation.',
            'À mon initiative, mise en place de Scrum dans une équipe sans cadre agile ni Scrum Master : daily, planning, revue de sprint et rétrospective, en parallèle de mon rôle de développeuse.',
            'Gestion des branches et des builds dans Azure DevOps ; déploiements en environnements de test et de production.',
          ],
          tags: ['Java 17', 'Spring Boot', 'API REST', 'Cucumber', 'JUnit', 'Azure DevOps', 'SQL Server', 'Docker'],
        },
        {
          company: 'Bell',
          via: 'Acensi',
          role: 'Développeuse full-stack & proxy Product Owner',
          period: 'Juin 2022 — juin 2024',
          location: 'Québec, Canada',
          highlights: [
            'Trois projets full-stack Vue 3 / Java : applications et services utilisés par les professionnels de Bell pour gérer leurs actifs de communication (appareils, forfaits, facturation, historique des transactions, formulaires de requêtes).',
            'API REST en Java 17 / Spring Boot et interfaces Vue / TypeScript (Pinia, Element Plus) intégrées à partir des maquettes Figma de l’équipe de design.',
            'Contribution à la migration de Vue 2 vers Vue 3.',
            'Tests unitaires back-end et front-end, tests de bout en bout Cypress, revues de code, builds et déploiements (GitLab, Bamboo).',
            'Proxy Product Owner : analyse des maquettes, user stories et critères d’acceptation rédigés avec le PO, gestion du backlog.',
            'Animation des cérémonies Scrum (daily, planning, revue, rétrospective, refinement) ; suivi de la vélocité et du burndown.',
          ],
          tags: ['Vue 3', 'TypeScript', 'Java 17', 'Spring Boot', 'Pinia', 'Jest', 'Cypress', 'GitLab', 'Figma'],
        },
        {
          company: 'Desjardins',
          via: 'Maplr',
          role: 'Développeuse full-stack',
          period: 'Juin 2021 — mai 2022',
          location: 'Québec, Canada',
          highlights: [
            'Deux projets d’applications de gestion de documents sécurisés pour l’équipe de lutte contre les crimes financiers.',
            'Back-end Kotlin / Spring Boot ; front-end React sur le premier projet, Angular sur le second.',
            'Tests unitaires back-end et front-end (Mockito, Jest, Cypress) et rédaction de la documentation.',
            'Fonctionnement Scrum : point quotidien et rétrospective toutes les deux semaines.',
          ],
          tags: ['Kotlin', 'Spring Boot', 'Angular', 'React', 'TypeScript', 'Gradle', 'Jest', 'Cypress'],
        },
        {
          company: 'Decathlon',
          via: 'CGI',
          role: 'Développeuse full-stack & responsable d’application',
          period: 'Avr. 2019 — juin 2021',
          location: 'Lille, France',
          highlights: [
            'Applications de logistique de l’entrepôt dédié au tri et à la livraison des commandes en ligne, dont la génération des étiquettes d’expédition pour de multiples transporteurs.',
            'Refonte complète, à partir de zéro, de l’interface Angular de gestion des commandes en entrepôt.',
            'Back-end Java / Spring : intégration de nouveaux transporteurs, génération des étiquettes et de leurs codes QR, maintenance.',
            'Responsable d’application : analyse et challenge des besoins, rédaction du cahier des charges, des spécifications techniques et du cahier de tests, gestion du backlog et des user stories.',
            'Scrum Master : accompagnement de l’équipe dans sa transformation agile (Scrumban), animation des cérémonies, rédaction de la Definition of Done, ateliers avec le client.',
            'Tests en environnement QA, déploiements en test et en production, démonstrations au client en revue de sprint.',
          ],
          tags: ['Java 8 / 11', 'Spring', 'Angular', 'TypeScript', 'PostgreSQL', 'Jenkins', 'Scrumban'],
        },
        {
          company: 'ADEO',
          via: 'CGI',
          role: 'Développeuse webMethods',
          period: 'Avr. 2018 — avr. 2019',
          location: 'Lille, France',
          highlights: [
            'Création et mise à jour de flux d’intégration ESB (fichier, SOAP, REST) en architecture SOA pour un groupe international de bricolage et de décoration, dans une équipe d’une quinzaine de personnes.',
            'Vérification des spécifications transmises par les architectes du client, chiffrage des développements et rédaction des devis.',
            'Recette interne, livraisons et automatisation des tests.',
          ],
          tags: ['webMethods', 'SOA', 'SOAP / REST', 'XML', 'SQL'],
        },
      ],
    },
    projects: {
      title: 'Réalisations',
      items: [
        {
          name: 'Ouverture de comptes',
          context: 'Desjardins',
          description:
            'Ouverture de comptes pour les particuliers, du parcours en ligne à l’outil des conseillers en passant par les API. J’en porte l’analyse fonctionnelle : ateliers avec le métier, user stories, maquettes et validation jusqu’à la mise en production.',
          tags: ['Analyse fonctionnelle', 'Maquettes', 'API', 'Jira'],
        },
        {
          name: 'Applications de la ligne d’assemblage',
          context: 'BRP',
          description:
            'API REST Java / Spring Boot pour les applications des opérateurs et mécaniciens : suivi des véhicules sur la chaîne, KPI de production, automatisations. J’y ai introduit les tests de bout en bout Cucumber et lancé Scrum dans l’équipe.',
          tags: ['Java 17', 'Spring Boot', 'Cucumber', 'Scrum'],
        },
        {
          name: 'Gestion des actifs de communication',
          context: 'Bell',
          description:
            'Trois projets Vue 3 / Java pour gérer appareils, forfaits, facturation et requêtes. Développement full-stack, contribution à la migration Vue 2 → Vue 3 et rôle de proxy Product Owner auprès de l’équipe.',
          tags: ['Vue 3', 'TypeScript', 'Java 17', 'Proxy PO'],
        },
        {
          name: 'Refonte de l’interface d’entrepôt',
          context: 'Decathlon · CGI',
          description:
            'Nouvelle interface Angular, repartie de zéro, pour la gestion des commandes en entrepôt, et back-end Java de génération d’étiquettes d’expédition multi-transporteurs. Responsable de l’application et Scrum Master de l’équipe.',
          tags: ['Angular', 'Java', 'Spring', 'Scrumban'],
        },
      ],
      sideTitle: 'Projets personnels',
      sideItems: [
        {
          name: 'Suivi d’entraînement',
          context: 'Application web · en ligne',
          description:
            'Application web pensée pour le téléphone, que j’utilise à chaque séance de musculation : mode séance en direct (chrono, saisie des séries, RPE, comparatif avec la séance précédente) et tableau de bord d’analyse (volume, régularité, heatmap charge × semaine, 1RM estimé). Une seule page HTML / JavaScript sans dépendance, données locales avec export / import, hébergée sur GitHub Pages. Conçue et itérée avec Claude Code.',
          tags: ['JavaScript', 'HTML / CSS', 'GitHub Pages', 'Claude Code'],
          link: 'https://github.com/anaisfrn/suivi-entrainement',
        },
        {
          name: 'Tableau de bord de gestion',
          context: 'Petite entreprise · dépôt privé',
          description:
            'Application de gestion pour une petite entreprise de services : tableau de bord financier (revenus et charges), suivi des prestations et fiches clients. Données reprises depuis Excel, graphiques SVG dessinés sans bibliothèque, petit serveur local en Python qui enregistre chaque modification dans un fichier JSON. Conçue avec Claude Code.',
          tags: ['JavaScript', 'Python', 'SVG', 'Claude Code'],
        },
      ],
    },
    education: {
      title: 'Formation',
      items: [
        {
          name: 'Analyse fonctionnelle et IA : des besoins aux spécifications détaillées pour le développeur',
          org: 'ÉTS Formation',
          period: '2026',
          description: 'Activité de perfectionnement de l’École de technologie supérieure : trois jours (14 heures, 1,4 UEC), mai 2026.',
        },
        {
          name: 'Formation Scrum Master',
          org: 'Formation professionnelle',
          period: '2024',
          description: 'Rôle et posture du Scrum Master, animation des cérémonies Scrum.',
        },
        {
          name: 'Formation Product Owner',
          org: 'Formation professionnelle',
          period: '2024',
          description: 'Vision produit, gestion et priorisation du backlog.',
        },
        {
          name: 'DUT Informatique',
          org: 'Université de Lille, France',
          period: '2016 — 2018',
          description:
            'Diplôme universitaire de technologie en développement logiciel. Équivalence au Québec : diplôme d’études collégiales (DEC) techniques.',
        },
        {
          name: 'Licence de droit — 1re année',
          org: 'Université de Rouen, France',
          period: '2015 — 2016',
          description: 'Une année de droit avant de me réorienter vers l’informatique.',
        },
      ],
    },
    languages: {
      title: 'Langues',
      items: [
        { name: 'Français', level: 'Langue maternelle' },
        { name: 'Anglais', level: 'Professionnel complet' },
      ],
    },
    contact: {
      title: 'Prendre contact',
      subtitle: 'Un poste d’analyste, de développeuse ou un rôle entre les deux ? Parlons-en.',
      email: 'Courriel',
      phone: 'Téléphone',
      location: 'Localisation',
    },
    footer: {
      note: 'Conçu avec Vue.js & Tailwind CSS',
    },
  },

  en: {
    identity: {
      name: 'Anaïs Ferron',
      title: 'Functional Analyst & Full-Stack Developer',
      location: 'Quebec, Canada',
      email: 'anais.frn@gmail.com',
      phone: '', // intentionally empty: no phone number on the public site
      linkedin,
      linkedinLabel: 'in/anaïs-ferron',
      github,
      cvFile: 'cv-anais-ferron-en.pdf', // generated by `npm run cv:pdf`
    },
    nav: {
      profile: 'Profile',
      expertise: 'Expertise',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Selected Work',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      rotator: {
        prefix: 'I bridge',
        words: ['business and code.', 'needs and delivery.', 'ideas and production.'],
      },
      tagline:
        'Seven years of full-stack development with Java/Spring, Vue and Angular, then functional analysis at Desjardins: I scope the need, mock up the solution and can read the code behind it. Banking, telecom, manufacturing and retail.',
      ctaContact: 'Get in touch',
      ctaDownload: 'Download CV',
      companiesLabel: 'Employers & clients',
      companies: ['Desjardins', 'BRP', 'Bell', 'Decathlon', 'CGI'],
    },
    profile: {
      title: 'Profile',
      facts: [
        { value: '8+', label: 'years of experience' },
        { value: '4', label: 'industries' },
        { value: '2', label: 'countries' },
      ],
      paragraphs: [
        'In IT since 2018, trained in computer science in France and based in Quebec since 2021.',
        'I spent seven years as a full-stack developer (Java/Spring, Kotlin, Vue, Angular, React) for Decathlon, Desjardins, Bell and BRP, almost always with a second hat: Scrum Master, proxy Product Owner or application owner. Since 2025 I have been a functional analyst at Desjardins on account opening: I turn business needs into development-ready user stories, mock up the screens and check feasibility directly in the code and the APIs.',
        'AI is part of my daily work: GitHub Copilot and Microsoft 365 Copilot on the job, Claude Code for my personal projects, which I take from the initial need to a live application. I use it to move faster without lowering the bar: whatever ships is still reviewed, tested and understood.',
      ],
    },
    expertise: {
      title: 'Core Expertise',
      items: [
        {
          name: 'Functional Analysis & Product',
          description:
            'Requirements workshops, user stories and acceptance criteria, business rules, backlog prioritization and Figma mockups, through to functional validation and production release.',
        },
        {
          name: 'Full-Stack Development',
          description:
            'Java 17 / Spring Boot and Kotlin back ends with REST APIs; Vue 3, Angular and React front ends in TypeScript. Automated tests (JUnit, Cucumber, Jest, Cypress), code reviews and CI/CD.',
        },
        {
          name: 'Agile Delivery & Facilitation',
          description:
            'Scrum Master and proxy Product Owner on several engagements: introducing Scrum, guiding teams through agile transformations, running ceremonies, tracking velocity and leading client workshops.',
        },
        {
          name: 'AI in Everyday Work',
          description:
            'GitHub Copilot and Microsoft 365 Copilot at work to explore code, write, test and summarize; Claude Code to build complete applications by steering an agent: scoping, iterating and reviewing critically.',
        },
      ],
    },
    skills: {
      title: 'Technical Skills',
      categories: [
        { name: 'AI & Productivity', items: ['GitHub Copilot', 'Microsoft 365 Copilot', 'Claude', 'Claude Code', 'AI-assisted development', 'AI prototyping'] },
        { name: 'Functional Analysis & Product', items: ['User stories', 'Acceptance criteria', 'Business rules', 'Workshop facilitation', 'Backlog prioritization', 'API & data-flow analysis', 'Mockups & prototypes', 'Functional validation', 'Figma', 'Miro'] },
        { name: 'Back End', items: ['Java 17', 'Spring Boot', 'Kotlin', 'REST APIs', 'Swagger', 'PostgreSQL', 'SQL Server', 'Oracle', 'Maven', 'Gradle', 'Shell'] },
        { name: 'Front End', items: ['Vue 3', 'Angular', 'React', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Pinia', 'Element Plus'] },
        { name: 'Quality & Delivery', items: ['JUnit', 'Mockito', 'Cucumber', 'Jest', 'Cypress', 'TDD / BDD', 'Clean Code', 'Code reviews', 'Git', 'GitHub', 'GitLab', 'Bitbucket', 'Azure DevOps', 'Jenkins', 'Bamboo', 'Docker'] },
        { name: 'Agile & Tools', items: ['Scrum', 'Kanban', 'Scrumban', 'SAFe', 'Jira', 'Confluence', 'Trello', 'Asana'] },
        { name: 'Working Knowledge', items: ['Web3', 'Solidity'] },
      ],
    },
    experience: {
      title: 'Experience',
      jobs: [
        {
          company: 'Desjardins',
          role: 'Functional Analyst — Account Opening',
          period: 'Apr 2025 — present',
          location: 'Quebec, Canada',
          highlights: [
            'Functional analysis for personal account opening: the online journey, the advisor tool, and the services and APIs behind them.',
            'Gather and clarify requirements in workshops with business lines, design and developers; write user stories, acceptance criteria and business rules in Jira.',
            'Direct support to the Product Owner: slicing, feeding and prioritizing the backlog and preparing refinements. Better-scoped stories mean less back-and-forth mid-sprint.',
            'Mockups and prototypes that align business, design and development before any code is written: Figma, Miro, AI-generated prototypes and quick tweaks straight in the browser.',
            'Analyze APIs, interface contracts and data flows between systems: reading the Java and Angular code to settle feasibility without pulling in a developer; occasional fixes and small enhancements shipped myself.',
            'Test cases, functional validation, QA support and defect analysis through to production release.',
            'Daily use of GitHub Copilot and Microsoft 365 Copilot to explore code, write and summarize.',
          ],
          tags: ['Functional analysis', 'User stories', 'Jira', 'Figma', 'Java', 'Angular', 'GitHub', 'GitHub Copilot'],
        },
        {
          company: 'BRP',
          via: 'KuriosIT',
          role: 'Java Back-End Developer & Scrum Master',
          period: 'Jun 2024 — Apr 2025',
          location: 'Quebec, Canada',
          highlights: [
            'Maintained and extended the applications used by assembly-line operators and mechanics: vehicle tracking along the line, production monitoring, KPIs and process automation.',
            'Analyzed requirements, then designed and built new REST APIs in Java 17 / Spring Boot.',
            'Introduced end-to-end tests (Cucumber) and strengthened unit tests (JUnit) on the APIs.',
            'Production support for applications the assembly line depends on; reduced technical debt through refactoring, code reviews and documentation.',
            'On my own initiative, introduced Scrum to a team with no agile framework and no Scrum Master: daily stand-up, planning, sprint review and retrospective, alongside my developer role.',
            'Branch and build management in Azure DevOps; deployments to test and production environments.',
          ],
          tags: ['Java 17', 'Spring Boot', 'REST APIs', 'Cucumber', 'JUnit', 'Azure DevOps', 'SQL Server', 'Docker'],
        },
        {
          company: 'Bell',
          via: 'Acensi',
          role: 'Full-Stack Developer & Proxy Product Owner',
          period: 'Jun 2022 — Jun 2024',
          location: 'Quebec, Canada',
          highlights: [
            'Three full-stack Vue 3 / Java projects: applications and services used by Bell professionals to manage their communication assets (devices, plans, billing, transaction history, request forms).',
            'REST APIs in Java 17 / Spring Boot and Vue / TypeScript interfaces (Pinia, Element Plus) built from the design team’s Figma mockups.',
            'Contributed to the migration from Vue 2 to Vue 3.',
            'Back-end and front-end unit tests, Cypress end-to-end tests, code reviews, builds and deployments (GitLab, Bamboo).',
            'Proxy Product Owner: analyzed mockups, wrote user stories and acceptance criteria with the PO, managed the backlog.',
            'Ran the Scrum ceremonies (daily, planning, review, retrospective, refinement); tracked velocity and burndown.',
          ],
          tags: ['Vue 3', 'TypeScript', 'Java 17', 'Spring Boot', 'Pinia', 'Jest', 'Cypress', 'GitLab', 'Figma'],
        },
        {
          company: 'Desjardins',
          via: 'Maplr',
          role: 'Full-Stack Developer',
          period: 'Jun 2021 — May 2022',
          location: 'Quebec, Canada',
          highlights: [
            'Two projects building secure document-management applications for the financial crime prevention team.',
            'Kotlin / Spring Boot back end; React front end on the first project, Angular on the second.',
            'Back-end and front-end unit tests (Mockito, Jest, Cypress) and documentation.',
            'Scrum team: daily stand-up and a retrospective every two weeks.',
          ],
          tags: ['Kotlin', 'Spring Boot', 'Angular', 'React', 'TypeScript', 'Gradle', 'Jest', 'Cypress'],
        },
        {
          company: 'Decathlon',
          via: 'CGI',
          role: 'Full-Stack Developer & Application Owner',
          period: 'Apr 2019 — Jun 2021',
          location: 'Lille, France',
          highlights: [
            'Logistics applications for the warehouse dedicated to sorting and delivering online orders, including shipping-label generation for multiple carriers.',
            'Rebuilt the Angular warehouse order-management interface from scratch.',
            'Java / Spring back end: onboarded new carriers, generated shipping labels and their QR codes, maintained the application.',
            'Application owner: analyzed and challenged requirements, wrote the functional specification, technical specifications and test plan, managed the backlog and user stories.',
            'Scrum Master: guided the team through its agile transformation (Scrumban), ran the ceremonies, drafted the Definition of Done, led client workshops.',
            'QA-environment testing, deployments to test and production, demos to the client at sprint reviews.',
          ],
          tags: ['Java 8 / 11', 'Spring', 'Angular', 'TypeScript', 'PostgreSQL', 'Jenkins', 'Scrumban'],
        },
        {
          company: 'ADEO',
          via: 'CGI',
          role: 'webMethods Developer',
          period: 'Apr 2018 — Apr 2019',
          location: 'Lille, France',
          highlights: [
            'Built and updated ESB integration flows (file, SOAP, REST) in an SOA architecture for an international home-improvement group, within a team of about fifteen.',
            'Reviewed the specifications sent by the client’s architects, estimated development work and wrote quotes.',
            'Internal acceptance testing, deliveries and test automation.',
          ],
          tags: ['webMethods', 'SOA', 'SOAP / REST', 'XML', 'SQL'],
        },
      ],
    },
    projects: {
      title: 'Selected Work',
      items: [
        {
          name: 'Account Opening',
          context: 'Desjardins',
          description:
            'Personal account opening, from the online journey to the advisor tool and the APIs in between. I own the functional analysis: business workshops, user stories, mockups and validation through to production.',
          tags: ['Functional analysis', 'Mockups', 'APIs', 'Jira'],
        },
        {
          name: 'Assembly-Line Applications',
          context: 'BRP',
          description:
            'Java / Spring Boot REST APIs for operator and mechanic applications: vehicle tracking along the line, production KPIs, automation. I introduced Cucumber end-to-end tests and got the team started with Scrum.',
          tags: ['Java 17', 'Spring Boot', 'Cucumber', 'Scrum'],
        },
        {
          name: 'Communication Asset Management',
          context: 'Bell',
          description:
            'Three Vue 3 / Java projects to manage devices, plans, billing and requests. Full-stack development, contribution to the Vue 2 → Vue 3 migration and proxy Product Owner for the team.',
          tags: ['Vue 3', 'TypeScript', 'Java 17', 'Proxy PO'],
        },
        {
          name: 'Warehouse Interface Rebuild',
          context: 'Decathlon · CGI',
          description:
            'A new Angular interface, rebuilt from scratch, for warehouse order management, plus the Java back end generating multi-carrier shipping labels. Application owner and Scrum Master for the team.',
          tags: ['Angular', 'Java', 'Spring', 'Scrumban'],
        },
      ],
      sideTitle: 'Side Projects',
      sideItems: [
        {
          name: 'Workout Tracker',
          context: 'Web app · live',
          description:
            'A phone-first web app I use at every strength-training session: live session mode (timer, set logging, RPE, comparison with the previous session) and an analysis dashboard (volume, consistency, load × week heatmap, estimated 1RM). A single dependency-free HTML / JavaScript page, local data with export / import, hosted on GitHub Pages. Designed and iterated with Claude Code.',
          tags: ['JavaScript', 'HTML / CSS', 'GitHub Pages', 'Claude Code'],
          link: 'https://github.com/anaisfrn/suivi-entrainement',
        },
        {
          name: 'Business Management Dashboard',
          context: 'Small business · private repo',
          description:
            'Management app for a small service business: financial dashboard (revenue and expenses), service tracking and client records. Data migrated from Excel, hand-drawn SVG charts with no library, and a small local Python server that saves every change to a JSON file. Built with Claude Code.',
          tags: ['JavaScript', 'Python', 'SVG', 'Claude Code'],
        },
      ],
    },
    education: {
      title: 'Education & Training',
      items: [
        {
          name: 'Functional Analysis and AI: From Requirements to Detailed Specifications for Developers',
          org: 'ÉTS Formation',
          period: '2026',
          description: 'Professional development course at École de technologie supérieure: three days (14 hours, 1.4 CEUs), May 2026. Taught in French.',
        },
        {
          name: 'Scrum Master Training',
          org: 'Professional training',
          period: '2024',
          description: 'Scrum Master role and stance, facilitating Scrum ceremonies.',
        },
        {
          name: 'Product Owner Training',
          org: 'Professional training',
          period: '2024',
          description: 'Product vision, backlog management and prioritization.',
        },
        {
          name: 'DUT in Computer Science',
          org: 'University of Lille, France',
          period: '2016 — 2018',
          description:
            'Two-year university technical diploma in software development. Quebec equivalent: technical college diploma (DEC).',
        },
        {
          name: 'First Year of Law (Licence 1)',
          org: 'University of Rouen, France',
          period: '2015 — 2016',
          description: 'One year of law before switching to computer science.',
        },
      ],
    },
    languages: {
      title: 'Languages',
      items: [
        { name: 'French', level: 'Native' },
        { name: 'English', level: 'Full professional' },
      ],
    },
    contact: {
      title: 'Let’s get in touch',
      subtitle: 'An analyst role, a developer role, or something in between? Let’s talk.',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
    },
    footer: {
      note: 'Built with Vue.js & Tailwind CSS',
    },
  },
}

// Typographie française : espace insécable avant : ; ? ! pour qu'un signe de
// ponctuation ne se retrouve jamais seul en début de ligne.
function frenchSpacing(value) {
  if (typeof value === 'string') return value.replace(/ ([:;?!])/g, '\u00A0$1')
  if (Array.isArray(value)) return value.map(frenchSpacing)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, v]) => [key, frenchSpacing(v)]))
  }
  return value
}
cv.fr = frenchSpacing(cv.fr)
