import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

@Directive({
  selector: "[appNgIf]",
})
export class NgIfDirective {
  public count: number = 0;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private el: ElementRef,
    private r: Renderer2,
  ) { }

  @Input("appNgIf") set if(displayBlock: boolean) {
    console.log(this.viewContainer.element.nativeElement);
    if (displayBlock) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
