<template>
  <div class="modal-wrapper">
    <button
      @click="$modal.hide('hello-world')"
      class="text-center w-full mb-8 font-black border-2 p-2"
    >
      Close project
    </button>
    <h2 class="title">Lottie animations</h2>
    <p class="intro">
      Lottie is a mobile library for Android and iOS that parses Adobe After
      Effects animations exported as json and renders them natively on
      mobile!<br />
      The lottie animation below were made for educational purposes.
    </p>
    <div class="lottie-section  py-8 flex justify-center text-center mx-0">
      <lottie-player
        src="https://assets9.lottiefiles.com/packages/lf20_cAvr6o.json"
        background="transparent"
        speed="1"
        style="width: 300px; height: 300px;"
        loop
        autoplay
      ></lottie-player>
    </div>
    <div class=" py-8 flex justify-center text-center mx-0">
      <lottie-player
        src="https://assets4.lottiefiles.com/packages/lf20_BCALBc.json"
        background="transparent"
        speed="1"
        style="width: 300px; height: 300px;"
        loop
        autoplay
      ></lottie-player>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data: function() {
    return {
      animationJSON: "../assets/pinjump.json"
    };
  },
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
  .lottie-section {
    background: rgba(#2c3e50, 0.15);
  }
}
</style>
