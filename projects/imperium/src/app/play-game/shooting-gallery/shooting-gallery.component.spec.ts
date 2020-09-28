import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootingGalleryComponent } from './shooting-gallery.component';

describe('ShootingGalleryComponent', () => {
  let component: ShootingGalleryComponent;
  let fixture: ComponentFixture<ShootingGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShootingGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShootingGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
