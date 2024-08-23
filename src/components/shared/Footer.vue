<template>
  <footer class="footer-container">
    <div class="contact-container">
      <div class="main-contact-container">
        <h4 class="contact-title">{{ $t("contactDetails") }}</h4>
        <div class="contact-data-container">
          <div class="data">
            <i class="fa-regular fa-envelope data-icon"></i>
            <a href="mailto:przykładowymail@gmail.com" class="data-link"
              >przykładowymail@gmail.com</a
            >
          </div>
          <div class="data">
            <i class="fa-solid fa-phone data-icon"></i>
            <a href="tel:+48111111111" class="data-link"> +48111111111 </a>
          </div>
          <div class="data">
            <i class="fa-solid fa-location-dot data-icon"></i>
            <p class="static-data">ul. Szklana 23, 32-200 Miechów</p>
          </div>
          <div class="data">
            <i class="fa-solid fa-lock data-icon"></i>
            <a href="#" class="data-link">{{ $t("privacyPolicy") }}</a>
          </div>
        </div>
      </div>
      <div class="image-container">
        <img
          src="../../assets/shared/footer-image.jpg"
          alt="Photo of the owners of Wedding Friends"
          width="300"
        />
      </div>
      <div class="media-container">
        <h4 class="contact-title">{{ $t("socialMedia") }}</h4>
        <div class="items-container">
          <a href="#" class="item">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="#" class="item">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#" class="item">
            <i class="fa-brands fa-pinterest"></i>
          </a>
          <a href="#" class="item">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="copyright-container">
      <p class="copyright">
        Copyright 2024 &copy; Ewelina Komenda & Magdalena Durbacz - Weeding
        Friends
      </p>
      <p class="website-author">Website created by Kamil Pigulak</p>
    </div>
  </footer>
</template>
<script setup></script>

<style lang="scss">
.footer-container {
  background-color: $gray-color;

  .contact-container {
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

    .image-container {
      img {
        border-radius: 20px;
        width: 250px;

        @media (min-width: $md-screen) {
          width: 300px;
        }
      }
    }

    .main-contact-container,
    .media-container {
      padding: 0 30px;
      background-color: $gray-color;
      width: fit-content;

      .contact-title {
        font-size: 22px;
        line-height: 26px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 20px;
        text-align: left;

        @media (min-width: $md-screen) {
          font-size: 26px;
          line-height: 30px;
        }

        @media (min-width: $lg-screen) {
          font-size: 30px;
          line-height: 34px;
        }
      }

      .contact-data-container {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 20px;

        .data {
          display: flex;
          align-items: center;
          gap: 10px;

          .data-icon {
            color: $primary-color;
            font-size: 20px;
            width: 20px;

            @media (min-width: $md-screen) {
              font-size: 25px;
              width: 25px;
            }
          }

          .data-link {
            text-decoration: none;
            color: #000;
            cursor: pointer;
          }

          .data-link,
          .static-data {
            font-size: 14px;
            line-height: 16px;

            @media (min-width: $md-screen) {
              font-size: 16px;
              line-height: 18px;
            }
          }
        }
      }
    }

    .media-container {
      .contact-title {
        text-align: center;

        @media (min-width: $lg-screen) {
          text-align: left;
        }
      }
      .items-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        @media (min-width: $lg-screen) {
          justify-content: flex-start;
        }

        .item {
          text-decoration: none;
          color: $primary-color;

          .fa-brands {
            font-size: 35px;

            @media (min-width: $md-screen) {
              font-size: 40px;
            }

            @media (min-width: $lg-screen) {
              font-size: 45px;
            }
          }
        }
      }
    }
  }
  .copyright-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: $primary-color;
    padding: 20px;
    font-size: 12px;

    .copyright,
    .website-author {
      text-align: center;
    }
  }
}
</style>
