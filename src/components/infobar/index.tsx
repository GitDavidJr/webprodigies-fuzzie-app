import { Book, Headphones, Search, User } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Tooltip } from "@radix-ui/react-tooltip";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { UserButton } from "@clerk/nextjs";

type Props = {};

const InfoBar = (props: Props) => {
  return (
    <div className="flex flex-row items-center px-4 py-4 w-full dark:bg-black">
      {/* Container central com flex-grow para manter os elementos centralizados */}
      <div className="flex flex-row justify-center gap-2 items-center flex-1">
        <span className="flex items-center bg-muted px-4 rounded-full">
          <Search />
          <Input
            className="border-none !bg-transparent !bg-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent"
            placeholder="Quick search"
          />
        </span>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <Headphones />
            </TooltipTrigger>
            <TooltipContent>
              <p>Contact Support</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <Book />
            </TooltipTrigger>
            <TooltipContent>
              <p>Guide</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* UserButton posicionado no final */}
      <UserButton />
    </div>
  );
};

export default InfoBar;
