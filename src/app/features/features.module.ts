import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { LoginComponent } from './users/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
