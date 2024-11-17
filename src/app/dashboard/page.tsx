import { Badge } from "@/components/ui/badge";
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
import { db } from "@/db";
import { formatPotentialDate } from "@/lib/utils";
import { Edit, Eye, PlusCircle, Trash2 } from "lucide-react";
import Link from "next/link";
import DeleteEventIconButton from "./delete-event-icon-button";

export default async function Page() {
  const events = await db.query.events.findMany();
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-primary">Events</h1>
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
              <TableHead className="w-1/5">Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="w-1/4">Blurb</TableHead>
              <TableHead>Created Date</TableHead>
              <TableHead>Published</TableHead>
              <TableHead className="text-right">Actions</TableHead>
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
                <TableCell>{formatPotentialDate(event.date)}</TableCell>
                <TableCell>{event.location}</TableCell>
                <TableCell>
                  <div className="truncate max-w-md" title={event.blurb}>
                    {event.blurb}
                  </div>
                </TableCell>
                <TableCell>{formatPotentialDate(event.createdAt)}</TableCell>
                <TableCell>
                  <Badge variant={event.published ? "default" : "secondary"}>
                    {event.published ? "Published" : "Draft"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Link href={`/event/${event.slug}`}>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View</span>
                      </Button>
                    </Link>
                    <Link href={`/dashboard/create-event?id=${event.id}`}>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </Link>
                    <DeleteEventIconButton id={event.id} />
                  </div>
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
              <div className="flex justify-between items-center">
                <p>
                  <strong>Date:</strong> {formatPotentialDate(event.date)}
                </p>
                <Badge variant={event.published ? "default" : "secondary"}>
                  {event.published ? "Published" : "Draft"}
                </Badge>
              </div>
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
                <strong>Created:</strong> {formatPotentialDate(event.createdAt)}
              </p>
              <div className="flex justify-end gap-2 mt-4">
                <Link href={`/event/${event.slug}`}>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </Link>
                <Link href={`/dashboard/create-event?id=${event.id}`}>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </Link>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
