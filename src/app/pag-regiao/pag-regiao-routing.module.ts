import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagRegiaoPage } from './pag-regiao.page';

const routes: Routes = [
  {
    path: '',
    component: PagRegiaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagRegiaoPageRoutingModule {}
