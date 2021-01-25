<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="ask-list">
      <li v-for="item in fetchedAsk" class="post">
        <div class ="points">
          {{  item.points  }}
        </div>
        <div>
          <p class="ask-title">
            <router-link :to="`/item/${item.id}`">
              {{ item. title }}
            </router-link>
            <small class="comments-count"> {{ item.comments_count }} Comments </small>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus.js";
// import { mapGetters } from 'vuex';

export default {
  components: {
    ListItem: ListItem
  },
  created() {
    bus.$emit("start:spinner");
    this.$store.dispatch("FETCH_ASK")
        .then(() => {
          console.log("fetched");
          bus.$emit("end:spinner");
        })
        .catch(error => {
          console.log(error);
      });
    // setTimeout(() => {
    //   this.$store.dispatch("FETCH_ASK")
    //     .then(() => {
    //       console.log("fetched");
    //       bus.$emit("end:spinner");
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // }, 3000);
  }
  // computed: {
  //   ...mapGetters([
  //     'fetchedAsk'
  //   ]),
  // },
  // created() {
  //   this.$store.dispatch('FETCH_ASK');
  // }
};
</script>