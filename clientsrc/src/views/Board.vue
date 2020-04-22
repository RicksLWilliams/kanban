<template>
  <div class="board">
    <h1 v-if="board.title">{{board.title}}</h1>
    <h1 v-else>Loading...</h1>
    <add-list></add-list>
    <div class="row">
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
  props: ["boardId"],
  components: { AddList, List }
};
</script>
