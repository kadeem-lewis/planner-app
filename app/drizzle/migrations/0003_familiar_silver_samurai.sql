ALTER TABLE "board" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "column" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "events" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "tasks" ALTER COLUMN "created_at" SET NOT NULL;