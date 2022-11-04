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
  @Input() color: 'primary' | 'accent' | 'warn' | 'default' = 'primary';
  @Input() duration = 8000;

  constructor(private snackBar: MatSnackBar) {}

  open() {
    const message = `Eligendi, provident dolores mollitia inventore facilis harum dolore nam
    in ut!`;
    this.snackBar.open(message, 'Okay', {
      duration: this.duration,
      panelClass: `mat-${this.color}`,
    });
  }
}
