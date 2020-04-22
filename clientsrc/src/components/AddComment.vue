<template>
  <div>
    <h5 class="text-danger">Add Comment</h5>
    <form @submit.prevent="addComment">
      <input type="text" placeholder="comment" v-model="newComment.title" required />
      <button class="btn btn-warning" type="submit">+</button>
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
</style>
