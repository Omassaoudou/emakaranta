import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminoptioncoursComponent } from './adminoptioncours.component';

describe('AdminoptioncoursComponent', () => {
  let component: AdminoptioncoursComponent;
  let fixture: ComponentFixture<AdminoptioncoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminoptioncoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminoptioncoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
