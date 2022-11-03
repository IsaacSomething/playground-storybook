import { Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'storybook-virtual-scroll',
  standalone: true,
  imports: [ScrollingModule],
  styles: [
    `
      .viewport {
        height: 400px;
        width: 200px;
        border: 2px solid var(--mat-divider);
        border-radius: 4px;
      }

      .item {
        height: 30px;
        padding: 6px;
        border: 1px solid var(--mat-divider);
      }
    `,
  ],
  template: `
    <cdk-virtual-scroll-viewport itemSize="50" class="viewport">
      <div *cdkVirtualFor="let item of items" class="item">
        {{ item }}
      </div>
    </cdk-virtual-scroll-viewport>
  `,
})
export default class VirtualScroll {
  items = Array.from({ length: 1000 }).map((_, i) => `Item #${i}`);
}
