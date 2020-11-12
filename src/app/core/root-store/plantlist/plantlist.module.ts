import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { plantsReducer } from "./plantlist.reducer";
import { PlantsEffects } from "./plantlist.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("plants", plantsReducer),
    EffectsModule.forFeature([PlantsEffects]),
  ],
})
export class PlantlistModule {}
