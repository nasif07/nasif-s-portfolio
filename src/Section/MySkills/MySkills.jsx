import { useEffect, useState } from "react";
import Title from "../../components/Title";
import Container from "../../components/Container";

const MySkills = () => {
    const [skills, setSkills] = useState([])
    useEffect(() => {
        fetch('mySkills.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, []);



    return (
        <section id="skill" className=" bg-[#111]">
            <Title first={"My"} last={"Skills"} description={"Let’s Explore Popular Skills & Experience"}></Title>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-20">
                    {skills.map(skill => <div data-aos-duration="700" data-aos="zoom-in" key={skill.skillName} className="card  overflow-hidden hover:scale-105 transition-all duration-200 ease-in-out border-[#C9F31D] h-[300px] card-compact bg-[#1F1F1F] shadow-xl relative
                    ">
                        <div className="flex justify-center items-center h-[150px] "><img className="max-w-[150px] max-h-[250px]" src={skill.logo} alt="Shoes" /></div>
                        <div className="card-body">
                            <h2 className="card-title flex items-center justify-center text-white">{skill.skillName}</h2>
                            <div className="card-actions justify-end">
                                <button className="btn border-0 hover:bg-black text-[#656565] text-xl bg-[#070707] absolute right-[10px] left-[10px] bottom-5">{skill.percentage}%</button>
                            </div>
                        </div>
                    </div>)}
                </div>
            </Container>
        </section>
    );
};

export default MySkills;

