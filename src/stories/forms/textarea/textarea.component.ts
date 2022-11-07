import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Input, NgZone, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { take } from 'rxjs';

@Component({
  selector: 'storybook-textarea',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  template: `
    <div class="padding">
      <mat-form-field [appearance]="appearance">
        <mat-label>Autosize textarea</mat-label>
        <textarea
          matInput
          cdkTextareaAutosize
          #autosize="cdkTextareaAutosize"
          cdkAutosizeMinRows="1"
          cdkAutosizeMaxRows="5"
        ></textarea>
      </mat-form-field>
    </div>
  `,
})
export default class Textarea {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
  @Input() appearance!: 'legacy' | 'standard' | 'fill' | 'outline';

  constructor(private ngZone: NgZone) {}

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable
      .pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }
}
