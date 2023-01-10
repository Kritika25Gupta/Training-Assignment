import { Component } from '@angular/core';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent {
  sno:number=0;
  name:string="";
  salary:number=0;

salArray:any[]=[{sno:1, name:"Sam", salary: 10000},
{sno:2, name:"Kate", salary: 51000},
{sno:3, name:"Hema", salary: 40000},
{sno:4, name:"Harry", salary: 30000},
{sno:5, name:"Cathy", salary: 60000},
{sno:6, name:"Sahil", salary: 70000},
{sno:7, name:"Lorry", salary: 5000},
{sno:8, name:"Kim", salary: 1000},
]
}