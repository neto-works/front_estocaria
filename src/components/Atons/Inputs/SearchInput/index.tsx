"use client";
import { ReactNode, useState } from 'react';
import Styles from "./search.module.css";

const SearchInput: React.FC = (): ReactNode => {
  const [search, setSearch] = useState<string>(" ");

  return (
    <div className="flex justify-center items-center">
      <div className="relative rounded-full sm:w-4/5 w-full mx-auto">
        <input type="text" className="w-full pl-10 pr-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-olive focus:border-transparent" placeholder="Buscar..." />
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <i className="bi bi-search text-gray-400"></i>
        </span>
      </div>
    </div>
  );
};

export default SearchInput;