<template>
    <div>
        <form id="trainer-form" @submit.prevent="addTrainer">
            <div id="trainer-msg" v-if="successMessage" class="success-message">
                {{ successMessage }}
            </div>
            <h2>Add New Trainer</h2>
            <label for="trainer-name">Trainer Name</label>
            <input
                type="text"
                id="trainer-name"
                v-model="trainer.name"
                required
            />

            <label for="trainer-email">Trainer Email</label>
            <input
                type="email"
                id="trainer-email"
                v-model="trainer.email"
                required
            />

            <label for="trainer-course">Assigned Course</label>
            <input
                type="text"
                id="trainer-course"
                v-model="trainer.course"
                required
            />

            <button type="submit">Add Trainer</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "AddTrainer",
    data() {
        return {
            trainer: {
                name: "",
                email: "",
                course: "",
            },
            successMessage: "",
        };
    },
    methods: {
        addTrainer() {
            // Simulate adding trainer logic
            if (
                this.trainer.name &&
                this.trainer.email &&
                this.trainer.course
            ) {
                this.successMessage = "Trainer added successfully!";
                this.trainer = { name: "", email: "", course: "" }; // Reset form
            } else {
                this.successMessage = "Please fill out all fields.";
            }
        },
    },
};
</script>

<style scoped>
/* General form styling */
form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Form heading */
h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

/* Label styling */
label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #555;
}

/* Input styling */
input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 14px;
}

/* Button styling */
button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

/* Success message styling */
.success-message {
    color: green;
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
}
</style>
