"use client";
import React from "react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

export function HoverBorderGradientDemo() {
  return (
    <div className="m-2 flex justify-center text-center">
      
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black  text-white dark:text-white flex items-center space-x-2"
      >
        <span>Get started</span>
      </HoverBorderGradient>
      
    </div>
  );
}


