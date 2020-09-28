import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainStationComponent } from './train-station.component';

describe('TrainStationComponent', () => {
  let component: TrainStationComponent;
  let fixture: ComponentFixture<TrainStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
