import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContainerRoutingModule } from "./container-routing.module";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";

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
  imports: [
    CommonModule,
    ContainerRoutingModule,
    MatTableModule,
    MatPaginatorModule,
  ],
})
export class ContainerModule {}
