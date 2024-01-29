import { IconButton } from "@material-tailwind/react";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-neutral-content font-Space_Grotesk md:flex justify-between items-center">
            <aside>
                <p className="">Nasiful Islam Nasif</p>
                <p>Copyright © 2024 - All right reserved by Nasif's</p>
            </aside>
            <nav>
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4">
                    <a href="mailto:nasifulislamnasif23@gmail.com">
                        <IconButton className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
                            <i className="fab fa-google text-lg" />
                            <FaGoogle className="text-lg"></FaGoogle>

                        </IconButton>
                    </a>
                    <a href="https://www.linkedin.com/in/nasiful-islam-nasif-6490b3286/">
                        <IconButton className="rounded bg-[#1469C7] hover:shadow-[#1469C7]/20 focus:shadow-[#1469C7]/20 active:shadow-[#1469C7]/10">
                            <i className="fab fa-google text-lg" />
                            <FaLinkedin className="text-lg"></FaLinkedin>

                        </IconButton>
                    </a>

                    <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                        <a href="https://github.com/nasif07"><FaGithub className="text-lg"></FaGithub></a>
                    </IconButton>
                    <a href="https://www.facebook.com/md.nsf.12/">
                        <IconButton className="rounded bg-[#106AFF] hover:shadow-[#1469C7]/20 focus:shadow-[#1469C7]/20 active:shadow-[#1469C7]/10">
                            <i className="fab fa-google text-lg" />
                            <FaFacebook className="text-lg"></FaFacebook>
                        </IconButton>
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;


