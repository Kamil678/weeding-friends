<template>
  <div class="page page--with-padding about-page">
    <h1 class="page__title">{{ $t("navAboutUs") }}</h1>
    <div class="about-us">
      <div class="about-us__container about-us__container--first">
        <div class="about-us__container__info-container">
          <h2 class="about-us__container__info-container__owner-name">
            Ewelina Komenda
          </h2>
          <p class="about-us__container__info-container__info">
            {{ $t("owner1FirstInfo") }}
          </p>
          <p class="about-us__container__info-container__info">
            {{ $t("owner1SecondInfo") }}
          </p>
          <p class="about-us__container__info-container__info">
            {{ $t("owner1ThirdInfo") }}
          </p>
          <p class="about-us__container__info-container__info">
            {{ $t("owner1FourthInfo") }}
          </p>
          <p class="about-us__container__info-container__info">
            {{ $t("owner1FifthInfo") }}
          </p>
          <p class="about-us__container__info-container__info">
            {{ $t("owner1SixthInfo") }}
          </p>
          <p class="about-us__container__info-container__info">
            {{ $t("owner1SeventhInfo") }}
          </p>
          <a
            href="mailto:kontakt.weddingfriends@gmail.com"
            class="btn about-us__container__info-container__contact-me-btn"
            >{{ $t("contactMe") }}</a
          >
        </div>
        <img src="../assets/about/owner-1.jpg" alt="Photo showing Ewelina" />
      </div>
      <div class="about-us__container about-us__container--second">
        <img src="../assets/about/owner-2.jpg" alt="Photo showing Magdalena" />
        <div class="about-us__container__info-container">
          <h2 class="about-us__container__info-container__owner-name">
            Magdalena Durbacz
          </h2>
          <p class="about-us__container__info-container__info">
            {{ $t("owner2FirstInfo") }}
          </p>
          <p class="about-us__container__info-container__info">
            {{ $t("owner2SecondInfo") }}
          </p>
          <p class="about-us__container__info-container__info">
            {{ $t("owner2ThirdInfo") }}
          </p>
          <p class="about-us__container__info-container__info">
            {{ $t("owner2FourthInfo") }}
          </p>
          <p class="about-us__container__info-container__info">
            {{ $t("owner2FifthInfo") }}
          </p>
          <p class="about-us__container__info-container__info">
            {{ $t("owner2SixthInfo") }}
          </p>
          <a
            href="mailto:kontakt.weddingfriends@gmail.com"
            class="btn about-us__container__info-container__contact-me-btn"
            >{{ $t("contactMe") }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style lang="scss">
.about-us {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  background-color: transparent;

  @media (min-width: $md-screen) {
    max-width: 600px;
  }

  @media (min-width: $lg-screen) {
    max-width: 1200px;
    background-color: $gray-color;
  }

  @media (min-width: $xl-screen) {
    max-width: 1200px;
  }

  @media (min-width: $xxl-screen) {
    max-width: 1200px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;

    &--first {
      flex-direction: column-reverse;
      margin-bottom: 50px;
    }

    &--second {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: $lg-screen) {
      flex-direction: row;
      align-items: center;

      &--first {
        flex-direction: row;
        margin-bottom: 0;
      }

      &--second {
        grid-template-columns: 1fr 1fr;
      }
    }

    img {
      width: 100%;

      @media (min-width: $lg-screen) {
        width: 50%;
      }
    }

    &__info-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 30px 20px;
      background-color: $gray-color;

      @media (min-width: $lg-screen) {
        align-items: flex-start;
        padding: 20px 50px 20px 30px;
        gap: 10px;
      }

      @media (min-width: $xl-screen) {
        gap: 20px;
      }

      &__info {
        font-size: 16px;
        line-height: 20px;
      }

      &__info,
      &__owner-name {
        text-align: center;

        @media (min-width: $lg-screen) {
          text-align: left;
        }
      }

      &__contact-me-btn {
        margin-top: 30px;
        text-align: center;
        align-self: center;

        @media (min-width: $lg-screen) {
          margin-top: 15px;
        }

        @media (min-width: $xl-screen) {
          margin-top: 30px;
        }
      }
    }
  }
}
</style>
