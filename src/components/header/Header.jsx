import { useState } from "react";
import Menu from "./Menu";
import { MdOutlineMenu } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";


const Header = () => {
    const [open, setOpen] = useState(false);

    const menuItems = [
        {id: 1, path: "/home", name: "Home"},
        {id: 2, path: "/about", name: "About"},
        {id: 3, path: "/services", name: "Services"},
        {id: 4, path: "/contact", name: "Contact"},
        {id: 5, path: "/blog", name: "Blog"}
      ];

    return (
        <div className='bg-slate-300'>
            <div className='md:hidden text-4xl' onClick={()=> setOpen(!open)}>
                {
                    open === true ? <TfiClose /> : <MdOutlineMenu className=''/>
                }
                
            </div>
            <ul className={`md:flex absolute  md:static duration-1000 bg-zinc-200 px-6 
            ${open ? 'top-9': '-top-60'}`}>
                {
                    menuItems.map(menu => <Menu  menu={menu} key={menu.id}></Menu>)
                }
            </ul>
        </div>
    );
};

export default Header;