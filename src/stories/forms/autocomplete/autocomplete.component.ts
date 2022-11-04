import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-autocomplete',
  standalone: true,
  imports: [],
  template: `
    Copy and paste these files for a blank project <br />
    Will be better to add a schematic for this
  `,
})
export default class Autocomplete {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
}
