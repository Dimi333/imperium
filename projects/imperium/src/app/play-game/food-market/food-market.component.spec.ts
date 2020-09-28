import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMarketComponent } from './food-market.component';

describe('FoodMarketComponent', () => {
  let component: FoodMarketComponent;
  let fixture: ComponentFixture<FoodMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
