# GraphQL

## GraphQL Storyblok
Er zit een GraphQL automatisch ingesteld bij iedere Storyblok project. Hiermee kan je alle objecten van Storyblok via een GraphQL syntax opvragen. Denk aan:
- Page
- Components
- Assets

En ook data resourcses. Ik heb hier onderzoek naar gedaan en het is ook mogelijk om deze data te vullen via de GraphQL Content Delivery API. Maar het grote probleem is dat het een KEY VALUE waarde moet hebben en we dus niet gebruik kunnen maken van complexes objecten. Hierdoor valt deze ingebouwde GraphQL af als het gaat om data aan te leveren maar kan zeker gebruikt worden om de juiste content op te halen voor de blokken en pages. 

## GraphQL Nuxt
De nuxt community heeft nog geen werkende versie voor Nuxt 3. -> https://github.com/nuxt-community/apollo-module/issues/413

Dus ben nu onderzoek aan het doen met de volgende package -> https://www.npmjs.com/package/@nuxt3/apollo-module

try https://dev.to/joshwcorbett/nuxt-3-apollo-client-h6

ook vanuit Vue 3 is apollo intregratie **work-in-progress** https://apollo.vuejs.org/guide/#sponsors