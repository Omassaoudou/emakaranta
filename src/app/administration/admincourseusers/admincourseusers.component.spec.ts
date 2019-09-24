import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincourseusersComponent } from './admincourseusers.component';

describe('AdmincourseusersComponent', () => {
  let component: AdmincourseusersComponent;
  let fixture: ComponentFixture<AdmincourseusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincourseusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincourseusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
