<template>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <h2>AdminDashboard</h2>
            <div class="grid">
              <div class="card">Total Employees: 25</div>
              <div class="card">Total Trainers: 5</div>
              <div class="card">Total Courses: 12</div>
            </div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'AdminDashboard',
    data() {
      return {
        // Add dashboard-specific data here
      }
    },
    created() {
      // Initialization logic here if needed
    },
    methods: {
      // Add dashboard-specific methods here
    }
  }
  </script>
  
  <style scoped>
  
  h2 {
    margin-bottom: 20px;
    color: var(--secondary);
    font-size: 26px;
  }

  
  .card {
    background: var(--white);
    padding: 20px;
    border-radius: 12px;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    margin-bottom: 30px;
  }
  
  </style>
  