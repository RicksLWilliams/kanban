<template>
  <div class="cork row justify-content-center">
    <div class="home mt-5 text-primary">
      <h1 class="text-right pr-3 text-danger m-0">X</h1>
      <p class="text-left pl-3">• POST IT</p>
      <p class="about pt-2">♥ where everthing sticks</p>
      <p class="by">By: Eva and Ricks</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.cork {
  background-image: url(https://aedcweb.com/wp-content/uploads/2018/02/cork-board-background.png);
  background-size: cover;
  height: 85vh;
}
.home {
  height: 450px;
  width: 500px;
  border: rgb(253, 253, 192) 2px solid;
  background-color: rgb(253, 253, 192);
  box-shadow: 3px 0px 15px 5px rgb(5, 5, 5);
  font-family: Bradley Hand ITC;
  font-weight: bolder;
  font-size: 80px;
  z-index: 1;
  /* padding-top: 40px; */
}
.by {
  font-family: Bradley Hand ITC;
  padding-top: 150px;
  font-size: 25px;
  color: rgb(14, 15, 14);
}
.about {
  font-weight: bolder;
  font-size: 30px;
  font-family: Lucida Handwriting;

  color: rgb(13, 143, 1);
}
</style>