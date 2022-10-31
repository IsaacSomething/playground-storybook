import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatRippleModule } from '@angular/material/core';
import SBHeader from '../sb-header/sb-header.component';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule, ClipboardModule, MatRippleModule, SBHeader],
  styleUrls: ['./theme.component.scss'],
  template: `
    <sb-header [title]="color" hasCopy>
      <h4 *ngIf="color === 'primary'">HEX: #3F51B5</h4>
      <h4 *ngIf="color === 'accent'">HEX: #D72828</h4>
      <h4 *ngIf="color === 'warn'">HEX: #5C5C5C</h4>
    </sb-header>

    <div
      class="block"
      matRipple
      matRippleColor="var(--playground-{{ color }}-contrast-{{ hue }})"
      cdkCopyToClipboard="var(--playground-{{ color }}-{{ hue }})"
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
      <span style="color:var(--playground-{{ color }}-contrast-{{ hue }})">
        var(--playground-{{ color }}-{{ hue }})
      </span>
    </div>
  `,
})
export default class Theme {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
}
