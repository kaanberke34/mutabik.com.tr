<template>
  <b-container>
    <footer>
      <hr />
      <b-card class="card-bg text-center">
        <b-card-text>
          Adres: Küçükbakkalköy Mah. Kayişdaği Cad. No:3/1 ATAŞEHIR - ISTANBUL
          (Marriott Hotel yani, Flora Residence altindayiz.)
        </b-card-text>

        <a href="#main" class="card-link">Anasayfa</a>
        <b-link href="#menu" class="card-link">Menü</b-link>
        <b-link href="#about" class="card-link">Hakkımızda</b-link>
        <b-link href="#gallery" class="card-link">Galeri</b-link>
        <b-link href="#contact" class="card-link">İletişim</b-link>
      </b-card>
      <b-card-footer class="card-ftr text-center">
        <b-link href="https://www.biartibieksi.com" class="card-footer-link"
          >biartibieksi | Web Hizmetleri © 2022</b-link
        ></b-card-footer
      >
    </footer>
  </b-container>
</template>
<script>
export default {};
</script>
<style scoped>
.card-bg {
  background-color: transparent;
  border: none;
}
.card-link {
  text-decoration: none;
  color: black;
  padding: 5px;
}
.card-link:hover {
  background-color: #eee;
  border-radius: 10px;
  color: black;
}
.card-ftr {
  background-color: transparent;
  border: none;
}
.card-footer-link {
  text-decoration: none;
  color: black;
  padding: 5px;
}
</style>