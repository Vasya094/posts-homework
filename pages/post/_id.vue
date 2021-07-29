<template>
  <div class="post-page">
    <div v-if="!pageToShow">
      Loading...
    </div>
    <div class="post-page__page-container" v-else-if="pageToShow.title">
      <div class="post-page__img-cont">
        <img
          src="../../static/siting_boy.jpg"
          class="post-page__img"
          alt="sitting_boy"
        />
      </div>
      <div class="post-page__title-cont">
        <h1 class="post-page__title">
          {{
            pageToShow.title.charAt(0).toUpperCase() + pageToShow.title.slice(1)
          }}
        </h1>
        <hr />
      </div>
      <div class="post-page__body-cont">
        <div v-if="editMode" class="post-page__textarea-cont">
          <textarea
            name="textarea_body"
            class="post-page__textarea"
            v-model="pageToShow.body"
          >
          </textarea>
        </div>
        <div
          v-else
          class="post-page__no-edit-text"
          @click.stop="() => (editMode = true)"
        >
          <div class="post-page__body">{{ pageToShow.body }}</div>
        </div>
      </div>
      <div class="post-page__buttons">
        <div v-if="!editMode">
          <div
            class="post-page__edit-button-cont"
            @click.stop="() => (editMode = true)"
          >
            <span class="post-page__pen-icon">
              <img src="../../static/icons/pen.svg" />
            </span>
            <span class="post-page__edit-btn">
              Редактировать текст
            </span>
          </div>
        </div>
        <div v-else>
          <button
            value=""
            @click.stop="saveChanges(pageToShow.body)"
            class="post-page__btn"
          >
            Сохранить изменения
          </button>
          <button
            value=""
            @click.stop="() => (editMode = false)"
            class="post-page__btn post-page__btn-cancel"
          >
            Отмена
          </button>
        </div>
      </div>
      <div
        class="post-page__comments-container"
        v-if="pageToShow.comments.length"
      >
        <div class="post-page__title-cont">
          <h3 class="post-page__comments-title">Комментарии</h3>
        </div>
        <div class="post-page__comments-cont">
          <div
            v-for="comment in pageToShow.comments"
            :key="comment.id"
            class="post-page__comment"
          >
            <div class="post-page__face">👱‍♂️</div>
            <div class="post-page__comment-info">
              <div>{{ comment.email }}</div>
              <div class="post-page__comment-body">
                <div>
                  {{ comment.body }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="post-page__comments-container" v-else>
        Комментариев нет
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  created() {
    this.$store.dispatch("getPost", this.$route.params.id);
  },
  data() {
    return {
      editMode: false
    };
  },
  methods: {
    saveChanges
  },
  computed: {
    pageToShow() {
      return this.$store.state.postToPage;
    }
  }
};

function saveChanges(text) {
  let reqBody = {
    body: text,
    id: this.$route.params.id
  };
  this.$store.dispatch("updatePost", reqBody);
}
</script>

<style lang="scss">
.post-page {
  width: 90vw;
  margin-left: auto;
  margin-right: auto;

  &__img-cont {
    overflow-y: hidden;
    height: 368px;
    width: 100%;
  }

  &__edit-button-cont {
    width: 185px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 12px;
    height: 30px;
    text-align: center;
    letter-spacing: 0.5px;
    flex: none;
    order: 0;
    color: #ff008a;
    flex-grow: 0;
    margin: 0px 7px;
    &:hover {
      color: white;
      border-radius: 6px;
      background-color: #ff0088c9;
    }
  }

  &__img {
    width: 90vw;
    height: 139%;
  }
  &__comments-cont {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
  }
  &__face {
    width: 41px;
    font-size: 30px;
    margin: 0 5px;
    background: #000000;
    border-radius: 100px;
    height: 40px;
  }
  &__body-cont {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0px 40px 20px;

    position: static;
    width: 90%px;
    height: 324px;
    left: 0px;
    top: 106px;
    background: #ffffff;
    border-radius: 8px;
    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 30px 0px;
  }
  &__no-edit-text {
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  &__edit-btn {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 12px;
    margin-right: 5px;
    text-align: center;
    letter-spacing: 0.5px;
    color: inherit;
    &:hover {
      color: white;
    }
  }
  &__btn {
    width: 309px;
    height: 50px;
    border-radius: 5px;
    filter: drop-shadow(0px 0px 10px rgba(255, 0, 138, 0.1));
    flex: none;
    order: 0;
    cursor: pointer;
    flex-grow: 0;
    margin: 0px 30px;
    border: none;
    outline: none;
    color: aliceblue;
    background: #ff008a;
  }
  &__btn-cancel {
    background: white;
    color: #ff008a;
    border: 1px solid #ff008a;
  }

  &__pen-icon {
    margin-left: 2%;
  }
  &__comment-body {
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height, or 122% */

    display: flex;
    align-items: center;

    /* Light/Label/Secondary */

    color: rgba(60, 60, 67, 0.6);

    /* Inside Auto Layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 10px 0px;
  }
  &__comment {
    display: flex;
    flex-direction: row;
    margin-bottom: 23px;
  }
  &__title {
    margin: 25px 0;
  }
  &__comment-info {
    margin-left: 15px;
  }
  &__textarea {
    width: 88vw;
    height: 285px;
    box-sizing: border-box;
    padding: 28px;
  }

  &__comments-title {
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    /* identical to box height */

    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
    margin: 25px 0;

    /* Light/Label/Primary */

    color: #000000;
  }
}
</style>
