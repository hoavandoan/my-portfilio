<template>
  <div class="h-screen">
    <nav-bar />
    <div class="content h-screen w-full">
      <section id="overview" class="w-full h-screen relative flex items-center justify-center">
        <div class="container absolute mx-auto z-50 flex items-center flex-wrap">
          <div class="w-full md:w-1/2">
            <div class="bg-teal-600 w-20 px-4 py-2 rounded-r-full rounded-t-full flex items-center justify-center">
              <h5>Hello I'm</h5>
            </div>
            <h1 class="font-bold text-5xl">Hoa Van Doan</h1>
            <h3 class="font-bold text-2xl">Front end Developer</h3>
          </div>
          <div class="w-full md:w-1/2 flex items-center justify-center">
            <div class="h-auto rounded-full border-8 border-gray-700">
              <img class="h-64 w-64 rounded-full border-8 border-gray-500" src="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/82897130_2229972490630390_4180309613570162688_n.jpg?_nc_cat=106&_nc_sid=174925&_nc_ohc=17TnLe_XzCQAX91WffH&_nc_ht=scontent.fhan3-3.fna&oh=8c6e51ddeae7dbb3243ab82f1a0be16f&oe=5F96EDD0" alt="">
            </div>
          </div>
        </div>
        <vue-particles
                class="w-full h-full"
                color="#dedede"
                :particleOpacity="0.7"
                :particlesNumber="80"
                shapeType="circle"
                :particleSize="4"
                linesColor="#dedede"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
        >
        </vue-particles>
      </section>
    </div>

  </div>

</template>

<script>

  import {onMounted} from 'vue'
  import NavBar from "./components/NavBar";
  import {useDarkMode} from "./hooks/useDarkMode";

export default {
  name: 'App',
  components: {NavBar},
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
