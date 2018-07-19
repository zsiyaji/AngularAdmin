import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import { UtilsModule } from '../utils';

import { TableDataService } from './services/table-data.service';
import { RegularTablesResolver, ExtendedTablesResolver, SmartTablesResolver } from './resolvers/tables.resolver';

import { ExtendedTablesPageComponent } from './pages/extended/extended-tables.component';
import { RegularTablesPageComponent } from './pages/regular/regular-tables.component';
import { SmartTablesPageComponent } from './pages/smart/smart-tables.component';

import { NouisliderModule } from 'ng2-nouislider';
import { Ng2SmartTableModule } from 'ng2-smart-table';

export const tablesRoutes = [
  { path: '', redirectTo: 'regular' },
  { path: 'regular', component: RegularTablesPageComponent, resolve: { tableData : RegularTablesResolver } },
  { path: 'extended', component: ExtendedTablesPageComponent, resolve: { tableData : ExtendedTablesResolver } },
  { path: 'smart', component: SmartTablesPageComponent, resolve: { tableData : SmartTablesResolver } }
];

@NgModule({
  declarations: [
    RegularTablesPageComponent,
    ExtendedTablesPageComponent,
    SmartTablesPageComponent
  ],

  providers: [
    TableDataService,
    RegularTablesResolver,
    ExtendedTablesResolver,
    SmartTablesResolver
  ],

  imports: [
    RouterModule.forChild(tablesRoutes),
    Ng2SmartTableModule,
    NouisliderModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    UtilsModule,
    CommonModule
  ]
})
export class TablesModule { }
