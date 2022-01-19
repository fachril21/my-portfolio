<template>
  <div>
    <div v-if="route != '/'" class="bg-white px-8 py-4">
      <a href="/">
        <div
          class="flex flex-row h-8 gap-2 items-center text-blue-700 hover:text-blue-800 transition-all ease-in-out duration-300"
        >
          <div
            class="h-6 w-6 bg-blue-100 flex items-center justify-center rounded-full"
          >
            <i class="bx bx-chevron-left"></i>
          </div>
          <span class="font-bold"> Back to Dashboard </span>
        </div>
      </a>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  setup() {},
  data() {
    return {
      route: "",
    };
  },
  methods: {
    initialSize() {
      this.windowWidth = window.innerWidth;
      if (window.innerWidth > 640) {
        this.$store.commit("setIsMobileView", false);
      } else {
        this.$store.commit("setIsMobileView", true);
      }
    },

    onResize() {
      this.windowWidth = window.innerWidth;
      if (window.innerWidth > 640) {
        this.$store.commit("setIsMobileView", false);
      } else {
        this.$store.commit("setIsMobileView", true);
      }
    },

    getRoute() {
      this.route = this.$nuxt.$route.path;
      // console.log(this.$nuxt.$route.path);
    },
  },
  mounted() {
    this.initialSize();
  },
  created() {
    window.addEventListener("resize", this.onResize);
    this.getRoute();
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
});
</script>
