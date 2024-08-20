<template>
  <div class="page offer-page">
    <h1 class="page-title">{{ $t("navOffer") }}</h1>
    <div class="all-offers-wrap">
      <OfferBox v-for="(offer, index) in offers" :key="index" :offer="offer" />
    </div>
  </div>
</template>
<script setup>
import OfferBox from "../components/OfferBox.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const offers = [
  {
    id: 1,
    src: new URL("../assets/gallery/image-21.jpg", import.meta.url).href,
    alt: "The wall behind the bride and groom",
    title: t("offer1Title"),
    firstText: t("offer1FirstText"),
    secondText: t("offer1SecondText"),
    moreInfo: `
    <p class="in-package">${t("inPackage")}:</p>
    <ul class="service-list">
      <li>${t("offer1PackegeItem1")}</li>
      <li>${t("offer1PackegeItem2")}</li>
      <li>${t("offer1PackegeItem3")}</li>
      <li>${t("offer1PackegeItem4")}</li>
      <li>${t("offer1PackegeItem5")}</li>
      <li>${t("offer1PackegeItem6")}</li>
      <li>${t("offer1PackegeItem7")}</li>
      <li>${t("offer1PackegeItem8")}</li>
      <li>${t("offer1PackegeItem9")}</li>
      <li>${t("offer1PackegeItem10")}</li>
      <li>${t("offer1PackegeItem11")}</li>
      <li>${t("offer1PackegeItem12")}</li>
      <li>${t("offer1PackegeItem13")}</li>
      <li>${t("offer1PackegeItem14")}</li>
      <li>${t("offer1PackegeItem15")}</li>
    </ul>
    `,
    rightImage: false,
  },
  {
    id: 2,
    src: new URL("../assets/gallery/image-20.jpg", import.meta.url).href,
    alt: "Guest list board",
    title: t("offer1=2Title"),
    firstText: t("offer2FirstText"),
    secondText: t("offer2SecondText"),
    moreInfo: `
    <p class="in-package">${t("inPackage")}:</p>
    <ul class="service-list">
      <li>${t("offer2PackegeItem1")}</li>
      <li>${t("offer2PackegeItem2")}</li>
      <li>${t("offer2PackegeItem3")}</li>
      <li>${t("offer2PackegeItem4")}</li>
      <li>${t("offer2PackegeItem5")}</li>
      <li>${t("offer2PackegeItem6")}</li>
    </ul>
    `,
    rightImage: true,
  },
  {
    id: 3,
    src: new URL("../assets/gallery/image-24.jpg", import.meta.url).href,
    alt: "The wall behind the bride and groom",
    title: t("offer3Title"),
    firstText: t("offer3FirstText"),
    secondText: t("offer3SecondText"),
    moreInfo: `
    <p class="in-package">${t("inPackage")}:</p>
    <ul class="service-list">
      <li>${t("offer3PackegeItem1")}</li>
      <li>${t("offer3PackegeItem2")}</li>
      <li>${t("offer3PackegeItem3")}</li>
      <li>${t("offer3PackegeItem4")}</li>
      <li>${t("offer3PackegeItem5")}</li>
      <li>${t("offer3PackegeItem6")}</li>
      <li>${t("offer3PackegeItem7")}</li>
      <li>${t("offer3PackegeItem8")}</li>
      <li>${t("offer3PackegeItem9")}</li>
      <li>${t("offer3PackegeItem10")}</li>
    </ul>
    `,
    rightImage: false,
  },
  {
    id: 4,
    src: new URL("../assets/gallery/image-22.jpg", import.meta.url).href,
    alt: "The wall behind the bride and groom",
    title: t("offer4Title"),
    firstText: t("offer4FirstText"),
    moreInfo: `
    <p class="offer-text">${t("offer4AdditionalText1")}</p>
    <p class="offer-text">${t("offer4AdditionalText2")}</p>
    `,
    rightImage: true,
  },
  {
    id: 5,
    src: new URL("../assets/gallery/image-22.jpg", import.meta.url).href,
    alt: "The wall behind the bride and groom",
    title: t("offer5Title"),
    firstText: t("offer5FirstText"),
    moreInfo: `
    <p class="offer-text">${t("offer5AdditionalText1")}</p>
    <p class="offer-text">${t("offer5AdditionalText2")}</p>
    `,
    rightImage: false,
  },
  {
    id: 6,
    src: new URL("../assets/gallery/image-23.jpg", import.meta.url).href,
    alt: "The wall behind the bride and groom",
    title: t("offer6Title"),
    firstText: t("offer6FirstText"),
    moreInfo: `
    <p class="offer-text">${t("offer6AdditionalText1")}</p>
    <p class="offer-text">${t("offer6AdditionalText2")}</p>
    <p class="offer-text">${t("offer6AdditionalText3")}</p>
    `,
    rightImage: true,
  },
  {
    id: 7,
    src: new URL("../assets/gallery/image-22.jpg", import.meta.url).href,
    alt: "The wall behind the bride and groom",
    title: t("offer7Title"),
    firstText: t("offer7FirstText"),
    secondText: t("offer7SecondText"),
    moreInfo: `
    <p class="offer-text">${t("offer7AdditionalText1")}</p>
    <p class="offer-text">${t("offer7AdditionalText2")}</p>
    `,
    rightImage: false,
  },
  {
    id: 8,
    src: new URL("../assets/gallery/image-22.jpg", import.meta.url).href,
    alt: "The wall behind the bride and groom",
    title: t("offer8Title"),
    firstText: t("offer8FirstText"),
    rightImage: true,
  },
];
</script>

<style lang="scss">
.offer-page {
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 100px;
  max-width: 1600px;

  @media (min-width: $xl-screen) {
    margin-left: 80px;
    margin-right: 80px;
  }

  @media (min-width: $xxl-screen) {
    margin-left: auto;
    margin-right: auto;
    padding-left: 100px;
    padding-right: 100px;
  }

  .all-offers-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 100px;
  }
}
</style>
