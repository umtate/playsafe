import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContainerRoutingModule } from "./container-routing.module";

import { PlantlistComponent } from "./plantlist/plantlist.component";
import { AddplantComponent } from "./addplant/addplant.component";
import { FilterplantsComponent } from "./filterplants/filterplants.component";
import { ContainerComponent } from "./container.component";

@NgModule({
  declarations: [
    PlantlistComponent,
    AddplantComponent,
    FilterplantsComponent,
    ContainerComponent,
  ],
  imports: [CommonModule, ContainerRoutingModule],
})
export class ContainerModule {}
