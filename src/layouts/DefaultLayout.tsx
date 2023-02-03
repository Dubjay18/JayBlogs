import Navbar from "@/components/Navbar";
import React from "react";
interface Props {
  children: JSX.Element[] | JSX.Element;
}

function DefaultLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default DefaultLayout;
