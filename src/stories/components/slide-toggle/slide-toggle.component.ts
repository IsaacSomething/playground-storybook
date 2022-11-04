import { Component, Input } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'storybook-slide-toggle',
  standalone: true,
  imports: [MatSlideToggleModule],
  template: `
    <div class="padding">
      <mat-slide-toggle
        [color]="color"
        [disabled]="disabled"
        [class.contained]="contained"
      >
      </mat-slide-toggle>
    </div>
  `,
})
export default class SlideToggle {
  @Input() color!: 'primary' | 'accent' | 'warn';
  @Input() disabled: boolean = false;
  @Input() contained: boolean = false;
}
