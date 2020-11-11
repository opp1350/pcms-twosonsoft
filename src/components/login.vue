<template>
  <v-container>
    <v-content>
      <v-btn to="/About">Kung Fu</v-btn>
      <v-btn to="/home">Kung Fu</v-btn>
      <!-- <router-link to="/foo" tag="button">foo</router-link>
      <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
        {{ item.text }}
      </v-list-item> -->
      <router-view/>
    </v-content>
  </v-container>
</template>

<script>
export default {
  name: "login",

  data: () => ({

    //   items: [
    //   {
    //     icon: 'mdi-folder',
    //     text: 'Home',
    //     link: '/',
    //   },
    //   {
    //     icon: 'mdi-account-multiple',
    //     text: 'Starred',
    //     link: 'https://github.com/vuetifyjs/vuetify',
    //   },
    //   {
    //     icon: 'mdi-star',
    //     text: 'About',
    //     link: '/about',
    //   },
    // ]
    // whatsNext: [
    //   {
    //     text: "Explore components",
    //     href: "https://vuetifyjs.com/components/api-explorer"
    //   },
    //   {
    //     text: "Select a layout",
    //     href: "https://vuetifyjs.com/getting-started/pre-made-layouts"
    //   },
    //   {
    //     text: "Frequently Asked Questions",
    //     href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
    //   }
    // ]
  })
};
</script>