import { db } from "@/db";
import { eq } from "drizzle-orm";
import EventNotFound from "./not-found";
import { createClient } from "@/lib/supabase/server";
import { CalendarIcon, EditIcon, ShieldIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const event = await db.query.events.findFirst({
    where: (event) => eq(event.slug, slug),
  });

  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  const user = data.user;

  if (!event || (event && !event.published && (!user || error))) {
    return <EventNotFound />;
  }

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        {user && (
          <div className="bg-muted p-4 rounded-lg mb-6">
            <div className="flex items-center space-x-2 mb-2">
              <ShieldIcon className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Admin Controls</h2>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant={event.published ? "default" : "secondary"}>
                {event.published ? "Published" : "Draft"}
              </Badge>
              <Link href={`/dashboard/create-event?id=${event.id}`} passHref>
                <Button variant="outline" size="sm">
                  <EditIcon className="w-4 h-4 mr-2" />
                  Edit Event
                </Button>
              </Link>
            </div>
          </div>
        )}

        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2">{event.name}</h1>
          {event.date && (
            <div className="flex items-center text-muted-foreground">
              <CalendarIcon className="w-5 h-5 mr-2" />
              <time dateTime={event.date.toDateString()}>
                {new Date(event.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          )}
        </div>

        <div className="mb-8">
          {/* <Image
            src={imageUrl}
            alt={title}
            width={800}
            height={400}
            className="rounded-lg object-cover w-full"
          /> */}
        </div>

        <div className="prose prose-sm max-w-none mb-8">
          <ReactMarkdown>{event.description}</ReactMarkdown>
        </div>

        <Separator className="my-8" />

        <div className="bg-card text-card-foreground p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Register for this event
          </h2>
          <p className="mb-4">Spaces are limited. Reserve your spot now!</p>
          <Button size="lg">Register Now</Button>
        </div>
      </article>
    </main>
  );
}
