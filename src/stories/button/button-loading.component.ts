import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'storybook-button-loading',
  template: `
    <button mat-flat-button [color]="color" [disabled]="disabled">
      <mat-spinner></mat-spinner> {{ label }}
    </button>
  `,
  imports: [MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  standalone: true,
})
export default class ButtonLoading {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
  @Input() label = 'loading';
}
