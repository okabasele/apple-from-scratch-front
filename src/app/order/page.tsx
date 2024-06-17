"use client"
import { CartContext } from '@/context/CartContext';
import Image from 'next/image';
import { useContext, useEffect } from 'react';

const OrderPage = () => {
  const { orders } = useContext(CartContext);

  useEffect(() => {
    //resize the section with header height
    const header = document.querySelector('header')
    const section = document.querySelector('#order-section') as HTMLDivElement;
    if (header && section) {
      const headerHeight = header.clientHeight
      section.style.minHeight = window.innerHeight - headerHeight + 'px'
    }
  },[])
  return (
    <section id='order-section' className='flex flex-col items-center'>
      <div className='my-10 text-center'>
        <h1 className="text-2xl font-bold mb-4">Les commandes</h1>
        {orders.length === 0 ? (
          <p>Aucune commande disponible</p>
        ) : (
          <table className="table-auto border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Order ID</th>
                <th className="border border-gray-300 p-2">Date</th>
                <th className="border border-gray-300 p-2">Total</th>

                <th className="border border-gray-300 p-2">Product Image</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="border border-gray-300 p-2 content-start">{order.id}</td>
                  <td className="border border-gray-300 p-2 content-start">{order.date}</td>
                  <td className="border border-gray-300 p-2 content-start">{order.total}€</td>
                  <td className="grid grid-cols-4">
                 {
                    order.items.map((item) => (
                      <Image key={`order-${order.id}-item-${item.id}`} src={item.image} alt={item.name} width={100} height={100} />
                    ))
                 }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default OrderPage;