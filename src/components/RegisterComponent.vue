<template>
  <div class="container">
    <h1>Register</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="username"
        :rules="usernameRules"
        label="Username"
        required
      ></v-text-field>
      <v-text-field
        v-model="firstname"
        :rules="firstnameRules"
        label="First Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="lastname"
        :rules="lastnameRules"
        label="Last Name"
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
import axios from 'axios';

export default {
  name: 'RegisterComponent',
  data() {
    return {
      valid: false,
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      usernameRules: [(v) => !!v || 'Username is required'],
      firstnameRules: [(v) => !!v || 'First name is required'],
      lastnameRules: [(v) => !!v || 'Last name is required'],
      emailRules: [
        (v) => !!v || 'Email is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [(v) => !!v || 'Password is required'],
    };
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        const payload = {
          username: this.username,
          firstname: this.firstname,
          lastname: this.lastname,
          password: this.password,
          email: this.email,
          role: 'admin',
        };

        try {
          const response = await axios.post('http://localhost:7000/api/register', payload);
          alert('Registration successful!');
          console.log(response.data);
        } catch (error) {
          console.error('Error during registration:', error);
          alert('Registration failed. Please try again.');
        }
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>