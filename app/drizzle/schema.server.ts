import {
  pgTable,
  serial,
  text,
  varchar,
  boolean,
  date,
  timestamp,
} from "drizzle-orm/pg-core";

export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  title: text("title"),
  description: varchar("description", { length: 255 }),
  completed: boolean("completed"),
  progress: text("progress"),
  due_date: date("due_date"),
  user_id: text("user_id"),
  created_at: timestamp("created_at").defaultNow(),
});
