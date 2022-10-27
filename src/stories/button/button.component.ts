import { Component, Input } from '@angular/core';
import { SBButtonComponent } from '@sb/components/button';

@Component({
  selector: 'storybook-button',
  template: `<sb-button
    [label]="label"
    [type]="type"
    [color]="color"
    [disabled]="disabled"
  ></sb-button>`,
  imports: [SBButtonComponent],
  standalone: true,
})
export default class ButtonComponent {
  @Input() size: 'small' | 'default' | 'large' = 'default';
  @Input() type: 'flat' | 'stroked' | 'raised' | 'default' = 'flat';
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
  @Input() label = 'Button';

  /* @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary
      ? 'storybook-button--primary'
      : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  } */
}
