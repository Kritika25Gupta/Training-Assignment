import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

employee:any={empid:10256, empname:"Scott", empjob:"Manager", empdept:"10"};
}
