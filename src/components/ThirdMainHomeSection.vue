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
import Button from "./Button.vue";
import BasicOfferBox from "./BasicOfferBox.vue";

const offers = [
  {
    id: 1,
    src: new URL("../assets/basic-offer-1.jpg", import.meta.url).href,
    alt: "Holding hands with a wedding ring",
    title: "Tekst 1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    src: new URL("../assets/basic-offer-2.png", import.meta.url).href,
    alt: "Bride and groom",
    title: "Tekst 2",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    src: new URL("../assets/basic-offer-3.png", import.meta.url).href,
    alt: "Wedding cake",
    title: "Tekst 3",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
      line-height: 444px;
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

    @media (min-width: $xl-screen) {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    }
  }

  .see-more-btn {
    text-align: center;
  }
}
</style>
