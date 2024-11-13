"use client";

import { Button } from "@/components/ui/button";
import { createEvent } from "./actions";

export const CreateEventButton = () => {
  return (
    <Button
      onClick={async () => {
        await createEvent();
      }}
    >
      Create dummy event
    </Button>
  );
};
