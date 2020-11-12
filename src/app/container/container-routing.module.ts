import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlantlistComponent } from "./plantlist/plantlist.component";
import { AddplantComponent } from "./addplant/addplant.component";
import { FilterplantsComponent } from "./filterplants/filterplants.component";
import { ContainerComponent } from "./container.component";

const routes: Routes = [
  {
    path: "",
    component: ContainerComponent,
    children: [
      {
        path: "plants",
        component: PlantlistComponent,
      },
      {
        path: "addplants",
        component: AddplantComponent,
      },
      {
        path: "filter",
        component: FilterplantsComponent,
      },
      { path: "", redirectTo: "plants", pathMatch: "full" },
      { path: "**", redirectTo: "plants", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContainerRoutingModule {}
