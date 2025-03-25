import InfoBar from "@/src/components/infobar";
import Sidebar from "@/src/components/sidebar";
import { div } from "framer-motion/client";

import React, { Children } from "react";

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div className="flex overflow-hidden h-screen bg-dark" >
      <Sidebar/>  
      <div className="w-full">
        <InfoBar />
        <div className="rounded-tl-2xl border-[2px] h-full ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
