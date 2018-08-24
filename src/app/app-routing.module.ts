import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UnauthorizedComponent} from './error-docs/unauthorized/unauthorized.component';
import {ForbiddenComponent} from './error-docs/forbidden/forbidden.component';
import {NotFoundComponent} from './error-docs/not-found/not-found.component';


const routes: Routes = [
  {path: 'unauthorized', component: UnauthorizedComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: false} // <-- debugging purposes only
  )],
})

export class AppRoutingModule {
}
