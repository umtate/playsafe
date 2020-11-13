import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatDialogModule } from "@angular/material/dialog";

import { NavComponent } from "./nav/nav.component";

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, RouterModule, MatDialogModule],
  exports: [NavComponent],
})
export class UiModule {}
