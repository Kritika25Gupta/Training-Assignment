import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  id:number = 0;
  name:string = "";
  price:number=0;
  category:string = "";
  quantity:number=0;
  getDetails:boolean=true;
  productsArray:any[] = [
  {id:1 , name:"Prd1" ,  price:1000 , category:"cat1" , quantity:1 } ,
  {id:2 , name:"Prd2" ,  price:2000 , category:"cat2" , quantity:2 } ,
  {id:3 , name:"Prd3" ,  price:3000 , category:"cat3" , quantity:3 } ,
  {id:4 , name:"Prd4" ,  price:4000 , category:"cat4" , quantity:4 } ,
  {id:5 , name:"Prd5" ,  price:5000 , category:"cat5" , quantity:5 }
  ];
  getProduct_click():void
  {
   this.getDetails = false;
  }
  addProduct_click():void
  {
   let obj:any={};
   obj.id = this.id;
   obj.name = this.name;
   obj.price = this.price;
   obj.category = this.category;
   obj.quantity = this.quantity;
   this.productsArray.push(obj);
  }
  updateProduct_click():void
  {
   let obj1:any=this.productsArray.find(item => item.id == this.id);
   obj1.name = this.name;
   obj1.price = this.price;
   obj1.category = this.category;
   obj1.quantity = this.quantity;
  }
  reset_click()
  {
   let x = this.productsArray.length
   for(let i=0;i<x;i++)
   {
    this.productsArray.pop();
   }
  }
  update(pid:number):void
  {
   let index:number = this.productsArray.findIndex( (item) => item.id == pid);
   this.productsArray[index].id=this.id;
   this.productsArray[index].name=this.name;
   this.productsArray[index].price=this.price;
   this.productsArray[index].category=this.category;
   this.productsArray[index].quantity=this.quantity;
  }
  delete(pid:number):void
  {
   let index:number = this.productsArray.findIndex( (item) => item.id == pid);
   this.productsArray.splice(index,1);  
  } 
}
