import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'storybook-sidenav',
  template: `
    <mat-sidenav-container class="example-container">
      <mat-sidenav
        #sidenav
        class="mat-elevation-z8"
        [mode]="mode"
        [position]="position"
        (closedStart)="closedStart.emit($event)"
        (openedStart)="openedStart.emit($event)"
        (openedChange)="openedChange.emit($event)"
        (onPositionChanged)="onPositionChanged.emit($event)"
      >
        <button type="button" mat-button (click)="sidenav.close()">
          Close sidenav
        </button>
      </mat-sidenav>
      <mat-sidenav-content>
        <button type="button" mat-button (click)="sidenav.toggle()">
          Toggle sidenav
        </button>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  imports: [MatSidenavModule, BrowserAnimationsModule, MatButtonModule],
  standalone: true,
})
export default class Sidenav {
  @Input() mode: 'over' | 'push' | 'side' = 'side';
  @Input() position: 'start' | 'end' = 'start';

  @Output() closedStart = new EventEmitter<Observable<void>>();
  @Output() openedStart = new EventEmitter<Observable<void>>();
  @Output() openedChange = new EventEmitter<boolean>();
  @Output() onPositionChanged = new EventEmitter<EventEmitter<void>>();
}
