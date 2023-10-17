// Import the `createStore` function from `redux`.
import {createStore} from 'redux'

// Import the `rootReducers` function from `./redux/reducers/rootReducers`.
import {rootReducers} from './redux/reducers/rootReducers'

// Create a Redux store and export it.
export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
