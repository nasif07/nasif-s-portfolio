// import profile from '../../assets/profile.jpeg'
import bg from "../../assets/bannerBG.jpg";
import resume from "../../assets/Nasif's-resume.pdf";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa6";
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
            <section id='home' className="md:h-[100vh] bg-cover h-[70vh]" style={myStyle} >
                <div className="md:h-[100vh] h-[70vh]" style={{ backgroundColor: "rgba(0,0,0,0.80)" }}>
                    <div className="max-w-[1500px]  text-white flex items-center h-full ml-12 lg:ml-24">
                        <div className="md:space-y-5 space-y-1.5">
                            <h4 className="text-4xl font-bold">Hello I'm</h4>
                            <h1 className="text-3xl md:text-7xl font-bold text-[#C9F31D]">Nasiful Islam Nasif</h1>
                            <h1 className="text-3xl md:text-6xl font-bold">Web Developer</h1>
                            <p className="md:text-xl">Experienced MERN Stack Developer: Crafting Innovative and Scalable <br /> Web Solutions with MongoDB, Express.js, React, and Node.js</p>
                            <div className="py-3">

                                <a target="new" href={resume} download><PrimaryButton>Download Resume</PrimaryButton></a>
                            </div>
                            <div className="flex gap-4">
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

                        </div>
                    </div>
                </div>
            </section>
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