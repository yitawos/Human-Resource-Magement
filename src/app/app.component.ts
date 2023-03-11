import { Component, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HR';
  
  @ViewChild(MatSidenav) SideNav!:MatSidenav;

  constructor(private obs : BreakpointObserver){}
ngAfterViewInit(){
  this.obs.observe(['(max-width:800px']).subscribe(res=>{
    if(res.matches){
      this.SideNav.mode='over'
      this.SideNav.close();
    }else{
      this.SideNav.mode='side'
      this.SideNav.open();
    }
  })
}

  
}
