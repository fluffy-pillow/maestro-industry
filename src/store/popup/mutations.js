export const POPUP = (state, args) => {
    state.text = args.text
    state.bShow = true
    state.icon = args.icon
}

export const HIDE = (state) => {
    state.bShow = false
    state.text = ''
    state.icon = ''
}