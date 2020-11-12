import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContainerRoutingModule } from "./container-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";

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
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class ContainerModule {}
