import { Injectable } from '@angular/core';
import { from, map, switchMap } from 'rxjs';
import {
  Auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  
  
 
  url='https://rickandmortyapi.com/api/character'
  

  constructor(private _http: HttpClient) { }
 
  getAllStates() {
    return this._http.get(this.url)
       
     
  }
 
  getuser(id: string) {
    
    const apiUrl = 'https://rickandmortyapi.com/api/character/' + id;

    return this._http.get(apiUrl);
  }
  

  
 
 

  
 
}
