import UseProducts from "../../Hooks/UseProducts";
import UseSubCategory from "../../Hooks/UseSubCategory";
import ProductTabs from "./ProductTabs";

const Products = () => {
  const [products] = UseProducts();
  const [subcategory] = UseSubCategory();
  return (
    <div>
      <div>
        <ProductTabs products={products} categories={subcategory} />
      </div>
    </div>
  );
};

export default Products;
