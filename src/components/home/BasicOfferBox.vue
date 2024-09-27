<template>
  <div class="basic-offer">
    <img :src="offer.src" :alt="offer.alt" />
    <div class="basic-offer__info">
      <p class="basic-offer__info__text">{{ offer.text }}</p>
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
.basic-offer {
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

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    &__text {
      text-align: center;
      font-weight: 400;
    }
  }
}
</style>
