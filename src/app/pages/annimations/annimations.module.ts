import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnimationsPageRoutingModule } from './annimations-routing.module';

import { AnnimationsPage } from './annimations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnimationsPageRoutingModule
  ],
  declarations: [AnnimationsPage]
})
export class AnnimationsPageModule {}
