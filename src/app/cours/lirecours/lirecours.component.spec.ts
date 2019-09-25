import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LirecoursComponent } from './lirecours.component';

describe('LirecoursComponent', () => {
  let component: LirecoursComponent;
  let fixture: ComponentFixture<LirecoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LirecoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LirecoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
