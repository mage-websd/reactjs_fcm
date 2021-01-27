import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from "./../containers/layout";
import RouteLoader from "../components/Loader/RouteLoader";
import routes from './routes'

const AppRouter = (
    <>
        <Suspense fallback={<RouteLoader />}>
            <Switch>
                {routes.map((route, key) => {
                    const { path, exact, isPrivate, component, layout } = route
                    const props = {
                        key,
                        path,
                        exact,
                        component: lazy(() => new Promise(resolve => setTimeout(() => resolve(component), 500)))
                    }
                    const element = <Route {...props} />
                    if (layout === null) {
                        return element
                    }
                    return React.createElement(layout ? layout : Layout, props, element)
                })}
            </Switch>
        </Suspense>
    </>
)

export default AppRouter