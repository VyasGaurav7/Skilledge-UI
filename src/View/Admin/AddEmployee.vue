<template>
    <div class="add-employee">
        <form id="employee-form" @submit.prevent="addEmployee">
            <div id="employee-msg" class="success-message" v-if="successMessage">
                {{ successMessage }}
            </div>
            <h2>Add New Employee</h2>
            
            <label for="emp-name">Name</label>
            <input type="text" id="emp-name" v-model="employee.name" required />

            <label for="emp-email">Company Email</label>
            <input type="email" id="emp-email" v-model="employee.email" required />

            <label for="emp-password">Generate Password</label>
            <input type="text" id="emp-password" v-model="employee.password" required />
            <button type="button" @click="generatePassword">Generate Password</button>

            <button type="submit">Add Employee</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AddEmployee',
    data() {
        return {
            employee: {
                name: '',
                email: '',
                password: '',
            },
            successMessage: '',
        };
    },
    methods: {
        generatePassword() {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let password = '';
            for (let i = 0; i < 8; i++) {
                password += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            this.employee.password = password;
        },
        addEmployee() {
            // Simulate adding employee logic
            this.successMessage = 'Employee added successfully!';
            this.resetForm();
        },
        resetForm() {
            this.employee.name = '';
            this.employee.email = '';
            this.employee.password = '';
        },
    },
};
</script>

<style scoped>
.add-employee {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}

label {
    display: block;
    margin-top: 10px;
    font-weight: bold;
    color: #555;
}

input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    box-sizing: border-box;
}

button {
    padding: 10px 15px;
    margin-top: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

button[type="button"] {
    margin-left: 10px;
    background-color: #28a745;
}

button[type="button"]:hover {
    background-color: #218838;
}

.success-message {
    color: green;
    margin-bottom: 15px;
    font-weight: bold;
    text-align: center;
}
</style>