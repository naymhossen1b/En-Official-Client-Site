// Products.js
import UseProducts from "../../Hooks/UseProducts";
import ProductTabs from "./ProductTabs";

const Products = () => {
  const [products] = UseProducts();

  const categories = [
    { label: "Smartphones", value: "smartphones" },
    { label: "Cameras", value: "cameras" },
    { label: "Headphones", value: "headphones" },
    { label: "Laptops", value: "laptops" },
    { label: "Mens Clothing", value: "mensclothing" },
    { label: "Womens Clothing", value: "womensclothing" },
  ];

  return (
    <div>
      <div>
        <ProductTabs products={products} categories={categories} />
      </div>
    </div>
  );
};

export default Products;
