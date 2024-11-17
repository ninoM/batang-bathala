"use server";

import { db } from "@/db";
import { events } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { createInsertSchema } from "drizzle-zod";
import { redirect } from "next/navigation";
import z from "zod"

const insertEventSchema = createInsertSchema(events).omit({ createdAt: true, slug: true });
export const createOrUpdateEvent = async (
  event: z.infer<typeof insertEventSchema>
) => {
  const {id, ...parsedEvent} = insertEventSchema.parse(event);

  if (id) {
    await db.update(events).set(parsedEvent).where(eq(events.id, id));
  } else {
    await db.insert(events).values(parsedEvent);
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
};
