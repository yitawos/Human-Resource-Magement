import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import {NgToastService} from 'ng-angular-popup';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userForm !: FormGroup;
  idNo !: number;
  updateActive : boolean = false;


  constructor(private fb : FormBuilder,
    private activatedRout : ActivatedRoute,
    private rout : Router, 
    private api :ServicesService,
    private toast : NgToastService){}


 ngOnInit():void{

  this.userForm = this.fb.group({
    fristName:[''],
    lastName:[''],
    salery:[''],
    address:[''],
    email:[''],
    phone:[''],
    age:[''],
    study:[''],
    degree:[''],
    date:[''],
    gender:[''],
    employee:['']

  })

  this.activatedRout.params.subscribe(val=>{
    this.idNo=val['id']
    this.api.getRegisterUserId(this.idNo)
    .subscribe(res=>{
      this.updateActive=true;
      this.fillFormToUpdate(res)
    })

 })
 }
 submit(){
  this.api.postRegistration(this.userForm.value).subscribe(res=>{
    this.toast.success({detail:'Success',summary:"User data Insereted",duration:3000})
    this.userForm.reset();
  })
 }

 update(){

  this.api.updateRegisterUser(this.userForm.value,this.idNo)
  .subscribe(res=>{
  this.toast.success({detail:'Success',summary:"User data Updated",duration:3000})
  this.userForm.reset();
  this.rout.navigate(['employee'])
})
 }

 fillFormToUpdate(user:User){
  this.userForm.setValue({
  fristName : user.fristName,
   lastName : user.lastName,
      salery : user.salery,
    address : user.address,
      email : user.email,
      phone : user.phone,
        age : user.age,
      study : user.study,
     degree : user.degree,
     gender : user.gender,
       date : user.date,
   employee : user.employee

  })

}

}