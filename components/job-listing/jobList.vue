<template>
  <div>
    <div
      v-if="!isMobileView"
      class="w-full my-10 shadow-xl rounded-md p-4 bg-white items-center border-l-4 border-transparent hover:border-project-green transition-all ease-in-out duration-300 cursor-pointer"
    >
      <div class="grid grid-cols-12">
        <div class="col-span-6">
          <div class="flex">
            <div
              class="flex-col flex mx-4 w-24 h-24 items-center justify-center"
            >
              <img
                :src="require(`~/assets/job-listing/${data.logo}`)"
                alt="company_logo"
              />
            </div>
            <div class="flex-col mx-4 w-10/12">
              <div class="flex flex-row">
                <div class="job-title text-project-green font-extrabold mr-6">
                  {{ data.company }}
                </div>
                <div
                  v-if="data.new"
                  class="bg-project-green text-white rounded-full px-4 font-bold text-sm items-center flex"
                >
                  NEW!
                </div>
                <div
                  v-if="data.featured"
                  class="ml-2 bg-gray-900 text-white rounded-full px-4 font-bold text-sm items-center flex"
                >
                  FEATURED
                </div>
              </div>
              <div class="flex flex-row my-2">
                <span
                  class="text-gray-800 hover:text-project-green transition-all ease-in-out duration-300 font-extrabold text-2xl"
                  >{{ data.position }}</span
                >
              </div>
              <div class="flex flex-row">
                <span class="text-gray-500"
                  >{{ data.postedAt }} <span class="mx-2">•</span>
                  {{ data.contract }} <span class="mx-2">•</span>
                  {{ data.location }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-6 h-full">
          <div class="h-full flex items-center">
            <div
              v-for="language in data.languages"
              :key="language"
              class="badge bg-project-light-green hover:bg-project-green transition-all ease-in-out duration-300 px-4 text-project-green hover:text-white font-bold rounded-md py-2 mx-2"
              @click="addFilter(language)"
            >
              {{ language }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="isMobileView"
      class="w-full my-10 shadow-xl rounded-md bg-white items-center border-l-4 border-transparent hover:border-project-green transition-all ease-in-out duration-300 relative"
    >
      <div class="pos-image">
        <img
          class="w-12 h-12"
          :src="require(`~/assets/job-listing/${data.logo}`)"
          alt="company_logo"
        />
      </div>
      <div class="pt-8 px-6 pb-4">
        <div class="flex flex-row">
          <div class="job-title text-project-green font-extrabold mr-6">
            {{ data.company }}
          </div>
          <div
            v-if="data.new"
            class="bg-project-green text-white rounded-full px-4 font-bold text-sm items-center flex"
          >
            NEW!
          </div>
          <div
            v-if="data.featured"
            class="ml-2 bg-gray-900 text-white rounded-full px-4 font-bold text-sm items-center flex"
          >
            FEATURED
          </div>
        </div>
        <div class="flex flex-row my-2">
          <span
            class="text-gray-800 hover:text-project-green transition-all ease-in-out duration-300 font-extrabold text-xl"
            >{{ data.position }}</span
          >
        </div>
        <div class="flex flex-row">
          <span class="text-gray-500"
            >{{ data.postedAt }} <span class="mx-2">•</span>
            {{ data.contract }} <span class="mx-2">•</span>
            {{ data.location }}</span
          >
        </div>
        <div class="flex flex-row my-4 h-1 items-center">
          <div class="border-b-2 border-gray-200 w-full"></div>
        </div>
        <div class="flex flex-row">
          <div class="h-full flex items-center gap-2">
            <div
              v-for="language in data.languages"
              :key="language"
              class="badge bg-project-light-green hover:bg-project-green transition-all ease-in-out duration-300 px-4 text-project-green hover:text-white font-bold rounded-md py-2"
              @click="addFilter(language)"
            >
              {{ language }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    data: Object,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      isMobileView: "isMobileView",
    }),
  },
  methods: {
    addFilter(value) {
      this.$store.commit("addFilters", value);
    },
  },
};
</script>

<style scoped>
.pos-image {
  position: absolute;
  top: -20px;
  left: 24px;
}
</style>
