<template>
  <div>
    <div class="nav-bar">
      <div>
        <span class="nav-bar__logo">Logo</span>
      </div>
      <div class="nav-bar__posts">
        <input 
         type="text"
         v-model="filterText"
         class="nav-bar__search"
         @change="filterPosts"
         placeholder="Поиск">
        </input>
        <NuxtLink to="/">
          <div class="nav-bar__posts-icon">
            <span class="nav-bar__moni-icon">
            <img class="nav-bar__img-moni" src="../static/moni.jpg" />
            </span>
            <span class="nav-bar__posts-title">Посты</span>
          </div>
        </NuxtLink>
      </div>
    </div>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";

export default {
  components: { Footer },
  data() {
return {
  filterText: ''
}
  },
  created() {
    this.$store.dispatch("fetchPosts", { self: this });
  },
  methods: {
    filterPosts
  }
};

function filterPosts() {
  this.$store.dispatch("filterPosts", this.filterText);
}
</script>

<style lang="scss">
.nav-bar {
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

    &__img-moni {
    width: 24px;
  }

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
    padding-right: 30px;
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
    align-items: center;
    flex-direction: row;
    padding-right: 0px;
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
</style>
