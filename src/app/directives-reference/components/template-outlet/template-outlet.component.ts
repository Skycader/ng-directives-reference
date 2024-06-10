import { Component, ElementRef, TemplateRef } from "@angular/core";

@Component({
  selector: "app-template-outlet",
  templateUrl: "./template-outlet.component.html",
  styleUrl: "./template-outlet.component.scss",
})
export class TemplateOutletComponent {
  public id: number = 1;
  public user = { username: "axl" };
}
