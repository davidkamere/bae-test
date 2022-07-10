import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function  ClientDetails() {
    const [client, setClient] = useState(null);
    const navigate = useNavigate();
    const params = useParams();

    // gets specific client
    useEffect(() => {
        axios.get(`/api/clients/${params.id}`)
        .then((res) => setClient(res.data));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`/api/clients/${id}`).then(
            navigate(`/customers/`)
        )
    }


    return (
        <>
        <Header />
        {client ?
        <div className="flex flex-col gap-2 justify-center items-center mt-32">
            <img className="w-14 h-14 rounded-full" src={client.image} alt="Avatar"/>
            <div className="mt-2">
                <span className="text-slate-400">Name: </span>
                {client.first_name} {client.last_name}
            </div>
            <div>
                <span className="text-slate-400">Gender: </span>
                {client.gender}
            </div>
            <div>
                <span className="text-slate-400">Email: </span>
                {client.email}
            </div>
            <div onClick={() => handleDelete(client.id)} className="col-span-1 place-self-center bg-red-300 text-center hover:bg-gray-300 text-gray-800 w-28 font-semibold mt-4 py-2 px-4 border border-gray-400 rounded shadow">Delete</div>
        </div> :
        <div className="flex flex-col justify-center items-center h-screen">
            Loading ...
        </div>}
        </>
    )
}

export default ClientDetails