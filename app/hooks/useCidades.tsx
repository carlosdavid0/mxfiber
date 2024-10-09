"use client";

import { CidadeContext } from "@/context/CidadeProvider";
import { useContext } from "react";

export function useCidades() {
  const cidades = useContext(CidadeContext);
  try {
    return cidades;
  } catch (error) {
    throw new Error("useCidades must be used within a CidadeProvider");
  }
}
