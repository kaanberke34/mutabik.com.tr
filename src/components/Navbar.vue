<template>
  <VueScrollFixedNavbar>
    <nav>
      <b-navbar toggleable="lg" variant="faded">
        <b-container>
          <b-navbar-brand href="/" class="mx-auto">
            <img
              src="https://davetver.com/assets/images/mutabik_logo.png"
              class="d-inline-block align-top"
              alt="logo"
              width="200px"
              height="50px"
          /></b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="mx-auto">
              <b-nav-item href="#main">Anasayfa</b-nav-item>
              <b-nav-item href="#menu">Menü</b-nav-item>
              <b-nav-item href="#about">Hakkımızda</b-nav-item>
              <b-nav-item href="#gallery">Galeri</b-nav-item>
              <b-nav-item href="#contact">İletişim</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </nav>
  </VueScrollFixedNavbar>
</template>
<script>
import { VueScrollFixedNavbar } from "vue-scroll-fixed-navbar";
export default {
  name: "Navbar",
  components: {
    VueScrollFixedNavbar,
  },
};
</script>
<style scoped>
.mx-auto {
  padding-left: 10px !important;
  padding-right: 10px !important;
}
nav {
  z-index: 1;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  background-color: #eee;
}
.nav-item a {
  color: rgba(0, 0, 0, 0.55);
  font-size: 20px;
  margin: 10px;
}
.nav-item a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>