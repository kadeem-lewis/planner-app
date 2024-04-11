import { eq } from "drizzle-orm";
import { db } from "~/drizzle/config.server";
import { board } from "~/drizzle/schema.server";

export const createBoard = async (name: string, userId: string) => {
  return db.insert(board).values({
    name: String(name),
    user_id: String(userId),
  });
};

export const deleteBoard = async (boardId: number) => {
  return db.delete(board).where(eq(board.id, boardId));
};
