import { Component } from "@angular/core";

@Component({
  selector: "app-container",
  template: `<div class="content"><router-outlet></router-outlet></div>`,
  styles: [".content {max-width: 90%; margin: 50px auto; }"],
})
export class ContainerComponent {}
