<template>
    <nav class="navbar"
         :class="[
            {'navbar-expand': expand},
            {[`navbar-${effect}`]: effect},
            {'navbar-transparent': transparent},
            {[`bg-${type}`]: type},
            {'rounded': round}
         ]">
        <div class="container">
            <slot name="container-pre"></slot>
            <slot name="brand">
                <a class="navbar-brand" href="#">
                    {{title}}
                </a>
            </slot>

            <div class="" :id="contentId">
                <div class="navbar-collapse-header">
                    <slot name="content-header"></slot>
                </div>
                <slot></slot>
            </div>
        </div>
    </nav>
</template>
<script>
import { FadeTransition } from "vue2-transitions";

export default {
  name: "base-nav",
  components: {
    FadeTransition

  },
  props: {
    type: {
      type: String,
      default: "primary",
      description: "Navbar type (e.g default, primary etc)"
    },
    title: {
      type: String,
      default: "",
      description: "Title of navbar"
    },
    contentId: {
      type: [String, Number],
      default: Math.random().toString(),
      description:
        "Explicit id for the menu. By default it's a generated random number"
    },
    effect: {
      type: String,
      default: "dark",
      description: "Effect of the navbar (light|dark)"
    },
    round: {
      type: Boolean,
      default: false,
      description: "Whether nav has rounded corners"
    },
    transparent: {
      type: Boolean,
      default: false,
      description: "Whether navbar is transparent"
    },
    expand: {
      type: Boolean,
      default: false,
      description: "Whether navbar should contain `navbar-expand-lg` class"
    }
  },
  data() {
    return {}
  }
};
</script>
<style>
</style>
