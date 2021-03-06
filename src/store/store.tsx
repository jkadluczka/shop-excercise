import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './../reducers/userReducer'

export default createStore(rootReducer, undefined, applyMiddleware(thunk))
