<template>
    <div>
        <h2>Update Profile</h2>
        <div v-if="showSuccessMessage" class="success-msg">Profile updated successfully!</div>
        
        <label for="emp-name">Full Name</label>
        <input type="text" id="emp-name" v-model="fullName">

        <label for="emp-email">Email</label>
        <input type="email" id="emp-email" v-model="email">

        <label for="emp-dept">Department</label>
        <input type="text" id="emp-dept" v-model="department">

        <button @click="updateProfile">Update Profile</button>
    </div>
</template>

<script>
export default {
    name: 'ProfilePage',
    data() {
        return {
            fullName: '',
            email: '',
            department: '',
            showSuccessMessage: false,
        };
    },
    methods: {
        updateProfile() {
            // Logic to update the profile can go here
            this.showSuccessMessage = true;
            // Optionally, hide the message after a few seconds
            setTimeout(() => {
                this.showSuccessMessage = false;
            }, 3000);
        },
    },
};
</script>

<style scoped>
.success-msg {
    color: green;
    margin-bottom: 10px;
    font-weight: bold;
    background-color: #e6ffe6;
    padding: 10px;
    border: 1px solid #00cc00;
    border-radius: 5px;
}
label {
    display: block;
    margin-top: 10px;
    font-weight: bold;
}
input {
    display: block;
    margin-top: 5px;
    margin-bottom: 15px;
    padding: 8px;
    width: 100%;
    max-width: 400px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
button {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
button:hover {
    background-color: #0056b3;
}
</style>