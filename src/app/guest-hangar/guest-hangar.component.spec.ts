import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestHangarComponent } from './guest-hangar.component';

describe('GuestHangarComponent', () => {
  let component: GuestHangarComponent;
  let fixture: ComponentFixture<GuestHangarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestHangarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestHangarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
