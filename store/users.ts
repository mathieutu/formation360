import { MutationTree, ActionTree, GetterTree } from 'vuex'
type User = {
  id: string,
  name: string,
  avatar: string,
}

type State = {
  usersList: User[]
}

export const state = (): State => ({
  usersList: [],
})

export const mutations: MutationTree<State> = {
  setUsers(state: State, users: User[]) {
    state.usersList = users
  },
}

export const actions: ActionTree<State, { users: State }> = {
  async fetchUsers({ commit, state }) {
    // if (state.usersList.length) { return }

    const { results } = await this.$axios.$get('https://randomuser.me/api/?results=20&seed=foobar')

    commit('setUsers', results.map((user: any) => ({
      id: user.login.uuid,
      name: `${user.name.first} ${user.name.last.toUpperCase()}`,
      avatar: user.picture.thumbnail,
    })))
  },
}

export const getters: GetterTree<State, { users: State }> = {
  getOneUser: state => (userId: string) => state.usersList.find(user => user.id === userId),

}
