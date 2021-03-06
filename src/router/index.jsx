import { lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home/Home'))
const Product = lazy(() => import('../pages/Product/Product'))
const Search = lazy(() => import('../pages/Search/Search'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound'))

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/items" component={Search} />
      <Route exact path="/items/:id" component={Product} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/" />
    </Switch>
  )
}

export { Routes }
