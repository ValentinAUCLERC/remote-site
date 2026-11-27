// Tous les textes du site (FR + EN). Le design est dans components/Home.astro.

export const site = {
  url: 'https://remote.valentin.auclerc.fr',
  author: 'Valentin Auclerc',
  authorUrl: 'https://valentin.auclerc.fr',
  email: 'valentin@auclerc.fr',
  download: 'https://github.com/ValentinAUCLERC/remote-site/releases/latest/download/remote-windows.zip',
  releases: 'https://github.com/ValentinAUCLERC/remote-site/releases',
  // false tant qu'aucune release n'est publiée : bouton « bientôt » au lieu d'un lien mort.
  available: true,
  zipSize: '57 Mo',
  // Client Mac (Apple silicon) : publié avec chaque release depuis v4.
  macDownload: 'https://github.com/ValentinAUCLERC/remote-site/releases/latest/download/remote-macos.zip',
  macZipSize: '9 Mo',
};

// Mesure réelle : RTX 5090 → portable (Intel Arc), réseau local, 1920×1200 à 60 Hz, HEVC.
export const measure = { total: '8,1', host: '1,6', net: '2,7', client: '3,7', rtt: '2,2' };

const fr = {
  lang: 'fr',
  title: 'Remote · streaming de bureau basse latence',
  description:
    "Retrouver le bureau et les jeux de son PC Windows depuis un autre ordinateur, en réseau local ou par Internet, sans ouvrir de ports. Projet personnel, à la Parsec.",
  nav: { how: 'Fonctionnement', install: 'Installer', help: 'Dépannage', other: 'EN', otherHref: '/en/' },
  hero: {
    title: ['Son PC, ailleurs.', 'plus tard.'],
    lead:
      "Streaming de bureau et de jeu fait maison, à la Parsec : capture, encodage matériel, QUIC, décodage, affichage. Chaque milliseconde est mesurée et affichée.",
    cta: 'Télécharger pour Windows',
    ctaMac: 'Télécharger pour Mac',
    macMeta: 'client, Apple silicon',
    meta: 'gratuit · zip',
    soon: 'Téléchargement bientôt',
  },
  hud: {
    format: 'HEVC 4:2:0 · 1920×1200 @ 60 Hz',
    host: 'host',
    net: 'réseau',
    client: 'client',
    line: (rtt: string) => `RTT ${rtt} ms · direct · perte 0,0 %`,
    caption: "Le panneau de stats de Remote, en vrai : RTX 5090 vers un portable, en réseau local.",
  },
  facts: [
    { k: '8 ms', v: "de l'image du PC à l'écran, mesuré en réseau local" },
    { k: '0 port', v: 'à ouvrir sur la box : traversée de NAT, relais en secours' },
    { k: 'HEVC · AV1', v: 'encodage NVENC, décodage matériel côté client' },
    { k: 'Chiffré', v: 'de bout en bout, seuls les appareils appairés entrent' },
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
      'Mises à jour automatiques et signées : le client Windows se met à la version du PC',
      'Client Mac : décodage VideoToolbox, affichage Metal',
    ],
  },
  install: {
    title: 'Installer',
    needs: [
      { k: 'PC à partager', v: 'Windows 64 bits, carte NVIDIA (NVENC)' },
      { k: 'PC qui se connecte', v: 'Windows 64 bits, décodage HEVC matériel (la plupart des PC récents)' },
      { k: 'Ou un Mac', v: 'Apple silicon (M1 et suivants), macOS 13 ou plus récent' },
    ],
    steps: [
      { k: 'Sur le PC à partager', v: 'Dézipper, lancer remote.exe, onglet « Ce PC », puis « Installer le service ».' },
      { k: 'Sur l’autre PC, même réseau', v: '« Se connecter », choisir le PC dans « Sur ce réseau », saisir le code affiché sur le PC partagé. Sur Mac : glisser Remote dans Applications, puis voir « Dépannage ».' },
      { k: 'Ensuite, de partout', v: 'Le nom du PC suffit, en Wi-Fi, en 4G ou au bureau.' },
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
        a: "Voulu : le premier appairage se fait sur place (ou depuis le même réseau Tailscale), pour qu'un inconnu sur Internet ne puisse pas tenter de codes. Ensuite, la connexion marche de partout.",
      },
      {
        q: 'Sur Mac : « Remote est endommagé » ou « ne peut pas être ouvert »',
        a: "L'appli n'est pas notariée par Apple (même raison que pour Windows). Une fois Remote dans Applications, dans le Terminal : xattr -dr com.apple.quarantine /Applications/Remote.app. Le client Mac ne se met pas à jour tout seul : le retélécharger quand le PC partagé change de version.",
      },
      {
        q: 'Le PC n’apparaît pas dans « Sur ce réseau »',
        a: "Vérifier que le service tourne (onglet « Ce PC » du PC partagé) et que les deux PC sont sur le même réseau. Sinon, saisir l'IP affichée dans « Ce PC ».",
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
    'Reach the desktop and games of your Windows PC from another computer, on the local network or over the Internet, without opening ports. A personal project, Parsec-style.',
  nav: { how: 'How it works', install: 'Install', help: 'Troubleshooting', other: 'FR', otherHref: '/' },
  hero: {
    title: ['Your PC, elsewhere.', 'later.'],
    lead:
      'Home-made desktop and game streaming, Parsec-style: capture, hardware encoding, QUIC, decoding, display. Every millisecond is measured and shown.',
    cta: 'Download for Windows',
    ctaMac: 'Download for Mac',
    macMeta: 'client, Apple silicon',
    meta: 'free · zip',
    soon: 'Download coming soon',
  },
  hud: {
    format: 'HEVC 4:2:0 · 1920×1200 @ 60 Hz',
    host: 'host',
    net: 'network',
    client: 'client',
    line: (rtt: string) => `RTT ${rtt} ms · direct · loss 0.0 %`,
    caption: "Remote's stats overlay, for real: RTX 5090 to a laptop, on the local network.",
  },
  facts: [
    { k: '8 ms', v: 'from the PC’s image to your screen, measured on a LAN' },
    { k: '0 ports', v: 'to open on the router: NAT traversal, relay as a fallback' },
    { k: 'HEVC · AV1', v: 'NVENC encoding, hardware decoding on the client' },
    { k: 'Encrypted', v: 'end to end, only paired devices get in' },
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
      'Automatic, signed updates: the Windows client follows the PC’s version',
      'Mac client: VideoToolbox decoding, Metal display',
    ],
  },
  install: {
    title: 'Install',
    needs: [
      { k: 'PC to share', v: '64-bit Windows, NVIDIA card (NVENC)' },
      { k: 'Connecting PC', v: '64-bit Windows, hardware HEVC decoding (most recent PCs)' },
      { k: 'Or a Mac', v: 'Apple silicon (M1 and later), macOS 13 or newer' },
    ],
    steps: [
      { k: 'On the PC to share', v: 'Unzip, run remote.exe, “Ce PC” tab, then “Installer le service”.' },
      { k: 'On the other PC, same network', v: '“Se connecter”, pick the PC under “Sur ce réseau”, type the code shown on the shared PC. On a Mac: drag Remote to Applications, then see “Troubleshooting”.' },
      { k: 'Then, from anywhere', v: 'The PC’s name is enough, on Wi-Fi, 4G or at the office.' },
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
        a: 'On purpose: the first pairing happens on site (or from the same Tailscale network), so a stranger on the Internet cannot try codes. After that, connecting works from anywhere.',
      },
      {
        q: 'On a Mac: “Remote is damaged” or “cannot be opened”',
        a: 'The app is not notarized by Apple (same reason as on Windows). Once Remote is in Applications, run in Terminal: xattr -dr com.apple.quarantine /Applications/Remote.app. The Mac client does not update itself: download it again when the shared PC changes version.',
      },
      {
        q: 'The PC does not show up under “Sur ce réseau”',
        a: 'Check the service is running (“Ce PC” tab on the shared PC) and both PCs are on the same network. Otherwise, type the IP shown in “Ce PC”.',
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

export const content = { fr, en };
export type Lang = keyof typeof content;
