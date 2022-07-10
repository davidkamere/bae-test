import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function ClientForm () {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState('')


    const handleSubmit = event => {
        event.preventDefault();
        const clientData = {
          'firstName': firstName,
          'lastName': lastName,
          'email': email,
          'gender': gender,
          'image': image,
        }
    
    
        axios.post("/api/clients/create", {...clientData} )
        .then((result) => {
            navigate(`/customers/`)
        })
    }
      

    return (
        <>
        <Header />
        <div>
            <div className='flex justify-center px-8 mt-10 font-bold text-2xl'>Fill the form below to add a new customer</div>
        </div>
        <form className="w-full max-w-lg mx-auto my-20" onSubmit={handleSubmit}>
            <div className="flex flex-wrap mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        First Name
                    </label>
                    <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    label="First Name"
                    required
                    />
                </div>

                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name">
                        Last Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name"
                    type="text" placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    label="Last Name"
                    required
                    />
                </div>

                </div>
                <div className="flex flex-wrap mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Email Address
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                            type="email"  placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                            label="Email"
                            required
                        />
                    </div>
                    
                    <div class="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Gender
                        </label>
                        <div className="relative">
                            <select onChange={(e) => setGender(e.target.value)} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
                                <option>Male</option>
                                <option>Female</option>
                                <option>I Prefer Not Say</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mx-3 mb-1">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-image">
                        Image
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-image" type="text"
                        placeholder="Image link"
                        label="Image"
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </div>
            </div>
            <button type="submit" className="inline-flex items-center ml-6 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                SUBMIT
            </button>
         
        </form>
        </>
    )
}

export default ClientForm