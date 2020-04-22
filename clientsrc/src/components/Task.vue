<template>
  <div class="col-4">
    <!-- <h1 class="text-primary">I am a list</h1> -->
    <h3 class="text-primary">{{taskData.title}}</h3>
    <button class="btn btn-warning" @click="deleteTask(taskData.id)">delete task</button>

    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div v-for="listInfo in listItems"  :key="listInfo.id">
        <a class="dropdown-item" href="#">{{listInfo.title}}</a>
    </div>
  </div>
</div>

  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["taskData"],
  data() {
    return {};
  },
   computed: {
     listItems() {
       console.log("listItems",this.$store.state.lists )
       return this.$store.state.lists;
     }
   },
  methods: {
    deleteTask(taskId){
      //let listId = this.$route.params.boardId
      //this.$store.dispatch("deleteTask", taskId);

      this.$store.dispatch("deleteTask", this.taskData);
    }

  },
  
};
</script>

<style>
</style>