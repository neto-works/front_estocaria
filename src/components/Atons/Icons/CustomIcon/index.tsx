import React, { ReactNode } from 'react';
import { CustomIconProps, Icon } from './customIcon.types';
import { Activity, ChevronDown, ChevronsDown, ChevronsUp, ChevronUp, TrendingDown, TrendingUp, UsersRound, Waypoints } from 'lucide-react';

const CustomIcon: React.FC<CustomIconProps> = ({ icon }): ReactNode => {

  switch (icon) {
    case Icon.UsersRound:
      return (
        <div className="p-2 bg-slate-400/20 rounded-lg">
          <UsersRound strokeWidth={1} className='w-4 h-4' />
        </div>
      );
    case Icon.Waypoints:
      return (
        <div className="p-2 bg-slate-400/20 rounded-lg">
          <Waypoints strokeWidth={1} className='w-4 h-4' />
        </div>
      );
    case Icon.Activity:
      return (
        <div className="p-2 bg-slate-400/20 rounded-lg">
          <Activity strokeWidth={1} className='w-4 h-4' />
        </div>
      );
    case Icon.ChevronUp:
      return (
        <div className="p-2 bg-slate-400/20 rounded-lg">
          <ChevronUp strokeWidth={2} className='w-4 h-4 text-green-600' />
        </div>
      );
    case Icon.ChevronDown:
      return (
        <div className="p-2 bg-slate-400/20 rounded-lg">
          <ChevronDown strokeWidth={1} className='w-4 h-4' />
        </div>
      );
    case Icon.ChevronsUp:
      return (
        <div className="p-2 bg-slate-400/20 rounded-lg">
          <ChevronsUp strokeWidth={1} className='w-4 h-4' />
        </div>
      );
    case Icon.ChevronsDown:
      return (
        <div className="p-2 bg-slate-400/20 rounded-lg">
          <ChevronsDown strokeWidth={1} className='w-4 h-4' />
        </div>
      );
    case Icon.TrendingUp:
      return (
        <div className="p-2 bg-transparent rounded-lg">
          <TrendingUp strokeWidth={2} className='w-5 h-5 text-white' />
        </div>
      );
    case Icon.TrendingDown:
      return (
        <div className="p-2 bg-transparent rounded-lg">
          <TrendingDown strokeWidth={2} className='w-5 h-5 text-white' />
        </div>
      );


  }
};

export default CustomIcon;