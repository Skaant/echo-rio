import type { Concept } from "../../Concept";
import type { StaticPropagation } from "../../entities/_traits/StaticPropagation";
import type { PlantProduction } from "../PlantProduction";
import type { PlantRegeneration } from "../PlantRegeneration";

export type TreeSpecies = Concept & {
  waterRange?: number;
  maxTrunk: number;
  /** If unrelated to `maxTrunk` */
  maxLeaves?: number;
  /** If its `maxTrunk` +/- diff */
  maxLeavesDiff?: number;
  /** If unrelated to `maxTrunk` */
  maxRoots?: number;
  /** If its `maxTrunk` +/- diff */
  maxRootsDiff?: number;
  leaves: {
    productions?: PlantProduction[];
    regeneration?: PlantRegeneration[];
  };
  trunk: {
    productions?: PlantProduction[];
    regeneration?: PlantRegeneration[];
  };
  roots: {
    productions?: PlantProduction[];
    regeneration?: PlantRegeneration[];
  };
} & StaticPropagation;
export type TreeSpeciesId = TreeSpecies["id"];
