export function Search({
     inStock,
     setInStock,
     filteredProduct,
     setFilteredProduct
})

{
     return(
          <form>
               <input 
               value={filteredProduct}
               type="text"
               onChange={(e)=>setFilteredProduct(e.target.value)} /><br />
               <label>
               <input 
               checked = {inStock}
               onChange = {(e)=>setInStock(e.target.checked)}
               type="checkbox" />
               Only show products in stock
               </label>
          </form>
     )
}