<template>
  <div class="col-4">
    <!-- <h1 class="text-primary">I am a list</h1> -->
    <h3 class="text-primary">{{taskData.title}}</h3>
    <button class="btn btn-warning" @click="deleteTask(taskData.id)">delete task</button>

      <select v-model="selected" @change="moveTask()">
        <option disabled value>Please select one</option>
        <option v-for="listInfo in listItems" :key="listInfo.id" :value ="listInfo.id" >{{listInfo.title}}</option>
      </select>

  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["taskData"],
  data() {
    return {selected:""};
  },
  computed: {
    listItems() {
      //console.log("listItems",this.$store.state.lists )
      return this.$store.state.lists;
    }
  },
  methods: {
    deleteTask(taskId) {
      //let listId = this.$route.params.boardId
      //this.$store.dispatch("deleteTask", taskId);

      this.$store.dispatch("deleteTask", this.taskData);
    },
    moveTask() {
      console.log("moveTask" , this.selected);
      let moveData = {
        taskId:this.taskData.id,
        oldListId:this.taskData.listId,
        newListId:this.selected
      }
      this.$store.dispatch("moveTask", moveData);
    }
  }
};
</script>

<style>
</style>