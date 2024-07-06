import type { Concept } from "../Concept";

export type Entity<ID extends string = string> = {
  id: ID;
  name?: string;
};

export const ENTITY: Concept = {
  id: "entity",
  name: "Entité",
  description:
    "An instanciated object. Described by its entity specializations.",
};
