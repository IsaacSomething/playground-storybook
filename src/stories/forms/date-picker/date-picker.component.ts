import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'storybook-date-picker',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
  ],
  template: `
    <div class="padding">
      <mat-form-field [appearance]="appearance" [color]="color">
        <mat-label>Enter a date range</mat-label>

        <mat-date-range-input [rangePicker]="picker" [disabled]="disabled">
          <input matStartDate placeholder="Start date" />
          <input matEndDate placeholder="End date" />
        </mat-date-range-input>

        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-date-range-picker [color]="color" #picker></mat-date-range-picker>
      </mat-form-field>
    </div>
  `,
})
export default class DatePicker {
  @Input() color!: 'primary' | 'accent' | 'warn';
  @Input() disabled: boolean = false;
  @Input() appearance!: 'legacy' | 'standard' | 'fill' | 'outline';
}
