"use client"
import Button from '@/components/UI/Button'
import ButtonLink from '@/components/UI/ButtonLink'
import Title from '@/components/UI/Title'
import { CartContext } from '@/context/CartContext'
import { CartItem } from '@/interfaces'
import { fetchStripeSession } from '@/services/fetchStripeSession.api'
import { formatPrice, generateBlurPlaceholder } from '@/utils'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'
import { PiPackageThin } from "react-icons/pi";

const Cart = () => {
  const router = useRouter()

  const {products, total, removeFromCart, updateQuantity} = useContext(CartContext)
  
  useEffect(() => {
    //resize the section with header height
    const header = document.querySelector('header')
    const section = document.querySelector('#cart-section') as HTMLDivElement;
    if (header && section) {
      const headerHeight = header.clientHeight
      section.style.minHeight = window.innerHeight - headerHeight + 'px'
    }
  },[])

  if (!products) return <Title title="Votre panier est vide" level="1" font="bold" /> 
  
  const handleCheckout = async (items: CartItem[]) => {
    const stripeSession = await fetchStripeSession(items);
    console.log({stripeSession})
    if (stripeSession) {
      router.push(stripeSession.url)
    }
  }

    
    return (
      <section id='cart-section' className='flex flex-col items-center'>
      <div className='my-10'>
      <Title title={`Le montant total de votre panier est de ${formatPrice(total)}.`} level="1" font="bold" /> 
      <br/>
      <ButtonLink title="Voir les commandes" variant="primary-outline" href='/order' />
      </div>
      <div className='w-[823px] pb-10 border-b border-gray-400'>
        {products.map((product) => (
          <div key={product.id} className='h-60 flex pt-10 border-t border-gray-400'>
            <div className='w-64 h-full'>
              <Image placeholder='blur' blurDataURL={generateBlurPlaceholder("white")} src={product.image} alt={product.name} width={400} height={400} />
            </div>
            <div className='w-full' >
              <div className='flex justify-between h-28 py-2 border-b border-gray-400'>
                <Title title={product.name} level='2' font='bold' />
                <div className='flex items-start '>
                  <Button title='-' variant='link' onClick={()=>updateQuantity(product, product.quantity-1)} />
                  <Title title={product.quantity.toString()} level='2' font='bold' />
                  <Button title='+' variant='link' onClick={()=>updateQuantity(product, product.quantity+1)} />
                </div>
                <div>
                  <Title title={formatPrice(product.price)} level='2' font='bold' />
                  <p>Dont éco-participation: 0,02 €</p>
                  <Button title='Supprimer' variant='link' onClick={()=>removeFromCart(product)} />
                </div>
              </div>
              <div className='flex justify-between h-28'>
                <div className='flex items-center'>
                  <PiPackageThin size={20} />
                  <p>Livraison gratuite</p>
                </div>
                <div className='flex items-center'>
                <svg viewBox="0 0 25 25" className="as-svgicon as-svgicon-applestorepickup as-svgicon-reduced as-svgicon-applestorepickupreduced" role="img" aria-hidden="true" width="25px" height="25px"><path fill="none" d="M0 0h25v25H0z"></path><path d="M18.5 5h-1.775a4.231 4.231 0 0 0-8.45 0H6.5A2.5 2.5 0 0 0 4 7.5v11A2.5 2.5 0 0 0 6.5 21h12a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 18.5 5Zm-6-3a3.245 3.245 0 0 1 3.225 3h-6.45A3.245 3.245 0 0 1 12.5 2ZM20 18.5a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 5 18.5v-11A1.5 1.5 0 0 1 6.5 6h12A1.5 1.5 0 0 1 20 7.5Z"></path><path d="M14.4 12.448a1.592 1.592 0 0 1 .738-1.328 1.607 1.607 0 0 0-1.37-.687c-.52 0-.941.317-1.22.317s-.663-.3-1.129-.3a1.861 1.861 0 0 0-1.739 2.068 4.32 4.32 0 0 0 .723 2.3c.346.491.648.883 1.084.883s.617-.287 1.144-.287c.55 0 .663.279 1.137.279s.791-.43 1.084-.853a3.24 3.24 0 0 0 .474-.989 1.516 1.516 0 0 1-.926-1.403ZM12.583 10.357a1.346 1.346 0 0 0 .941-.5 1.594 1.594 0 0 0 .361-.974.731.731 0 0 0-.008-.136 1.5 1.5 0 0 0-1.016.528 1.547 1.547 0 0 0-.384.943c0 .053.008.106.008.128.03.004.06.011.098.011Z"></path></svg>
                  <p>Retrait gratuit en magasin</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='w-[823px] flex flex-col items-end'>
        <div className='w-3/4'>
        <div className='flex justify-between'>
          <Title title='Total' level='2' font='bold' />
          <Title title={formatPrice(total)} level='2' font='bold' />
        </div>
        
        </div>
        <Button title='Valider la commande' variant='primary' onClick={()=>handleCheckout(products)} />
      </div>
    </section>
  )
}

export default Cart