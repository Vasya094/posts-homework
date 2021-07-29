<template>
  <div>
    <div class="nav-bar"  :class="inPostPage ? 'inpost-nav-bar' : ''">
    <div class="nav-bar__back" :id="inPostPage ? 'inpost-nav-bar__back' : ''">
    <a href="/" id="back-link">&lt; Назад</a>
    </div>
      <div>
        <span class="nav-bar__logo">Logo</span>
      </div>
      <div class="nav-bar__posts">
        <input 
         type="text"
         class="nav-bar__search"
         @input.stop="filterPosts"
         value=""
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
  computed: {
    inPostPage() {return this.$route.params.id ? true : false}
  },
  created() {
    console.log(this.inPostPage)
    this.$store.dispatch("fetchPosts", { self: this });
  },
  methods: {
    filterPosts
  }
};
function filterPosts(e) {
  console.log(11)
  this.$store.dispatch("searchPosts", e.target.value);
}
</script>

<style lang="scss">
@media screen and (max-width: 500px) {
  .nuxt-link-active {
    display: none;
  }
}
.inpost-nav-bar {
  margin-bottom: 20px;
      display: flex;
    flex-direction: row;
    justify-content: start;
  @media screen and (max-width: 500px) {
    display: none;
    .nav-bar__posts {
      display: none;
    }
  }

}
@media screen and (max-width: 500px) {
  #inpost-nav-bar__back {
display: block !important;
font-family: SF Pro Display;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 24px;
margin-right: 12%;
    margin-left: -3%;
text-align: center;
letter-spacing: 0.5px;
color: #FF008A !important;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
    }

     .inpost-nav-bar {
      flex-direction: row !important;
    }
}


.nav-bar {
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  &__back {
    display: none;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: baseline;
    margin-left: 32px;
    margin-top: 21px;
    justify-content: end;
    
  }

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
     @media screen and (max-width: 500px) {
        font-family: sans-serif;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 36px;
margin-top: 20px;
display: flex;
align-items: center;
color: #000000;
flex: none;
order: 0;
flex-grow: 1;
margin: 0px 10px
     }
  }

  &__posts {
    width: 50%;
    display: flex;
    margin: 15px 0 40px 0;
    padding-right: 30px;
    align-items: inherit;
    justify-content: space-between;

    @media screen and (max-width: 500px) {
      height: 25px;
    }
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
    padding-right: 0px;
    margin-top: 9px;
    width: 91px;
    height: 24px;
    &:hover {
    transform: scale3d(1.5, 1.5, 1.5);
      }

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
#back-link {
  color: #ff008a;
  text-decoration: none;
cursor: pointer;
}
</style>
