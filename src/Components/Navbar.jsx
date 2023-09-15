import { useState } from 'react';
import logo from '../assets/logo.png';
import { GrLanguage, GrMenu, GrClose } from "react-icons/gr";
const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const ToggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }
    const NavItems = [
        { link: "Overview", path: "Overview" },
        { link: "Features", path: "Features" },
        { link: "About", path: "About" },
        { link: "Pricing", path: "Pricing" },
    ]
    return (
        <>
            <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-first fixed top-0 right-0 left-0">
                <div className='text-lg container mx-auto flex items-center justify-between font-medium'>
                    <div className='flex space-x-14 items-center'>
                        <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-first'> <img src={logo} alt="Img" /> <span> XYZ</span> </a>


                        {/*  Navbar  */}
                        <ul className='md:flex space-x-12 hidden'>
                            {
                                NavItems.map((item) => {
                                    return <a href={item.path} key={item.link} className='block hover:text-gray-300'> {item.link} </a>
                                })
                            }
                        </ul>
                    </div>

                    {/*  sign up  */}
                    <div className="space-x-12 hidden md:flex items-center">
                        <a href="/" className='hidden lg:flex items-center hover:text-sec'><GrLanguage className='mr-2' /> <span>   Language</span> </a>
                        <button className="bg-sec py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-700">Sign up </button>
                    </div>

                    {/*  Menu icon  */}
                    <div className="md:hidden">
                        <button onClick={ToggleMenu} className='text-white focus:outline-none focus:text-gray-300 text-lg'>
                            {
                                isMenuOpen == true ? <GrMenu className='w-6 h-6  text-first' /> : <GrClose className='w-6 h-6 text-first ' />
                            }

                        </button>
                    </div>
                </div>
            </nav>

            {/*  Navitems for mobile devices */}
            <div className={`md:hidden space-y-4 px-4 pt-32 bg-sec  ${isMenuOpen ? "block fixed right-0 left-0 top-0" : "hidden"} `}>
                {
                    NavItems.map((item) => {
                        return <a href={item.path} key={item.link} className='block hover:text-gray-300'> {item.link} </a>
                    })
                }
            </div>

        </>
    )
}

export default Navbar