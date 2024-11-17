import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity({ startWith: 10 }),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),

  createdAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
});

export const inqueries = pgTable("inqueries", {
  id: integer().primaryKey().generatedAlwaysAsIdentity({ startWith: 10 }),
  message: varchar({ length: 255 }),
  eventId: integer("event_id").references(() => events.id, {
    onDelete: "set null",
    onUpdate: "cascade",
  }),

  createdAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
});

export const events = pgTable("events", {
  id: integer().primaryKey().generatedAlwaysAsIdentity({ startWith: 10 }),
  name: varchar({ length: 255 }).notNull(),
  blurb: varchar({ length: 255 }).notNull(),
  slug: text("slug")
    .notNull()
    .generatedAlwaysAs(
      "lower(trim(regexp_replace(regexp_replace(name, '[^a-zA-Z0-9\\s]', '', 'g'), '\\s+', '-', 'g')))"
    )
    .unique(),
  date: timestamp({ withTimezone: true }).defaultNow(),
  location: varchar({ length: 255 }),
  description: text(),
  published: boolean().default(false),

  createdAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
});
