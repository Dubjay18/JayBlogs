import Navbar from "@/components/Navbar";
import { Rubik } from "@next/font/google";
import React from "react";
interface Props {
  children: JSX.Element[] | JSX.Element;
}
const rubik = Rubik({ subsets: ["latin"] });

function DefaultLayout({ children }: Props) {
  return (
    <div className={rubik.className}>
      <Navbar />
      {children}
    </div>
  );
}

export default DefaultLayout;
