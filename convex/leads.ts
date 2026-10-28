import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getLeads = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");
    const userId = identity.subject;
    return await ctx.db
      .query("leads")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .order("desc")
      .collect();
  },
});

export const createLead = mutation({
  args: {
    name: v.string(),
    phone: v.string(),
    service: v.string(),
    status: v.string(),
    notes: v.string(),
    followUpDate: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");
    const userId = identity.subject;
    const now = Date.now();
    return await ctx.db.insert("leads", {
      userId,
      name: args.name,
      phone: args.phone,
      service: args.service,
      status: args.status,
      notes: args.notes,
      followUpDate: args.followUpDate,
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const updateLead = mutation({
  args: {
    id: v.id("leads"),
    name: v.string(),
    phone: v.string(),
    service: v.string(),
    status: v.string(),
    notes: v.string(),
    followUpDate: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");
    const userId = identity.subject;
    const lead = await ctx.db.get(args.id);
    if (!lead || lead.userId !== userId) throw new Error("Not authorized");
    return await ctx.db.patch(args.id, {
      name: args.name,
      phone: args.phone,
      service: args.service,
      status: args.status,
      notes: args.notes,
      followUpDate: args.followUpDate,
      updatedAt: Date.now(),
    });
  },
});

export const deleteLead = mutation({
  args: {
    id: v.id("leads"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");
    const userId = identity.subject;
    const lead = await ctx.db.get(args.id);
    if (!lead || lead.userId !== userId) throw new Error("Not authorized");
    return await ctx.db.delete(args.id);
  },
});
