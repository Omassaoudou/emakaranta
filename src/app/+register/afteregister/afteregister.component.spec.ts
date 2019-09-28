import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfteregisterComponent } from './afteregister.component';

describe('AfteregisterComponent', () => {
  let component: AfteregisterComponent;
  let fixture: ComponentFixture<AfteregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfteregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfteregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
