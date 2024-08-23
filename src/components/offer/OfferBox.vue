<template>
  <div class="offer" :class="{ 'offer--image-right': offer.rightImage }">
    <div class="offer__image-container">
      <img
        :src="offer.src"
        :alt="offer.alt"
        class="offer__image-container__image"
      />
    </div>
    <div class="offer__info">
      <h3 class="offer__info__title">{{ offer.title }}</h3>
      <p class="offer__info__text">{{ offer.firstText }}</p>
      <p v-if="offer.secondText" class="offer__info__text">
        {{ offer.secondText }}
      </p>
      <div
        v-if="(showMoreInfo && offer.moreInfo) || !offer.hasShowMoreButton"
        v-html="offer.moreInfo"
      ></div>
      <button
        v-if="offer.hasShowMoreButton"
        @click="showMoreInfo = !showMoreInfo"
        class="offer__info__see-more-btn"
      >
        {{ showMoreInfo ? $t("seeLess") : $t("seeMore") }}
      </button>
    </div>
  </div>
</template>
<script setup>
import Button from "../shared/Button.vue";
import { defineProps, ref } from "vue";

const props = defineProps({
  offer: {
    type: Object,
    required: true,
  },
});

const showMoreInfo = ref(false);
</script>

<style lang="scss">
.offer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  @media (min-width: $xl-screen) {
    flex-direction: row;
    align-items: flex-start;
  }

  &--image-right {
    @media (min-width: $xl-screen) {
      flex-direction: row-reverse;
    }

    .offer__image-container {
      &::before {
        top: 20px;
        left: 20px;

        @media (min-width: $md-screen) {
          top: 50px;
          left: 50px;
        }
      }
    }

    .offer__info {
      margin-right: 0;
      margin-left: 0;

      @media (min-width: $xl-screen) {
        margin-left: -50px;
      }
    }
  }

  &__image-container {
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

    &__image {
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

  &__info {
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

    &__title {
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

    &__text {
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      font-weight: 300;

      @media (min-width: $md-screen) {
        font-size: 18px;
        line-height: 22px;
      }

      @media (min-width: $xl-screen) {
        text-align: left;
      }

      &--in-package {
        font-weight: 500;
      }

      &--service-list {
        text-align: left;
        margin: 10px 0 0 30px;
      }

      &--more-text {
        margin-bottom: 10px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    &__see-more-btn {
      border: none;
      background-color: $primary-color;
      width: fit-content;
      padding: 15px 30px;
      border-radius: 10px;
      font-size: 16px;
      text-transform: uppercase;
      cursor: pointer;
      font-weight: 500;
      text-decoration: none;
      color: #000;
      align-self: center;
      margin-top: 10px;
    }
  }
}
</style>
