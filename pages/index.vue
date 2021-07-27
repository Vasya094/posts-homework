<template>
  <div class="main-page">
    <div class="nav-bar">
      <div>
        <span class="nav-bar__logo">Logo</span>
      </div>
      <div class="nav-bar__posts">
        <input type="text" class="nav-bar__search" placeholder="Поиск" />
        <div class="nav-bar__posts-icon">
          <span>#</span>
          <span class="nav-bar__posts-title">Посты</span>
        </div>
      </div>
    </div>
    <div class="posts-pagination">
      <Posts />
      <Pagination />
    </div>
  </div>
</template>

<script>
import Pagination from "../components/Pagination.vue";
import Posts from "../components/Posts.vue";

export default {
  name: "index",
  components: {
    Pagination,
    Posts
  },
  created() {
    this.$store.dispatch("fetchPosts", { self: this });
  }
};
</script>

<style lang="scss">
.nav-bar {
  display: flex;
  flex-direction: row;

  &__logo {
    position: absolute;
    width: 60px;
    height: 24px;
    left: 90px;
    top: 37px;

    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;

    color: #000000;
  }

  &__search {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px 0px 8px;
    color: gray;
  background-image: url('https://www.stephenwadechryslerdodgejeep.com/wp-content/plugins/pm-motors-plugin/modules/vehicle_save/images/check.png');
   background-repeat: no-repeat;
   background-size: 20px 20px;
    outline: 0;

    position: absolute;
    width: 309px;
    height: 50px;
    left: 588px;
    top: 24px;

    background: rgba(60, 60, 67, 0.1);
    border-radius: 10px;
  }

  &__posts-icon {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: absolute;
    width: 76px;
    height: 24px;
    left: 987px;
    top: 37px;
  }
  &__posts-title {
    position: static;
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 12px;
    /* identical to box height, or 86% */
    text-align: center;
    letter-spacing: 0.5px;

    color: #ff008a;

    /* Inside Auto Layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 7px;
  }
}

.posts-pagination {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  width: 90wv;
  margin-left: auto;
  margin-right: auto;

  position: absolute;

  height: 1442px;
  left: 90px;
  top: 120px;
}
</style>
