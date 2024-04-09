CREATE TABLE IF NOT EXISTS "events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"start_date" timestamp,
	"end_date" timestamp,
	"created_at" timestamp DEFAULT now(),
	"user_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tasks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"description" varchar(255),
	"completed" boolean DEFAULT false NOT NULL,
	"progress" text,
	"due_date" date,
	"user_id" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
