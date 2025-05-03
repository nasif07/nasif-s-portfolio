import bg from "../../assets/bannerBG.jpg";
import resume from "../../assets/Nasiful-Islam-Nasif's-Resume.pdf";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa6";
import { IconButton } from "@material-tailwind/react";
import PrimaryButton from "../../components/PrimaryButton";
import ReactTyped from "react-typed";
import { motion } from "framer-motion";

const Banner = () => {
  const myStyle = {
    backgroundImage: `url(${bg})`,
  };

  return (
    <section
      id="home"
      className="md:h-[100vh] bg-cover h-[70vh] font-Space_Grotesk"
      style={myStyle}>
      <div
        className="md:h-[100vh] h-[100vh]"
        style={{ backgroundColor: "rgba(0,0,0,0.80)" }}>
        <div className="text-white max-w-[1600px] mx-auto px-4 md:px-10 flex items-center h-full">
          <motion.div
            className="md:space-y-5 space-y-1.5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h4
              className="md:text-4xl text-xl font-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello I'm
            </motion.h4>

            <motion.h1
              className="text-3xl md:text-7xl font-bold text-[#C9F31D]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              Nasiful Islam Nasif
            </motion.h1>

            <motion.div
              className="text-2xl md:text-6xl font-bold text-white pb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ReactTyped
                loop
                typeSpeed={80}
                backSpeed={90}
                strings={[
                  "MERN Developer",
                  "CSE student",
                  "Aspiring Software Engineer",
                ]}
                backDelay={1}
                showCursor
                cursorChar="|"
              />
            </motion.div>

            <motion.p
              className="md:text-xl max-w-[800px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              I am a MERN stack web developer and currently a Computer Science
              and Engineering (CSE) student, aspiring to become a software
              engineer.
            </motion.p>

            <motion.div
              className="py-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <a target="new" href={resume} download>
                <PrimaryButton>Download Resume</PrimaryButton>
              </a>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <a href="mailto:nasifulislamnasif23@gmail.com">
                <IconButton className="rounded bg-[#ea4335]">
                  <FaGoogle className="text-lg" />
                </IconButton>
              </a>
              <a href="https://www.linkedin.com/in/nasiful-islam-nasif-6490b3286/">
                <IconButton className="rounded bg-[#1469C7]">
                  <FaLinkedin className="text-lg" />
                </IconButton>
              </a>
              <a href="https://github.com/nasif07">
                <IconButton className="rounded bg-[#333333]">
                  <FaGithub className="text-lg" />
                </IconButton>
              </a>
              <a href="https://www.facebook.com/md.nsf.12/">
                <IconButton className="rounded bg-[#106AFF]">
                  <FaFacebook className="text-lg" />
                </IconButton>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
