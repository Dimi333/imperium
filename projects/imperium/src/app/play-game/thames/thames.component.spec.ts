import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThamesComponent } from './thames.component';

describe('ThamesComponent', () => {
  let component: ThamesComponent;
  let fixture: ComponentFixture<ThamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
