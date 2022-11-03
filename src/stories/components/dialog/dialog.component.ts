import { Component, Inject, Input } from '@angular/core';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'storybook-chips',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, BrowserAnimationsModule],
  template: `<button mat-flat-button (click)="open()">[Open dialog]</button>`,
})
export default class Chips {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;

  constructor(public dialog: MatDialog) {}

  open() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px',
      height: '350px',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: ` <h1>Dialog</h1> `,
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
