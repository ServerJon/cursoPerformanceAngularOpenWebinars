import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'curso-performance-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
