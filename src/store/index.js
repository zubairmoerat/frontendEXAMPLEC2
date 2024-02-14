import { createStore } from 'vuex'
import axios from 'axios'

const dataURL = 'http://localhost:4000'

export default createStore({
  state: {
    friends: []
  },
  getters: {
  },
  mutations: {
    setFriends(state, data){
      state.friends = data
    }
  },
  actions: {
    getFriends(context){
      axios.get(dataURL+'/friends').then(res => {
        console.log(res.data);
        context.commit('setFriends',res.data)
      })
    },

  },
  modules: {
  }
})
