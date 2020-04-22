<template>
  <div>
    <h1>hello world</h1>
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
  name: "AddTask",
  data() {
    return {
      newTask: {}
    };
  },
  methods: {
    addTask() {
      this.newTask.listId = this.$route.params.listId;
      this.$store.dispatch("addTask", this.newTask);
      this.newTask = { };
    }
  }
};
</script>
  
  <style>
</style>