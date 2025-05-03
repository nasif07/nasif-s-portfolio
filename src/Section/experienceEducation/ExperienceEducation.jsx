import { useEffect, useState } from "react";
import { FaBook } from "react-icons/fa6";
import Container from "../../components/Container";
import Title from "../../components/Title";
import { MdDeveloperMode } from "react-icons/md";
import { motion } from "framer-motion"; // import motion from framer-motion

const ExperienceEducation = () => {
  return (
    <section id="backend" className="bg-[#060606] text-white">
      <Title first={"My"} last={"Backend"}></Title>
      <Container>
        <h1 className="text-center pb-14 text-2xl font-semibold">
          My Educational Background
        </h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {/* Educational Items */}
          <motion.li
            initial={{ opacity: 0, x: -50 }} // starts with slight opacity and move from left
            whileInView={{ opacity: 1, x: 0 }} // smooth transition to full opacity and reset x-axis
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="timeline-middle">
              <FaBook className="text-[#C9F31D] text-2xl m-3 mt-0"></FaBook>
            </div>
            <div className="timeline-end mb-10 space-y-2.5 max-w-[450px]">
              <time className="font-mono italic text-[#B1B1A2]">
                2025-Present
              </time>
              <div className="text-[20px] font-medium text-[#C9F31D]">
                BSc in Computer Science and Engineering
              </div>
              <div className="lg:text-2xl md:text-[18px] font-black">
                East Delta University
              </div>
              <p className="text-[#B1B1A2]">
                Currently pursuing a BSc in Computer Science and Engineering at
                East Delta University,
              </p>
            </div>
            <hr />
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: 50 }} // starts with slight opacity and move from right
            whileInView={{ opacity: 1, x: 0 }} // smooth transition to full opacity and reset x-axis
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="timeline-middle">
              <FaBook className="text-[#C9F31D] text-2xl m-3 mt-0"></FaBook>
            </div>
            <div className="timeline-start md:text-end mb-10 space-y-2.5 max-w-[450px]">
              <time className="font-mono italic text-[#B1B1A2]">2020-2024</time>
              <div className="text-[20px] font-medium text-[#C9F31D]">
                Diploma In Electronics Engineering
              </div>
              <div className="lg:text-2xl md:text-[18px] font-black">
                Chattogram Polytechnic Institute
              </div>
              <p className="text-[#B1B1A2]">
                I have completed my Diploma in Electronics from Chattogram
                Polytechnic Institute with a CGPA of 3.11 out of 4.00.
              </p>
            </div>
            <hr />
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: -50 }} // starts with slight opacity and move from left
            whileInView={{ opacity: 1, x: 0 }} // smooth transition to full opacity and reset x-axis
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <hr />
            <div className="timeline-middle">
              <FaBook className="text-[#C9F31D] text-2xl m-3"></FaBook>
            </div>
            <div className="timeline-end mb-10 space-y-2.5 max-w-[450px]">
              <time className="font-mono italic text-[#B1B1A2]">2019-2020</time>
              <div className="text-[20px] font-medium text-[#C9F31D]">
                SSC / Science
              </div>
              <div className="lg:text-2xl md:text-[18px] font-black">
                Halishahar Alhaj Mohabbat Ali City Corp. High School
              </div>
              <p className="text-[#B1B1A2]">
                Completed SSC in 2020 from Halishahar Alhaj Mohobbat Ali City
                Corporation High School with a GPA of 4.67 out of 5.00.
              </p>
            </div>
            <hr />
          </motion.li>
        </ul>

        <h1 className="text-center p-14 text-2xl font-semibold">
          My Experience
        </h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical lg:pb-16 md:pb-12 pb-6">
          <motion.li
            initial={{ opacity: 0, x: 50 }} // starts with slight opacity and move from right
            whileInView={{ opacity: 1, x: 0 }} // smooth transition to full opacity and reset x-axis
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="timeline-middle">
              <MdDeveloperMode className="text-[#C9F31D] text-3xl m-3 mt-0"></MdDeveloperMode>
            </div>
            <div className="timeline-start md:text-end mb-10 space-y-2.5 max-w-[450px]">
              <time className="font-mono italic text-[#B1B1A2]">
                2021-Present
              </time>
              <div className="text-[20px] font-medium text-[#C9F31D]">
                Web Development
              </div>
              <div className="lg:text-2xl md:text-[18px] font-black">
                2 year + self-learning Experience
              </div>
              <p className="text-[#B1B1A2]">
                I completed my full Stack Web Development Course from
                Programming Hero.
              </p>
            </div>
            <hr />
          </motion.li>
        </ul>
      </Container>
    </section>
  );
};

export default ExperienceEducation;
