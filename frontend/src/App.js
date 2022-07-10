import { Link } from "react-router-dom";


function App() {
  return (
    <>

      <div className="flex gap-10 h-screen flex-col justify-center items-center">
        <Link
          to="/customers"
          className="bg-white text-center hover:bg-gray-100 text-gray-800 w-36 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Client List
        </Link>
        <Link
          to="/customers/create"
          className="bg-white text-center hover:bg-gray-100 text-gray-800 w-36 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Create Client
        </Link>
      </div>
    </>
  );
}

export default App;
