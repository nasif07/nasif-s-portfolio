import Container from "../../components/Container";
import Title from "../../components/Title";
import profile from "../../assets/profile.jpeg";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
} from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { VscDiffRenamed } from "react-icons/vsc";
import { IconButton } from "@material-tailwind/react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="bg-[#060606] pt-16 text-white pb-12">
      <Title first={"About"} last={"Me"} />
      <Container>
        <div className="lg:flex justify-around items-center lg:py-16">
          <motion.div
            className="mx-auto flex items-center justify-center flex-1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              className="max-w-[450px] w-[200px] md:w-[450px] rounded-3xl"
              src={profile}
              alt=""
            />
          </motion.div>

          <motion.div
            className="space-y-3 flex-1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h5 className="md:text-[25px] pt-4 text-[#B1B1A2]">Know Me More</h5>
            <h1 className="md:text-6xl text-4xl font-bold">
              I'm <span className="text-[#C9F31D]">Nasif</span> a MERN stack web Developer.
            </h1>
            <p className="py-6 text-[#B1B1A2]">
              A talented web developer with expertise in the MERN stack. I have
              experience in React.js, Next.js, Redux, Express.js, Node.js, and
              MongoDB. I have successfully created responsive, feature-rich
              websites that combine functionality with a smooth user experience
            </p>
            <p className="md:text-[29px] text-lg font-semibold">More Info</p>
            <div className="space-y-5">
              <div className="flex gap-6 items-center">
                <VscDiffRenamed className="text-[#C9F31D] text-3xl" />
                <p className="text-[#B1B1A2] text-xl">Nasiful Islam Nasif</p>
              </div>
              <div className="flex gap-6 items-center">
                <MdOutlineEmail className="text-[#C9F31D] text-3xl" />
                <p className="text-[#B1B1A2] text-xl">nasifulislamnasif23@gmail.com</p>
              </div>
              <div className="flex gap-6 items-center">
                <FaPhone className="text-[#C9F31D] text-3xl" />
                <p className="text-[#B1B1A2] text-xl">01849206410</p>
              </div>
              <div className="flex gap-6 items-center">
                <FaLocationArrow className="text-[#C9F31D] text-3xl" />
                <p className="text-[#B1B1A2] text-xl">Chattogram, Bangladesh</p>
              </div>
            </div>
            <div className="flex gap-4 md:pb-12 pt-3">
              <a href="mailto:nasifulislamnasif23@gmail.com">
                <IconButton className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20">
                  <FaGoogle className="text-lg" />
                </IconButton>
              </a>
              <a href="https://www.linkedin.com/in/nasiful-islam-nasif-6490b3286/">
                <IconButton className="rounded bg-[#1469C7] hover:shadow-[#1469C7]/20">
                  <FaLinkedin className="text-lg" />
                </IconButton>
              </a>
              <a href="https://github.com/nasif07">
                <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20">
                  <FaGithub className="text-lg" />
                </IconButton>
              </a>
              <a href="https://www.facebook.com/md.nsf.12/">
                <IconButton className="rounded bg-[#106AFF] hover:shadow-[#1469C7]/20">
                  <FaFacebook className="text-lg" />
                </IconButton>
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
