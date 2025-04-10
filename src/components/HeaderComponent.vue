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
          <v-list-item-title>{{ user?.userFirstName || "Unknown" }}{{ user?.userLastName || "User" }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="(item, index) in roleMenu"
          :key="index"
          @click="$router.push(item.route)"
        >
          <v-icon class="mr-2">{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
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
      user: null,
      menus: {
        admin: [
          { title: "Dashboard", icon: "mdi-view-dashboard", route: "/admin/dashboard" },
          { title: "Add Employee", icon: "mdi-plus", route: "/admin/add-employee" },
          { title: "Add Trainer", icon: "mdi-account-tie", route: "/admin/add-trainer" },
          { title: "Assign Course", icon: "mdi-account-tie", route: "/admin/assign-course" },
        ],
        employee: [
          { title: "Tasks", icon: "mdi-clipboard-check", route: "/employee/tasks" },
          { title: "Reports", icon: "mdi-file-document", route: "/employee/reports" },
        ],
        trainer: [
          { title: "Training Schedule", icon: "mdi-calendar-clock", route: "/trainer/schedule" },
          { title: "Trainees", icon: "mdi-account-group", route: "/trainer/trainees" },
        ],
      },
    };
  },
  computed: {
    userRole() {
      return this.user?.userRole || "";
    },
    roleMenu() {
      return this.menus[this.userRole] || [];
    },
  },
  created() {
    const userData = localStorage.getItem("user");
    if (userData) {
      this.user = JSON.parse(userData);
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
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
