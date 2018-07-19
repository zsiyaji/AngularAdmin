import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TableDataService } from '../services/table-data.service';

@Injectable()
export class RegularTablesResolver implements Resolve<any> {

  constructor(private tableDataService: TableDataService) {}

  resolve() {
    return new Promise((resolve, reject) => {
      this.tableDataService.getRegularTableData()
      .then((tableData: any) => {
        return resolve({
          columns: tableData.columns,
          data: tableData.data
        });
      });
    });
  }
}

@Injectable()
export class ExtendedTablesResolver implements Resolve<any> {

  constructor(private tableDataService: TableDataService) {}

  resolve() {
    return new Promise((resolve, reject) => {
      this.tableDataService.getExtendedTableData()
      .then((tableData: any) => {
        return resolve({
          columns: tableData.columns,
          data: tableData.data
        });
      });
    });
  }
}

@Injectable()
export class SmartTablesResolver implements Resolve<any> {

  constructor(private tableDataService: TableDataService) {}

  resolve() {
    return new Promise((resolve, reject) => {
      this.tableDataService.getSmartTableData()
      .then((tableData: any) => {
        return resolve({
          columns: tableData.columns,
          data: tableData.data
        });
      });
    });
  }
}
