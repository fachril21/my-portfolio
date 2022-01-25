<template>
  <div>
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

<style>
html {
  scroll-behavior: smooth;
  transition: all ease-in-out;
  transition-duration: 500;
}
</style>
