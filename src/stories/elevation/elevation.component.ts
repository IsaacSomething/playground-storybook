import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@Component({
  selector: 'storybook-elevation',
  standalone: true,
  imports: [MatCardModule, HighlightModule],
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
      }
    `,
  ],
  template: `
    <div [class]="'mat-elevation-z' + elevation">
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
