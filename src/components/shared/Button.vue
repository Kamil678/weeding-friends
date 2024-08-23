<template>
  <RouterLink :to="href" @click="$emit('handleClick')" class="basic-button">{{
    text
  }}</RouterLink>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

defineEmits(["handleClick"]);
</script>

<style lang="scss">
.basic-button {
  border: none;
  background-color: $primary-color;
  width: fit-content;
  padding: 10px 25px;
  border-radius: 10px;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  color: #000;

  @media (min-width: $md-screen) {
    font-size: 16px;
    line-height: 18px;
    padding: 15px 30px;
  }
}
</style>
