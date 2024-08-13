<template>
  <div class="page about-page">
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
  padding: 50px 0 100px 0;

  .about-us-wrap {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 3.125rem;
    background-color: $gray-color;

    &.first {
      padding-left: 30px;
    }

    &.second {
      padding-right: 30px;
    }

    .about-container {
      display: grid;
      align-items: center;
      //gap: 50px;

      &.first {
        grid-template-columns: 1fr 1fr;
      }

      &.second {
        grid-template-columns: 1fr 1fr;
      }

      img {
        width: 100%;
      }

      .info-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        padding: 0 50px 0 30px;

        .owner-info {
          margin-bottom: 20px;
          font-size: 34px;
          line-height: 38px;
          text-transform: uppercase;
          font-weight: 500;
        }

        .info {
          font-size: 18px;
          line-height: 24px;
        }

        .contact-me-btn {
          margin-top: 30px;
          text-align: center;
          align-self: center;
        }
      }
    }
  }
}
</style>
