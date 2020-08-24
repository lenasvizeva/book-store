import React from 'react'
import './app.css'
import { Route, Switch } from 'react-router-dom'
import { HomePage, CartPage } from '../pages'
import ShopHeader from '../shop-header'

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={3} total={140} />
      <Switch>
        <Route 
          path='/'
          component={HomePage}
          exact />
        <Route 
          path='/cart'
          component={CartPage} />
      </Switch>
    
    </main>
  )
}

export default App