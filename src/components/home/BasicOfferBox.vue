<template>
  <div class="basic-offer-container">
    <img :src="offer.src" :alt="offer.alt" />
    <div class="basic-ofer-info-container">
      <h3 class="title">{{ offer.title }}</h3>
      <p class="text">{{ offer.text }}</p>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  offer: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss">
.basic-offer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 30px;

  img {
    width: 180px;
    border-radius: 50%;
    border: 3px solid $primary-color;
    text-align: center;

    @media (min-width: $sm-screen) {
      width: 230px;
    }

    @media (min-width: $md-screen) {
      width: 300px;
    }
  }
  .basic-ofer-info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    .title,
    .text {
      text-align: center;
    }

    .title {
      font-size: 26px;
      line-height: 30px;
      //margin-bottom: 20px;
      font-family: "Caudex", serif;
    }
  }
}
</style>
