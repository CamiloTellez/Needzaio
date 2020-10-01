import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BrandServicesComponent } from './layout/brand-services/brand-services.component';
import { BrandTestimonialsCarouselComponent } from './layout/brand-testimonials-carousel/brand-testimonials-carousel.component';
import { BrandHowItWorksComponent } from './layout/brand-how-it-works/brand-how-it-works.component';
import { BrandJoinComponent } from './layout/brand-join/brand-join.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    NavMenuComponent,
    FooterComponent,
    BrandServicesComponent,
    BrandTestimonialsCarouselComponent,
    BrandHowItWorksComponent,
    BrandJoinComponent,
    //PAGES
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule],
})
export class CoreModule {}
