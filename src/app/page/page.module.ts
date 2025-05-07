import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NotificationModule } from '../components/notification/notification.module';
import { NotificationsService } from '../components/notification/notification.service';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { PageComponent } from './page.component';
import { NotAuthorizedComponent } from '../not-authorized/not-authorized.component';
import { PageRoutingModule } from './page.routing.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ManageRoleModule } from './manage-role/manage-role.module';
import { IconCustomService } from '../service-custom/iconCustom.service';
import { InputModule } from '../components/input/input.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NzFormModule,
    NzLayoutModule,
    ReactiveFormsModule,
    PageRoutingModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzModalModule,
    NzInputModule,
    NzAvatarModule,
    NzDropDownModule,
    NzSelectModule,
    NzSpinModule,
    NzBadgeModule,
    NotificationModule,
    NzToolTipModule,
    NzCheckboxModule,
    NzSwitchModule,
    NzTabsModule,
    NzMenuModule,
    ManageRoleModule,
    InputModule
  ],
  declarations: [
    PageComponent,
    NotAuthorizedComponent
  ],
  providers: [
    DatePipe,
    NotificationsService,
    IconCustomService
  ],
})
export class PageModule {}
