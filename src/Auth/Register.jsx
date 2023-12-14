import toast from "react-hot-toast";
import UseAuth from "../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { googleJoin, userCreate, updateUser } = UseAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const uerInfo = { username, email, password}

    
  };

  const handleGoogle = async () => {
    await googleJoin();
    toast.success("User Account Create Success!");
    navigate("/");
  };

  return (
    <div>
      <form className="card-body" onSubmit={handleRegister}>
        <h2 className="text-2xl font-bold text-center">Create your own account</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="username"
            name="username"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="#######@yahoo.com"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <div href="#" className="label-text-alt link link-hover">
              Forgot password?
            </div>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
        <div>
          <button onClick={handleGoogle}>Google</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
