import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PeriodicElement } from './model';

@Component({
  selector: 'storybook-table',
  standalone: true,
  imports: [MatTableModule],
  template: `
    <div class="padding-left-32 padding-right-32">
      <table mat-table [dataSource]="dataSource" class="mat-elevation-z1">
        <ng-container matColumnDef="position">
          <th mat-header-cell *matHeaderCellDef>No.</th>
          <td mat-cell *matCellDef="let element">{{ element.position }}</td>
        </ng-container>

        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let element">{{ element.name }}</td>
        </ng-container>

        <ng-container matColumnDef="weight">
          <th mat-header-cell *matHeaderCellDef>Weight</th>
          <td mat-cell *matCellDef="let element">{{ element.weight }}</td>
        </ng-container>

        <ng-container matColumnDef="symbol">
          <th mat-header-cell *matHeaderCellDef>Symbol</th>
          <td mat-cell *matCellDef="let element">{{ element.symbol }}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
    </div>
  `,
})
export default class Table {
  @Input() displayedColumns!: string[];
  @Input() dataSource!: PeriodicElement[];
}
