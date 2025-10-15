import {ProductRow} from "./ProductRow"
import {ProductCategory} from "./ProductCategory"

export default function ({
     products,
     filteredProduct,     
     inStock}){
     const Rows = []
     let lastCategory = null

     products.forEach((product)=>{
          if(product.name.toLowerCase().indexOf(filteredProduct.toLowerCase()) === -1
          ){
               return;
          }
          if(inStock && !product.stocked){
               return;
          }
    if (product.category !== lastCategory) {
      Rows.push(
        <ProductCategory
          category={product.category}
          key={product.category} />
      );
    }
    Rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });
     return(
          <table>
               <thead>
                    <tr>
                         <td>Name</td>
                         <td>Price</td>
                    </tr>
               </thead>
               <tbody>
                    {Rows}
               </tbody>
          </table>
     )}