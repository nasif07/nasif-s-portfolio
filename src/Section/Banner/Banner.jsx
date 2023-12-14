import profile from '../../assets/profile.jpeg'
import bg from "../../assets/bannerBG.jpg";
import resume from "../../assets/Nasif's-resume.pdf";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { IconButton } from "@material-tailwind/react";
import PrimaryButton from "../../components/PrimaryButton";
const Banner = () => {
    const myStyle = {
        backgroundImage: `url(${bg})`,
        //     background- position: center;
        // background - repeat: no - repeat;
        // background - size: cover;
    //     backgroundSize: 'cover',
    // backgroundAttachment: 'fixed',

    }
    return (
        <>
            <div className="md:h-[100vh] bg-cover h-[70vh]" style={myStyle} >
                <div className="md:h-[100vh] h-[70vh]" style={{ backgroundColor: "rgba(0,0,0,0.80)" }}>
                    <div className="max-w-[1500px]  text-white flex items-center h-full ml-12 lg:ml-24">
                        <div className="space-y-5">
                            <h4 className="text-4xl font-bold">Hello I'm</h4>
                            <h1 className="text-3xl md:text-7xl font-bold text-[#C9F31D]">Nasiful Islam Nasif</h1>
                            <h1 className="text-3xl md:text-6xl font-bold">Web Developer</h1>
                            <p className="md:text-xl">Car dealerships may sell new cars from one or several manufacturers, <br /> as well as used cars.</p>
                            <div className="py-3">

                                <a target="new" href={resume} download><PrimaryButton>Download Resume</PrimaryButton></a>
                            </div>
                            <div className="flex gap-4">
                                <a target="_blank" href="/google.com">
                                    <IconButton className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
                                        <i className="fab fa-google text-lg" />
                                        <FaGoogle className="text-lg"></FaGoogle>

                                    </IconButton>
                                </a>
                                <IconButton className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
                                </IconButton>
                                <IconButton className="rounded bg-[#ea4c89] hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
                                </IconButton>
                                <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                                    <FaGithub className="text-lg"></FaGithub>
                                </IconButton>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* <Marquee className="bg-[#13141A] h-20">
                    <div className="text-white flex gap-28 font-medium">
                        <p>GET 30% OFFER ON TOYOTA CAR</p>
                        <p>TO GET YOUR DREAM CAR</p>
                        <p>234500 USED CARS AVAILABLE</p>
                        <p>Buy car and Buy happiness</p>
                        <p>GET 30% OFFER ON TOYOTA CAR</p>
                    </div>
                </Marquee> */}
            </div>
        </>
    );
};

export default Banner;