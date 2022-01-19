<template>
  <div class="sm:container sm:mx-auto h-full p-8">
    <div class="flex-row mb-4">will become dashboard soon 😘</div>
    <div class="flex-row gap-8">
      <a href="/job-listing">
        <button
          class="px-8 py-2 bg-blue-100 hover:bg-blue-200 focus:outline-none text-blue-900 font-bold rounded-full transition-all ease-in-out duration-300 delay-100"
        >
          Job Listing Project
        </button>
      </a>
      <a href="/pricing">
        <button
          class="px-8 py-2 bg-blue-100 hover:bg-blue-200 focus:outline-none text-blue-900 font-bold rounded-full transition-all ease-in-out duration-300 delay-100"
        >
          Pricing Page
        </button>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      isMobileView: "isMobileView",
    }),
  },
};
</script>
