<template>
  <footer class="footer">
    <div class="footer__contact-container">
      <div class="footer__contact-container__info">
        <h4 class="footer__contact-container__title">
          {{ $t("contactDetails") }}
        </h4>
        <div class="footer__contact-container__info__data-container">
          <div class="footer__contact-container__info__data-container__data">
            <i
              class="fa-regular fa-envelope footer__contact-container__info__data-container__data__icon"
            ></i>
            <a
              href="mailto:kontakt.weddingfriends@gmail.com"
              class="footer__contact-container__info__data-container__data__link"
              >kontakt.weddingfriends@gmail.com</a
            >
          </div>
          <div class="footer__contact-container__info__data-container__data">
            <i
              class="fa-solid fa-phone footer__contact-container__info__data-container__data__icon"
            ></i>
            <a
              href="tel:+48603612175"
              class="footer__contact-container__info__data-container__data__link"
              >Magda: 603612175</a
            >
          </div>
          <div class="footer__contact-container__info__data-container__data">
            <i
              class="fa-solid fa-phone footer__contact-container__info__data-container__data__icon"
            ></i>
            <a
              href="tel:+48663316266"
              class="footer__contact-container__info__data-container__data__link"
              >Ewelina: 663316266</a
            >
          </div>
          <div class="footer__contact-container__info__data-container__data">
            <i
              class="fa-solid fa-location-dot footer__contact-container__info__data-container__data__icon"
            ></i>
            <p
              class="footer__contact-container__info__data-container__data__static"
            >
              32-200 Miechów ul. Partyzantów 59
            </p>
          </div>
        </div>
      </div>
      <div class="footer__contact-container__image">
        <img
          src="../../assets/shared/footer-image.jpg"
          alt="Photo of the owners of Wedding Friends"
          width="300"
        />
      </div>
      <div class="footer__contact-container__media">
        <h4
          class="footer__contact-container__title footer__contact-container__title--media"
        >
          {{ $t("socialMedia") }}
        </h4>
        <div class="footer__contact-container__media__items">
          <a href="#" class="footer__contact-container__media__items__item">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="#" class="footer__contact-container__media__items__item">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="footer__copyright-container">
      <p class="footer__copyright-container__text">
        Copyright 2024 &copy; Ewelina Komenda & Magdalena Durbacz - Wedding
        Friends
      </p>
      <p class="footer__copyright-container__text">
        Website created by Kamil Pigulak
      </p>
    </div>
  </footer>
</template>
<script setup></script>

<style lang="scss">
.footer {
  background-color: $gray-color;

  &__contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    gap: 30px 20px;

    @media (min-width: $lg-screen) {
      flex-direction: row;
      align-items: start;
    }

    &__image {
      img {
        border-radius: 20px;
        width: 200px;

        @media (min-width: $md-screen) {
          width: 250px;
        }
      }
    }

    &__title {
      font-size: 20px;
      line-height: 24px;
      font-weight: 500;
      text-transform: uppercase;
      margin-bottom: 20px;
      text-align: left;

      @media (min-width: $md-screen) {
        font-size: 20px;
        line-height: 24px;
      }

      @media (min-width: $lg-screen) {
        font-size: 24px;
        line-height: 28px;
      }

      &--media {
        text-align: center;

        @media (min-width: $lg-screen) {
          text-align: left;
        }
      }
    }

    &__info,
    &__media {
      padding: 0 30px;
      background-color: $gray-color;
      width: fit-content;
    }

    &__info {
      &__data-container {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 20px;

        &__data {
          display: flex;
          align-items: center;
          gap: 10px;

          &__icon {
            color: $primary-color;
            font-size: 20px;
            width: 20px;

            @media (min-width: $md-screen) {
              font-size: 23px;
              width: 23px;
            }
          }

          &__link {
            text-decoration: none;
            color: #000;
            cursor: pointer;
            font-weight: 400;
          }

          &__link,
          &__static {
            font-size: 14px;
            line-height: 16px;
          }
        }
      }
    }

    &__media {
      &__items {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        @media (min-width: $lg-screen) {
          justify-content: flex-start;
        }

        &__item {
          text-decoration: none;
          color: $primary-color;

          .fa-brands {
            font-size: 35px;
          }
        }
      }
    }
  }

  &__copyright-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: $primary-color;
    padding: 20px;
    font-size: 12px;

    &__text {
      text-align: center;
    }
  }
}
</style>
