import Keycloak from 'keycloak-js'

export default defineNuxtPlugin(nuxtApp => {
    if (process.client) {
      const initOptions = {
        url: 'https://23.95.254.235:8443/auth',
        realm: 'pandora',
        clientId: 'pandoraAI',
        redirectUri: '/chat'
      }
      const keycloak = new Keycloak(initOptions)
      
      keycloak.onReady = () => {
        console.log('Keycloak is ready')
      }
      
      keycloak.onAuthSuccess = () => {
        console.log('AuthSuccess')
      }
      
      keycloak.onAuthRefreshSuccess = () => {
        console.log('AuthRefreshSuccess')
      }
      
      keycloak.onAuthError = () => {
        console.log('AuthError')
      }

      nuxtApp.$keycloak = keycloak
    }
  })
