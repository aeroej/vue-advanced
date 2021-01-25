<template>
  <div>
    <section>
      <!-- 사용자 상세 정보 -->
      <user-profile :info="fetchedItem">
        <!-- <div slot="username">{{ fetchedItem.user }}</div> -->
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </router-link>
        <template slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <!-- 질문 댓글 -->
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile: UserProfile,
  },
  computed: {
    // 배열표기법 : getters에 정의한 이름 그대로 사용, {}객체표기법 : 사용할 이름 새로 정의
    ...mapGetters([
      'fetchedItem'
    ]),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>