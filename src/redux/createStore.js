export default function (reducers, initState) {
  let defaultAction = {
    type: 'default_action'
  }
  let currentState = initState
  let currentListeners = []
  let isDispetch = false

  // 默认第一次触发dispatch
  dispatch(defaultAction)

  // 返回store的方法
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
    // 执行reducer，更新当前的state
    currentState = reducers(currentState, action)
    // 更新state之后，执行每个监听函数
    currentListeners.forEach( listener => {
      listener()
    })
  }

  // 点阅监听事件
  function subscribe (listener) {
    // 将监听函数添加到数组中
    currentListeners.push(listener)
  }
}