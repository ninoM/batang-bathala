import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/db";
import { formatPotentialDate } from "@/lib/utils";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default async function RecentEventsSection() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const events = await db.query.events.findMany({
    where: (events, { and, eq, gte }) =>
      and(eq(events.published, true), gte(events.date, today)),
    orderBy: (events, { asc }) => [asc(events.date)],
    limit: 3,
  });

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-800 sm:text-4xl">
          Upcoming Events
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event, index) => (
            <Card key={index} className="flex flex-col overflow-hidden">
              {event.bannerImageUrl && (
                <img
                  src={event.bannerImageUrl}
                  alt={event.name}
                  className="h-40 w-full object-cover"
                />
              )}
              <CardHeader>
                <CardTitle>{event.name}</CardTitle>
                <CardDescription>
                  <Calendar className="mr-1 inline-block h-4 w-4" />
                  {formatPotentialDate(event.createdAt)}
                </CardDescription>
              </CardHeader>
              <CardContent className="min-h-24">
                <p>{event.blurb}</p>
              </CardContent>
              <CardFooter className="mt-auto items-baseline justify-end">
                <Link href={`/event/${event.slug}`} prefetch>
                  <Button className="w-full">More details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
