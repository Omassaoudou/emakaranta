import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnewuserComponent } from './listnewuser.component';

describe('ListnewuserComponent', () => {
  let component: ListnewuserComponent;
  let fixture: ComponentFixture<ListnewuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListnewuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListnewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
