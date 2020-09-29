<template>
    <header :class="{'shadow-md' : !isAtTop}" class="header fixed sm:px-4 sm:py-3 w-full m-0 left-0 z-10 top-0 sm:ml-0">
        <div class="sm:container sm:mx-auto flex items-center justify-between px-4 py-3 sm:p-0">
            <div>
                <img src="@/assets/logo.png" alt="" height="50" width="50">
            </div>
            <div class="sm:hidden">
                <button @click="isOpen = !isOpen" type="button" class="block text-gray-600 hover:text-gray-400 focus:outline-none">
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                        <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                    </svg>
                </button>
            </div>
            <nav-link class="hidden sm:block" :is-open="isOpen" :is-top="isAtTop" />
        </div>
        <nav-link class="sm:hidden" :is-open="isOpen" :is-top="isAtTop"/>
    </header>
</template>

<script>
    import { ref } from 'vue'
    import NavLink from "./NavLink";
    import {useScroll} from "../hooks/useScroll";
  export default {
    name: "NavBar",
    components: {NavLink},
    setup() {
      const { isAtTop } = useScroll()

      const isOpen = ref(false)

      return { isOpen , isAtTop }
    }
  }
</script>

<style scoped>
    @media (min-width: 640px) {
        .sm\:ml-0 {
            margin-left: -1rem !important;
        }
    }
</style>
