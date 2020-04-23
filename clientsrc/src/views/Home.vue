<template>
  <div class="cork row justify-content-center">
    <div class="home mt-5 text-primary">
      <p class>• POST IT</p>
      <p class="about">♥ where you ideas stick</p>
      <p class="by mt-5">By: Eva and Ricks</p>
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
  padding-top: 90px;
}
.by {
  font-family: Bradley Hand ITC;
  padding-top: 50px;
  font-size: 30px;
}
.about {
  font-weight: bolder;
  font-size: 30px;
  font-family: Lucida Handwriting;

  color: rgb(13, 143, 1);
}
</style>