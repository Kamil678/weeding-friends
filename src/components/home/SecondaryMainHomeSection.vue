<template>
  <section class="basic-info-container">
    <h1 class="basic-info-container__title">
      {{ $t("welcomeTitleHomePagePart1") }}
      <span class="name">{{ $t("name") }}</span
      >,<br /><span>{{ $t("welcomeTitleHomePagePart2") }}</span>
    </h1>
    <div class="basic-info-container__info">
      <div
        class="basic-info-container__info__owner-image basic-info-container__info__owner-image--first"
      >
        <img
          src="../../assets/home/first-image-second-main-section.jpg"
          alt="First image owners weeding friends"
        />
      </div>
      <div class="basic-info-container__info__text-container">
        <p>
          {{ $t("firstTextInWelcomeHomePage") }}
        </p>
        <p v-html="$t('secondTextInWelcomeHomePage')"></p>
        <p v-html="$t('thirdTextInWelcomeHomePage')"></p>
        <p>
          {{ $t("fourthTextInWelcomeHomePage") }}
          <br />
          <span class="other-font">
            {{ $t("fifthTextInWelcomeHomePage") }}
          </span>
        </p>
        <p v-html="$t('sixthTextInWelcomeHomePage')"></p>
        <Button
          :text="$t('buttonTextInWelcomeHomePage')"
          href="/about"
          class="basic-info-container__info__text-container__know-us-better"
        />
      </div>
      <div
        class="basic-info-container__info__owner-image basic-info-container__info__owner-image--second"
      >
        <img
          src="../../assets/home/second-image-second-main-section.jpg"
          alt="Second image owners weeding friends"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import Button from "../shared/Button.vue";
</script>

<style lang="scss">
.basic-info-container {
  background-color: $gray-color;
  padding: 3.125rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: $md-screen) {
    padding: 5rem 2rem;
  }

  &__title {
    font-family: "EB Garamond", serif;
    font-size: 50px;
    line-height: 56px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 3.125rem;
    font-size: 30px;
    line-height: 36px;

    @media (min-width: $md-screen) {
      font-size: 40px;
      line-height: 46px;
      margin-bottom: 5rem;
    }

    @media (min-width: $lg-screen) {
      font-size: 50px;
      line-height: 56px;
    }

    .name {
      text-transform: uppercase;
      font-weight: 800;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: $sm-screen) {
      width: 70%;
    }

    @media (min-width: $xl-screen) {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      max-width: 1400px;
      width: 100%;
    }

    @media (min-width: $xxl-screen) {
      max-width: 1600px;
    }

    &__text-container {
      position: relative;
      width: 100%;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
      padding: 20px;
      text-align: center;
      font-weight: 400;
      line-height: 20px;

      @media (min-width: $lg-screen) {
        padding: 50px;
      }

      @media (min-width: $xxl-screen) {
        min-height: 700px;
      }

      &__know-us-better {
        margin-top: 30px;
      }

      p {
        span {
          &.italic {
            font-weight: 400;
            font-style: italic;
          }

          &.name {
            text-transform: uppercase;
            font-weight: 600;
          }
        }
      }
    }

    &__owner-image {
      z-index: 2;
      text-align: center;

      @media (min-width: $xl-screen) {
        text-align: left;
      }

      img {
        width: 100%;

        @media (min-width: $xl-screen) {
          width: 100%;
        }
      }

      &--first {
        margin-right: 0;

        @media (min-width: $xl-screen) {
          margin-right: -30px;
        }
      }

      &--second {
        margin-left: 0;

        @media (min-width: $xl-screen) {
          margin-left: -30px;
        }
      }
    }
  }
}
</style>
