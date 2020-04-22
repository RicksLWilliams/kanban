<template>
  <div>
    <h1>Add Task</h1>
    <form @submit.prevent="addTask">
      <input type="text" placeholder="title" v-model="newTask.title" required />
      <button type="submit">Create Task</button>
    </form>
    <!-- <div v-for="list in board" :key="list.id">
      <router-link :to="{name: 'board', params: {boardId: board.id}}">{{board.title}}</router-link>
    <button @click="deleteList(board.id)">delete </button>-->
  </div>
</template>
  
<script>
export default {
  name: "AddTask",
  props: ["listData"],
  data() {
    return {
      newTask: {}
    };
  },
  methods: {
    addTask() {
      //console.log("addTask", this.listData.id)
      this.newTask.listId = this.listData.id;
      this.$store.dispatch("addTask", this.newTask);
      this.newTask = { title: ""};
    }
  }
};
</script>
  
  <style>
</style>