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
    <ng-container
      *ngTemplateOutlet="btnTemplate; context: { $implicit: 'small' }"
    >
    </ng-container>
    <br />
    <br />
    <ng-container *ngTemplateOutlet="btnTemplate"> </ng-container>
    <br />
    <br />
    <ng-container
      *ngTemplateOutlet="btnTemplate; context: { $implicit: 'large' }"
    >
    </ng-container>

    <ng-template #btnTemplate let-size>
      <button
        mat-button
        [class.mat-flat-button]="type === 'flat'"
        [class.mat-raised-button]="type === 'raised'"
        [class.mat-stroked-button]="type === 'stroked'"
        class="{{ size }} margin-right"
        [class.round]="round"
        [color]="color"
        [disabled]="disabled"
      >
        <mat-spinner *ngIf="loading"></mat-spinner> [{{ label }}]
      </button>

      <button
        mat-icon-button
        [class.mat-flat-button]="type === 'flat'"
        [class.mat-raised-button]="type === 'raised'"
        [class.mat-stroked-button]="type === 'stroked'"
        class="{{ size }}"
        [color]="color"
      >
        <mat-icon>home</mat-icon>
      </button>
    </ng-template>
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
