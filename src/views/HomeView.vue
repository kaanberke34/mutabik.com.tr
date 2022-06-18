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
          img-src="/assets/images/front.png"
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
                  src="/assets/images/foto15.jpg"
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
          <!-- baslangiclar start  -->
          <b-col col lg="3" md="4" sm="6" xl="4" class="middle-card">
            <Card
              class="m-2"
              v-b-modal.modal.modal-scrollable1
              cardTitle="BAŞLANGIÇLAR"
            />
            <b-modal id="modal-scrollable1" title="BAŞLANGIÇLAR" hide-footer>
              <b-list-group>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">GÜNÜN ÇORBASI</h5>
                    <!-- <small class="text-muted">Price: ₺30 </small> -->
                  </div>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">YUVALAMA</h5>
                  </div>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">TULUM & TEREYAĞI</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">FINDIK LAHMACUN</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">İÇLİ KÖFTE</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KAŞARLI MANTAR</h5>
                  </div>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">MÜCVER</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">YAPRAK CİĞER</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">GÜVEÇTE İŞKEMBE</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">PATATES TAVA</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">PATLICAN SÖĞÜRME</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KAFKAS MANTISI</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">PASTIRMALI SICAK HUMUS</h5>
                  </div>
                </b-list-group-item>
              </b-list-group>
            </b-modal>
          </b-col>
          <!-- baslangiclar end  -->
          <!-- firindan start  -->
          <b-col col lg="3" md="4" sm="6" xl="4" class="middle-card">
            <Card
              class="m-2"
              v-b-modal.modal.modal-scrollable2
              cardTitle="FIRINDAN"
            />

            <b-modal id="modal-scrollable2" title="FIRINDAN" hide-footer>
              <b-list-group>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">ANTEP LAHMACUN</h5>
                    <!-- <small class="text-muted">Price: ₺30 </small> -->
                  </div>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">CEVİZ LAHMACUN</h5>
                  </div>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">BAŞPINAR LAHMACUN</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">CEVİZLİ İSOTLU LAHMACUN</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KUŞBAŞILI PİDE</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KAŞARLI PİDE</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KUŞBAŞILI KAŞARLI PİDE</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KAVURMALI PİDE</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KAVURMALI KAŞARLI PİDE</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">SUCUKLU KAŞARLI PİDE</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KIYMALI PİDE</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KIYMALI KAŞARLI PİDE</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KARIŞIK PİDE</h5>
                  </div>
                </b-list-group-item>
              </b-list-group>
            </b-modal>
          </b-col>
          <!-- firindan end  -->
          <!-- salatalar start  -->
          <b-col col lg="3" md="4" sm="6" xl="4" class="middle-card">
            <Card
              class="m-2"
              v-b-modal.modal.modal-scrollable3
              cardTitle="SALATALAR"
            />

            <b-modal id="modal-scrollable3" title="SALATALAR" hide-footer>
              <b-list-group>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">ÇOBAN SALATASI</h5>
                    <!-- <small class="text-muted">Price: ₺30 </small> -->
                  </div>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">GAVURDAĞI SALATASI</h5>
                  </div>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">HARMAN SALATA</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KEKİK SALATASI</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">MEVSİM SALATASI</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">ROKA DOMATES SALATASI</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">PEYNİRLİ ROKA SALATASI</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">SÖĞÜŞ SALATA</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">YEŞİL SALATA</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">TAVUKLU SALATA</h5>
                  </div>
                </b-list-group-item>
              </b-list-group>
            </b-modal>
          </b-col>
          <!-- salatalar end  -->
          <!-- mezeler start  -->
          <b-col col lg="3" md="4" sm="6" xl="4" class="middle-card">
            <Card
              class="m-2"
              v-b-modal.modal.modal-scrollable4
              cardTitle="MEZELER"
            />

            <b-modal id="modal-scrollable4" title="MEZELER" hide-footer>
              <b-list-group>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">BADEMLİ PAZI</h5>
                    <!-- <small class="text-muted">Price: ₺30 </small> -->
                  </div>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">BARBUNYA PİLAKİ</h5>
                  </div>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">BEYİN SALATASI</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">DENİZ BÖRÜLCESİ</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">ÇİĞ KÖFTE</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">ATOM</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">BEĞENDİ</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">MUAMMARA</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">CERCEREZ</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">FAVA</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">HUMUS</h5>
                  </div>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">PAŞA</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">PATLICAN SALATASI</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">ZEYTİN SALATASI</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">ANTEP TURŞUSU</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">PANCAR TURŞUSU</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KAYA KORUĞU</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">HARDALLI PATATES</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">TAZE FASULYE</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">MANTAR SALATASI</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">ARAP KÖFTE</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KURU CACIK</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">HAYDARİ</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">SOĞAN SARIMSAK</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">AL BİBER</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">ORDOVR TABAĞI</h5>
                  </div>
                </b-list-group-item>
              </b-list-group>
            </b-modal>
          </b-col>
          <!-- mezeler end  -->
          <!-- kirmizi et ve kebap start -->
          <b-col col lg="3" md="4" sm="6" xl="4" class="middle-card">
            <Card
              class="m-2"
              v-b-modal.modal.modal-scrollable5
              cardTitle="KIRMIZI ET & KEBAP"
            />

            <b-modal
              id="modal-scrollable5"
              title="KIRMIZI ET & KEBAP"
              hide-footer
            >
              <b-list-group>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">ADANA</h5>
                    <!-- <small class="text-muted">Price: ₺30 </small> -->
                  </div>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">URFA</h5>
                  </div>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">BEYTİ</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">SARMA BEYTİ</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KANAT</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">TAVUK ŞİŞ</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">MUTABIK KÖFTE</h5>
                  </div>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">FISTIKLI KEBAB</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">MUTABIK SPESİYAL</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">PATLICANLI KEBAP</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">ABAGANNUŞ KEBAP</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">ABAGANNUŞ ŞİŞTEN</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">ALENAZİK KEBAP</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">ALENAZİK ŞİŞTEN</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">CARTLAK CİĞER</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">MUTABIKÇA</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">ÇÖP ŞİŞ</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KUZU ŞİŞ</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KUZU İNCİK</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KABURGA</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KARIŞIK IZGARA</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KUZU YAPRAK</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KUZU PİRZOLA</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">PİRZOLA KALEM</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KÜLBASTI</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KÜŞLEME</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">MAMUŞ</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">ŞAŞLIK</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">YAĞLI KARA</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">DANA ANTRİKOT</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">DANA LOKUM</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">BİLLUR</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KUZU BÖBREK</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KUZU YÜREK</h5>
                  </div>
                </b-list-group-item>
              </b-list-group>
            </b-modal>
          </b-col>
          <!-- kirmizi et ve kebap end -->
          <!-- tatlilar start -->
          <b-col col lg="3" md="4" sm="6" xl="4" class="middle-card">
            <Card
              class="m-2"
              v-b-modal.modal.modal-scrollable6
              cardTitle="TATLILAR"
            />

            <b-modal id="modal-scrollable6" title="TATLILAR" hide-footer>
              <b-list-group>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">BURMA KADAYIF</h5>
                    <!-- <small class="text-muted">Price: ₺30 </small> -->
                  </div>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KABAK TATLISI</h5>
                  </div>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">İNCİR TATLISI</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">HURMA TATLISI</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">SPESİYAL TATLI TABAĞI</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">DONDURMA (SADE)</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KATMER</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KÜNEFE</h5>
                  </div>
                </b-list-group-item>
              </b-list-group>
            </b-modal>
          </b-col>
          <!-- tatlilar end -->
          <!-- cerezler start -->
          <b-col col lg="3" md="4" sm="6" xl="4" class="middle-card">
            <Card
              class="m-2"
              v-b-modal.modal.modal-scrollable7
              cardTitle="ÇEREZLER"
            />

            <b-modal id="modal-scrollable7" title="ÇEREZLER" hide-footer>
              <b-list-group>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">ANTEP FISTIĞI</h5>
                    <!-- <small class="text-muted">Price: ₺30 </small> -->
                  </div>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">TUZLU FISTIK</h5>
                  </div>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">KARIŞIK FISTIK</h5>
                  </div>
                </b-list-group-item>
              </b-list-group>
            </b-modal>
          </b-col>
          <!-- cerezler end -->
          <!-- icecekler start -->
          <b-col col lg="3" md="4" sm="6" xl="4" class="middle-card">
            <Card
              class="m-2"
              v-b-modal.modal.modal-scrollable8
              cardTitle="İÇECEKLER"
            />

            <b-modal id="modal-scrollable8" title="İÇECEKLER" hide-footer>
              <b-list-group>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">COCA COLA</h5>
                    <!-- <small class="text-muted">Price: ₺30 </small> -->
                  </div>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">FANTA</h5>
                  </div>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">SPRİTE</h5>
                  </div>
                </b-list-group-item>

                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">CAPPY KARIŞIK</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">CAPPY VİŞNE</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">CAPPY ŞEFTALİ</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">CAPPY PORTAKAL</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">CAPPY KAYISI</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">LIPTON ICE TEA</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">SODA</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">ŞALGAM ACILI-ACISIZ</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">ŞALGAM LİTRE</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">AYRAN</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">SU</h5>
                  </div>
                </b-list-group-item>
                <b-list-group-item
                  href="#"
                  disabled
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="m-2">REDBULL</h5>
                  </div>
                </b-list-group-item>
              </b-list-group>
            </b-modal>
          </b-col>
          <!-- icecekler end  -->
          <!-- alkollu icecekler start -->
          <b-col col lg="3" md="4" sm="6" xl="4" class="middle-card">
            <Card
              class="m-2"
              v-b-modal.modal.modal-scrollable18
              cardTitle="ALKOLLÜ İÇECEKLER"
            />

            <b-modal
              id="modal-scrollable18"
              title="ALKOLLÜ İÇECEKLER"
              hide-footer
            >
              <b-row class="mb-5 mobileCustom">
                <!-- biralar start -->
                <b-col col lg="6" md="6" sm="12">
                  <Card
                    class="m-2"
                    v-b-modal.modal.modal-scrollable9
                    cardTitle="BİRALAR"
                  />

                  <b-modal
                    id="modal-scrollable9"
                    title="BİRALAR
"
                    hide-footer
                  >
                    <b-list-group>
                      <b-list-group-item
                        href="#"
                        disabled
                        class="flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="m-2">EFES MALT 50 CL</h5>
                          <!-- <small class="text-muted">Price: ₺30 </small> -->
                        </div>
                      </b-list-group-item>

                      <b-list-group-item
                        href="#"
                        disabled
                        class="flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="m-2">BOMONTİ FİLTRESİZ 50 CL</h5>
                        </div>
                      </b-list-group-item>

                      <b-list-group-item
                        href="#"
                        disabled
                        class="flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="m-2">TUBORG GOLD 50 CL</h5>
                        </div>
                      </b-list-group-item>
                      <b-list-group-item
                        href="#"
                        disabled
                        class="flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="m-2">MILLER 33 CL</h5>
                        </div>
                      </b-list-group-item>
                    </b-list-group>
                  </b-modal>
                </b-col>
                <!-- biralar end  -->
                <!-- kadeh saraplar start  -->
                <b-col col lg="6" md="6" sm="12">
                  <Card
                    class="m-2"
                    v-b-modal.modal.modal-scrollable10
                    cardTitle="KADEH ŞARAPLAR"
                  />
                  <b-modal
                    id="modal-scrollable10"
                    title="KADEH ŞARAPLAR"
                    hide-footer
                  >
                    <b-list-group>
                      <b-list-group-item
                        href="#"
                        disabled
                        class="flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="m-2">KADEH KIRMIZI</h5>
                          <!-- <small class="text-muted">Price: ₺30 </small> -->
                        </div>
                      </b-list-group-item>

                      <b-list-group-item
                        href="#"
                        disabled
                        class="flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="m-2">KADEH BEYAZ</h5>
                        </div>
                      </b-list-group-item>

                      <b-list-group-item
                        href="#"
                        disabled
                        class="flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="m-2">KADEH BLUSH-ROZE</h5>
                        </div>
                      </b-list-group-item>
                    </b-list-group>
                  </b-modal>
                </b-col>
                <!-- kadeh saraplar end  -->
                <!-- diger start  -->
                <b-col col lg="6" md="6" sm="12">
                  <Card
                    class="m-2"
                    v-b-modal.modal.modal-scrollable11
                    cardTitle="DİĞER"
                  />
                  <b-modal
                    id="modal-scrollable11"
                    title="DİĞER (Tek - Duble)
"
                    hide-footer
                  >
                    <b-list-group>
                      <b-list-group-item
                        href="#"
                        disabled
                        class="flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="m-2">KADEH RAKI</h5>
                          <!-- <small class="text-muted">Price: ₺30 </small> -->
                        </div>
                      </b-list-group-item>

                      <b-list-group-item
                        href="#"
                        disabled
                        class="flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="m-2">J&B WHISKY</h5>
                        </div>
                      </b-list-group-item>

                      <b-list-group-item
                        href="#"
                        disabled
                        class="flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="m-2">CHIVAS REGAL</h5>
                        </div>
                      </b-list-group-item>
                      <b-list-group-item
                        href="#"
                        disabled
                        class="flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="m-2">ABSOLUTE VODKA</h5>
                        </div>
                      </b-list-group-item>
                      <b-list-group-item
                        href="#"
                        disabled
                        class="flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="m-2">CHIVAS REGAL 12</h5>
                        </div>
                      </b-list-group-item>
                      <b-list-group-item
                        href="#"
                        disabled
                        class="flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="m-2">ISTANBLUE VODKA</h5>
                        </div>
                      </b-list-group-item>
                      <b-list-group-item
                        href="#"
                        disabled
                        class="flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="m-2">GİLBEY'S GIN</h5>
                        </div>
                      </b-list-group-item>

                      <b-list-group-item
                        href="#"
                        disabled
                        class="flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="m-2">GORDON GIN</h5>
                        </div>
                      </b-list-group-item>
                    </b-list-group>
                  </b-modal>
                </b-col>
                <!-- diger end  -->
              </b-row>
            </b-modal>
          </b-col>
          <!-- alkollu icecekler end -->
        </b-row>
      </b-container>
      <!-- Ara Sicaklar -->
      <!-- <b-list-group>
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
      </b-list-group> -->
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
              src="/assets/images/foto1.jpg"
              alt="Image 1"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="/assets/images/foto2.jpg"
              alt="Image 2"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="/assets/images/foto3.jpg"
              alt="Image 3"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="/assets/images/foto4.jpg"
              alt="Image 4"
            ></b-img>
          </b-col>

          <b-col>
            <b-img
              thumbnail
              fluid
              src="/assets/images/foto5.jpg"
              alt="Image 5"
            ></b-img>
          </b-col>
        </b-row>
        <b-row class="mb-5">
          <b-col>
            <b-img
              thumbnail
              fluid
              src="/assets/images/foto6.jpg"
              alt="Image 6"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="/assets/images/foto7.jpg"
              alt="Image 7"
            ></b-img>
          </b-col>

          <b-col>
            <b-img
              thumbnail
              fluid
              src="/assets/images/foto8.jpg"
              alt="Image 8"
            ></b-img>
          </b-col>

          <b-col>
            <b-img
              thumbnail
              fluid
              src="/assets/images/foto9.jpg"
              alt="Image 9"
            ></b-img>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="/assets/images/foto10.jpg"
              alt="Image 10"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="/assets/images/foto11.jpg"
              alt="Image 11"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="/assets/images/foto12.jpg"
              alt="Image 12"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="/assets/images/foto13.jpg"
              alt="Image 13"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="/assets/images/foto14.jpg"
              alt="Image 14"
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
                      href="https://www.instagram.com/mutabikrestaurant/"
                      style="text-decoration: none; color: black"
                      >@mutabikrestaurant</a
                    >
                  </b-list-group-item>
                  <b-list-group-item class="icon-card-bg"
                    ><b-icon icon="cart" style="margin-right: 5px"></b-icon
                    ><a
                      href="https://www.yemeksepeti.com/restaurant/uo6g/mutabik-restaurant"
                      style="text-decoration: none; color: black"
                      >Yemek Sepeti</a
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
import Card from "@/components/Card.vue";
export default {
  name: "HomeView",
  components: { Card },
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
  .mobileCustom {
    display: table;
    margin: auto;
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
.middle-card {
  display: flex;
  justify-content: center;
  align-items: center;
}
div [id^="vote_score"] {
  border-radius: 1.3rem !important;
}
</style>