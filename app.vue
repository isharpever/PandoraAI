<script setup>
// eslint-disable-next-line import/no-extraneous-dependencies
import 'fork-corner/dist/fork-corner.css';
import { storeToRefs } from 'pinia';
import initForkCorner from '~/fork-corner';
import { useConversationsStore } from '~/stores/conversations';

const conversationsStore = useConversationsStore();

const {
    conversationTitle,
} = storeToRefs(conversationsStore);

useHead({
    title: `${conversationTitle.value} - PandoraAI`,
    meta: [
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        },
    ],
});

onMounted(() => {
    initForkCorner();
});
</script>

<template>
    <a
        href="https://github.com/waylaidwanderer/PandoraAI"
        target="_blank"
        id="fork-corner"
        class="fork-corner fc-size-small fc-pos-tr fc-animate fc-theme-github"
        title="Fork me on GitHub"
    ></a>
    <NuxtPage/>
</template>

<style>
:root {
    --background: hsl(240, 80%, 10%);
}

body {
    background:
        radial-gradient(
            60vmax 60vmax at 0% 0%,
            hsla(240, 100%, 2%, 0.9) 0%,
            hsla(240, 100%, 2%, 0) 95%),
        radial-gradient(
            80vmax 50vmax at 110% -10%,
            hsla(173, 6%, 31%, 0.693) 0%,
            hsla(180, 2%, 12%, 0.297) 50%,
            hsla(240, 100%, 50%, 0) 95%),
        radial-gradient(
            90vmax 50vmax at 50vmax 50vmax,
            hsla(256, 14%, 15%, 0.341) 0%,
            hsla(240, 100%, 60%, 0) 95%)
        var(--background);
}

footer a {
    @apply opacity-75 hover:opacity-100 transition duration-300 ease-in-out;
    background: linear-gradient(to right, #37feff 0%, #bd7bff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.15s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

#fork-corner {
    z-index: 41;
    top: 5px !important;
    right: 5px !important;
}

.fork-corner.fc-theme-github + div {
    top: -88px !important;
    right: -88px !important;
    @apply shadow bg-black/50 z-40;
}

.fork-corner.fc-theme-github > i {
    @apply text-white/80;
    font-size: 35px !important;
}

::-webkit-scrollbar {
    width: 9px;
}
::-webkit-scrollbar-track {
    background: transparent;
}
::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
}
</style>
