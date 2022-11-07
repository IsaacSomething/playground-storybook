import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'storybook-select',
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
        <mat-label>Select items</mat-label>

        <mat-select>
          <mat-option
            *ngFor="let item of [1, 2, 3]; let idx = index"
            [value]="item"
          >
            {{ label + '-' + (idx + 1) }}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
  `,
})
export default class Select {
  @Input() label!: string;
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
  @Input() appearance!: 'legacy' | 'standard' | 'fill' | 'outline';
}
