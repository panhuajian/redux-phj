const initName = {
  name: 'phj'
}
export default function (state = initName, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return Object.assign({}, state, {
        name: action.data
      })
    default:
      return state
  }
}