import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Region } from '@typescript-common';

@Component({
  selector: 'curso-performance-angular-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  @Input() public regions!: Region[];
  @Output() public gone = new EventEmitter<string>();

  goToRegion(code: string): void {
    this.gone.emit(code);
  }
}
