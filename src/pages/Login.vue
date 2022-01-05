<template>
  <div class="contact-page">
    <!-- <div class="bg-contact"></div> -->
    <div class="container animate__animated animate__fadeIn">
      <div class="container-fluid contact parent">
        <div class="row">
          <!-- image -->
          <div class="col-lg-7 text-center text-lg-start q-pa-lg">
            <!-- <span>{{ token }}</span> -->
            <img class="img-login" src="~/assets/img/iullustratio-login.svg" alt="login image" />
          </div>
          <!-- login -->
          <div class="col-lg-5 msg q-pa-lg">
            <div class="card text-left">
              <q-card class="card-body">
                <q-tabs
                  v-model="tab"
                  dense
                  class="text-grey"
                  active-color="primary"
                  indicator-color="primary"
                  align="justify"
                  narrow-indicator
                >
                  <q-tab name="Login" label="Login" />
                  <q-tab name="Register" label="Register" />
                </q-tabs>

                <q-separator />

                <q-tab-panels class="q-tab-panels" v-model="tab" animated>
                  <q-tab-panel name="Login">
                    <Login />
                  </q-tab-panel>

                  <q-tab-panel name="Register">
                    <Register />
                  </q-tab-panel>
                </q-tab-panels>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "components/AppLogin.vue";
import Register from "components/AppRegister.vue";
import { mapGetters } from "vuex";
import { ref } from 'vue'

export default {
  data: () => ({
    // token: localStorage.getItem('token'),
  }),
  components: {
    Login,
    Register,
  },
  computed: {
    // ...mapGetters("login", ["token"]),
  },
  setup() {
    return {
      tab: ref('Login')
    }
  }
};
</script>
