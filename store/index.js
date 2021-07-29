import axios from "axios";

export const state = () => ({
  posts: [],
  postsToShow: [],
  postToPage: {},
  currentPage: 1
});

export const mutations = {
  FETCH_POSTS(state, posts) {
    state.posts = posts;
  },
  CHANGE_PAGE(state, currentPage) {
    let allPosts = [...state.posts];
    state.currentPage = currentPage;
    let newPostsToShow = allPosts.slice((currentPage - 1) * 9, currentPage * 9);
    state.postsToShow = [...newPostsToShow];
  },
  GET_POST(state, page) {
    state.postToPage = page;
  },
  UPDATE_POST(state, newPost) {
    state.postToPage = {
      ...state.postToPage,
      body: newPost.body
    };
  }
};

export const actions = {
  async fetchPosts(context) {
    var result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_embed=comments"
    );
    context.commit("FETCH_POSTS", result.data);
    context.commit("CHANGE_PAGE", 1);
  },
  async updatePost(context, { body, id }) {
    var result = await axios.patch(
      `https://jsonplaceholder.typicode.com/posts/${id}}`,
      { body }
    );
    debugger;
    context.commit("UPDATE_POST", result.data);
  },
  changePage(context, nuberOfPage) {
    context.commit("CHANGE_PAGE", nuberOfPage);
  },
  async getPost(context, postId) {
    let post = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    let comments = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    context.commit("GET_POST", { ...post.data, comments: comments.data });
  }
};
