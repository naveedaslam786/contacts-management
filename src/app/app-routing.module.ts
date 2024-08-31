import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailcontatctsComponent } from './detailcontatcts/detailcontatcts.component';

const routes: Routes = [
 
  {
    path: '',
    component: DetailcontatctsComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
