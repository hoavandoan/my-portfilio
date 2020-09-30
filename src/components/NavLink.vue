<template>
  <nav :class="isOpen ? 'block' : 'hidden'" class="sm:flex pt-2 pb-4 sm:p-0 items-center">
    <a href="#overview" class="block px-2 py-1 font-semibold rounded hover:bg-gray-800 hover:text-teal-300">Home</a>
    <a href="#about" class="mt-1 block px-2 py-1 font-semibold rounded hover:bg-gray-800 hover:text-teal-300 sm:mt-0 sm:mr-2">About</a>
    <a href="#skill" class="mt-1 block px-2 py-1 font-semibold rounded hover:bg-gray-800 hover:text-teal-300 sm:mt-0 sm:mr-2">Skill</a>
    <a href="#experience" class="mt-1 block px-2 py-1 font-semibold rounded hover:bg-gray-800 hover:text-teal-300 sm:mt-0 sm:mr-2">Experiences</a>
    <a href="#" class="mt-1 block px-2 py-1 font-semibold rounded hover:bg-gray-800 hover:text-teal-300 sm:mt-0 sm:ml-2">Product</a>
    <a href="#contact" class="mt-1 block px-2 py-1 font-semibold rounded hover:bg-gray-800 hover:text-teal-300 sm:mt-0 sm:ml-2">Contact</a>
    <div class="mode-toggle mt-1 px-2 py-1 sm:mt-0 sm:ml-2" @click="toggleMode">
      <div class="toggle">
        <div id="dark-mode" type="checkbox"></div>
      </div>
    </div>
  </nav>

</template>

<script>
  import {useDarkMode} from "../hooks/useDarkMode";

  export default {
    name: "NavLink",
    props: {
      isOpen: {
        type: Boolean,
        required: false,
      },
    },
    setup() {
      const { toggleMode } = useDarkMode()
      return { toggleMode }
    }
  }
</script>
