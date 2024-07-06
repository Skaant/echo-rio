export type PlantRegeneration =
  | BaseRegeneration
  | ByLeavesRegeneration
  | NitrogenInputByLeavesRegeneration
  | ByRootsRegeneration
  | NitrogenInputByRootsRegeneration;
export type BaseRegeneration = {
  id: "base";
  value: number;
};
export type ByLeavesRegeneration = {
  id: "by-leaves";
  value: number;
};
export type NitrogenInputByLeavesRegeneration = {
  id: "nitrogen-input-by-leaves";
  value: number;
  nitrogenValue: number;
};
export type ByRootsRegeneration = {
  id: "by-roots";
  value: number;
};
export type NitrogenInputByRootsRegeneration = {
  id: "nitrogen-input-by-roots";
  value: number;
  nitrogenValue: number;
};
