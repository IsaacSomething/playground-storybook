import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'sb-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [MatButtonModule],
  standalone: true,
})
export class SBButtonComponent {
  @Input() label = 'button';
  @Input() color = 'primary';
  @Input() type: 'flat' | 'raised' | 'flat' | 'stroked' | 'default' = 'default';
  @Input() disabled = false;
  constructor() {}
}
