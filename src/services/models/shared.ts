export interface CSVRow extends Record<string, number | string | undefined> {
  rowType: 'MinWage' | 'Rent';
}
