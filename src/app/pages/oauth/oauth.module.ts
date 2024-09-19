import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OauthPageRoutingModule } from './oauth-routing.module';

import { OauthPage } from './oauth.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OauthPageRoutingModule,
    SharedModule
  ],
  declarations: [OauthPage]
})
export class OauthPageModule {}
