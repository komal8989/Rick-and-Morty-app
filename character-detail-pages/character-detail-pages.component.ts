import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-character-detail-pages',
  templateUrl: './character-detail-pages.component.html',
  styleUrls: ['./character-detail-pages.component.css']
})
export class CharacterDetailPagesComponent {
  alldata: any;
  

  constructor( private activeroute: ActivatedRoute,
    private Userstate: UserDataService, private routes: Router,){

  }
  userKey: string = '';
 characterdetail:any
    ngOnInit() {

 
      this.activeroute.queryParamMap.subscribe((para: any) => {
        // console.log(para);
        this.userKey = para.params['userkey'];
        console.log('this.userKey', this.userKey);
      });
      this.Userstate.getuser(this.userKey).subscribe((res) => {
        console.log(res,"hiiii")
        this.characterdetail=res;
       console.log(this.characterdetail)
    
      })

  }
  goBack(){
    this.routes.navigate(['/chracterList']);
  }

 
  
  
    
}
