<template>
  <div class="page page--with-padding">
    <h1 class="page__title">{{ $t("navContact") }}</h1>
    <div class="contact-boxes">
      <ContactBox
        v-for="(contact, index) in contactData"
        :key="index"
        :icon="contact.icon"
        :title="contact.title"
        :data="contact.data"
        :href="contact.href"
      />
    </div>
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8961.554647561103!2d20.025055201142663!3d50.36505246103679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717a979b1df99af%3A0xa162768b2758e618!2sPartyzant%C3%B3w%2059%2C%2032-200%20Miech%C3%B3w!5e0!3m2!1sen!2spl!4v1724698903114!5m2!1sen!2spl"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="map__frame"
      ></iframe>
    </div>
  </div>
</template>
<script setup>
import ContactBox from "../components/contact/ContactBox.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const contactData = [
  {
    icon: "fa-regular fa-envelope",
    title: t("email"),
    data: "kontakt.weddingfriends@gmail.com",
    href: "mailto:kontakt.weddingfriends@gmail.com",
  },
  {
    icon: "fa-solid fa-phone",
    title: t("phone"),
    data: "663316266",
    href: "tel:+48663316266",
  },
  {
    icon: "fa-brands fa-facebook",
    title: "Facebook",
    data: "",
    href: "#",
  },
  {
    icon: "fa-brands fa-instagram",
    title: "Instagram",
    data: "",
    href: "#",
  },
];
</script>

<style lang="scss">
.contact-boxes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.map {
  margin-top: 50px;
  width: 100%;

  &__frame {
    width: 100%;
    height: 700px;
  }
}
</style>
