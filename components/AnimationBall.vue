<script setup lang="ts">

</script>

<template>
  <div w-400px h-400px border="1 solid gray rounded-full" relative>
    <div
      v-for="index in 36" :key="index"
      class="animation-ball"
      border="rounded-full"
    />
  </div>
</template>

<style scoped lang="scss">
$n: 36;
$deg: calc(360deg / $n);
$container-size: 400px;
$ball-size: 20px;
$ani-delay: 2s;

.animation-ball {
  width: 20px;
  height: 20px;
  position: absolute;
  left: calc(50% - $ball-size / 2);
  top: calc(50% - $ball-size / 2);
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
  perspective: 70px;

  &::after,
  &::before {
    content: '';
    display: block;
    width: $ball-size;
    height: $ball-size;
    border-radius: 50%;
    position: absolute;
  }

  &::after {
    background: #000;
    top: 100%;
    animation: moveBlack $ani-delay infinite;
  }
  &::before {
    background: gray;
    top: -100%;
    animation: moveWhite $ani-delay infinite;
  }

  @keyframes moveWhite {
    0% {
      animation-timing-function: ease-in;
    }
    25% {
      transform: translate3d(0, 100%, $ball-size);
      animation-timing-function: ease-out;
    }
    50% {
      transform: translate3d(0, 200%, 0);
      animation-timing-function: ease-in;
    }
    75% {
      transform: translate3d(0, 100%, $ball-size);
      animation-timing-function: ease-out;
    }
  }

  @keyframes moveBlack {
    0% {
      animation-timing-function: ease-in;
    }
    25% {
      transform: translate3d(0, -100%, -$ball-size);
      animation-timing-function: ease-out;
    }
    50% {
      transform: translate3d(0, -200%, 0);
      animation-timing-function: ease-in;
    }
    75% {
      transform: translate3d(0, -100%, -$ball-size);
      animation-timing-function: ease-out;
    }
  }

  @for $i from 1 through 36 {
    &:nth-child(#{$i}) {
      transform: rotate($i * $deg) translateY(calc(-1 * $container-size / 2));

      &::after,
      &::before {
        animation-delay: -$ani-delay / $n * $i * 6;
      }
    }
  }
}
</style>
