import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageComponent } from './page.component';
import { AuthorizeGuard } from '../auth/authorize.guard';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'page/manage-role' },
    {
      path: '',
      component: PageComponent,
      children: [
        {
          path: 'manage-role',
          canActivate: [AuthorizeGuard],
          loadChildren: () => import('./manage-role/manage-role.module').then(m => m.ManageRoleModule)
        },
      ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PageRoutingModule {}