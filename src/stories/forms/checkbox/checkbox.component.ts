import { Component, Input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'storybook-Checkbox',
  standalone: true,
  imports: [MatCheckboxModule],
  template: `
    <div class="padding">
      <mat-checkbox
        [color]="color"
        [labelPosition]="labelPosition"
        [disabled]="disabled"
        [indeterminate]="indeterminate"
      >
        {{ label }}
      </mat-checkbox>
    </div>
  `,
})
export default class Checkbox {
  @Input() color!: 'primary' | 'accent' | 'warn';
  @Input() label!: string;
  @Input() labelPosition!: 'after' | 'before';
  @Input() disabled: boolean = false;
  @Input() indeterminate!: boolean;
}
