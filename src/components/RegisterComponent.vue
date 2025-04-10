<template>
  <div class="container">
    <h1>Register</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
        required
        type="password"
      ></v-text-field>
      <v-btn
        color="primary"
        @click="submit"
      >
        Register
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'DashboardComponent',
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

</style>