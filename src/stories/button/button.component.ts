import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'storybook-button',
  templateUrl: './button.component.html',
  imports: [MatButtonModule, MatIconModule],
  standalone: true,
})
export default class ButtonComponent {
  @Input() size: 'small' | 'default' | 'large' = 'default';
  @Input() type: 'flat' | 'stroked' | 'raised' | 'default' = 'flat';
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
  @Input() label = 'Button';
}
