import { db } from "@/db";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusCircle } from "lucide-react";

export default async function Page() {
  const events = await db.query.events.findMany();
  console.log(events);
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-primary">Upcoming Events</h1>
        <Link href="/dashboard/create-event" passHref>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Event
          </Button>
        </Link>
      </div>

      {/* Table view for larger screens */}
      <div className="hidden lg:block overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/4">Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="w-1/3">Blurb</TableHead>
              <TableHead>Created Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id}>
                <TableCell className="font-medium">
                  <div className="truncate max-w-xs" title={event.name}>
                    {event.name}
                  </div>
                </TableCell>
                <TableCell>
                  {event?.date && new Date(event.date).toLocaleString()}
                </TableCell>
                <TableCell>{event.location}</TableCell>
                <TableCell>
                  <div className="truncate max-w-md" title={event.blurb}>
                    {event.blurb}
                  </div>
                </TableCell>
                <TableCell>
                  {new Date(event.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Card view for smaller screens */}
      <div className="grid grid-cols-1 gap-4 lg:hidden">
        {events.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle className="text-lg leading-tight">
                {event.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                <strong>Date:</strong> {event?.date && new Date(event.date).toLocaleString()}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <div>
                <strong>Blurb:</strong>
                <p className="mt-1 text-sm text-muted-foreground">
                  {event.blurb}
                </p>
              </div>
              <p>
                <strong>Created:</strong>{" "}
                {new Date(event.createdAt).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
