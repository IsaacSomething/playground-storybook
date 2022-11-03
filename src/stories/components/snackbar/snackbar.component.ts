import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'storybook-snackbar',
  standalone: true,
  imports: [MatButtonModule, MatSnackBarModule, BrowserAnimationsModule],
  template: `
    <button mat-flat-button (click)="open()">[Open snackbar]</button>
  `,
})
export default class Snackbar {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;

  constructor(private snackBar: MatSnackBar) {}

  open() {
    this.snackBar.open('Snackbar message', 'Okay', { duration: 1000 });
  }
}
