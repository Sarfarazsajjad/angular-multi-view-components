import { Component } from '@angular/core';
import { SigninComponentDesktop } from './signin.component.desktop';

@Component({
  selector: 'app-signin-mobile',
  templateUrl: './signin.component.mobile.html',
  styleUrls: ['./signin.component.mobile.scss']
})

export class SigninComponentMobile extends SigninComponentDesktop {

  constructor() { super() }

  ngOnInit() {
  }

}
