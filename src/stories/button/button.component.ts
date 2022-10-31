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
  templateUrl: './button.component.html',
})
export default class ButtonComponent {
  @Input() size: 'small' | 'default' | 'large' = 'default';
  @Input() type: 'flat' | 'stroked' | 'raised' | 'default' = 'flat';
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() label = 'Button';
}
