export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
export namespace TableModel {
  export const bigData: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 11, name: 'Titanium', weight: 47.867, symbol: 'Ti' },
    { position: 12, name: 'Vanadium', weight: 50.942, symbol: 'V' },
    { position: 13, name: 'Arsenic', weight: 74.922, symbol: 'As' },
    { position: 14, name: 'Samarium', weight: 150.36, symbol: 'Sm' },
    { position: 15, name: 'Osmium', weight: 190.23, symbol: 'Os' },
    { position: 16, name: 'Actinium', weight: 227, symbol: 'Ac' },
    { position: 17, name: 'Rhodium', weight: 102.91, symbol: 'Rh' },
    { position: 18, name: 'Bismuth', weight: 208.98, symbol: 'Bi' },
    { position: 19, name: 'Francium', weight: 223, symbol: 'Fr' },
    { position: 20, name: 'Thorium', weight: 232.04, symbol: 'Th' },
    { position: 21, name: 'Californium', weight: 251, symbol: 'Cf' },
  ];

  export const data: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  ];

  export const displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
  ];
}
