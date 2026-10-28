import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  notes: defineTable({
    userId: v.string(),
    title: v.string(),
    content: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_userId", ["userId"]),

  leads: defineTable({
    userId: v.string(),
    name: v.string(),
    phone: v.string(),
    service: v.string(),
    status: v.string(),
    notes: v.string(),
    followUpDate: v.optional(v.number()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_userId", ["userId"]),

  readingProgress: defineTable({
    userId: v.string(),
    chapterId: v.number(),
    completed: v.boolean(),
    lastReadAt: v.number(),
  })
    .index("by_userId", ["userId"])
    .index("by_userId_and_chapterId", ["userId", "chapterId"]),
});
