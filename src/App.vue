<template>
  <div class="h-screen">
    <nav-bar />
    <div class="content h-screen w-full">
      <overview />
      <about />
      <skill />
      <!--      <experience />-->
      <contact />
    </div>
  </div>
</template>

<script>

  import {onMounted} from 'vue'
  import {useDarkMode} from "./hooks/useDarkMode";
  import NavBar from "./components/NavBar";
  import Overview from "./components/sections/Overview";
  import About from "./components/sections/About";
  import Skill from "./components/sections/Skill";
  // import Experience from "./components/Experience";
  import Contact from "./components/sections/Contact";

export default {
  name: 'App',
  components: {Contact, /*Experience,*/ Skill, About, Overview, NavBar},
  setup() {
    const {dark, light} = useDarkMode()

    onMounted(() => {
      //Check theme dark mode
      const getDarkMode = localStorage.getItem('darkMode')
      if(getDarkMode === 'dark') {
        dark()
      } else {
        light()
      }
    })
  }
}
</script>
