import { Component, Input } from '@angular/core';
import { SBProgressComponent } from '@sb/components/progress';

@Component({
  selector: 'storybook-button',
  template: `<sb-progress
    [color]="color"
    [value]="value"
    [mode]="mode"
    [disabled]="disabled"
  ></sb-progress>`,
  imports: [SBProgressComponent],
  standalone: true,
})
export default class ProgressComponent {
  @Input() value = 20;
  @Input() disabled: boolean = false;
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() mode: 'determinate' | 'indeterminate' = 'determinate';

  /* @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary
      ? 'storybook-button--primary'
      : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  } */
}
