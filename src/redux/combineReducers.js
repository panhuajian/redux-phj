export default function (reducers) {
  const reducerKey = Object.keys(reducers)
  return function (state, action) {
    let nextState = {}
    let hasChanged = false
    reducerKey.forEach( key => {
      if (!state === undefined) {
        nextState[key] = reducers[key](state[key], action)
        if (!nextState[key] === state[key]) {
          hasChanged = true
        }
      } else {
        nextState[key] = reducers[key](undefined, action)
        hasChanged = true
      }
    })
    return hasChanged ? nextState : state
  }
}