import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from '../guards/auth.gaurd';

import {CompanyComponent} from './company/company.component';
import {CompanyListComponent} from './company-list/company-list.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ADMIN']},
    children: [
      {
        path: 'companies',
        component: CompanyListComponent
      },
      {
        path: 'company/:id',
        component: CompanyComponent
      },
      {
        path: 'company',
        component: CompanyComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})
export class AdminRoutingModule {
}

