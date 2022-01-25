<template>
  <div class="min-h-screen overflow-hidden text-gray-800">
    <div class="absolute navbar-desktop bg-white">
      <div
        class="
          sm:container sm:mx-auto
          flex flex-row
          gap-8
          py-2
          h-full
          items-center
        "
      >
        <div class="font-black text-xl">fachril.</div>
        <div
          class="flex flex-row justify-center items-center w-full gap-12 h-8"
        >
          <div
            class="
              font-black
              h-full
              border-b-2 border-transparent
              transition-all
              ease-in-out
              duration-1000
              cursor-pointer
            "
            :class="{ 'border-gray-800': activeMenu == 'home' }"
            @click="setActive('home')"
          >
            home
          </div>
          <div
            class="
              font-black
              h-full
              border-b-2 border-transparent
              transition-all
              ease-in-out
              duration-1000
              cursor-pointer
            "
            :class="{ 'border-gray-800': activeMenu == 'contactMe' }"
            @click="setActive('contactMe')"
          >
            contact me
          </div>
        </div>
        <div class="flex flex-row gap-4 text-2xl">
          <a href="https://www.instagram.com/fachrilzulfidar/" target="_blank">
            <div
              class="
                w-10
                h-10
                bg-white
                hover:bg-blue-100 hover:text-blue-500
                rounded-full
                flex
                items-center
                justify-center
                transition-all
                ease-in-out
                duration-500
                cursor-pointer
              "
            >
              <i class="bx bxl-instagram"></i>
            </div>
          </a>

          <a href="https://dribbble.com/fachril21" target="_blank">
            <div
              class="
                w-10
                h-10
                bg-white
                hover:bg-blue-100 hover:text-blue-500
                rounded-full
                flex
                items-center
                justify-center
                transition-all
                ease-in-out
                duration-500
                cursor-pointer
              "
            >
              <i class="bx bxl-dribbble"></i>
            </div>
          </a>

          <a href="https://github.com/fachril21" target="_blank">
            <div
              class="
                w-10
                h-10
                bg-white
                hover:bg-blue-100 hover:text-blue-500
                rounded-full
                flex
                items-center
                justify-center
                transition-all
                ease-in-out
                duration-500
                cursor-pointer
              "
            >
              <i class="bx bxl-github" style=""></i>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="absolute content-desktop">
      <transition name="fade">
        <div v-if="activeMenu == 'home'" class="absolute top-0 h-screen w-full">
          <home />
        </div>
      </transition>
      <transition name="fade">
        <div
          v-if="activeMenu == 'contactMe'"
          class="absolute top-0 h-screen w-full"
        >
          <contact-me />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Home from "@/components/dashboard/home.vue";
import ContactMe from "~/components/dashboard/contactMe.vue";

export default {
  components: {
    Home,
    ContactMe,
  },
  data() {
    return {
      activeMenu: "home",
    };
  },
  computed: {
    ...mapGetters({
      isMobileView: "isMobileView",
    }),
  },
  methods: {
    setActive(value) {
      this.activeMenu = value;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.navbar-desktop {
  height: 72px;
  width: 100%;
  top: 0px;
}

.content-desktop {
  top: 72px;
  width: 100%;
  min-height: 100vh;
}

.container-items {
  width: 100%;
}

.items {
  width: max-content;
}

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
} */
/* ======================================= */

.fade-enter-active {
  transition: all 1s ease-in-out;
}
.fade-leave-active {
  transition: all 1s ease-in-out;
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(50px);
  opacity: 0;
}
/* ======================================= */
/* .fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
} */
</style>
