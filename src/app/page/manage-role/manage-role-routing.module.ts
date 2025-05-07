import { NgModule } from '@angular/core';
import { ManageRoleComponent } from './manage-role.component';
import { AuthorizeGuard } from 'src/app/auth/authorize.guard';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ManageRoleComponent,
    canActivate: [AuthorizeGuard]
  },
  // {
  //   path: 'manage-role',
  //   component: ManageRoleComponent,
  //   canActivate: [AuthorizeGuard]
  // },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoleRoutingModule { }
