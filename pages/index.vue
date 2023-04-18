<template>
    <div v-if="active" class="loading">
        <div class="loading-bar"></div>
    </div>
</template>
  
<script>
export default {
    props: {
      active: {type: Boolean, default: true} // 是否显示 Loading 组件
    },
    mounted() {
        if (process.client) {
            debugger
            const { $keycloak, $router } = useNuxtApp();
            const isAuthenticated = $keycloak.authenticated
            console.log('Authenticated: ', isAuthenticated)

            if (isAuthenticated) {
                // 如果已经认证，则重定向到指定 URL
                $router.push('/chat')
            } else {
                // 如果未认证，则需要等待 Keycloak 认证完成后再重定向
                $keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
                    console.log('Authenticated: ', authenticated)
                    if (authenticated) {
                        $router.push('/chat')
                    }
                }).catch(error => {
                    console.error('Authentication error: ', error)
                })
            }
        }
    }
}
</script>

<style scoped>
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    z-index: 9999;
  }
  
  .loading-bar {
    position: absolute;
    left: 0;
    top: 0;
    width: 0%;
    height: 100%;
    background-color: #1a73e8;
    animation: loading 2s ease-out infinite;
  }
  
  @keyframes loading {
    0% {
      width: 0%;
    }
    50% {
      width: 50%;
    }
    100% {
      width: 100%;
    }
  }
</style>