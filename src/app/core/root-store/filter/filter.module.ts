import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { filterReducer } from "./filter.reducer";
import { FilterEffects } from "./filter.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("filter", filterReducer),
    EffectsModule.forFeature([FilterEffects]),
  ],
})
export class FilterModule {}
