// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const GroupsSchema = z.object({
  id: z.string().uuid(),
  orgId: z.string().uuid(),
  name: z.string(),
  slug: z.string(),
  role: z.string(),
  roleId: z.string().uuid().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type TGroups = z.infer<typeof GroupsSchema>;
export type TGroupsInsert = Omit<z.input<typeof GroupsSchema>, TImmutableDBKeys>;
export type TGroupsUpdate = Partial<Omit<z.input<typeof GroupsSchema>, TImmutableDBKeys>>;