import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandHowItWorksComponent } from './brand-how-it-works.component';

describe('BrandHowItWorksComponent', () => {
  let component: BrandHowItWorksComponent;
  let fixture: ComponentFixture<BrandHowItWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandHowItWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
