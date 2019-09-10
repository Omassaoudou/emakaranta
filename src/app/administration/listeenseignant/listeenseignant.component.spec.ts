import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeenseignantComponent } from './listeenseignant.component';

describe('ListeenseignantComponent', () => {
  let component: ListeenseignantComponent;
  let fixture: ComponentFixture<ListeenseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeenseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeenseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
