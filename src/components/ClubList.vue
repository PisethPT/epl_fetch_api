<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
import Club from '@/components/Club.vue';

const props = defineProps({
    clubs: {
        type: Array,
        required: true
    }
});
</script>

<template>
    <div>
        <h1>Clubs</h1>
        <div class="club-list">
            <li v-for="club in clubs" :key="club.id">
                <Club :club="club" />
            </li>
        </div>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
    color: black;
}

.club-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
}
</style>