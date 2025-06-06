<script setup>
import { ref, onMounted } from 'vue';
import ClubList from '@/components/ClubList.vue';
import clubService from '@/services/clubService.js';

const clubs = ref([]);

onMounted(() =>
{
  clubService.getClubs()
    .then(response => response.data)
    .then(data =>
    {
      clubs.value = data;
    })
    .catch(error =>
    {
      console.error("Error fetching clubs:", error);
    });
});
</script>

<template>
  <main>
    <ClubList :clubs="clubs" />
  </main>
</template>
