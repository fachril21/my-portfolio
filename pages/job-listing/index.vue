<template>
  <div class="bg-container h-full">
    <div class="header-job-listing bg-header">
      <img
        :src="
          isMobileView
            ? require('~/assets/job-listing/bg-header-mobile.svg')
            : require('~/assets/job-listing/bg-header-desktop.svg')
        "
        alt="header"
      />
    </div>
    <div class="sm:container sm:mx-auto py-24 px-24">
      <div class="job-list">
        <div v-if="!listVisible">
          <job-list-skeleton />
        </div>
        <div v-if="listVisible">
          <job-list v-for="item in data" :key="item.id" :data="item" />
        </div>
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
      data: [],
      listVisible: false,
    };
  },
  computed: {
    ...mapGetters({
      isMobileView: "isMobileView",
    }),
  },
  watch: {
    data: function (val, oldVal) {
      if (this.data) {
        this.listVisible = true;
        console.log(this.listVisible);
      }
      console.log("new: %s, old: %s", val, oldVal);
    },
  },
  methods: {
    async getData() {
      try {
        await this.$axios
          .get("https://run.mocky.io/v3/00f9c51e-42e1-4b49-8b63-2fe3d62d6d13")
          .then((response) => {
            this.data = response.data;
            console.log(this.data);
          });
      } catch (e) {
        console.log(e);
      }
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
</style>
