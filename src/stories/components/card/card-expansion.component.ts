import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'storybook-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatRippleModule,
  ],
  template: `
    <mat-card [attr.color]="color" class="expansion">
      <mat-card-header class="no-margin" class="expansion">
        <mat-expansion-panel matRipple matRippleColor="black">
          <mat-expansion-panel-header>
            <mat-card-title>title</mat-card-title>
            <mat-card-subtitle>subtitle</mat-card-subtitle>
          </mat-expansion-panel-header>
          <p>matRipple was added</p>
        </mat-expansion-panel>
      </mat-card-header>

      <mat-card-content class="expansion">
        <mat-accordion>
          <mat-expansion-panel class="mat-elevation-z0">
            <mat-expansion-panel-header>
              <mat-panel-title> This is the expansion title </mat-panel-title>
              <mat-panel-description>
                This is a summary of the content
              </mat-panel-description>
            </mat-expansion-panel-header>
            <p>This is the primary content of the panel.</p>
          </mat-expansion-panel>

          <mat-expansion-panel class="mat-elevation-z0">
            <mat-expansion-panel-header>
              <mat-panel-title> Self aware panel </mat-panel-title>
              <mat-panel-description> Currently I am </mat-panel-description>
            </mat-expansion-panel-header>
            <p>therefore i think ... i think</p>
          </mat-expansion-panel>
        </mat-accordion>
      </mat-card-content>
    </mat-card>
    <br />
    <p>Expansion card not working with change in color yet</p>
  `,
})
export default class CardExpansion {
  @Input() color: 'primary' | 'accent' | 'warn' | 'default' = 'default';
}
