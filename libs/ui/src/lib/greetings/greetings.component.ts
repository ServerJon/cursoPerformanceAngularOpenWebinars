import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'curso-performance-angular-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GreetingsComponent {

  public saludar(name: string): void {
    alert(`Saludos ${name}, es un placer!`);
  }
}
