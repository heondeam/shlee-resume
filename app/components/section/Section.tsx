"use client";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function Section({ children }: Props) {
  return (
    <div className="h-screen flex flex-col justify-between items-center">
      {children}
    </div>
  );
}
