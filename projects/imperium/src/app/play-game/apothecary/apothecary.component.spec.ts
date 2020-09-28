import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApothecaryComponent } from './apothecary.component';

describe('ApothecaryComponent', () => {
  let component: ApothecaryComponent;
  let fixture: ComponentFixture<ApothecaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApothecaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApothecaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
