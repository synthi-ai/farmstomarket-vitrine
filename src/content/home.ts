// AUTO-PORTED from "Site Farms to Market.dc.html" — bilingual home content.
// Edit here; this is the single source of truth for the landing copy.

export type Lang = "fr" | "en";

export const PLAY = "https://play.google.com/store/apps/details?id=com.i4u.synthi_ai.farms2market_mobile";
export const PLAY_PRO = "https://play.google.com/store/apps/details?id=com.i4u.synthi_ai.farms2markets_agents";
export const CHAPTERS = ["besoin", "reponse", "produit", "infrastructure", "parcours", "acteurs", "ecosysteme"] as const;
export const TOAST_STYLE: [string, string][] = [["#00E834", "#040405"], ["#040405", "#00E834"], ["#E6FDEB", "#006116"]];
export const MOD_IMG = ["/assets/m-market.png", "/assets/m-pay.png", "/assets/m-track.png", "/assets/m-bourse.png", "/assets/m-pro.png"];
export const ACTOR_SLUGS = ["producteurs", "acheteurs", "transporteurs", "cooperatives"] as const;
export const ACTOR_IMG = ["/farmers/2.jpeg", "/assets/m-buyer.png", "/assets/m-driver.png", "/farmers/farms2.jpeg"];
export const GAL_IMG = ["/farmers/2.jpeg", "/farmers/cassava.jpeg", "/farmers/poivrons.jpeg", "/farmers/farms2.jpeg", "/farmers/8.jpg", "/farmers/cassava1.jpeg"];
export const LAYER_BG = ["#00E834", "#00A525", "#006116", "#00300A", "#040405"];
export const LAYER_FG = ["#040405", "#040405", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
export const HERO_IMG = "/bg/Hero.png";

export const T = {
fr: {
  langSwitch: 'EN', headerCta: 'Rejoindre',
  nav: ['Le besoin', 'La réponse', 'Le produit', "L'infrastructure", 'Le parcours', 'Les acteurs', "L'écosystème"],
  toasts: [['↗', 'Nouvelle offre reçue', 'Restaurant · Douala'], ['◎', 'Livraison en route', 'Suivi GPS en direct'], ['✓', 'Paiement libéré', 'Séquestre AgroBank']],
  bento: { eyebrow: "L'écosystème produit", title: 'Quatre produits. Une seule chaîne de confiance.', debit: 'Débit', cocoa: 'Cacao premium', illus: 'Aperçu de l’interface Faroya',
    cards: [
      { tag: 'Marketplace mobile', name: "Farm’sToMarket", d: 'Vendre, acheter et livrer en direct : producteurs, acheteurs et transporteurs.', cta: 'Découvrir' },
      { tag: 'Gestion de filière', name: "Farm’sToMarket Pro", d: 'Coopératives, distributeurs et contrôleurs pilotent toute leur filière.', cta: 'Découvrir' },
      { tag: 'Banque numérique', name: 'AgroBank', d: 'Comptes, paiements, crédit, assurance et épargne pour chaque maillon.', cta: 'Découvrir AgroBank' },
      { tag: 'Bourse agro-pastorale · En développement', name: 'Faroya', d: 'Cours en direct, échanges au comptant et contrats à terme sur les ressources agricoles.', cta: 'Découvrir Faroya' },
    ] },
  hero: {
    eyebrow: "L'infrastructure de confiance de l'agriculture africaine",
    l1: "Nourrir l'Afrique commence", l2: 'par ceux qui la cultivent.',
    lead: "Farm’sToMarket réunit un marché, des paiements, une logistique et des données pour relier chaque champ à son marché. Directement, en toute transparence, au juste prix.",
    a: "Découvrir l'histoire", b: 'Rejoindre la plateforme',
    alt: 'Producteur au champ', caption: "Tout commence ici, dans le champ.", scroll: 'Faites défiler',
  },
  need: {
    eyebrow: 'Le besoin',
    manifesto: "Entre le champ et le marché, la valeur se perd. Trop d'intermédiaires, des prix invisibles, des paiements incertains, des récoltes qui s'abîment faute de transport. Ceux qui produisent sont ceux qui gagnent le moins.",
    chainTitle: "La chaîne d'aujourd'hui", chainNote: 'Chaque maillon prend sa marge. Le producteur, lui, ne voit rien.',
    chain: [
      { tag: 'Produit', name: 'Producteur', note: 'Vend sans connaître le prix du marché.' },
      { tag: 'Intermédiaire', name: 'Collecteur', note: 'Achète bord champ, fixe le prix.' },
      { tag: 'Intermédiaire', name: 'Grossiste', note: 'Stocke, revend, ajoute sa marge.' },
      { tag: 'Intermédiaire', name: 'Revendeur', note: 'Dernier maillon avant le client.' },
      { tag: 'Paie', name: 'Acheteur', note: "Paie plus cher, sans traçabilité." },
    ],
    pains: [
      { t: 'Des prix opaques', d: "Sans accès aux cours, le producteur accepte le prix qu'on lui impose." },
      { t: 'Des paiements incertains', d: 'Retards, impayés, arnaques : la confiance manque des deux côtés.' },
      { t: 'Des pertes après récolte', d: "Faute de débouché rapide et de transport, une partie de la récolte s'abîme." },
      { t: 'Une logistique fragmentée', d: 'Trouver un transporteur fiable, au bon moment et au bon prix, reste un défi.' },
      { t: 'Un financement inaccessible', d: "Sans historique ni garanties, l'accès au crédit et à l'assurance est presque impossible." },
    ],
  },
  ans: {
    eyebrow: 'La réponse',
    title: 'Nous avons reconstruit la chaîne.',
    lead: 'Un lien direct entre ceux qui produisent et ceux qui achètent, et une infrastructure qui garantit chaque étape : le prix, le paiement, la livraison.',
    side: 'Vend', producer: 'Producteurs', producerD: 'Agriculteurs, éleveurs et coopératives fixent leurs prix et vendent en direct.',
    core: "L'infrastructure", coreItems: ['Marché', 'Séquestre', 'Logistique', 'Données & IA'],
    side2: 'Achète', buyer: 'Acheteurs', buyerD: 'Commerçants, restaurants, transformateurs et exportateurs achètent à la source.',
    principles: [
      { t: 'Direct.', d: "Aucun intermédiaire entre le champ et l'acheteur. La valeur revient à celui qui produit." },
      { t: 'Garanti.', d: "L'argent est sécurisé dès la commande et libéré à la livraison validée." },
      { t: 'Traçable.', d: 'Chaque étape est documentée : photo, position GPS, QR code de remise.' },
    ],
  },
  prod: {
    eyebrow: 'Le produit', title: 'Cinq modules. Une seule plateforme.',
    lead: "Chaque module répond à une rupture de la chaîne. Ensemble, ils forment un système complet, du champ au paiement.",
    modules: [
      { name: 'Marketplace', t: 'Vendre et acheter, sans intermédiaire.', d: 'Les producteurs publient leurs cultures, leur bétail et leurs produits. Les acheteurs comparent, négocient et commandent auprès de profils vérifiés.', list: ['Annonce publiée en quelques minutes', 'Offres et négociation en temps réel', 'Profils, certifications et avis vérifiés'] },
      { name: 'AgroBank', t: 'Le paiement garanti, pour tous.', d: "Les fonds de l'acheteur sont conservés sous séquestre et versés au producteur dès que la livraison est validée. Compte, portefeuille et services financiers pensés pour l'agriculture.", list: ['Séquestre : 45 % à la commande, 55 % à la livraison', 'Portefeuille relié au mobile money', 'Aucun frais caché'] },
      { name: 'Logistique', t: 'Chaque livraison, suivie de bout en bout.', d: 'Les transporteurs reçoivent des missions près de chez eux, planifient leurs itinéraires et livrent avec un suivi GPS partagé par tous.', list: ['Attribution des missions et itinéraires', 'Suivi GPS en direct', 'Remise confirmée par QR code'] },
      { name: 'Bourse agricole & IA', t: 'Vendre au bon prix, au bon moment.', d: "Les cours du marché en direct, des prévisions de rendement et un calendrier de récolte guidé par les données du sol et la demande.", list: ['Cours et tendances en direct', 'Alertes de prix sur le téléphone', 'Calendrier de récolte intelligent'] },
      { name: "Farm’sToMarket Pro", t: 'Piloter une filière entière.', d: 'Pour les coopératives, distributeurs, transporteurs et contrôleurs qualité : producteurs, commandes, livraisons et finances réunis dans un seul outil.', list: ['Gestion des réseaux de producteurs', 'Commandes vérifiées par photo et GPS', 'Tableaux de bord de performance'] },
    ],
  },
  infra: {
    eyebrow: "L'infrastructure", title: 'Ce qui ne se voit pas, et qui change tout.',
    lead: "Sous chaque application, cinq couches techniques travaillent ensemble pour que chaque transaction soit juste, sûre et traçable.",
    layers: [
      { name: 'Interfaces', d: "Application Farm’sToMarket, application Pro et plateforme web. Une expérience simple, en français et en anglais." },
      { name: 'Confiance', d: "Identités vérifiées, preuves photo et GPS à chaque étape, remise par QR code et arbitrage en cas de litige." },
      { name: 'Paiement', d: 'AgroBank, séquestre et mobile money (MTN MoMo, Orange Money). Les fonds ne bougent que lorsque les conditions sont remplies.' },
      { name: 'Logistique', d: 'Attribution des missions, optimisation des itinéraires, suivi en direct et partage transparent des frais de transport.' },
      { name: 'Données & IA', d: 'Cours du marché, prévisions de rendement et recommandations de prix, calculés en continu.' },
    ],
    fieldTitle: 'Conçue pour la réalité du terrain.',
    field: [
      { t: 'Connectivité faible', d: 'Optimisée pour les réseaux ruraux, avec des fonctions disponibles hors ligne.' },
      { t: 'Mobile money natif', d: 'Paiements et versements directement sur les portefeuilles mobiles.' },
      { t: 'Bilingue', d: 'Toute la plateforme est disponible en français et en anglais.' },
      { t: 'Conforme CEMAC', d: 'Des services financiers alignés sur la réglementation régionale.' },
    ],
  },
  journey: {
    eyebrow: 'Le parcours', title: 'Une récolte, de la publication au paiement.',
    lead: 'Suivez une transaction réelle sur Farms to Market. Chaque étape est sécurisée, documentée et visible par toutes les parties.',
    steps: [
      { who: 'Producteur', t: 'Publication', d: "Le producteur photographie sa récolte, fixe son prix à l'aide des cours du marché et publie son annonce." },
      { who: 'Acheteur', t: 'Commande', d: "L'acheteur compare les offres, négocie et commande auprès d'un producteur vérifié." },
      { who: 'AgroBank', t: 'Séquestre', d: "L'acheteur paie 45 % à la commande. Les fonds sont bloqués et protégés." },
      { who: 'Transporteur', t: 'Enlèvement', d: "Un transporteur proche accepte la mission. L'état de la marchandise est photographié et géolocalisé." },
      { who: 'Transporteur', t: 'Transport', d: 'Le trajet est suivi en direct par toutes les parties, avec une notification à chaque étape.' },
      { who: 'Acheteur', t: 'Remise', d: "La remise est confirmée par QR code et l'acheteur valide la qualité à réception." },
      { who: 'AgroBank', t: 'Paiement', d: 'Les 55 % restants sont versés. Le producteur est payé sur son portefeuille mobile.' },
    ],
  },
  actors: {
    eyebrow: 'Les acteurs', title: 'Chaque maillon a sa place.', more: 'Voir la page dédiée',
    tabs: [
      { label: 'Producteurs', who: 'Petits producteurs, éleveurs', t: 'Transformez votre récolte en revenu garanti.', d: "Publiez vos produits en quelques minutes, recevez des offres en temps réel et soyez payé sur votre portefeuille mobile dès la livraison confirmée.", list: ['Prix fixés avec les cours du marché', 'Paiement garanti par séquestre', 'Calendrier de récolte intelligent'] },
      { label: 'Acheteurs', who: 'Commerçants, restaurants, transformateurs', t: 'Achetez à la source, en toute confiance.', d: 'Accédez à des produits frais et locaux, directement auprès de producteurs vérifiés. Votre argent n\u2019est libéré qu\u2019à la livraison conforme.', list: ['Disponibilité et qualité visibles', 'Fonds protégés jusqu\u2019à la remise', 'Suivi de commande en direct'] },
      { label: 'Transporteurs', who: 'Transporteurs, livreurs', t: 'Des missions régulières, près de chez vous.', d: 'Acceptez des demandes de livraison, planifiez vos itinéraires et réalisez vos missions avec un suivi GPS complet.', list: ['Missions géolocalisées', 'Remise confirmée par QR code', 'Paiement à la livraison'] },
      { label: 'Coopératives', who: 'Coopératives, distributeurs, contrôleurs', t: 'Pilotez toute votre filière.', d: "Avec Farm’sToMarket Pro, gérez vos producteurs, vos commandes, vos livraisons et vos finances depuis un seul outil.", list: ['Réseau de producteurs centralisé', 'Commandes vérifiées par photo et GPS', 'Tableaux de bord de performance'] },
    ],
  },
  eco: {
    eyebrow: "L'écosystème", title: 'Né à Douala, pensé pour toute l\u2019Afrique.',
    lead: "Une équipe d'agronomes, d'ingénieurs et d'experts fintech a conçu chaque fonctionnalité pour les réalités du terrain : des champs de manioc aux marchés du cacao, du bétail à l'huile de palme. Farm’sToMarket est développé par SYNTHI-AI .Inc.",
    partners: 'Ils travaillent à nos côtés',
    gallery: ['Produits frais', 'Filière manioc', 'Légumes', 'Agriculture intelligente', 'Qualité export', 'Tubercules'],
  },
  apps: {
    title: 'Deux applications pour entrer dans la chaîne.', link: "Voir la page des applications",
    agro: 'La banque numérique complète de la filière : comptes, paiements, crédit, assurance, épargne.',
    faroya: 'La bourse agro-pastorale : cours en direct, spot, contrats à terme. En développement.',
    a: 'Le marché pour vendre, acheter et livrer : producteurs, acheteurs et transporteurs.',
    b: 'La gestion de filière pour les coopératives, distributeurs et contrôleurs qualité.',
  },
  faq: {
    title: 'Les questions qui comptent.', all: 'Tout', more: 'Une autre question ?',
    items: [
      { c: 'Tarifs', q: 'Y a-t-il des frais cachés ?', a: "Non. L'application est gratuite et tout coût éventuel est affiché avant de valider une transaction." },
      { c: 'Tarifs', q: 'Comment les prix justes sont-ils garantis ?', a: "Les cours du marché sont affichés en temps réel et nos outils d'IA suggèrent un prix cohérent avec la demande. Vous restez libre de fixer le vôtre." },
      { c: 'Sécurité', q: "Comment vérifier les certifications d'un vendeur ?", a: "Chaque profil est vérifié et affiche ses certifications, son historique et les avis des acheteurs." },
      { c: 'Sécurité', q: "Que se passe-t-il si un acheteur disparaît après la livraison ?", a: "Rien ne change pour vous : l'acheteur a payé à la commande et les fonds sont sous séquestre. Ils vous sont versés à la livraison validée." },
      { c: 'Livraison', q: 'Et si le transporteur abîme la marchandise ?', a: "L'état des produits est photographié à l'enlèvement et à la remise. En cas de litige, notre équipe arbitre sur la base de ces preuves avant de libérer les fonds." },
      { c: 'Livraison', q: 'Comment sont partagés les frais de transport ?', a: "Ils sont calculés selon la distance et le volume, puis répartis de façon transparente entre les parties avant la commande." },
      { c: 'Qualité', q: "Puis-je être remboursé si le produit n'est pas conforme ?", a: "Oui. Vous validez la qualité à la réception. Si le produit n'est pas conforme, les fonds sous séquestre peuvent vous être restitués après examen." },
    ],
  },
  end: {
    title: 'Rejoignez la chaîne.',
    aTag: 'Acteurs agricoles', aTitle: 'Producteur, acheteur ou transporteur ?', aText: "Téléchargez l'application gratuitement et commencez à vendre, acheter ou livrer dès aujourd'hui.",
    bTag: 'Institutions & partenaires', bTitle: 'Coopérative, ONG, banque ou institution ?', bText: "Construisons ensemble des filières plus justes. Parlons de vos projets, de vos producteurs et de vos besoins.",
  },
  footer: {
    tagline: "L'infrastructure de confiance de l'agriculture africaine.", powered: 'Propulsé par SYNTHI-AI .Inc',
    cols: [
      { title: 'Solutions', links: [['Producteurs', 'Solutions.dc.html?p=producteurs'], ['Acheteurs', 'Solutions.dc.html?p=acheteurs'], ['Transporteurs', 'Solutions.dc.html?p=transporteurs'], ['Coopératives', 'Solutions.dc.html?p=cooperatives'], ['AgroBank', 'Solutions.dc.html?p=agrobank'], ['Faroya', 'Solutions.dc.html?p=faroya']] },
      { title: 'Entreprise', links: [['Notre mission', '#reponse'], ["L'écosystème", '#ecosysteme'], ['FAQ', '#faq'], ['Partenariats', 'mailto:contact@farmstomarket.io']] },
      { title: 'Contact', links: [['contact@farmstomarket.io', 'mailto:contact@farmstomarket.io'], ['support@farmstomarket.io', 'mailto:support@farmstomarket.io'], ['+237 620 207 980', 'tel:+237620207980'], ['Politique de confidentialité', '#']] },
    ],
  },
},
en: {
  langSwitch: 'FR', headerCta: 'Join',
  nav: ['The need', 'Our answer', 'The product', 'Infrastructure', 'The journey', 'Who it serves', 'Ecosystem'],
  toasts: [['↗', 'New offer received', 'Restaurant · Douala'], ['◎', 'Delivery on its way', 'Live GPS tracking'], ['✓', 'Payment released', 'AgroBank escrow']],
  bento: { eyebrow: 'The product ecosystem', title: 'Four products. One chain of trust.', debit: 'Debit', cocoa: 'Premium cocoa', illus: 'Faroya interface preview',
    cards: [
      { tag: 'Mobile marketplace', name: "Farm’sToMarket", d: 'Sell, buy and deliver directly: producers, buyers and carriers.', cta: 'Discover' },
      { tag: 'Value-chain management', name: "Farm’sToMarket Pro", d: 'Cooperatives, distributors and inspectors run their whole chain.', cta: 'Discover' },
      { tag: 'Digital bank', name: 'AgroBank', d: 'Accounts, payments, credit, insurance and savings for every link.', cta: 'Discover AgroBank' },
      { tag: 'Agro-pastoral exchange · In development', name: 'Faroya', d: 'Live prices, spot trading and futures on agricultural resources.', cta: 'Discover Faroya' },
    ] },
  hero: {
    eyebrow: 'The trust infrastructure for African agriculture',
    l1: 'Feeding Africa starts', l2: 'with those who farm it.',
    lead: 'Farm’sToMarket brings together a marketplace, payments, logistics and data to connect every field to its market. Directly, transparently, at a fair price.',
    a: 'Discover the story', b: 'Join the platform',
    alt: 'Farmer in the field', caption: 'It all starts here, in the field.', scroll: 'Scroll',
  },
  need: {
    eyebrow: 'The need',
    manifesto: "Between the field and the market, value gets lost. Too many middlemen, invisible prices, uncertain payments, harvests that spoil for lack of transport. Those who produce are those who earn the least.",
    chainTitle: "Today's chain", chainNote: 'Every link takes its margin. The farmer sees none of it.',
    chain: [
      { tag: 'Produces', name: 'Farmer', note: 'Sells without knowing the market price.' },
      { tag: 'Middleman', name: 'Collector', note: 'Buys at the farm gate, sets the price.' },
      { tag: 'Middleman', name: 'Wholesaler', note: 'Stores, resells, adds a margin.' },
      { tag: 'Middleman', name: 'Retailer', note: 'Last link before the customer.' },
      { tag: 'Pays', name: 'Buyer', note: 'Pays more, with no traceability.' },
    ],
    pains: [
      { t: 'Opaque prices', d: 'Without market data, farmers accept whatever price they are offered.' },
      { t: 'Uncertain payments', d: 'Delays, defaults and scams: trust is missing on both sides.' },
      { t: 'Post-harvest losses', d: 'Without quick buyers and transport, part of every harvest spoils.' },
      { t: 'Fragmented logistics', d: 'Finding a reliable carrier at the right time and price is still hard.' },
      { t: 'No access to finance', d: 'Without history or collateral, credit and insurance are out of reach.' },
    ],
  },
  ans: {
    eyebrow: 'Our answer', title: 'We rebuilt the chain.',
    lead: 'A direct link between those who produce and those who buy, and an infrastructure that guarantees every step: the price, the payment, the delivery.',
    side: 'Sells', producer: 'Producers', producerD: 'Farmers, breeders and cooperatives set their prices and sell directly.',
    core: 'The infrastructure', coreItems: ['Marketplace', 'Escrow', 'Logistics', 'Data & AI'],
    side2: 'Buys', buyer: 'Buyers', buyerD: 'Retailers, restaurants, processors and exporters buy at the source.',
    principles: [
      { t: 'Direct.', d: 'No middlemen between field and buyer. Value goes back to the producer.' },
      { t: 'Guaranteed.', d: 'Money is secured at order and released on validated delivery.' },
      { t: 'Traceable.', d: 'Every step is documented: photo, GPS position, QR handover.' },
    ],
  },
  prod: {
    eyebrow: 'The product', title: 'Five modules. One platform.',
    lead: 'Each module fixes a break in the chain. Together they form a complete system, from field to payment.',
    modules: [
      { name: 'Marketplace', t: 'Buy and sell, with no middlemen.', d: 'Producers list crops, livestock and products. Buyers compare, negotiate and order from verified profiles.', list: ['Listings published in minutes', 'Real-time offers and negotiation', 'Verified profiles, certifications and reviews'] },
      { name: 'AgroBank', t: 'Guaranteed payment, for everyone.', d: "The buyer's funds are held in escrow and released to the producer once delivery is validated. Accounts, wallet and financial services built for agriculture.", list: ['Escrow: 45% on order, 55% on delivery', 'Wallet linked to mobile money', 'No hidden fees'] },
      { name: 'Logistics', t: 'Every delivery, tracked end to end.', d: 'Carriers receive nearby missions, plan their routes and deliver with GPS tracking shared by all parties.', list: ['Mission dispatch and routing', 'Live GPS tracking', 'QR-confirmed handover'] },
      { name: 'Commodity exchange & AI', t: 'Sell at the right price, at the right time.', d: 'Live market prices, yield forecasts and a harvest calendar driven by soil data and demand.', list: ['Live prices and trends', 'Price alerts on your phone', 'Smart harvest calendar'] },
      { name: "Farm’sToMarket Pro", t: 'Run an entire value chain.', d: 'For cooperatives, distributors, carriers and quality inspectors: producers, orders, deliveries and finances in one tool.', list: ['Producer network management', 'Orders verified by photo and GPS', 'Performance dashboards'] },
    ],
  },
  infra: {
    eyebrow: 'Infrastructure', title: 'What you don\u2019t see changes everything.',
    lead: 'Beneath every app, five technical layers work together so that every transaction is fair, safe and traceable.',
    layers: [
      { name: 'Interfaces', d: "Farm’sToMarket app, Pro app and web platform. A simple experience in French and English." },
      { name: 'Trust', d: 'Verified identities, photo and GPS proof at every step, QR handover and dispute resolution.' },
      { name: 'Payments', d: 'AgroBank, escrow and mobile money (MTN MoMo, Orange Money). Funds only move when conditions are met.' },
      { name: 'Logistics', d: 'Mission dispatch, route optimisation, live tracking and transparent transport cost sharing.' },
      { name: 'Data & AI', d: 'Market prices, yield forecasts and price recommendations, computed continuously.' },
    ],
    fieldTitle: 'Built for the reality on the ground.',
    field: [
      { t: 'Low connectivity', d: 'Optimised for rural networks, with features available offline.' },
      { t: 'Native mobile money', d: 'Payments and payouts straight to mobile wallets.' },
      { t: 'Bilingual', d: 'The whole platform is available in French and English.' },
      { t: 'CEMAC compliant', d: 'Financial services aligned with regional regulation.' },
    ],
  },
  journey: {
    eyebrow: 'The journey', title: 'One harvest, from listing to payment.',
    lead: 'Follow a real transaction on Farms to Market. Every step is secured, documented and visible to all parties.',
    steps: [
      { who: 'Producer', t: 'Listing', d: 'The producer photographs the harvest, sets a price using live market data and publishes.' },
      { who: 'Buyer', t: 'Order', d: 'The buyer compares offers, negotiates and orders from a verified producer.' },
      { who: 'AgroBank', t: 'Escrow', d: 'The buyer pays 45% on order. Funds are locked and protected.' },
      { who: 'Carrier', t: 'Pickup', d: 'A nearby carrier accepts the mission. The goods are photographed and geolocated.' },
      { who: 'Carrier', t: 'Transport', d: 'The trip is tracked live by all parties, with a notification at each step.' },
      { who: 'Buyer', t: 'Handover', d: 'Handover is confirmed by QR code and the buyer validates quality on receipt.' },
      { who: 'AgroBank', t: 'Payment', d: 'The remaining 55% is released. The producer is paid to their mobile wallet.' },
    ],
  },
  actors: {
    eyebrow: 'Who it serves', title: 'Every link has its place.', more: 'See the dedicated page',
    tabs: [
      { label: 'Producers', who: 'Smallholders, breeders', t: 'Turn your harvest into guaranteed income.', d: 'List your produce in minutes, receive real-time offers and get paid to your mobile wallet as soon as delivery is confirmed.', list: ['Prices set with live market data', 'Payment guaranteed by escrow', 'Smart harvest calendar'] },
      { label: 'Buyers', who: 'Retailers, restaurants, processors', t: 'Buy at the source, with confidence.', d: 'Access fresh local produce directly from verified producers. Your money is only released on compliant delivery.', list: ['Availability and quality visible', 'Funds protected until handover', 'Live order tracking'] },
      { label: 'Carriers', who: 'Transporters, drivers', t: 'Regular missions, close to you.', d: 'Accept delivery requests, plan your routes and complete missions with full GPS tracking.', list: ['Geolocated missions', 'QR-confirmed handover', 'Paid on delivery'] },
      { label: 'Cooperatives', who: 'Cooperatives, distributors, inspectors', t: 'Run your whole value chain.', d: "With Farm’sToMarket Pro, manage producers, orders, deliveries and finances from a single tool.", list: ['Centralised producer network', 'Orders verified by photo and GPS', 'Performance dashboards'] },
    ],
  },
  eco: {
    eyebrow: 'Ecosystem', title: 'Born in Douala, built for all of Africa.',
    lead: 'A team of agronomists, engineers and fintech experts designed every feature for the realities on the ground: from cassava fields to cocoa markets, livestock to palm oil. Farm’sToMarket is developed by SYNTHI-AI .Inc.',
    partners: 'Working alongside',
    gallery: ['Fresh produce', 'Cassava supply', 'Vegetables', 'Smart farming', 'Export grade', 'Root crops'],
  },
  apps: {
    title: 'Two apps to join the chain.', link: 'See the apps page',
    agro: 'The full digital bank for the value chain: accounts, payments, credit, insurance, savings.',
    faroya: 'The agro-pastoral exchange: live prices, spot, futures. In development.',
    a: 'The marketplace to sell, buy and deliver: producers, buyers and carriers.',
    b: 'Value-chain management for cooperatives, distributors and quality inspectors.',
  },
  faq: {
    title: 'The questions that matter.', all: 'All', more: 'Another question?',
    items: [
      { c: 'Pricing', q: 'Are there any hidden fees?', a: 'No. The app is free and any cost is shown before you confirm a transaction.' },
      { c: 'Pricing', q: 'How are fair prices ensured?', a: 'Market prices are shown in real time and our AI tools suggest a price consistent with demand. You remain free to set your own.' },
      { c: 'Security', q: "How can I verify a seller's certifications?", a: 'Every profile is verified and shows its certifications, history and buyer reviews.' },
      { c: 'Security', q: 'What if a buyer disappears after delivery?', a: 'Nothing changes for you: the buyer paid at order and funds are in escrow. They are released on validated delivery.' },
      { c: 'Delivery', q: 'What if the carrier damages the goods?', a: 'Goods are photographed at pickup and handover. In a dispute, our team decides based on this evidence before releasing funds.' },
      { c: 'Delivery', q: 'How are transport costs shared?', a: 'They are calculated by distance and volume, then split transparently between parties before the order.' },
      { c: 'Quality', q: "Can I get a refund if the product doesn't meet standards?", a: 'Yes. You validate quality on receipt. If it does not comply, escrowed funds can be returned after review.' },
    ],
  },
  end: {
    title: 'Join the chain.',
    aTag: 'Agricultural actors', aTitle: 'Producer, buyer or carrier?', aText: 'Download the app for free and start selling, buying or delivering today.',
    bTag: 'Institutions & partners', bTitle: 'Cooperative, NGO, bank or institution?', bText: "Let's build fairer value chains together. Tell us about your projects, your producers and your needs.",
  },
  footer: {
    tagline: 'The trust infrastructure for African agriculture.', powered: 'Powered by SYNTHI-AI .Inc',
    cols: [
      { title: 'Solutions', links: [['Producers', 'Solutions.dc.html?p=producteurs'], ['Buyers', 'Solutions.dc.html?p=acheteurs'], ['Carriers', 'Solutions.dc.html?p=transporteurs'], ['Cooperatives', 'Solutions.dc.html?p=cooperatives'], ['AgroBank', 'Solutions.dc.html?p=agrobank'], ['Faroya', 'Solutions.dc.html?p=faroya']] },
      { title: 'Company', links: [['Our mission', '#reponse'], ['Ecosystem', '#ecosysteme'], ['FAQ', '#faq'], ['Partnerships', 'mailto:contact@farmstomarket.io']] },
      { title: 'Contact', links: [['contact@farmstomarket.io', 'mailto:contact@farmstomarket.io'], ['support@farmstomarket.io', 'mailto:support@farmstomarket.io'], ['+237 620 207 980', 'tel:+237620207980'], ['Privacy policy', '#']] },
    ],
  },
},
} as const;

export type HomeDict = (typeof T)["fr"];
