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
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          scss: () => import('highlight.js/lib/languages/scss'),
          html: () => import('highlight.js/lib/languages/html'),
        },
        // themePath: 'path-to-theme.css', // Optional, and useful if you want to change the theme dynamically
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
