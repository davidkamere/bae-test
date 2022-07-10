
function Client ({client}) {   
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 p-8 justify-items-center">
            
                <div className="col-span-1">
                    <img className="w-10 h-10 rounded-full" src={client.image} alt="Avatar"/>
                </div>
                <div className="col-span-1 place-self-center">
                    <p>{client.first_name} {client.last_name}</p>
                </div>
                
                
            </div>
        </>
    )
}

export default Client