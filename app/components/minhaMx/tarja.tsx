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
        <span className="text-lg font-medium">Baixe o app Minha MX</span>
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
