import combineReducers from '../../redux/combineReducers.js'
import count from './count.js'
import name from './name.js'

export default combineReducers({
  count,
  name
})