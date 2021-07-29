<template>
  <div>
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
.nav-bar {
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  &__logo {
    width: 60px;
    height: 24px;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
  }

  &__posts {
    width: 50%;
    display: flex;
    margin: 15px 0 40px 0;
    align-items: inherit;
    justify-content: space-between;
  }

  &__search {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px 0px 8px;
    color: gray;
    background-image: url("https://www.stephenwadechryslerdodgejeep.com/wp-content/plugins/pm-motors-plugin/modules/vehicle_save/images/check.png");
    background-repeat: no-repeat;
    background-size: 20px 20px;
    outline: 0;
    width: 309px;
    height: 50px;
    background: rgba(60, 60, 67, 0.1);
    border-radius: 10px;
  }

  &__posts-icon {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    width: 76px;
    height: 24px;
  }
  &__posts-title {
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 12px;
    text-align: center;
    letter-spacing: 0.5px;
    color: #ff008a;
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
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  @media screen and (max-width: 500px) {
    margin-right: -36px;
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
