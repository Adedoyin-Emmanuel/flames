"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

const HowItWorks = () => {
  const pathname = usePathname();

  return (
    <div>
      <h1>HowItWorks works!</h1>
      <p>Current pathname: {pathname}</p>
    </div>
  );
};

export default HowItWorks;
