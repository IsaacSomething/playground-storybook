import { Component, Input } from '@angular/core';
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
      mat-card {
        height: 300px;
        width: 300px;
      }
    `,
  ],
  template: `
    <mat-card [class]="'mat-elevation-z' + elevation">
      <code [highlight]="code"> </code>
    </mat-card>
  `,
})
export default class Elevation {
  @Input() elevation = 0;
  code: any;

  ngOnChanges() {
    this.code = `<mat-card class="mat-elevation-z${this.elevation}"> `;
  }
}
