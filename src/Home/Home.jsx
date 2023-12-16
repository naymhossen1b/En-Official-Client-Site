import Discount from "../Components/Discount";
import Commitments from "../Pages/Commitments/Commitments";
import ExploreInterests from "../Pages/ExploreInterests/ExploreInterests";
import Slider from "../Shared/Header/Slider";
import PayLatter from "./PayLatter";
import TwistCategories from "./TwistCategories";

const Home = () => {
  return (
    <div>
      <div className="bg-orange-50 mb-20">
        <Slider />
        <Commitments />
        <Discount />
        <TwistCategories />
        <PayLatter />
      </div>
      <div>
        <ExploreInterests />
      </div>
    </div>
  );
};

export default Home;
