export type Concept<ID extends string = string> = {
  id: ID;
  name: string;
  description?: string;
};
export const CONCEPT: Concept = {
  id: "concept",
  name: "Concept",
  description: "A sum of patterns about mechanics and entities' patterns.",
};
