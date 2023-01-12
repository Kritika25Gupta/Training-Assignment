import axios from 'axios';
import { useState } from 'react';

function Products() { 
    const [productsArray, setProducts] = useState([]);
    function  getProducts_click()
    {
        let url = "https://fakestoreapi.com/products";
        axios.get(url).then( resData => 
        {
           setProducts(resData.data);
        });
    }
    let result =  productsArray.map(item =>
        <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td>{item.category}</td>
            <td><img src={item.image}></img></td>
        </tr>);
  return (    
      <> 
        <input type="button" className="btn btn-primary" value="Get Customers" onClick={getProducts_click} />
        <br/><br/>
        <table className="table" border="2"> 
             <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Image</th>
              </tr>
              </thead>
              <tbody>
                {result}  
              </tbody>               
            </table> 
      </>   
  );
}
export default Products;