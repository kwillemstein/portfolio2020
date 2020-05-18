<template>
  <div class="wrapper">
    <div class="section section-hero px-5 md:px-0" v-scroll-reveal>
      <div class="container mx-auto">
        <div class="flex flex-col sm:flex-row hero">
          <div class="w-full text-shadow-md">
            <vue-typed-js
              :strings="[
                'I\'m a front-end developer',
                'I\'m a UX enthusiast',
                'I\'m a visual designer'
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
            <p class="intro w-full text-2xl sm:w-2/3">
              I’m Kim, a twenty-seven-year-old designer and developer just
              graduated at Hogeschool Utrecht. I’m really into user-experience,
              design and front-end development.
            </p>
            <div class="intro-wrapper">
              <a
                class="bg-transparent hover:bg-white text-white transition ease-in-out duration-200 font-semibold py-4 px-6 mt-4 border border-white hover:border-transparent hover:text-orange-500"
                href="/KimWillemstein_CV.pdf"
                rel="nofollow"
                target="_blank"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>
          <div
            class="w-full pt-4 md:pt-0 md:w-2/3 social text-shadow-md text-left md:text-right"
          >
            <button
              href="mailto:kimwillemstein@live.nl"
              class="email relative"
              rel="nofollow"
            >
              Get in touch!
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="section" v-scroll-reveal>
      <div class="usp pt-32 md:pt-40 pb-56">
        <div class="container mx-auto">
          <div class="flex mb-0 md:mb-12 px-5 md:px-0 flex-col md:flex-row">
            <div class="w-full md:w-1/2">
              <h1 class="title">
                Hi, my name is Kim Willemstein.
              </h1>
            </div>
            <div class="w-full md:w-1/2">
              <p class="intro font-bold">
                I live in Utrecht Overvecht. In my spare time I enjoy being
                creative, playing games, catching up with friends and listening
                to music. I often visit concerts and festivals and I love
                traveling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section px-5 md:px-0" v-scroll-reveal>
      <div class="specials container mx-auto pb-20">
        <div class="specializing flex flex-col md:flex-row mb-4 md:-mx-2">
          <div class="w-full md:w-1/3 mb-2 md:m-2 flex flex-col rounded-lg">
            <h4>Creative Front-End Development</h4>
            <p class="intro mt-4">
              I have a good understanding of HTML and Modern CSS (including
              preprocessors compass and webpack, CSS grid and Flexbox),
              responsive layouts and accessibility. I often work with Bootstrap
              and I'm currently learning Tailwind CSS. I've finished the 'Basic
              Javascript' course on freecodecamp.org and I'm eager to learn
              more.
            </p>
          </div>
          <div class="w-full md:w-1/3 mb-2 md:m-2 flex flex-col rounded-lg">
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
          <div class="w-full md:w-1/3 mb-2 md:m-2 flex flex-col rounded-lg">
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

    <div class="section px-5 md:px-0" v-scroll-reveal>
      <div class="container mx-auto pb-20">
        <div class="tools flex mb-4 flex-wrap">
          <div class="flex-1 w-1/4 px-4 py-2">
            <img src="./assets/html5.svg" />
          </div>
          <div class="w-1/4 md:flex-1 px-4 py-2">
            <img src="./assets/css3.svg" />
          </div>
          <div class="w-1/4 md:flex-1 px-4 py-2">
            <img src="./assets/jetbrains.svg" width="100px" />
          </div>
          <div class="w-1/4 md:flex-1 px-4 py-2">
            <img src="./assets/gitkraken.svg" />
          </div>
          <div class="w-1/4 md:flex-1 px-4 py-2">
            <img src="./assets/github.svg" />
          </div>
          <div class="w-1/4 md:flex-1 px-4 py-2">
            <img src="./assets/adobe.svg" />
          </div>
          <div class="w-1/4 md:flex-1 px-4 py-2">
            <img src="./assets/figma.svg" />
          </div>
        </div>
      </div>
    </div>

    <div class="section px-5 md:px-0" v-scroll-reveal>
      <div class="container mx-auto pb-20">
        <div class="work flex">
          <div
            class="work-title flex justify-center items-center mr-4 hidden sm:flex"
          >
            <h2 class="title">Front-end work</h2>
            <h6>Design, HTML, SCSS, JavaScript, PHP</h6>
          </div>
          <div class="work-content flex flex-col md:flex-row">
            <div
              v-on:click="show('content-one')"
              class="w-full flex-1 md:w-48 h-full mb-4 md:mr-4 rounded-lg"
            >
              <div class="span-wrapper p-5 md:p-8"><span>Lottie.js</span></div>
            </div>
            <div
              v-on:click="show('content-two')"
              class="w-full flex-1 md:w-48 h-full mb-4 md:mr-4 rounded-lg bg-gray-200"
            >
              <div class="span-wrapper p-5 md:p-8"><span>Webdesign</span></div>
            </div>
            <div
              class="w-full flex-1 md:w-48 h-full mb-4 md:mr-4 rounded-lg bg-gray-200"
            >
              <div class="span-wrapper p-5 md:p-8">
                <span>Ecommerce</span>
              </div>
              <a
                href="https://www.silverandfoxinternational.com/"
                title="ecommerce"
                rel="nofollow"
                target="_blank"
              ></a>
            </div>
            <div
              class="w-full flex-1 md:w-48 h-full mb-4 md:mr-4 rounded-lg bg-gray-200"
            >
              <div class="span-wrapper p-5 md:p-8">
                <span>Matching</span>
              </div>
              <a
                href="http://samenbeperkt.com/"
                target="_blank"
                title="matching"
                rel="nofollow"
              ></a>
            </div>
            <div
              class="w-full flex-1 md:w-48 h-full mb-4 rounded-lg bg-gray-200"
            >
              <div class="span-wrapper p-5 md:p-8">
                <span>Auction</span>
              </div>
              <a
                href="http://vendas.nl/"
                target="_blank"
                title="auction"
                rel="nofollow"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section footer-wrapper px-5 md:px-0">
      <div class="container mx-auto py-10">
        <div class="footer flex flex-col md:flex-row w-full text-white ">
          <div class="w-full md:w-1/2 text-center md:text-left font-semibold">
            Kim Willemstein {{ new Date().getFullYear() }}
          </div>
          <div class="w-full md:w-1/2 text-center md:text-right">
            Built with
            <a href="https://vuejs.org/" title="Vue.js" class="font-semibold"
              >Vue.js</a
            >
            and
            <a
              href="https://tailwindcss.com/"
              title="Tailwind"
              class="font-semibold"
              >Tailwind</a
            >
            | Deployed with
            <a
              href="https://www.netlify.com/"
              title="Netlify"
              class="font-semibold"
              >Netlify</a
            >
          </div>
        </div>
      </div>
    </div>
    <modal name="hello-world" height="auto" :scrollable="true" :adaptive="true">
      <ModalContentOne v-if="modal === 'content-one'" />
      <ModalContentTwo v-if="modal === 'content-two'" />
    </modal>
  </div>
</template>

<script>
import ModalContentOne from "./components/ModalContentOne";
import ModalContentTwo from "./components/ModalContentTwo";
export default {
  name: "App",
  data: function() {
    return {
      modal: ""
    };
  },
  methods: {
    show(x) {
      this.modal = x;
      this.$modal.show("hello-world");
    },
    hide() {
      this.$modal.hide("hello-world");
    }
  },
  components: {
    ModalContentOne,
    ModalContentTwo
  }
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

.section-hero {
  background-image: url("./assets/photo.jpg");
  background-size: cover;
  background-position: center center;
  @media (min-width: 1024px) {
    background-image: none;
  }
}
.hero {
  height: 800px;
  padding: $grid-gutter * 2 0;
  @media (min-width: 1024px) {
    height: 600px;
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -2;
    @media (min-width: 1024px) {
      background-image: url("./assets/photo.jpg");
      background-size: cover;
      background-position: center center;
    }
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.25;
    background: -moz-linear-gradient(left, #fd6f82 0%, #feb75d 100%);
    background: -webkit-linear-gradient(left, #fd6f82 0%, #feb75d 100%);
    background: linear-gradient(to right, #fd6f82 0%, #feb75d 100%);
    background: -webkit-gradient(
      linear-gradient(to right, #fd6f82 0%, #feb75d 100%)
    );
  }

  h1,
  p {
    color: #fff !important;
  }
  .intro-wrapper {
    position: absolute;
    bottom: $grid-gutter * 2;
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

.section {
  .usp {
    position: relative;
    overflow: hidden;
    z-index: -9;
    background: rgb(253, 111, 130);
    background: linear-gradient(
      90deg,
      rgba(253, 111, 130, 1) 0%,
      rgba(254, 183, 93, 1) 100%
    );
    &:before {
      content: "";
      width: 900px;
      height: 950px;
      position: absolute;
      left: -150px;
      bottom: -75px;
      z-index: -1;
      @media (min-width: 1024px) {
        background: url("./assets/blob1.svg");
      }
    }
    .intro {
      color: #fff;
      @apply text-2xl;
    }
    .title {
      color: #fff;
      @media (min-width: 1024px) {
        background: -webkit-linear-gradient(45deg, #fd6f82, #fd8b74);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
  .specials {
    margin-top: -10em;

    .specializing {
      div {
        &:first-child {
          h4::before {
            background-image: url("./assets/code.svg");
          }
        }
        &:nth-child(2) {
          h4::before {
            background-image: url("./assets/user-group.svg");
          }
        }

        &:last-child {
          h4::before {
            background-image: url("./assets/pen-tool.svg");
          }
        }
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
        @apply transition ease-in-out duration-200 shadow-md p-8 overflow-hidden;
        background: #fff;
        .intro,
        h4 {
          color: rgba(48, 49, 56, 0.88);
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

  $work-height: 400px;

  .work {
    .work-content {
      height: $work-height;
      width: 100%;
      @media (min-width: 1024px) {
        width: calc(100% - #{$grid-gutter * 4});
      }
      > div {
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        &:after {
          content: "";
          opacity: 0.5;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background: -moz-linear-gradient(left, #fd6f82 0%, #fd8b74 100%);
          background: -webkit-linear-gradient(left, #fd6f82 0%, #fd8b74 100%);
          background: linear-gradient(to left, #fd6f82 0%, #fd8b74 100%);
          @apply transition ease-in-out duration-200;
        }
        &:nth-child(1) {
          background-image: url("assets/lottie.png");
        }
        &:nth-child(2) {
          background-image: url("assets/fairtrade.png");
        }
        &:nth-child(3) {
          background-image: url("assets/silverfox.png");
        }
        &:nth-child(4) {
          background-image: url("assets/samenbeperkt.png");
        }
        &:nth-child(5) {
          background-image: url("assets/vendas.png");
        }
        @apply relative transition ease-in-out duration-200 shadow p-8 overflow-hidden;
        &:hover {
          transform: scale(1.1);
          cursor: pointer;
          &:after {
            opacity: 0;
          }
        }
        a {
          display: block;
          width: 100%;
          height: 100%;
          z-index: 999 !important;
          position: absolute !important;
          text-decoration: none;
          outline: none;
        }
        .span-wrapper {
          z-index: 1;
          background: -moz-linear-gradient(bottom, #fd6f82 0%, #fd8b74 100%);
          background: -webkit-linear-gradient(bottom, #fd6f82 0%, #fd8b74 100%);
          background: linear-gradient(to bottom, #fd6f82 0%, #fd8b74 100%);
          @apply left-0 bottom-0 w-full absolute text-center font-semibold text-lg text-white;
        }
      }
    }
    .work-title {
      width: $grid-gutter * 4;
      h2 {
        transform: rotate(-90deg);
        min-width: $work-height;
        text-align: center;
        text-transform: uppercase;
        color: #303138;
        position: absolute;
        left: 0;
      }
      h6 {
        transform: rotate(-90deg);
        min-width: $work-height;
        text-align: center;
        color: rgba(83, 85, 95, 0.5);
        margin-left: $grid-gutter;
        @apply text-sm;
      }
    }
  }
}
.footer-wrapper {
  background: #3d3e45;
  width: 100%;
  .footer {
    position: relative;
    a:hover {
      background: -webkit-linear-gradient(45deg, #fd6f82, #fd8b74);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
