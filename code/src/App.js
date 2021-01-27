import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import routers from './routers'

const App = ({ history }) => {
    return <ConnectedRouter history={history}>{routers}</ConnectedRouter>
}
export default App
