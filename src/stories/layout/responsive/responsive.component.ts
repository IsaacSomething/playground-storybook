import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { map } from 'rxjs';

@Component({
  selector: 'storybook-responsive',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, MatButtonModule, NgIf],
  template: `
    <div class="padding">
      <p>Resize the panel to see the current screen size change.</p>

      <button mat-stroked-button *ngIf="xSmall$ | async">
        Show at [xSmall]
      </button>
      <button mat-stroked-button *ngIf="small$ | async">Show at [small]</button>
      <button mat-stroked-button *ngIf="medium$ | async">
        Show at [medium]
      </button>
      <button mat-stroked-button *ngIf="large$ | async">Show at [large]</button>
      <button mat-stroked-button *ngIf="xLarge$ | async">
        Show at [xLarge]
      </button>

      <br />
      <br />
      <code>{{ size$ | async | json }} </code>
    </div>
  `,
})
export default class Responsive {
  @Input() currentScreenSize!: string;
  @Input() xSmall$ = this.breakpointObserver
    .observe([Breakpoints.XSmall])
    .pipe(map((_) => _.matches));
  @Input() small$ = this.breakpointObserver
    .observe([Breakpoints.Small])
    .pipe(map((_) => _.matches));
  @Input() medium$ = this.breakpointObserver
    .observe([Breakpoints.Medium])
    .pipe(map((_) => _.matches));
  @Input() large$ = this.breakpointObserver
    .observe([Breakpoints.Large])
    .pipe(map((_) => _.matches));
  @Input() xLarge$ = this.breakpointObserver
    .observe([Breakpoints.XLarge])
    .pipe(map((_) => _.matches));
  @Input() size$ = this.breakpointObserver.observe([
    Breakpoints.XSmall,
    Breakpoints.Small,
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge,
  ]);

  @Input() displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(private breakpointObserver: BreakpointObserver) {}
}
