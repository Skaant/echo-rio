import type { AnimalRegimeInput, AnimalRegimes } from "./AnimalRegimes";

export type ANIMAL_TAG =
  | ANIMAL_FAMILY
  | ANIMAL_SIZE
  | ANIMAL_SPACE
  | ANIMAL_REGIME;
export type ANIMAL_FAMILY =
  | "mammal"
  | "insect"
  | "bird"
  | "reptile"
  | "amphibian"
  | "mollusc"
  | "worm";
export type ANIMAL_SIZE = "small" | "medium-small" | "medium" | "large";
export type ANIMAL_SPACE =
  | "terrestrial"
  | "soft-water"
  | "salted-water"
  | "subterran"
  | "aerial";
export type ANIMAL_REGIME = AnimalRegimeInput["id"];
