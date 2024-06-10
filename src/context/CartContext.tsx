'use client';
import React, { useEffect, useState } from 'react'
import { Item, CartItem } from '@/interfaces'
import { toast } from 'react-toastify';

type ContextType = {
  products: CartItem[],
  addToCart: (product: Item) => void,
  removeFromCart: (product: Item) => void,
  updateQuantity: (product: CartItem, quantity: number) => void
}

export const CartContext = React.createContext<ContextType>({
  products: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {}
})

type CartContextProviderProps = {
  children: React.ReactNode
}

const CartContextProvider = ({children}: CartContextProviderProps ) => {
  const [products, setProducts] = useState<CartItem[]>([])


  useEffect(() => {
    const Cart = localStorage.getItem('cart');
    if (Cart) {
      setProducts(JSON.parse(Cart))
    }
  },[])

  const addToCart = (product: Item) => {
    if (!products.find((item) => item.id === product.id)){
      const newProduct = {...product, quantity: 1}
      setProducts([...products, newProduct])
      localStorage.setItem('cart', JSON.stringify( [...products, newProduct]))
      toast.success('Produit ajouté au panier')
    }
  }
  const removeFromCart = (product: CartItem) => {
    setProducts(products.filter((item) => item.id !== product.id))
  }

  const updateQuantity = (product: CartItem, quantity: number) => {
    if (quantity < 1) {
      return
    }
    const newProducts = products.map((item) => {
      if (item.id === product.id) {
        return {...item, quantity}
      }
      return item
    })
    setProducts(newProducts)
    localStorage.setItem('cart', JSON.stringify(newProducts))

  }
  

  const contextValue = {
    products,
    addToCart,
    removeFromCart,
    updateQuantity
  }
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider