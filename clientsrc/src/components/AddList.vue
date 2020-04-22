<template>
  <div>
    <form @submit.prevent="addList">
      <input type="text" placeholder="title" v-model="newList.title" required />
      <button type="submit">Create List</button>
    </form>
    <!-- <div v-for="list in board" :key="list.id">
      <router-link :to="{name: 'board', params: {boardId: board.id}}">{{board.title}}</router-link>
    <button @click="deleteList(board.id)">delete </button>-->
  </div>
</template>
  
<script>
export default {
  name: "AddList",
  data() {
    return {
      newList: {}
    };
  },
  methods: {
    addList() {
      this.newList.boardId = this.$route.params.boardId;
      this.$store.dispatch("addList", this.newList);
      this.newList = { title: "", description: "" };
    }
  }
};
</script>
  
  <style>
</style>

