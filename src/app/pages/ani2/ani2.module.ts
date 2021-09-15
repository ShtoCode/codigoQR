import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ani2PageRoutingModule } from './ani2-routing.module';

import { Ani2Page } from './ani2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ani2PageRoutingModule
  ],
  declarations: [Ani2Page]
})
export class Ani2PageModule {}
