<template>
  <q-layout view="lHh Lpr lFf">
    <AppHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

import { defineComponent, ref, defineAsyncComponent } from 'vue'
import AppHeader from "components/AppHeader.vue";

export default defineComponent({
  name: 'MainLayout',

  components: {
    // Login: defineAsyncComponent(() => import('components/Login')),
    AppHeader
  },


})
</script>
