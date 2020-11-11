<template>
  <v-app>
    <div>
      <v-app-bar app flat>
        <div class="d-flex align-center">
          <v-img
            alt="두손소프트 로고"
            class="mr-2"
            contain
            src="@/assets/image/ts_logo.png"
            width="200"
          />
        </div>
        <div class="main-menu">
          <v-btn
            href=""
            target="_blank"
            text
            class="main-menu--item"
          >
            <span class="">상품관리</span>
          </v-btn>
          <v-btn
            href=""
            target="_blank"
            text
            class="main-menu--item selected"
          >
            <span class="">문서제공 관리</span>
          </v-btn>
          <v-btn
            href=""
            target="_blank"
            text
            class="main-menu--item"
          >
            <span class="">문서시스템 관리</span>
          </v-btn>
        </div>
      </v-app-bar>
      <div>
        
      </div>
    </div>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
