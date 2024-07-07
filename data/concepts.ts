import { ANIMAL } from "../types/animals/Animal";
import { CONCEPT, type Concept } from "../types/Concept";
import { ENTITY } from "../types/entities/Entity";

export const CONCEPTS: {
  [conceptId: Concept["id"]]: Concept;
} = {
  [CONCEPT.id]: CONCEPT,
  [ENTITY.id]: ENTITY,
  [ANIMAL.id]: ANIMAL,
};
