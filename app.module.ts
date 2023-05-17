import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';

import { UserFieldComponent } from './user-field/user-field.component';


import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotToastModule } from '@ngneat/hot-toast';
import { CharacterDetailPagesComponent } from './character-detail-pages/character-detail-pages.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFieldComponent,
    CharacterDetailPagesComponent,
    

    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
   
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HotToastModule.forRoot()

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
 