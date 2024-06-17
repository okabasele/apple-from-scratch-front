'use client';
import React, { useEffect, useState } from 'react'
import { Item, CartItem, Order } from '@/interfaces'
import { toast } from 'react-toastify';

type ContextType = {
  products: CartItem[],
  total: number,
  orders: Order[],
  saveOrder: () => void,
  addToCart: (product: Item) => void,
  removeFromCart: (product: CartItem) => void,
  updateQuantity: (product: CartItem, quantity: number) => void
}

export const CartContext = React.createContext<ContextType>({
  products: [],
  total: 0,
  orders: [],
  saveOrder: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {}
})

type CartContextProviderProps = {
  children: React.ReactNode
}

const CartContextProvider = ({children}: CartContextProviderProps ) => {
  const [products, setProducts] = useState<CartItem[]>([])
  const [total, setTotal] = useState<number>(0)
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const Cart = localStorage.getItem('cart');
    const Orders = localStorage.getItem('orders');
    if (Cart) {
      setProducts(JSON.parse(Cart))
    }
    if (Orders) {
      setOrders(JSON.parse(Orders))
    }
  },[])
  useEffect(() => {
    const total = products.reduce((acc, item) => acc + item.price * item.quantity, 0)
    setTotal(total)
  }, [products])

  const saveOrder = () => {

    if (products.length === 0) {
      return
    }
    const newOrder = {
      id: `order-${Math.random().toString(36).substring(2, 11)}`,
      total: 0,
      date: new Date().toLocaleDateString(),
      items: products
    }
    newOrder.total = newOrder.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    setOrders([...orders, newOrder])
    setProducts([])
    setTotal(0)
    localStorage.setItem('cart', JSON.stringify([]))
    localStorage.setItem('orders', JSON.stringify([...orders, newOrder]))
    toast.success('Commande enregistrée avec succès')
  }

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
    total,
    orders,
    saveOrder,
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