<template>
  <div>
    <!-- <h1>I am a list</h1> -->
    <h3>{{listData.title}}</h3>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ["listData"],
  data() {
    return {};
  }
};
</script>

<style>
</style>