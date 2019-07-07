<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <post-list :posts="posts"></post-list>
  </div>
</template>

<script>
import postList from "@/components/postList";

export default {
  name: 'home',
  components: {
     postList,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }, 
  },
  created() {
    this.$store.dispatch('fetchPosts');
  },
};
</script>
