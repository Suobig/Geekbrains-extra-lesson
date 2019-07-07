<template>
  <div class="post">
    <h1>{{ detailedPost.title }}</h1>
    <p>{{ detailedPost.body }}</p>  
    <router-link to="/">Назад</router-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    detailedPost: {
      title: '',
      body: '',
    }
  }),
  async created() {
    // console.log(this.$route);
    
    this.detailedPost = await this.$store.dispatch('fetchPost', this.$route.params.id);
  },
}
</script>

<style lang="less" scoped>

</style>
