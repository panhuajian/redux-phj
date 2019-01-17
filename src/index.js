import store from './store'

// 第一次默认赋值
(function () {
  console.log('store', store)
  document.querySelector('.cont').innerHTML = store.getState().count.num
  console.log('state', store.getState())
})()
// 往subscribe中添加监听函数
store.subscribe(() => {
  document.querySelector('.cont').innerHTML = store.getState().count.num
  console.log('state', store.getState())
})
// 加值
document.querySelector('.addition').onclick = function () {
  let num = store.getState().count.num
  store.dispatch({
    type: 'ADDITION',
    data: ++num
  })
}
// 减值
document.querySelector('.subtraction').onclick = function () {
  let num = store.getState().count.num
  store.dispatch({
    type: 'SUBTRACTION',
    data: --num
  })
}