import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'storybook-autocomplete',
  standalone: true,
  imports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
  ],
  template: `
    <form class="padding">
      <mat-form-field class="example-full-width" [appearance]="appearance">
        <mat-label>{{ label }}</mat-label>
        <input
          [disabled]="disabled"
          type="text"
          placeholder="Pick one"
          aria-label="Number"
          matInput
          [formControl]="myControl"
          [matAutocomplete]="auto"
        />
        <mat-autocomplete #auto="matAutocomplete">
          <mat-option
            *ngFor="let option of filteredOptions | async"
            [value]="option"
          >
            {{ option }}
          </mat-option>
        </mat-autocomplete>
      </mat-form-field>
    </form>
  `,
})
export default class Autocomplete {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
  @Input() label!: string;
  @Input() appearance!: 'legacy' | 'standard' | 'fill' | 'outline';

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
