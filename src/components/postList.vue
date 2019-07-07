<template>
  <ul class="post-list">
    <post-item v-for="post in posts" 
               :id="post.id"
               :body="post.body" 
               :title="post.title"
               :key="post.id">
    </post-item>
  </ul>
</template>

<script>
import postItem from "@/components/postItem";
export default {
  name: "postList",
  components: {
    postItem
  },
  props: ["posts"]
};
</script>

<style lang="less" scoped>
  .post-list {
    margin: 0;
    padding: 0;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
</style>
