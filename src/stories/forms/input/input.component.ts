import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'storybook-input',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule],
  template: `
    <div class="padding">
      <mat-form-field [appearance]="appearance" [color]="color">
        <mat-label>{{ label }}</mat-label>

        <input matInput placeholder="Placeholder" [value]="label" />
      </mat-form-field>
    </div>
  `,
})
export default class InputFormField {
  @Input() color!: 'primary' | 'accent' | 'warn';
  @Input() label!: string;
  @Input() disabled: boolean = false;
  @Input() appearance!: 'legacy' | 'standard' | 'fill' | 'outline';
}
