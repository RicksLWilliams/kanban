<template>
  <div>
    <form class="row mb-3" @submit.prevent="addTask">
      <h5 class="m-1 pr-2 pl-3 tskName">Task:</h5>
      <input
        class="pr-4 pl-2 inputTask"
        type="text"
        placeholder="add task..."
        v-model="newTask.title"
        required
      />
      <!-- <button class="btn btn-secondary border-dark" type="submit">+</button> -->
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
      this.newTask = { title: "" };
    }
  }
};
</script>
  
  <style>
.tskName {
  font-family: Bradley Hand ITC;
  font-weight: 900;
  font-size: 25px;
}
.inputTask {
  border: rgb(137, 211, 186) 2px solid;
  border-radius: 12px;
  background-color: rgb(248, 248, 185);
}
</style>