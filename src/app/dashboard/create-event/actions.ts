"use server";

import { db } from "@/db";
import { events } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { createInsertSchema } from "drizzle-zod";
import { redirect } from "next/navigation";
import z from "zod";

const insertEventSchema = createInsertSchema(events).omit({
  createdAt: true,
  slug: true,
});
export const createOrUpdateEvent = async (
  event: z.infer<typeof insertEventSchema>
) => {
  const { id, ...parsedEvent } = insertEventSchema
    .transform(({ date, ...rest }) => {
      if (date) {
        const dateOnly = new Date(date);
        dateOnly.setHours(0, 0, 0, 0);
        return { ...rest, date: dateOnly };
      }
      return rest;
    })
    .parse(event);

  if (id) {
    await db.update(events).set(parsedEvent).where(eq(events.id, id));
  } else {
    await db.insert(events).values(parsedEvent);
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
};
