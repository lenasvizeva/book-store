import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunkMiddleware from 'redux-thunk'
// Logger with default options
import logger from 'redux-logger'

const logMiddleware = ({ getState }) => (next) => (action) => {
  console.log(action.type, getState())
  return next(action) 
}

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action
    })
  }

  return next(action)
}

const store = createStore(reducer, applyMiddleware(
  thunkMiddleware, stringMiddleware, logMiddleware, logger))

// const delayedActionCreator = (timeout) => (dispatch) => {
//   setTimeout(() => dispatch({
//     type: 'DELAYED_ACTION'
//   }), timeout) 
// }

store.dispatch(stringMiddleware)

export default store