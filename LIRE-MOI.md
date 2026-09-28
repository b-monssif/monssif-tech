# Monssif-Tech - publication sur GitHub Pages

Ce dossier contient le site prêt à publier : français, anglais, arabe, illustrations et brochure PDF. Aucun outil de compilation, serveur applicatif ou clé secrète n’est nécessaire.

## 1. Déposer les fichiers
1. Décompressez le ZIP sur votre ordinateur.
2. Dans GitHub, créez un dépôt public nommé `monssif-tech` (ou utilisez votre dépôt existant).
3. Choisissez « Add file » puis « Upload files ». Dans un dépôt vide, le lien peut être « uploading an existing file ».
4. Téléversez LE CONTENU du dossier extrait : index.html, les dossiers en et ar, les images, etc. Ne téléversez pas le ZIP lui-même, ni un dossier parent contenant tout.
5. Validez avec « Commit changes ». Le fichier index.html doit apparaître directement à la racine du dépôt.

## 2. Activer GitHub Pages
Dans Settings > Pages :
- Source : Deploy from a branch.
- Branch : main.
- Folder : / (root).
- Save.

Attendez que GitHub affiche le lien du site. Les chemins des pages ont été adaptés pour fonctionner aussi sur une adresse de type https://VOTRE-PSEUDO.github.io/monssif-tech/.

## 3. Raccorder www.monssif-tech.com
Les métadonnées du site sont préparées pour https://www.monssif-tech.com.
1. Dans Settings > Pages > Custom domain, saisissez www.monssif-tech.com, puis Save. GitHub ajoute le fichier CNAME lors d’une publication depuis une branche.
2. Chez le fournisseur DNS du domaine, configurez l’entrée CNAME de www vers VOTRE-PSEUDO.github.io (sans https:// et sans nom de dépôt).
3. Pour le domaine sans www, utilisez les enregistrements recommandés par GitHub dans la documentation officielle ci-dessous. Conservez les enregistrements de messagerie (MX, SPF, DKIM, etc.).
4. Une fois la configuration DNS validée et le certificat prêt, activez Enforce HTTPS dans GitHub Pages.

Le ZIP ne change ni le DNS ni l’hébergement existant. Le basculement du domaine se fait lorsque vous modifiez ses enregistrements DNS. Si votre domaine est différent, adaptez les URL dans les trois fichiers HTML, sitemap.xml et robots.txt.

## Modifier le site
- Texte français : index.html.
- Texte anglais : en/index.html.
- Texte arabe : ar/index.html.
- Présentation : style.css.
- Interactions : app.js.
- Brochure : brochure-monssif-tech.pdf.

Le contact ouvre la messagerie vers contact@monssif-tech.com : cette boîte doit être active chez votre fournisseur. Aucun formulaire ne collecte de données sur ce site.

## Documentation officielle
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
