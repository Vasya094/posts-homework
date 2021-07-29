<template>
  <div class="footer">
    <div class="footer__text-cont">
      <span class="footer__text">
        2021 copyright all rights reserved
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style lang="scss">
.footer {
  &__text-cont {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 7%;
    @media screen and (max-width: 500px) {
      justify-content: center;
    }
  }
}
</style>
