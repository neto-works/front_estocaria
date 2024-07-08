"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import React, { ReactNode, useState } from 'react';
import { CustomTooltipsProps } from './CustomTooltips.Types';
import { Info } from "lucide-react";



const CustomTooltips: React.FC<CustomTooltipsProps> = ({ content }): ReactNode => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Info strokeWidth={1} className="h-5 w-5" />
                </TooltipTrigger>
                <TooltipContent>
                    <p>{content}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    );
};

export default CustomTooltips;