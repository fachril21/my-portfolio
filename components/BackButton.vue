<template>
  <div class="fixed position">
    <nuxt-link to="/">
      <div
        class="flex flex-row h-10 gap-2 items-center text-blue-700 hover:text-blue-800 transition-all ease-in-out duration-300 bg-white rounded-full px-4 cursor-pointer"
      >
        <div
          class="h-6 w-6 bg-blue-100 flex items-center justify-center rounded-full"
        >
          <i class="bx bx-chevron-left"></i>
        </div>
        <span class="font-bold text-sm"> Back to Dashboard </span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "BackButton",
};
</script>

<style>
.position {
  right: 40px;
  bottom: 40px;
}
</style>
