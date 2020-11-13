import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FilterState } from "./filter.reducer";

const filter = createFeatureSelector<FilterState>("filter");

export const getFilterList = createSelector(filter, (state) => state.payload);
