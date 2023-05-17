import { Component, NgModule } from '@angular/core';
import { UserFieldComponent } from './user-field/user-field.component';

import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailPagesComponent } from './character-detail-pages/character-detail-pages.component';

const routes: Routes = [
  {path:'',component:UserFieldComponent},
  // {path:'formpage',component:UserFieldComponent},
  // {path:'loginpage',component:LoginComponent},

  { path: 'detailpage', component: CharacterDetailPagesComponent},
  { path:'chracterList', component:UserFieldComponent }

  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
