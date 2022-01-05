<template>
  <form
    @submit.prevent="loginSub()"
    class="tab-pane text-center fade show active"
    id="home"
    role="tabpanel"
    aria-labelledby="home-tab"
  >
    <span class="login-txt error" v-if="errors.length">
      <span v-for="(v , i) in errors" :key="i">{{ v }}</span>
    </span>
    <!-- <a class="login-txt success" v-if="status===200" >welcome</a> -->
     <p class="text-weight-bolder text-primary">login test : </p>
     <p class="text-weight-bolder text-primary">username( <strong>admin</strong> ) , password(<strong>123</strong>)</p>
    <input
      v-model="user.username"
      class="input-custom"
      type="text"
      name="username"
      placeholder="userName"
      size="30"
      required
    />
    <input
      v-model="user.password"
      class="input-custom"
      type="password"
      name="password"
      placeholder="password"
      size="10"
      required
    />
    <button class="btn btn-send relative-position" :disabled="loading">
      <span v-show="!loading">LOGIN</span>
      <!-- loading btn -->
      <div class="loadingio-spinner-ellipsis-e0ra3xed6zw" v-show="loading">
        <div class="ldio-fa1os3dl4u4">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </button>

    <!-- <a class="text-weight-bold" href="#">forget password ?</a> -->
  </form>
</template>


<script>
import { api } from 'boot/axios'
import { mapGetters, mapActions } from "vuex";
import store from "vuex"
import { Notify } from 'quasar'

let URL_login = "login/";

export default {
  name: "Login",
  data: () => ({
    user: {
      username: "",
      password: "",
    },
    errors: [],
    loading: false,

  }),
  computed: {
  },
  methods: {
    ...mapActions('auth', ["loginSubmit"]),

    async loginSub() {
      this.loading = true;
      try {
        await this.loginSubmit(this.user)
        this.loading = false;

        this.$q.notify({
          type: "positive",
          message: "welcome ! success login ",
          timeout: 3000,
          actions: [
            { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
          ]
        })
        this.$router.push('/dashboard')
        //  console.log(toPath)

      } catch (e) {
        this.loading = false;
        if (e.response) {
          console.log(e.response.data.non_field_errors)
          this.$q.notify({
            type: "negative",
            message: e.response.data.non_field_errors,
            timeout: 3000,
            actions: [
              { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
            ]
          })
        } else if (e.message) {
          console.log(e.message)
        } else {
          console.log(e)
        }
      }


    },
  },

};
</script>
