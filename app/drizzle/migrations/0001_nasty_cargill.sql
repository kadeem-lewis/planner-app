CREATE TABLE IF NOT EXISTS "board" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"user_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "column" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"board_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "tasks" ADD COLUMN "column_id" integer;--> statement-breakpoint
ALTER TABLE "tasks" ADD COLUMN "board_id" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tasks" ADD CONSTRAINT "tasks_column_id_column_id_fk" FOREIGN KEY ("column_id") REFERENCES "column"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tasks" ADD CONSTRAINT "tasks_board_id_board_id_fk" FOREIGN KEY ("board_id") REFERENCES "board"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "column" ADD CONSTRAINT "column_board_id_board_id_fk" FOREIGN KEY ("board_id") REFERENCES "board"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
