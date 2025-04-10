<template>
    <div class="assign-course-container">
        <form id="assign-form" @submit.prevent="assignCourse">
            <div id="assign-msg" :class="{'success-message': true, 'hidden': !showMessage}">
                {{ message }}
            </div>
            <h2>Assign Course to Employee</h2>
            <div class="form-group">
                <label for="assign-emp">Employee Name</label>
                <input type="text" id="assign-emp" v-model="employeeName" required />
            </div>
            <div class="form-group">
                <label for="assign-course">Course</label>
                <select id="assign-course" v-model="selectedCourse" required>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="JavaScript Basics">JavaScript Basics</option>
                    <option value="Advanced Excel">Advanced Excel</option>
                </select>
            </div>
            <button type="submit">Assign Course</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            employeeName: '',
            selectedCourse: '',
            showMessage: false,
            message: '',
        };
    },
    methods: {
        assignCourse() {
            if (this.employeeName && this.selectedCourse) {
                this.message = `Course "${this.selectedCourse}" assigned to "${this.employeeName}" successfully!`;
                this.showMessage = true;
                this.employeeName = '';
                this.selectedCourse = '';
                setTimeout(() => {
                    this.showMessage = false;
                }, 3000);
            }
        },
    },
};
</script>

<style scoped>
.assign-course-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: #333;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #555;
}

input,
select {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
}

input:focus,
select:focus {
    border-color: #007bff;
    outline: none;
}

button {
    width: 100%;
    padding: 12px;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

.success-message {
    color: green;
    text-align: center;
    margin-bottom: 15px;
    font-weight: bold;
}

.hidden {
    display: none;
}
</style>