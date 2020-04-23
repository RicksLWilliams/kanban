<template>
  <div class="board container-fluid">
    <h1 class="title pt-5 text-light" v-if="board.title">{{board.title}}</h1>
    <!-- <h1 v-else></h1> -->
    <add-list class="m-2"></add-list>
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
}
</style>