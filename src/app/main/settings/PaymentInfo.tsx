import React, { ChangeEvent, FormEvent, useState } from 'react';
import PaymentMethod from './PaymentMethod';

const PaymentInfo = () => {
  const [contactEmail, setContactEmail] = useState('olivia@untitledui.com');
  const [emailOption, setEmailOption] = useState('alternative');

  const handleEmailOption = (event: any) => {
    console.log(event.target.value);
    setEmailOption(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return;
  };

  return (
    <>
      <div className="my-4">
        <h3>Payment method</h3>
        <p className="text-xs font-light text-secondary">
          Update your billing details and address.
        </p>
      </div>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="my-4 flex lg:flex-row flex-col">
          <div className="lg:w-3/12 mb-4">
            <h3 className="text-xs">Contact email</h3>
            <p className="text-xs font-light text-secondary">
              Where should invoices be sent?
            </p>
          </div>
          <div className="text-xs">
            <div className="flex items-start">
              <input
                className="mx-2 accent-purple-600 mt-0.5"
                type="radio"
                name="contactEmail"
                value="default"
                checked={emailOption === 'default' ? true : ''}
                onChange={handleEmailOption}
              />
              <div className="text-xs">
                <p>Send to my account email</p>
                <p className="font-light text-secondary">
                  olivia@untitledui.com
                </p>
              </div>
            </div>
            <div className="flex mt-3 items-start">
              <input
                className="mx-2 accent-purple-600 mt-0.5"
                type="radio"
                name="contactEmail"
                value="alternative"
                checked={emailOption === 'alternative' ? true : ''}
                onChange={handleEmailOption}
              />
              <div className="text-xs">
                <p>Send to an alternative email</p>
                {emailOption === 'alternative' ? (
                  <div className="w-full relative mt-2">
                    <div className="absolute pointer-events-auto">
                      <img
                        className="w-4.5 h-4.5 ml-2.5 mt-2"
                        src="assets/images/mail.svg"
                        alt=""
                      />
                    </div>
                    <input
                      className="py-2.5 pr-3 pl-9 border border-slate-400 block rounded-lg w-full focus:outline-purple-500 border-solid"
                      type="email"
                      name="email"
                      placeholder="billing@untitledui.com"
                      onChange={e=> setContactEmail(e.target.value)}
                    />
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <PaymentMethod />
      </form>
    </>
  );
};

export default PaymentInfo;
