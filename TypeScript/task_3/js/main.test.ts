import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

describe('CRUD operations', () => {
  beforeEach(() => {
    // Mock Math.random to return consistent value
    jest.spyOn(Math, 'random').mockImplementation(() => 0.125);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should perform complete CRUD operation cycle', () => {
    const row: RowElement = {
      firstName: "Guillaume",
      lastName: "Salva"
    };
    const newRowID = CRUD.insertRow(row);
    expect(newRowID).toBe(125);

    const updatedRow: RowElement = {
      firstName: "Guillaume",
      lastName: "Salva",
      age: 23
    };
    const updateResult = CRUD.updateRow(newRowID, updatedRow);
    expect(updateResult).toBe(newRowID);

    const deleteResult = CRUD.deleteRow(newRowID);
    expect(deleteResult).toBeUndefined();
  });
});