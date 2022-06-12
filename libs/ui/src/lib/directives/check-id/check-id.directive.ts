import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[cursoPerformanceAngularCheckId]'
})
export class CheckIdDirective {

  @Input() set cursoPerformanceAngularCheckId(id: string) {
    if (id.length == 0)
      this.el.nativeElement.style.backgroundColor = 'grey';
  }

  constructor(private el: ElementRef) { }

}
