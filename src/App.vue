<template>
  <v-app>
    <!-- <login /> -->
    <v-main>
      <router-view>
      <!-- <v-btn @click.prevent="startQuiz"></v-btn>
      <v-container v-if="this.loginState === true">
        <login />
      </v-container> -->
    </v-main>
  </v-app>
</template>

<script>
import login from "./components/login";

export default {
  name: "App",

  components: {
    login
  },
  methods: {
    startQuiz(){
      this.loginState = true;
      console.log(this.loginState)
    }
  },
  data: () => ({
    loginState: false
  })
};
</script>
