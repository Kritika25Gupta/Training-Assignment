function ProductsList(props)
{
    let prodArray=[{name:"Dell",category:"Laptop",price:180000},{name:"Dell",category:"",price:180000},
{name:"hp", category:"Laptop",price:45000},
{name:"asus", category:"Laptop", price:25000},
{name:"samsung", category:"Phone", price:70000},
{name:"Apple",category:"Phone",price:150000},
{name:"one plus",category:"Phone",price:28000}];
let emptyArray=[];
if(props.category=="")
{
    emptyArray=prodArray;
}
else if (props.category=="Laptop")
{
    emptyArray=prodArray.filter((item) => item.category=="Laptop" );
}
else if (props.category=="Phone")
{
    emptyArray=prodArray.filter((item) => item.category=="Phone" );
}
return(
    <>
    <ul>
    {emptyArray.map(item=><li>{item.name}</li>)}
    </ul>
    </>
)
}
export default ProductsList;