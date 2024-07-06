import type { StaticPropagation } from "./_traits/StaticPropagation";
import type { Entity } from "./Entity";

export type MushroomSpecies = Entity &
  StaticPropagation & {
    waterRange?: number;
  };
