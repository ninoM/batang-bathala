import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { events } from "@/db/schema";
import { eq } from "drizzle-orm";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { parseAsInteger } from "nuqs/server";
import CreateEventForm from "./create-event-form";

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
      <div className="w-full max-w-7xl mx-auto">
        <Link href="/dashboard">
          <Button className="mb-2" variant="ghost">
            <ArrowLeftIcon />
            <span>Back</span>
          </Button>
        </Link>
      </div>
      <CreateEventForm initialValues={event} />
    </div>
  );
}
