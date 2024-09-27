<template>
  <div class="page page--with-padding page--gallery">
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
    src: new URL("../assets/gallery/vertical/image-1.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 1",
  },
  {
    id: 2,
    src: new URL("../assets/gallery/vertical/image-2.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 2",
  },
  {
    id: 3,
    src: new URL("../assets/gallery/vertical/image-3.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 3",
  },
  {
    id: 4,
    src: new URL("../assets/gallery/vertical/image-4.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 4",
  },
  {
    id: 5,
    src: new URL("../assets/gallery/vertical/image-5.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 5",
  },
  {
    id: 6,
    src: new URL("../assets/gallery/vertical/image-6.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 6",
  },
  {
    id: 7,
    src: new URL("../assets/gallery/vertical/image-7.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 7",
  },
  {
    id: 8,
    src: new URL("../assets/gallery/vertical/image-8.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 8",
  },
  {
    id: 9,
    src: new URL("../assets/gallery/vertical/image-9.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 9",
  },
  {
    id: 10,
    src: new URL("../assets/gallery/vertical/image-10.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 10",
  },
  {
    id: 11,
    src: new URL("../assets/gallery/vertical/image-11.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 11",
  },
  {
    id: 12,
    src: new URL("../assets/gallery/vertical/image-12.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 12",
  },
  {
    id: 13,
    src: new URL("../assets/gallery/vertical/image-13.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 13",
  },
  {
    id: 14,
    src: new URL("../assets/gallery/vertical/image-14.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 14",
  },
  {
    id: 15,
    src: new URL("../assets/gallery/vertical/image-15.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 15",
  },
  {
    id: 16,
    src: new URL("../assets/gallery/vertical/image-16.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 16",
  },
  {
    id: 17,
    src: new URL("../assets/gallery/vertical/image-17.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 17",
  },
  {
    id: 18,
    src: new URL("../assets/gallery/vertical/image-18.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 18",
  },
  {
    id: 19,
    src: new URL("../assets/gallery/vertical/image-19.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 19",
  },
  {
    id: 20,
    src: new URL("../assets/gallery/vertical/image-20.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 20",
  },
  {
    id: 21,
    src: new URL("../assets/gallery/vertical/image-21.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 21",
  },
  {
    id: 22,
    src: new URL("../assets/gallery/vertical/image-22.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 22",
  },
  {
    id: 23,
    src: new URL("../assets/gallery/vertical/image-23.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 23",
  },
  {
    id: 24,
    src: new URL("../assets/gallery/vertical/image-24.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 24",
  },
  {
    id: 25,
    src: new URL("../assets/gallery/vertical/image-25.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 25",
  },
  {
    id: 26,
    src: new URL("../assets/gallery/vertical/image-26.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 26",
  },
  {
    id: 27,
    src: new URL("../assets/gallery/horizontal/image-1.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 27",
  },
  {
    id: 28,
    src: new URL("../assets/gallery/horizontal/image-2.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 28",
  },
  {
    id: 29,
    src: new URL("../assets/gallery/horizontal/image-3.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 29",
  },
  {
    id: 30,
    src: new URL("../assets/gallery/horizontal/image-4.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 30",
  },
  {
    id: 31,
    src: new URL("../assets/gallery/horizontal/image-5.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 31",
  },
  {
    id: 32,
    src: new URL("../assets/gallery/horizontal/image-6.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 32",
  },
  {
    id: 33,
    src: new URL("../assets/gallery/horizontal/image-7.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 33",
  },
  {
    id: 34,
    src: new URL("../assets/gallery/horizontal/image-8.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 34",
  },
  {
    id: 35,
    src: new URL("../assets/gallery/horizontal/image-9.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 35",
  },
  {
    id: 36,
    src: new URL("../assets/gallery/horizontal/image-10.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 36",
  },
  {
    id: 37,
    src: new URL("../assets/gallery/horizontal/image-11.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 37",
  },
  {
    id: 38,
    src: new URL("../assets/gallery/horizontal/image-12.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 38",
  },
  {
    id: 39,
    src: new URL("../assets/gallery/horizontal/image-13.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 39",
  },
  {
    id: 40,
    src: new URL("../assets/gallery/horizontal/image-14.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 40",
  },
  {
    id: 41,
    src: new URL("../assets/gallery/horizontal/image-15.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 41",
  },
  {
    id: 42,
    src: new URL("../assets/gallery/horizontal/image-16.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 42",
  },
  {
    id: 43,
    src: new URL("../assets/gallery/horizontal/image-17.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 43",
  },
  {
    id: 44,
    src: new URL("../assets/gallery/horizontal/image-18.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 44",
  },
  {
    id: 45,
    src: new URL("../assets/gallery/horizontal/image-19.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 45",
  },
  {
    id: 46,
    src: new URL("../assets/gallery/horizontal/image-20.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 46",
  },
  {
    id: 47,
    src: new URL("../assets/gallery/horizontal/image-21.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 47",
  },
  {
    id: 48,
    src: new URL("../assets/gallery/horizontal/image-22.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 48",
  },
  {
    id: 49,
    src: new URL("../assets/gallery/horizontal/image-23.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 49",
  },
  {
    id: 50,
    src: new URL("../assets/gallery/horizontal/image-24.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 50",
  },
  {
    id: 51,
    src: new URL("../assets/gallery/horizontal/image-25.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 51",
  },
  {
    id: 52,
    src: new URL("../assets/gallery/horizontal/image-26.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 52",
  },
  {
    id: 53,
    src: new URL("../assets/gallery/horizontal/image-27.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 53",
  },
  {
    id: 54,
    src: new URL("../assets/gallery/horizontal/image-28.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 54",
  },
  {
    id: 55,
    src: new URL("../assets/gallery/horizontal/image-29.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 55",
  },
  {
    id: 56,
    src: new URL("../assets/gallery/horizontal/image-30.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 56",
  },
  {
    id: 57,
    src: new URL("../assets/gallery/horizontal/image-31.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 57",
  },
  {
    id: 58,
    src: new URL("../assets/gallery/horizontal/image-32.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 58",
  },
  {
    id: 59,
    src: new URL("../assets/gallery/horizontal/image-33.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 59",
  },
  {
    id: 60,
    src: new URL("../assets/gallery/horizontal/image-34.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 60",
  },
  {
    id: 61,
    src: new URL("../assets/gallery/horizontal/image-35.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 61",
  },
  {
    id: 62,
    src: new URL("../assets/gallery/horizontal/image-36.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 62",
  },
  {
    id: 63,
    src: new URL("../assets/gallery/horizontal/image-37.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 63",
  },
  {
    id: 64,
    src: new URL("../assets/gallery/horizontal/image-38.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 64",
  },
  {
    id: 65,
    src: new URL("../assets/gallery/horizontal/image-39.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 65",
  },
  {
    id: 66,
    src: new URL("../assets/gallery/horizontal/image-40.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 66",
  },
  {
    id: 67,
    src: new URL("../assets/gallery/horizontal/image-41.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 67",
  },
  {
    id: 68,
    src: new URL("../assets/gallery/horizontal/image-42.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 68",
  },
  {
    id: 69,
    src: new URL("../assets/gallery/horizontal/image-43.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 69",
  },
  {
    id: 70,
    src: new URL("../assets/gallery/horizontal/image-44.jpg", import.meta.url)
      .href,
    alt: "Image from gallery 70",
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
