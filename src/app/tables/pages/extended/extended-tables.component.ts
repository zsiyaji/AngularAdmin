import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-extended-tables-page',
  templateUrl: './extended-tables.component.html',
  styleUrls: [ './styles/_extended-tables.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class ExtendedTablesPageComponent {
  columns = undefined;
  data = undefined;

  columns_list = [];
  data_list = [];

  constructor(private route: ActivatedRoute) {
    const tableData = route.snapshot.data['tableData'];
    this.columns = tableData.columns;
    this.data = tableData.data;

    this.columns_list = this.iterateObject(this.columns);
    this.data_list = this.data.map(x => this.iterateObject(x));
  }

  iterateObject(o): Array<any> {
    const array = [];
    for (const key in o) {
      if (o.hasOwnProperty(key)) {
        array.push({name: key, value: o[key]});
      }
    }

    return array;
  }
}
