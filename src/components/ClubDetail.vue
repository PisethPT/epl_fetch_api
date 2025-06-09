<script setup>
import clubService from '@/services/clubService';
import { ref, onMounted } from 'vue';
import { defineProps } from 'vue';

const baseUrl = "http://localhost:32687/";
const club = ref(null);
const props = defineProps({
    id: {
        type: Number,
        required: true
    },
});

onMounted(() =>
{
    clubService.getClubById(props.id)
        .then((response) =>
        {
            club.value = response.data;
        })
        .catch((error) =>
        {
            console.error('get club fetching error: ', error);
        })

});
</script>

<template>
    <div v-if="club" class="card">
        <h2>{{ club.name }}</h2>
        <img :src="baseUrl + club.logo" alt="Club Logo" width="100" height="100">
        <p>City: {{ club.city }}</p>
        <p>Founded: {{ club.founded }}</p>
        <p>Stadium: {{ club.stadium }}</p>
        <p>Manager: {{ club.manager }}</p>
    </div>
</template>

<style scoped>
p,
h2 {
    color: black;
}

.card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 10px;
    padding: 20px;
    width: 300px;
    height: auto;
    text-align: center;
    justify-self: center;
    align-self: center;
    vertical-align: middle;
}

.card img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>