import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import reducers from './reducer'

const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RooteState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch; 