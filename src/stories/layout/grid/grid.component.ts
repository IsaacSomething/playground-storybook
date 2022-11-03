import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'storybook-grid',
  standalone: true,
  imports: [MatGridListModule],
  template: `
    <mat-grid-list cols="2" rowHeight="2:1">
      <mat-grid-tile class="bg-divider">
        <h1>[1]</h1>
      </mat-grid-tile>
      <mat-grid-tile class="bg-primary">
        <h1>[2]</h1>
      </mat-grid-tile>
      <mat-grid-tile class="bg-accent">
        <h1>[3]</h1>
      </mat-grid-tile>
      <mat-grid-tile class="bg-warn">
        <h1>[4]</h1>
      </mat-grid-tile>
    </mat-grid-list>
  `,
})
export default class Grid {}
