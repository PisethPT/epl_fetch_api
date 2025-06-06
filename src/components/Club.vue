<script setup>
import { defineProps } from 'vue';

const baseUrl = "https://pisethpt.github.io/events-data/";
const props = defineProps({
    club: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="card">
        <h2>{{ club.name }}</h2>
        <img :src="baseUrl + club.logo" alt="Club Logo" width="100" height="100">
        <p>Founded: {{ club.founded }}</p>
        <p>Stadium: {{ club.stadium }}</p>
        <p>Manager: {{ club.manager }}</p>
    </div>
</template>

<style scoped>
p, h2{
    color: black;
}
.card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 10px;
    padding: 20px;
    width: 300px;
    text-align: center;
}

.card img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>