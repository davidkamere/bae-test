import { HomeIcon } from "@heroicons/react/outline"
import { Link } from "react-router-dom";

function Header () {
    return (
        <Link to={`/`}>
            <div className="flex justify-center mt-7 px-5">
                <HomeIcon className="w-7 h-7 hover:text-red-400"/>
            </div>
        </Link>
    )
}

export default Header