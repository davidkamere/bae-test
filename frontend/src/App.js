import { Link } from "react-router-dom";


function App() {
  return (
    <>
      <div className='flex justify-center mt-20 px-8  font-bold text-2xl'>Select an option below:</div>
      <div className="flex gap-10 m-32 flex-col justify-center items-center">
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
