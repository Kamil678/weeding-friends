<template>
  <main class="page home-page">
    <Slider />
    <SecondaryMainHomeSection />
    <ThirdMainHomeSection />
  </main>
</template>
<script setup>
import Slider from "../components/Slider.vue";
import SecondaryMainHomeSection from "../components/SecondaryMainHomeSection.vue";
import ThirdMainHomeSection from "../components/ThirdMainHomeSection.vue";
</script>

<style lang="scss">
.home-page {
  margin-top: 125px;
}
</style>
