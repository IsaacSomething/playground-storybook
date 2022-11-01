import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-helpers',
  standalone: true,
  imports: [],
  providers: [],
  styleUrls: ['./helpers.scss'],
  template: `
    <div class="box-outer">
      <div
        class="padding-{{ padding }} padding-left-{{
          paddingLeft
        }} padding-right-{{ paddingRight }} margin-{{ margin }} margin-left-{{
          marginLeft
        }} margin-right-{{ marginRight }}"
      ></div>
    </div>
    <br />
  `,
})
export default class Helpers {
  @Input() padding: number = 0;
  @Input() margin: number = 0;
  @Input() paddingRight: number = 0;
  @Input() paddingLeft: number = 0;
  @Input() marginRight: number = 0;
  @Input() marginLeft: number = 0;
  code!: string;

  ngOnChanges() {
    this.code = `<div class="padding-${this.padding} padding-left-${this.paddingLeft} padding-right-${this.paddingRight} margin-${this.margin} margin-left-${this.marginLeft} margin-right-${this.marginRight}"> </div>`;
  }
}
