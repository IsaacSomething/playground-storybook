import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./theme.component.scss'],
  template: `
    <div
      class="block"
      *ngFor="let hue of palette"
      style="background-color:var(--playground-{{ color }}-{{ hue }}"
    >
      <small style="color:var(--playground-{{ color }}-contrast-{{ hue }}">
        {{ hue }}
      </small>
    </div>
  `,
})
export default class Theme {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  palette = [
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
    'A700',
  ];
}
