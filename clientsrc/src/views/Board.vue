<template>
  <div class="board row">
    <h1
      class="header title pt-5 pb-0 mb-0 mt-0 text-light col-12"
      v-if="board.title"
    >{{board.title}}</h1>
    <!-- <h1 v-else></h1> -->
    <add-list class="col-12"></add-list>
    <div class="row m-2">
      <list :listData="listInfo" v-for="listInfo in listItems" :key="listInfo.id"></list>
    </div>
  </div>
</template>

<script>
import AddList from "../components/AddList.vue";
import List from "../components/List.vue";
export default {
  name: "board",
  computed: {
    board() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBoard;
    },
    listItems() {
      return this.$store.state.lists;
    }
  },
  mounted() {
    this.$store.dispatch("getActiveBoard", this.$route.params.boardId);
    this.$store.dispatch("getLists", this.$route.params.boardId);
  },

  components: { AddList, List }
};
</script>
<style>
.board {
  background-image: url(https://aedcweb.com/wp-content/uploads/2018/02/cork-board-background.png);
  background-size: cover;
  min-height: 85vh;
  border: 5px solid rgb(12, 83, 75);
}

.header {
  text-shadow: 2px 2px 15px black;
  font-size: 60px;
  font-family: monospace;
}
</style>