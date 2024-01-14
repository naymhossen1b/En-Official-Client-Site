/* eslint-disable react/prop-types */
// ProductTabs.js
import { Tabs } from "antd";
import OrderProduct from "./OrderProduct";

const { TabPane } = Tabs;

const ProductTabs = ({ products, categories }) => {
  return (
    <Tabs defaultActiveKey="1" className="mb-20 space-y-5">
      {categories.map((category, index) => (
        <TabPane key={index + 1} tab={category.label}>
          <OrderProduct items={products.filter((product) => product.subCategory === category.value)} />
        </TabPane>
      ))}
    </Tabs>
  );
};

export default ProductTabs;
