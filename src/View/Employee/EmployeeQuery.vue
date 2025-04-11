<template>
    <div>
        <h2>Query Box</h2>
        <div v-if="showSuccessMessage" id="query-msg" class="success-msg">Query sent to trainer!</div>
        <textarea v-model="query" rows="4" placeholder="Write your query here..."></textarea>
        <button @click="sendQuery">Send Query</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: '',
            showSuccessMessage: false,
        };
    },
    methods: {
        sendQuery() {
            if (this.query.trim()) {
                this.showSuccessMessage = true;
                setTimeout(() => {
                    this.showSuccessMessage = false;
                }, 3000); // Hide the message after 3 seconds
                this.query = ''; // Clear the textarea
            }
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
    border: 1px solid green;
    border-radius: 5px;
}
textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
}
button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
}
button:hover {
    background-color: #0056b3;
}
</style>