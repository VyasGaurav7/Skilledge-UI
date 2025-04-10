<template>
    <div class="not-allowed">
        <h1>Access Denied</h1>
        <p>You do not have permission to view this page.</p>
    </div>
</template>

<script>
export default {
    name: "NotAllowed",
};
</script>

<style scoped>
.not-allowed {
    text-align: center;
    margin-top: 50px;
    color: #ff4d4f;
}

.not-allowed h1 {
    font-size: 2rem;
    margin-bottom: 10px;
}

.not-allowed p {
    font-size: 1.2rem;
}
</style>