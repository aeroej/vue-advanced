<template>
  <div>
    <div v-for="item in fetchedAsk">{{ item.title }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    // 배열표기법 | store getters에 저장한 이름 그대로 사용
    // #4
    ...mapGetters([
      'fetchedAsk'
    ]),

    // 객체표기법 | 컴포넌트에 사용할 이름: 'store getters에 저장한 이름'
    // #3
    // ...mapGetters({
    //   fetchedAsk: 'fetchedAsk'
    // }),

    // 불편해서 getters 사용
    // #2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // }),

    // 좀더 빠르게 연결하기위해 mapState 사용
    // #1
    // ask() {
    //   return this.$store.state;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>