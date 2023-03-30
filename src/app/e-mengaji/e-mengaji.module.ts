import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EMengajiPageRoutingModule } from './e-mengaji-routing.module';

import { EMengajiPage } from './e-mengaji.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EMengajiPageRoutingModule
  ],
  declarations: [EMengajiPage]
})
export class EMengajiPageModule {}
