import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'sb-header',
  standalone: true,
  imports: [CommonModule, MatDividerModule],
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }
      .container {
        display: block;
        width: 100%;
      }
      h2 {
        font-size: 50px !important;
        font-weight: bold !important;
        margin-bottom: 6px !important;
        text-transform: capitalize;
      }
      small {
        padding-top: 12px;
        display: block;
      }
    `,
  ],
  template: `
    <div class="container">
      <h2>{{ title }}</h2>
      <ng-content></ng-content>
      <small *ngIf="clipboard">CLICK TO COPY VALUE</small>
      <mat-divider></mat-divider>
      <br />
      <div></div>
    </div>
  `,
})
export default class SBHeader {
  @Input() title!: string;
  @Input() set clipboard(value: BooleanInput) {
    this._clipboard = coerceBooleanProperty(value);
  }
  get clipboard() {
    return this._clipboard;
  }
  _clipboard = false;
}
