<template>
    <section id="skill" class="w-full h-auto pt-20">
        <div class="container mx-auto flex flex-wrap mb-32">
            <div class="w-full md:w-1/2">
                <h1 class="font-bold text-3xl text-center mb-10">Technical Skills</h1>
                <progress-bar name="Javascript" value="50%"/>
                <progress-bar name="NodeJs" value="50%"/>
                <progress-bar name="ReactJs" value="80%"/>
                <progress-bar name="ReactNative" value="60%"/>
                <progress-bar name="VueJs" value="90%"/>
                <progress-bar name="NuxtJs" value="90%"/>
            </div>
            <div class="w-full md:w-1/2">
                <h1 class="font-bold text-3xl text-center mb-10">Professional Skills</h1>
            </div>
        </div>
    </section>
</template>

<script>
  import ProgressBar from "./ProgressBar";
  export default {
    name: "Skill",
    components: {ProgressBar}
  }
</script>
