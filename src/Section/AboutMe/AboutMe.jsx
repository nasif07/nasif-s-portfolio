import Container from "../../components/Container";
import Title from "../../components/Title";
import profile from "../../assets/profile.jpeg"
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { VscDiffRenamed } from "react-icons/vsc";
import { IconButton } from "@material-tailwind/react";
const AboutMe = () => {
    return (
        <section id="about" className="bg-[#060606] pt-16 text-white pb-12">
            <Title first={"About"} last={"Me"}></Title>
            <Container>
                <div className="lg:flex justify-around items-center lg:py-16">
                    <div   data-aos="fade-right" data-aos-duration="1500" className="mx-auto flex items-center justify-center flex-1">
                        <img className="max-w-[450px] w-[200px] md:w-[450px] rounded-3xl" src={profile} alt="" />
                    </div>
                    <div   data-aos="fade-left" data-aos-duration="1000" className="space-y-3 flex-1">
                        <h5 className="md:text-[25px] pt-4 text-[#B1B1A2]">Know Me More</h5>
                        <h1 className="md:text-6xl text-4xl font-bold">I'm <span className="text-[#C9F31D]">Nasif</span> a MERN stack web Developer.</h1>
                        <p className="py-6 text-[#B1B1A2]">Hello, I'm Nasif, a dynamic and skilled web developer specializing in the MERN stack. With skilled in MongoDB, Express.js, React.js, and Node.js, I've successfully crafted responsive and feature-rich websites that blend functionality with a seamless user experience.</p>
                        <p className="md:text-[29px] text-lg font-semibold">More Info</p>
                        <div className="space-y-5">
                            <div className="flex gap-6 items-center">
                                <VscDiffRenamed className="text-[#C9F31D] text-3xl"></VscDiffRenamed>
                                <p className="text-[#B1B1A2] text-xl">Nasiful Islam Nasif</p>
                            </div>
                           
                            <div className="flex gap-6 items-center">
                                <MdOutlineEmail className="text-[#C9F31D] text-3xl"></MdOutlineEmail>
                                <p className="text-[#B1B1A2] text-xl">nasifulislamnasif23@gmail.com</p>
                            </div>
                            <div className="flex gap-6 items-center">
                                <FaPhone className="text-[#C9F31D] text-3xl"></FaPhone>
                                <p className="text-[#B1B1A2] text-xl">01849206410</p>
                            </div>
                            <div className="flex gap-6 items-center">
                                <FaLocationArrow className="text-[#C9F31D] text-3xl"></FaLocationArrow>
                                <p className="text-[#B1B1A2] text-xl">Chattogram, Bangladesh</p>
                            </div>
                        </div>
                        <div className="flex gap-4  md:pb-12 pt-3">
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
            </Container>
        </section>
    );
};

export default AboutMe;