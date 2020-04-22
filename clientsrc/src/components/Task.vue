<template>
  <div class="col-4">
    <!-- <h1 class="text-primary">I am a list</h1> -->
    <h3 class="text-primary">{{taskData.title}}</h3>
    <button class="btn btn-warning" @click="deleteTask(taskData.id)">delete task</button>

    <select v-model="selected" @change="moveTask()">
      <option disabled value>Please select one</option>
      <option
        v-for="listInfo in listItems"
        :key="listInfo.id"
        :value="listInfo.id"
      >{{listInfo.title}}</option>
    </select>
    <add-comment v-bind:taskData="taskData"></add-comment>
    <comment v-for="commentInfo in commentItems" :commentData="commentInfo" :key="commentInfo.id"></comment>
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
</style>