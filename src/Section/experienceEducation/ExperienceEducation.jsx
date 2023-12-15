import { FaBook } from "react-icons/fa6";
import Container from "../../components/Container";
import Title from "../../components/Title";
import { MdDeveloperMode } from "react-icons/md";
const ExperienceEducation = () => {
    return (
        <div className="bg-[#060606] text-white">
            <Title first={"My"} last={"Backend"}></Title>
            <Container>
                <h1 className="text-center pb-14 text-2xl font-semibold">My Educational Background</h1>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                            <FaBook className="text-[#C9F31D] text-2xl m-3 mt-0"></FaBook>
                        </div>
                        <div className="timeline-start md:text-end mb-10 space-y-2.5 max-w-[450px]">
                            <time className="font-mono italic text-[#B1B1A2]">2020-Present</time>
                            <div className="text-[20px] font-medium text-[#C9F31D]">Diploma In Engineering</div>
                            <div className="lg:text-2xl md:text-[18px] font-black">Chattogram Polytechnic Institute</div>
                            <p className="text-[#B1B1A2]">Now I am student of Chattogram Polytechnic Institute. i am a student of electronics Department</p>
                            
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <FaBook className="text-[#C9F31D] text-2xl m-3"></FaBook>
                        </div>
                        <div className="timeline-end mb-10 space-y-2.5 max-w-[450px]">
                        <time className="font-mono italic text-[#B1B1A2]">2019-2020</time>
                            <div className="text-[20px] font-medium text-[#C9F31D]">SSC / Science</div>
                            <div className="lg:text-2xl md:text-[18px] font-black">Halishahar Alhaj Mohabbat Ali City Corp. High School</div>
                            <p className="text-[#B1B1A2]">I complete my SSC examination in 2020. in the school Chattogram. Halishahar Alhaj Mohabbat Ali City Corp. is a renowend school in Chattogram.</p>
                        </div>
                        <hr />
                    </li>
                </ul>
                <h1 className="text-center p-14 text-2xl font-semibold">My Experience</h1>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical lg:pb-16 md:pb-12 pb-6">
                    <li>
                        <div className="timeline-middle">
                            <MdDeveloperMode className="text-[#C9F31D] text-3xl m-3 mt-0"></MdDeveloperMode>
                        </div>
                        <div className="timeline-start md:text-end mb-10 space-y-2.5 max-w-[450px]">
                            <time className="font-mono italic text-[#B1B1A2]">2021-Present</time>
                            <div className="text-[20px] font-medium text-[#C9F31D]">Web Development</div>
                            <div className="lg:text-2xl md:text-[18px] font-black">2 year + self learning Experience</div>
                            <p className="text-[#B1B1A2]">I complete my full Stack Web Development Course from Programming Hero.</p>
                            
                        </div>
                        <hr />
                    </li>
                    </ul>
            </Container>
        </div>
    );
};

export default ExperienceEducation;