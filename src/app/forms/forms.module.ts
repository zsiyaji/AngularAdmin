import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NouisliderModule } from 'ng2-nouislider';

import { SharedModule } from '../shared';

import { FormsValidationsResolver, FormsExtendedControlsResolver, FormsLayoutsResolver, FormsWizardResolver } from './forms.resolver';

import { ControlsAndValidationsPageComponent } from './pages/controls-and-validations/controls-and-validations.component';
import { ExtendedControlsPageComponent } from './pages/extended-controls/extended-controls.component';
import { SampleLayoutsPageComponent } from './pages/sample-layouts/sample-layouts.component';
import { WizardPageComponent } from './pages/wizard/wizard.component';

export const formsRoutes = [
  {
    path: '',
    redirectTo: 'controls-and-validations'
  },
  {
    path: 'controls-and-validations',
    component: ControlsAndValidationsPageComponent,
    resolve: {
      data: FormsValidationsResolver
    }
  },
  {
    path: 'extended-controls',
    component: ExtendedControlsPageComponent,
    resolve: {
      data: FormsExtendedControlsResolver
    }
  },
  {
    path: 'sample-layouts',
    component: SampleLayoutsPageComponent,
    resolve: {
      data: FormsLayoutsResolver
    }
  },
  {
    path: 'wizard',
    component: WizardPageComponent,
    resolve: {
      data: FormsWizardResolver
    }
  }
];

@NgModule({
  declarations: [
    ControlsAndValidationsPageComponent,
    ExtendedControlsPageComponent,
    SampleLayoutsPageComponent,
    WizardPageComponent
  ],
  imports: [
    RouterModule.forChild(formsRoutes),
    SharedModule,
    NouisliderModule
  ],
  providers: [
    FormsValidationsResolver,
    FormsExtendedControlsResolver,
    FormsLayoutsResolver,
    FormsWizardResolver
  ]
})
export class FormsModule { }
