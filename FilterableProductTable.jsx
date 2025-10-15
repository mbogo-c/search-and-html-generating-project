import { useState } from "react";
import { Search } from "./Search";
import { ProductTable } from "./ProductTable";

export default function FilterableProductTable(){
     const [filteredProduct,setFilteredProduct] = useState("")
     const [inStock,setInStock] = useState(false) 
   

const products = [
{category: "Fruits", price: "$1", stocked: true, name: "Apple"},
{category: "Fruits", price: "$1", stocked: true, name: "Dragon fruit"},
{category: "Fruits", price: "$2", stocked: false, name: "Passion fruit"},
{category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
{category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
{category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

     return (
          <div>
               <title>this is a product page</title>
               <Search 
               inStock= {inStock}
               setInStock = {setInStock}
               filteredProduct ={filteredProduct}
               setFilteredProduct ={setFilteredProduct}
               />
               <ProductTable
                    inStock =  {inStock}
                    filteredProduct={filteredProduct}
                    products={products}
                />
               </div>            
)}