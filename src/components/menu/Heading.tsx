import React from "react";
import { Cover } from "@/components/ui/cover";

export function Heading({ heading }: any) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl text-center mb-4">
        <Cover>{heading}</Cover>
      </h2>
    </div>
  );
}
