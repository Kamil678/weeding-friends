<template>
  <a :href="href" class="contact-box">
    <div class="contact-box__icon-container">
      <i class="contact-box__icon-container__icon" :class="icon"></i>
    </div>
    <span class="contact-box__title">{{ title }}</span>
    <!-- <span class="contact-box__data">{{ data }}</span> -->
  </a>
</template>
<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss">
.contact-box {
  text-decoration: none;
  background-color: $gray-color;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  //width: 300px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &__icon-container {
    width: 80px;
    height: 80px;
    background-color: $primary-color;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &__icon {
      font-size: 30px;
    }
  }

  &__title {
    margin: 20px 0 10px 0;
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
  }
}
</style>
