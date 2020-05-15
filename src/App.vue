<template>
  <div class="wrapper">
    <div id="section" class="px-5 md:px-0" v-scroll-reveal.reset>
      <div class="container mx-auto">
        <div class="flex flex-col sm:flex-row hero">
          <div class="w-full text-shadow-md">
            <span class="label">introduction</span>
            <vue-typed-js
              :strings="[
                'I\'m a front-end developer',
                'I\'m a UX enthusiast',
                'I\'m a Visual designer'
              ]"
              :loop="true"
              :smartBackspace="true"
              :backDelay="3000"
              :backSpeed="100"
              :typeSpeed="100"
            >
              <h1 class="title">
                <span class="typing"></span>
              </h1>
            </vue-typed-js>
            <h1 class="title" style="margin-top: -10px;">based in Utrecht.</h1>
            <p class="intro w-full sm:w-2/3">
              Maecenas semper velit vitae urna pharetra tristique. Aliquam in
              ultrices purus, sit amet ultricies massa. Integer eget mauris non
              purus rutrum ultrices.
            </p>
            <div class="intro-wrapper">
              <button
                class="bg-transparent hover:bg-orange-400 text-white transition ease-in-out duration-200 font-semibold hover:text-white py-2 px-4 mt-4 border border-white hover:border-transparent"
              >
                DOWNLOAD CV
              </button>
            </div>
          </div>
          <div class="w-full pt-4 md:pt-0 md:w-2/3 social text-shadow-md text-left md:text-right">
            <button href="mailto:kimwillemstein@live.nl" class="email relative">
              Get in touch!
            </button>
          </div>
        </div>
      </div>
    </div>

    <div id="section" v-scroll-reveal.reset>
      <div class="usp pt-32 md:pt-40 pb-56">
        <div class="container mx-auto">
          <div class="flex mb-0 md:mb-4 px-5 md:px-0 flex-col md:flex-row">
            <div class="w-full md:w-1/2">
              <h1 class="title">
                I'm looking for a job!
              </h1>
            </div>
            <div class="w-full md:w-1/2">
              <p class="intro">
                I'm looking for a job where I can learn more about front-end so
                I can become a front-end pro!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="section" class="px-5 md:px-0" v-scroll-reveal.reset>
      <div class="specials container mx-auto pb-20">
        <div class="specializing flex flex-col md:flex-row mb-4 md:-mx-2">
          <div class="w-full md:w-1/3 mb-2 md:m-2 flex flex-col dev">
            <h4>Creative Front-End Development</h4>
            <p class="intro mt-4">
              I have a good understanding of HTML and Modern CSS (including
              preprocessors compass and webpack, CSS grid and Flexbox),
              responsive layouts and accessibility. I know how to work with
              bootstrap and I'm currently learning Tailwind CSS. I've finished
              the Basic Javascript course on freecodecamp.org and I'm eager to
              learn more.
            </p>
          </div>
          <div class="w-full md:w-1/3 mb-2 md:m-2 uxd">
            <h4>User Experience design</h4>
            <p class="intro mt-4">
              A designer should always have the users in mind to make useful,
              accessible and valuable products. During my studies I have been
              involved to do research on the user with a variety of research and
              design techniques. Customer journey, Focus groups and Persona's
              are some of the methods I'm very familiar with. I'm aware of
              accessibility during all stages of development including color
              contrast, inclusive design and WCAG guidelines.
            </p>
          </div>
          <div class="w-full md:w-1/3 mb-2 md:m-2 vis">
            <h4>Visual design</h4>
            <p class="intro mt-4">
              I enjoy creating logo's, branding, designs and illustration.
              Photoshop and Illustrator are my best friends. Recently I've been
              learning to use Figma for web and app design and Procreate for
              illustrational use. I'm a creative person and combining this with
              creating useful products is something I enjoy greatly.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div id="section" class="px-5 md:px-0" v-scroll-reveal.reset>
      <div class="container mx-auto pb-20">
        <div class="tools flex mb-4 flex-wrap">
          <div class="flex-1 w-1/4 px-4 py-2 m-2">
            <img src="./assets/html5.svg"/>
          </div>
          <div class="w-1/4 md:flex-1 px-4 py-2 m-2">
            <img src="./assets/css3.svg" />
          </div>
          <div class="w-1/4 md:flex-1 px-4 py-2 m-2">
            <img src="./assets/jetbrains.svg" width="100px" />
          </div>
          <div class="w-1/4 md:flex-1 px-4 py-2 m-2">
            <img src="./assets/gitkraken.svg" />
          </div>
          <div class="w-1/4 md:flex-1 px-4 py-2 m-2">
            <img src="./assets/github.svg" />
          </div>
          <div class="w-1/4 md:flex-1 px-4 py-2 m-2">
            <img src="./assets/adobe.svg" />
          </div>
          <div class="w-1/4 md:flex-1 px-4 py-2 m-2">
            <img src="./assets/figma.svg" />
          </div>
        </div>
      </div>
    </div>

    <!--    <div id="section">-->
    <!--      <div class="container mx-auto pb-20">-->
    <!--        <div class="flex mb-4">-->
    <!--          <div class="w-full text-center mb-8">-->
    <!--            <h1 class="title">-->
    <!--              MY WORK-->
    <!--            </h1>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="flex w-full -mx-2">-->
    <!--          <div class="work flex flex-wrap w-1/2 mb-4 p-2 -mx-2">-->
    <!--            <h2 class="title w-full text-center mb-4">Explorations</h2>-->
    <!--            <div class="work-item w-1/2 p-2">-->
    <!--              <img src="https://picsum.photos/700/1200" />-->
    <!--            </div>-->
    <!--            <div class="work-item w-1/2 p-2">-->
    <!--              <img src="https://picsum.photos/800/1300" />-->
    <!--            </div>-->
    <!--            <div class="work-item w-1/2 p-2">-->
    <!--              <img src="https://picsum.photos/700/1200" />-->
    <!--            </div>-->
    <!--            <div class="work-item w-1/2 p-2">-->
    <!--              <img src="https://picsum.photos/800/1300" />-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="work flex flex-wrap w-1/2 mb-4 p-2 -mx-2">-->
    <!--            <h2 class="title w-full text-center mb-4">Professional work</h2>-->
    <!--            <div class="work-item w-1/2 p-2">-->
    <!--              <img src="https://picsum.photos/700/1200" />-->
    <!--            </div>-->
    <!--            <div class="work-item w-1/2 p-2">-->
    <!--              <img src="https://picsum.photos/800/1300" />-->
    <!--            </div>-->
    <!--            <div class="work-item w-1/2 p-2">-->
    <!--              <img src="https://picsum.photos/700/1200" />-->
    <!--            </div>-->
    <!--            <div class="work-item w-1/2 p-2">-->
    <!--              <img src="https://picsum.photos/800/1300" />-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style lang="scss">
$grid-gutter: 30px;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  max-width: 1600px;
  margin: 0 auto;
  @apply bg-white;
}

.hero {
  height: 600px;
  padding: $grid-gutter * 2 0;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -2;
    background-image: url("./assets/photo.jpg");
    background-size: cover;
    background-position: center center;
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: -moz-linear-gradient(
      left,
      rgba(80, 62, 47, 0.5) 0%,
      rgba(255, 255, 255, 0) 40%
    );
    background: -webkit-linear-gradient(
      left,
      rgba(80, 62, 47, 0.5) 0%,
      rgba(255, 255, 255, 0) 40%
    );
    background: linear-gradient(
      to right,
      rgba(80, 62, 47, 0.5) 0%,
      rgba(255, 255, 255, 0) 40%
    );
  }
  h1,
  p {
    color: #fff !important;
  }
  .intro-wrapper {
    position: absolute;
    bottom: $grid-gutter * 2;
    width: 33%;
  }
  .social {
    color: #fff;
  }
  .email {
    margin: -10px;
    position: relative;
    padding: 10px 10px 10px 40px;
    transition-duration: 200ms;
    border-bottom: 2px solid transparent;
    border-top: 2px solid transparent;
    &:before {
      content: "";
      position: absolute;
      background-image: url("./assets/envelope.svg");
      width: 20px;
      height: 24px;
      background-size: 20px 20px;
      background-repeat: no-repeat;
      background-position: left center;
      margin-left: -30px;
      transition-duration: 200ms;
    }
    &:hover {
      border-bottom: 2px solid #fff;
      border-top: 2px solid #fff;
      &:before {
        transform: rotate(-10deg);
      }
    }
  }
}

#section {
  .usp {
    border-bottom: 5px solid #17171c;
    background: #303138;
    .intro,
    .title {
      color: #ebedef;
    }
  }
  .specials {
    margin-top: -10em;

    .specializing {
      .dev h4::before {
        background-image: url("./assets/code.svg");
      }
      .uxd h4::before {
        background-image: url("./assets/user-group.svg");
      }
      .vis h4::before {
        background-image: url("./assets/pen-tool.svg");
      }
      h4 {
        position: relative;
        left: 30px;
        &:before {
          display: block;
          position: absolute;
          left: -30px;
          content: "";
          background-size: 17px 17px;
          background-repeat: no-repeat;
          background-position: left center;
          height: 28px;
          width: 20px;
          opacity: 1;
          @apply transition ease-in-out;
        }
      }
      div {
        @apply transition ease-in-out duration-200 shadow p-8 overflow-hidden;
        background: #505461;
        border-bottom: 5px solid rgb(246, 173, 85);
        .intro,
        h4 {
          color: #ebedef;
        }
        &:hover {
          @apply shadow-lg;
          transform: translateY(-9px);
          transform: scale(1.02);
        }
      }
    }
  }

  .tools {
    img {
      max-height: 100px;
      @apply transition ease-in-out duration-200;
    }
    > div {
      @apply transition ease-in-out duration-200 p-8 flex justify-center;
      &:first-child {
        background: rgba(241, 101, 41, 0.06);
      }
      &:nth-child(2) {
        background: rgba(38, 77, 228, 0.06);
      }
      &:nth-child(3) {
        background: rgba(0, 0, 0, 0.06);
      }
      &:nth-child(4) {
        background: rgba(18, 131, 121, 0.06);
      }
      &:nth-child(5) {
        background: rgba(0, 0, 0, 0.06);
      }
      &:nth-child(6) {
        background: rgba(237, 28, 36, 0.06);
      }
      &:nth-child(7) {
        background: rgba(38, 77, 228, 0.06);
      }
      &:hover {
        transform: translateY(-6px);
      }
    }
  }
  .work {
    .work-item {
      overflow: hidden;
      @apply transition ease-in-out duration-200 flex justify-center items-center;
      &:hover {
        transform: scale(1.02);
        cursor: pointer;
      }
      img {
        min-height: 100%;
        height: auto;
      }
    }
  }
}
.label {
  @apply bg-orange-400 mb-4 text-white capitalize inline-block font-bold;
  padding: 5px 7px;
}

.highlight {
  @apply text-orange-400;
}
</style>
