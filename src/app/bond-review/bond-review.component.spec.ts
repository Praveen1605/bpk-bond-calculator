import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondReviewComponent } from './bond-review.component';

describe('BondReviewComponent', () => {
  let component: BondReviewComponent;
  let fixture: ComponentFixture<BondReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
