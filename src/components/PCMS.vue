<template>
  <div class="">
    <v-app-bar
      color="white"
      class="main-menu"
      outlined
      fixed
      :height="86"
    >
      <div></div>
      <img src="@/assets/image/ts_logo.png" alt="두손소프트 로고" class="main-menu__logo">
      <ul class="main-menu__wrapper">
        <li class="main-menu__item" v-for="item in menuList" :key="item.items">
          <v-btn 
            text
            class="mr-10"
            :to="{ name: item.name }"
            :hover="false"
            :ripple="false"
          >
            {{ item.text }}
          </v-btn>
        </li>
      </ul>
      <v-spacer></v-spacer>
      <div class="main-menu__logout">
        <span class="sub-text mr-2">관리자님 안녕하세요.</span>
        <v-btn
          small
          dark
          depressed
          color="blueGrey"
          class=""
          to="/"
        >로그아웃</v-btn>
      </div>
    </v-app-bar>
    <div style="height:87px"></div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  components: {
  },
  computed: {
  },
  methods: {
  },
  data: () => ({
    menuList: [
      {
        text: '상품관리',
        name: 'ADM001',
      },
      {
        text: '문서제공관리',
        name: 'ADM006',
      },
      {
        text: '문서시스템관리',
        name: 'ADM010',
      }
    ]
  })
}
</script>
