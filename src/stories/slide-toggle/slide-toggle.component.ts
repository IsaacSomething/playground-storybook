import { Component, Input } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'storybook-slide-toggle',
  template: `
    <mat-slide-toggle
      [color]="color"
      [disabled]="disabled"
      [class.contained]="isContained"
    >
      Slide
    </mat-slide-toggle>
  `,
  imports: [MatSlideToggleModule],
  standalone: true,
})
export default class SlideToggle {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
  @Input() isContained: boolean = false;
}
