import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnimationsPage } from './annimations.page';

const routes: Routes = [
  {
    path: '',
    component: AnnimationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnimationsPageRoutingModule {}
