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

      keycloak.onTokenExpired = () => {
        debugger
        keycloak.updateToken().then(refreshed => {
          if (refreshed) {
            console.log('updateToken success')
          } else {
            console.log('updateToken fail')
          }
        }).catch(error => {
          console.log('updateToken error', error)
        });
      }

      nuxtApp.$keycloak = keycloak
    }
  })
