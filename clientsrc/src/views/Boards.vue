<template>
  <div class="boards">
    WELCOME TO THE BOARDS!!!
    <form @submit.prevent="addBoard">
      <input type="text" placeholder="title" v-model="newBoard.title" required />
      <input type="text" placeholder="description" v-model="newBoard.description" />
      <button type="submit">Create Board</button>
    </form>
    <div v-for="board in boards" :key="board.id">
      <router-link :to="{name: 'board', params: {boardId: board.id}}">{{board.title}}</router-link>
      <button @click="deleteBoard(board.id)">delete

      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "boards",
  mounted() {
    this.$store.dispatch("getBoards");
  },
  data() {
    return {
      newBoard: {
        title: "",
        description: ""
      }
    };
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    }
  },
  methods: {
    addBoard() {
      this.$store.dispatch("addBoard", this.newBoard);
      this.newBoard = { title: "", description: "" };
    },

    deleteBoard(boardId){
      //console.log("deleteBoard", this.boards[0].id)
      //console.log("deleteBoard", this.$router)
      console.log ("deleteBoard1", this.$route.params.boardId)

      console.log("deleteBoard2", boardId)
      this.$store.dispatch("deleteBoard",  boardId  )

    }
  }
};
</script>