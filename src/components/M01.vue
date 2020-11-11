<template>
  <div class="">
    <v-toolbar
      fixed
      flat
      :height="60"
      color="#EFEFEF"
      class="sub-menu"
    >
      <ul class="sub-menu__list first pl-0">
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
          text: "상품목록 조회",
          name: "ADM001",
        },
        {
          text: "상품등록 및 결재요청",
          name: "ADM003",
        },
        {
          text: "검수(결재)내역 관리",
          name: "ADM005",
        }
      ]
    })
  }
</script>
