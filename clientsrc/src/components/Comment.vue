<template>
  <div class="col-4">
    <!-- <h5 class="text-danger">Comment</h5> -->
    <h3 class="text-danger">{{commentData.title}}</h3>
    <button class="btn btn-warning" @click="deleteComment(commentData.id)">X</button>

    <!-- <select v-model="selected" @change="moveTask()">
        <option disabled value>Please select one</option>
        <option v-for="listInfo in listItems" :key="listInfo.id" :value ="listInfo.id" >{{listInfo.title}}</option>
    </select>-->
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: ["commentData"],
  data() {
    return {};
  },
  // computed: {
  //   CommentItems() {
  //     //console.log("listItems",this.$store.state.lists )
  //     return this.$store.state.comments;
  //   }
  // },
  methods: {
    deleteComment(commentId) {
      //let listId = this.$route.params.boardId
      //this.$store.dispatch("deleteTask", taskId);

      this.$store.dispatch("deleteComment", this.commentData);
    }
    // moveTask() {
    //   console.log("moveTask" , this.selected);
    //   let moveData = {
    //     taskId:this.taskData.id,
    //     oldListId:this.taskData.listId,
    //     newListId:this.selected
    //   }
    //   this.$store.dispatch("moveTask", moveData);
    // }
  }
};
</script>

<style>
</style>