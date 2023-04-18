export default function ({ app, redirect }) {
    debugger
    if (!app.$keycloak.authenticated) {
      // 如果未认证，则需要等待 Keycloak 认证完成后再重定向
      app.$keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
        console.log('Authenticated: ', authenticated)
        if (authenticated) {
            //todo
        }
      }).catch(error => {
          console.error('Authentication error: ', error)
      })
    }
    
  }