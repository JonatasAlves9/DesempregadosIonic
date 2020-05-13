import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagRegiaoPageRoutingModule } from './pag-regiao-routing.module';

import { PagRegiaoPage } from './pag-regiao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagRegiaoPageRoutingModule
  ],
  declarations: [PagRegiaoPage]
})
export class PagRegiaoPageModule {}
