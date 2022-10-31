import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'storybook-tooltip',
  standalone: true,
  imports: [MatTooltipModule, MatButtonModule, MatIconModule],
  styles: [
    `
      div {
        padding: 50px;
      }
    `,
  ],
  template: `
    <div>
      <button
        mat-stroked-button
        matTooltip="Lorem Ipsum"
        [matTooltipPosition]="position"
        [matTooltipClass]="color"
        [matTooltipDisabled]="disabled"
      >
        [Hover here for tooltip]
      </button>
    </div>
  `,
})
export default class Tooltip {
  @Input() color: 'primary' | 'accent' | 'warn' | 'default' = 'default';
  @Input() position: 'after' | 'before' | 'above' | 'below' | 'left' | 'right' =
    'below';
  @Input() disabled: boolean = false;
}
