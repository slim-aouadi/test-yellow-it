import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectTeacherComponent } from './affect-teacher.component';

describe('AffectTeacherComponent', () => {
  let component: AffectTeacherComponent;
  let fixture: ComponentFixture<AffectTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
