"use client";

import {
  QueryClient,
  QueryClientProvider as RootQueryClientProvider,
} from "@tanstack/react-query";

export const queryClient = new QueryClient();
export default function QueryClientProvider({
  children,
}: React.PropsWithChildren<object>) {
  return (
    <RootQueryClientProvider client={queryClient}>
      {children}
    </RootQueryClientProvider>
  );
}
