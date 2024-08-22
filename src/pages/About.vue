<template>
  <div class="page page-wrap about-page">
    <h1 class="page-title">{{ $t("navAboutUs") }}</h1>
    <div class="about-us-wrap">
      <div class="about-container first">
        <div class="info-container">
          <h2 class="owner-name">Ewelina Komenda</h2>
          <p class="info">{{ $t("owner1FirstInfo") }}</p>
          <p class="info">{{ $t("owner1SecondInfo") }}</p>
          <p class="info">{{ $t("owner1ThirdInfo") }}</p>
          <p class="info">{{ $t("owner1FourthInfo") }}</p>
          <p class="info">{{ $t("owner1FifthInfo") }}</p>
          <p class="info">{{ $t("owner1SixthInfo") }}</p>
          <p class="info">{{ $t("owner1SeventhInfo") }}</p>
          <Button
            :text="$t('contactMe')"
            href="/contact"
            class="contact-me-btn"
          />
        </div>
        <img src="../assets/about/owner-1.jpg" alt="Photo showing Ewelina" />
      </div>
      <div class="about-container second">
        <img src="../assets/about/owner-2.jpg" alt="Photo showing Magdalena" />
        <div class="info-container">
          <h2 class="owner-name">Magdalena Durbacz</h2>
          <p class="info">{{ $t("owner2FirstInfo") }}</p>
          <p class="info">{{ $t("owner2SecondInfo") }}</p>
          <p class="info">{{ $t("owner2ThirdInfo") }}</p>
          <p class="info">{{ $t("owner2FourthInfo") }}</p>
          <p class="info">{{ $t("owner2FifthInfo") }}</p>
          <p class="info">{{ $t("owner2SixthInfo") }}</p>
          <Button
            :text="$t('contactMe')"
            href="/contact"
            class="contact-me-btn"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Button from "../components/Button.vue";
</script>

<style lang="scss">
.about-page {
  .about-us-wrap {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;
    background-color: transparent;

    &.first {
      padding-left: 30px;
    }

    &.second {
      padding-right: 30px;
    }

    @media (min-width: $md-screen) {
      max-width: 600px;
    }

    @media (min-width: $lg-screen) {
      max-width: 1200px;
      //margin-top: 3.125rem;
      background-color: $gray-color;
    }

    @media (min-width: $xl-screen) {
      max-width: 1200px;
    }

    @media (min-width: $xxl-screen) {
      max-width: 1200px;
    }

    .about-container {
      display: flex;
      flex-direction: column;
      align-items: center;

      &.first {
        flex-direction: column-reverse;
        margin-bottom: 50px;
      }

      &.second {
        grid-template-columns: 1fr 1fr;
      }

      @media (min-width: $lg-screen) {
        flex-direction: row;
        align-items: center;

        &.first {
          flex-direction: row;
          margin-bottom: 0;
        }

        &.second {
          grid-template-columns: 1fr 1fr;
        }
      }

      img {
        width: 100%;

        @media (min-width: $lg-screen) {
          width: 50%;
        }
      }

      .info-container {
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

        .owner-info {
          margin-bottom: 20px;
          font-size: 34px;
          line-height: 38px;
          text-transform: uppercase;
          font-weight: 500;
        }

        .info {
          font-size: 16px;
          line-height: 20px;
        }

        .info,
        .owner-name {
          text-align: center;

          @media (min-width: $lg-screen) {
            text-align: left;
          }
        }

        .contact-me-btn {
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
}
</style>
