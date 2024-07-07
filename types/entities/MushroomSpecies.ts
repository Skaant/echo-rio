import type { Concept } from "../Concept";
import type { StaticPropagation } from "./_traits/StaticPropagation";

export type MushroomSpecies = Concept & {
  waterRange?: number;
} & StaticPropagation;
