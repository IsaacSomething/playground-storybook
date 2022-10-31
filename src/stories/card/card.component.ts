import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'storybook-card',
  imports: [MatCardModule, MatButtonModule, CommonModule],
  standalone: true,
  template: `
    <mat-card [attr.color]="color">
      <img
        mat-card-image
        *ngIf="image"
        src="https://cdn.pixabay.com/photo/2018/07/09/16/59/clouds-3526558_960_720.jpg"
      />
      <mat-card-header class="no-margin">
        <mat-card-title>title</mat-card-title>
        <mat-card-subtitle>subtitle</mat-card-subtitle>
      </mat-card-header>

      <mat-card-content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
        provident dolores mollitia inventore facilis harum dolore nam in ut!
        Eveniet reiciendis, laudantium excepturi velit cum totam quo expedita
        aspernatur tenetur?
      </mat-card-content>

      <mat-card-actions>
        <button mat-button>Default</button>
        <button mat-flat-button>Flat</button>
        <button mat-raised-button>Raised</button>
        <button mat-stroked-button>Stroked</button>
      </mat-card-actions>
    </mat-card>
  `,
})
export default class Card {
  @Input() color: 'primary' | 'accent' | 'warn' | 'default' = 'default';
  @Input() image = false;
}
