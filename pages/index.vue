<template>
  <div class="main-page-container">
    <div class="main-page">
      <div class="posts-pagination">
        <Posts />
        <Pagination />
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "../components/Pagination.vue";
import Posts from "../components/Posts.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "index",
  components: {
    Pagination,
    Posts,
    Footer
  }
};
</script>

<style lang="scss">
.nuxt-link-active {
  text-decoration: none;
}

.posts-pagination {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  @media screen and (max-width: 500px) {
    margin-right: 33px;
  }
}

.footer {
  width: 100%;
  height: 109px;
  margin-top: 130px;
  padding: 166px auto 39px 131px;
  border-top: 1px solid lightgray;
}
</style>
