import React, { useState } from 'react';
import CardOption from '../../../components/main/settings/CardOption';
import { cardOptions } from '../../../data';

const PaymentMethod = () => {
  const [cards, setCards] = useState(cardOptions);

  return (
    <>
      <div className="my-4 flex lg:flex-row flex-col">
        <div className="lg:w-4/12 mb-4">
          <h3 className="text-xs">Card details</h3>
          <p className="text-xs font-light text-secondary">
            Select default payment method.
          </p>
        </div>
        <div className="text-sm w-full">
          {cards.map((card, index) => (
            <CardOption
              key={index}
              name={card.name}
              number={card.number}
              expiry={card.expiry}
              logo={card.logo}
              default={card.default}
            />
          ))}
          <a className="flex" href="h">
            <img src="assets/images/plus.svg" alt="add" />
            <span className="text-secondary mx-2">Add new payment method</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
