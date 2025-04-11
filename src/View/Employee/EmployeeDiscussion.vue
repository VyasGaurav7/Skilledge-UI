<template>
    <div>
        <h2>Discussion with Trainer</h2>
        <div v-if="showSuccessMessage" id="discussion-msg" class="success-msg">
            Discussion posted successfully!
        </div>
        <textarea v-model="discussionText" rows="4" placeholder="Ask a question or start discussion..."></textarea>
        <button @click="postDiscussion">Post</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            discussionText: '',
            showSuccessMessage: false,
        };
    },
    methods: {
        postDiscussion() {
            if (this.discussionText.trim()) {
                this.showSuccessMessage = true;
                setTimeout(() => {
                    this.showSuccessMessage = false;
                }, 3000); // Hide message after 3 seconds
                this.discussionText = ''; // Clear the textarea
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
    border: 1px solid #b3ffb3;
    border-radius: 5px;
}
textarea {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
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