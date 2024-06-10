import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TemplateOutletComponent } from "./components/template-outlet/template-outlet.component";
import { RootLayoutComponent } from "./layouts/root-layout/root-layout.component";
import { RouterModule } from "@angular/router";
import { MenuComponent } from "./components/menu/menu.component";
import { MaterialModule } from "../material/material.module";
import { FormsModule } from "@angular/forms";
import { NgContentComponent } from "./components/ng-content/ng-content.component";
import { NgContainerComponent } from "./components/ng-container/ng-container.component";
import { NgTemplateComponent } from "./components/ng-template/ng-template.component";
import { NgWhileComponent } from './components/ng-while/ng-while.component';
import { NgWhileDirective } from './directives/ng-while.directive';
import { NgIfDirective } from './directives/ng-if.directive';
import { NgIfComponent } from './components/ng-if/ng-if.component';

@NgModule({
  declarations: [
    TemplateOutletComponent,
    RootLayoutComponent,
    MenuComponent,
    NgContentComponent,
    NgContainerComponent,
    NgTemplateComponent,
    NgWhileComponent,
    NgWhileDirective,
    NgIfDirective,
    NgIfComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: RootLayoutComponent,
        children: [
          {
            path: "template-outlet",
            component: TemplateOutletComponent,
          },
        ],
      },
    ]),
  ],
})
export class DirectivesReferenceModule { }
