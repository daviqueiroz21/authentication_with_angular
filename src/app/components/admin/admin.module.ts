import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
