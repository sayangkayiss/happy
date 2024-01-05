<script setup>
  import TheWelcome from "../components/TheWelcome.vue";
  import Navbar from "@/components/Navbar.vue";
  import { onMounted } from "vue";
</script>

<template>
  <Navbar></Navbar>

  <!-- hero -->
  <div id="home" class="hero-section">
    <div class="section">
      <div class="hero-left">
        <h4
          data-aos="fade-down-right"
          data-aos-delay="300"
          data-aos-duration="1200"
          data-aos-anchor-placement="bottom-bottom"
          style="
            color: gray;
            font-weight: 600;
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          "
        >
          HII SAYANGGG
        </h4>
        <h2
          data-aos="fade-down-right"
          data-aos-delay="300"
          data-aos-duration="1200"
          data-aos-anchor-placement="bottom-bottom"
          style="
            color: var(--main-color);
            font-weight: 700;
            font-size: 2.7rem;
            margin-bottom: 1.25rem;
          "
        >
          HAPPY ANNIVERSARY KE 1 TAHUNNYA
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1200"
          data-aos-anchor-placement="bottom-bottom"
          style="font-size: 1.4rem; font-weight: 700; margin-bottom: 2rem"
        >
          I couldn't survive a day without you.<br />I'm so glad we've lived to
          see another year together
        </p>
      </div>
      <div class="hero-right">
        <div class="hero-img">
          <img
            data-aos="fade-left"
            data-aos-delay="800"
            data-aos-duration="1200"
            data-aos-anchor-placement="bottom-bottom"
            style="width: 500px; border-radius: 10px"
            src="/src/components/icons/eren3.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <!-- Skills -->
  <div class="skills">
    <h3
      data-aos="zoom-in-down"
      data-aos-delay="300"
      style="
        color: #a6b1e1;
        font-weight: 700;
        font-size: 2.7rem;
        margin-bottom: 1.25rem;
      "
      id="memo"
    >
      THANK YOU
    </h3>
    <p
      data-aos="zoom-in"
      data-aos-delay="500"
      style="
        color: white;
        font-weight: 700;
        font-size: 1.5rem;
        margin-bottom: 2rem;
        text-align: center;
        padding-left: 350px;
        padding-right: 350px;
      "
    >
      Makasih yaa buat 1 tahunnya, Maaf kalo aku ngeselin, mungkin buat kamu aku
      aneh yaa?.maaf yaa, aku cuma ga terbiasa ajaa kaya gini, mungkin
      kedepannya aku bisa ngetreat kamu lebih baik lagii<br />Ayafyuu 3000❤️
    </p>
    <div style="display: flex; gap: 30px" class="icons">
      <!-- html -->
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-delay="600"
        style="
          display: flex;
          gap: 5px;
          flex-direction: column;
          align-items: center;
        "
      >
        <i
          style="font-weight: 700; font-size: 5rem"
          class="fa-solid fa-heart fa-beat"
          id="html"
        ></i>
      </div>
      <!-- css -->
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-delay="900"
        style="
          display: flex;
          gap: 5px;
          flex-direction: column;
          align-items: center;
        "
      >
        <i
          style="font-weight: 700; font-size: 5rem"
          class="fa-solid fa-heart fa-beat"
          id="css"
        ></i>
      </div>
      <!-- BOOTSTRAP -->
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-delay="1200"
        style="
          display: flex;
          gap: 5px;
          flex-direction: column;
          align-items: center;
        "
      >
        <i
          style="font-weight: 700; font-size: 5rem"
          class="fa-solid fa-heart fa-beat"
          id="bootstrap"
        ></i>
      </div>
      <!-- JAVASCRIPT -->
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-delay="1500"
        style="
          display: flex;
          gap: 5px;
          flex-direction: column;
          align-items: center;
        "
      >
        <i
          style="font-weight: 700; font-size: 5rem"
          class="fa-solid fa-heart fa-beat"
          id="js"
        ></i>
      </div>
      <!-- VUE -->
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-delay="1800"
        style="
          display: flex;
          gap: 5px;
          flex-direction: column;
          align-items: center;
        "
      >
        <i
          style="font-weight: 700; font-size: 5rem"
          class="fa-solid fa-heart fa-beat"
          id="vue"
        ></i>
      </div>
      <!-- NODE -->
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-delay="2100"
        style="
          display: flex;
          gap: 5px;
          flex-direction: column;
          align-items: center;
        "
      >
        <i
          style="font-weight: 700; font-size: 5rem"
          class="fa-solid fa-heart fa-beat"
          id="node"
        ></i>
      </div>
    </div>
  </div>
  <!-- portofolio -->
  <div class="portofolio">
    <div class="header-porto">
      <h3
        data-aos="zoom-in-down"
        data-aos-delay="300"
        data-aos-duration="700"
        style="color: #a6b1e1; font-weight: 700; font-size: 2rem"
      >
        OUR MEMORIES
      </h3>
      <h2
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="700"
        style="
          color: var(--main-color);
          font-weight: 700;
          font-size: 3.7rem;
          margin-bottom: 0.25rem;
          text-align: center;
        "
      >
        WKWKWK VIRTUAL :V
      </h2>
      <p
        data-aos="zoom-in-up"
        data-aos-delay="600"
        data-aos-duration="700"
        style="
          color: #5c5470;
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 2rem;
          text-align: center;
          padding-left: 410px;
          padding-right: 410px;
        "
      >
        Makasi ya udaa nemenin aku 1 tahun ini, walaupun kita cuma bisa foto di
        turtle, sama pacaran di dc, aku tetep sayang kamu kok <br />
        Ayafyuu Sayangkuu ❤️
      </p>
    </div>
    <div
      style="
        width: 100%;
        height: 2000px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        padding-top: 30px;
        margin-bottom: 5rem;
      "
      class="items"
    >
      <div
        style="display: flex; width: 100%; gap: 30px; justify-content: center"
        class="top"
      >
        <div
          data-aos="flip-right"
          data-aos-delay="600"
          data-aos-duration="700"
          style="
            width: 35%;
            height: 450px;
            background-image: url(src/components/icons/ml1.png);
            background-position: center;
            background-size: cover;
          "
          class="project"
        ></div>
        <div
          data-aos="flip-left"
          data-aos-delay="900"
          data-aos-duration="700"
          style="
            width: 35%;
            height: 450px;
            background-image: url(src/components/icons/ml2.png);
            background-position: center;
            background-size: cover;
          "
          class="project"
        ></div>
      </div>
      <div
        style="display: flex; width: 100%; gap: 30px; justify-content: center"
        class="bottom"
      >
        <div
          data-aos="flip-right"
          data-aos-delay="1000"
          data-aos-duration="700"
          style="
            width: 45%;
            height: 450px;
            background-image: url(src/components/icons/dc1.png);
            background-position: center;
            background-size: cover;
          "
          class="project"
        ></div>
        <div
          data-aos="flip-left"
          data-aos-delay="1300"
          data-aos-duration="700"
          style="
            width: 45%;
            height: 450px;
            background-image: url(src/components/icons/dc2.png);
            background-position: center;
            background-size: cover;
          "
          class="project"
        ></div>
      </div>
      <div
        style="display: flex; width: 100%; gap: 30px; justify-content: center"
        class="top"
      >
        <div
          data-aos="flip-right"
          data-aos-delay="600"
          data-aos-duration="700"
          style="
            width: 35%;
            height: 450px;
            background-image: url(src/components/icons/ml3.png);
            background-position: center;
            background-size: cover;
          "
          class="project"
        ></div>
        <div
          data-aos="flip-left"
          data-aos-delay="900"
          data-aos-duration="700"
          id="about"
          style="
            width: 35%;
            height: 450px;
            background-image: url(src/components/icons/ml4.png);
            background-position: center;
            background-size: cover;
          "
          class="project"
        ></div>
      </div>
    </div>
  </div>
  <!-- services -->
  <div class="services">
    <div class="service-header">
      <h3
        data-aos="zoom-in-down"
        data-aos-delay="700"
        data-aos-duration="700"
        style="
          color: #a6b1e1;
          font-weight: 700;
          font-size: 1.7rem;
          margin-bottom: 1.25rem;
        "
      >
        ABOUT US
      </h3>
      <h2
        data-aos="fade-up"
        data-aos-delay="1400"
        data-aos-duration="700"
        style="
          color: var(--main-color);
          font-weight: 700;
          font-size: 2.7rem;
          margin-bottom: 0.25rem;
          text-align: center;
        "
      >
        APAA YAAA
      </h2>
    </div>
    <div
      style="
        width: 100%;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 60px;
      "
      class="service-items"
    >
      <div
        style="
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          gap: 30px;
        "
        class="top"
      >
        <div
          data-aos="fade-right"
          data-aos-delay="1600"
          data-aos-duration="700"
          style="
            width: 30%;
            height: 400px;
            background-image: url(src/components/icons/cp1.png);
            background-position: center;
            background-size: cover;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
          "
          class="serve"
        ></div>
        <div
          data-aos="fade-left"
          data-aos-delay="2400"
          data-aos-duration="700"
          style="
            width: 30%;
            height: 400px;
            background-color: #a6b1e1;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
          "
          class="serve"
        >
          <div
            style="
              width: 70px;
              height: 70px;
              background-color: #dbd8e3;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 20px;
              box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.3);
            "
            class="icon"
          >
            <i
              style="font-weight: 700; font-size: 2rem; color: #1d3a5c"
              class="fa fa-user-o"
              aria-hidden="true"
            ></i>
          </div>
          <div
            style="
              width: 100%;
              height: 200px;
              /* background-color: #a6b1e1; */
              border-radius: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 20px;
            "
            class="text"
          >
            <h3 style="font-weight: 700; font-size: 1.7rem; color: #1d3a5c">
              Kayiss
            </h3>
            <p
              style="
                color: #5c5470;
                font-weight: 700;
                font-size: 1.5rem;
                margin-bottom: 2rem;
                text-align: center;
                padding-left: 10px;
                padding-right: 10px;
              "
            >
              Cengeng, ngambekan huuu, tapii cantikk pake bangettt, aku sayang
              kamu ❤️
            </p>
          </div>
        </div>
      </div>
      <div
        style="
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          gap: 30px;
        "
        class="top"
      >
        <div
          data-aos="fade-right"
          data-aos-delay="1800"
          data-aos-duration="700"
          style="
            width: 30%;
            height: 400px;
            background-color: #a6b1e1;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
          "
          class="serve"
        >
          <div
            style="
              width: 70px;
              height: 70px;
              background-color: #dbd8e3;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 20px;
              box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.3);
            "
            class="icon"
          >
            <i
              style="font-weight: 700; font-size: 2rem; color: #1d3a5c"
              class="fa fa-user-o"
              aria-hidden="true"
            ></i>
          </div>
          <div
            style="
              width: 100%;
              height: 200px;
              /* background-color: #a6b1e1; */
              border-radius: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 20px;
            "
            class="text"
          >
            <h3 style="font-weight: 700; font-size: 1.7rem; color: #1d3a5c">
              Sasa
            </h3>
            <p
              style="
                color: #5c5470;
                font-weight: 700;
                font-size: 1.5rem;
                margin-bottom: 2rem;
                text-align: center;
                padding-left: 10px;
                padding-right: 10px;
              "
            >
              Jagoo, keren, Ling main, gamteng kata mama, sleepy 💤
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="1600"
          data-aos-duration="700"
          id="love"
          style="
            width: 30%;
            height: 400px;
            background-image: url(src/components/icons/cp2.png);
            background-position: top;
            background-size: cover;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
          "
          class="serve"
        ></div>
      </div>
    </div>
  </div>
  <!-- contact -->
  <div class="contact">
    <div class="header-contact">
      <h3
        data-aos="zoom-in-down"
        data-aos-delay="300"
        data-aos-duration="700"
        style="color: #a6b1e1; font-weight: 700; font-size: 1.5rem"
      >
        My Beloved
      </h3>
      <h2
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="700"
        style="
          color: var(--main-color);
          font-weight: 700;
          font-size: 2rem;
          margin-bottom: 0.25rem;
          text-align: center;
        "
      >
        PUNYAA AKUUUU
      </h2>
      <p
        data-aos="zoom-in-up"
        data-aos-delay="600"
        data-aos-duration="700"
        style="
          color: #5c5470;
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 2rem;
          text-align: center;
          padding-left: 410px;
          padding-right: 410px;
        "
      >
        Cewe aku yang paling cantikkk, lucuuu, tapi ngambekan, malesin huuu
        <br />Aku Sayang Kamuu ❤️
      </p>
    </div>
    <div
      style="
        width: 100%;
        height: 2000px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        padding-top: 30px;
        margin-bottom: 5rem;
      "
      class="items"
    >
      <!-- 4 -->
      <div
        style="display: flex; width: 100%; gap: 30px; justify-content: center"
        class="top"
      >
        <div
          data-aos="fade-right"
          data-aos-delay="1500"
          data-aos-duration="700"
          style="
            width: 20%;
            height: 450px;
            background-image: url(src/components/icons/k1.png);
            background-position: center;
            background-size: cover;
          "
          class="project"
        ></div>
        <div
          data-aos="fade-right"
          data-aos-delay="1200"
          data-aos-duration="700"
          style="
            width: 20%;
            height: 450px;
            background-image: url(src/components/icons/k9.png);
            background-position: center;
            background-size: cover;
          "
          class="project"
        ></div>
        <div
          data-aos="fade-right"
          data-aos-delay="900"
          data-aos-duration="700"
          style="
            width: 20%;
            height: 450px;
            background-image: url(src/components/icons/k10.png);
            background-position: center;
            background-size: cover;
          "
          class="project"
        ></div>
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-duration="700"
          style="
            width: 20%;
            height: 450px;
            background-image: url(src/components/icons/k11.png);
            background-position: center;
            background-size: cover;
          "
          class="project"
        ></div>
      </div>
      <!-- 2 -->
      <div
        style="display: flex; width: 100%; gap: 30px; justify-content: center"
        class="top"
      >
        <div
          data-aos="zoom-in-up"
          data-aos-delay="1000"
          data-aos-duration="700"
          style="
            width: 35%;
            height: 450px;
            background-image: url(src/components/icons/k18.png);
            background-position: center;
            background-size: cover;
          "
          class="project"
        ></div>
        <div
          data-aos="zoom-in-up"
          data-aos-delay="1000"
          data-aos-duration="700"
          style="
            width: 35%;
            height: 450px;
            background-image: url(src/components/icons/k19.png);
            background-position: center;
            background-position-y: top;
            background-size: cover;
          "
          class="project"
        ></div>
      </div>
      <!-- 4 -->
      <div
        style="display: flex; width: 100%; gap: 30px; justify-content: center"
        class="top"
      >
        <div
          data-aos="fade-left"
          data-aos-delay="600"
          data-aos-duration="700"
          style="
            width: 20%;
            height: 450px;
            background-image: url(src/components/icons/k4.png);
            background-position: center;
            background-size: cover;
          "
          class="project"
        ></div>
        <div
          data-aos="fade-left"
          data-aos-delay="900"
          data-aos-duration="700"
          style="
            width: 20%;
            height: 450px;
            background-image: url(src/components/icons/k5.png);
            background-position: center;
            background-size: cover;
          "
          class="project"
        ></div>
        <div
          data-aos="fade-left"
          data-aos-delay="1200"
          data-aos-duration="700"
          style="
            width: 20%;
            height: 450px;
            background-image: url(src/components/icons/k6.png);
            background-position: center;
            background-size: cover;
          "
          class="project"
        ></div>
        <div
          data-aos="fade-left"
          data-aos-delay="1500"
          data-aos-duration="700"
          style="
            width: 20%;
            height: 450px;
            background-image: url(src/components/icons/k13.png);
            background-position: center;
            background-size: cover;
          "
          class="project"
        ></div>
      </div>
      <!-- 2 -->
      <div
        style="display: flex; width: 100%; gap: 30px; justify-content: center"
        class="top"
      >
        <div
          data-aos="zoom-in-up"
          data-aos-delay="1000"
          data-aos-duration="700"
          style="
            width: 35%;
            height: 450px;
            background-image: url(src/components/icons/k14.png);
            background-position: center;
            background-size: cover;
          "
          class="project"
        ></div>
        <div
          data-aos="zoom-in-up"
          data-aos-delay="1000"
          data-aos-duration="700"
          style="
            width: 35%;
            height: 450px;
            background-image: url(src/components/icons/k15.png);
            background-position: center;
            background-size: cover;
          "
          class="project"
        ></div>
      </div>
      <!-- 4 -->
      <div
        style="display: flex; width: 100%; gap: 30px; justify-content: center"
        class="top"
      >
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="700"
          style="
            width: 20%;
            height: 450px;
            background-image: url(src/components/icons/k7.png);
            background-position: center;
            background-size: cover;
          "
          class="project"
        ></div>
        <div
          data-aos="fade-up"
          data-aos-delay="900"
          data-aos-duration="700"
          style="
            width: 20%;
            height: 450px;
            background-image: url(src/components/icons/k8.png);
            background-position: center;
            background-size: cover;
          "
          class="project"
        ></div>
        <div
          data-aos="fade-up"
          data-aos-delay="1200"
          data-aos-duration="700"
          style="
            width: 20%;
            height: 450px;
            background-image: url(src/components/icons/k16.png);
            background-position: center;
            background-size: cover;
          "
          class="project"
        ></div>
        <div
          data-aos="fade-up"
          data-aos-delay="1500"
          data-aos-duration="700"
          style="
            width: 20%;
            height: 450px;
            background-image: url(src/components/icons/k17.png);
            background-position: center;
            background-size: cover;
          "
          class="project"
        ></div>
      </div>
    </div>
  </div>

  <!-- footer -->
  <div class="footer-section">
    <div class="footer-container">
      <h4 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem">
        &#169;
        <span style="font-weight: 600; color: var(--main-color)">2024</span>
        Sayang Kayis.
      </h4>
      <div class="footer-icons">
        <a href="#"><i class="bi bi-facebook"></i></a>
        <a href="#"><i class="bi bi-whatsapp"></i></a>
        <a href="#"><i class="bi bi-instagram"></i></a>
        <a href="#"><i class="bi bi-github"></i></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* hero section */
  .hero-section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .section {
    width: 80%;
    height: 700px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8rem;
  }

  .hero-button {
    display: flex;
    gap: 3rem;
  }

  .hero-order {
    padding: 0.6rem 1.8rem;
    width: 10rem;
    height: 3rem;
    border: none;
    background-color: var(--main-color);
    color: #fff;
    border-radius: 10px;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    opacity: 1;
  }

  .hero-order:hover {
    opacity: 0.7;
  }

  .hero-menu {
    width: 10rem;
    height: 3rem;
    background-color: #fff;
    color: var(--main-color);
    font-weight: 600;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    border: 1px solid var(--main-color);
  }

  .hero-menu:hover {
    opacity: 0.7;
  }

  /* skills */
  .skills {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1d3a5c;
    padding-top: 20px;
    margin-bottom: 25rem;
  }

  .icons h4 {
    color: white;
  }

  .icons i {
    color: #dbe2ef;
  }

  /* portofolio */
  .portofolio {
    width: 100%;
    height: 1400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
    margin-bottom: 25rem;
  }

  .header-porto {
    display: flex;
    height: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .items-porto {
    width: 100%;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1d3a5c;
    justify-content: center;
    padding-top: 20px;
    margin-bottom: 2.5rem;
  }

  .project {
    border-radius: 20px;
    box-shadow: 0rem 0.2rem 0.7rem rgba(0, 0, 0, 0.4);
  }

  .service-header {
    display: flex;
    height: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /* contact */

  .header-contact {
    display: flex;
    height: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /* #html:hover {
    color: #dd4b25 !important;
  }
  #css:hover {
    color: #254bdd !important;
  }

  #js:hover {
    color: #e8d44d !important;
  }
  #bootstrap:hover {
    color: #722ffa !important;
  }
  #vue:hover {
    color: #42d392 !important;
  }
  #node:hover {
    color: #43853d !important;
  } */

  .icons i {
    color: #b0578d;
  }

  /* services */

  .services {
    width: 100%;
    height: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    background-color: #1d3a5c;
    padding-top: 20px;
    margin-bottom: 10rem;
    gap: 130px;
  }

  /* contact */

  .contact {
    width: 100%;
    height: 2900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    margin-bottom: 10rem;
  }

  .contact form label {
    color: #3f72af;
  }

  .form-control {
    background-color: #e2e8f0;
  }
  /* footer */
  .footer-section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-color);
    box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);
  }

  .footer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--secondary-color);
    width: 80%;
    min-height: 125px;
  }

  .footer-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
  }

  .footer-icons a i {
    color: #6e6e6e;
    font-size: 1.4rem;
    transition: all 0.4s ease-in-out;
  }

  .footer-icons a i:hover {
    color: var(--main-color);
  }
</style>
