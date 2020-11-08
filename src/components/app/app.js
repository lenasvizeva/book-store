import React from 'react'
import './app.css'
import { Route, Switch } from 'react-router-dom'
import { HomePage, CartPage } from '../pages'
import ShopHeader from '../shop-header'
import { connect } from 'react-redux'

const App = ({items, totalPrice}) => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={items.length} total={totalPrice} />
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

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
  return {
    items: cartItems,
    totalPrice: orderTotal
  }
}

export default connect(mapStateToProps)(App)