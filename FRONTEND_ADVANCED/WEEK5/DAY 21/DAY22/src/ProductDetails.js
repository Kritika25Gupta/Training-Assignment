import {useState}  from 'react';
function Calculate() { 
    const[prodname, setProdname]  = useState("");
    const[prodprice, setProdprice]  = useState("");
    const[prodquant, setProdquant] = useState("");
    const [result,  setResult] =  useState("");
    const [name,  setName] =  useState("");
    function  prodnameChange(event)
    {
        setProdname(event.target.value);
    }
    function  prodpriceChange(event)
    {
        setProdprice(event.target.value);
    }
    function prodquantChange(event)
    {
        setProdquant(event.target.value);
    }
    function  CalculateClick()
    {    setName(prodname);
         setResult(prodprice*prodquant);
    } 
return(
    <div>
        Product Name: <input type="text" onChange={prodnameChange}/>
        <br/><br/>
        Unit Price: <input type="number" onChange={prodpriceChange}/>
        <br/><br/>
        Quantitiy: <input type="number" onChange={prodquantChange}/>
        <br/><br/>
        <input type="button"  value="Calculate"  onClick={CalculateClick}  />
        <h1>Product name:{name}</h1> 
        <h1>Total: {result}</h1>
    </div>
)
}
export default Calculate;