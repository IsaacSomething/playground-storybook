import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatProgressSpinnerModule,
  ],
  template: `
    <button
      mat-button
      [class.mat-flat-button]="type === 'flat'"
      [class.mat-raised-button]="type === 'raised'"
      [class.mat-stroked-button]="type === 'stroked'"
      [class.large]="size === 'large'"
      [class.small]="size === 'small'"
      [class.round]="round"
      [color]="color"
      [disabled]="disabled"
    >
      <mat-spinner *ngIf="loading"></mat-spinner> {{ label }}
    </button>
  `,
})
export default class ButtonComponent {
  @Input() label = 'Button';
  @Input() size: 'small' | 'default' | 'large' = 'default';
  @Input() type: 'flat' | 'stroked' | 'raised' | 'default' = 'flat';
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() round: boolean = false;
}
