import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RoleGuard} from '../guards/role-guard.service';

import {CompanyComponent} from './company/company.component';
import {CompanyListComponent} from './company-list/company-list.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    canActivate: [RoleGuard],
    data: {role: ['ROLE_ADMIN']},
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
  providers: [RoleGuard]
})
export class AdminRoutingModule {
}

