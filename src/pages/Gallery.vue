<template>
  <div class="page page--with-padding gallery-wrap">
    <h1 class="page__title">{{ $t("galleryText") }}</h1>
    <div class="gallery">
      <div v-for="(image, index) in images" :key="index" class="gallery__item">
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>
  </div>
</template>
<script setup>
const images = [
  {
    id: 1,
    src: new URL("../assets/gallery/image-1.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 2,
    src: new URL("../assets/gallery/image-2.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 3,
    src: new URL("../assets/gallery/image-3.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 4,
    src: new URL("../assets/gallery/image-4.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 5,
    src: new URL("../assets/gallery/image-5.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 6,
    src: new URL("../assets/gallery/image-6.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 7,
    src: new URL("../assets/gallery/image-7.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 8,
    src: new URL("../assets/gallery/image-8.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 9,
    src: new URL("../assets/gallery/image-9.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 10,
    src: new URL("../assets/gallery/image-10.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 11,
    src: new URL("../assets/gallery/image-11.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 12,
    src: new URL("../assets/gallery/image-12.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 13,
    src: new URL("../assets/gallery/image-13.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 14,
    src: new URL("../assets/gallery/image-14.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 15,
    src: new URL("../assets/gallery/image-15.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 16,
    src: new URL("../assets/gallery/image-16.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 17,
    src: new URL("../assets/gallery/image-17.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 18,
    src: new URL("../assets/gallery/image-18.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 19,
    src: new URL("../assets/gallery/image-19.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 20,
    src: new URL("../assets/gallery/image-20.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 21,
    src: new URL("../assets/gallery/image-21.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 22,
    src: new URL("../assets/gallery/image-22.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 23,
    src: new URL("../assets/gallery/image-23.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 24,
    src: new URL("../assets/gallery/image-24.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 25,
    src: new URL("../assets/gallery/image-25.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 26,
    src: new URL("../assets/gallery/image-26.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 27,
    src: new URL("../assets/gallery/image-27.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 28,
    src: new URL("../assets/gallery/image-28.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 29,
    src: new URL("../assets/gallery/image-29.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 30,
    src: new URL("../assets/gallery/image-30.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 31,
    src: new URL("../assets/gallery/image-31.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 32,
    src: new URL("../assets/gallery/image-32.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 33,
    src: new URL("../assets/gallery/image-33.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 34,
    src: new URL("../assets/gallery/image-34.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 35,
    src: new URL("../assets/gallery/image-35.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 36,
    src: new URL("../assets/gallery/image-36.jpg", import.meta.url).href,
    alt: "",
  },
  {
    id: 37,
    src: new URL("../assets/gallery/image-37.jpg", import.meta.url).href,
    alt: "",
  },
];
</script>

<style lang="scss">
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: $sm-screen) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media (min-width: $xl-screen) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }

  &__item {
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
