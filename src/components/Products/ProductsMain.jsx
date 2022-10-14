import Categories from "./Categories/Categories"
import ItemListContainer from "./Catalogue/ItemListContainer"
import "./products.css"
const ProductsMain = () => {
  return (
    <main className="productsMain">
        <Categories/>
        <ItemListContainer/>
    </main>
  )
}

export default ProductsMain