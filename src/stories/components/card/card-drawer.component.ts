import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'storybook-card-drawer',
  standalone: true,
  imports: [
    MatCardModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  template: `
    <mat-card [attr.color]="color" class="drawer">
      <mat-drawer-container #drawer>
        <mat-drawer
          mode="over"
          class="bg-divider padding width-50 mat-elevation-z0"
        >
          <button mat-button (click)="drawer.close()">[Close drawer]</button>
        </mat-drawer>

        <mat-drawer-content>
          <mat-card-title (click)="drawer.open()" class="pointer">
            [Open]
          </mat-card-title>
          <mat-card-subtitle>Click [Open] to open drawer</mat-card-subtitle>

          <mat-card-content class="no-margin">
            Eligendi, provident dolores mollitia inventore facilis harum dolore
            nam in ut! Eveniet reiciendis, laudantium excepturi velit cum totam
            quo expedita aspernatur tenetur? Eligendi, provident dolores
            mollitia inventore facilis harum dolore nam in ut! Eveniet
            reiciendis, laudantium excepturi velit cum totam quo expedita
            aspernatur tenetur?
          </mat-card-content>
        </mat-drawer-content>
      </mat-drawer-container>
    </mat-card>
  `,
})
export default class CardDrawer {
  @Input() color: 'primary' | 'accent' | 'warn' | 'default' = 'default';
}
