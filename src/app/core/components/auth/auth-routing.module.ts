import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { SignComponent } from './pages/sign/sign.component';

const routes: Routes = [
  {
    path: '',
    component: SignComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
