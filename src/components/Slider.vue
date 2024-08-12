<template>
  <Carousel :slides="slides" indicators controls :interval="4000" />
</template>
<script setup>
import Carousel from "./carousel/Carousel.vue";

const slides = [
  {
    id: 1,
    src: new URL("../assets/slides/image-1.jpg", import.meta.url).href,
    alt: "The newlyweds cuddling",
  },
  {
    id: 2,
    src: new URL("../assets/slides/image-2.jpg", import.meta.url).href,
    alt: "The newlyweds first dance",
  },
  {
    id: 3,
    src: new URL("../assets/slides/image-3.jpg", import.meta.url).href,
    alt: "The newlyweds in a car",
  },
  {
    id: 4,
    src: new URL("../assets/slides/image-4.jpg", import.meta.url).href,
    alt: "The newlyweds' car",
  },
];
</script>

<style lang="scss"></style>
