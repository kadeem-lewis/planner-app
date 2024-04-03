CREATE TABLE IF NOT EXISTS "tasks" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"description" varchar(255),
	"completed" boolean,
	"progress" text,
	"due_date" date,
	"user_id" text,
	"created_at" timestamp DEFAULT now()
);
