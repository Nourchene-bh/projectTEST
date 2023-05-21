import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectclassroomComponent } from './selectclassroom.component';

describe('SelectclassroomComponent', () => {
  let component: SelectclassroomComponent;
  let fixture: ComponentFixture<SelectclassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectclassroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectclassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
