import type { Concept } from "../../Concept";
import type { Entity } from "../../entities/Entity";
import type { TreeSpeciesId } from "./TreeSpecies";

export type TREE_TYPE = "tree";
export type Tree = Entity<TREE_TYPE> & {
  species: TreeSpeciesId;
  trunk: number;
  trunkEaten: number;
  leaves: number;
  roots: number;
  rootsEaten: number;
};
export type RefTree = Tree["id"];
export const TREE_ID: TREE_TYPE = "tree";
export const TREE: Concept = {
  id: TREE_ID,
  name: "Arbre",
  description: "Un tronc, des feuilles et des racines.",
};
