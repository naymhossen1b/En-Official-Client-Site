import { Link } from "react-router-dom";
import { MdDashboard, MdAddBusiness } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import UseProducts from "../../Hooks/UseProducts";

const AdminMenus = () => {

  const [products] = UseProducts();

  return (
    <div>
      <div className="menu space-y-3 texc px-5">
        <Link className="flex items-center gap-8 font-medium" to="/dashboard">
          <MdDashboard className="text-3xl" />
          Dashboard
        </Link>
        <Link className="flex items-center gap-8 font-medium" to="/dashboard/users">
          <HiUserGroup className="text-3xl" />
          Users
        </Link>
        <Link className="flex items-center gap-8 font-medium" to="/dashboard/allModerator">
          <FaUser className="text-3xl" />
          Moderator
        </Link>
        <Link className="flex items-center gap-8 font-medium" to="/dashboard/addProduct">
          <MdAddBusiness className="text-3xl" />
          Add Product
        </Link>
        <Link className="flex items-center gap-8 font-medium" to="/dashboard/productList">
          <CiViewList className="text-3xl" />
          Product List ({products?.length})
        </Link>
      </div>
    </div>
  );
};

export default AdminMenus;
