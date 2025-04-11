<template>
    <div>
        <h2>Quiz: JavaScript Basics</h2>
        <div v-if="message" class="success-msg">{{ message }}</div>
        <label>What does "===" mean in JavaScript?</label>
        <select v-model="selectedAnswer">
            <option value="">--Select Answer--</option>
            <option value="typeCheck">Equality with type check</option>
            <option value="equality">Only equality</option>
            <option value="assignment">Assignment</option>
        </select>
        <button @click="submitAnswer">Submit</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedAnswer: '',
            message: ''
        };
    },
    methods: {
        submitAnswer() {
            if (this.selectedAnswer) {
                this.message = 'Answer submitted successfully!';
            } else {
                this.message = 'Please select an answer.';
            }
        }
    }
};
</script>

<style scoped>
.success-msg {
    color: green;
    font-weight: bold;
    margin-top: 10px;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
}

select {
    margin-bottom: 12px;
    padding: 6px;
    font-size: 14px;
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;
}

button:hover {
    background-color: #0056b3;
}
</style>