<template>
  <section class="basic-offers-wrap">
    <h2 class="basic-offer-title">Oferta</h2>
    <div class="basic-offers-container">
      <BasicOfferBox v-for="offer in offers" :key="offer.id" :offer="offer" />
    </div>
    <Button :text="$t('seeMore')" href="/offer" class="see-more-btn" />
  </section>
</template>
<script setup>
import Button from "../shared/Button.vue";
import BasicOfferBox from "./BasicOfferBox.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const offers = [
  {
    id: 1,
    src: new URL("../../assets/home/basic-offer-1.jpg", import.meta.url).href,
    alt: "Holding hands with a wedding ring",
    title: "Tekst 1",
    text: t("basicOfferFirstText"),
  },
  {
    id: 2,
    src: new URL("../../assets/home/basic-offer-2.png", import.meta.url).href,
    alt: "Bride and groom",
    title: "Tekst 2",
    text: t("basicOfferSecondText"),
  },
  {
    id: 2,
    src: new URL("../../assets/home/basic-offer-3.png", import.meta.url).href,
    alt: "Wedding cake",
    title: "Tekst 3",
    text: t("basicOfferThirdText"),
  },
];
</script>

<style lang="scss">
.basic-offers-wrap {
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: $md-screen) {
    padding: 80px 100px;
  }

  .basic-offer-title {
    font-size: 34px;
    line-height: 38px;
    text-align: center;
    font-family: "Caudex", serif;

    @media (min-width: $md-screen) {
      font-size: 40px;
      line-height: 44px;
    }

    @media (min-width: $lg-screen) {
      font-size: 44px;
      line-height: 48px;
    }
  }

  .basic-offers-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin: 50px 0;
    max-width: 1400px;

    @media (min-width: $xl-screen) {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }
  }

  .see-more-btn {
    text-align: center;
  }
}
</style>
