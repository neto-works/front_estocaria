"use client";
import React, { ReactNode, useState } from 'react';
import { TitleSeparatorProps } from './titleseparator.types';
//import Styles from "./tilestyle.module.css";

const TitleSeparator: React.FC<TitleSeparatorProps> = ({ title }): ReactNode => {
  return (
    <th className="min-w-30 max-w-30 py-1 text-center font-bold p-4 text-lg  text-blue-950">
      {title}
    </th>
  );

};

export default TitleSeparator;