import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload

      const existingItem = state.items.find((item) => item.name === name)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ name, image, cost, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload)
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload

      const itemToUpdate = state.items.find((item) => item.name === name)
      if (itemToUpdate) {
        if (quantity >= 0) {
          itemToUpdate.quantity = quantity
        } else {
          itemToUpdate.quantity = 0 // if quantity is negative, set it to 0  to prevent negative quantities
        }
      }
      // Optional: Remove the item if the quantity is 0
      
    },
  },
})

export const { addItem, removeItem, updateQuantity } = CartSlice.actions

export default CartSlice.reducer
