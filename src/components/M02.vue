<template>
  <div class="">
    <v-toolbar
      fixed
      flat
      :height="60"
      color="#EFEFEF"
      class="sub-menu"
    >
      <ul class="sub-menu__list second pl-0">
        <li class="sub-menu__list" v-for="item in subMenuList" :key="item.items">
          <v-btn
          class="sub-menu__list__btn mr-7"
          :to="{ name: item.name }"
          text
          >{{ item.text }}</v-btn>
        </li>
      </ul>
    </v-toolbar>
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data: () => ({
      subMenuList: [
        {
          text: "통약관 관리",
          name: "ADM006",
        },
        {
          text: "개인화약관 발송내역",
          name: "ADM008",
        }
      ]
    })
  }
</script>
