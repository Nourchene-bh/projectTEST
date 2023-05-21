import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServteachComponent } from './servteach.component';

describe('ServteachComponent', () => {
  let component: ServteachComponent;
  let fixture: ComponentFixture<ServteachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServteachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServteachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
