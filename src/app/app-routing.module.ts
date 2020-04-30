import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { SigninComponentDesktop } from './signin/signin.component.desktop';
import { SigninComponentMobile } from './signin/signin.component.mobile';

const desktopRoutes: Routes = [
  { path: '', component: SigninComponentDesktop },
];

const mobileRoutes: Routes = [
  { path: '', component: SigninComponentMobile },
];



@NgModule({
  imports: [RouterModule.forRoot(desktopRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    if (window.innerWidth < 768) {
      router.resetConfig(mobileRoutes);
    }
    console.log('innerWidth:', window.innerWidth);
  }
}
