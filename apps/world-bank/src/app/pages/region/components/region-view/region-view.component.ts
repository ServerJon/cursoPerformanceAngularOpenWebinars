import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Country } from '@typescript-common';

@Component({
  selector: 'curso-performance-angular-region-view',
  templateUrl: './region-view.component.html',
  styleUrls: ['./region-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionViewComponent {
  @Input() public countries!: Country[];
  @Output() public goTo = new EventEmitter<string>();

  goToCountry(code: string): void {
    this.goTo.emit(code);
  }
}
