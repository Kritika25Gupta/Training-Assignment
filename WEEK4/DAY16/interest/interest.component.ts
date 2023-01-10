import { Component } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent {
  pa:any = "";
  air:any = "";
  p:number = 0;
  result1:number=0;
  result:number=0;
  amount:number=0;
  public loginButton_click():void{
    this.result1=this.pa*this.air*this.p;
    this.result=this.result1/100;
    this.amount=this.pa+this.result;
  }
}
