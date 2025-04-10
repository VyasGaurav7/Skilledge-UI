<template>
  <v-app>
    <!-- Only show header if not on the login page -->
    <HeaderComponent v-if="showHeader" />
    
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
  },
  computed: {
    showHeader() {
      return this.$route.name !== 'login' && this.$route.name !== 'UnAuthorized' && this.$route.name !== 'NotAllowed'; 
    },
  },
};
</script>
