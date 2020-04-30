import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponentMobile } from './signin.component.mobile';

describe('SigninComponentMobile', () => {
  let component: SigninComponentMobile;
  let fixture: ComponentFixture<SigninComponentMobile>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninComponentMobile ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponentMobile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
