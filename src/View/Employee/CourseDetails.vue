<template>
    <div>
        <h2>Course Content</h2>
        <p><strong>Title:</strong> Advanced Java</p>
        <p><strong>Description:</strong> Learn advanced Java concepts including multithreading, collections, and JDBC.</p>

        <div class="video-box">
            <iframe src="https://www.youtube.com/embed/rx5V8UHc5d0" allowfullscreen></iframe>
        </div>

        <label for="course-discussion">Course Discussion</label>
        <textarea
            id="course-discussion"
            v-model="discussionText"
            rows="4"
            placeholder="Share your thoughts..."
        ></textarea>
        <button @click="postDiscussion">Post</button>
        <div v-if="showSuccessMessage" class="success-msg">
            Discussion saved successfully!
        </div>
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
                }, 3000); // Hide the message after 3 seconds
                this.discussionText = ''; // Clear the textarea
            }
        },
    },
};
</script>

<style scoped>
.success-msg {
    color: green;
    margin-top: 10px;
    font-weight: bold;
    font-size: 14px;
}

.video-box {
    margin: 20px 0;
}

.video-box iframe {
    width: 100%;
    height: 315px;
    border: none;
}

textarea {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    resize: vertical;
}

button {
    margin-top: 10px;
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
}

button:hover {
    background-color: #0056b3;
}
</style>