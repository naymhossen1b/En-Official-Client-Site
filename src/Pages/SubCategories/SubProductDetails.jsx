import { useParams } from "react-router-dom";
import UseProducts from "../../Hooks/UseProducts";

const SubProductDetails = () => {
  const [products] = UseProducts();
  const { subName } = useParams();
//   console.log("name==========>777777", subName)

  const foundObject = products?.find((item) => item?.subCategory === subName);
  console.log(foundObject);

  return (
    <div>
      <p>SubProductDetails</p>
    </div>
  );
};

export default SubProductDetails;
