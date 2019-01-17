
export default function (reducers, initState) {
  let defaultAction = {
    type: 'default_action'
  }
  let currentState = initState
  let currentListeners = []
  let isDispetch = false

  dispatch(defaultAction)

  return {
    getState,
    dispatch,
    subscribe
  }
  
  // 获取state
  function getState () {
    return currentState
  }

  // 触发action
  function dispatch (action) {
    currentState = reducers(currentState, action)
    currentListeners.forEach(item => {
      item()
    })
  }

  // 点阅监听事件
  function subscribe (listener) {
    currentListeners.push(listener)
  }
}