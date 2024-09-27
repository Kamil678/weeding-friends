<template>
  <section class="carousel">
    <div class="carousel__inner">
      <CarouselIndicators
        v-if="indicators"
        :total="slides.length"
        :current-index="currentSlide"
        @switch-image="switchSlide($event)"
      />
      <CarouselItem
        v-for="(slide, index) in slides"
        :slide="slide"
        :key="`item-${index}`"
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
      />
      <h1 class="quote">
        {{ $t("quote") }}
      </h1>
      <CarouselControls
        v-if="controls"
        @prevImage="clickPrevImage"
        @nextImage="clickNextImage"
      />
    </div>
  </section>
  <div class="quote-container">
    <h1 class="quote quote--small-screen">
      {{ $t("quote") }}
    </h1>
  </div>
</template>
<script setup>
import CarouselItem from "./CarouselItem.vue";
import CarouselControls from "./CarouselControls.vue";
import CarouselIndicators from "./CarouselIndicators.vue";
import { defineProps, ref, onBeforeUnmount, onMounted } from "vue";

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  controls: {
    type: Boolean,
    deafult: false,
  },
  indicators: {
    type: Boolean,
    deafult: false,
  },
  interval: {
    type: Number,
    deafult: 4000,
  },
});

const currentSlide = ref(0);
const slideInterval = ref(null);
const direction = ref("right");

const setCurrentSlide = (index) => {
  currentSlide.value = index;
};

const clickPrevImage = (step = -1) => {
  const index =
    currentSlide.value > 0
      ? currentSlide.value + step
      : props.slides.length - 1;
  setCurrentSlide(index);
  direction.value = "left";
  startSlideTimer();
};

const next = (step = 1) => {
  const index =
    currentSlide.value < props.slides.length - 1
      ? currentSlide.value + step
      : 0;
  setCurrentSlide(index);
  direction.value = "right";
};

const clickNextImage = (step = 1) => {
  next(step);
  startSlideTimer();
};

const startSlideTimer = () => {
  stopSlideTimer();
  slideInterval.value = setInterval(() => {
    next();
  }, props.interval);
};

const stopSlideTimer = () => {
  clearInterval(slideInterval.value);
};

const switchSlide = (index) => {
  const step = index - currentSlide.value;

  if (step > 0) {
    clickNextImage(step);
  } else {
    clickPrevImage(step);
  }
};

onMounted(() => {
  startSlideTimer();
});

onBeforeUnmount(() => {
  stopSlideTimer();
});
</script>

<style lang="scss">
.carousel {
  display: flex;
  justify-content: center;
  width: 100%;

  &__inner {
    height: 100%;
    width: 100%;
    position: relative;
    height: calc(100vh - 100px);
    overflow: hidden;
  }
}

.quote-container {
  padding: 50px;

  @media (min-width: $lg-screen) {
    padding: 0;
  }
}

.quote {
  display: none;
  position: absolute;
  font-family: "EB Garamond", serif;
  font-weight: 600;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 50px;
  color: #fff;
  width: 100%;
  padding: 0 30px;

  @media (min-width: $lg-screen) {
    display: block;
  }

  &--small-screen {
    display: block;
    position: relative;
    left: 0;
    transform: translateX(0);
    color: $primary-color;
    font-size: 30px;
    line-height: 36px;

    @media (min-width: $md-screen) {
      font-size: 40px;
      line-height: 46px;
    }

    @media (min-width: $lg-screen) {
      display: none;
    }
  }
}
</style>
