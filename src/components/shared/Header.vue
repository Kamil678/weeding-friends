<template>
  <header class="header">
    <nav class="header__nav">
      <router-link to="/" class="header__logo">
        <img
          src="../../assets//shared/logo.png"
          alt="Wedding friends logo"
          class="header__logo__image"
        />
      </router-link>
      <ul
        :class="{ 'header__nav__list--open': openMenu }"
        class="header__nav__list"
      >
        <li>
          <button @click="openMenu = false" class="header__nav__close-menu-btn">
            &times;
          </button>
        </li>
        <li class="header__nav__list__element">
          <router-link
            to="/"
            class="header__nav__list__link"
            active-class="active"
            @click="openMenu = false"
            >{{ $t("navHome") }}</router-link
          >
        </li>
        <li class="header__nav__list__element">
          <router-link
            to="/about"
            class="header__nav__list__link"
            active-class="active"
            @click="openMenu = false"
            >{{ $t("navAboutUs") }}</router-link
          >
        </li>
        <li class="header__nav__list__element">
          <router-link
            to="/offer"
            class="header__nav__list__link"
            active-class="active"
            @click="openMenu = false"
            >{{ $t("navOffer") }}</router-link
          >
        </li>
        <li class="header__nav__list__element">
          <router-link
            to="/gallery"
            class="header__nav__list__link"
            active-class="active"
            @click="openMenu = false"
            >{{ $t("navGallery") }}</router-link
          >
        </li>
        <!-- <li class="nav-list-element">
          <router-link
            to="/opinions"
            class="nav-list-link"
            active-class="active"
            @click="openMenu = false"
            >{{ $t("navOpinions") }}</router-link
          >
        </li> -->
        <li class="header__nav__list__element">
          <router-link
            to="/contact"
            class="header__nav__list__link"
            active-class="active"
            @click="openMenu = false"
            >{{ $t("navContact") }}</router-link
          >
        </li>
        <li
          class="header__nav__list__element header__nav__list__element--change-language-element"
        >
          <button
            @click="toggleLanguage"
            class="header__nav__list__change-language-btn"
          >
            {{ changeLanguageText }}
          </button>
        </li>
      </ul>
      <button @click="openMenu = true" class="header__nav__mobile-menu-btn">
        <img
          src="../../assets/shared/icon-hamburger.svg"
          alt="Hamburger icon"
          class="hamburegr-image"
        />
      </button>
    </nav>
  </header>
</template>
<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const openMenu = ref(false);

const { locale, t } = useI18n();

const toggleLanguage = () => {
  const newLanguage = locale.value === "en" ? "pl" : "en";
  locale.value = newLanguage;
  localStorage.setItem("language", newLanguage);
  openMenu.value = false;
};

const changeLanguageText = computed(() =>
  t(locale.value === "en" ? "pl" : "en")
);
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 2rem;
  z-index: 9999;
  background-color: #fff;

  &__nav {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__close-menu-btn {
      background-color: transparent;
      border: none;
      font-size: 30px;
      text-align: end;
      position: absolute;
      right: 20px;

      @media (min-width: $lg-screen) {
        display: none;
      }
    }

    &__list {
      display: none;
      gap: 1.5rem 3rem;
      list-style: none;

      &--open {
        display: flex;
        background-color: $primary-color;
        flex-direction: column;
        position: absolute;
        top: 0;
        right: 0;
        min-width: 300px;
        align-items: flex-start;
        z-index: 9999;
        padding: 30px 20px;
        height: 100vh;
      }

      @media (min-width: $lg-screen) {
        display: flex;
      }

      &__element {
        position: relative;
        padding: 10px 0;

        &::before {
          transition: ease 0.2s;
          height: 3px;
          content: "";
          position: absolute;
          background-color: $primary-color;
          width: 0%;
          bottom: 0;
        }

        &:has(.active) {
          &::before {
            width: 100%;
          }
        }

        &:hover::before {
          width: 100%;
        }

        &--change-language-element {
          margin-left: 0;
          &:hover::before {
            width: 0;
          }

          @media (min-width: $lg-screen) {
            margin-left: 10px;
          }
        }
      }

      &__change-language-btn {
        background-color: transparent;
        border: none;
        text-transform: uppercase;
        font-size: 1.125rem;
        line-height: 20px;
        border-left: 2px solid #000;
        padding-left: 5px;
        cursor: pointer;
      }

      &__link {
        text-transform: uppercase;
        text-decoration: none;
        color: #000;
        font-size: 1.125rem;
        line-height: 20px;
        transition: ease 0.3s;
      }
    }

    &__mobile-menu-btn {
      display: block;
      background-color: transparent;
      border: none;
      cursor: pointer;

      .hamburegr-image {
        width: 1.625rem;
        height: 1.625rem;
      }

      @media (min-width: $lg-screen) {
        display: none;
      }
    }
  }

  &__logo {
    text-decoration: none;
    text-align: center;
    font-size: 22px;
    line-height: 26px;
    color: #000;
    font-family: "Caudex", serif;

    &__image {
      width: 94px;
    }
  }
}
</style>
