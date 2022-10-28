import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-blank',
  template: ``,
  imports: [],
  standalone: true,
})
export default class Blank {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
}
