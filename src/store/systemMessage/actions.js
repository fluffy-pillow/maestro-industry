export function hide({commit}) {
    commit('HIDE')
}

export function systemMessage({commit}, args) {
    commit('SYSTEM_MESSAGE', args)
}