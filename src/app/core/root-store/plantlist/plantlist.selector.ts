import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PlantsState } from "./plantlist.reducer";

const plants = createFeatureSelector<PlantsState>("plants");

export const getCurrencyRates = createSelector(
  plants,
  (state) => state.payload
);
