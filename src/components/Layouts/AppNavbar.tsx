import { Link } from "react-router-dom";
import Hamburger from "../../assets/icons/hamburger.svg?react";
import AppButton from "../Form/AppButton";

const navLinks = [
  { label: "Find Food", to: "/find-food" },
  { label: "Catagories", to: "/catagories" },
  { label: "Restaurent", to: "/restaurent" },
  { label: "About Us", to: "/about-us" },
];

const AppNavbar = () => {
   return (
      <header className="fixed border-4 w-full flex justify-between">
         <div className="flex bg-white justify-start items-center gap-3 p-3">
            <div>
               <Hamburger />
            </div>
            <h1 className="text-[#F50000] font-bold text-3xl">cateringKu.</h1>
         </div>

         <nav>
            <ul className="flex gap-7 items-center h-full">
               {navLinks.map((link) => (
                  <li key={link.to}>
                     <Link
                     to={link.to}
                     className="text-[#242323] text-base font-semibold"
                     >
                     {link.label}
                     </Link>
                  </li>
               ))}
               <span className="text-[#F50000] font-semibold">+88012345678</span>
            </ul>
         </nav>

         <div className="flex items-center justify-center">
            <AppButton 
               label="Login"
            />
         </div>
      </header>
   )
}

export default AppNavbar;