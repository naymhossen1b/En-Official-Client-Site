import { Tabs } from "antd";
import UseProducts from "../../Hooks/UseProducts";
import OrderProduct from "./OrderProduct";

const { TabPane } = Tabs;

const Products = () => {
  const [products] = UseProducts();

  return (
    <div>
      <div>
        <Tabs defaultActiveKey="1" className="mb-20 space-y-5">
          <TabPane key="smartphones" tab="Smartphones">
            <OrderProduct
              items={products.filter((product) => product.subCategory === "smartphones")}
            />
          </TabPane>
          <TabPane key="Cameras" tab="Cameras" >
            <OrderProduct items={products.filter((product) => product.subCategory === "cameras")} />
          </TabPane>

          <TabPane key="headphones" tab="Headphones">
            <OrderProduct
              items={products.filter((product) => product.subCategory === "headphones")}
            />
          </TabPane>
          <TabPane key="laptops" tab="Laptops">
            <OrderProduct
              items={products.filter((product) => product.subCategory === "laptops")}
            />
          </TabPane>
          <TabPane key="mensclothing" tab="Mens Clothing">
            <OrderProduct
              items={products.filter((product) => product.subCategory === "mensclothing")}
            />
          </TabPane>
          <TabPane key="womensclothing" tab="Womans Clothing">
            <OrderProduct
              items={products.filter((product) => product.subCategory === "womensclothing")}
            />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Products;
