import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgLoop][appNgLoopOf]',
})
export class NgForDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}

  @Input('appNgLoopOf')
  set myForOf(collection: any) {
    this.viewContainer.clear();
    collection.forEach((item: any, index: any) => {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: item,
        index,
      });
    });
  }
}
