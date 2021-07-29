<template>
  <div class="one-post" @click.stop="goToPost(post.id)">
    <div class="one-post__img-cont">
      <img
        src="https://static.tildacdn.com/tild6430-3031-4631-a634-383665653034/Saly-9.png"
        alt="awatar girl"
        class="one-post__awatar"
      />
    </div>
    <div class="one-post__text-cont">
      <p class="one-post__title">{{ post.title.substring(0, 20) }}</p>
      <p class="one-post__body">{{ post.body }}</p>
    </div>
    <div class="one-post__post-footer">
      <span class="one-post__count"
        ><span class="material-icons md-24">chat_bubble_outline</span>
        <span class="one-post__count-number">{{
          post.comments.length
        }}</span></span
      >
      <div class="one-post__pen-icon-cont">
        <span class="one-post__pen-icon">
          <img src="../static/icons/pen.svg" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "vue-awesome";

export default {
  name: "PostInfo",
  props: ["post"],
  components: {
    "v-icon": Icon
  },
  methods: {
    goToPost(id) {
      this.$router.push(`/post/${id}`);
    }
  }
};
</script>

<style lang="scss">
.one-post {
  position: static;
  width: 86%;
  height: 430px;
  left: 664px;
  top: 0px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 20px;
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 6px 23px;
  cursor: pointer;

  &__img-cont {
    max-height: 227px;
    overflow-y: hidden;
  }

  &__awatar {
    position: static;
    width: 100%;
    border-top-left-radius: 19px;
    border-top-right-radius: 19px;
    height: 400px;
    left: calc(50% - 309px / 2);
    top: calc(50% - 250px / 2 - 90px);
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
  }

  &__text-cont {
    padding-left: 16px;
    padding-right: 16px;
    flex-grow: 1;
  }

  &__post-footer {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 2%;
  }

  &__count {
    display: flex;
    margin-left: 18px;
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
  }

  &__count-number {
    color: gray;
    padding-left: 12px;
    position: static;
    width: 17px;
    height: 24px;
    left: 50px;
    font-weight: bold;
    top: 4px;
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: 800;
    letter-spacing: 0.5px;
  }

  &__pen-icon {
    margin-left: 14%;
  }
  &__pen-icon-cont {
    margin-left: 14%;
    width: 26px;
    height: 24px;
    &:hover {
      background-color: #949494;
      border-radius: 3px;
    }
  }

  &__title {
    position: static;
    left: 5.18%;
    right: 0%;
    top: 0%;
    bottom: 48.15%;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #000000;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 8px 0px;
  }

  &__body {
    left: 5.18%;
    right: 0%;
    top: 59.26%;
    max-height: 95px;
    bottom: 0%;
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: rgba(60, 60, 67, 0.6);
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 8px 0px;
    overflow: hidden;
  }
}
</style>
