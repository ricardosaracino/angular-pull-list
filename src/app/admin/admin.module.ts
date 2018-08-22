import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AppMaterialModule} from '../app-material.module';
import {AdminRoutingModule} from './admin-routing';

import {CompanyComponent} from './company/company.component';
import {CompanyListComponent} from './company-list/company-list.component';

import {AdminService} from './admin.service';

@NgModule({
  imports: [
    CommonModule,

    FormsModule,

    AppMaterialModule,
    AdminRoutingModule,
  ],
  declarations: [
    CompanyComponent,
    CompanyListComponent
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule {
}
