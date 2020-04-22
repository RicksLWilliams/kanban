import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    activeBoard: {},
    lists: [],
    tasks:{
      //listOneId: ["tasks"]
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setLists(state, lists) {
      state.lists = lists
    },
    setTasks (state, tasks) {
      Vue.set(state.tasks, tasks.listId, tasks.taskList)
      // need some help here

    }
  },
  actions: {
    //#region -- AUTH STUFF --
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("/profile")
        commit("setUser", res.data)
      } catch (err) {
        console.error(err)
      }
    },
    //#endregion


    //#region -- BOARDS --
    getBoards({ commit, dispatch }) {
      api.get('boards')
        .then(res => {
          commit('setBoards', res.data)
        })
    },
    addBoard({ commit, dispatch }, boardData) {
      api.post('boards', boardData)
        .then(serverBoard => {
          dispatch('getBoards')
        })
    },

    deleteBoard({ commit, dispatch }, boardId) {
      api.delete('boards/' + boardId)
        .then(serverBoard => {
          dispatch('getBoards')
        })
    },

  

    getLists({ commit, dispatch }, boardId) {
       api.get('boards/' + boardId + '/lists')
      //api.get('lists/')
        .then(res => {
          commit('setLists', res.data)
        })
    },
    // FIXME dispatch get list requires boardId
    addList({ commit, dispatch }, listData) {
      api.post('lists/', listData)
        .then(serverBoard => {
          dispatch('getLists',listData.boardId)
        })
    },

    //deleteList
    deleteList({ commit, dispatch }, listData) {
      api.delete('lists/' + listData.id)
        .then(serverBoard => {
          dispatch('getLists', listData.boardId)
        })
    },

    getTasks({ commit, dispatch }, listId) {
      api.get('lists/' + listId + '/tasks')
       .then(res => {
         let tasks = {
          listId :listId,
          taskList : res.data
         }
         commit('setTasks', tasks)
       })
   },
   // FIXME dispatch get list requires boardId
    addTask({ commit, dispatch }, taskData) {
      api.post('tasks/', taskData)
        .then(serverBoard => {
          dispatch('getTasks',taskData.listId)
        })
    },

    deleteTask({ commit, dispatch }, taskData) {
      api.delete('tasks/' + taskData.id)
        .then(serverBoard => {
          dispatch('getTasks', taskData.listId)
        })
    },



    //#endregion


    //#region -- LISTS --



    //#endregion
  }
})
