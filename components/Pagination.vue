<template>
  <paginate
    :page-count="pageCount"
    v-model="currentPage"
    :prev-text="null"
    :next-text="null"
    :click-handler="clickCallback"
    :container-class="'pagination'"
    :page-class="'pagination__page'"
    :page-link-class="'pagination__page-link'"
    active-class="active"
    :prev-class="'page-item'"
    :prev-link-class="'page-link'"
    :next-class="'page-item'"
    :next-link-class="'page-link'"
    :first-last-button="true"
    first-button-text='<span class="arrow">&#10094;</span>'
    last-button-text='<span class="arrow">&#10095;</span>'
  />
</template>

<script>
import Paginate from "vuejs-paginate";

export default {
  name: "Pagination",
  components: {
    Paginate
  },
  computed: {
    currentPage() {
      return this.$store.state.currentPage;
    },
    pageCount() {
      return Math.floor(this.$store.state.filteredPosts.length / 9);
    }
  },
  methods: {
    clickCallback(pageNum) {
      this.$store.dispatch("changePage", pageNum);
    }
  }
  // created() {
  //    this.$store.dispatch("changePage", 1);
  // }
};
</script>

<style lang="scss">
.pagination {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  list-style: none;

  position: relative;
  right: 8%;
  width: 272px;
  height: 32px;

  /* Inside Auto Layout */
  flex: none;
  order: 3;
  flex-grow: 0;
  margin: 40px 0px;

  @media screen and (max-width: 500px) {
    right: 17%;
  }

  & .active {
    font-family: SF Pro Text;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */
    text-align: center;
    border: 1px solid #ff008a;
  }

  &__page {
    position: static;
    width: 32px;
    height: 32px;
    left: 240px;
    top: 0px;
    list-style-type: none;

    background: #ffffff;
    border: 1px solid #e2e2e2;
    box-sizing: border-box;
    border-radius: 4px;

    /* Inside Auto Layout */
    flex: none;
    order: 6;
    flex-grow: 0;
    margin: 0px 8px;
  }
  .active &__page-link {
    color: #ff008a;
  }
  &__page-link {
    position: relative;
    /* left: 0%; */
    display: block;

    top: 5px;
    bottom: 5px;

    font-family: SF Pro Text;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */
    text-align: center;

    color: #000000;
  }
}

#lthan {
  position: relative;
  left: 32.67%;
  right: 17.33%;
  top: 25%;
  bottom: 44.12%;

  background: #e2e2e2;
  transform: matrix(0, 1, 1, 0, 0, 0);
}
.arrow {
  color: #e2e2e2;
}
</style>
