import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./theme.component.scss'],
  template: `
    <h2>{{ color }}</h2>
    <h4 *ngIf="color === 'primary'">HEX: #3F51B5</h4>
    <h4 *ngIf="color === 'accent'">HEX: #D72828</h4>
    <h4 *ngIf="color === 'warn'">HEX: #5C5C5C</h4>
    <hr />
    <br />
    <div
      class="block"
      *ngFor="
        let hue of [
          '50',
          '100',
          '200',
          '300',
          '400',
          '500',
          '600',
          '700',
          '800',
          '900',
          'A100',
          'A200',
          'A400',
          'A700'
        ]
      "
      style="background-color:var(--playground-{{ color }}-{{ hue }})"
    >
      <h1 style="color:var(--playground-{{ color }}-contrast-{{ hue }})">
        {{ hue }}
      </h1>
      <span style="color:var(--playground-{{ color }}-contrast-{{ hue }})"
        >var(--playground-{{ color }})</span
      >
    </div>
  `,
})
export default class Theme {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
}
