<template>
  <div id="app">
    <Navbar />
    <b-container>
      <router-view />
    </b-container>
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style>
</style>
