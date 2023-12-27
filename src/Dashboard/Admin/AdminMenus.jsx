import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";

const AdminMenus = () => {
  return (
    <div>
      <div className="menu space-y-3 texc px-5">
        <Link className="flex items-center gap-3 font-medium" to="/dashboard">
          <MdDashboard className="text-3xl" />
          Dashboard
        </Link>
        <Link className="flex items-center gap-3 font-medium" to="/dashboard/users">
          <HiUserGroup className="text-3xl" />
          Users
        </Link>
        <Link className="flex items-center gap-3 font-medium" to="/dashboard/allModerator">
          <FaUser className="text-3xl" />
          Moderator
        </Link>
      </div>
    </div>
  );
};

export default AdminMenus;
