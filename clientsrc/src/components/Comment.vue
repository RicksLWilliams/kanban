<template>
  <div class="mt-2">
    <!-- <h5 class="text-danger">Comment</h5> -->
    <div class="row">
      <p class="col-10 mt-2 cmtTitle">♥ {{commentData.title}}</p>
      <div class="col-2">
        <button class="btn btn-process" @click="deleteComment(commentData.id)">
          <h5 class="text-danger">X</h5>
        </button>
      </div>
    </div>

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
.cmtTitle {
  font-family: Lucida Handwriting;
  font-size: 12px;
  color: rgb(13, 143, 1);
}
</style>