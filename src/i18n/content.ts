// Tous les textes du site (FR + EN). Le design est dans components/ (Home, AppWindow, InviteDemo).

export const site = {
  url: 'https://remote.valentin.auclerc.fr',
  author: 'Valentin Auclerc',
  authorUrl: 'https://valentin.auclerc.fr',
  email: 'valentin@auclerc.fr',
  download: 'https://github.com/ValentinAUCLERC/remote-site/releases/latest/download/remote-windows.zip',
  releases: 'https://github.com/ValentinAUCLERC/remote-site/releases',
  // false tant qu'aucune release n'est publiée : bouton « bientôt » au lieu d'un lien mort.
  available: true,
  zipSize: '59 Mo',
  // Client Mac (Apple silicon) : publié avec chaque release depuis v4.
  macDownload: 'https://github.com/ValentinAUCLERC/remote-site/releases/latest/download/remote-macos.zip',
  macZipSize: '9 Mo',
};

// Mesure réelle : RTX 5090 → portable (Intel Arc), réseau local, 1920×1200 à 60 Hz, HEVC.
export const measure = { total: '8,1', host: '1,6', net: '2,7', client: '3,7', rtt: '2,2' };

// Textes de l'appli dessinée sur le site (AppWindow, InviteDemo). L'appli n'existe qu'en
// français : mêmes libellés sur les deux langues, ceux de SPEC.md (v10). Données factices.
export const app = {
  title: 'Remote',
  nav: [
    { label: 'Ordinateurs', n: '5', on: true },
    { label: 'Invitations', n: '1', on: false },
  ],
  navPc: 'Ce PC',
  share: 'Partage et accès',
  settings: 'Réglages',
  me: { initial: 'A', name: 'alex', sub: '5 appareils' },
  page: 'Ordinateurs',
  search: 'Nom, IP ou identifiant',
  kbd: 'Ctrl K',
  add: 'Ajouter',
  mine: 'Mes PC',
  mineSub: '3 · compte alex',
  pcs: [
    { name: 'Tour', state: 'on', st: 'En ligne', when: ' · il y a 2 h', wall: 'win' },
    { name: 'Salon', state: 'busy', st: 'En session', when: ' depuis MacBook', wall: 'dusk' },
    { name: 'Atelier', state: 'off', st: 'Hors ligne', when: ' · vu il y a 3 j', wall: 'plain' },
  ],
  connect: 'Se connecter',
  shared: 'Partagés avec moi',
  sharedSub: "par d'autres comptes",
  sharedPc: { name: 'PC de Lucas', owner: 'lucas', sub: 'Regarder seulement · encore 2 j' },
  local: 'Sans compte',
  localSub: 'code à 6 chiffres la première fois',
  localPc: { name: 'BUREAU-PAPA', ip: '192.168.50.31' },
  pair: 'Appairer',
  status: { label: 'Ce PC', text: 'PORTABLE · dans le compte', id: '7f3a 91c2 … e04b', version: 'v10' },
  invite: {
    title: "Inviter quelqu'un sur Tour",
    who: 'Son pseudo Remote',
    pseudo: 'lucas',
    found: 'compte trouvé',
    during: 'Pendant',
    durations: ['1 h', '1 jour', '7 jours', '30 jours'],
    durationOn: 2,
    can: 'Il peut',
    rights: [
      { label: "Voir l'écran et entendre le son", on: true, locked: true },
      { label: 'Utiliser clavier et souris', on: true, locked: false },
      { label: 'Copier-coller entre les PC', on: false, locked: false },
    ],
    summary: "Jusqu'au sam. 5 déc., 23:40 · annulable à tout moment",
    send: 'Inviter',
  },
  code: {
    title: 'Comparez ce code avec lucas',
    hint: "Lisez-le de vive voix. S'il diffère sur son écran, annulez l'invitation.",
    groups: ['40712', '88305', '16249', '73590', '02418', '59166'],
    no: 'Il diffère',
    yes: "C'est le même",
  },
};

const fr = {
  lang: 'fr',
  title: 'Remote · streaming de bureau basse latence',
  description:
    "Retrouver le bureau et les jeux de son PC Windows depuis un autre PC ou un Mac, en réseau local ou par Internet, sans ouvrir de ports, avec un compte ou sans. Projet personnel, à la Parsec.",
  nav: { how: 'Fonctionnement', accounts: 'Comptes', install: 'Installer', help: 'Dépannage', other: 'EN', otherHref: '/en/' },
  hero: {
    title: ['Son PC, ailleurs.', 'plus tard.'],
    lead:
      "Streaming de bureau et de jeu fait maison, à la Parsec. Tous vos PC dans une seule liste, joignables de partout sans ouvrir de ports. Chaque milliseconde est mesurée et affichée.",
    cta: 'Télécharger pour Windows',
    ctaMac: 'Télécharger pour Mac',
    macMeta: 'client, Apple silicon',
    meta: 'gratuit · zip',
    soon: 'Téléchargement bientôt',
  },
  window: {
    label:
      "Fenêtre de l'appli Remote, page « Ordinateurs » : trois PC du compte (Tour en ligne, Salon en session, Atelier hors ligne), un PC partagé par lucas et un PC du réseau local à appairer.",
    caption: "L'appli, page « Ordinateurs » : vos PC, ceux qu'un ami vous partage, et ceux du réseau local sans compte. Redessinée ici, données factices.",
  },
  hud: {
    format: 'HEVC 4:2:0 · 1920×1200 @ 60 Hz',
    host: 'host',
    net: 'réseau',
    client: 'client',
    line: (rtt: string) => `RTT ${rtt} ms · direct · perte 0,0 %`,
    caption: "Le panneau de stats de Remote, en vrai : RTX 5090 vers un portable (Intel Arc), en réseau local.",
  },
  facts: [
    { k: '8 ms', v: "de l'image du PC à l'écran, mesuré en réseau local" },
    { k: '0 port', v: 'à ouvrir sur la box : traversée de NAT, relais en secours' },
    { k: 'HEVC · AV1', v: 'encodage NVENC, décodage matériel côté client' },
    { k: 'Chiffré', v: "QUIC (TLS 1.3) d'un appareil à l'autre ; le relais ne voit que du chiffré" },
  ],
  how: {
    title: 'Comment ça marche',
    steps: [
      { k: 'Capture', v: "L'image arrive de Windows (DXGI) dès qu'elle change, sans copie par le processeur." },
      { k: 'Encodage', v: 'La carte NVIDIA encode en HEVC ou AV1, réglée pour la latence : pas d’images en attente.' },
      { k: 'Réseau', v: 'QUIC en datagrammes, avec correction d’erreurs : une perte ne fige pas l’image.' },
      { k: 'Décodage', v: 'Le client décode sur sa carte graphique et affiche aussitôt, sans attendre la synchro.' },
    ],
    pathTitle: 'Par Internet',
    path:
      "Les deux PC se trouvent grâce à un relais auto-hébergé, puis tentent une connexion directe à travers leurs box (traversée de NAT). Si le direct échoue (4G, Wi-Fi d'hôtel), le flux passe par le relais, toujours chiffré : il ne voit que du bruit.",
  },
  features: {
    title: 'Comme devant le PC',
    list: [
      'Son du PC, synchronisé avec l’image',
      'Presse-papiers dans les deux sens, texte et images',
      'Écran virtuel à la définition du client, écrans du PC éteints si on veut',
      'Choix de l’écran à afficher quand le PC en a plusieurs',
      'Fenêtres administrateur pilotables (service Windows)',
      'Reconnexion automatique après une coupure',
      'Mises à jour automatiques et signées : le client (Windows ou Mac) se met à la version du PC',
      'Client Mac : décodage VideoToolbox, affichage Metal',
    ],
  },
  accounts: {
    title: 'Comptes',
    lead:
      "Un pseudo et un mot de passe, et vos PC vous suivent sur tous vos appareils. Le serveur de comptes sert à se retrouver ; ce sont vos PC qui décident qui entre.",
    items: [
      {
        k: 'Vos PC, partout',
        v: "Sur un autre PC Windows ou sur un Mac, pseudo et mot de passe : vos PC s'affichent dans « Ordinateurs », avec ceux qui sont en ligne. « Se connecter », sans adresse IP ni code.",
      },
      {
        k: 'Inviter un ami',
        v: "Sur un de vos PC, pour 1 h, 1 jour, 7 jours ou 30 jours, s'il a lui aussi un compte Remote. Il regarde seulement, ou utilise aussi clavier et souris, avec ou sans copier-coller entre les PC. Annulable à tout moment : sa session est coupée dans la minute, et de toute façon à la fin de l'invitation.",
      },
      {
        k: 'Un code à comparer',
        v: "En invitant, un code de six groupes de cinq chiffres s'affiche chez vous et chez votre ami. Lisez-le de vive voix : s'il diffère, quelqu'un s'est glissé entre vous.",
      },
      {
        k: 'Un serveur « zero-knowledge »',
        v: "Votre mot de passe ne quitte pas l'appareil. Le serveur garde un coffre chiffré par ce mot de passe, qu'il ne sait pas ouvrir, la liste de vos appareils signée par votre compte, les invitations et l'heure du dernier signe de vie de vos PC. Pas d'email, et jamais vos écrans : le flux ne passe pas par lui.",
      },
      {
        k: 'Vos PC vérifient eux-mêmes',
        v: "Chaque PC garde la liste signée de son compte et contrôle seul signatures, droits et dates. Le serveur ne peut pas y ajouter d'appareil : il n'a pas la clé qui signe. S'il tombe, vos appareils déjà dans le compte entrent toujours sur vos PC ; seuls les nouveaux appareils, les invitations et l'état « en ligne » attendent son retour.",
      },
      {
        k: 'Clé de secours',
        v: "Affichée une seule fois à la création du compte, en 8 groupes de 4 caractères. Mot de passe oublié : elle seule permet d'en choisir un nouveau. Personne d'autre ne peut récupérer le compte, pas même nous.",
      },
    ],
    noAccount: {
      k: 'Sans compte',
      v: "Au premier lancement, « Utiliser sans compte, sur le réseau local » : on appaire chaque PC sur place avec le code à 6 chiffres qu'il affiche, et le serveur de comptes n'intervient jamais.",
    },
    demoLabel:
      "Deux écrans de l'appli : inviter lucas sur Tour pendant 7 jours avec clavier et souris, puis le code de sécurité à comparer avec lui.",
  },
  install: {
    title: 'Installer',
    needs: [
      { k: 'PC à partager', v: 'Windows 64 bits, carte NVIDIA (NVENC)' },
      { k: 'PC qui se connecte', v: 'Windows 64 bits, décodage HEVC matériel (la plupart des PC récents)' },
      { k: 'Ou un Mac', v: 'Apple silicon (M1 et suivants), macOS 13 ou plus récent ; il se connecte, il ne se partage pas' },
    ],
    steps: [
      { k: 'Télécharger', v: 'Windows : dézipper, lancer remote.exe. Mac : glisser Remote dans Applications, puis voir « Dépannage ».' },
      { k: 'Premier lancement', v: '« Créer un compte », « J’ai déjà un compte », ou « Utiliser sans compte, sur le réseau local ».' },
      { k: 'Sur le PC à partager', v: '« Partage et accès » : installer le service, puis ajouter le PC au compte (Windows demande une confirmation administrateur).' },
      { k: 'Sur l’autre appareil', v: 'Avec le compte : le PC est dans « Ordinateurs », « Se connecter », de partout. Sans compte : sur le même réseau, « Appairer », puis le code à 6 chiffres affiché sur le PC partagé.' },
    ],
  },
  help: {
    title: 'Dépannage',
    items: [
      {
        q: '« Windows a protégé votre ordinateur »',
        a: "L'exe n'est pas signé par un éditeur reconnu (un certificat coûte cher pour un projet perso). Cliquer « Informations complémentaires » puis « Exécuter quand même ».",
      },
      {
        q: '« Appairage possible seulement depuis le même réseau »',
        a: "Voulu, en mode sans compte : le premier appairage se fait sur place (ou depuis le même réseau Tailscale), pour qu'un inconnu sur Internet ne puisse pas tenter de codes. Ensuite, la connexion marche de partout. Avec un compte, pas d'appairage : vos PC sont déjà dans « Ordinateurs ».",
      },
      {
        q: 'Sur Mac : « Remote est endommagé » ou « ne peut pas être ouvert »',
        a: "L'appli n'est pas notariée par Apple (même raison que pour Windows). Une fois Remote dans Applications, dans le Terminal : xattr -dr com.apple.quarantine /Applications/Remote.app. Ensuite, il se met tout seul à la version du PC partagé à chaque connexion.",
      },
      {
        q: 'Le PC n’apparaît pas dans « Ordinateurs »',
        a: "Avec un compte : vérifier qu'il a bien été ajouté au compte, depuis « Partage et accès » sur le PC lui-même. Sans compte : vérifier que le service tourne (« Partage et accès » du PC partagé) et que les deux appareils sont sur le même réseau ; sinon, taper l'IP affichée dans « Partage et accès » dans le champ « Nom, IP ou identifiant ».",
      },
      {
        q: 'En 4G, le panneau de stats affiche « via le relais »',
        a: 'La connexion directe a échoué, le relais prend le relais (sic) : ça marche, avec un peu plus de latence. Le débit y est limité à environ 45 Mbit/s.',
      },
    ],
  },
  about: {
    title: 'Le projet',
    text:
      "Remote est un projet personnel d'apprentissage : refaire un Parsec de zéro pour comprendre chaque étape, de la capture d'écran au hole punching. Code en Rust, non publié. Il marche au quotidien, mais reste un projet perso : pas de support, pas de garantie.",
    by: 'Par',
  },
  footer: {
    legal: 'Mentions légales',
    legalHref: '/mentions-legales/',
    ffmpeg: 'Utilise FFmpeg sous licence LGPL v3',
    releases: 'Toutes les versions',
  },
};

type Content = typeof fr;

const en: Content = {
  lang: 'en',
  title: 'Remote · low-latency desktop streaming',
  description:
    'Reach the desktop and games of your Windows PC from another PC or a Mac, on the local network or over the Internet, without opening ports, with an account or without. A personal project, Parsec-style.',
  nav: { how: 'How it works', accounts: 'Accounts', install: 'Install', help: 'Troubleshooting', other: 'FR', otherHref: '/' },
  hero: {
    title: ['Your PC, elsewhere.', 'later.'],
    lead:
      'Home-made desktop and game streaming, Parsec-style. All your PCs in one list, reachable from anywhere without opening ports. Every millisecond is measured and shown.',
    cta: 'Download for Windows',
    ctaMac: 'Download for Mac',
    macMeta: 'client, Apple silicon',
    meta: 'free · zip',
    soon: 'Download coming soon',
  },
  window: {
    label:
      'The Remote app window (in French), “Ordinateurs” page: three PCs of the account (Tour online, Salon in a session, Atelier offline), a PC shared by lucas and a local-network PC to pair.',
    caption: 'The app (in French), “Ordinateurs” page: your PCs, those a friend shares with you, and those on the local network without an account. Redrawn here, sample data.',
  },
  hud: {
    format: 'HEVC 4:2:0 · 1920×1200 @ 60 Hz',
    host: 'host',
    net: 'network',
    client: 'client',
    line: (rtt: string) => `RTT ${rtt} ms · direct · loss 0.0 %`,
    caption: "Remote's stats overlay, for real: RTX 5090 to a laptop (Intel Arc), on the local network.",
  },
  facts: [
    { k: '8 ms', v: 'from the PC’s image to your screen, measured on a LAN' },
    { k: '0 ports', v: 'to open on the router: NAT traversal, relay as a fallback' },
    { k: 'HEVC · AV1', v: 'NVENC encoding, hardware decoding on the client' },
    { k: 'Encrypted', v: 'QUIC (TLS 1.3) from one device to the other; the relay only sees ciphertext' },
  ],
  how: {
    title: 'How it works',
    steps: [
      { k: 'Capture', v: 'Frames come from Windows (DXGI) as soon as they change, with no CPU copy.' },
      { k: 'Encode', v: 'The NVIDIA card encodes HEVC or AV1, tuned for latency: no frames held back.' },
      { k: 'Network', v: 'QUIC datagrams with forward error correction: a lost packet does not freeze the picture.' },
      { k: 'Decode', v: 'The client decodes on its GPU and presents right away, without waiting for vsync.' },
    ],
    pathTitle: 'Over the Internet',
    path:
      'Both PCs find each other through a self-hosted relay, then try a direct connection through their routers (NAT traversal). If direct fails (4G, hotel Wi-Fi), the stream goes through the relay, still encrypted: it only sees noise.',
  },
  features: {
    title: 'Like sitting at the PC',
    list: [
      'PC audio, in sync with the picture',
      'Clipboard both ways, text and images',
      'Virtual display at the client’s resolution, PC screens off if you want',
      'Pick which screen to show when the PC has several',
      'Admin windows can be controlled (Windows service)',
      'Automatic reconnection after a drop',
      'Automatic, signed updates: the client (Windows or Mac) follows the PC’s version',
      'Mac client: VideoToolbox decoding, Metal display',
    ],
  },
  accounts: {
    title: 'Accounts',
    lead:
      'A username and a password, and your PCs follow you to all your devices. The account server helps devices find each other; your PCs decide who gets in.',
    items: [
      {
        k: 'Your PCs, anywhere',
        v: 'On another Windows PC or on a Mac, username and password: your PCs show up under “Ordinateurs”, with the ones that are online. “Se connecter”, no IP address, no code.',
      },
      {
        k: 'Invite a friend',
        v: 'On one of your PCs, for 1 hour, 1 day, 7 days or 30 days, as long as they have a Remote account too. They only watch, or also use keyboard and mouse, with or without copy-paste between the PCs. Cancel any time: their session is cut within a minute, and in any case when the invitation ends.',
      },
      {
        k: 'A code to compare',
        v: 'When you invite, a code of six groups of five digits shows up on your side and your friend’s. Read it out loud: if it differs, someone got in between you.',
      },
      {
        k: 'A “zero-knowledge” server',
        v: 'Your password never leaves the device. The server keeps a vault encrypted with that password, which it cannot open, the list of your devices signed by your account, the invitations and when your PCs were last seen. No email, and never your screens: the stream does not go through it.',
      },
      {
        k: 'Your PCs check for themselves',
        v: 'Each PC keeps its account’s signed list and checks signatures, rights and dates on its own. The server cannot add a device to it: it does not have the signing key. If it goes down, devices already in the account still get into your PCs; only new devices, invitations and the “online” status wait for it to come back.',
      },
      {
        k: 'Recovery key',
        v: 'Shown once, when the account is created, as 8 groups of 4 characters. Forgot the password: only this key lets you set a new one. Nobody else can recover the account, not even us.',
      },
    ],
    noAccount: {
      k: 'No account',
      v: 'At first launch, “Utiliser sans compte, sur le réseau local”: you pair each PC on site with the 6-digit code it shows, and the account server is never involved.',
    },
    demoLabel:
      'Two app screens (in French): inviting lucas on Tour for 7 days with keyboard and mouse, then the security code to compare with him.',
  },
  install: {
    title: 'Install',
    needs: [
      { k: 'PC to share', v: '64-bit Windows, NVIDIA card (NVENC)' },
      { k: 'Connecting PC', v: '64-bit Windows, hardware HEVC decoding (most recent PCs)' },
      { k: 'Or a Mac', v: 'Apple silicon (M1 and later), macOS 13 or newer; it connects, it cannot be shared' },
    ],
    steps: [
      { k: 'Download', v: 'Windows: unzip, run remote.exe. Mac: drag Remote to Applications, then see “Troubleshooting”.' },
      { k: 'First launch', v: '“Créer un compte” (create an account), “J’ai déjà un compte” (I already have one), or “Utiliser sans compte, sur le réseau local” (no account, local network).' },
      { k: 'On the PC to share', v: '“Partage et accès”: install the service, then add the PC to the account (Windows asks for an administrator confirmation).' },
      { k: 'On the other device', v: 'With the account: the PC is under “Ordinateurs”, “Se connecter”, from anywhere. Without one: on the same network, “Appairer”, then the 6-digit code shown on the shared PC.' },
    ],
  },
  help: {
    title: 'Troubleshooting',
    items: [
      {
        q: '“Windows protected your PC”',
        a: 'The exe is not signed by a known publisher (a certificate is expensive for a side project). Click “More info”, then “Run anyway”.',
      },
      {
        q: '“Pairing only from the same network”',
        a: 'On purpose, without an account: the first pairing happens on site (or from the same Tailscale network), so a stranger on the Internet cannot try codes. After that, connecting works from anywhere. With an account there is no pairing: your PCs are already under “Ordinateurs”.',
      },
      {
        q: 'On a Mac: “Remote is damaged” or “cannot be opened”',
        a: 'The app is not notarized by Apple (same reason as on Windows). Once Remote is in Applications, run in Terminal: xattr -dr com.apple.quarantine /Applications/Remote.app. After that, it follows the shared PC’s version by itself at each connection.',
      },
      {
        q: 'The PC does not show up under “Ordinateurs”',
        a: 'With an account: check it was added to the account, from “Partage et accès” on the PC itself. Without one: check the service is running (“Partage et accès” on the shared PC) and both devices are on the same network; otherwise, type the IP shown in “Partage et accès” into the “Nom, IP ou identifiant” field.',
      },
      {
        q: 'On 4G, the stats overlay says “via le relais”',
        a: 'The direct connection failed and the relay took over: it works, with a bit more latency. Throughput there is capped at about 45 Mbit/s.',
      },
    ],
  },
  about: {
    title: 'The project',
    text:
      'Remote is a personal learning project: rebuilding a Parsec from scratch to understand every step, from screen capture to hole punching. Written in Rust, source not published. The app itself is in French. It works day to day, but it is a side project: no support, no warranty.',
    by: 'By',
  },
  footer: {
    legal: 'Legal notice',
    legalHref: '/en/legal-notice/',
    ffmpeg: 'Uses FFmpeg under the LGPL v3',
    releases: 'All releases',
  },
};

export const content = { fr: typo(fr, true), en: typo(en, false) };
export type Lang = keyof typeof content;

// Typographie : en français, espaces insécables dans « » et avant : ; ? ! (sinon un « ou un :
// se retrouve seul en début de ligne). Dans les deux langues, un libellé court de l'appli
// entre guillemets ne se coupe pas (« Se connecter », “Partage et accès”).
function typo<T>(v: T, fr: boolean): T {
  if (typeof v === 'string') {
    let s: string = v;
    if (fr) {
      s = s.replace(/« /g, '«\u00a0').replace(/ »/g, '\u00a0»').replace(/ ([:;?!])/g, '\u202f$1');
    }
    s = s.replace(/([«“])([^»”]{1,20})([»”])/g, (_: string, a: string, b: string, c: string) => a + b.replace(/ /g, '\u00a0') + c);
    return s as T;
  }
  if (Array.isArray(v)) return v.map((x) => typo(x, fr)) as T;
  if (v && typeof v === 'object') {
    return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, typo(x, fr)])) as T;
  }
  return v;
}
