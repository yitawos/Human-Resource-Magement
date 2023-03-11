import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from '../services/services.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from '../model/user.model';
/* 
import { NgToastService } from 'ng-angular-popup';
import { NgConfirmService } from 'ng-confirm-box';
*/

@Component({
  selector: 'app-view-salery',
  templateUrl: './view-salery.component.html',
  styleUrls: ['./view-salery.component.css']
})
export class ViewSaleryComponent {

  displayedColumns : string[] = ['id','fristName','email','degree','salery'];

  public dataSource !: MatTableDataSource<User>;
  public users !: User[];
  idNo !: number;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

 constructor(private api : ServicesService,
  private activatedRout:ActivatedRoute,
  private route:Router){}
  /* ,
  private confirm : NgConfirmService,
  private toast : NgToastService
  
  */

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
 


} 
