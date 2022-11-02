import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import SBHeader from '../../assets/sb-header/sb-header.component';

@Component({
  selector: 'storybook-elevation',
  standalone: true,
  imports: [MatCardModule, SBHeader, MatRippleModule, ClipboardModule],
  providers: [],
  styles: [
    `
      div {
        height: 300px;
        width: 300px;
        padding: 16px;
        border-radius: 4px;
        cursor: copy;
      }
    `,
  ],
  template: `
    <sb-header title="Elevation" clipboard></sb-header>
    <div
      [class]="'mat-elevation-z' + elevation"
      matRipple
      matRippleColor="var(--mat-accent)"
      [cdkCopyToClipboard]="'mat-elevation-z' + elevation"
    ></div>
  `,
})
export default class Elevation {
  @Input() elevation = 1;
}
