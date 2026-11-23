// AUTO-PORTED from solutions-content.js — bilingual Solutions content (6 pages).
import type { Lang } from "./home";

/* eslint-disable */
const S = ''; // was www.farmstomarket.io -> served locally from /public
const F = 'https://faroya.farmstomarket.io';
const PLAY = 'https://play.google.com/store/apps/details?id=com.i4u.synthi_ai.farms2market_mobile';
const PLAY_PRO = 'https://play.google.com/store/apps/details?id=com.i4u.synthi_ai.farms2markets_agents';

export const IMG = {
  producteurs: { hero: S + '/farmers/2.jpeg', heroFit: 'cover', panel: '#C1C5D0', story: ['/assets/m-onboard.png', '/assets/m-market.png', '/assets/m-bourse.png', '/assets/m-chat.png', '/assets/m-pay.png', S + '/farmers/cassava1.jpeg'] },
  acheteurs: { hero: '/assets/m-buyer.png', heroFit: 'cover', panel: '#C1C5D0', story: ['/assets/m-17.png', '/assets/m-market.png', '/assets/m-chat.png', '/assets/m-pay.png', '/assets/m-track.png', '/assets/m-qr.png'] },
  transporteurs: { hero: '/assets/m-driver.png', heroFit: 'cover', panel: '#C1C5D0', story: ['/assets/m-onboard.png', '/assets/m-track.png', '/assets/m-qr.png', '/assets/m-chat.png', '/assets/m-pay.png'] },
  cooperatives: { hero: S + '/farmers/farms2.jpeg', heroFit: 'cover', panel: '#C1C5D0', story: ['/assets/m-pro.png', '/assets/m-01.png', '/assets/m-track.png', '/assets/m-03.png', '/assets/m-pay.png'] },
  agrobank: { hero: '/assets/m-pay.png', heroFit: 'contain', panel: '#E6FDEB', story: [S + '/farmers/5.jpeg', '/assets/m-onboard.png', '/assets/m-pay.png', '/assets/m-03.png', '/assets/m-12.png', '/assets/m-bourse.png', '/assets/m-cta.png'], products: ['/assets/m-03.png', '/assets/m-pay.png', '/assets/m-12.png', '/assets/m-track.png', '/assets/m-23.png', '/assets/m-bourse.png'] },
  faroya: { hero: F + '/aerial-farmland.jpg', heroFit: 'cover', panel: '#040405', story: [F + '/market-produce.jpg', F + '/tropical-harvest.jpg', F + '/images/A2.png', F + '/green-farmland.jpg', F + '/images/A5.png'], products: [F + '/market-produce.jpg', F + '/tropical-harvest.jpg', F + '/green-farmland.jpg', F + '/aerial-farmland.jpg'] },
};

export const LINKS = {
  producteurs: [PLAY, 'Google Play'], acheteurs: [PLAY, 'Google Play'], transporteurs: [PLAY, 'Google Play'],
  cooperatives: [PLAY_PRO, 'Google Play'], agrobank: [PLAY, 'Google Play'], faroya: [F, 'faroya.farmstomarket.io'],
};

const fr = {
  ui: { langSwitch: 'EN', join: 'Rejoindre', home: 'Accueil', solutions: 'Solutions', chapter: 'Étape', story: 'Le récit', features: 'Fonctionnalités', cases: "Cas d'usage", situation: 'Situation', withF2M: 'Avec Farms to Market', connected: "Connecté à tout l'écosystème", faq: 'Questions fréquentes', more: 'Découvrir', illustrative: 'Récit illustratif', dev: 'En développement', contact: 'Parler à l\u2019équipe', tagline: "L'infrastructure de confiance de l'agriculture africaine.", powered: 'Propulsé par SYNTHI-AI .Inc' },
  pages: {
    producteurs: {
      nav: 'Producteurs', short: 'Vendre en direct, être payé à coup sûr.',
      hero: { eyebrow: 'Producteurs · Agriculteurs · Éleveurs', title: 'Votre récolte vaut plus que ce qu\u2019on vous en donne.', lead: "Publiez vos produits, fixez vos prix avec les cours du marché, vendez directement aux acheteurs et soyez payé sur votre portefeuille mobile dès la livraison confirmée.", a: 'Commencer gratuitement', b: 'Voir le récit' },
      need: { title: 'Le producteur travaille le plus et gagne le moins.', pains: [
        { t: 'Le prix est imposé', d: "Sans accès aux cours, on vend au prix fixé par le collecteur, souvent au moment où l'on a le plus besoin d'argent." },
        { t: "L'argent arrive tard, ou jamais", d: 'Paiements différés, impayés et arnaques fragilisent chaque saison.' },
        { t: 'La récolte attend', d: "Faute d'acheteur rapide et de transport, une partie des produits s'abîme avant d'être vendue." },
      ] },
      story: { title: 'Une saison de tomates, de la parcelle au paiement.', intro: 'Suivez une maraîchère de l\u2019Ouest du Cameroun pendant une saison avec Farms to Market.', steps: [
        { t: 'Elle crée son compte', d: 'Inscription avec son numéro de téléphone, vérification de son identité et de sa parcelle. Son profil producteur est actif en quelques minutes.' },
        { t: 'Elle publie sa récolte', d: 'Photos, quantité, date de disponibilité : son annonce est en ligne en moins de deux minutes, visible par les acheteurs de toute la région.' },
        { t: 'Elle choisit le bon prix', d: 'La Bourse agricole lui montre les cours en direct sur les marchés de référence. Elle fixe un prix juste, ni trop haut, ni bradé.' },
        { t: 'Elle négocie en direct', d: "Un restaurant de Douala et un grossiste font une offre. Elle échange avec eux dans la messagerie et accepte la meilleure." },
        { t: 'Elle est payée à la livraison', d: "L'acheteur a payé à la commande sous séquestre. Dès la remise confirmée par QR code, l'argent arrive sur son portefeuille mobile." },
        { t: 'Elle prépare la saison suivante', d: 'Son historique de ventes lui ouvre AgroCredit pour acheter de meilleures semences, et le calendrier de récolte l\u2019aide à planifier.' },
      ] },
      features: { title: 'Tout ce dont un producteur a besoin, dans sa poche.', items: [
        { t: 'Annonces en deux minutes', d: 'Photos, quantités, prix et disponibilité, publiés depuis le champ.' },
        { t: 'Cours du marché en direct', d: 'Les prix pratiqués sur les marchés de référence, mis à jour en continu.' },
        { t: 'Alertes de prix', d: 'Une notification quand le prix de vos cultures évolue.' },
        { t: 'Calendrier de récolte', d: 'Des recommandations basées sur les données du sol et la demande.' },
        { t: 'Paiement garanti', d: "Séquestre AgroBank : vous livrez, vous êtes payé." },
        { t: 'Messagerie acheteurs', d: 'Négociez et suivez chaque commande avec vos clients.' },
      ] },
      cases: { title: 'Comment les producteurs l\u2019utilisent.', items: [
        { who: 'Maraîchère', s: 'Elle vendait ses tomates bord champ au premier collecteur venu.', w: "Elle vend directement aux restaurants et commerçants de la ville, au prix qu'elle a fixé." },
        { who: 'Éleveur', s: "Il devait se déplacer au marché à bétail sans savoir s'il trouverait preneur.", w: 'Il publie ses têtes de bétail, reçoit des offres et organise la livraison depuis son téléphone.' },
        { who: 'Producteur de cacao', s: 'Il ne connaissait pas le cours du jour avant de vendre.', w: 'Il suit les cours en direct et reçoit une alerte quand le prix lui est favorable.' },
      ] },
      faq: [
        { q: "Combien coûte l'application ?", a: "Le téléchargement et l'inscription sont gratuits. Tout coût éventuel est affiché avant de valider une transaction." },
        { q: 'Que se passe-t-il si l\u2019acheteur ne paie pas ?', a: "L'acheteur paie à la commande. Les fonds sont bloqués sous séquestre et vous sont versés dès la livraison validée." },
        { q: 'Faut-il un compte bancaire ?', a: 'Non. Vous êtes payé sur votre portefeuille AgroBank ou votre compte mobile money.' },
      ],
      cta: { title: 'Vendez votre prochaine récolte au juste prix.', text: "Téléchargez Farm’sToMarket et publiez votre première annonce aujourd'hui." },
    },
    acheteurs: {
      nav: 'Acheteurs', short: 'Acheter à la source, en confiance.',
      hero: { eyebrow: 'Commerçants · Restaurants · Transformateurs · Exportateurs', title: 'Achetez à la source. Payez à la livraison.', lead: "Accédez directement à des producteurs vérifiés, comparez les prix et la qualité, commandez et ne libérez votre argent qu'une fois la marchandise reçue et conforme.", a: 'Commencer à acheter', b: 'Voir le récit' },
      need: { title: "Acheter à la ferme ne devrait pas être un pari.", pains: [
        { t: 'Une qualité incertaine', d: "On paie avant de voir la marchandise, sans garantie sur ce qui sera livré." },
        { t: 'Trop d\u2019intermédiaires', d: 'Chaque maillon ajoute sa marge, et le prix final s\u2019éloigne de la réalité du champ.' },
        { t: 'Un approvisionnement irrégulier', d: 'Trouver des volumes réguliers, au bon moment, demande un réseau difficile à construire.' },
      ] },
      story: { title: 'Un restaurant sécurise ses légumes pour la semaine.', intro: 'Suivez le gérant d\u2019un restaurant de Douala qui commande en direct auprès des producteurs.', steps: [
        { t: 'Il cherche ce dont il a besoin', d: 'Catalogue par produit, région et disponibilité. Il voit les profils, certifications et avis de chaque producteur.' },
        { t: 'Il compare et choisit', d: "Prix, qualité, distance : il sélectionne deux producteurs de tomates et de poivrons proches de la ville." },
        { t: 'Il négocie en direct', d: 'Dans la messagerie, il ajuste les quantités et la date de livraison avec chaque producteur.' },
        { t: 'Il paie en toute sécurité', d: "Il paie à la commande. L'argent reste sous séquestre AgroBank tant que rien n'est livré." },
        { t: 'Il suit sa livraison', d: "Un transporteur prend en charge la commande. Il suit le trajet en direct sur la carte." },
        { t: 'Il valide à réception', d: 'Il scanne le QR code de remise et vérifie la qualité. Le paiement n\u2019est libéré qu\u2019à ce moment.' },
      ] },
      features: { title: 'Un approvisionnement direct, transparent et protégé.', items: [
        { t: 'Catalogue de producteurs vérifiés', d: 'Profils, certifications, historique et avis.' },
        { t: 'Prix et qualité visibles', d: 'Photos, disponibilité et cours du marché avant de commander.' },
        { t: 'Négociation intégrée', d: 'Messagerie directe avec chaque producteur.' },
        { t: 'Paiement sous séquestre', d: 'Votre argent est protégé jusqu\u2019à la livraison conforme.' },
        { t: 'Suivi en direct', d: 'Position GPS et statut de chaque commande.' },
        { t: 'Remboursement si non conforme', d: 'Validation de la qualité à réception et arbitrage en cas de litige.' },
      ] },
      cases: { title: 'Comment les acheteurs l\u2019utilisent.', items: [
        { who: 'Restaurant', s: 'Il dépendait d\u2019un seul grossiste, aux prix et à la qualité variables.', w: 'Il commande chaque semaine en direct auprès de plusieurs producteurs proches.' },
        { who: 'Transformateur', s: "Il peinait à trouver des volumes réguliers de manioc.", w: "Il identifie les producteurs et coopératives de la filière et planifie ses achats sur la saison." },
        { who: 'Exportateur', s: "Il avait besoin de traçabilité pour ses clients étrangers.", w: 'Chaque lot est documenté de la parcelle à la remise : photos, GPS et validation qualité.' },
      ] },
      faq: [
        { q: 'Comment vérifier un producteur ?', a: 'Chaque profil est vérifié et affiche ses certifications, son historique de ventes et les avis des acheteurs.' },
        { q: 'Et si la marchandise n\u2019est pas conforme ?', a: "Vous validez la qualité à réception. En cas de non-conformité, les fonds sous séquestre peuvent vous être restitués après examen." },
        { q: 'Qui organise le transport ?', a: 'Un transporteur de la plateforme prend en charge la livraison. Les frais sont calculés et partagés de façon transparente avant la commande.' },
      ],
      cta: { title: 'Votre prochain fournisseur est déjà sur la plateforme.', text: "Téléchargez Farm’sToMarket et passez votre première commande en direct." },
    },
    transporteurs: {
      nav: 'Transporteurs', short: 'Des missions régulières, près de chez vous.',
      hero: { eyebrow: 'Transporteurs · Livreurs · Logisticiens', title: 'Chaque trajet compte. Ne roulez plus à vide.', lead: "Recevez des missions de livraison près de chez vous, planifiez vos itinéraires, livrez avec un suivi GPS partagé et soyez payé à la remise confirmée.", a: 'Devenir transporteur', b: 'Voir le récit' },
      need: { title: 'La logistique agricole repose sur des transporteurs invisibles.', pains: [
        { t: 'Des missions irrégulières', d: "Le travail dépend du bouche-à-oreille et des contacts, avec beaucoup de trajets à vide." },
        { t: 'Des litiges sans preuve', d: 'En cas de marchandise abîmée, c\u2019est souvent la parole du transporteur contre celle du client.' },
        { t: 'Un paiement incertain', d: 'Être payé à temps, et en entier, n\u2019est jamais garanti.' },
      ] },
      story: { title: 'Une journée de livraisons, de la ferme à la ville.', intro: 'Suivez un transporteur de la région du Littoral pendant une journée de missions.', steps: [
        { t: 'Il reçoit une mission', d: "Une commande de légumes attend d'être enlevée à quelques kilomètres. Distance, volume et rémunération sont affichés avant d'accepter." },
        { t: 'Il planifie son itinéraire', d: "L'application regroupe les enlèvements et propose le trajet le plus efficace." },
        { t: 'Il documente l\u2019enlèvement', d: "Il photographie la marchandise chez le producteur. L'état, l'heure et la position sont enregistrés." },
        { t: 'Il livre, suivi en direct', d: 'Le producteur et l\u2019acheteur suivent le trajet sur la carte. La messagerie évite les appels.' },
        { t: 'Il est payé à la remise', d: "L'acheteur scanne le QR code de remise. La mission est validée et le paiement suit." },
      ] },
      features: { title: 'Les outils d\u2019une entreprise de logistique, sur votre téléphone.', items: [
        { t: 'Missions géolocalisées', d: 'Les demandes de livraison autour de vous, en temps réel.' },
        { t: 'Itinéraires optimisés', d: 'Plusieurs enlèvements regroupés sur un même trajet.' },
        { t: 'Preuves photo et GPS', d: 'État de la marchandise documenté à chaque étape.' },
        { t: 'Remise par QR code', d: 'Une validation incontestable à la livraison.' },
        { t: 'Frais partagés et transparents', d: 'Calculés selon la distance et le volume, connus avant d\u2019accepter.' },
        { t: 'Messagerie intégrée', d: 'Échanges directs avec le producteur et l\u2019acheteur.' },
      ] },
      cases: { title: 'Comment les transporteurs l\u2019utilisent.', items: [
        { who: 'Moto-taxi', s: 'Il attendait les clients au carrefour.', w: 'Il effectue des livraisons courtes entre les fermes périurbaines et les marchés.' },
        { who: 'Camionneur', s: "Il revenait souvent à vide après une livraison en ville.", w: 'Il accepte des missions de retour et regroupe plusieurs enlèvements sur un trajet.' },
        { who: 'PME logistique', s: 'Elle gérait ses chauffeurs par téléphone.', w: 'Elle suit toute sa flotte et ses missions dans Farm\u2019sToMarket Pro.' },
      ] },
      faq: [
        { q: 'Comment devenir transporteur ?', a: "Créez votre compte, faites vérifier votre identité et votre véhicule, puis activez la réception de missions." },
        { q: 'Qui est responsable en cas de dommage ?', a: "Les photos à l'enlèvement et à la remise font foi. En cas de litige, notre équipe arbitre sur la base de ces preuves." },
        { q: 'Quand suis-je payé ?', a: 'Dès que la remise est confirmée par QR code.' },
      ],
      cta: { title: 'Votre prochaine mission est à quelques kilomètres.', text: "Téléchargez Farm’sToMarket et activez votre profil transporteur." },
    },
    cooperatives: {
      nav: 'Coopératives', short: 'Piloter une filière entière avec Pro.',
      hero: { eyebrow: "Coopératives · Distributeurs · Contrôleurs qualité", title: 'Pilotez toute votre filière, du producteur au client.', lead: "Farm’sToMarket Pro réunit vos producteurs, vos commandes, vos livraisons et vos finances dans un seul outil, avec des preuves photo et GPS à chaque étape.", a: 'Télécharger Pro', b: 'Voir le récit' },
      need: { title: 'Gérer une coopérative sur papier, c\u2019est perdre de la valeur à chaque étape.', pains: [
        { t: 'Des données éparpillées', d: 'Membres, parcelles, volumes et ventes vivent dans des cahiers et des messages.' },
        { t: 'Peu de traçabilité', d: "Difficile de prouver l'origine et la qualité d'un lot aux acheteurs et exportateurs." },
        { t: 'Des paiements lents', d: 'Les acheteurs paient tard, et redistribuer aux membres prend du temps.' },
      ] },
      story: { title: 'Une coopérative structure sa filière en une saison.', intro: 'Suivez la responsable d\u2019une coopérative d\u2019huile de palme qui passe au numérique.', steps: [
        { t: 'Elle enregistre ses membres', d: 'Chaque producteur, ses parcelles cartographiées par GPS et ses cultures sont réunis dans un seul registre.' },
        { t: 'Elle centralise les commandes', d: "Les commandes des acheteurs arrivent dans Pro. Elle répartit les volumes entre les membres." },
        { t: 'Elle contrôle la qualité', d: 'Photos et géolocalisation à chaque collecte. Chaque lot est traçable jusqu\u2019à la parcelle.' },
        { t: 'Elle suit ses performances', d: "Chiffre d'affaires, volumes, activité par membre : les tableaux de bord sont à jour en temps réel." },
        { t: 'Elle redistribue rapidement', d: 'Les paiements arrivent via AgroBank et sont reversés aux membres sur leurs portefeuilles mobiles.' },
      ] },
      features: { title: "Un véritable outil de gestion de filière.", items: [
        { t: 'Registre des producteurs', d: 'Membres, cultures, cheptels et parcelles cartographiées.' },
        { t: 'Commandes vérifiées', d: 'Photo et géolocalisation à chaque étape, en temps réel.' },
        { t: 'Contrôle qualité', d: 'Validation des lots par les contrôleurs, avec historique.' },
        { t: 'Tableaux de bord', d: "Chiffre d'affaires, activité et croissance en un coup d'œil." },
        { t: 'Paiements aux membres', d: 'Redistribution via AgroBank et mobile money.' },
        { t: 'Mobile et terrain', d: 'Accès complet avec cartes, en français et en anglais.' },
      ] },
      cases: { title: 'Comment les organisations l\u2019utilisent.', items: [
        { who: 'Coopérative', s: 'Les registres étaient tenus à la main, et les ventes négociées une à une.', w: 'Elle vend des volumes agrégés et suit chaque membre depuis un tableau de bord.' },
        { who: 'Distributeur', s: "Il ne savait pas d'où venaient exactement ses produits.", w: 'Il trace chaque lot jusqu\u2019à la parcelle et le prouve à ses clients.' },
        { who: 'Contrôleur qualité', s: 'Les inspections étaient consignées sur papier.', w: 'Il valide les lots sur le terrain, avec photos et position, synchronisés en temps réel.' },
      ] },
      faq: [
        { q: "Quelle différence avec l'application Farm’sToMarket ?", a: "Farm’sToMarket est le marché pour vendre, acheter et livrer. Pro sert aux organisations qui gèrent un réseau de producteurs, des commandes et des équipes." },
        { q: 'Mes membres doivent-ils avoir un smartphone ?', a: 'Non. La coopérative peut enregistrer et gérer ses membres pour eux, et leur reverser les paiements sur mobile money.' },
        { q: 'Les données sont-elles sécurisées ?', a: 'Oui. Les données sont chiffrées et chaque accès est lié à un rôle (gestionnaire, contrôleur, transporteur).' },
      ],
      cta: { title: 'Donnez à votre filière les outils qu\u2019elle mérite.', text: "Téléchargez Farm’sToMarket Pro ou parlez à notre équipe pour un déploiement accompagné." },
    },
    agrobank: {
      nav: 'AgroBank', short: 'La banque de chaque maillon de la chaîne.',
      hero: { eyebrow: 'AgroBank · Banque numérique agricole', title: 'La banque de chaque maillon de la chaîne agricole.', lead: "Agriculture, élevage, pêche, transformation, transport, export : AgroBank réunit tous les services d'une banque complète, nativement connectés à l'écosystème Farms to Market. Sans passage en agence.", a: 'Ouvrir un compte', b: 'Découvrir les produits' },
      need: { title: "L'agriculture fait vivre le continent. Les banques l'ignorent encore.", pains: [
        { t: 'Pas de compte, pas d\u2019historique', d: "Sans compte bancaire ni historique, impossible de prouver sa solvabilité." },
        { t: 'Un crédit inadapté', d: "Les échéances bancaires ne suivent pas le rythme des récoltes et des saisons." },
        { t: 'Aucune protection', d: "Une sécheresse, une maladie ou une inondation peut effacer des années de travail." },
      ] },
      suite: { title: 'Une banque complète, pensée pour l\u2019agro-pastoral.', lead: 'Comptes, paiements, crédit, assurance, épargne et marchés : chaque service d\u2019une banque traditionnelle, avec la simplicité d\u2019une néobanque.', products: [
        { name: 'Comptes & cartes', t: 'Un vrai compte bancaire, sans agence.', d: 'Comptes courants particuliers et professionnels, carte prépayée physique ou virtuelle, multi-devises.', list: ['Comptes particuliers et professionnels', 'Carte prépayée physique ou virtuelle', 'Virements nationaux et internationaux', 'Multi-devises'] },
        { name: 'Paiements', t: "L'argent circule instantanément, même hors ligne.", d: "Du champ au transformateur, de l'éleveur au boucher : paiements instantanés à chaque étape de la chaîne.", list: ['Transferts instantanés entre utilisateurs', 'Paiement QR et NFC, y compris hors ligne', 'Interopérabilité mobile money', 'Règlement automatique de chaque transaction'] },
        { name: 'AgroCredit', t: 'Un crédit qui suit votre cycle de production.', d: "Des échéances calées sur vos flux réels, pas sur un calendrier bancaire. Un scoring basé sur votre activité, pas sur des garanties.", list: ['Du micro-crédit au financement de PME', "Scoring sur l'historique de production et de ventes", 'Produits dédiés élevage et aquaculture', "Financement de la chaîne d'approvisionnement"] },
        { name: 'AgroInsure', t: 'Assuré avant le premier coup de pioche.', d: "Cultures, bétail et aquaculture couverts. Détection par satellite et capteurs, indemnisation automatique.", list: ['Assurance cultures, élevage et aquaculture', 'Indexation satellite et IoT', 'Indemnisation automatique', 'Sans déclaration papier'] },
        { name: 'AgroSave', t: "L'épargne, seul ou avec sa coopérative.", d: "Mettez de côté entre deux saisons, constituez une épargne collective avec votre coopérative.", list: ['Épargne rémunérée', 'Épargne collective de coopérative', 'Objectifs d\u2019épargne par saison', 'Retraits sur mobile money'] },
        { name: 'Séquestre & marchés', t: 'Chaque transaction protégée.', d: "Séquestre automatique et contrats intelligents sur chaque échange, et accès à la bourse agro-pastorale Faroya.", list: ['Séquestre sur chaque transaction', 'Contrats intelligents', 'Accès à la bourse Faroya', 'Documentation export et financement du commerce'] },
      ] },
      trust: { title: 'La sécurité d\u2019une banque, la simplicité d\u2019un téléphone.', items: [
        { t: 'Conforme CEMAC', d: 'Des services financiers alignés sur la réglementation régionale.' },
        { t: 'Vérification KYC · KYA', d: "Identité, activité et exploitation vérifiées une seule fois." },
        { t: 'Chiffrement bancaire', d: 'Protocoles de chiffrement de niveau bancaire et protection des données.' },
        { t: 'Réseau d\u2019agents', d: "Dépôts et retraits via mobile money et un réseau d'agents en zone rurale." },
      ] },
      story: { title: 'Une année avec AgroBank.', intro: "Suivez Fatima, responsable d'une coopérative d'huile de palme au Cameroun, pendant sa première année financière complète.", steps: [
        { t: 'Le point de départ', d: "Ses acheteurs paient en espèces, avec des semaines de retard. Pas de compte, pas d'historique de crédit, pas d'assurance." },
        { t: 'Elle ouvre son compte', d: "Depuis Farm’sToMarket, sa vérification est déjà faite. Son compte AgroBank s'active automatiquement." },
        { t: 'Sa première vente est payée', d: "Le paiement de l'acheteur passe par le séquestre et arrive sur son compte dès la livraison validée." },
        { t: 'AgroCredit se débloque', d: "Son historique de ventes devient son dossier de crédit. Elle finance de meilleures semences pour la coopérative." },
        { t: 'Sa récolte est assurée', d: "AgroInsure couvre ses parcelles. En cas d'aléa climatique, l'indemnisation est déclenchée automatiquement." },
        { t: 'Elle vend sur les marchés', d: 'Via Faroya, elle suit les cours et vend une partie de sa production au meilleur moment.' },
        { t: 'Une nouvelle saison commence', d: "La coopérative épargne ensemble avec AgroSave et prépare la saison suivante, sereinement." },
      ] },
      features: { title: 'Activée automatiquement avec votre profil.', items: [
        { t: 'Aucune inscription séparée', d: "Votre vérification sur Farm’sToMarket ou Pro suffit." },
        { t: 'Sans passage en agence', d: "Tout se fait depuis le téléphone." },
        { t: 'Portefeuille immédiat', d: 'Recevez vos paiements dès la première vente.' },
        { t: 'Scoring automatique', d: 'Votre activité construit votre accès au crédit.' },
        { t: 'Assurance intégrée', d: 'Souscrite et suivie dans la même application.' },
        { t: 'Comptes professionnels', d: 'Pour les coopératives, PME agricoles et transformateurs.' },
      ] },
      cases: { title: 'Pour chaque maillon de la chaîne.', items: [
        { who: 'Producteur', s: 'Payé en espèces, sans historique ni épargne.', w: 'Payé sur son compte, il construit un historique qui lui ouvre le crédit.' },
        { who: 'Coopérative', s: 'Elle attendait des semaines avant de pouvoir payer ses membres.', w: 'Elle reçoit les fonds à la livraison et les redistribue instantanément.' },
        { who: 'Transformateur', s: "Il manquait de trésorerie pour acheter en pleine saison.", w: "Il finance ses achats grâce au financement de la chaîne d'approvisionnement." },
      ] },
      faq: [
        { q: 'AgroBank remplace-t-il mon mobile money ?', a: "Non, il s'y connecte. Vous pouvez déposer, retirer et payer via les principaux services de mobile money." },
        { q: 'Comment mon compte est-il activé ?', a: "Une fois votre profil vérifié (KYC, KYA et vérification de l'exploitation) sur Farm’sToMarket ou Pro, toute la suite AgroBank s'active." },
        { q: 'Comment est calculé mon accès au crédit ?', a: "À partir de votre historique de production et de ventes sur la plateforme, plutôt que sur des garanties matérielles." },
      ],
      cta: { title: 'La banque que l\u2019agriculture africaine mérite.', text: "Activez AgroBank depuis Farm’sToMarket ou Farm’sToMarket Pro, ou planifiez un échange avec notre équipe." },
    },
    faroya: {
      nav: 'Faroya', short: 'La bourse des ressources agro-pastorales.',
      hero: { eyebrow: 'Faroya · Bourse agro-pastorale', title: 'Les ressources agricoles ont enfin leur bourse.', lead: "Achetez, vendez et échangez céréales, fruits, légumes et bétail en temps réel. Cours en direct des marchés de référence, vérification qualité par IA et fonds protégés par séquestre.", a: 'Découvrir Faroya', b: 'Voir le récit' },
      need: { title: "Un prix juste commence par un prix connu.", pains: [
        { t: 'Des prix dispersés', d: 'Chaque marché a son prix, et personne ne les voit tous en même temps.' },
        { t: 'Une qualité invérifiable', d: 'Acheter à distance sans pouvoir juger la qualité freine les échanges.' },
        { t: 'Aucun outil de couverture', d: "Les producteurs subissent les variations de prix sans pouvoir s'en protéger." },
      ] },
      markets: { title: 'Les marchés, en direct.', note: 'Aperçu de l\u2019interface. Les cours affichés dans Faroya sont mis à jour en continu.', tickers: [
        { c: 'CAC', n: 'Cacao premium', up: true }, { c: 'CAF', n: 'Café robusta', up: true }, { c: 'MAS', n: 'Maïs grain', up: true }, { c: 'TOM', n: 'Tomate fraîche', up: false }, { c: 'RIZ', n: 'Riz paddy', up: true }, { c: 'MAN', n: 'Manioc frais', up: true }, { c: 'BOV', n: 'Bœuf vif', up: false }, { c: 'PAM', n: 'Huile de palme', up: true },
      ] },
      suite: { title: 'Les outils d\u2019une bourse, adaptés à l\u2019agriculture.', lead: 'Faroya apporte aux producteurs, coopératives et acheteurs les mécanismes des marchés financiers, avec les garanties de l\u2019écosystème Farms to Market.', products: [
        { name: 'Spot', t: 'Acheter et vendre au prix du marché.', d: 'Des transactions immédiates sur des centaines de ressources agro-pastorales.', list: ['Cours en temps réel', 'Ordres au marché et à cours limité', 'Règlement par séquestre'] },
        { name: 'P2P producteurs', t: 'Échanger directement avec les producteurs.', d: "Des échanges de gré à gré entre producteurs, coopératives et acheteurs vérifiés.", list: ['Profils vérifiés', 'Négociation directe', 'Fonds protégés'] },
        { name: 'Contrats à terme', t: 'Fixer son prix avant la récolte.', d: "Sécuriser un prix de vente ou d'achat pour une livraison future.", list: ['Visibilité sur la saison', 'Protection contre les variations', 'Contrats intelligents'] },
        { name: 'Outils avancés', t: "Optimiser ses ventes avec l'IA.", d: 'Ordres stop-loss, analyses de tendance et alertes pour vendre au meilleur moment.', list: ['Stop-loss et ordres limités', 'Analyses IA', 'Alertes de prix'] },
      ] },
      story: { title: 'Un sac de cacao, de la parcelle à la bourse.', intro: 'Suivez un producteur de cacao qui vend sa récolte sur Faroya.', steps: [
        { t: 'Il suit les cours', d: 'Il compare les prix du cacao sur les marchés de référence, en direct.' },
        { t: 'Il fait vérifier sa qualité', d: "Il photographie ses fèves. L'IA analyse maturité, défauts et calibre et attribue un score de qualité." },
        { t: 'Il place son ordre', d: 'Il fixe un prix limite. Son ordre est exécuté dès que le marché l\u2019atteint.' },
        { t: 'Il trace son lot', d: 'Sa parcelle est cartographiée par GPS. L\u2019acheteur voit l\u2019origine exacte du lot.' },
        { t: 'Il est payé en sécurité', d: "Les fonds de l'acheteur sont bloqués sous séquestre et libérés à la livraison confirmée." },
      ] },
      features: { title: 'La confiance, intégrée à chaque échange.', items: [
        { t: 'Vérification qualité par IA', d: 'Maturité, taux de défauts et calibre analysés à partir de photos.' },
        { t: 'Séquestre agricole', d: 'Fonds protégés jusqu\u2019à la confirmation de qualité et de livraison.' },
        { t: 'Cartographie GPS', d: 'Traçabilité complète, de la parcelle à l\u2019achat.' },
        { t: 'Cours en temps réel', d: 'Les prix des principaux marchés du Cameroun.' },
        { t: 'Logistique intégrée', d: 'Livraison avec suivi en temps réel des commandes.' },
        { t: 'Multi-paiement', d: 'Mobile money, virement et portefeuille AgroBank.' },
      ] },
      cases: { title: 'Comment Faroya est utilisé.', items: [
        { who: 'Producteur', s: 'Il vendait sans connaître le prix des autres marchés.', w: 'Il compare les marchés et vend là où le prix est le plus juste.' },
        { who: 'Coopérative', s: 'Elle subissait la chute des prix en pleine récolte.', w: 'Elle fixe une partie de ses prix à l\u2019avance avec des contrats à terme.' },
        { who: 'Acheteur', s: "Il hésitait à acheter à distance sans voir la marchandise.", w: "Il achète des lots notés par l'IA, tracés par GPS et payés sous séquestre." },
      ] },
      faq: [
        { q: "Qu'est-ce qu'une bourse agro-pastorale ?", a: 'Une place de marché numérique où producteurs, coopératives et acheteurs échangent des ressources agricoles et pastorales à des prix transparents.' },
        { q: 'Faut-il un compte bancaire ?', a: 'Non. Vous pouvez utiliser le mobile money ou votre portefeuille AgroBank.' },
        { q: 'Quand Faroya sera-t-il disponible ?', a: "Faroya est en cours de développement. Laissez-nous votre contact pour être informé du lancement." },
      ],
      cta: { title: 'Le marché agricole entre dans une nouvelle ère.', text: 'Découvrez la version en développement de Faroya ou contactez-nous pour en savoir plus.' },
    },
  },
};

const en = {
  ui: { langSwitch: 'FR', join: 'Join', home: 'Home', solutions: 'Solutions', chapter: 'Step', story: 'The story', features: 'Features', cases: 'Use cases', situation: 'Before', withF2M: 'With Farms to Market', connected: 'Connected to the whole ecosystem', faq: 'Frequently asked questions', more: 'Discover', illustrative: 'Illustrative story', dev: 'In development', contact: 'Talk to the team', tagline: 'The trust infrastructure for African agriculture.', powered: 'Powered by SYNTHI-AI .Inc' },
  pages: {
    producteurs: {
      nav: 'Producers', short: 'Sell directly, get paid for sure.',
      hero: { eyebrow: 'Producers · Farmers · Breeders', title: 'Your harvest is worth more than you are paid for it.', lead: 'List your produce, set prices with live market data, sell directly to buyers and get paid to your mobile wallet as soon as delivery is confirmed.', a: 'Start for free', b: 'See the story' },
      need: { title: 'Farmers work the hardest and earn the least.', pains: [
        { t: 'The price is imposed', d: 'Without market data, you sell at the collector\u2019s price, often when you need cash the most.' },
        { t: 'Money arrives late, or never', d: 'Delayed payments, defaults and scams weaken every season.' },
        { t: 'The harvest waits', d: 'Without quick buyers and transport, part of the produce spoils before it is sold.' },
      ] },
      story: { title: 'A tomato season, from plot to payment.', intro: 'Follow a market gardener in West Cameroon through a season with Farms to Market.', steps: [
        { t: 'She creates her account', d: 'Sign-up with her phone number, identity and plot verification. Her producer profile is live in minutes.' },
        { t: 'She lists her harvest', d: 'Photos, quantity, availability date: her listing is online in under two minutes, visible to buyers across the region.' },
        { t: 'She picks the right price', d: 'The commodity exchange shows live prices on reference markets. She sets a fair price.' },
        { t: 'She negotiates directly', d: 'A Douala restaurant and a wholesaler make offers. She chats with both and accepts the best.' },
        { t: 'She is paid on delivery', d: 'The buyer paid into escrow at order. Once handover is confirmed by QR code, the money lands in her mobile wallet.' },
        { t: 'She prepares next season', d: 'Her sales history unlocks AgroCredit for better seeds, and the harvest calendar helps her plan.' },
      ] },
      features: { title: 'Everything a producer needs, in their pocket.', items: [
        { t: 'Listings in two minutes', d: 'Photos, quantities, prices and availability, published from the field.' },
        { t: 'Live market prices', d: 'Prices from reference markets, updated continuously.' },
        { t: 'Price alerts', d: 'A notification when your crop prices move.' },
        { t: 'Harvest calendar', d: 'Recommendations based on soil data and demand.' },
        { t: 'Guaranteed payment', d: 'AgroBank escrow: you deliver, you get paid.' },
        { t: 'Buyer messaging', d: 'Negotiate and follow every order with your customers.' },
      ] },
      cases: { title: 'How producers use it.', items: [
        { who: 'Market gardener', s: 'She sold tomatoes at the farm gate to the first collector.', w: 'She sells directly to city restaurants and retailers, at her own price.' },
        { who: 'Breeder', s: 'He travelled to the cattle market not knowing if he would find a buyer.', w: 'He lists his livestock, receives offers and organises delivery from his phone.' },
        { who: 'Cocoa farmer', s: 'He did not know the daily price before selling.', w: 'He follows live prices and gets an alert when the price is right.' },
      ] },
      faq: [
        { q: 'How much does the app cost?', a: 'Download and sign-up are free. Any cost is shown before you confirm a transaction.' },
        { q: 'What if the buyer does not pay?', a: 'The buyer pays at order. Funds are locked in escrow and released to you on validated delivery.' },
        { q: 'Do I need a bank account?', a: 'No. You are paid to your AgroBank wallet or mobile money account.' },
      ],
      cta: { title: 'Sell your next harvest at a fair price.', text: "Download Farm’sToMarket and publish your first listing today." },
    },
    acheteurs: {
      nav: 'Buyers', short: 'Buy at the source, with confidence.',
      hero: { eyebrow: 'Retailers · Restaurants · Processors · Exporters', title: 'Buy at the source. Pay on delivery.', lead: 'Reach verified producers directly, compare price and quality, order, and release your money only once goods are received and compliant.', a: 'Start buying', b: 'See the story' },
      need: { title: 'Buying from the farm should not be a gamble.', pains: [
        { t: 'Uncertain quality', d: 'You pay before seeing the goods, with no guarantee on what arrives.' },
        { t: 'Too many middlemen', d: 'Each link adds a margin, and the final price drifts far from the field.' },
        { t: 'Irregular supply', d: 'Finding regular volumes at the right time requires a network that is hard to build.' },
      ] },
      story: { title: 'A restaurant secures its vegetables for the week.', intro: 'Follow a Douala restaurant manager ordering directly from producers.', steps: [
        { t: 'He searches', d: 'Catalogue by product, region and availability, with profiles, certifications and reviews.' },
        { t: 'He compares and chooses', d: 'Price, quality, distance: he picks two tomato and pepper producers near the city.' },
        { t: 'He negotiates directly', d: 'In chat, he adjusts quantities and delivery date with each producer.' },
        { t: 'He pays safely', d: 'He pays at order. The money stays in AgroBank escrow until delivery.' },
        { t: 'He tracks delivery', d: 'A carrier picks up the order. He follows the trip live on the map.' },
        { t: 'He validates on receipt', d: 'He scans the handover QR code and checks quality. Only then is payment released.' },
      ] },
      features: { title: 'Direct, transparent and protected sourcing.', items: [
        { t: 'Verified producer catalogue', d: 'Profiles, certifications, history and reviews.' },
        { t: 'Visible price and quality', d: 'Photos, availability and market prices before ordering.' },
        { t: 'Built-in negotiation', d: 'Direct chat with every producer.' },
        { t: 'Escrow payment', d: 'Your money is protected until compliant delivery.' },
        { t: 'Live tracking', d: 'GPS position and status for every order.' },
        { t: 'Refund if non-compliant', d: 'Quality check on receipt and dispute resolution.' },
      ] },
      cases: { title: 'How buyers use it.', items: [
        { who: 'Restaurant', s: 'It relied on one wholesaler with variable prices and quality.', w: 'It orders weekly from several nearby producers.' },
        { who: 'Processor', s: 'It struggled to find regular cassava volumes.', w: 'It identifies producers and cooperatives and plans purchases over the season.' },
        { who: 'Exporter', s: 'It needed traceability for foreign clients.', w: 'Each lot is documented from plot to handover: photos, GPS and quality check.' },
      ] },
      faq: [
        { q: 'How do I verify a producer?', a: 'Every profile is verified and shows certifications, sales history and buyer reviews.' },
        { q: 'What if goods are not compliant?', a: 'You validate quality on receipt. If not compliant, escrowed funds can be returned after review.' },
        { q: 'Who organises transport?', a: 'A platform carrier handles delivery. Costs are calculated and shared transparently before ordering.' },
      ],
      cta: { title: 'Your next supplier is already on the platform.', text: "Download Farm’sToMarket and place your first direct order." },
    },
    transporteurs: {
      nav: 'Carriers', short: 'Regular missions, close to you.',
      hero: { eyebrow: 'Carriers · Drivers · Logistics', title: 'Every trip counts. Stop driving empty.', lead: 'Receive nearby delivery missions, plan your routes, deliver with shared GPS tracking and get paid on confirmed handover.', a: 'Become a carrier', b: 'See the story' },
      need: { title: 'Agricultural logistics relies on invisible carriers.', pains: [
        { t: 'Irregular missions', d: 'Work depends on word of mouth, with many empty trips.' },
        { t: 'Disputes without proof', d: 'When goods are damaged, it is the carrier\u2019s word against the client\u2019s.' },
        { t: 'Uncertain payment', d: 'Being paid on time, and in full, is never guaranteed.' },
      ] },
      story: { title: 'A day of deliveries, from farm to city.', intro: 'Follow a carrier in the Littoral region through a day of missions.', steps: [
        { t: 'He receives a mission', d: 'A vegetable order is waiting a few kilometres away. Distance, volume and pay are shown before accepting.' },
        { t: 'He plans his route', d: 'The app groups pickups and suggests the most efficient trip.' },
        { t: 'He documents pickup', d: 'He photographs the goods at the farm. Condition, time and position are recorded.' },
        { t: 'He delivers, tracked live', d: 'Producer and buyer follow the trip on the map. Chat replaces phone calls.' },
        { t: 'He is paid on handover', d: 'The buyer scans the handover QR code. The mission is validated and payment follows.' },
      ] },
      features: { title: 'A logistics company\u2019s tools, on your phone.', items: [
        { t: 'Geolocated missions', d: 'Delivery requests around you, in real time.' },
        { t: 'Optimised routes', d: 'Several pickups grouped on one trip.' },
        { t: 'Photo and GPS proof', d: 'Goods condition documented at every step.' },
        { t: 'QR handover', d: 'Indisputable validation on delivery.' },
        { t: 'Shared, transparent costs', d: 'Based on distance and volume, known before accepting.' },
        { t: 'Built-in chat', d: 'Direct contact with producer and buyer.' },
      ] },
      cases: { title: 'How carriers use it.', items: [
        { who: 'Moto-taxi', s: 'He waited for customers at the crossroads.', w: 'He makes short deliveries between peri-urban farms and markets.' },
        { who: 'Truck driver', s: 'He often drove back empty after city deliveries.', w: 'He accepts return missions and groups several pickups per trip.' },
        { who: 'Logistics SME', s: 'It managed drivers by phone.', w: "It tracks its whole fleet and missions in Farm’sToMarket Pro." },
      ] },
      faq: [
        { q: 'How do I become a carrier?', a: 'Create your account, verify your identity and vehicle, then enable missions.' },
        { q: 'Who is liable for damage?', a: 'Photos at pickup and handover are the reference. In a dispute, our team decides based on this evidence.' },
        { q: 'When am I paid?', a: 'As soon as handover is confirmed by QR code.' },
      ],
      cta: { title: 'Your next mission is a few kilometres away.', text: "Download Farm’sToMarket and activate your carrier profile." },
    },
    cooperatives: {
      nav: 'Cooperatives', short: 'Run an entire value chain with Pro.',
      hero: { eyebrow: 'Cooperatives · Distributors · Quality inspectors', title: 'Run your whole value chain, from producer to customer.', lead: "Farm’sToMarket Pro brings your producers, orders, deliveries and finances into one tool, with photo and GPS proof at every step.", a: 'Download Pro', b: 'See the story' },
      need: { title: 'Running a cooperative on paper loses value at every step.', pains: [
        { t: 'Scattered data', d: 'Members, plots, volumes and sales live in notebooks and messages.' },
        { t: 'Little traceability', d: 'Hard to prove a lot\u2019s origin and quality to buyers and exporters.' },
        { t: 'Slow payments', d: 'Buyers pay late, and redistributing to members takes time.' },
      ] },
      story: { title: 'A cooperative structures its chain in one season.', intro: 'Follow the leader of a palm oil cooperative going digital.', steps: [
        { t: 'She registers members', d: 'Each producer, their GPS-mapped plots and crops, in one registry.' },
        { t: 'She centralises orders', d: 'Buyer orders arrive in Pro. She splits volumes between members.' },
        { t: 'She controls quality', d: 'Photo and geolocation at every collection. Each lot is traceable to its plot.' },
        { t: 'She tracks performance', d: 'Revenue, volumes and member activity: dashboards update in real time.' },
        { t: 'She pays members fast', d: 'Payments arrive via AgroBank and are passed on to members\u2019 mobile wallets.' },
      ] },
      features: { title: 'A true value-chain management tool.', items: [
        { t: 'Producer registry', d: 'Members, crops, livestock and mapped plots.' },
        { t: 'Verified orders', d: 'Photo and geolocation at every step, in real time.' },
        { t: 'Quality control', d: 'Lot validation by inspectors, with history.' },
        { t: 'Dashboards', d: 'Revenue, activity and growth at a glance.' },
        { t: 'Member payouts', d: 'Redistribution via AgroBank and mobile money.' },
        { t: 'Mobile and field-ready', d: 'Full access with maps, in French and English.' },
      ] },
      cases: { title: 'How organisations use it.', items: [
        { who: 'Cooperative', s: 'Registries were handwritten and sales negotiated one by one.', w: 'It sells aggregated volumes and follows every member from a dashboard.' },
        { who: 'Distributor', s: 'It did not know exactly where products came from.', w: 'It traces each lot to its plot and proves it to customers.' },
        { who: 'Quality inspector', s: 'Inspections were recorded on paper.', w: 'He validates lots in the field, with photos and position, synced in real time.' },
      ] },
      faq: [
        { q: "How is it different from the Farm’sToMarket app?", a: "Farm’sToMarket is the marketplace to sell, buy and deliver. Pro is for organisations managing producer networks, orders and teams." },
        { q: 'Do members need a smartphone?', a: 'No. The cooperative can register and manage members, and pay them via mobile money.' },
        { q: 'Is data secure?', a: 'Yes. Data is encrypted and every access is tied to a role (manager, inspector, carrier).' },
      ],
      cta: { title: 'Give your value chain the tools it deserves.', text: "Download Farm’sToMarket Pro or talk to our team about a guided rollout." },
    },
    agrobank: {
      nav: 'AgroBank', short: 'The bank for every link in the chain.',
      hero: { eyebrow: 'AgroBank · Digital agricultural bank', title: 'The bank for every link in the agri-chain.', lead: 'Farming, livestock, fishing, processing, transport, export: AgroBank brings every service of a full bank, natively connected to the Farm’sToMarket ecosystem. No branch visit required.', a: 'Open an account', b: 'Explore products' },
      need: { title: 'Agriculture feeds the continent. Banks still overlook it.', pains: [
        { t: 'No account, no history', d: 'Without a bank account or history, creditworthiness cannot be proven.' },
        { t: 'Unsuitable credit', d: 'Bank schedules do not follow harvests and seasons.' },
        { t: 'No protection', d: 'A drought, disease or flood can erase years of work.' },
      ] },
      suite: { title: 'A complete bank, built for agro-pastoral.', lead: 'Accounts, payments, credit, insurance, savings and markets: every service of a traditional bank, with the simplicity of a neobank.', products: [
        { name: 'Accounts & cards', t: 'A real bank account, no branch.', d: 'Personal and business current accounts, physical or virtual prepaid card, multi-currency.', list: ['Personal and business accounts', 'Physical or virtual prepaid card', 'Domestic and international transfers', 'Multi-currency'] },
        { name: 'Payments', t: 'Money moves instantly, even offline.', d: 'From field to processor, breeder to butcher: instant payments at every step of the chain.', list: ['Instant peer-to-peer transfers', 'QR and NFC payments, including offline', 'Mobile money interoperability', 'Automatic settlement of every trade'] },
        { name: 'AgroCredit', t: 'Credit that follows your production cycle.', d: 'Schedules matched to your real cash flow. Scoring based on your activity, not collateral.', list: ['From micro-loans to SME financing', 'Scored on production and sales history', 'Livestock and aquaculture products', 'Supply chain financing'] },
        { name: 'AgroInsure', t: 'Insured before the first dig.', d: 'Crops, livestock and aquaculture covered. Satellite and sensor detection, automatic payout.', list: ['Crop, livestock and aquaculture cover', 'Satellite and IoT indexing', 'Automatic payout', 'No paperwork'] },
        { name: 'AgroSave', t: 'Save alone or with your cooperative.', d: 'Put money aside between seasons and build collective savings with your cooperative.', list: ['Interest-bearing savings', 'Cooperative group savings', 'Seasonal savings goals', 'Withdrawals to mobile money'] },
        { name: 'Escrow & markets', t: 'Every transaction protected.', d: 'Automatic escrow and smart contracts on every trade, plus access to the Faroya agro-pastoral exchange.', list: ['Escrow on every transaction', 'Smart contracts', 'Access to Faroya', 'Export documentation and trade finance'] },
      ] },
      trust: { title: 'Bank-grade security, phone-level simplicity.', items: [
        { t: 'CEMAC compliant', d: 'Financial services aligned with regional regulation.' },
        { t: 'KYC · KYA verification', d: 'Identity, activity and farm verified once.' },
        { t: 'Bank-grade encryption', d: 'Bank-level encryption protocols and data protection.' },
        { t: 'Agent network', d: 'Deposits and withdrawals via mobile money and rural agents.' },
      ] },
      story: { title: 'One year with AgroBank.', intro: 'Follow Fatima, a palm oil cooperative leader in Cameroon, through her first full financial year.', steps: [
        { t: 'The starting point', d: 'Her buyers pay cash, weeks late. No account, no credit history, no insurance.' },
        { t: 'She opens her account', d: "Her verification is already done in Farm’sToMarket. Her AgroBank account activates automatically." },
        { t: 'Her first sale is paid', d: 'The buyer\u2019s payment goes through escrow and lands in her account on validated delivery.' },
        { t: 'AgroCredit unlocks', d: 'Her sales history becomes her credit file. She finances better seeds for the cooperative.' },
        { t: 'Her harvest is insured', d: 'AgroInsure covers her plots. If weather strikes, payout is triggered automatically.' },
        { t: 'She sells on the markets', d: 'Through Faroya, she follows prices and sells part of her output at the best time.' },
        { t: 'A new season begins', d: 'The cooperative saves together with AgroSave and prepares the next season calmly.' },
      ] },
      features: { title: 'Activated automatically with your profile.', items: [
        { t: 'No separate sign-up', d: "Your verification on Farm’sToMarket or Pro is enough." },
        { t: 'No branch visit', d: 'Everything happens on your phone.' },
        { t: 'Instant wallet', d: 'Receive payments from your first sale.' },
        { t: 'Automatic scoring', d: 'Your activity builds your access to credit.' },
        { t: 'Built-in insurance', d: 'Subscribed and managed in the same app.' },
        { t: 'Business accounts', d: 'For cooperatives, agri-SMEs and processors.' },
      ] },
      cases: { title: 'For every link in the chain.', items: [
        { who: 'Producer', s: 'Paid in cash, with no history or savings.', w: 'Paid to an account, building a history that unlocks credit.' },
        { who: 'Cooperative', s: 'It waited weeks before paying members.', w: 'It receives funds on delivery and redistributes them instantly.' },
        { who: 'Processor', s: 'It lacked cash to buy during peak season.', w: 'It funds purchases with supply chain financing.' },
      ] },
      faq: [
        { q: 'Does AgroBank replace my mobile money?', a: 'No, it connects to it. Deposit, withdraw and pay via the main mobile money services.' },
        { q: 'How is my account activated?', a: "Once your profile is verified (KYC, KYA and farm verification) on Farm’sToMarket or Pro, the full AgroBank suite activates." },
        { q: 'How is my credit access calculated?', a: 'From your production and sales history on the platform, rather than physical collateral.' },
      ],
      cta: { title: 'The bank African agriculture deserves.', text: "Activate AgroBank from Farm’sToMarket or Farm’sToMarket Pro, or book a call with our team." },
    },
    faroya: {
      nav: 'Faroya', short: 'The agro-pastoral commodity exchange.',
      hero: { eyebrow: 'Faroya · Agro-pastoral exchange', title: 'Agricultural resources finally have their exchange.', lead: 'Buy, sell and trade grains, fruit, vegetables and livestock in real time. Live prices from reference markets, AI quality verification and escrow-protected funds.', a: 'Discover Faroya', b: 'See the story' },
      need: { title: 'A fair price starts with a known price.', pains: [
        { t: 'Scattered prices', d: 'Every market has its own price, and nobody sees them all at once.' },
        { t: 'Unverifiable quality', d: 'Buying remotely without judging quality holds trade back.' },
        { t: 'No hedging tools', d: 'Producers absorb price swings with no way to protect themselves.' },
      ] },
      markets: { title: 'Markets, live.', note: 'Interface preview. Prices in Faroya are updated continuously.', tickers: [
        { c: 'CAC', n: 'Premium cocoa', up: true }, { c: 'CAF', n: 'Robusta coffee', up: true }, { c: 'MAS', n: 'Grain maize', up: true }, { c: 'TOM', n: 'Fresh tomato', up: false }, { c: 'RIZ', n: 'Paddy rice', up: true }, { c: 'MAN', n: 'Fresh cassava', up: true }, { c: 'BOV', n: 'Live cattle', up: false }, { c: 'PAM', n: 'Palm oil', up: true },
      ] },
      suite: { title: 'Exchange tools, adapted to agriculture.', lead: 'Faroya gives producers, cooperatives and buyers the mechanics of financial markets, with the guarantees of the Farm’sToMarket ecosystem.', products: [
        { name: 'Spot', t: 'Buy and sell at market price.', d: 'Immediate trades on hundreds of agro-pastoral resources.', list: ['Real-time prices', 'Market and limit orders', 'Escrow settlement'] },
        { name: 'P2P producers', t: 'Trade directly with producers.', d: 'Over-the-counter trades between verified producers, cooperatives and buyers.', list: ['Verified profiles', 'Direct negotiation', 'Protected funds'] },
        { name: 'Futures', t: 'Lock your price before harvest.', d: 'Secure a sale or purchase price for future delivery.', list: ['Season-long visibility', 'Protection against swings', 'Smart contracts'] },
        { name: 'Advanced tools', t: 'Optimise sales with AI.', d: 'Stop-loss orders, trend analysis and alerts to sell at the best time.', list: ['Stop-loss and limit orders', 'AI analytics', 'Price alerts'] },
      ] },
      story: { title: 'A bag of cocoa, from plot to exchange.', intro: 'Follow a cocoa farmer selling his harvest on Faroya.', steps: [
        { t: 'He follows prices', d: 'He compares cocoa prices across reference markets, live.' },
        { t: 'He gets quality verified', d: 'He photographs his beans. AI analyses maturity, defects and size and assigns a quality score.' },
        { t: 'He places an order', d: 'He sets a limit price. The order executes as soon as the market reaches it.' },
        { t: 'He traces his lot', d: 'His plot is GPS-mapped. The buyer sees the exact origin of the lot.' },
        { t: 'He is paid safely', d: 'The buyer\u2019s funds are held in escrow and released on confirmed delivery.' },
      ] },
      features: { title: 'Trust, built into every trade.', items: [
        { t: 'AI quality verification', d: 'Maturity, defect rate and size analysed from photos.' },
        { t: 'Agricultural escrow', d: 'Funds protected until quality and delivery are confirmed.' },
        { t: 'GPS mapping', d: 'Full traceability from plot to purchase.' },
        { t: 'Real-time prices', d: 'Prices from Cameroon\u2019s main markets.' },
        { t: 'Integrated logistics', d: 'Delivery with real-time order tracking.' },
        { t: 'Multi-payment', d: 'Mobile money, transfer and AgroBank wallet.' },
      ] },
      cases: { title: 'How Faroya is used.', items: [
        { who: 'Producer', s: 'He sold without knowing other markets\u2019 prices.', w: 'He compares markets and sells where the price is fairest.' },
        { who: 'Cooperative', s: 'It suffered price drops at peak harvest.', w: 'It locks part of its prices in advance with futures.' },
        { who: 'Buyer', s: 'He hesitated to buy remotely without seeing goods.', w: 'He buys AI-scored, GPS-traced lots paid through escrow.' },
      ] },
      faq: [
        { q: 'What is an agro-pastoral exchange?', a: 'A digital marketplace where producers, cooperatives and buyers trade agricultural and pastoral resources at transparent prices.' },
        { q: 'Do I need a bank account?', a: 'No. You can use mobile money or your AgroBank wallet.' },
        { q: 'When will Faroya be available?', a: 'Faroya is in development. Leave us your contact to hear about the launch.' },
      ],
      cta: { title: 'Agricultural trade enters a new era.', text: 'Explore the in-development version of Faroya or contact us to learn more.' },
    },
  },
};

export const ORDER = ["producteurs", "acheteurs", "transporteurs", "cooperatives", "agrobank", "faroya"] as const;
export type SolutionKey = (typeof ORDER)[number];
export const SOLUTIONS = { fr, en } as Record<Lang, any>;
export { fr as solFr, en as solEn };


/* ---- extra (charts, bank visuals, toasts) from Solutions.dc.html ---- */
export const CLOUD_HOME = 'https://res.cloudinary.com/dazduy8iw/image/upload/a_-120/e_background_removal/f_png/a_30/e_trim:30/f_auto/q_auto/Agricultural_Bank_Home_t3zpkz_b7cd57.png';
export const CLOUD_WITHDRAW = 'https://res.cloudinary.com/dazduy8iw/image/upload/q_auto/f_auto/v1781460008/Withdraw_Funds_r9onta_8ff706.png';
export const CLOUD_ESCROW = 'https://res.cloudinary.com/dazduy8iw/image/upload/q_auto/f_auto/v1781460025/Escrow_Balance_bexrct_8ff706.png';
export const BANK_PRODUCTS = [CLOUD_HOME, CLOUD_WITHDRAW, '/Mockups/mockup%2006.png', '/assets/m-track.png', CLOUD_ESCROW, '/assets/m-bourse.png'];
export const BANK_STORY = ['/farmers/5.jpeg', CLOUD_HOME, CLOUD_WITHDRAW, '/Mockups/mockup%2006.png', 'https://faroya.farmstomarket.io/green-farmland.jpg', '/assets/m-bourse.png', CLOUD_ESCROW];
export const TOAST_STYLE = [['#00E834', '#040405'], ['#040405', '#00E834'], ['#E6FDEB', '#006116']];
export const EXTRA = {
  fr: {
    toasts: {
      producteurs: [['↗', 'Nouvelle offre reçue', 'Restaurant · Douala'], ['✓', 'Paiement libéré', 'Livraison confirmée par QR'], ['▲', 'Cours en hausse', 'Tomates · Bourse agricole']],
      acheteurs: [['✓', 'Producteur vérifié', 'Profil, certifications et avis'], ['◎', 'Livraison en route', 'Suivi GPS en direct'], ['▣', 'Fonds protégés', 'Séquestre AgroBank']],
      transporteurs: [['◎', 'Nouvelle mission', 'Enlèvement à proximité'], ['↗', 'Itinéraire optimisé', 'Enlèvements regroupés'], ['✓', 'Remise confirmée', 'Paiement en cours']],
      cooperatives: [['+', 'Nouveau membre', 'Parcelle cartographiée'], ['✓', 'Lot validé', 'Contrôle qualité terrain'], ['↗', 'Paiements redistribués', 'Membres payés sur mobile money']],
    },
    bx: { heroNote: 'Sans passage en agence · Activé avec votre profil Farms to Market', toastT: 'Paiement reçu', toastD: 'Vente de cacao · Séquestre libéré', cardLabel: 'Débit',
      creditTitle: 'Des échéances qui suivent vos récoltes.', creditText: "Les remboursements tombent quand l'argent rentre, pas à date fixe. AgroCredit aligne chaque échéance sur votre calendrier de production.", legendA: 'Revenus de récolte', legendB: 'Échéances AgroCredit',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      insureTitle: 'Vos parcelles, surveillées depuis le ciel.', insureText: "Satellites et capteurs suivent la pluie, la sécheresse et les inondations sur chaque parcelle cartographiée. Si un seuil est franchi, l'indemnisation part automatiquement.",
      insureList: ['Couverture cultures, élevage et aquaculture', 'Indices satellite et capteurs IoT', 'Indemnisation automatique, sans déclaration'], chipA: 'Parcelle couverte', chipB: 'Surveillance satellite active',
      payEyebrow: 'Paiements', payTitle: "Payez d'un geste, même sans réseau.", payText: "QR code, NFC ou mobile money : AgroBank fonctionne au marché, au champ et en zone rurale, en ligne comme hors ligne.", payChips: ['QR code', 'NFC', 'Mobile money', 'Hors ligne'] },
    fx: { name: 'Cacao premium', price: '4 200 F', change: '+7,12 %', buy: 'Acheter', sell: 'Vendre', bids: 'Achat', asks: 'Vente', illus: 'Interface illustrative · cours indicatifs', tfs: ['1J', '1S', '1M', '1A'],
      tick: [['CAC', 'Cacao', '4 200 F', '+7,12 %'], ['CAF', 'Café', '3 500 F', '+5,67 %'], ['TOM', 'Tomate', '1 850 F', '+3,45 %'], ['BOV', 'Bœuf', '3 200 F', '+2,34 %'], ['MAS', 'Maïs', '320 F', '+1,12 %']] },
  },
  en: {
    toasts: {
      producteurs: [['↗', 'New offer received', 'Restaurant · Douala'], ['✓', 'Payment released', 'Delivery confirmed by QR'], ['▲', 'Price rising', 'Tomatoes · Exchange']],
      acheteurs: [['✓', 'Verified producer', 'Profile, certifications, reviews'], ['◎', 'Delivery on its way', 'Live GPS tracking'], ['▣', 'Funds protected', 'AgroBank escrow']],
      transporteurs: [['◎', 'New mission', 'Pickup nearby'], ['↗', 'Route optimised', 'Pickups grouped'], ['✓', 'Handover confirmed', 'Payment on its way']],
      cooperatives: [['+', 'New member', 'Plot mapped'], ['✓', 'Lot validated', 'Field quality check'], ['↗', 'Payouts sent', 'Members paid via mobile money']],
    },
    bx: { heroNote: 'No branch visit · Activated with your Farm’sToMarket profile', toastT: 'Payment received', toastD: 'Cocoa sale · Escrow released', cardLabel: 'Debit',
      creditTitle: 'Repayments that follow your harvests.', creditText: 'Repayments fall when money comes in, not on a fixed date. AgroCredit aligns every instalment with your production calendar.', legendA: 'Harvest income', legendB: 'AgroCredit instalments',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      insureTitle: 'Your plots, watched from the sky.', insureText: 'Satellites and sensors track rain, drought and floods on every mapped plot. When a threshold is crossed, payout is triggered automatically.',
      insureList: ['Crop, livestock and aquaculture cover', 'Satellite indices and IoT sensors', 'Automatic payout, no claim needed'], chipA: 'Plot covered', chipB: 'Satellite monitoring active',
      payEyebrow: 'Payments', payTitle: 'Pay in one gesture, even offline.', payText: 'QR code, NFC or mobile money: AgroBank works at the market, in the field and in rural areas, online or offline.', payChips: ['QR code', 'NFC', 'Mobile money', 'Offline'] },
    fx: { name: 'Premium cocoa', price: '4,200 F', change: '+7.12%', buy: 'Buy', sell: 'Sell', bids: 'Bids', asks: 'Asks', illus: 'Illustrative interface · indicative prices', tfs: ['1D', '1W', '1M', '1Y'],
      tick: [['CAC', 'Cocoa', '4,200 F', '+7.12%'], ['CAF', 'Coffee', '3,500 F', '+5.67%'], ['TOM', 'Tomato', '1,850 F', '+3.45%'], ['BOV', 'Beef', '3,200 F', '+2.34%'], ['MAS', 'Maize', '320 F', '+1.12%']] },
  },
};
export const INCOME = [10, 8, 12, 30, 78, 92, 40, 14, 22, 70, 88, 34];
export function seeded(s: number) { return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; }; }
