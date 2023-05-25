import { Button } from "components/Button";
import { NavLogo } from "components/Nav/NavLogo";
import { Link } from "react-router-dom";

export function Nav(){
    return(
    <nav className="w-full h-20 bg-gray-50 border-b border-gray-200">
       <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between">
        <NavLogo/>
        
        <Link to="/login">
        <Button variant="primary"> Login </Button>
        </Link>
       </div>
    </nav>
    ); 
}