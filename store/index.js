
import axios from 'axios';

export const state = () => ({
  posts: [],
  postsToShow: [],
  currentPage: 1,
})

export const mutations = {
  FETCH_POSTS(state, posts) {
      state.posts = posts
    },
  CHANGE_PAGE(state, {currentPage, postsToShow}) {
    state.currentPage = currentPage
    state.postsToShow = [...postsToShow]
  }
}

export const actions = {
    async fetchPosts(context) {
      var result = await axios.get('https://jsonplaceholder.typicode.com/posts?_embed=comments');
      context.commit("FETCH_POSTS", result.data);
    },
    async changePage (context, nuberOfPage) {
      var result = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${nuberOfPage}&_limit=9`);
      context.commit('CHANGE_PAGE', {nuberOfPage, postsToShow: result.data})
    }
}