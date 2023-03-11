import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { ActivatedRoute, Route } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  idNo!: number;
  userData !: User;
  
  constructor(private api : ServicesService,private activetRout : ActivatedRoute){}

  ngOnInit():void{

    this.activetRout.params.subscribe(res=>{
      this.idNo = res['id']
      this.fetchData(this.idNo)
    })
  
  }
  
  fetchData(id : number){
  
    this.api.getRegisterUserId(id)
    .subscribe(res=>{
      this.userData=res;
    })
  
  }

}
