import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { FormsModule } from '@angular/forms';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule  } from '@angular/common/http';
import { SearchEmpComponent } from './search-emp/search-emp.component';


const myRoute:Routes=[
  {
    path:"",
    component:AddEmpComponent
  },

  {
    path:"view",
    component:ViewEmpComponent
  },
  {
    path:"search",
    component:SearchEmpComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    ViewEmpComponent,
    NavigationComponent,
    SearchEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
