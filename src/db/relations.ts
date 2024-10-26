import { relations } from "drizzle-orm";
import { events, inqueries } from "./schema";

export const inquiriesRelations = relations(inqueries, ({ one }) => ({
  event: one(events, {
    fields: [inqueries.eventId],
    references: [events.id],
  }),
}));

export const eventsRelations = relations(events, ({ many }) => ({
  inquiries: many(inqueries),
}));
