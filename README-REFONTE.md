# Rémy Animations — refonte 2026 (prototype avant publication)

## Objectif
Site statique HTML/CSS/JS conçu pour être intégré dans `RemyAnimations/remyanimations.github.io` sur une branche séparée de `main`.

## Contenu
- `index.html` : nouvel accueil et parcours commercial.
- `services.html` : prestations et tarifs validés : anniversaire **490 €**, soirée dansante **550 €**, mariage **890 €**.
- `mariages.html`, `anniversaires.html`, `soirees.html`, `animations.html` : pages dédiées au référencement local.
- `contact.html` : formulaire qui compose **un e-mail** (aucun backend, aucune donnée envoyée automatiquement).
- `contacts.html` : redirection depuis l'ancienne URL.
- `mentions-legales.html` : **brouillon à compléter avant publication**.
- `styles.css`, `app.js`, `sitemap.xml`, `robots.txt`.

## Ressources existantes conservées dans le dépôt GitHub
Les pages font référence aux fichiers déjà présents dans la racine du dépôt :
`New_logo_2.webp`, `platines.jpg`, `mariages.jpg`, `anniversaires.jpg`, `soirées_dansantes.webp`, `karaoke.webp`, `Blind Test.webp`.

**Ce ZIP est un paquet de fichiers de refonte.** Il ne contient pas les images d'origine ; elles doivent rester dans le dépôt lors de l'intégration. Pour un aperçu local avec images, copier ces images dans le même dossier.

## Points à valider avant fusion dans `main`
1. Confirmer le domaine public final (canoniques/OG/sitemap actuellement basés sur `https://remyanimations.github.io/`).
2. Fournir et valider les photos/vidéos de prestations, droits de publication et éventuels avis Google authentiques.
3. Finaliser mentions légales et confidentialité (identité légale, adresse professionnelle, SIRET, politique de traitement et conservation).
4. Confirmer les détails des formules, frais de déplacement et options. Seuls les tarifs de base 490 € / 550 € / 890 € sont considérés validés.
5. Mettre en place un service de formulaire si un **envoi direct depuis le site** est souhaité : actuellement le bouton ouvre la messagerie de l'internaute.
6. Tester sur mobiles et vérifier l'accessibilité ainsi que l'indexation Google Search Console.
7. Réduire le poids de `mariages.jpg` (~2 Mo dans le dépôt d'origine) avant publication si possible.

## Déploiement sur GitHub
Créer une branche de travail à partir de `main`, y copier tous les fichiers de ce paquet en écrasant les fichiers HTML/CSS correspondants, conserver les images existantes, ouvrir une pull request et ne fusionner qu'après validation.

## À noter
`styles.scss` et `styles.css.map` dans l'ancien dépôt ne sont plus la source du nouveau CSS ; une opération de nettoyage pourra les retirer après revue.