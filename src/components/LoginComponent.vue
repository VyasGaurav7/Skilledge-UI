<template>
  <div class="form-container">
    <div class="image-container">
      <!-- <img :src="require('@/assets/dashboardTop.png')" alt="Logo" class="login-image" loading="eager"/> -->
    </div>

    <div class="form-box">
      <h2>Login</h2>
      <form @submit.prevent="loginUser">
        <div class="input-container">
          <input 
            v-model="loginData.userName" 
            type="text" 
            placeholder="Username" 
            :class="{'error-input': userNameError}" />
          <div v-if="userNameError" class="error-message" @input="loginData.userName.length > 0">{{ userNameError }}</div>
        </div>
        <div class="input-container">
          <input 
            v-model="loginData.password" 
            type="password" 
            placeholder="Password" 
            :class="{'error-input': passwordError}" />
          <div v-if="passwordError" class="error-message" @input="loginData.password.length > 0">{{ passwordError }}</div>
        </div>
        <button type="submit">Login</button>
        <!-- <p class="toggle-form" @click="navigateToRegister">Don't have an account? Register</p> -->
      </form>
    </div>
  </div>
</template>

<script>
import axios from '../axios';
export default {
  data() {
    return {
      loginData: {
        userName: '',
        password: '',
      },
      userNameError: '',
      passwordError: '',
    };
  },
  methods: {
    async loginUser() {
      this.resetErrors();
      if (this.loginData.userName === '') {
        this.userNameError = 'Username is required';
      }
      if (this.loginData.password === '') {
        this.passwordError = 'Password is required';
      }
      if (!this.userNameError && !this.passwordError) {
        try {
          const response = await axios.post('/login', {
            username: this.loginData.userName,
            password: this.loginData.password,
          });

          if(response){
            const { token, user } = response.data.data;
            console.log('Login response:', response.data);
            console.log('Login successful:', user);
            console.log('Token:', token);

            if (token && user) {
              localStorage.setItem('authToken', token);
              localStorage.setItem('user', JSON.stringify(user));
              
              if(user.userRole === 'admin') {
                this.$router.push({ name: 'AdminDashboard' });
              } else if(user.userRole === 'employee') {
                this.$router.push({ name: 'EmployeeDashboard' });
              } else if(user.userRole === 'trainer') {
                this.$router.push({ name: 'TrainerDashboard' });
              } else {
                this.$router.push({ name: 'login' });
              }
            }
          }
        } catch (error) {
          console.error('Login failed:', error.response?.data?.message || error.message);
          alert('Login failed. Please check your credentials.');
        }
      }
    },
    // navigateToRegister() {
    //   this.$router.push({ name: 'register' });
    // },
    resetErrors() {
      this.userNameError = '';
      this.passwordError = '';
    },
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  background-color: #ffffff;
  padding: 15px;
  margin-top: 15%;
}

.image-container {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.login-image {
  max-width: 150vw; 
  max-height: 150px;
  object-fit: contain;
}

.form-box {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 5px 20px 18px  rgba(122, 255, 177, 0.1);
  margin-top: 10%;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
}

.input-container {
  margin-bottom: 15px;
}

input {
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

input.error-input {
  border-color: red;
}

button {
  padding: 12px;
  width: 100%;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

.toggle-form {
  text-align: center;
  color: #007bff;
  cursor: pointer;
  margin-top: 10px;
  font-size: 14px;
}

@media (min-width: 768px) {
  .form-container {
    padding: 20px;
  }
  .form-box {
    max-width: 600px;
  }
}

@media (min-width: 1024px) {
  .form-container {
    padding: 40px;
  }
}
</style>
