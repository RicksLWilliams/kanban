<template>
  <div class="col-4">
    <!-- <h1>I am a list</h1> -->
    <h3>{{listData.title}}</h3>
    <button @click="deleteList(listData.id)">delete list</button>
    <add-task v-bind:listData="listData"> </add-task>
    <!-- <task></task> -->
    <task v-for="taskInfo in taskItems" :taskData="taskInfo" :key="taskInfo.id"></task>
  </div>


</template>

<script>
import Task from "../components/Task.vue";
import AddTask from "../components/AddTask.vue";
export default {
  name: "List",
  props: ["listData"],
  data() {
    return {};
  },
  computed: {
    taskItems() {
      return this.$store.state.tasks[this.listData.id];
    }
  },
  methods: {
    deleteList(listId) {
      this.$store.dispatch("deleteList", this.listData);
    }
  },
  components: { Task, AddTask }
};
</script>

<style>
</style>