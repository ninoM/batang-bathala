import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { parseAsInteger } from "nuqs/server";
import CreateEventForm from "./create-event-form";
import { events } from "@/db/schema";

export default async function CreateEventPage(props: {
  searchParams: Promise<{ id?: string }>;
}) {
  const searchParams = await props.searchParams;
  const id = parseAsInteger.parseServerSide(searchParams.id);
  let event: typeof events.$inferSelect | undefined;

  if (id && typeof id === "number") {
    event = await db.query.events.findFirst({
      where: (event) => eq(event.id, id),
    });
  }

  return (
    <div className="container mx-auto py-10">
      <div className="w-full max-w-5xl mx-auto">
        <Link href="/dashboard">
          <Button variant="outline">Back</Button>
        </Link>
      </div>
      <CreateEventForm initialValues={event} />
    </div>
  );
}
