"use client"
import { Button } from "@/components/ui/button";
import { deleteEvent } from "./actions";
import { Trash2 } from "lucide-react";

export default function DeleteEventIconButton({ id }: { id: number }) {
  const handleClick = async () => {
    await deleteEvent(id);
  };

  return (
    <Button onClick={handleClick} variant="outline" size="sm">
      <Trash2 className="h-4 w-4" />
      <span className="sr-only">Delete</span>
    </Button>
  );
}
