import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { LoginComponent } from './users/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthenticateService } from '../core/services/user/authenticate.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthenticateService],
})
export class FeaturesModule {}
