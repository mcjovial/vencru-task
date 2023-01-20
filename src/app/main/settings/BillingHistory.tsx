import React, { useState } from 'react';
import Stack from '../../../components/main/Stack';
import { billsHistory } from '../../../data';
import { BillTypes } from '../../../utils/types';

const BillingHistory = () => {
  const [bills, setBills] = useState(billsHistory);

  return (
    <>
      <div className="my-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-5">
          <h3>Billing history</h3>
          <div className="relative">
            <img
              className="absolute ml-4 mt-0.5"
              src="assets/images/cloud.svg"
              alt="download bills"
            />
            <a
              href="/"
              className="text-base text-secondary border py-2.5 px-3 rounded-lg border-gray-300 bg-white pl-12"
            >
              Download all
            </a>
          </div>
        </div>
      </div>

      {/* table */}

      <div className="overflow-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 table-fixed">
          <thead>
            <tr className="text-xs text-secondary font-medium bg-[#F9FAFB]">
              <td className="py-4 pl-7 w-12 sm:w-10">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-purple-600 rounded-lg border focus:ring-purple-500 flex items-center"
                />
              </td>
              <td className="px-2 py-3 w-60 sm:w-80">
                <div className="flex items-center">
                  Invoice
                  <img
                    className="mx-1.5 h-3.5"
                    src="assets/images/arrow-down.svg"
                    alt=""
                  />
                </div>
              </td>
              <td className="px-6 py-3 w-32">
                <div className="flex items-center">Amount</div>
              </td>
              <td className="px-6 py-3 w-32">
                <div className="flex items-center">Date</div>
              </td>
              <td className="px-6 py-3 w-32">
                <div className="flex items-center">Status</div>
              </td>
              <td className="px-6 py-3 w-60">
                <div className="flex items-center whitespace-nowrap">Users on plan</div>
              </td>
              {/* <th className="px-6 py-3 w-20">
                <div className="flex items-center">.</div>
              </th> */}
            </tr>
          </thead>
          <tbody>
            {bills.map((bill: BillTypes, index: number) => (
              <tr
                className="bg-white border-b text-gray-500 font-light"
                key={index}
              >
                <td className="py-4 pl-7 w-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-purple-600 rounded-lg border focus:ring-purple-500 flex items-center"
                  />
                </td>
                <th
                  scope="row"
                  className="px-2 py-4 font-medium text-gray-700 whitespace-nowrap"
                >
                  {bill.invoice}
                </th>
                <td className="px-6 py-4 whitespace-nowrap">USD ${bill.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">{bill.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm px-2 bg-green-200 text-green-800 rounded-full flex w-16">
                    <img src="assets/images/s-check.svg" alt="" />
                    <span className="mx-1">Paid</span>
                  </div>
                </td>
                <td className='flex justify-between'>
                  <div className="text-xs whitespace-nowrap py-4 px-6">
                    <Stack avatars={bill.users} />
                  </div>
                  <div className="px-6 py-4 text-right whitespace-nowrap">
                    <a href="/">
                      <img
                        className=""
                        src="assets/images/cloud.svg"
                        alt="download"
                      />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BillingHistory;
