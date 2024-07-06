import type { Concept } from "../../Concept";
import type { PlantProduction } from "../PlantProduction";
import type { PlantRegeneration } from "../PlantRegeneration";

export type HerbSpecies = Concept & {
  maxLeaves: number;
  /** If unrelated to `maxLeaves` */
  maxRoots?: number;
  /** If its `maxLeaves` +/- diff */
  maxRootsDiff?: number;
  leaves: {
    productions?: PlantProduction[];
    regeneration?: PlantRegeneration[];
  };
  roots: {
    productions?: PlantProduction[];
    regeneration?: PlantRegeneration[];
  };
};
