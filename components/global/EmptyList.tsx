import { cn } from "@/lib/utils";
import React from "react";

const EmptyList = ({
  heading = "No items ~Found",
  className,
}: {
  heading?: string;
  className?: string;
}) => {
  return <div className={cn("text-xl", className)}>{heading}</div>;
};

export default EmptyList;
