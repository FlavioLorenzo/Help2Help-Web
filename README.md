# Help2Help Web App

**Here we are!** The React project for our web app!

### Installation

Very quick installation process:

-   `npm install`
-   `npm start`

That's it, let's develop this bad boy!

### Localization

The adopted localization framework is React-intl (part of Format.js). More info here: (https://formatjs.io/docs/getting-started/installation).

-   Externalize the messages to be translated
    `npm run extract -- 'src/**/*.js*' --out-file lang/en.json --id-interpolation-pattern '[sha512:contenthash:base64:6]'`
-   Compile the translated languages to embed them in the application
    `npm run compile -- lang/fr.json --ast --out-file src/lang/fr.json`

To add new language translations:

-   Import new language's locale file into App.js
-   Specify the new language selection in function loadLocaleData in App.js

### Google Firebase

Firebase location can be found at: (https://console.firebase.google.com/project/help-2-help/overview).

In the `functions/src` directory you can find all the Google Cloud Functions that were developed for the application. To deploy new functions to Firebase, use the following snippet:
`firebase deploy --only functions`

### Component Documentation

For component documentation we adopted the docz library. More info here: (https://www.docz.site/)

-   Run the documentation server (should run at port 3000)
    `npm run docz:dev`

### Algolia

We opted for Algolia service ((https://www.algolia.com/)) to easily provide a Full Text and AI-Powered search over the data about organizations, events and volunteers.

Algolia has been integrated with the Firestore DB so that, whenever a new organization is added/updated/removed to/from the system, the Algolia index gets automatically updated through Google Cloud Functions.

Algolia cheat-sheet to work locally:

-   Set up the Algolia Keys, which can be retrieved from Algolia User page:
    `firebase functions:config:set algolia.appid=xxxxxxx algolia.apikey=xxxxxxx`
