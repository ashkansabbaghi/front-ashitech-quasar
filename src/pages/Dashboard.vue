<template>
  <div class="dashboard">
    <!-- <div class="bg-contact"></div> -->
    <div class="container animate__animated animate__fadeIn">
      <div class="row parent">
        <div class="col-12">
          <div class="col-lg-12 text-center">
            <!-- image -->
            <a
              class="dashboard-profile"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#modalProfile"
            >
              <!-- <img
                v-if="user.profile.image"
                class="dashboard-img"
                :src="user.profile.image"
                alt="profile-img"
              />-->
              <img class="dashboard-img" src="~/assets/img/logo-ahitech.svg" alt="profile-img" />
            </a>
          </div>
        </div>
        <div class="col-12 pt-5">
          <div class="col-12 text-center">
            <!-- info -->
            <div class="dashboard-info">
              <h4 class="username" v-text="user.username"></h4>
              <h5 class="email" v-text="user.email"></h5>
              <h5 class="mobile" v-text="user.profile.mobile"></h5>
              <p class="bio" v-text="user.profile.bio"></p>
              <button
                class="btn edit-profile"
                @click="LogoutSub"
                data-bs-toggle="modal"
                data-bs-target="#modalEditProfile"
              >Logout</button>
            </div>
          </div>
        </div>
        <!-- tabs -->
      </div>
    </div>
  </div>
</template>

<script>
// import Chart from "@/components/Chart.vue";
import { mapState, mapGetters, mapActions } from "vuex";
import state from "vuex"
import { Notify } from "quasar";

export default {
  name: "chart",
  data: () => ({
    token: localStorage.getItem("token"),
    // user: localStorage.getItem("user"),

  }),

  components: {
    // Chart,
  },
  computed: {
    ...mapGetters('auth', ["user", "isToken"]),

  },
  async created() {
    if (!this.token) {
      this.$router.push('/login')
    }
  },
  methods: {
    ...mapActions('auth', ['LogoutSubmit']),
    async LogoutSub() {
      try {
        await this.LogoutSubmit(this.token)
        this.$q.notify({
          type: "positive",
          message: "success logOut ",
          timeout: 3000,
          actions: [
            { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
          ]
        })

        this.$router.push('/login')
      } catch (e) {
        console.log(e)
      }

    },

  },
};
</script>
