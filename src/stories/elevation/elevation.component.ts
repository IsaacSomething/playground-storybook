import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import SBHeader from '../sb-header/sb-header.component';

@Component({
  selector: 'storybook-elevation',
  standalone: true,
  imports: [
    MatCardModule,
    HighlightModule,
    SBHeader,
    MatRippleModule,
    ClipboardModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
      },
    },
  ],
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
    <sb-header title="Elevation" hasCopy></sb-header>
    <div
      [class]="'mat-elevation-z' + elevation"
      matRipple
      matRippleColor="var(--playground-accent)"
      [cdkCopyToClipboard]="'mat-elevation-z' + elevation"
    >
      <code [highlight]="code"></code>
    </div>
  `,
})
export default class Elevation implements OnChanges {
  @Input() elevation = 1;
  code: any;

  ngOnChanges() {
    this.code = `<div class="mat-elevation-z${this.elevation}"></div>`;
  }
}
