import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EMengajiPage } from './e-mengaji.page';

const routes: Routes = [
  {
    path: '',
    component: EMengajiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EMengajiPageRoutingModule {}
