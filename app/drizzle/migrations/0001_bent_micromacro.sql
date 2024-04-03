CREATE TABLE IF NOT EXISTS "events" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"start_date" date,
	"end_date" date,
	"created_at" timestamp DEFAULT now()
);
