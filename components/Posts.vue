<template>
  <div class="posts-container">
    <div class="posts-container__loop">
      <div
        class="posts-container__post"
        v-for="(post, index) in postsToShow"
        :v-show="index < 2"
        :key="post.id"
      >
        <post-info :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import PostInfo from "./Post.vue";

export default {
  name: "Posts",
  components: {
    PostInfo
  },
  computed: {
    postsToShow() {
      return this.$store.state.postsToShow;
    }
  }
};
</script>

<style lang="scss">
.posts-container {
  &__loop {
    display: flex;
    flex-wrap: wrap;
  }

  &__post {
    flex: 0 32%;
    height: 430px;
    margin-bottom: 2%;

    @media screen and (max-width: 500px) {
      flex: 0 100%;
    }
  }
}
</style>
