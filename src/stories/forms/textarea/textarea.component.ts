import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-textarea',
  standalone: true,
  imports: [],
  template: `
    Copy and paste these files for a blank project <br />
    Will be better to add a schematic for this
  `,
})
export default class Textarea {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
}
