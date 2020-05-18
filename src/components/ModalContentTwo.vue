<template>
  <div class="modal-wrapper">
    <button
      @click="$modal.hide('hello-world')"
      class="text-center w-full mb-8 font-black border-2 p-2"
    >
      Close project
    </button>

    <h2 class="title">Webdesign</h2>
    <p class="intro">
      Designs made in Photoshop as part of my internship.
    </p>
    <div class="py-8 flex justify-center flex-col text-center mx-0">
      <img src="../assets/fairtrade.png" class="mb-4" />
      <img src="../assets/stage.png" />
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  components: {}
};
</script>
<style lang="scss">
.modal-wrapper {
  @apply p-8;
  .intro {
    max-width: 600px;
    @apply pb-4;
  }
}
</style>
