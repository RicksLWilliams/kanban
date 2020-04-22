<template>
  <div class="col-4">
    <h1 class="text-primary">I am a list</h1>
    <!-- <h3>{{taskData.title}}</h3> -->
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
    //deleteList(listId) {
      //console.log("deleteBoard", this.boards[0].id)
      //console.log("deleteBoard", this.$router)
      //console.log ("deleteBoard1", this.$route.params.boardId)

      //console.log("deleteList", this.$route.params.boardId )
      //let boardId = this.$route.params.boardId
    //  this.$store.dispatch("deleteList", this.listData);
    //}
  }
};
</script>

<style>
</style>