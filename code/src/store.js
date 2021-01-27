import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'

export const history = createBrowserHistory()

function configureStore(preloadedState) {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancer(applyMiddleware(routerMiddleware(history)))
    )

    return store
}

const store = configureStore({})

export const getStore = () => store

export default store
