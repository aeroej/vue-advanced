<template>
  <div>
    <div v-for="user in this.$store.state.news">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
  created() {
    // store/index.js의 FETCH_NEWS 실행   fetchNewList()   axios와 console.log
    this.$store.dispatch('FETCH_NEWS');

    /* vuex쓰기 전
    fetchNewsList()
      .then(response => this.users = response.data)
      .catch(error => console.log(error));
    */
  },
}
</script>

<style>
</style>
