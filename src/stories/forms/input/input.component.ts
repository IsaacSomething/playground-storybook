import { Component, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'storybook-input',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, BrowserAnimationsModule],
  template: `
    <div class="padding">
      <mat-form-field [appearance]="appearance" [color]="color">
        <mat-label>{{ label }}</mat-label>

        <input [disabled]="disabled" matInput [placeholder]="placeholder" />
      </mat-form-field>
    </div>
  `,
})
export default class InputFormField {
  @Input() color!: 'primary' | 'accent' | 'warn';
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() disabled!: boolean;
  @Input() appearance!: 'legacy' | 'standard' | 'fill' | 'outline';
}
