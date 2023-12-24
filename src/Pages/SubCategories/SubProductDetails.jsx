import { useParams } from "react-router-dom";
import UseProducts from "../../Hooks/UseProducts";
import SubProductCard from "./SubproductCard";

const SubProductDetails = () => {
  const [products] = UseProducts();
  const { subName } = useParams();
  //   console.log("name==========>777777", subName)

  const allProducts = products?.filter((item) => item?.subCategory === subName);
  // console.log(allProducts);

  return (
    <div className="py-12">
      <div></div>
      <section className="grid grid-cols-9">
        <div className="col-span-2">
          <p>Category</p>
        </div>
        <div className="col-span-7 grid grid-cols-2 md:grid-cols-3 gap-5">
          {allProducts?.map((product) => (
            <SubProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SubProductDetails;
