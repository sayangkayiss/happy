<template>
  <!-- navigasi section -->
  <nav
    style="
      opacity: 0.9;
      background-color: var(--secondary-color);
      height: 60px;
      top: 0;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
      position: fixed;
      width: 100%;
      z-index: 99;
    "
    class="navbar navbar-expand-xl navbar-dark"
  >
    <div class="container-fluid" style="width: 100%">
      <div
        class="collapse navbar-collapse d-flex justify-content-between mx-4"
        id="navbarSupportedContent"
      >
        <a href="#" style="font-weight: 700"
          ><span style="color: #3f72af; font-weight: 700">SASA</span> KAYISS</a
        >
        <ul
          class="navbar-nav d-flex justify-content-between"
          style="width: 30%"
        >
          <li class="nav-item">
            <a class="nav-link" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#memo">Memories</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#love">Beloved</a>
          </li>
        </ul>
        <form class="d-flex gap-4" role="search">
          <a
            href="https://discord.com/channels/1054795594486521918/1054795595262464091/1060236274461573150"
            ><i class="bi bi-chat-dots"></i
          ></a>
          <a
            ><i
              style="font-size: 30px"
              class="bi bi-person"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></i>
          </a>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
  .nav-item {
    height: 100% !important;
    width: 100% !important;
  }

  .nav-item a {
    font-size: 1.1rem;
    text-align: center;
    transition: all 0.3s ease-in !important;
    font-weight: 700;
    cursor: pointer;
    color: var(--bg-color);
  }

  a {
    text-decoration: none;
    color: var(--bg-color);
    font-size: 1.6rem;
    font-weight: 700;
  }

  .nav-item a:hover {
    color: #3f72af;
  }

  .navbar-login {
    font-size: 1.1rem;
    font-weight: 700;
    transition: all 0.3s ease-in;
  }

  .navbar-login:hover {
    opacity: 0.7;
  }

  a i {
    transition: all 0.3s ease-in-out;
  }

  a i:hover {
    color: #3f72af;
  }

  .dropdown-menu li a {
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s ease-in;
  }
  .dropdown-menu li a:hover {
    font-weight: bold;
    border-radius: 5px;
    color: #fff;
    background-color: #3f72af;
  }
</style>
