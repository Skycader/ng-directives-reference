import { Component } from "@angular/core";

@Component({
  selector: "app-ng-if",
  templateUrl: "./ng-if.component.html",
  styleUrl: "./ng-if.component.scss",
})
export class NgIfComponent {
  public condition: boolean = true;
}
