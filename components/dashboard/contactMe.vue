<template>
  <div class="w-full min-h-screen sm:container sm:mx-auto flex flex-row">
    <div class="w-full flex flex-col gap-8 items-center justify-center">
      <div class="text-3xl font-bold">You can contact me on</div>
      <div class="flex flex-row gap-4">
        <a href="mailto:fachril21@gmail.com" target="_blank">
          <div
            class="w-16 h-16 bg-white hover:bg-blue-100 hover:text-blue-500 rounded-full flex items-center justify-center transition-all ease-in-out duration-500 cursor-pointer"
          >
            <i class="bx bxl-gmail text-3xl"></i>
          </div>
        </a>
        <a href="https://wa.me/6285155278771" target="_blank">
          <div
            class="w-16 h-16 bg-white hover:bg-blue-100 hover:text-blue-500 rounded-full flex items-center justify-center transition-all ease-in-out duration-500 cursor-pointer"
          >
            <i class="bx bxl-whatsapp text-3xl"></i>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/fachril-zulfidar/" target="_blank">
          <div
            class="w-16 h-16 bg-white hover:bg-blue-100 hover:text-blue-500 rounded-full flex items-center justify-center transition-all ease-in-out duration-500 cursor-pointer"
          >
            <i class="bx bxl-linkedin text-3xl"></i>
          </div>
        </a>
      </div>
    </div>
    <div class="w-full flex items-center justify-center">
      <img
        class="w-3/5 h-auto"
        src="~/assets/dashboard/contact-me.svg"
        alt="contact-me"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactMe",
};
</script>
