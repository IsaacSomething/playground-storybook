import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'storybook-button',
  imports: [MatButtonModule, MatIconModule],
  standalone: true,
  template: `
    <button mat-icon-button [color]="color" [disabled]="disabled">
      <mat-icon>{{ icon }}</mat-icon>
    </button>
  `,
})
export default class ButtonIcon {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
  @Input() icon = 'person';
}