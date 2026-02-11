# Instructions pour créer les service accounts Firebase

## Service Account pour DEV (my-awesome-app-dev-c5a5e)

### Étape 1 : Générer le service account
```bash
firebase use development
```

### Étape 2 : Dans Firebase Console
1. Allez sur https://console.firebase.google.com/project/my-awesome-app-dev-c5a5e/settings/serviceaccounts/adminsdk
2. Cliquez sur "Generate new private key"
3. Téléchargez le fichier JSON

### Étape 3 : Ajouter le secret dans GitHub
1. Allez dans GitHub → Settings → Secrets and variables → Actions
2. Créez un nouveau secret nommé : `FIREBASE_SERVICE_ACCOUNT_MY_AWESOME_APP_DEV_C5A5E`
3. Collez le contenu complet du fichier JSON téléchargé

## Service Account pour STAGING (my-awesome-app-1fc0e)

Déjà configuré : `FIREBASE_SERVICE_ACCOUNT_MY_AWESOME_APP_1FC0E`

## Service Account pour PRODUCTION (my-awesome-app-production)

### Étape 1 : Générer le service account
```bash
firebase use production
```

### Étape 2 : Dans Firebase Console
1. Allez sur https://console.firebase.google.com/project/my-awesome-app-production/settings/serviceaccounts/adminsdk
2. Cliquez sur "Generate new private key"
3. Téléchargez le fichier JSON

### Étape 3 : Ajouter le secret dans GitHub
1. Allez dans GitHub → Settings → Secrets and variables → Actions
2. Créez un nouveau secret nommé : `FIREBASE_SERVICE_ACCOUNT_MY_AWESOME_APP_PRODUCTION`
3. Collez le contenu complet du fichier JSON téléchargé

## Secrets d'environnement nécessaires

Créez aussi ces secrets dans GitHub Actions :
- `ENVIRONMENT_DEV_TS` : Contenu du fichier environment.development.ts
- `ENVIRONMENT_STAGING_TS` : Contenu du fichier environment.staging.ts
- `ENVIRONMENT_PROD_TS` : Contenu du fichier environment.prod.ts

## Résumé du workflow de déploiement

- **Pull Request** → `my-awesome-app-dev-c5a5e` (preview)
- **Push sur staging** → `my-awesome-app-1fc0e` (live)
- **Push sur main** → `my-awesome-app-production` (live)
