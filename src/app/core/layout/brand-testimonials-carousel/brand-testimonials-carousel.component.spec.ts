import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandTestimonialsCarouselComponent } from './brand-testimonials-carousel.component';

describe('BrandTestimonialsCarouselComponent', () => {
  let component: BrandTestimonialsCarouselComponent;
  let fixture: ComponentFixture<BrandTestimonialsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandTestimonialsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandTestimonialsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
