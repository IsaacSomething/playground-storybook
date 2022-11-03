import { Component, Input } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'storybook-stepper',
  standalone: true,
  imports: [MatStepperModule, BrowserAnimationsModule],
  template: `
    <mat-stepper>
      <mat-step label="[Label]">
        <h1>Step 1</h1>
        <p>
          Eligendi, provident dolores mollitia inventore facilis harum dolore
          nam in ut! Eveniet reiciendis, laudantium excepturi velit cum totam
          quo expedita aspernatur tenetur?
        </p>
      </mat-step>
      <mat-step label="[attribute label]">
        <h1>Step 2</h1>
        <p>
          Eligendi, provident dolores mollitia inventore facilis harum dolore
          nam in ut! Eveniet reiciendis, laudantium excepturi velit cum totam
          quo expedita aspernatur tenetur?
        </p>
      </mat-step>
      <mat-step>
        <ng-template matStepLabel>[matStepLabel]</ng-template>
        <h1>Step 3</h1>
        <p>
          Eligendi, provident dolores mollitia inventore facilis harum dolore
          nam in ut! Eveniet reiciendis, laudantium excepturi velit cum totam
          quo expedita aspernatur tenetur?
        </p>
      </mat-step>
    </mat-stepper>
  `,
})
export default class Chips {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
}
