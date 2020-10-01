import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandJoinComponent } from './brand-join.component';

describe('BrandJoinComponent', () => {
  let component: BrandJoinComponent;
  let fixture: ComponentFixture<BrandJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
