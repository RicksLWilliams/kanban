<template>
  <div class="col-3 m-5 list">
    <!-- <h1>I am a list</h1> -->
    <div class="row">
      <h3 class="listTitle pt-1 col-6">{{listData.title}}:</h3>
      <div class="col-6 dltList">
        <button class="btn pb-0" @click="deleteList(listData.id)">
          <h4 class="text-danger">X</h4>
        </button>
      </div>
    </div>
    <add-task v-bind:listData="listData"></add-task>
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
  mounted() {
    this.$store.dispatch("getTasks", this.listData.id);
  },
  components: { Task, AddTask }
};
</script>

<style>
.list {
  height: 340px;
  max-height: 340px;
  min-width: 380px;
  border: rgb(253, 253, 192) 2px solid;
  background-color: rgb(253, 253, 192);
  /* filter: drop-shadow(8px 8px 20px); */
  box-shadow: 3px 0px 15px 5px rgba(5, 5, 5, 0.664);
  overflow-y: scroll;
}
.listTitle {
  padding-right: 100px;
  font-family: Bradley Hand ITC;
  font-weight: bolder;
  font-size: 35px;
}
.dltList {
  padding-left: 130px;
}
</style>