import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'storybook-card',
  template: `
    <mat-card [attr.color]="color">
      <mat-card-header>
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
        <button mat-button>Ok</button>
      </mat-card-actions>
    </mat-card>
  `,
  imports: [MatCardModule, MatButtonModule],
  standalone: true,
})
export default class Card {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
}
