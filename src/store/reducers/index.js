const initCount = {
  num: 0
}
export default function (state = initCount, action) {
  switch (action.type) {
    case 'ADDITION':
      return Object.assign({}, state, {
        num: action.data
      })
    case 'SUBTRACTION':
      return Object.assign({}, state, {
        num: action.data
      })
    default:
      return state
  }
}