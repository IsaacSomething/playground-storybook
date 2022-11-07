import { Component, Input } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'storybook-slider',
  standalone: true,
  imports: [MatSliderModule],
  styles: [
    `
      mat-slider {
        width: 100%;
      }
      h1 {
        font-weight: bold !important;
      }
    `,
  ],
  template: `
    <div class="padding">
      <mat-slider #slider [color]="color" [disabled]="disabled"></mat-slider>

      <h1>[{{ slider.value }}]</h1>
    </div>
  `,
})
export default class Slider {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
}
