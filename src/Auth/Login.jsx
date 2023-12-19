import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="px-96">
      <form>
        <div>
          <h1 className="text-3xl text-center text-black font-bold py-5">UrbanHaven</h1>
          <section className="border rounded-md border-gray-600 p-5 space-y-2">
            <h3 className="text-2xl font-semibold py-4">Sign in</h3>
            <div>
              <label className="font-bold">Email</label>
              <input
                id="hiddenBorderInput"
                type="email"
                className="border-b-2 border-transparent focus:outline-none focus:border-orange-500 border-b-orange-500 w-full py-2"
                placeholder="example@yahoo.com"
              />
            </div>
            <div>
              <label className="font-bold">Password</label>
              <input
                id="hiddenBorderInput"
                type="password"
                className="border-b-2 border-transparent focus:outline-none focus:border-orange-500 border-b-orange-500 w-full py-2"
                placeholder="**********"
              />
            </div>
            <div className="flex justify-center text-center items-center py-4">
              <button type="submit" className="border rounded-full bg-orange-600 text-white px-2 py-1 w-full mx-auto hover:text-green-600 font-bold text-xl">Continue</button>
            </div>
          </section>
          <div>
          <div className="divider divider-warning font-medium text-sm text-gray-400">New to UrbanHaven?</div>
          <div className="border border-gray-500 rounded-md px-1 text-center font-medium py-3">
            <Link to='/register'><h2>Create your UrbanHaven account</h2></Link>
          </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
