<template>
  <div class="col-6 pl-4">
    <!-- <h5 class="text-danger">add</h5> -->
    <form class @submit.prevent="addComment">
      <input
        class="pl-1 inputNote"
        type="text"
        placeholder="add note..."
        v-model="newComment.title"
        required
      />
      <!-- <button class="btn btn-warning" type="submit">+</button> -->
    </form>
    <!-- <div v-for="list in board" :key="list.id">
      <router-link :to="{name: 'board', params: {boardId: board.id}}">{{board.title}}</router-link>
    <button @click="deleteList(board.id)">delete </button>-->
  </div>
</template>
  
<script>
export default {
  name: "AddComment",
  props: ["taskData"],
  data() {
    return {
      newComment: {}
    };
  },
  methods: {
    addComment() {
      console.log("comment", this.taskData);
      this.newComment.taskId = this.taskData.id;
      this.$store.dispatch("addComment", this.newComment);
      this.newComment = { title: "" };
    }
  }
};
</script>
  
  <style>
.inputNote {
  border: rgb(137, 211, 186) 2px solid;
  border-radius: 12px;
  background-color: rgb(248, 248, 185);
}
</style>
