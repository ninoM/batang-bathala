import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPotentialDate(date: Date | undefined | null) {
  return date ? format(date, "MMMM d, yyyy") : null;
}
