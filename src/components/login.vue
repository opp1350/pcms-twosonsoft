<template>
    <v-form class="login">
      <v-container class="" style="width: 350px;">
        <img src="@/assets/image/ts_logo.png" alt="두손소프트 로고" class="login__logo-img">
        <p class="login__main-text mb-8">개인화약관 홈페이지 관리자</p>
        <!-- ID -->
        <v-text-field
          outlined
          label="ID"
          hide-details
          background-color="white"
          class="mb-3"
          v-model="id"
        ></v-text-field>
        <!-- Password -->
        <v-text-field
          outlined
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          label="Password"
          @click:append="show = !show"
          hide-details
          background-color="white"
          class="mb-3"
        ></v-text-field>
        <!-- login btn -->
        <v-btn 
          color="accent"
          large
          dark
          block
          depressed
          to="/PCMS/M01/ADM001"
        >로그인</v-btn>
      </v-container>
    </v-form>
</template>

<script>
export default {

  data: () => ({
    show: false,
    password: "Password",
    id: "admin"
  })
};
</script>
