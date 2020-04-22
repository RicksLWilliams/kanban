<template>
  <div class="col-4">
    <!-- <h1 class="text-primary">I am a list</h1> -->
    <h3 class="text-primary">{{taskData.title}}</h3>
    <button class="btn btn-warning" @click="deleteTask(taskData.id)">delete task</button>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["taskData"],
  data() {
    return {};
  },
  methods: {
    deleteTask(taskId){
      //let listId = this.$route.params.boardId
      //this.$store.dispatch("deleteTask", taskId);

      this.$store.dispatch("deleteTask", this.taskData);
    }

  }
};
</script>

<style>
</style>