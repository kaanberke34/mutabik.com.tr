<template>
  <div class="Contact">
    <h1>Adresimiz</h1>

    <div>
      <b-card no-body class="overflow-hidden location-card-bg">
        <b-row no-gutters>
          <b-col md="6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.050672925884!2d29.100874515093018!3d40.98037122909107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac76c429acedb%3A0xfa033d8a71e67189!2sMutab%C4%B1k%20Restaurant!5e0!3m2!1sen!2slt!4v1654905806677!5m2!1sen!2slt"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </b-card-text>
              <b-list-group flush>
                <b-list-group-item class="phone-card-bg"
                  >Rezervasyon Icin: 0000 000 00 00
                </b-list-group-item>
              </b-list-group>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>
<style scoped>
.location-card-bg {
  background-color: transparent;
  border: none;
}
.phone-card-bg {
  background-color: transparent;
  border: none;
  color: white;
}
iframe {
  border-radius: 10px;
}
</style>
