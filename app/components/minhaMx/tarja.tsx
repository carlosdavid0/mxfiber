"use client";
import { X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function Tarja() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-blue-600 text-primary-foreground px-4 py-3 flex items-center justify-between lg:hidden">
      <div className="flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary-foreground"
        >
          <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
          <path d="M10 2c1 .5 2 2 2 5" />
        </svg>
        <span className="text-sm font-medium">Baixe o app Minha MX</span>
      </div>
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          size="sm"
          className="text-primary-foreground bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary"
        >
          App Store
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-primary-foreground bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary"
        >
          Google Play
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(false)}
          className="text-primary-foreground hover:bg-primary-foreground hover:text-primary"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
    </div>
  );
}
