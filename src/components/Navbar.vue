<template>
  <nav>
    <b-navbar toggleable="lg" type="dark" variant="faded">
      <b-container>
        <b-navbar-brand href="/">
          <img
            src="https://davetver.com/assets/images/mutabik_logo.png"
            class="d-inline-block align-top"
            alt="logo"
            width="200px"
            height="50px"
        /></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/menu">Menu</b-nav-item>
            <b-nav-item href="/contact">Contact</b-nav-item>
            <b-nav-item href="/about">About Us</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style scoped>
</style>