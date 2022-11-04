import { Component, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'storybook-menu',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, BrowserAnimationsModule],
  template: `
    <div class="padding">
      <button mat-flat-button [matMenuTriggerFor]="menu">[Menu]</button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item>Item 1</button>
        <button mat-menu-item>Item 2</button>
      </mat-menu>
    </div>
  `,
})
export default class Menu {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
}
