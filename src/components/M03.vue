<template>
  <div class="">
    <v-toolbar
      fixed
      flat
      :height="60"
      color="#EFEFEF"
      class="sub-menu"
    >
      <ul class="sub-menu__list third pl-0">
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
          text: "문서목록관리",
          name: "ADM010",
        },
        {
          text: "코드관리",
          name: "ADM012",
        }
      ]
    })
  }
</script>
