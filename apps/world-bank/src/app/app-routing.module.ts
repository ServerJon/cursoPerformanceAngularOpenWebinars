import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Main routers
 */
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'region/:code',
    loadChildren: () =>
      import('./pages/region/region.module').then((m) => m.RegionModule),
  },
  {
    path: 'country/:id',
    loadChildren: () =>
      import('./pages/country/country.module').then((m) => m.CountryModule),
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
