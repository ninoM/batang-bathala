"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { deleteEvent } from "./actions";

export default function DeleteEventButton({ id }: { id: number }) {
  const handleClick = async () => {
    await deleteEvent(id);
  };
  return (
    <Button onClick={handleClick} variant="outline" size="sm">
      <Trash2 className="h-4 w-4 mr-2" />
      Delete
    </Button>
  );
}
