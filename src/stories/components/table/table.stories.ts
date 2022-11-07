import { Story, Meta } from '@storybook/angular';
import { TableModel } from './model';
import Table from './table.component';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: { options: { showPanel: true } },
} as Meta;

const Template: Story<Table> = (args: Table) => ({
  props: args,
  argTypes: {},
});

const disabledTypes = {
  dataSource: {
    table: { disable: true },
  },
  displayedColumns: {
    table: { disable: true },
  },
};

const defaultArgs: Partial<Table> | undefined = {
  displayedColumns: TableModel.displayedColumns,
  dataSource: TableModel.data,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
Default.argTypes = { ...disabledTypes };
Default.parameters = {
  docs: {
    source: {
      code: `
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
    `,
      language: 'html',
      format: false,
    },
  },
};
