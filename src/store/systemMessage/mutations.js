export const SYSTEM_MESSAGE = (state, args) => {
    state.type = args.type
    state.message = args.message
    state.duration = args.duration
    state.bShow = true
}

export const HIDE = (state) => {
    state.bShow = false
}