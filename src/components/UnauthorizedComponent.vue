<template>
    <div class="unauthorized">
        <h1>403 - Unauthorized</h1>
        <p>You do not have permission to access this page.</p>
        <p>Redirecting to login in {{ countdown }} seconds...</p>
        <router-link to="/">Go back to Home</router-link>
    </div>
</template>

<script>
export default {
    name: "UnAuthorized",
    data() {
        return {
            countdown: 5
        };
    },
    mounted() {
        const timer = setInterval(() => {
            if (this.countdown > 0) {
                this.countdown--;
            } else {
                clearInterval(timer);
                this.$router.push({ name: 'login' });
            }
        }, 1000);
    },
};
</script>


<style scoped>
.unauthorized {
    text-align: center;
    margin-top: 50px;
}

.unauthorized h1 {
    font-size: 2.5rem;
    color: #ff4d4f;
}

.unauthorized p {
    font-size: 1.2rem;
    margin: 20px 0;
}

.unauthorized a {
    color: #1890ff;
    text-decoration: none;
    font-weight: bold;
}

.unauthorized a:hover {
    text-decoration: underline;
}
</style>