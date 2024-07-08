"use client";
import React, { ReactNode } from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { GraphDistributionBodyProps, data } from './GraphDistributionBody.Types';

const GraphDistributionBody: React.FC<GraphDistributionBodyProps> = ({ }): ReactNode => {

  return (
    <div className="mt-5">
      <p className='text-3xl mb-3'>R$98.000</p>
      <div className='flex gap-x-5 md-5 flex-col'>

        <div className='w-full h-[280px] flex-col my-4'>

          <ResponsiveContainer width="100%" height="100%">

            <AreaChart width={830} height={500} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>

              <defs>
                <linearGradient id='colorUv' x1={0} x2={0} y2={1} >
                  <stop offset="5%" stopColor='#887cfd' stopOpacity={0.8}></stop>
                  <stop offset="95%" stopColor='#887cfd' stopOpacity={0}></stop>
                </linearGradient>

                <linearGradient id='colorPv' x1={0} y1={0} x2={0} y2={1} >

                  <stop offset="5%" stopColor='#82ca9d' stopOpacity={0.8}></stop>
                  <stop offset="95%" stopColor='#82ca9d' stopOpacity={0}></stop>
                </linearGradient>

              </defs>

              <XAxis dataKey="year" />
              <YAxis dataKey="noldCustomers" />
              <Tooltip />
              <Area type="monotone" dataKey="newCustomers" stroke='#887cfd' fillOpacity={1} fill='url(#colorUv)'></Area>
              <Area type="monotone" dataKey="noldCustomers" stroke='#82ca9d' fillOpacity={1} fill='url(#colorPv)'></Area>

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
};

export default GraphDistributionBody;