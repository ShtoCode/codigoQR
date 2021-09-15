import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

import { Routes, RouterModule } from '@angular/router';


const routes: Routes=[{
  path: '',
  component: TabsPage,
  children: [
    { path: 'home',
      loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
    },
    { path: 'codigo-qr',
      loadChildren: () => import('../codigo-qr/codigo-qr.module').then( m => m.CodigoQRPageModule) 
    },
    { path: 'annimations',
      loadChildren: () => import('../annimations/annimations.module').then( m => m.AnnimationsPageModule) }
  ]
}]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
