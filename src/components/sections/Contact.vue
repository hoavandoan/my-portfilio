<template>
  <section id="contact" class="w-full h-auto py-20 bg-cover bg-center bg-footer-texture">
    <div class="container mx-auto">
      <div class="font-bold text-3xl text-center mb-20">Contact Me</div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        <div class="transition duration-500 ease-in-out rounded overflow-hidden shadow-xl transform hover:-translate-y-1 cursor-pointer">
          <div class="px-6 py-4 flex flex-col justify-center items-center">
            <div class="h-20 w-20 rounded-full border-2 border-teal-500 flex items-center justify-center mb-8">
              <font-awesome-icon icon="location-arrow" />
            </div>
            <div class="font-bold text-xl mb-8">Address</div>
            <div>5th Avenue, 34th floor,
              New york</div>
          </div>
        </div>
        <div class="transition duration-500 ease-in-out rounded overflow-hidden shadow-xl transform hover:-translate-y-1 cursor-pointer">
          <div class="px-6 py-4 flex flex-col justify-center items-center">
            <div class="h-20 w-20 rounded-full border-2 border-teal-500 flex items-center justify-center mb-8">
              <font-awesome-icon icon="envelope" />
            </div>
            <div class="font-bold text-xl mb-8">Email</div>
            <div>hoavandoan@gmail.com</div>
          </div>
        </div>
        <div class="transition duration-500 ease-in-out rounded overflow-hidden shadow-xl transform hover:-translate-y-1 cursor-pointer">
          <div class="px-6 py-4 flex flex-col justify-center items-center">
            <div class="h-20 w-20 rounded-full border-2 border-teal-500 flex items-center justify-center mb-8">
              <font-awesome-icon icon="phone" />
            </div>
            <div class="font-bold text-xl mb-8">Phone</div>
            <div>+84 901 764 393</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Contact"
  }
</script>
