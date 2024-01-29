// import Banner from "../Banner/Banner";




const NavBar = () => {
    return (
        <div>
            <div className="drawer px-4 md:px-10 lg:px-[100px] fixed z-10 bg-black text-white bg-opacity-30">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar  max-w-[1600px] mx-auto">
                    <div className="flex-none md:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 text-xl md:text-2xl font-bold text-[#C9F31D]  max-w-[1600px] mx-auto">N.A.S.I.F</div>
                    <div className="flex-none hidden md:block">
                        <ul className="gap-7 menu-horizontal text-base font-semibold">
                            {/* Navbar menu content here */}
                            <li className="hover:text-[#C9F31D]"><a href="#home">Home</a></li>
                            <li className="hover:text-[#C9F31D]"><a href="#about">About</a></li>
                            <li className="hover:text-[#C9F31D]"><a href="#skill">Skills</a></li>
                            <li className="hover:text-[#C9F31D]"><a href="#backend">Backend</a></li>
                            <li className="hover:text-[#C9F31D]"><a href="#projects">Projects</a></li>
                            <li className="hover:text-[#C9F31D]"><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-78 min-h-full bg-black">
                    {/* Sidebar content here */}
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skill">Skills</a></li>
                    <li><a href="#backend">Backend</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default NavBar;