'use client';
import React, { useEffect, useState } from 'react'
import { Item } from '@/interfaces'
import { toast } from 'react-toastify';

type ContextType = {
  products: Item[],
  addToCart: (product: Item) => void,
  removeFromCart: (product: Item) => void,
}

export const CartContext = React.createContext<ContextType>({
  products: [],
  addToCart: () => {},
  removeFromCart: () => {},
})

type CartContextProviderProps = {
  children: React.ReactNode
}

const CartContextProvider = ({children}: CartContextProviderProps ) => {
  const [products, setProducts] = useState<Item[]>([])


  useEffect(() => {
    const Cart = localStorage.getItem('cart');
    if (Cart) {
      setProducts(JSON.parse(Cart))
    }
  },[])

  const addToCart = (product: Item) => {
    if (!products.find((item) => item.id === product.id)){
      setProducts([...products, product])
      localStorage.setItem('cart', JSON.stringify( [...products, product]))
      toast.success('Produit ajouté au panier')
    }
  }
  const removeFromCart = (product: Item) => {
    setProducts(products.filter((item) => item.id !== product.id))
  }
  

  const contextValue = {
    products,
    addToCart,
    removeFromCart,
  }
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider