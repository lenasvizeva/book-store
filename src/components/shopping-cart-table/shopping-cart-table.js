import React from 'react'
import './shopping-cart-table.css'

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your order</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th className="text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Clean Code</td>
            <td>1</td>
            <td>$49</td>
            <td className="text-right">
              <button className="btn btn-outline-danger btn-small">
                <i className="fa fa-trash-o" />
              </button>
              <button className="btn btn-outline-success btn-small">
                <i className="fa fa-plus-circle" />
              </button>
              <button className="btn btn-outline-warning btn-small">
                <i className="fa fa-minus-circle" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="total">
        Total: $ 320
      </div>
    </div>
  )
}

export default ShoppingCartTable

