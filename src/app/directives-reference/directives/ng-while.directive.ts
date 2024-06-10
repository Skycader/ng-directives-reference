import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appNgWhile]",
})
export class NgWhileDirective {
  public count: number = 0;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) { }

  @Input("appNgWhile") set while(iterator: number) {
    while (this.count < iterator) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.count++;
    }
  }
}
