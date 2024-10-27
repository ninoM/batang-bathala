"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export const LoginButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} className="w-full mt-4" type="submit">
      Sign In
    </Button>
  );
};
