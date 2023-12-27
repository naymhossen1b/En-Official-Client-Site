import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import toast from "react-hot-toast";

const Account = () => {
  const { user, logOut } = UseAuth();
  // console.log("===========>", user)

  const handleLogout = () => {
    return logOut()
      .then(() => {})
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div>
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className=" m-1 flex items-center gap-1">
          <RxAvatar className="text-2xl" />
          Account
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[10] menu bg-orange-200 w-full font-bold p-3 text-black rounded-md"
        >
          {user?.email ? (
            <>
              <button onClick={() => handleLogout()}>
                <Link to="/login">Logout</Link>
              </button>
              <Link to="/dashboard">Dashboard</Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Account;
