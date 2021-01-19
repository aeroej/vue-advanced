<template>
  <div>
    <p>Title : {{ itemInfo.title }}</p>
    <small>{{ itemInfo.time_ago }} by {{ itemInfo.user }}</small>
    <p>Content : {{ itemInfo.content }}</p>
    <p>Comments count : {{ itemInfo.comments_count }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    itemInfo() {
      return this.$store.state.item;
    }
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>

<style>

</style>