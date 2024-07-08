"use client";
import React, { ReactNode, useState } from 'react';
import Styles from "./navlink.module.css";

interface ICardSpanProps { prop: ReactNode[]; }

const CardSpan: React.FC<ICardSpanProps> = ({ prop }): ReactNode => {
    const [nome, setNome] = useState<string>(" ");

    return (
        <div className="rounded-lg w-[600px] h-32  bg-[#0037b6] text-[#ffffff]">
            <div className="flex flex-row w-full gap-5 justify-center items-center px-5 h-full">
                <div className="my-auto text-2xl">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-info"
                    >
                        <circle cx={12} cy={12} r={10} />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                    </svg>
                </div>
                <div>
                    <div className="font-bold text-2xl">Check your Inbox!</div>
                    <div className=" text-lg">
                        You have one new unread message in your inbox.
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CardSpan;