export function hide({commit}) {
    commit('HIDE')
}

export function popup({commit}, args) {
    commit('POPUP', args)
}