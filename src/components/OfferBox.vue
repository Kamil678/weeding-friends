<template>
  <div class="offer-container" :class="offer.rightImage ? 'image-right' : ''">
    <div class="offer-image">
      <img :src="offer.src" :alt="offer.alt" />
    </div>
    <div class="offer-info">
      <h3 class="offer-title">{{ offer.title }}</h3>
      <p class="offer-text">{{ offer.firstText }}</p>
      <p class="offer-text">{{ offer.secondText }}</p>
      <div v-if="showMoreInfo" v-html="offer.moreInfo"></div>
      <button @click="showMoreInfo = !showMoreInfo" class="see-more-offer">
        {{ showMoreInfo ? $t("seeLess") : $t("seeMore") }}
      </button>
    </div>
  </div>
</template>
<script setup>
import Button from "./Button.vue";
import { defineProps, ref } from "vue";

const props = defineProps({
  offer: {
    type: Object,
    required: true,
  },
  rightImage: {
    type: Boolean,
    default: false,
  },
});

const showMoreInfo = ref(false);
</script>

<style lang="scss">
.offer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  @media (min-width: $xl-screen) {
    flex-direction: row;
    align-items: flex-start;
  }

  &.image-right {
    @media (min-width: $xl-screen) {
      flex-direction: row-reverse;
    }

    .offer-image {
      &::before {
        top: 20px;
        left: 20px;

        @media (min-width: $md-screen) {
          top: 50px;
          left: 50px;
        }
      }
    }

    .offer-info {
      margin-right: 0;
      margin-left: 0;

      @media (min-width: $xl-screen) {
        margin-left: -50px;
      }
    }
  }

  .offer-image {
    position: relative;
    display: inline-block;

    &::before {
      content: "";
      position: absolute;
      top: 20px;
      left: -20px;
      width: 100%;
      height: 100%;
      background-color: $primary-color;
      border-radius: 10px;

      @media (min-width: $md-screen) {
        top: 50px;
        left: -50px;
      }
    }

    img {
      display: block;
      position: relative;
      z-index: 1;
      height: 160px;
      border-radius: 10px;

      @media (min-width: $sm-screen) {
        height: 250px;
      }

      @media (min-width: $md-screen) {
        height: 350px;
      }

      @media (min-width: $xxl-screen) {
        height: 450px;
      }
    }
  }

  .offer-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-right: 0;

    @media (min-width: $md-screen) {
      max-width: 700px;
    }

    @media (min-width: $xl-screen) {
      margin-right: -50px;
      max-width: auto;
    }

    @media (min-width: $xxl-screen) {
      gap: 20px;
    }

    .offer-title {
      margin-bottom: 10px;
      font-size: 24px;
      line-height: 28px;
      text-transform: uppercase;
      font-weight: 500;
      text-align: center;

      @media (min-width: $md-screen) {
        margin-top: 30px;
        font-size: 34px;
        line-height: 38px;
      }

      @media (min-width: $xl-screen) {
        text-align: left;
        margin-top: 0;
      }
    }

    .offer-text,
    .in-package,
    .service-list {
      font-size: 16px;
      line-height: 20px;
      text-align: center;

      @media (min-width: $md-screen) {
        font-size: 18px;
        line-height: 22px;
      }

      @media (min-width: $xl-screen) {
        text-align: left;
      }
    }

    .in-package {
      font-weight: 500;
    }

    .service-list {
      margin: 10px 0 0 30px;
    }
  }

  .see-more-offer {
    border: none;
    background-color: $primary-color;
    width: fit-content;
    padding: 15px 30px;
    border-radius: 10px;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 600;
    text-decoration: none;
    color: #000;
    align-self: center;
    margin-top: 10px;
  }
}
</style>
