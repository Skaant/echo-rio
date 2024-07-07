import type { FALLEN_LEAVE_TYPE } from "../cells/_ressources/FallenLeave";
import type { MULCH_TYPE } from "../cells/_ressources/Mulch";
import type { NITROGEN_TYPE } from "../cells/_ressources/Nitrogen";
import type { FRUIT_TYPE } from "./_ressources/Fruit";

export type PlantProduction =
  | BasePlantProduction
  | NitrogenInputPlantProduction;
export type GenericPlantProduction = {
  value: number;
  type: PlantProductionType;
  /** If not matched */
  displease?: number;
};
export type BasePlantProduction = GenericPlantProduction & {
  id: "base";
};
export type NitrogenInputPlantProduction = GenericPlantProduction & {
  id: "nitrogen-input";
  nitrogenValue: number;
};
export type PlantProductionType =
  | MULCH_TYPE
  | NITROGEN_TYPE
  | FRUIT_TYPE
  | FALLEN_LEAVE_TYPE;
