// ====== CONTENU DU SITE ROICAB ======
// Modifie ce fichier pour changer le site : profil, compétences, projets, CV.
// Chaque projet est un bloc { ... }, séparé par une virgule. Le premier projet est affiché en premier.
// Pour un CV : dépose le PDF dans le dossier cv/ puis ajoute un bloc dans la liste cvs (le plus récent en premier, current:true pour la version actuelle).
window.SITE = {
  "profile": {
    "name": "Cabrel Fonkeu Nana",
    "title": "Étudiant Bachelor Informatique · Infrastructure, Systèmes & Réseaux",
    "location": "Nantes (44)",
    "about": "Étudiant en 2ᵉ année à l’EPSI Nantes, orienté infrastructure, réseaux et DevOps. Je monte et sécurise des architectures complètes (pare-feu redondants, VPN, annuaire, virtualisation) et j’automatise leur déploiement par script.",
    "available": true,
    "email": "Fonkeucabrel212@gmail.com",
    "phone": "",
    "linkedin": "https://www.linkedin.com/in/cabrel-fonkeu-nana-5928a7398",
    "github": "",
    "photo": "assets/photo.jpg"
  },
  "skills": [
    {
      "cat": "Réseaux",
      "items": [
        "TCP/IP, VLAN, DHCP, DNS",
        "Routage, HSRP, CARP",
        "VPN WireGuard",
        "Proxy Squid / SquidGuard"
      ]
    },
    {
      "cat": "Sécurité",
      "items": [
        "Pare-feu pfSense",
        "Durcissement Active Directory (PingCastle, HardenAD)"
      ]
    },
    {
      "cat": "Systèmes & virtualisation",
      "items": [
        "Windows Server, Active Directory, GPO",
        "Linux Debian, Apache, MariaDB/MySQL",
        "Proxmox VE, Vagrant"
      ]
    },
    {
      "cat": "Scripting & outils",
      "items": [
        "Bash, PowerShell, Git",
        "GLPI (support et gestion de parc)"
      ]
    },
    {
      "cat": "Développement",
      "items": [
        "HTML5/CSS3, PHP, SQL, UML"
      ]
    }
  ],
  "projects": [
    {
      "title": "Haute disponibilité pfSense (CARP)",
      "status": "En cours",
      "year": "2026",
      "summary": "Deux pare-feu pfSense en cluster CARP devant un serveur web en LAN, avec un client côté WAN.",
      "details": "Schéma réseau réalisé avec draw.io (nom, IP, masque et passerelle de chaque machine), captures d’écran et documentation technique pour le rendu.",
      "tags": [
        "pfSense",
        "CARP",
        "Pare-feu",
        "draw.io"
      ],
      "link": ""
    },
    {
      "title": "VPN site à site WireGuard",
      "status": "En cours",
      "year": "2026",
      "summary": "Liaison entre un siège et une agence : deux pfSense reliés par un tunnel WireGuard à travers Internet.",
      "details": "VLAN 10 et 20 sur chaque site, avec serveur, switch et client, et plan d’adressage à définir.",
      "tags": [
        "WireGuard",
        "pfSense",
        "VLAN",
        "VPN"
      ],
      "link": ""
    },
    {
      "title": "Domaine Active Directory",
      "status": "En cours",
      "year": "2026",
      "summary": "Forêt remoteworks.local sur Proxmox : deux contrôleurs de domaine et un client, GPO, profils itinérants, quotas et sauvegardes.",
      "details": "Audit de sécurité avec PingCastle ou HardenAD, et script PowerShell unique pour déployer les exercices 1 à 8.",
      "tags": [
        "Active Directory",
        "GPO",
        "PowerShell",
        "PingCastle",
        "Proxmox"
      ],
      "link": ""
    },
    {
      "title": "Proxy Squid et SquidGuard",
      "status": "Réalisé",
      "year": "2026",
      "summary": "Proxy Squid avec filtrage par blacklists de domaines et d’URL, et page de blocage personnalisée.",
      "details": "Environnement Vagrant avec une machine squid_proxy et une machine squid_client.",
      "tags": [
        "Squid",
        "SquidGuard",
        "Vagrant",
        "Proxy"
      ],
      "link": ""
    },
    {
      "title": "Réseau d’entreprise TechNova SARL",
      "status": "En cours",
      "year": "2026",
      "summary": "Réseau virtuel d’une entreprise fictive de 50 personnes, monté sur Proxmox VE.",
      "details": "VLAN en sous-interfaces pfSense, isolation par VLAN à valider avec des VM de test Alpine Linux.",
      "tags": [
        "Proxmox",
        "pfSense",
        "VLAN"
      ],
      "link": ""
    },
    {
      "title": "Laboratoire réseau Proxmox",
      "status": "En cours",
      "year": "2026",
      "summary": "LAN de labo isolé (192.168.50.0/24) avec une VM Debian en routeur : DHCP avec dnsmasq, filtrage avec nftables.",
      "details": "Point d’accès Wi-Fi et surveillance prévus ensuite.",
      "tags": [
        "Proxmox",
        "Linux",
        "nftables",
        "dnsmasq"
      ],
      "link": ""
    },
    {
      "title": "Redondance HSRP",
      "status": "Réalisé",
      "year": "2026",
      "summary": "Deux routeurs Cisco 4331 en HSRP sur deux VLAN (192.168.0.0/24 et 10.0.0.0/24), avec test de bascule.",
      "details": "Identification du routeur actif et du routeur en veille, puis coupure du routeur actif pour valider la bascule.",
      "tags": [
        "Cisco",
        "HSRP",
        "VLAN",
        "Redondance"
      ],
      "link": ""
    },
    {
      "title": "Script de déploiement Bash",
      "status": "Réalisé",
      "year": "2026",
      "summary": "Script qui prend l’IP d’une VM et un rôle (web, bdd, wordpress, firewall) et configure la machine par SSH.",
      "details": "Une fonction par rôle : Apache et PHP, MariaDB, WordPress, règles iptables. Mot de passe sudo saisi sans écho. Soutenance orale en groupe.",
      "tags": [
        "Bash",
        "SSH",
        "Apache",
        "MariaDB",
        "iptables"
      ],
      "link": ""
    },
    {
      "title": "GLPI",
      "status": "Réalisé",
      "year": "2026",
      "summary": "Installation de GLPI sur une VM Linux, gestion des entités, des profils et des utilisateurs pour deux entreprises fictives.",
      "details": "Étude des profils (Self-Service, Technician, Super-Admin) et gestion des utilisateurs par groupes.",
      "tags": [
        "GLPI",
        "Linux",
        "Support"
      ],
      "link": ""
    },
    {
      "title": "Horloge parlante à capteur de mouvement",
      "status": "En cours",
      "year": "2026",
      "summary": "Un Raspberry Pi 4 détecte un mouvement et annonce l’heure avec une blague générée par une IA locale.",
      "details": "La blague est produite par Ollama (llama3.2) et convertie en voix avec Piper TTS sur une VM Proxmox, puis renvoyée au Raspberry Pi en MP3.",
      "tags": [
        "Raspberry Pi",
        "Ollama",
        "Piper TTS",
        "Python",
        "Proxmox"
      ],
      "link": ""
    },
    {
      "title": "Modélisation UML et base de données",
      "status": "Réalisé",
      "year": "2026",
      "summary": "Diagrammes de classes avec héritage et modèle relationnel pour une librairie et pour un vendeur d’aménagements d’utilitaires.",
      "details": "Produit en hiérarchie (équipements, meubles, kits), finitions, compatibilité véhicules, commandes et lignes de commande.",
      "tags": [
        "UML",
        "SQL",
        "Héritage"
      ],
      "link": ""
    },
    {
      "title": "Application de transports routiers",
      "status": "Réalisé",
      "year": "2026",
      "summary": "Règles métier, matrice des droits et user stories pour une application de suivi de camions et de trajets.",
      "details": "Trois rôles (administrateur, gestionnaire, chauffeur) et documentation versionnée sous Git dans un README.md.",
      "tags": [
        "Git",
        "User stories",
        "Markdown"
      ],
      "link": ""
    }
  ],
  "cvs": [
    {
      "id": "cv1",
      "label": "CV Infrastructure, Systèmes & Réseaux",
      "note": "Projets pfSense, WireGuard, Active Directory, Squid",
      "date": "2026-10-29",
      "file": "cv/CV_Cabrel_Fonkeu_Nana_2026-10.pdf",
      "current": true
    }
  ]
};
