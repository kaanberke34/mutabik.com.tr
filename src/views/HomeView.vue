<template>
  <div class="home" id="home">
    <!-- about us start -->
    <div class="about mt-5" id="about">
      <div>
        <h1 class="text-center" style="color: red">MUTABIK</h1>
        <h2 class="text-center">ET KEBAP / MEZE</h2>
      </div>
      <div class="mt-5">
        <b-card
          overlay
          img-src="https://davetver.com/assets/images/front.png"
          img-alt="Mutabik Front Image"
          text-variant="white"
          class="text-custom-red"
        >
          <b-card-text class="text-custom-white"> </b-card-text>
        </b-card>

        <b-card-text class="m-3" style="font-size: 20px">
          Güzel anları daha da güzelleştiren yemeklerimiz ve keyfinize lezzet
          katacak sofralarımız ile Ataşehir Mutabık’ta sizleri de bekliyoruz!
        </b-card-text>
      </div>
      <div>
        <div class="mt-4 w-100">
          <b-card no-body class="overflow-hidden mt-5 mb-5">
            <b-row no-gutters>
              <b-col md="4">
                <b-card-img
                  src="https://davetver.com/assets/images/foto15.jpg"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6" class="textMiddle">
                <b-card-body title="">
                  <b-card-text class="mx-auto" style="font-size: 20px">
                    Dumanı üstünde tüten, önce gözleri doyuran, yedikçe yediren
                    lezzetlerimiz deneyen herkesi hayran bırakıyor!
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
    <!-- about us end -->
    <!-- menu start -->
    <div class="menu" id="menu">
      <h1 class="text-center h1-m-100">Menü</h1>
      <!-- Mezeler -->
      <b-container fluid class="p-4 mt-5">
        <b-row class="mb-5">
          <b-col col lg="2" md="4" sm="6">
            <b-button class="m-2" v-b-modal.modal.modal-scrollable1
              >Mezeler</b-button
            >

            <b-modal id="modal-scrollable1" title="Mezeler" hide-footer>
              <b-list-group>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Haydari</h5>
                    <!-- <small class="text-muted">Price: ₺30 </small> -->
                  </div>

                  <p class="m-2">
                    Haydari, sarimsak ve yoğurt ile birlikte belirli otlar ve
                    baharatlardan oluşan bir mezedir. Caciktan farkli olarak
                    salatalik içermemektedir. Tamamen bir meze olarak sunulur;
                    caciktan daha tuzlu, daha asidik ve daha kalin bir
                    tutarliliğa sahip olmakla birlikte, daha keskin bir şekilde
                    iştah açicidir.
                  </p>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Humus</h5>
                  </div>

                  <p class="m-2">
                    Humus, nohut ve tahine limon suyu, sarimsak, tuz, kimyon,
                    kirmizi biber ve zeytinyaği eklenerek yapilan bir Orta Doğu
                    mezesidir. Houmous ve Hummus olarak da yazilip okunur.
                    Hummus Arapça'da nohut anlamina gelmektedir.
                  </p>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
              </b-list-group>
            </b-modal>
          </b-col>
          <b-col col lg="2" md="4" sm="6">
            <b-button class="m-2" v-b-modal.modal.modal-scrollable2
              >Kategori1</b-button
            >

            <b-modal id="modal-scrollable2" title="Mezeler" hide-footer>
              <b-list-group>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Haydari</h5>
                    <!-- <small class="text-muted">Price: ₺30 </small> -->
                  </div>

                  <p class="m-2">
                    Haydari, sarimsak ve yoğurt ile birlikte belirli otlar ve
                    baharatlardan oluşan bir mezedir. Caciktan farkli olarak
                    salatalik içermemektedir. Tamamen bir meze olarak sunulur;
                    caciktan daha tuzlu, daha asidik ve daha kalin bir
                    tutarliliğa sahip olmakla birlikte, daha keskin bir şekilde
                    iştah açicidir.
                  </p>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Humus</h5>
                  </div>

                  <p class="m-2">
                    Humus, nohut ve tahine limon suyu, sarimsak, tuz, kimyon,
                    kirmizi biber ve zeytinyaği eklenerek yapilan bir Orta Doğu
                    mezesidir. Houmous ve Hummus olarak da yazilip okunur.
                    Hummus Arapça'da nohut anlamina gelmektedir.
                  </p>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
              </b-list-group>
            </b-modal>
          </b-col>
          <b-col col lg="2" md="4" sm="6">
            <b-button class="m-2" v-b-modal.modal.modal-scrollable3
              >Kategori2</b-button
            >

            <b-modal id="modal-scrollable3" title="Mezeler" hide-footer>
              <b-list-group>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Haydari</h5>
                    <!-- <small class="text-muted">Price: ₺30 </small> -->
                  </div>

                  <p class="m-2">
                    Haydari, sarimsak ve yoğurt ile birlikte belirli otlar ve
                    baharatlardan oluşan bir mezedir. Caciktan farkli olarak
                    salatalik içermemektedir. Tamamen bir meze olarak sunulur;
                    caciktan daha tuzlu, daha asidik ve daha kalin bir
                    tutarliliğa sahip olmakla birlikte, daha keskin bir şekilde
                    iştah açicidir.
                  </p>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Humus</h5>
                  </div>

                  <p class="m-2">
                    Humus, nohut ve tahine limon suyu, sarimsak, tuz, kimyon,
                    kirmizi biber ve zeytinyaği eklenerek yapilan bir Orta Doğu
                    mezesidir. Houmous ve Hummus olarak da yazilip okunur.
                    Hummus Arapça'da nohut anlamina gelmektedir.
                  </p>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
              </b-list-group>
            </b-modal>
          </b-col>
          <b-col col lg="2" md="4" sm="6">
            <b-button class="m-2" v-b-modal.modal.modal-scrollable4
              >Kategori3</b-button
            >

            <b-modal id="modal-scrollable4" title="Mezeler" hide-footer>
              <b-list-group>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Haydari</h5>
                    <!-- <small class="text-muted">Price: ₺30 </small> -->
                  </div>

                  <p class="m-2">
                    Haydari, sarimsak ve yoğurt ile birlikte belirli otlar ve
                    baharatlardan oluşan bir mezedir. Caciktan farkli olarak
                    salatalik içermemektedir. Tamamen bir meze olarak sunulur;
                    caciktan daha tuzlu, daha asidik ve daha kalin bir
                    tutarliliğa sahip olmakla birlikte, daha keskin bir şekilde
                    iştah açicidir.
                  </p>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Humus</h5>
                  </div>

                  <p class="m-2">
                    Humus, nohut ve tahine limon suyu, sarimsak, tuz, kimyon,
                    kirmizi biber ve zeytinyaği eklenerek yapilan bir Orta Doğu
                    mezesidir. Houmous ve Hummus olarak da yazilip okunur.
                    Hummus Arapça'da nohut anlamina gelmektedir.
                  </p>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
              </b-list-group>
            </b-modal>
          </b-col>
          <b-col col lg="2" md="4" sm="6">
            <b-button class="m-2" v-b-modal.modal.modal-scrollable5
              >Kategori4</b-button
            >

            <b-modal id="modal-scrollable5" title="Mezeler" hide-footer>
              <b-list-group>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Haydari</h5>
                    <!-- <small class="text-muted">Price: ₺30 </small> -->
                  </div>

                  <p class="m-2">
                    Haydari, sarimsak ve yoğurt ile birlikte belirli otlar ve
                    baharatlardan oluşan bir mezedir. Caciktan farkli olarak
                    salatalik içermemektedir. Tamamen bir meze olarak sunulur;
                    caciktan daha tuzlu, daha asidik ve daha kalin bir
                    tutarliliğa sahip olmakla birlikte, daha keskin bir şekilde
                    iştah açicidir.
                  </p>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Humus</h5>
                  </div>

                  <p class="m-2">
                    Humus, nohut ve tahine limon suyu, sarimsak, tuz, kimyon,
                    kirmizi biber ve zeytinyaği eklenerek yapilan bir Orta Doğu
                    mezesidir. Houmous ve Hummus olarak da yazilip okunur.
                    Hummus Arapça'da nohut anlamina gelmektedir.
                  </p>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
              </b-list-group>
            </b-modal>
          </b-col>
          <b-col col lg="2" md="4" sm="6">
            <b-button class="m-2" v-b-modal.modal.modal-scrollable6
              >Kategori5</b-button
            >

            <b-modal id="modal-scrollable6" title="Mezeler" hide-footer>
              <b-list-group>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Haydari</h5>
                    <!-- <small class="text-muted">Price: ₺30 </small> -->
                  </div>

                  <p class="m-2">
                    Haydari, sarimsak ve yoğurt ile birlikte belirli otlar ve
                    baharatlardan oluşan bir mezedir. Caciktan farkli olarak
                    salatalik içermemektedir. Tamamen bir meze olarak sunulur;
                    caciktan daha tuzlu, daha asidik ve daha kalin bir
                    tutarliliğa sahip olmakla birlikte, daha keskin bir şekilde
                    iştah açicidir.
                  </p>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Humus</h5>
                  </div>

                  <p class="m-2">
                    Humus, nohut ve tahine limon suyu, sarimsak, tuz, kimyon,
                    kirmizi biber ve zeytinyaği eklenerek yapilan bir Orta Doğu
                    mezesidir. Houmous ve Hummus olarak da yazilip okunur.
                    Hummus Arapça'da nohut anlamina gelmektedir.
                  </p>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
              </b-list-group>
            </b-modal>
          </b-col>

          <b-col col lg="2" md="4" sm="6">
            <b-button class="m-2" v-b-modal.modal.modal-scrollable7
              >Kategori6</b-button
            >

            <b-modal id="modal-scrollable7" title="Mezeler" hide-footer>
              <b-list-group>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Haydari</h5>
                    <!-- <small class="text-muted">Price: ₺30 </small> -->
                  </div>

                  <p class="m-2">
                    Haydari, sarimsak ve yoğurt ile birlikte belirli otlar ve
                    baharatlardan oluşan bir mezedir. Caciktan farkli olarak
                    salatalik içermemektedir. Tamamen bir meze olarak sunulur;
                    caciktan daha tuzlu, daha asidik ve daha kalin bir
                    tutarliliğa sahip olmakla birlikte, daha keskin bir şekilde
                    iştah açicidir.
                  </p>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Humus</h5>
                  </div>

                  <p class="m-2">
                    Humus, nohut ve tahine limon suyu, sarimsak, tuz, kimyon,
                    kirmizi biber ve zeytinyaği eklenerek yapilan bir Orta Doğu
                    mezesidir. Houmous ve Hummus olarak da yazilip okunur.
                    Hummus Arapça'da nohut anlamina gelmektedir.
                  </p>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
              </b-list-group>
            </b-modal>
          </b-col>

          <b-col col lg="2" md="4" sm="6">
            <b-button class="m-2" v-b-modal.modal.modal-scrollable8
              >Kategori7</b-button
            >

            <b-modal id="modal-scrollable8" title="Mezeler" hide-footer>
              <b-list-group>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Haydari</h5>
                    <!-- <small class="text-muted">Price: ₺30 </small> -->
                  </div>

                  <p class="m-2">
                    Haydari, sarimsak ve yoğurt ile birlikte belirli otlar ve
                    baharatlardan oluşan bir mezedir. Caciktan farkli olarak
                    salatalik içermemektedir. Tamamen bir meze olarak sunulur;
                    caciktan daha tuzlu, daha asidik ve daha kalin bir
                    tutarliliğa sahip olmakla birlikte, daha keskin bir şekilde
                    iştah açicidir.
                  </p>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Humus</h5>
                  </div>

                  <p class="m-2">
                    Humus, nohut ve tahine limon suyu, sarimsak, tuz, kimyon,
                    kirmizi biber ve zeytinyaği eklenerek yapilan bir Orta Doğu
                    mezesidir. Houmous ve Hummus olarak da yazilip okunur.
                    Hummus Arapça'da nohut anlamina gelmektedir.
                  </p>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">Tarator</h5>
                  </div>

                  <p class="m-2">
                    Tarator Osmanli mutfağinda bulunan bir çeşit mezedir.
                    Günümüzde ise Tarator, toroto ya da taratuar, bazi Balkan
                    ülkelerinde ve Kibris adasinda yapilan ve caciktan
                    esinlenmiş, ona benzeyen soğuk yemek olarak bilinir.
                    Kibris'ta talatur olarak taninir.
                  </p>
                </b-list-group-item>
              </b-list-group>
            </b-modal>
          </b-col>
        </b-row>
      </b-container>
      <!-- Ara Sicaklar -->
      <b-list-group>
        <h2>Ara Sicaklar</h2>

        <b-list-group-item
          href="#"
          disabled
          class="flex-column align-items-start"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="m-2">Icli Kofte</h5>
          </div>

          <p class="m-2">
            İçli köfte ya da oruk, bulgurun hamur haline getirilerek içinin
            doldurulmasi suretiyle yapilan Orta Doğu mutfağinda bir yemektir.
            Aslen Levant mutfağina ait olan bu yemeğe kibbe ve bazi yörelerde
            dolgulu köfte de deniliyor. İçli köfte, iki türlü hazirlanir.
            Bunlardan birincisi haşlama usulüdür.
          </p>
        </b-list-group-item>

        <b-list-group-item
          href="#"
          disabled
          class="flex-column align-items-start"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="m-2">Pacanga Boregi</h5>
          </div>

          <p class="m-2">
            Paçanga böreği, yufka ile yapilan bir börek türüdür. İç malzemesi;
            kaşar peyniri, pastirma, domates, maydanoz ve biberden oluşmaktadir.
            Her bir malzeme ince ya da küçük parçalar halinde doğranir. Bu iç
            malzemesi yufkanin içine koyulur ve yufka, sigara böreğinde olduğu
            gibi sarilir.
          </p>
        </b-list-group-item>
      </b-list-group>
      <!-- Ana Yemekler -->
      <b-list-group>
        <h2>Ana Yemekler</h2>

        <b-list-group-item
          href="#"
          disabled
          class="flex-column align-items-start"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="m-2">Adana Kebap</h5>
          </div>

          <p class="m-2">
            Adana kebabi, Adana'ya özgü, "zirh" adi verilen, satira benzer bir
            biçak ile elde kiyilan parça etten yapilan Türk mutfağinda bir kebap
            veya şiş köfte çeşidi. Adana kebabini diğer kebaplardan ayiran en
            belirgin özellik kullanilan ettir.
          </p>
        </b-list-group-item>

        <b-list-group-item
          href="#"
          disabled
          class="flex-column align-items-start"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="m-2">Urfa Kebap</h5>
          </div>

          <p class="m-2">
            Urfa kebap, Şanliurfa ve çevre illere özgü Türk mutfağinda kebap
            türüdür. "Kebap" ve "Urfa" kelimesi buluşarak Urfa kebap adini
            doğurmuştur. Urfa kebap acisiz, zirhta çekilmiş sade kebaba verilen
            isimdir.
          </p>
        </b-list-group-item>

        <b-list-group-item
          href="#"
          disabled
          class="flex-column align-items-start"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="m-2">Ali Nazik</h5>
          </div>

          <p class="m-2">
            Alinazik, patlican ve et ile yapilan bir ana yemektir. Türk
            mutfağina ait olup genelde Gaziantep'e mâledilir. Gaziantep
            Alenaziği /Antep Alenaziği 04.05.2021 tarihinde Türk Patent ve Marka
            Kurumu tarafindan tescillenmiş ve coğrafi işaret almiştir.
          </p>
        </b-list-group-item>
      </b-list-group>
    </div>
    <!-- menu end -->

    <!-- gallery start -->
    <div class="gallery" id="gallery">
      <h1 class="text-center h1-m-100 mt-5">Galeri</h1>
      <b-container fluid class="p-4 bg-dark mt-5">
        <b-row class="mb-5">
          <b-col class="col-xs-6">
            <b-img
              thumbnail
              fluid
              src="https://davetver.com/assets/images/foto1.jpg"
              alt="Image 1"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="https://davetver.com/assets/images/foto2.jpg"
              alt="Image 2"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="https://davetver.com/assets/images/foto3.jpg"
              alt="Image 3"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="https://davetver.com/assets/images/foto4.jpg"
              alt="Image 3"
            ></b-img>
          </b-col>

          <b-col>
            <b-img
              thumbnail
              fluid
              src="https://davetver.com/assets/images/foto5.jpg"
              alt="Image 3"
            ></b-img>
          </b-col>
        </b-row>
        <b-row class="mb-5">
          <b-col>
            <b-img
              thumbnail
              fluid
              src="https://davetver.com/assets/images/foto6.jpg"
              alt="Image 3"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="https://davetver.com/assets/images/foto7.jpg"
              alt="Image 3"
            ></b-img>
          </b-col>

          <b-col>
            <b-img
              thumbnail
              fluid
              src="https://davetver.com/assets/images/foto8.jpg"
              alt="Image 3"
            ></b-img>
          </b-col>

          <b-col>
            <b-img
              thumbnail
              fluid
              src="https://davetver.com/assets/images/foto9.jpg"
              alt="Image 3"
            ></b-img>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="https://davetver.com/assets/images/foto10.jpg"
              alt="Image 3"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="https://davetver.com/assets/images/foto11.jpg"
              alt="Image 3"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="https://davetver.com/assets/images/foto12.jpg"
              alt="Image 3"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="https://davetver.com/assets/images/foto13.jpg"
              alt="Image 3"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="https://davetver.com/assets/images/foto14.jpg"
              alt="Image 3"
            ></b-img>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- gallery end -->
    <!-- contact start -->
    <div class="contact" id="contact">
      <h1 class="text-center h1-m-100">İletişim</h1>

      <div>
        <b-card no-body class="overflow-hidden location-card-bg">
          <b-row no-gutters>
            <b-col lg="6" md="12" sm="12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.050672925884!2d29.100874515093018!3d40.98037122909107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac76c429acedb%3A0xfa033d8a71e67189!2sMutab%C4%B1k%20Restaurant!5e0!3m2!1sen!2slt!4v1654905806677!5m2!1sen!2slt"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </b-col>
            <b-col lg="3" md="12" sm="12">
              <b-card-body>
                <b-list-group flush>
                  <b-list-group-item class="icon-card-bg"
                    ><b-icon icon="telephone" style="margin-right: 5px"></b-icon
                    >0216 314 15 15
                  </b-list-group-item>
                  <b-list-group-item class="icon-card-bg"
                    ><b-icon icon="envelope" style="margin-right: 5px"></b-icon
                    ><a
                      href="mailto:mutabikrestaurant@gmail.com"
                      style="text-decoration: none; color: black"
                      >mutabikrestaurant@gmail.com</a
                    >
                  </b-list-group-item>
                  <b-list-group-item class="icon-card-bg"
                    ><b-icon icon="facebook" style="margin-right: 5px"></b-icon
                    ><a
                      href="https://www.facebook.com/Mutab%C4%B1k-Restaurant-916423251890247/?ref=page_internal"
                      style="text-decoration: none; color: black"
                      >Mutabik Restaurant</a
                    >
                  </b-list-group-item>
                  <b-list-group-item class="icon-card-bg"
                    ><b-icon icon="instagram" style="margin-right: 5px"></b-icon
                    ><a
                      href="https://www.instagram.com/p/CebPyVUAjGm/"
                      style="text-decoration: none; color: black"
                      >@mutabikrestaurant</a
                    >
                  </b-list-group-item>
                </b-list-group>
              </b-card-body>
            </b-col>
            <b-col lg="3" md="12" sm="12">
              <b-card-body>
                <b-list-group>
                  <b-list-group-item class="list-group-item-bg">
                    <b-icon icon="calendar" style="margin-right: 5px"></b-icon
                    >Çalışma Saatleri
                  </b-list-group-item>

                  <b-list-group-item
                    class="
                      d-flex
                      list-group-item-bg
                      justify-content-between
                      align-items-center
                    "
                  >
                    Pazartesi 09:00 / 02:00
                  </b-list-group-item>

                  <b-list-group-item
                    class="
                      d-flex
                      list-group-item-bg
                      justify-content-between
                      align-items-center
                    "
                  >
                    Sali 09:00 / 02:00
                  </b-list-group-item>
                  <b-list-group-item
                    class="
                      d-flex
                      list-group-item-bg
                      justify-content-between
                      align-items-center
                    "
                  >
                    Çarşamba 09:00 / 02:00
                  </b-list-group-item>
                  <b-list-group-item
                    class="
                      d-flex
                      list-group-item-bg
                      justify-content-between
                      align-items-center
                    "
                  >
                    Perşembe 09:00 / 02:00
                  </b-list-group-item>
                  <b-list-group-item
                    class="
                      d-flex
                      list-group-item-bg
                      justify-content-between
                      align-items-center
                    "
                  >
                    Cuma 09:00 / 02:00
                  </b-list-group-item>
                  <b-list-group-item
                    class="
                      d-flex
                      list-group-item-bg
                      justify-content-between
                      align-items-center
                    "
                  >
                    Cumartesi 09:00 / 02:00
                  </b-list-group-item>
                  <b-list-group-item
                    class="
                      d-flex
                      list-group-item-bg
                      justify-content-between
                      align-items-center
                    "
                  >
                    Pazar 09:00 / 02:00
                  </b-list-group-item>
                </b-list-group>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
    <!-- contact end -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
<style scoped>
b-list-group-item {
  background-color: transparent !important;
  border: none;
}
.text-custom-red {
  color: #ee1c25 !important;
  font-family: "Courier New", Courier, monospace;
  border: none;
}
.text-custom-white {
  color: #eee !important;
}
.card-bg-about {
  background-color: transparent;
  border: none;
}
.location-card-bg,
.list-group-item-bg {
  background-color: transparent;
  border: none;
}
.icon-card-bg {
  background-color: transparent;
  border: none;
  color: black;
}
iframe {
  border-radius: 10px;
}
@media (min-width: 425px) {
  .rounded-0 {
    height: auto;
    width: 100%;
  }
}
@media (max-width: 425px) {
  .col {
    flex: unset;
    margin-top: 20px;
  }
  .row {
    margin-bottom: unset !important;
  }
}
.textMiddle {
  display: flex;
  justify-content: center;
  align-items: center;
}
.about,
.menu,
.gallery,
.contact {
  padding-top: 70px;
}
.h1-m-100 {
  margin-bottom: 70px;
}
</style>