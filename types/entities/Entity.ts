import type { Concept } from "../Concept";

export type Entity = {
  id: string;
  name?: string;
};
export const ENTITY: Concept = {
  id: "entity",
  name: "Entité",
  description:
    "An instanciated object. Described by its entity specializations.",
};
