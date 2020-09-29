<template>
  <div class="h-screen">
    <nav-bar />
    <div class="content h-screen w-full">
      <section id="overview" class="w-full h-screen relative flex items-center justify-center">
        <div class="container absolute mx-auto z-40 flex items-center flex-wrap">
          <div class="w-full md:w-1/2">
            <div class="bg-teal-600 w-20 px-4 py-2 rounded-r-full rounded-t-full flex items-center justify-center">
              <h5 class="font-bold">Hello I'm</h5>
            </div>
            <h1 class="font-bold text-5xl">Hoa Van Doan</h1>
            <h3 class="font-bold text-2xl mb-10">Front end Developer</h3>
            <div class="mb-2 flex items-center hover:text-teal-500 cursor-pointer">
              <font-awesome-icon class="mr-4" icon="envelope" />
              <h6>hoavandoan@gmail.com</h6>
            </div>
            <div class="mb-2 flex items-center hover:text-teal-500 cursor-pointer">
              <font-awesome-icon class="mr-4" icon="phone" />
              <h6>+84 901 764 393</h6>
            </div>
            <div class="mb-2 flex items-center hover:text-teal-500 cursor-pointer">
              <font-awesome-icon class="mr-4" icon="map-marker-alt" />
              <h6>Nga Phuong, Nga Son, Thanh Hoa</h6>
            </div>

            <div class="mt-10 ml-4 flex">
              <button class="h-10 w-10 mr-2 hover:bg-gray-200 hover:text-teal-500 focus:outline-none rounded flex items-center justify-center">
                <font-awesome-icon :icon="['fab', 'facebook-f']" class="icon alt" />
              </button>
              <button class="h-10 w-10 mr-2 hover:bg-gray-200 hover:text-teal-500 focus:outline-none rounded flex items-center justify-center">
                <font-awesome-icon :icon="['fab', 'twitter']" class="icon alt" />
              </button>
              <button class="h-10 w-10 mr-2 hover:bg-gray-200 hover:text-teal-500 focus:outline-none rounded flex items-center justify-center">
                <font-awesome-icon :icon="['fab', 'github']" class="icon alt" />
              </button>
              <button class="h-10 w-10 mr-2 hover:bg-gray-200 hover:text-teal-500 focus:outline-none rounded flex items-center justify-center">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" class="icon alt" />
              </button>
            </div>

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
                :particleOpacity="0.9"
                :particlesNumber="80"
                shapeType="circle"
                :particleSize="4"
                linesColor="#dedede"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.6"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="repulse"
                :clickEffect="true"
                clickMode="bubble"
        >
        </vue-particles>
      </section>
      <section id="about" class="w-full h-64 flex">
        <div class="container w-full mx-auto">
          <div class="w-full md:w-1/2">
            <img src="@/assets/images/about.png" class="h-full w-full" alt="">
          </div>
          <div class="w-full md:w-1/2"></div>
        </div>
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
