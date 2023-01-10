import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  public employeeArray:any[]=  []
  empno:any="";
  ename:string="";
  job:string="";
  sal:any="";
  deptno:any="";
  constructor (private httpObj: HttpClient){

  }
  getData_click():void
  {
    let url :string  = " http://localhost:3000/data";
    this.httpObj.get(url).subscribe(  (response:any)  =>  
    {
        // process the response 
        console.log(response);
        this.employeeArray = response;
    });
  }
  addData_click():void
  {
    let url :string  = "http://localhost:3000/data";

    let employeeObj:any =  {};
    employeeObj.empno = this.empno;
    employeeObj.ename = this.ename;
    employeeObj.job = this.job;
    employeeObj.sal = this.sal;
    employeeObj.deptno = this.deptno;
    this.httpObj.post(url, employeeObj).subscribe(  (response:any)  =>  
    {
      alert("New Student details are saved in server");
      this.getData_click();
    });
  }
}
