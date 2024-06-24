import { pgTable, uuid, text } from "drizzle-orm/pg-core";


export const testing = pgTable("testing", {
    id: uuid("id").notNull().primaryKey(),
    name: text("name"),
})