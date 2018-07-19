import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

@Injectable()
export class TableDataService {

  regularTableData = {
    columns: {
      id: { title: 'ID' },
      name: { title: 'Name' },
      country: { title: 'Country' },
      city: { title: 'City' },
      birthday: { title: 'Birthday' },
      age: { title: 'Age' },
      salary: { title: 'Salary'}
    },
    data: {}
  };

  extendedTableData = {
    columns: {
      picture: { title: '' },
      name: { title: 'Name' },
      status: { title: 'Status' },
      progress: { title: 'Progress' },
      comments: { title: 'Comments' },
      policy: { title: 'Policy'}
    },
    data: {}
  };

  smartTableData = {
    columns: {
      picture: { title: '' },
      name: { title: 'Name' },
      country: { title: 'Country' },
      interests: { title: 'Interests' },
      subscribed: { title: 'Subscribed' },
      age: { title: 'Age' },
      status: { title: 'Status'}
    },
    data: {}
  };
  baseUrl = '';

  constructor(
    private http: HttpClient,
    @Inject(APP_BASE_HREF) private baseHref: string
  ) {
    this.baseUrl = baseHref;
  }

  getRegularTableData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + '/assets/data/regular_table.json')
      .subscribe(
        data => {
          this.regularTableData.data =  data;
          resolve (this.regularTableData);
        },
        err => reject()
      );
    });
  }

  getExtendedTableData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + '/assets/data/extended_table.json')
      .subscribe(
        data => {
          this.extendedTableData.data =  data;
          resolve (this.extendedTableData);
        },
        err => reject()
      );
    });
  }

  getSmartTableData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + '/assets/data/smart_table.json')
      .subscribe(
        data => {
          this.smartTableData.data =  data;
          resolve (this.smartTableData);
        },
        err => reject()
      );
    });
  }

}
