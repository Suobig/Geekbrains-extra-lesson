<template>
  <div class="post-item">
    <h3>
      <router-link :to="`/posts/${id}`">{{ title }}</router-link>
       
    </h3>
    <p>{{ body }}</p>
  </div>
</template>

<script>
export default {
  props: ['id', 'title', 'body']
}
</script>

<style lang="less" scoped>
.post-item {
  display: block;
  height: 300px;
  border: 1px solid #000;
  padding: 2px;
}
</style>