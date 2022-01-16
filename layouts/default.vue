<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  setup() {},
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
      if (window.innerWidth > 640) {
        this.$store.commit("setIsMobileView", false);
      } else {
        this.$store.commit("setIsMobileView", true);
      }
    },
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
});
</script>
