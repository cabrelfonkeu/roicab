# Site Roicab : mode d'emploi

Site statique : aucun serveur, aucune base de données. Tout le contenu est dans `data.js`.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | Page unique (accueil, projets, CV, contact) |
| `style.css` | Apparence |
| `app.js` | Affichage des pages |
| `data.js` | **Ton contenu** : profil, compétences, projets, CV |
| `cv/` | Tes CV en PDF |
| `assets/photo.jpg` | Ta photo |

Pour voir le site chez toi, double-clique sur `index.html`.

## Modifier le site

**Ajouter un projet** : ouvre `data.js`, copie un bloc de la liste `projects` (de `{` à `}`), colle-le **en premier** dans la liste, sépare-le du suivant par une virgule, puis change les textes. Statuts possibles : `Réalisé`, `En cours`, `Prévu`. Ajoute `"link": "https://..."` pour afficher un lien.

**Ajouter un CV** :
1. Mets le PDF dans le dossier `cv/` (ex. `CV_Cabrel_2027-02.pdf`).
2. Dans `data.js`, ajoute un bloc dans `cvs` : `label`, `note`, `date` (AAAA-MM-JJ), `file` (`cv/CV_Cabrel_2027-02.pdf`), `current: true`.
3. Mets `current: false` sur l'ancien CV.

**Changer le profil, l'e-mail, le téléphone, GitHub, la photo** : section `profile` de `data.js`. Remplace `assets/photo.jpg` par une autre image du même nom pour changer la photo.

Attention : garde bien les guillemets `" "` et les virgules entre les blocs.

## Mettre en ligne avec ton domaine (GitHub Pages, gratuit)

1. Crée un compte sur github.com, puis un dépôt public nommé `roicab`.
2. Clique sur **Add file > Upload files**, glisse **tout le contenu** de ce dossier (y compris `cv/` et `assets/`), puis **Commit**.
3. Dans **Settings > Pages**, choisis la branche `main` et le dossier `/ (root)`, puis **Save**. Le site apparaît sur `https://TON-PSEUDO.github.io/roicab/`.
4. Pour modifier ensuite : ouvre `data.js` sur GitHub, clique sur le crayon, change le texte, **Commit**. Pour un CV : **Add file > Upload files** dans le dossier `cv/`.

### Brancher un nom de domaine

1. Achète un domaine chez un registrar (OVH, Gandi, Namecheap, etc.), par exemple `roicab.fr` ou `roicab.dev`. Vérifie sa disponibilité, je ne peux pas la garantir.
2. Dans la zone DNS du domaine, ajoute :
   - 4 enregistrements **A** pour `@` : `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - 1 enregistrement **CNAME** pour `www` : `TON-PSEUDO.github.io`
3. Dans **Settings > Pages > Custom domain**, saisis ton domaine, puis coche **Enforce HTTPS** quand l'option apparaît (quelques minutes à quelques heures).

Alternative : **Netlify** ou **Cloudflare Pages** permettent de glisser le dossier et de brancher un domaine depuis leur interface.
