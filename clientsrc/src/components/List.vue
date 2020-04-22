<template>
  <div class="col-4">
    <!-- <h1>I am a list</h1> -->
    <h3>{{listData.title}}</h3>
    <button @click="deleteList(listData.id)">delete</button>
    <task></task>
    <!-- <task :taskData="taskInfo" v-for="taskInfo in taskItems" :key="taskInfo.id"></task> -->
  </div>


</template>

<script>
import Task from "../components/Task.vue";
export default {
  name: "List",
  props: ["listData"],
  data() {
    return {};
  },
  computed: {
    taskItems() {
      return this.$store.state.task;
    }
  },
  methods: {
    deleteList(listId) {
      //console.log("deleteBoard", this.boards[0].id)
      //console.log("deleteBoard", this.$router)
      //console.log ("deleteBoard1", this.$route.params.boardId)

      //console.log("deleteList", this.$route.params.boardId )
      //let boardId = this.$route.params.boardId
      this.$store.dispatch("deleteList", this.listData);
    }
  },
  components: { Task }
};
</script>

<style>
</style>