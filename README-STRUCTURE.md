# Landing Pages Candidatures - Arnaud Lavesque

## 📁 Structure du Projet

Ce projet contient plusieurs landing pages personnalisées pour différentes candidatures :

```
lp-antaes-consulting/
├── index.html              # Page racine (Antaes Consulting)
├── styles.css
├── script.js
├── photo.svg
├── README.md
│
├── sigma/                  # Page Sigma Suisse
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── photo.svg
│   └── README.md
│
└── prompt1, prompt 2       # Prompts de personnalisation
```

## 🎯 Pages disponibles

### 1. Antaes Consulting (page racine)
- **URL** : `/index.html` ou `/`
- **Profil** : Digital Product Owner & Manager
- **Focus** : Management de projets, SAFe 5, Product Ownership
- **Entreprise** : Cabinet de conseil suisse Top 10

### 2. Sigma Suisse
- **URL** : `/sigma/index.html` ou `/sigma/`
- **Profil** : Digital Project Manager
- **Focus** : Marketing Digital, Data, Dev & IA
- **Entreprise** : Partenaire pour la recherche d'emploi en Suisse

## 🚀 Déploiement

### Structure recommandée sur le serveur
```
domain.com/
├── index.html              → Page Antaes
├── antaes/                 → (optionnel) Copie de la page racine
│   └── index.html
└── sigma/                  → Page Sigma
    └── index.html
```

### URLs finales
- `https://domain.com/` → Antaes Consulting
- `https://domain.com/sigma/` → Sigma Suisse

## 📝 Personnalisation

Chaque page utilise un fichier `prompt` pour définir :
- Nom de l'entreprise
- Palette de couleurs
- Titre du profil
- Vision/valeurs de l'entreprise
- Compétences clés

## 🔧 Technologies
- HTML5, CSS3, JavaScript Vanilla
- Design responsive
- Animations au scroll
- Aucune dépendance externe

---

*Template réutilisable pour futures candidatures*
