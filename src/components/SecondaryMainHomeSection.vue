<template>
  <section class="basic-info-container">
    <h1 class="basic-info-title">
      {{ $t("welcomeTitleHomePagePart1") }}
      <span class="name">{{ $t("name") }}</span
      >,<br /><span>{{ $t("welcomeTitleHomePagePart2") }}</span>
    </h1>
    <div class="basic-info">
      <div class="first-image owner-image">
        <img
          src="../assets/first-image-second-main-section.jpg"
          alt="First image owners weeding friends"
        />
      </div>
      <div class="text-container">
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
          class="know-us-better"
        />
      </div>
      <div class="second-image owner-image">
        <img
          src="../assets/second-image-second-main-section.jpg"
          alt="Second image owners weeding friends"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import Button from "./Button.vue";
</script>

<style lang="scss">
.basic-info-container {
  background-color: $gray-color;
  padding: 3.125rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: $md-screen) {
    padding: 5rem 2rem;
  }

  .basic-info-title {
    font-family: "Caudex", serif;
    font-size: 50px;
    line-height: 56px;
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
      color: $primary-color;
    }
  }

  .basic-info {
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

    .text-container {
      position: relative;
      width: 100%;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
      padding: 50px;
      text-align: center;
      font-weight: 300;
      line-height: 20px;

      @media (min-width: $xxl-screen) {
        min-height: 700px;
      }

      .know-us-better {
        margin-top: 30px;
      }

      p {
        span {
          font-weight: 500;

          &.other-font {
            font-family: "Caudex", serif;
            font-weight: 600;
            font-size: 18px;
            color: $primary-color;
          }

          &.italic {
            font-weight: 300;
            font-style: italic;
          }

          &.name {
            text-transform: uppercase;
            color: $primary-color;
            font-size: 18px;
          }
        }
      }
    }

    .owner-image {
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

      &.first-image {
        margin-right: 0;

        @media (min-width: $xl-screen) {
          margin-right: -30px;
        }
      }

      &.second-image {
        margin-left: 0;

        @media (min-width: $xl-screen) {
          margin-left: -30px;
        }
      }
    }
  }
}
</style>
