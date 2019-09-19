import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreercatComponent } from './creercat.component';

describe('CreercatComponent', () => {
  let component: CreercatComponent;
  let fixture: ComponentFixture<CreercatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreercatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreercatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
