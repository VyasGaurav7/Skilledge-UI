<template>
    <div class="container">
      <h1>EmployeeDashboard</h1><h2>Dashboard</h2>
      <div class="dashboard-stats">
        <div class="stat-card">Completed Courses: 3</div>
        <div class="stat-card">Assigned Courses: 2</div>
        <div class="stat-card">Ongoing Courses: 1</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'EmployeeDashboard',
  data(){
    return {
      
    }
  },
  created(){

  },
  methods: {
    
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
}

h2 {
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 20px;
}

.dashboard-stats {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.stat-card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  font-size: 1rem;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1 1 calc(33.333% - 20px);
  text-align: center;
}

.stat-card:hover {
  background-color: #f0f0f0;
  border-color: #ccc;
}
</style>