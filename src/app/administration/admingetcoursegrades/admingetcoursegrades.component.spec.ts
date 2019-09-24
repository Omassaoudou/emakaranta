import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingetcoursegradesComponent } from './admingetcoursegrades.component';

describe('AdmingetcoursegradesComponent', () => {
  let component: AdmingetcoursegradesComponent;
  let fixture: ComponentFixture<AdmingetcoursegradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmingetcoursegradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmingetcoursegradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
