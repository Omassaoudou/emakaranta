import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacklComponent } from './packl.component';

describe('PacklComponent', () => {
  let component: PacklComponent;
  let fixture: ComponentFixture<PacklComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacklComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacklComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
