// src/components/EMICalculator.tsx or .jsx
import React, { useState } from 'react';
import { calculateEMI } from '../utils/calculateEMI';
import EMIChart from '../Charts/Charts';

const Personal = () => {
  const [principal, setPrincipal] = useState(600000);
  const [rate, setRate] = useState(11);
  const [tenure, setTenure] = useState(1);

  const emi = calculateEMI(principal, rate, tenure);
  const totalPayment = emi * tenure * 12;
  const totalInterest = totalPayment - principal;

  return (
    <div className="bg-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left: Form Section */}
        <div className="col-span-1">
          <label className="block font-semibold mb-1 text-center p-2">Loan Amount (₹)</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full border border-gray-300 px-4 py-2 rounded mb-2"
          />
          <input
            type="range"
            min={10000}
            max={20000000}
            step={10000}
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full mb-4"
          />

          <label className="block font-semibold mb-1 text-center p-2">Annual Interest Rate (%)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full border border-gray-300 px-4 py-2 rounded mb-4"
          />
          <input
            type="range"
            min={0}
            max={20}
            step={1}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full mb-4"
          />

          <label className="block font-semibold mb-1 text-center p-2">Loan Tenure (Years)</label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full border border-gray-300 px-4 py-2 rounded mb-4"
          />
          <input
            type="range"
            min={0}
            max={50}
            step={2}
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full mb-4"
          />
        </div>

        {/* Right: Result & Chart Section */}
        <div className="col-span-1 flex flex-col items-center justify-center">
          <div className=" p-4 rounded text-gray-700 text-lg space-y-2 w-full">
            <div className=" bg-gray-100 p-2 text-center rounded  m-1">
              <p className="text-green-500">Monthly EMI:</p>
              <strong className="text-orange-500 text-xl">₹ {emi.toFixed(0)}</strong>
            </div>
            <div className=" bg-gray-100 p-2 text-center rounded  m-1">
              <p className="text-green-500">Total Interest:</p>
              <strong className="text-orange-500 text-xl">₹ {totalInterest.toFixed(0)}</strong>
            </div>
            <div className=" bg-gray-100 p-2 text-center rounded  m-1">
              <p className="text-green-500">Total Payment:</p>
              <strong className="text-orange-500 text-xl">₹ {totalPayment.toFixed(0)}</strong>
            </div>
            
          </div>
          <div className="mt-4 w-full flex flex-col items-center justify-center">
            <EMIChart principal={principal} totalPayment={totalPayment} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Personal;
