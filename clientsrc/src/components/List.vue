<template>
  <div>
    <!-- <h1>I am a list</h1> -->
    <h3>{{listData.title}}</h3>
    <button @click="deleteList(listData.id)">delete </button>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ["listData"],
  data() {
    return {};
  },
  methods:{
    deleteList(listId){
      //console.log("deleteBoard", this.boards[0].id)
      //console.log("deleteBoard", this.$router)
      //console.log ("deleteBoard1", this.$route.params.boardId)

      //console.log("deleteList", this.$route.params.boardId )
      //let boardId = this.$route.params.boardId
      this.$store.dispatch("deleteList",  this.listData  )

    }
  }
};
</script>

<style>
</style>