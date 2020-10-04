import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NavMenuComponent } from '../layout/nav-menu/nav-menu.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { BrandServicesComponent } from '../layout/brand-services/brand-services.component';
import { BrandTestimonialsCarouselComponent } from '../layout/brand-testimonials-carousel/brand-testimonials-carousel.component';
import { BrandHowItWorksComponent } from '../layout/brand-how-it-works/brand-how-it-works.component';
import { BrandJoinComponent } from '../layout/brand-join/brand-join.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LocationComponent } from './location/location.component';
import { BlogComponent } from './blog/blog.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { FranchiseComponent } from './franchise/franchise.component';

@NgModule({
  declarations: [
    NavMenuComponent,
    FooterComponent,
    BrandServicesComponent,
    BrandTestimonialsCarouselComponent,
    BrandHowItWorksComponent,
    BrandJoinComponent,
    //PAGES
    PagesComponent,
    HomeComponent,
    NotFoundComponent,
    LocationComponent,
    BlogComponent,
    ServicesComponent,
    AboutComponent,
    FranchiseComponent,
  ],
  exports: [
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
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
