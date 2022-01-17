<template>
  <div class="bg-container h-full" :class="{ 'h-screen': !listVisible }">
    <div class="header-job-listing bg-header relative">
      <img
        :src="
          isMobileView
            ? require('~/assets/job-listing/bg-header-mobile.svg')
            : require('~/assets/job-listing/bg-header-desktop.svg')
        "
        alt="header"
      />
    </div>
    <div class="sm:container sm:mx-auto py-16 px-24">
      <transition name="fade" mode="out-in">
        <div v-if="filterVisible" class="relative">
          <div
            class="w-full h-20 bg-white rounded-md filter-position shadow-xl flex items-center px-8"
          >
            <div class="inline flex w-full">
              <div
                v-for="item in filters"
                :key="item"
                class="flex-col bg-project-light-green text-project-green font-bold mx-2 rounded-md overflow-hidden"
              >
                <div class="flex">
                  <div class="flex-col mr-2 pl-4 py-2 flex items-center">
                    {{ item }}
                  </div>
                  <div
                    class="flex-col py-2 bg-project-green px-2 flex items-center text-white hover:bg-gray-900 transition-all ease-in-out duration-300 cursor-pointer"
                    @click="removeFilters(item)"
                  >
                    <span>
                      <i class="bx bx-x"></i>
                    </span>
                    <!-- <box-icon name="x" class=""></box-icon> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="inline ml-6">
              <button
                class="text-project-green font-bold focus:outline-none"
                @click="clearFilters"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </transition>
      <div class="job-list">
        <div v-if="!listVisible">
          <job-list-skeleton />
        </div>
        <transition name="fade">
          <div v-if="listVisible">
            <job-list v-for="item in dataShow" :key="item.id" :data="item" />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import JobList from "~/components/job-listing/jobList.vue";
import JobListSkeleton from "~/components/job-listing/jobListSkeleton.vue";
export default {
  components: { JobList, JobListSkeleton },
  setup() {},
  data() {
    return {
      dataShow: [],
      data: [],
      listVisible: false,
      filterVisible: false,
    };
  },
  computed: {
    ...mapGetters({
      isMobileView: "isMobileView",
      filters: "filters",
    }),
  },
  watch: {
    data: function (val, oldVal) {
      if (this.data) {
        this.listVisible = true;
      } else {
        this.listVisible = false;
      }
    },
    filters: function (val, oldVal) {
      if (this.filters.length > 0) {
        this.filterVisible = true;
        this.dataShow = [];
        this.data.forEach((elementData) => {
          this.filters.forEach((elementFilters) => {
            if (elementData.languages.includes(elementFilters)) {
              if (!this.dataShow.includes(elementData)) {
                this.dataShow.push(elementData);
              }
            }
          });
        });
      } else {
        this.filterVisible = false;
        this.dataShow = this.data;
      }
    },
  },
  methods: {
    async getData() {
      try {
        await this.$axios
          .get("https://run.mocky.io/v3/00f9c51e-42e1-4b49-8b63-2fe3d62d6d13")
          .then((response) => {
            this.data = response.data;
            this.dataShow = this.data;
            // console.log(this.data);
          });
      } catch (e) {
        console.log(e);
      }
    },

    removeFilters(item) {
      this.$store.commit("removeFilters", item);
    },

    clearFilters() {
      this.$store.commit("removeAllFilters");
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style scoped>
.bg-header {
  background-color: #5da5a4;
}

.bg-container {
  background-color: #f0fafb;
}

.filter-position {
  position: absolute;
  top: -106px;
  left: 0px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
