import type { Concept } from "../../Concept";

export type NITROGEN_TYPE = "nitrogen";
export const NITROGEN_ID: NITROGEN_TYPE = "nitrogen";
export const NITROGEN: Concept<NITROGEN_TYPE> = {
  id: NITROGEN_ID,
  name: "Azote",
  description: "Fixé dans le sol, propulse la croissance.",
};
