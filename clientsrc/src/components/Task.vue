<template>
  <div class="col-12 border mt-3 task">
    <!-- <h1 class="text-primary">I am a list</h1> -->
    <div class="row">
      <h3 class="text-primary text-left tskTitle col-10">• {{taskData.title}}</h3>
      <div class="col-2">
        <button class="btn btn-process" @click="deleteTask(taskData.id)">
          <h5 class="text-danger">X</h5>
        </button>
      </div>
    </div>
    <div class="row pl-1">
      <select class="select" v-model="selected" @change="moveTask()">
        <option disabled value>
          <h3 class="edit">M♥VE</h3>
        </option>
        <option
          v-for="listInfo in listItems"
          :key="listInfo.id"
          :value="listInfo.id"
        >{{listInfo.title}}</option>
      </select>
      <add-comment v-bind:taskData="taskData"></add-comment>

      <div class="col-12 pb-1 text-left comcom">
        <comment
          v-for="commentInfo in commentItems"
          :commentData="commentInfo"
          :key="commentInfo.id"
        ></comment>
      </div>
    </div>

    <!-- <add-comment></add-comment> -->
  </div>
</template>

<script>
import Comment from "../components/Comment.vue";
import AddComment from "../components/AddComment.vue";
export default {
  name: "Task",
  props: ["taskData"],
  data() {
    return { selected: "" };
  },
  computed: {
    listItems() {
      //console.log("listItems",this.$store.state.lists )
      return this.$store.state.lists;
    },
    commentItems() {
      return this.$store.state.comments[this.taskData.id];
    }
  },
  mounted() {
    this.$store.dispatch("getComments", this.taskData.id);
  },
  methods: {
    deleteTask(taskId) {
      //let listId = this.$route.params.boardId
      //this.$store.dispatch("deleteTask", taskId);

      this.$store.dispatch("deleteTask", this.taskData);
    },
    moveTask() {
      console.log("moveTask", this.selected);
      let moveData = {
        taskId: this.taskData.id,
        oldListId: this.taskData.listId,
        newListId: this.selected
      };
      this.$store.dispatch("moveTask", moveData);
    }
  },
  components: {
    Comment,
    AddComment
  }
};
</script>

<style>
.tskTitle {
  padding-right: 120px;
  font-family: Bradley Hand ITC;
  font-weight: 900;
}
.select {
  background-color: rgb(142, 230, 200);
  border-radius: 12px;
  padding-left: 15px;
  height: 25px;
}
.task {
  background-color: rgb(248, 248, 185);
  max-height: 300px;
  filter: drop-shadow(2px 2px 5px);
  /* box-shadow: 2px 0px 10px 2px rgb(5, 5, 5); */
}
.comcom {
  max-height: 150px;
  overflow-y: scroll;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 10px;
  background: rgb(248, 241, 144); /* make scrollbar transparent */
}
</style>