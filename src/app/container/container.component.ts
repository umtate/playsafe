import { Component } from "@angular/core";

@Component({
  selector: "app-container",
  template: `<router-outlet></router-outlet>`,
  styles: [
    ".container{ margin: 20px; display: flex; justify-content: center;  align-items: center;}",
  ],
})
export class ContainerComponent {
  title = "convertor";
}
