import {
  pgTable,
  text,
  varchar,
  boolean,
  date,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const tasks = pgTable("tasks", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: varchar("description", { length: 255 }),
  completed: boolean("completed").notNull().default(false),
  progress: text("progress"),
  due_date: date("due_date"),
  user_id: text("user_id").notNull(),
  created_at: timestamp("created_at").defaultNow(),
});

export const events = pgTable("events", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  start_date: timestamp("start_date"),
  end_date: timestamp("end_date"),
  created_at: timestamp("created_at").defaultNow(),
  user_id: text("user_id").notNull(),
});
