import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteajoutComponent } from './compteajout.component';

describe('CompteajoutComponent', () => {
  let component: CompteajoutComponent;
  let fixture: ComponentFixture<CompteajoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteajoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteajoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
