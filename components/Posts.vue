<template>
  <div class="posts-container">
    <div class="posts-container__loop">
      <div class="posts-container__post"
        v-for="(post, index) in postsToShow"
        :v-show="index < 2"
        :key="post.id">
        <post-info :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import  PostInfo  from "./Post.vue";

export default {
  name: "Posts",
  components: {
    PostInfo
  },
  computed: {
    postsToShow() {
      return this.$store.state.postsToShow;
    }
  },
  created() {
    this.postsToShow = this.$store.state.postsToShow;
    console.log(this.postsToShow);
  },
  computed: { ...mapState(["postsToShow"]) }
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
  }
}
</style>
