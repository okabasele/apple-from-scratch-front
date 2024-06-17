"use client"
import ButtonLink from '@/components/UI/ButtonLink';
import Title from '@/components/UI/Title';
import { CartContext } from '@/context/CartContext';
import React, { useContext } from 'react';

const SuccessPage = () => {
  const {saveOrder} = useContext(CartContext);
  
  saveOrder();

  return (
    <section className='flex flex-col items-center'>
      <div className='my-10 text-center'>
        <Title title='Commande réussie!' level='1' />
        <p>{"Merci d'avoir passé commande."}</p>
        <p>Nous vous enverrons une confirmation par e-mail.</p>
        <div className='flex justify-between gap-5'>
          <ButtonLink title="Retour à l'accueil" variant="primary" href='/' />
          <ButtonLink title='Consulter les commandes' variant="primary-outline" href='/order' />
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;