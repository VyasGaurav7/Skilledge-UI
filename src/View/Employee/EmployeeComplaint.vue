<template>
    <div>
        <h2>Complaint Section</h2>
        <div v-if="showSuccessMessage" id="complaint-msg" class="success-msg">
            Complaint submitted successfully!
        </div>
        <label for="course-name">Course Name</label>
        <input type="text" id="course-name" v-model="courseName" />

        <label for="comp-desc">Description</label>
        <textarea id="comp-desc" rows="3" v-model="description"></textarea>

        <label for="complaint">Complaint</label>
        <textarea id="complaint" rows="4" v-model="complaint"></textarea>

        <button @click="submitComplaint">Submit</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            courseName: '',
            description: '',
            complaint: '',
            showSuccessMessage: false,
        };
    },
    methods: {
        submitComplaint() {
            // Logic to handle the complaint submission
            this.showSuccessMessage = true;

            // Optionally, clear the form fields
            this.courseName = '';
            this.description = '';
            this.complaint = '';

            // Hide the success message after a delay
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
input, textarea {
    width: 100%;
    margin-top: 5px;
    margin-bottom: 15px;
    padding: 8px;
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