import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponentDesktop } from './signin.component.desktop';

describe('SigninComponentDesktop', () => {
  let component: SigninComponentDesktop;
  let fixture: ComponentFixture<SigninComponentDesktop>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninComponentDesktop ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponentDesktop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
