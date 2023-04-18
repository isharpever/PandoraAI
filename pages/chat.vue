<script setup>
import AppSidebar from '~/components/AppSidebar.vue';
import { storeToRefs } from 'pinia';
const appStore = useAppStore();

const {
    isMenuOpen,
    isMenuOpening,
} = storeToRefs(appStore);

onMounted(() => {
    if (process.client) {
        debugger
        const { $keycloak, $router } = useNuxtApp();
        const isAuthenticated = $keycloak.authenticated
        console.log('Authenticated: ', isAuthenticated)

        if (!isAuthenticated) {
            // 如果未认证，则重定向到root
            $router.push('/')
        }
    }
});
</script>

<template>
    <div class="flex flex-row min-h-screen text-slate-300">
        <!-- <AuthPage/> -->
        <AppSidebar/>
        <Transition name="fade">
            <div
                v-if="isMenuOpen"
                @click="isMenuOpen = false"
                class="fixed inset-0 bg-black/30 z-10 lg:hidden" aria-hidden="true"
            />
        </Transition>
        <div
            class="flex flex-col flex-1 w-full"
            :class="{
                'lg:ml-[20rem] transition-all ease-in-out': isMenuOpening,
                'lg:ml-0': !isMenuOpening,
            }"
        >
            <header class="px-3 py-6 text-center bg-purple-500/[15%] shadow relative">
                <!-- Menu icon -->
                <button
                    @click="isMenuOpen = true"
                    class="
                        absolute top-0 left-0 p-3 ml-3 mt-3 text-white/70 hover:text-white/90 z-10
                        focus:outline-none
                        transition duration-300 ease-in-out
                        lg:hidden
                    "
                >
                    <Icon name="bx:bx-menu" class="w-8 h-8" />
                </button>
                <!-- Show/Hide sidebar button (lg) -->
                <button
                    @click="isMenuOpen = !isMenuOpen"
                    class="
                        absolute top-0 left-0 p-3 ml-3 mt-3 text-white/70 hover:text-white/90 z-10
                        focus:outline-none
                        transition duration-300 ease-in-out
                        hidden lg:block
                    "
                >
                    <Icon
                        :name="isMenuOpen ? 'bx:bx-chevron-left' : 'bx:bx-chevron-right'"
                        class="w-8 h-8"
                    />
                </button>
                <!-- Title -->
                <h1 class="text-2xl font-bold text-white/80 drop-shadow-md">Pandora<span class="font-light">AI</span></h1>
            </header>
            <main class="flex flex-grow py-2">
                <Chat/>
            </main>
            <footer class="px-3 pb-6 text-center">
                <span class="text-xs font-light text-slate-400">
                    powered by
                    <a href="https://github.com/waylaidwanderer/node-chatgpt-api" target="_blank">
                        https://github.com/waylaidwanderer/node-chatgpt-api
                    </a>
                </span>
            </footer>
        </div>
    </div>
</template>