<template>
  <div class="relative w-64">
    <div
      class="background absolute left-0 top-0 w-full h-full bg-white shadow-2xl rounded-2xl text-gray-700 transform"
      :class="{
        'scale-125 text-purple-100 bg-gradient-to-tl from-purple-600 to-purple-500':
          data.isCenter,
      }"
    ></div>
    <div
      class="content relative"
      :class="{
        ' text-purple-100 py-10 px-0': data.isCenter,
        ' text-gray-700 py-10 px-8': !data.isCenter,
      }"
    >
      <div class="block flex justify-center">
        <span class="font-semibold">{{ data.name }}</span>
      </div>
      <div class="block flex justify-center items-center font-extrabold my-4">
        <span class="text-3xl mr-2">$</span>
        <span class="text-5xl">
          <span v-if="isMonthly">{{ data.priceMonthly }}</span>
          <span v-if="!isMonthly">{{ data.priceAnnually }}</span>
        </span>
      </div>
      <div class="block grid grid-cols-12 divide-y">
        <div
          v-for="item in data.feature"
          :key="item"
          class="col-span-12 flex justify-center h-16 items-center"
        >
          <span>{{ item }}</span>
        </div>
      </div>
      <div class="block flex justify-center mt-4">
        <button
          class="text-sm w-full p-2 font-semibold rounded-xl transition-all ease-in-out duration-300 delay-75 focus:outline-none"
          :class="{
            'bg-white text-purple-700 hover:bg-purple-200': data.isCenter,
            'bg-purple-500 text-white hover:bg-purple-600': !data.isCenter,
          }"
        >
          LEARN MORE
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    data: Object,
    isMonthly: Boolean,
  },
  mounted() {
    console.log(this.isMonthly);
  },
});
</script>
