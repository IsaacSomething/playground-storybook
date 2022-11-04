import { Component, Input, OnInit } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'storybook-virtual-scroll',
  standalone: true,
  imports: [ScrollingModule, CommonModule],
  styles: [
    `
      .viewport {
        height: 400px;
        width: 200px;
        border: 1px solid var(--mat-divider);
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
    <div class="padding">
      <cdk-virtual-scroll-viewport itemSize="50" class="viewport">
        <div *cdkVirtualFor="let item of items" class="item">
          {{ item }}
        </div>
      </cdk-virtual-scroll-viewport>
    </div>
  `,
})
export default class VirtualScroll implements OnInit {
  @Input() items!: string[];

  ngOnInit() {
    this.items = Array.from({ length: 1000 }).map((_, i) => `Item #${i}`);
  }
}
