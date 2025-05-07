import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageRoleComponent } from './manage-role.component';
import { ManageRoleRoutingModule } from './manage-role-routing.module';
import { InputModule } from 'src/app/components/input/input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { PaginationModule } from 'src/app/components/pagination/pagination.module';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@NgModule({
  declarations: [
    ManageRoleComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ManageRoleRoutingModule,
    NzButtonModule,
    NzIconModule,
    NzTableModule,
    NzToolTipModule,
    NzDropDownModule,
    PipeModule,
    PaginationModule,
    NzPaginationModule
  ]
})
export class ManageRoleModule { }
