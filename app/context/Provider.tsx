"use client";
import { createContext, Suspense } from "react";

import { ApolloClient, ApolloProvider } from "@apollo/client";
export const GlobalProvider = createContext({});

type ProviderProps = {
  children: React.ReactNode;
};

import { InMemoryCache } from "@apollo/client";
import CidadeProvider from "./CidadeProvider";

const client = new ApolloClient({
  uri: "https://cms.mxfibra.com/graphql",
  cache: new InMemoryCache(),
  ssrMode: false,
});

export default function Provider({ children }: ProviderProps) {
  return (
    <Suspense fallback={<div className="w-full h-screen bg-blue-600"></div>}>
      <ApolloProvider client={client}>
        <GlobalProvider.Provider value={{}}>
          <CidadeProvider>{children}</CidadeProvider>
        </GlobalProvider.Provider>
      </ApolloProvider>
    </Suspense>
  );
}
