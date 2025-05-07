import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPreloadingStrategy } from './service-custom/CustomPreloadingStrategy';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'page' },
  {
    path: 'page',
    loadChildren: () => import('./page/page.module').then((m) => m.PageModule),
    data: { preload: true },
    // runGuardsAndResolvers: 'always'
    // canActivate: [AuthGuard],
  },
  {
    path: 'not-authorized',
    component: NotAuthorizedComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      preloadingStrategy: CustomPreloadingStrategy,
      onSameUrlNavigation: 'reload'
    }),
  ],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy],
})

export class AppRoutingModule { }
