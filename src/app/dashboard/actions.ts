"use server";

import { db } from "@/db";
import { events } from "@/db/schema";
import { revalidatePath } from "next/cache";

export const createEvent = async () => {
  await db.insert(events).values({
    name: "My Events",
    blurb: "A cool event",
    location: "Somewhere",
  });

  revalidatePath("/dashboard");
};
