import { KeycloakConfig } from 'keycloak-angular';

const keycloakBaseUrl = 'KEYCLOAK_BASE_URL'; //keycloak base url
let keycloakConfig: KeycloakConfig = {  //no change required
  url: keycloakBaseUrl + '/auth',
  realm: 'REALM',
  clientId: 'CLIENT',
};
export const environment = {
  production: false,
  keycloak: keycloakConfig,
  keycloakBaseUrl: keycloakBaseUrl,
};