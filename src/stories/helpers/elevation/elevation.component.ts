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
      .box {
        height: 300px;
        width: 300px;
        padding: 16px;
        border-radius: 4px;
        cursor: copy;
      }
    `,
  ],
  template: `
    <div class="padding">
      <sb-header title="Elevation" clipboard></sb-header>
      <div
        [class]="'box mat-elevation-z' + elevation"
        matRipple
        [cdkCopyToClipboard]="'mat-elevation-z' + elevation"
      >
        <code>.mat-elevation-z{{ elevation }}</code>
      </div>
    </div>
  `,
})
export default class Elevation {
  @Input() elevation = 1;
}
