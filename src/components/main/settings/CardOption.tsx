import React, { FC } from 'react';
import { PaymentCardTypes } from '../../../utils/types';

type CardOptionProps = PaymentCardTypes;

const CardOption: FC<CardOptionProps> = ({
  name,
  number,
  expiry,
  logo,
  default: def,
}) => {
  return (
    <>
      <div
        className={`border rounded-lg p-4 ${
          def ? 'bg-[#f0ecf6] text-purple-800 border-purple-300' : 'bg-white'
        } mb-3`}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start">
            <img className="w-4.5 h-4.5" src={logo} alt="" />
            <div className="mx-3">
              <p>
                {name} ending in {number}
              </p>
              <p
                className={`font-light ${
                  def ? 'text-purple-500' : 'text-secondary'
                }`}
              >
                Expiry {expiry}
              </p>
              <p className="mt-2">
                <span
                  className={`${
                    def ? 'text-purple-500' : 'text-secondary'
                  } cursor-pointer`}
                >
                  Set as default
                </span>{' '}
                <a className="text-purple-700 mx-2 cursor-pointer" href="h#">
                  Edit
                </a>
              </p>
            </div>
          </div>
          {def ? (
            <img
              className="w-4.5 h-4.5 cursor-pointer"
              src="assets/images/check.svg"
              alt=""
            />
          ) : (
            <img
              className="w-4.5 h-4.5 cursor-pointer"
              src="assets/images/uncheck.svg"
              alt=""
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CardOption;
