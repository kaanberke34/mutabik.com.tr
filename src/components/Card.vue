<template>
  <div class="container">
    <div class="bubble">{{ cardTitle }}</div>
  </div>
</template>
<script>
export default {
  props: ["cardTitle"],
  name: "Card",
};
</script>
<style scoped>
.container {
  height: 100px;
  width: 200px;
  background-color: #eee;
  border-radius: 12px;
  position: relative;
  clip-path: polygon(
    /* Top side */ 0 0,
    100% 0%,
    /* Right notch */ 100% 45%,
    95% 50%,
    100% 55%,
    /* Bottom side */ 100% 100%,
    0 100%,
    /* Left notch */ 0 55%,
    5% 50%,
    0 45%
  );
}

.bubble {
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  position: absolute;
  top: 2px;
  left: 2px;
  line-height: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  clip-path: polygon(
    /* Top side */ 0 0,
    100% 0%,
    /* Right notch */ 100% 44%,
    94% 50%,
    100% 56%,
    /* Bottom side */ 100% 100%,
    0 100%,
    /* Left notch */ 0 56%,
    6% 50%,
    0 44%
  );
}
</style>