<template>
  <div>
    <form @submit.prevent="addList">
      <input
        class="input-front pl-1"
        type="text"
        placeholder="add list..."
        v-model="newList.title"
        required
      />
      <button class="btn btn-secondary border-dark" type="submit">+</button>
    </form>
    <!-- <div v-for="list in board" :key="list.id">
      <router-link :to="{name: 'board', params: {boardId: board.id}}">{{board.title}}</router-link>
    <button @click="deleteList(board.id)">delete </button>-->
  </div>
</template>
  
<script>
export default {
  name: "AddList",
  data() {
    return {
      newList: {}
    };
  },
  methods: {
    addList() {
      this.newList.boardId = this.$route.params.boardId;
      this.$store.dispatch("addList", this.newList);
      this.newList = { title: "", description: "" };
    }
  }
};
</script>
  
  <style>
.input-front {
  border-radius: 12px;
  border: rgb(31, 104, 80) 2px solid;
}
</style>

