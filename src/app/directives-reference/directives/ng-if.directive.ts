import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appNgIf]',
})
export class NgIfDirective {
  public count: number = 0;
  constructor(
    private el: ElementRef,
    private r: Renderer2,
  ) {}

  @Input('appNgIf') set if(displayBlock: boolean) {
    if (displayBlock) {
      this.r.setStyle(this.el.nativeElement, 'opacity', '1');
      this.r.setStyle(this.el.nativeElement, 'max-height', '100%');
    } else {
      this.r.setStyle(this.el.nativeElement, 'opacity', '0');
      this.r.setStyle(this.el.nativeElement, 'max-height', '0%');
    }
  }

  ngAfterViewInit() {
    this.r.setStyle(this.el.nativeElement, 'transition-duration', '0.5s');
    this.r.setStyle(this.el.nativeElement, 'max-height', '100%');
  }
}
