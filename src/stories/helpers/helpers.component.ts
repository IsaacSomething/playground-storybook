import { Component, Input } from '@angular/core';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@Component({
  selector: 'storybook-helpers',
  standalone: true,
  imports: [HighlightModule],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
      },
    },
  ],
  styleUrls: ['./helpers.scss'],
  template: `
    <div class="box-outer">
      <div class="padding-{{ padding }} margin-{{ margin }}"></div>
    </div>
    <br />
    <code [highlight]="code"> </code>
  `,
})
export default class Helpers {
  @Input() padding: number = 0;
  @Input() margin: number = 0;
  code!: string;

  ngOnChanges() {
    this.code = `<div class="padding-${this.padding} margin-${this.margin}"> </div>`;
  }
}
