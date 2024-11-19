"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, HelpCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { events } from "@/db/schema";
import { createOrUpdateEvent } from "./actions";
import { Switch } from "@/components/ui/switch";

export default function CreateEventForm({
  initialValues,
  onSubmit,
}: {
  initialValues?: Partial<typeof events.$inferSelect>;
  onSubmit?: (
    formData: typeof events.$inferInsert & { id?: number }
  ) => Promise<void>;
}) {
  const [date, setDate] = React.useState<Date>();
  const [name, setName] = React.useState("");
  const [blurb, setBlurb] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [published, setPublished] = React.useState(false);

  React.useEffect(() => {
    if (initialValues) {
      setName(initialValues.name || "");
      setBlurb(initialValues.blurb || "");
      setLocation(initialValues.location || "");
      setDescription(initialValues.description || "");
      setDate(initialValues.date ? new Date(initialValues.date) : undefined);
      setPublished(initialValues.published || false);
    }
  }, [initialValues]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await onSubmit?.({
      ...(initialValues ?? {}),
      name,
      date,
      blurb,
      location,
      description,
      published,
    });
    await createOrUpdateEvent({
      ...(initialValues ?? {}),
      name,
      date,
      blurb,
      location,
      description,
      published,
    });
  };

  return (
    <Card className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <CardHeader className="space-y-1">
        <CardTitle className="text-3xl font-bold text-primary">
          {initialValues ? "Edit Event" : "Create Event"}
        </CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="title" className="text-lg font-medium">
                Event Title
              </Label>
              <Input
                id="title"
                placeholder="Enter event title"
                required
                className="text-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-lg font-medium">
                Location
              </Label>
              <Input
                id="location"
                placeholder="Enter event location"
                required
                className="text-lg"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-lg font-medium">Event Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal text-lg",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2 mt-6">
            <Label htmlFor="blurb" className="text-lg font-medium">
              Blurb
            </Label>
            <Textarea
              id="blurb"
              placeholder="Enter a short description of the event"
              className="text-lg resize-none"
              rows={3}
              value={blurb}
              onChange={(e) => setBlurb(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-medium">Event Description</Label>
            <div className="md:hidden">
              <Tabs defaultValue="write" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="write">Write</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
                <TabsContent value="write">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Link
                        href="https://www.markdownguide.org/basic-syntax/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary flex items-center"
                      >
                        <HelpCircle className="w-4 h-4 mr-1" />
                        Markdown Guide
                      </Link>
                    </div>
                    <Textarea
                      placeholder="Write your event description here... (Supports Markdown)"
                      className="min-h-[300px] text-lg resize-none w-full"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="preview">
                  <div className="not-prose prose-lg max-w-none p-4 min-h-[300px] bg-muted rounded-md">
                    <ReactMarkdown>
                      {description || "Preview will appear here..."}
                    </ReactMarkdown>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div className="hidden md:grid gap-4 md:grid-cols-2">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    Write
                    <Link
                      href="https://www.markdownguide.org/basic-syntax/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary flex items-center"
                    >
                      <HelpCircle className="w-4 h-4 mr-1" />
                      Markdown Guide
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Write your event description here... (Supports Markdown)"
                    className="min-h-[300px] text-lg resize-none"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-lg">Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-lg max-w-none">
                    <ReactMarkdown>
                      {description || "Preview will appear here..."}
                    </ReactMarkdown>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="flex items-center justify-between w-full bg-muted p-4 rounded-lg">
            <Label
              htmlFor="published"
              className="text-lg font-medium cursor-pointer select-none flex items-center space-x-2"
            >
              <span>{published ? "Published" : "Draft"}</span>
              <Switch
                id="published"
                checked={published}
                onCheckedChange={setPublished}
              />
            </Label>
            <span className="text-sm text-muted-foreground">
              {published ? "Visible to public" : "Only visible to you"}
            </span>
          </div>
          <Button type="submit" className="w-full text-lg py-6">
            {published ? "Publish Event" : "Save as Draft"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
