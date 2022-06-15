/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'curso-performance-angular-main-info-template',
  templateUrl: './main-info-template.component.html',
  styleUrls: ['./main-info-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainInfoTemplateComponent {
  @Input() header!: TemplateRef<any>;
  @Input() main!: TemplateRef<any>;

}
