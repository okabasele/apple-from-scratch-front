import ButtonLink from '@/components/UI/ButtonLink';
import Title from '@/components/UI/Title';
import React from 'react';

const SuccessPage = () => {
  return (
    <section className='flex flex-col items-center'>
      <div className='my-10 text-center'>
        <Title title='Annulation de la commande!' level='1' />
        <p>{"Votre commande a été annulée."}</p>
        <p>{"Nous sommes désolés de ne pas pouvoir traiter votre commande pour le moment."}</p>
        <div className='flex justify-between gap-5'>
          <ButtonLink title="Retour à l'accueil" variant="primary" href='/' />
          <ButtonLink title='Consulter les commandes' variant="primary-outline" href='/order' />
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;