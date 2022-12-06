import { Component } from '@angular/core';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {

  
  empcode=""
  empname=""
  designation=""
  salary=""
  companyname=""
  mobile=""
  username=""
  password=""


  readValue=()=>
  {
    let data:any={"empcode":this.empcode,"empname":this.empname,"designation":this.designation,"salary":this.salary,"companyname":this.companyname,"mobile":this.mobile,"username":this.username,"password":this.password}
    console.log(data)

}
}