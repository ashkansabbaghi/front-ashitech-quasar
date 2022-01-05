<template>
    <!-- header -->
    <header class="header">
        <div class="container q-pa-md">
            <q-toolbar class="text-white">
                <img class="img-logo" src="~/assets/img/logo.svg" alt="logo" loading="lazy" />

                <q-space />

                <!--
        notice shrink property since we are placing it
        as child of QToolbar
                -->
                <q-tabs v-model="tab" shrink>
                    <router-link to="/dashboard" v-if="isToken">
                        <q-tab class="text-primary" name="dashboard" label="Dashboard" />
                    </router-link>
                    <router-link to="/login" v-else>
                        <q-tab class="text-primary" name="login" label="Login" />
                    </router-link>
                    <router-link to="/">
                        <q-tab class="text-primary" name="about" label="About" />
                    </router-link>
                    <!-- <q-tab class="text-primary" name="tab3" label="Tab 3" /> -->
                </q-tabs>
            </q-toolbar>
        </div>
    </header>
    <!-- header -->
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import {ref} from "vue"

export default {
    name: "Header",
    beforeCreate() {
        // this.$store.commit("initializeStore");
        // const token = this.$store.state.token;
        // if (token) {
        //     axios.defaults.headers.common["Authorization"] = "token " + token;
        // } else {
        //     axios.defaults.headers.common["Authorization"] = "";
        // }
    },
    data: () => ({
        select: undefined,
        isActiveMenuMob: false,
        value_scroll: 0,
        tab: ref('about')
    }),
    methods: {},
    computed: {
        ...mapGetters('auth',['isToken'])
    }
};
</script>
