import axios from "axios";

export const state = () => ({
  posts: [],
  filteredPosts: [],
  postsToShow: [],
  postToPage: {},
  currentPage: 1
});

export const mutations = {
  FETCH_POSTS(state, posts) {
    state.posts = posts;
  },
  CHANGE_PAGE(state, currentPage) {
    let allPosts = [...state.filteredPosts];
    let newPostsToShow = allPosts.slice(
      (state.currentPage - 1) * 9,
      state.currentPage * 9
    );
    state.postsToShow = [...newPostsToShow];
  },
  GET_POST(state, page) {
    state.postToPage = page;
  },
  UPDATE_POST(state, { body, id }) {
    let idNumb = Number(id);
    let oldPost = state.filteredPosts.find(pst => pst.id === idNumb);
    let updatedPost = { ...oldPost, body: body.body };
    let newArrayOfPosts = state.filteredPosts.filter(pst => pst.id !== idNumb);
    state.posts = [updatedPost, ...newArrayOfPosts];
    state.postToPage = {
      ...state.postToPage,
      body: body.body
    };
  },
  UPDATE_BODY_TEXT(state, body) {
    state.postToPage.body = body;
  },
  FILTRE_POSTS(state, text) {
    let filteredPosts = state.posts.filter(function(pst) {
      return pst.title.includes(text);
    });
    state.filteredPosts = [...filteredPosts];
  }
};

export const actions = {
  async fetchPosts(context) {
    var result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_embed=comments"
    );
    context.commit("FETCH_POSTS", result.data);
    context.commit("FILTRE_POSTS", "");
    context.commit("CHANGE_PAGE", 1);
  },
  async updatePost(context, { body, id }) {
    var result = await axios.patch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      { body }
    );
    context.commit("UPDATE_POST", { body: result.data, id });
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
  },
  searchPosts(context, text) {
    context.commit("FILTRE_POSTS", text);
    context.commit("CHANGE_PAGE", 1);
  }
};
