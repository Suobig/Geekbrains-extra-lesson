/* eslint no-param-reassign: 0 */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    post: {},
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setPost(state, post) {
      state.post = post;
    },
  },
  actions: {
    async fetchPosts(context) {
      try {
        const { data } = await axios.get('/posts');
        context.commit('setPosts', data);
        return data;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async fetchPost(context, id) {
      if (!id) return false;
      try {
        const { data } = await axios.get(`/posts/${id}`);
        context.commit('setPost', data);
        return data;
      } catch (e) {
        console.error(e);
        return false;
      }
    },
  },
});
