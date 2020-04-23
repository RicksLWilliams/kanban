<template>
  <div class="cork boards row">
    <h1 class="col-12 text-light mt-5 header">STICK IT HERE!</h1>
    <form class="col-12" @submit.prevent="addBoard">
      <input
        class="input-front"
        type="text"
        placeholder=" add board..."
        v-model="newBoard.title"
        required
      />
      <input
        class="input-front"
        type="text"
        placeholder=" description..."
        v-model="newBoard.description"
      />
      <button class="btn btn-secondary border-dark" type="submit">+</button>
    </form>
    <div class="row m-5 justify-content-center">
      <div class="boards-front m-5" v-for="board in boards" :key="board.id">
        <div class="col-12 text-right ml-3">
          <button class="btn pb-0" @click="deleteBoard(board.id)">
            <h4 class="text-danger">X</h4>
          </button>
        </div>

        <router-link
          class="col-5 front-board"
          :to="{name: 'board', params: {boardId: board.id}}"
        >{{board.title}}</router-link>
      </div>
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

    deleteBoard(boardId) {
      //console.log("deleteBoard", this.boards[0].id)
      //console.log("deleteBoard", this.$router)
      console.log("deleteBoard1", this.$route.params.boardId);

      console.log("deleteBoard2", boardId);
      this.$store.dispatch("deleteBoard", boardId);
    }
  }
};
</script>

<style>
.boards-front {
  border: solid 2px black;
  background-color: rgb(253, 253, 192);
  box-shadow: 3px 0px 15px 2px rgb(5, 5, 5);
  height: 200px;
  width: 220px;
}

.front-board {
  font-family: Bradley Hand ITC;
  font-weight: bolder;
  font-size: 35px;
}

.cork {
  background-image: url(https://aedcweb.com/wp-content/uploads/2018/02/cork-board-background.png);
  background-size: cover;
  min-height: 85vh;
  border: 5px solid rgb(12, 83, 75);
}

.input-front {
  border-radius: 12px;
  border: 2px solid blue;
}

.header {
  text-shadow: 2px 2px 5px black;
}
</style>