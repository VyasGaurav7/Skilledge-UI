<template>
  <div>
    <!-- App Bar -->
    <v-app-bar app color="primary" dark clipped-left>
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <v-toolbar-title class="text-center">
        <span class="app-name">SKILL-EDGE</span>
      </v-toolbar-title>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" app temporary clipped>
      <v-list-item class="mt-5">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Gaurav Vyas</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense>
        <v-list-item>
          <v-icon class="mr-2">mdi-account</v-icon>
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
        <v-divider />
        <v-list-item @click="logout">
          <v-icon class="mr-2">mdi-logout</v-icon>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("authToken");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.app-name {
  font-family: Arial, sans-serif;
  font-weight: bold;
}
</style>
