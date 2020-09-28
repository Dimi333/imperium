import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrematoryComponent } from './crematory.component';

describe('CrematoryComponent', () => {
  let component: CrematoryComponent;
  let fixture: ComponentFixture<CrematoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrematoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrematoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
