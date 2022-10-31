import { Component, Input } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'storybook-slide-toggle',
  standalone: true,
  imports: [MatSlideToggleModule],
  template: `
    <mat-slide-toggle
      [color]="color"
      [disabled]="disabled"
      [class.contained]="isContained"
    >
    </mat-slide-toggle>
  `,
})
export default class SlideToggle {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
  @Input() isContained: boolean = false;
}
