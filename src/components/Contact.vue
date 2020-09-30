<template>
    <section id="contact" class="w-full h-auto pt-20">
        <div class="container mx-auto">
            <div class="font-bold text-3xl text-center mb-20">Contact Me</div>
            <div class="flex justify-around items-center flex-wrap mb-20">
                <div class="w-1/3 transition duration-500 ease-in-out rounded overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
                    <div class="px-6 py-4 flex flex-col justify-center items-center">
                        <div class="h-20 w-20 rounded-full border-2 border-teal-500 flex items-center justify-center mb-8">
                            <font-awesome-icon icon="location-arrow"/>
                        </div>
                        <div class="font-bold text-xl mb-8">Address</div>
                        <div>5th Avenue, 34th floor,
                            New york</div>
                    </div>
                </div>
                <div class="w-1/3 transition duration-500 ease-in-out rounded overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
                    <div class="px-6 py-4 flex flex-col justify-center items-center">
                        <div class="h-20 w-20 rounded-full border-2 border-teal-500 flex items-center justify-center mb-8">
                            <font-awesome-icon icon="envelope"/>
                        </div>
                        <div class="font-bold text-xl mb-8">Email</div>
                        <div>hoavandoan@gmail.com</div>
                    </div>
                </div>
                <div class="w-1/3 transition duration-500 ease-in-out rounded overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
                    <div class="px-6 py-4 flex flex-col justify-center items-center">
                        <div class="h-20 w-20 rounded-full border-2 border-teal-500 flex items-center justify-center mb-8">
                            <font-awesome-icon icon="phone"/>
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
