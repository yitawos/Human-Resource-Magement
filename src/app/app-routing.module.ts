import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { EmployeeComponent } from './employee/employee.component';
import { RegisterComponent } from './register/register.component';
import { ViewSaleryComponent } from './view-salery/view-salery.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
   
  {path:'', redirectTo:'view', pathMatch:'full'},
  {path:'view', component:ViewComponent},
  {path:'detail', component:DetailComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'salery',component:ViewSaleryComponent},
  {path:'register', component:RegisterComponent},
  {path:'salery', component:ViewSaleryComponent},
  {path:'detail/:id', component:DetailComponent},
  {path:'update/:id',component:RegisterComponent}
 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
