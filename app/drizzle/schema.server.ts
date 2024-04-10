import { relations } from "drizzle-orm";
import {
  pgTable,
  serial,
  text,
  varchar,
  boolean,
  date,
  timestamp,
  uuid,
  integer,
} from "drizzle-orm/pg-core";

export const tasks = pgTable("tasks", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: varchar("description", { length: 255 }),
  completed: boolean("completed").notNull().default(false),
  progress: text("progress"),
  due_date: date("due_date"),
  user_id: text("user_id").notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  column_id: integer("column_id").references(() => column.id),
  board_id: integer("board_id").references(() => board.id),
  order: integer("order"),
});

export const events = pgTable("events", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  start_date: timestamp("start_date"),
  end_date: timestamp("end_date"),
  created_at: timestamp("created_at").notNull().defaultNow(),
  user_id: text("user_id").notNull(),
});

export const board = pgTable("board", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  user_id: text("user_id").notNull(),
});

export const column = pgTable("column", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  board_id: integer("board_id")
    .notNull()
    .references(() => board.id),
});

export const tasksRelations = relations(tasks, ({ one }) => ({
  board: one(board, {
    fields: [tasks.board_id],
    references: [board.id],
    relationName: "board",
  }),
  column: one(column, {
    fields: [tasks.column_id],
    references: [column.id],
    relationName: "column",
  }),
}));

export const columnRelations = relations(column, ({ one, many }) => ({
  board: one(board, {
    fields: [column.board_id],
    references: [board.id],
    relationName: "board",
  }),
  tasks: many(tasks),
}));

export const boardRelations = relations(board, ({ many }) => ({
  columns: many(column),
  tasks: many(tasks),
}));
