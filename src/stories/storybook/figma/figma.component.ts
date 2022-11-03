import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-figma',
  standalone: true,
  imports: [],
  template: `
    <p>
      This is a test story to try out the integration of Figma within
      storybook.Click the design tab on the panel on the right
    </p>

    <a
      href="https://www.figma.com/file/3Pi5gtn4HauAVNK098GWUs/Mockup?node-id=0%3A1"
      target="_blank"
    >
      Figma mockup link
    </a>
  `,
})
export default class Figma {}
