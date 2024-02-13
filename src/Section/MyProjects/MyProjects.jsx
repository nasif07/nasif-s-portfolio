import { useState } from "react";
import project1 from "../../assets/car-shop-project.png"
import project2 from "../../assets/lobrary-project.png"
import project3 from "../../assets/pet-adoption-project.png"
import project4 from "../../assets/event-agency.png"
import Title from "../../components/Title";
import Container from "../../components/Container";
import { FaEye, FaGithub } from "react-icons/fa6";
const MyProjects = () => {
    const [isHovered, setHovered] = useState(false);
    const boxStyle = {
        background: "#000",
        backgroundPosition: isHovered ? "bottom" : "top",
        transition: "ease-in-out 5s",
        margin: "auto"

    }
    const box1style = {
        background: `url(${project1})`,
        backgroundSize: 'cover'

    }
    const box2style = {
        background: `url(${project2})`,
        backgroundSize: 'cover'
    }
    const box3style = {
        background: `url(${project3})`,
        backgroundSize: 'cover'
    }
    const box4style = {
        background: `url(${project4})`,
        backgroundSize: 'cover'
    }
    return (
        <section id="projects" className="bg-[#111111] ">
            <Title first={"My"} last={"Projects"}></Title>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto lg:py-20 md:py-14 py-6">
                    <div  data-aos-duration="700" data-aos="zoom-in">
                        <div
                            style={{ ...boxStyle, ...box1style, hover: { backgroundPosition: "top" } }}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            className="w-[280px] h-[260px] md:w-[480px] md:h-[400px]"
                        >

                        </div>
                        <div className="flex justify-around md:px-12 my-12">
                            <a target="_blank" href="https://dream-car-shop.web.app/"><button className="btn bg-[#C9F31D] border-0"><FaEye></FaEye>Live Link</button></a>
                            <a target="_blank" href="https://github.com/nasif07/dream-car-shop-client?tab=readme-ov-file"><button className="btn  bg-[#070707] border-1 text-white border-[#C9F31D]"><FaGithub></FaGithub>Client Code</button></a>
                            <a target="_blank" href="https://github.com/nasif07/dream-car-shop-server"><button className="btn hidden md:flex bg-[#C9F31D] border-0"><FaGithub></FaGithub>Server Code</button></a>
                        </div>
                    </div>
                    <div data-aos-duration="700" data-aos="zoom-in">
                        <div
                            style={{ ...boxStyle, ...box2style }}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            className="w-[280px] h-[260px] md:w-[480px] md:h-[400px]">

                        </div>
                        <div className="flex justify-around md:px-12 my-12">
                            <a target="_blank" href="https://knowledge-library-c3978.web.app/"><button className="btn bg-[#C9F31D] border-0"><FaEye></FaEye>Live Link</button></a>
                            <a target="_blank" href="https://github.com/nasif07/knowledge-library-client?tab=readme-ov-file"><button className="btn bg-[#070707] border-1 text-white border-[#C9F31D]"><FaGithub></FaGithub>Client Code</button></a>
                            <a target="_blank" href="https://github.com/nasif07/knowledge-library-server"><button className="btn hidden md:flex  bg-[#C9F31D] border-0"><FaGithub></FaGithub>Server Code</button></a>
                        </div>
                    </div>
                    <div data-aos-duration="700" data-aos="zoom-in">
                        <div
                            style={{ ...boxStyle, ...box3style }}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            className="w-[280px] h-[260px] md:w-[480px] md:h-[400px]">
                                
                        </div>
                        <div className="flex justify-around md:px-12 my-12">
                            <a target="_blank" href="https://paw-vista.web.app/"><button className="btn bg-[#C9F31D] border-0"><FaEye></FaEye>Live Link</button></a>
                            <a target="_blank" href="https://github.com/nasif07/paw-vista-pet-adoption-client"><button className="btn  bg-[#070707] border-1 text-white border-[#C9F31D]"><FaGithub></FaGithub>Client Code</button></a>
                            <a target="_blank" href="https://github.com/nasif07/paw-vista-pet-adoption-server"><button className="btn hidden md:flex  bg-[#C9F31D] border-0"><FaGithub></FaGithub>Server Code</button></a>
                        </div>
                    </div>
                    <div data-aos-duration="700" data-aos="zoom-in">
                        <div
                            style={{ ...boxStyle, ...box4style }}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            className="w-[280px] h-[260px] md:w-[480px] md:h-[400px]">

                        </div>
                        <div className="flex justify-around md:px-12 my-12">
                            <a target="_blank" href="https://event-agency-project.web.app/"><button className="btn bg-[#C9F31D] border-0"><FaEye></FaEye>Live Link</button></a>
                            <a target="_blank" href="https://github.com/nasif07/event-agency-project?tab=readme-ov-file"><button className="btn  bg-[#070707] border-1 text-white border-[#C9F31D]"><FaGithub></FaGithub>Client Code</button></a>
                            <a target="_blank" href=""><button className="btn hidden md:flex bg-[#C9F31D] border-0"><FaGithub></FaGithub>Server Code</button></a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default MyProjects;