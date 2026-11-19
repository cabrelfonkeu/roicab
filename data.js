// ====== CONTENU DU SITE ROICAB ======
// Ce fichier est mis à jour automatiquement par le mode édition du site (bouton « Espace propriétaire »).
// Tu peux aussi le modifier à la main : garde les guillemets et les virgules.
window.SITE = {
  "profile": {
    "name": "Cabrel Fonkeu Nana",
    "title": "Étudiant Bachelor Informatique · Infrastructure, Systèmes & Réseaux",
    "location": "Nantes (44)",
    "about": "Étudiant en 2ᵉ année à l’EPSI Nantes, orienté infrastructure, réseaux et DevOps. Je monte et sécurise des architectures complètes (pare-feu redondants, VPN, annuaire, virtualisation) et j’automatise leur déploiement par script.",
    "available": true,
    "email": "Fonkeucabrel212@gmail.com",
    "phone": "0610942894",
    "linkedin": "https://www.linkedin.com/in/cabrel-fonkeu-nana-5928a7398",
    "github": "",
    "photo": "assets/photo.jpg",
    "photoV": 1795094521008
  },
  "skills": [
    {
      "cat": "Réseaux",
      "items": [
        "TCP/IP",
        "VLAN",
        "DHCP",
        "DNS",
        "Routage",
        "HSRP",
        "CARP",
        "VPN WireGuard",
        "Proxy Squid / SquidGuard"
      ]
    },
    {
      "cat": "Sécurité",
      "items": [
        "Pare-feu pfSense",
        "Durcissement Active Directory (PingCastle",
        "HardenAD)"
      ]
    },
    {
      "cat": "Systèmes & virtualisation",
      "items": [
        "Windows Server",
        "Active Directory",
        "GPO",
        "Linux Debian",
        "Apache",
        "MariaDB/MySQL",
        "Proxmox VE",
        "Vagrant"
      ]
    },
    {
      "cat": "Scripting & outils",
      "items": [
        "Bash",
        "PowerShell",
        "Git",
        "GLPI (support et gestion de parc)"
      ]
    },
    {
      "cat": "Développement",
      "items": [
        "HTML5/CSS3",
        "PHP",
        "SQL",
        "UML"
      ]
    }
  ],
  "projects": [
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
      "link": "",
      "id": "vpn-site-a-site-wireguar-1"
    },
    {
      "title": "Domaine Active Directory",
      "status": "Terminé",
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
      "link": "",
      "id": "domaine-active-directory-2"
    },
    {
      "title": "Proxy Squid et SquidGuard",
      "status": "Terminé",
      "year": "2026",
      "summary": "Proxy Squid avec filtrage par blacklists de domaines et d’URL, et page de blocage personnalisée.",
      "details": "Environnement Vagrant avec une machine squid_proxy et une machine squid_client.",
      "tags": [
        "Squid",
        "SquidGuard",
        "Vagrant",
        "Proxy"
      ],
      "link": "",
      "id": "proxy-squid-et-squidguar-3"
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
      "link": "",
      "id": "reseau-d-entreprise-tech-4"
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
      "link": "",
      "id": "laboratoire-reseau-proxm-5"
    },
    {
      "title": "Redondance HSRP",
      "status": "Terminé",
      "year": "2026",
      "summary": "Deux routeurs Cisco 4331 en HSRP sur deux VLAN (192.168.0.0/24 et 10.0.0.0/24), avec test de bascule.",
      "details": "Identification du routeur actif et du routeur en veille, puis coupure du routeur actif pour valider la bascule.",
      "tags": [
        "Cisco",
        "HSRP",
        "VLAN",
        "Redondance"
      ],
      "link": "",
      "id": "redondance-hsrp-6"
    },
    {
      "title": "Script de déploiement Bash",
      "status": "Terminé",
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
      "link": "",
      "id": "script-de-deploiement-ba-7"
    },
    {
      "title": "GLPI",
      "status": "Terminé",
      "year": "2025",
      "summary": "Installation de GLPI sur une VM Linux, gestion des entités, des profils et des utilisateurs pour deux entreprises fictives.",
      "details": "Étude des profils (Self-Service, Technician, Super-Admin) et gestion des utilisateurs par groupes.",
      "tags": [
        "GLPI",
        "Linux",
        "Support"
      ],
      "link": "",
      "id": "glpi-8"
    },
    {
      "title": "Modélisation UML et base de données",
      "status": "Terminé",
      "year": "2026",
      "summary": "Diagrammes de classes avec héritage et modèle relationnel pour une librairie et pour un vendeur d’aménagements d’utilitaires.",
      "details": "Produit en hiérarchie (équipements, meubles, kits), finitions, compatibilité véhicules, commandes et lignes de commande.",
      "tags": [
        "UML",
        "SQL",
        "Héritage"
      ],
      "link": "",
      "id": "modelisation-uml-et-base-10"
    }
  ],
  "cvs": [
    {
      "id": "avo2cr",
      "label": "cv_cabrel",
      "note": "nouveau cv",
      "date": "2026-11-19",
      "file": "cv/20261119-CV_Cabrel_Fonkeu_Nana-1-.pdf",
      "current": true
    }
  ],
  "docs": [
    {
      "title": "Documentation pfSense en haute disponibilité (CARP)",
      "status": "Terminé",
      "summary": "",
      "projectId": "proxy-squid-et-squidguar-3",
      "id": "5can0f",
      "date": "2026-11-19",
      "file": "docs/20261119-Documentation-pfSense-CARP.pdf",
      "fileName": "Documentation-pfSense-CARP.pdf"
    },
    {
      "title": "Documentation Active Directory (remoteworks.local)",
      "status": "Terminé",
      "summary": "",
      "projectId": "domaine-active-directory-2",
      "id": "1gemaz",
      "date": "2026-11-19",
      "file": "docs/20261119-B2_Fonkeu_Cabrel-Documentation-Active-Directory.pdf",
      "fileName": "B2_Fonkeu_Cabrel-Documentation-Active-Directory.pdf"
    }
  ]
};
