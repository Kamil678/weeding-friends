<template>
  <main class="page home-page">
    <Slider />
    <SecondaryMainHomeSection />
    <ThirdMainHomeSection />
  </main>
</template>
<script setup>
import Slider from "../components/home/Slider.vue";
import SecondaryMainHomeSection from "../components/home/SecondaryMainHomeSection.vue";
import ThirdMainHomeSection from "../components/home/ThirdMainHomeSection.vue";
</script>

<style lang="scss">
.home-page {
  margin-top: 100px;
}
</style>
