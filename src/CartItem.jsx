import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, updateQuantity } from './CartSlice'
import './CartItem.css'

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let totalAmount = 0
    cart.forEach((item) => {
      const cost = parseFloat(item.cost.substring(1))

      totalAmount += cost * item.quantity
    })

    return totalAmount.toFixed(2)
  }

  
  const handleCheckOut = (e) => {
    alert('Functionality Coming soon !!! ')
  }

  // Increment quantity of an item
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))
  }

  // Decrement quantity of an item
  const handleDecrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))
  }

  // Remove an item from the cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.name))
  }

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const cost = parseFloat(item.cost.substring(1))

    return (cost * item.quantity).toFixed(2)
  }

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>
      <div>
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span className="cart-item-quantity-value">
                  {item.quantity}
                </span>
                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              <div className="cart-item-total">
                Total: ${calculateTotalCost(item)}
              </div>
              <button
                className="cart-item-delete"
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{ marginTop: '20px', color: 'black' }}
        className="total_cart_amount"
      ></div>
      <div className="continue_shopping_btn">
        <button
          className="get-started-button"
          onClick={onContinueShopping}
        >
          Continue Shopping
        </button>
        <br />
        <button className="get-started-button1"  onClick={(e) => handleCheckOut(e)} >Checkout</button>
      </div>
    </div>
  )
}

export default CartItem
