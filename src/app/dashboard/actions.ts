"use server";

import { db } from "@/db";
import { events } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const deleteEvent = async (id: number) => {
  await db.delete(events).where(eq(events.id, id));
  revalidatePath("/dashboard");
};
