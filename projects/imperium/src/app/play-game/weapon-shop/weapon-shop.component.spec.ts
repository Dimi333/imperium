import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponShopComponent } from './weapon-shop.component';

describe('WeaponShopComponent', () => {
  let component: WeaponShopComponent;
  let fixture: ComponentFixture<WeaponShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
