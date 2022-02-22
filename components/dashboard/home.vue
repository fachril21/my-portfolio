<template>
  <div class="w-full min-h-screen sm:container sm:mx-auto">
    <div class="flex min-h-screen items-center gap-16">
      <div class="flex flex-row justify-center items-center w-2/4 h-full">
        <div class="pt-12">
          <img src="~/assets/dashboard/photo-bg.png" alt="" />
        </div>
      </div>
      <div class="flex flex-col w-2/4">
        <div class="flex flex-col my-4">
          <div class="text-sm lg:text-base">
            hello there, nice to meet you, i am
          </div>
          <div class="text-xl lg:text-5xl font-black mb-2">fachril.</div>
          <div class="font-semibold text-sm lg:text-base">
            Experienced User Interface, Experience Designer, and Frontend
            Developer with a demonstrated history of working in the information
            technology and services industry. Skilled in creating mockup design
            for product with good UX based on Basic Design Principal, Website
            Development, and Frontend Development. Strong engineering
            professional with a Bachelor's degree focused in Computer Science
            from University of Brawijaya.
          </div>
        </div>
        <div class="flex flex-col my-4">
          <div class="flex gap-8 justify-between items-center mb-8">
            <div class="title font-semibold text-xl">My Playground</div>
            <div class="flex gap-4">
              <button
                @click="onPrev"
                class="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-100 hover:text-blue-700 transition-all ease-in-out duration-300 text-xl focus:outline-none"
              >
                <i class="bx bx-chevron-left"></i>
              </button>
              <button
                @click="onNext"
                class="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-100 hover:text-blue-700 transition-all ease-in-out duration-300 text-xl focus:outline-none"
              >
                <i class="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>
          <div
            id="list-container"
            ref="listContainer"
            class="p-4 flex overflow-hidden gap-4"
          >
            <div
              id="list-items"
              ref="listItems"
              class="item"
              v-for="item in data"
              :key="item.id"
            >
              <div class="w-64">
                <a :href="item.url" target="_blank">
                  <div class="flex flex-col">
                    <img
                      class="w-full h-32 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 object-cover"
                      :src="require('~/assets/dashboard/' + item.image)"
                      :alt="item.title"
                    />
                    <div class="flex flex-col py-4">
                      <span class="font-black">
                        {{ item.title }}
                      </span>
                      <span class="text-sm text-gray-500">
                        {{ item.type }}
                      </span>
                      <span
                        v-if="item.type == 'Frontend Dev'"
                        class="text-sm text-gray-500"
                      >
                        <span v-if="item.breakpointDesktop">
                          <i class="bx bx-desktop"></i>
                        </span>
                        <span v-if="item.breakpointMobile">
                          <i class="bx bx-mobile"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      data: [
        {
          id: 1,
          type: "Frontend Dev",
          title: "Pricing Page",
          breakpointDesktop: true,
          breakpointMobile: false,
          image: "pricing-page.png",
          url: "https://price-page-fachril21.netlify.app/",
        },
        {
          id: 2,
          type: "Frontend Dev",
          title: "Job List",
          breakpointDesktop: true,
          breakpointMobile: true,
          image: "job-list.png",
          url: "https://job-listing-fachril21.netlify.app/",
        },
        {
          id: 3,
          type: "Frontend Dev",
          title: "Where in The World?",
          breakpointDesktop: true,
          breakpointMobile: true,
          image: "rest-countries.jpg",
          url: "https://where-in-the-world-fachril.herokuapp.com/",
        },
      ],
    };
  },
  methods: {
    onNext() {
      console.log("next");
      this.$refs.listContainer.scrollBy({
        top: 0,
        left: +500,
        behavior: "smooth",
      });
    },
    onPrev() {
      console.log("prev");
      this.$refs.listContainer.scrollBy({
        top: 0,
        left: -500,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  height: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #ffffff;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #a0aec0;
  border-radius: 8px;
  transition: all ease-in-out;
  transition-duration: 300ms;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #718096;
}
</style>
