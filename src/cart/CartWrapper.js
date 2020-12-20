import React from 'react'
import Cart from './Cart'
import { AppProvider } from './context';


const CartWrapper = () => {
  return (
    <AppProvider>
      <Cart />
    </AppProvider>
  )
}

export default CartWrapper;
