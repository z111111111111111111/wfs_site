import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getNotes = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");
    const userId = identity.subject;
    return await ctx.db
      .query("notes")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .order("desc")
      .collect();
  },
});

export const createNote = mutation({
  args: {
    title: v.string(),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");
    const userId = identity.subject;
    const now = Date.now();
    return await ctx.db.insert("notes", {
      userId,
      title: args.title,
      content: args.content,
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const updateNote = mutation({
  args: {
    id: v.id("notes"),
    title: v.string(),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");
    const userId = identity.subject;
    const note = await ctx.db.get(args.id);
    if (!note || note.userId !== userId) throw new Error("Not authorized");
    return await ctx.db.patch(args.id, {
      title: args.title,
      content: args.content,
      updatedAt: Date.now(),
    });
  },
});

export const deleteNote = mutation({
  args: {
    id: v.id("notes"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");
    const userId = identity.subject;
    const note = await ctx.db.get(args.id);
    if (!note || note.userId !== userId) throw new Error("Not authorized");
    return await ctx.db.delete(args.id);
  },
});
