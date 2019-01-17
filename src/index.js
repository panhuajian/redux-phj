import store from './store'

(function () {
  console.log('store', store)
  document.querySelector('.cont').innerHTML = store.getState().num
})()
store.subscribe(() => {
  document.querySelector('.cont').innerHTML = store.getState().num
})
document.querySelector('.addition').onclick = function () {
  let num = store.getState().num
  num++
  store.dispatch({
    type: 'ADDITION',
    data: num
  })
}
document.querySelector('.subtraction').onclick = function () {
  let num = store.getState().num
  num--
  store.dispatch({
    type: 'SUBTRACTION',
    data: num
  })
}