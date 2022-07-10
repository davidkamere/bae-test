import { useNavigate } from "react-router-dom"
import { useState, useEffect  } from 'react'
import Client from './Client'
import axios from "axios"
import { Link } from "react-router-dom";
import Header from "./Header";

function Clients() {
    const [clients, setClients] = useState(null);
    let navigate = useNavigate();

    // gets all clients from backend
    useEffect(() => {
        axios.get("/api/clients")
        .then((res) => setClients(res.data));
    }, []);



    return (
        <>
            <Header />
            <div className='flex justify-center mt-10 px-8  font-bold text-2xl'>Select a customer below to see more details</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
                
                {!clients ? "Loading..." : (
                    clients.map(client => (
                        <div
                            key={client.id}
                            className="border shadow m-5 hover:bg-slate-200"
                            onClick={() => navigate(`/customers/${client.id}`)}
                            >
                            <Client client={client}/>
                        </div>
                    ))
                )}
                <Link to={`/customers/create`}>
                    <div className="border shadow p-8 m-5 text-white bg-slate-900 text-center ">
                        Add New Customer
                    </div>
                </Link>        
            </div>
            
        </>
    );

}

export default Clients