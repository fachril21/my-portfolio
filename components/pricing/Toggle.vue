<template>
  <div
    class="w-16 h-8 bg-gradient-to-r from-purple-400 to-purple-700 rounded-full flex-shrink-0 p-1 cursor-pointer"
  >
    <div
      class="bg-white w-6 h-6 rounded-full shadow-xl transform duration-300 ease-in-out"
      :class="{ 'translate-x-8': isActive }"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Toggle",
  props: {
    isActive: Boolean,
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
