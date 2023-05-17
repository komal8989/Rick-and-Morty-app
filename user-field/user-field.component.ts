import { Component, OnInit } from '@angular/core';

import { UserDataService } from '../user-data.service';

import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-field',
  templateUrl: './user-field.component.html',
  styleUrls: ['./user-field.component.css'],
})
export class UserFieldComponent implements OnInit {
  constructor(
    private Userstate: UserDataService,
    private routes: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  alldata: any;
  userKey: string=''
  getalldataList() {
    this.Userstate.getAllStates().subscribe((userdatabase: any) => {
      this.alldata = userdatabase.results;

      console.log(this.alldata, 'hiiiii');
    });
   
  }

  ngOnInit(): void {
    this.getalldataList();
  
   
  }
  onEditClick(userId: string) {
    this.routes.navigate(['/detailpage'], { queryParams: { userkey: userId } });
  }
  

  
}
