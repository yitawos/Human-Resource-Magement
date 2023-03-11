import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from '../services/services.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from '../model/user.model';
import { NgToastService } from 'ng-angular-popup';
import { NgConfirmService } from 'ng-confirm-box';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  displayedColumns : string[] = ['id', 'fristName','email','study','degree','employee','action'];

  public dataSource !: MatTableDataSource<User>;
  public users !: User[];
  idNo !: number;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

 constructor(private api : ServicesService,
  private activatedRout:ActivatedRoute,
  private route:Router,
  private confirm : NgConfirmService,
  private toast : NgToastService){}
  
 ngOnInit():void{
  this.getAllRegisterUser();
 }

  getAllRegisterUser(){
  
     this.api.getRegisterUser()
     .subscribe(res=>{
      this.users = res;
      this.dataSource = new MatTableDataSource(this.users)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
     })
      
  
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
  edit(id:number){

    this.route.navigate(['update',id]) 
  }

  delete(id:number, name:string, fname:string){
    this.api.deleteRegisterUser(id)
    this.confirm.showConfirm(`Are you Sure you went to delete User" ${name} ${fname} "`,()=>{
      this.api.deleteRegisterUser(id)
      .subscribe((res)=>{
        this.toast.success({detail:'Success',summary:"User data Deleted",duration:3000})
        this.getAllRegisterUser(); 
      })
    },
    ()=>{

    }
    )
    
  }
    
  


}
