import { FaLocationArrow, FaMessage, FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import Container from "../../components/Container";
import Title from "../../components/Title";

const ContactMe = () => {
    return (
        <section id="contact" className="bg-[#060606] text-white">
            <Title first={"Contact"} last={"Me"}></Title>
            <div className="hero min-h-screen ">
                {/* <Title first={"My"} last={"Skills"} description={"Let’s Explore Popular Skills & Experience"}></Title> */}

                <Container>
                    <div className="lg:flex gap-4">
                        <div   data-aos="fade-up" data-aos-duration="1000" className="flex-1 space-y-3">
                            <h5 className="text-[25px] text-[#B1B1A2]">Get In Touch</h5>
                            <h1 className="md:text-6xl text-4xl font-bold">Let’s Talk For your <br /> <span className="text-[#C9F31D]">Next Projects</span></h1>
                            <p className="py-6 text-[#B1B1A2]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <p className="text-[29px] font-semibold">More Info</p>
                            <div className="space-y-5">
                                <div className="flex gap-6 items-center">
                                    <FaLocationArrow className="text-[#C9F31D] text-3xl"></FaLocationArrow>
                                    <p className="text-[#B1B1A2] text-xl">Chattogram, Bangladesh</p>
                                </div>
                                <div className="flex gap-6 items-center">
                                    <MdOutlineEmail className="text-[#C9F31D] text-3xl"></MdOutlineEmail>
                                    <p className="text-[#B1B1A2] text-xl">nasifulislamnasif23@gmail.com</p>
                                </div>
                                <div className="flex gap-6 pb-6 items-center md:pb-6">
                                    <FaPhone className="text-[#C9F31D] text-3xl"></FaPhone>
                                    <p className="text-[#B1B1A2] text-xl">01849206410</p>
                                </div>
                            </div>
                        </div>
                        <div   data-aos="fade-up" data-aos-duration="1000" className="bg-[#1F1F1F] p-8 rounded-3xl flex-1 mb-12">
                            <div className="lg:flex gap-6 pb-6">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-xl pb-3 text-white">What is your name? <span className="text-[25px] text-[#C9F31D]">*</span></span>
                                    </div>
                                    <input type="text" placeholder="Write Your Full Name" className="input rounded-xl input-bordered w-full  md:input-lg bg-[#2F2F2F]" />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-xl pb-3 text-white">Email Address  <span className="text-[25px] text-[#C9F31D]">*</span></span>
                                    </div>
                                    <input type="text" placeholder="Type Your Email" className="input rounded-xl input-bordered w-full  md:input-lg bg-[#2F2F2F]" />
                                </label>
                            </div>
                            <div className="lg:flex gap-6  pb-6">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-xl pb-3 text-white">Phone Number <span className="text-[25px] text-[#C9F31D]">*</span></span>
                                    </div>
                                    <input type="text" placeholder="Type Your Number" className="input rounded-xl input-bordered w-full  md:input-lg bg-[#2F2F2F]" />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-xl pb-3 text-white">Subject <span className="text-[25px] text-[#C9F31D]">*</span></span>
                                    </div>
                                    <input type="text" placeholder="I would like to discussed" className="input rounded-xl input-bordered w-full  md:input-lg bg-[#2F2F2F]" />
                                </label>
                            </div>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text text-xl pb-3 text-white">Textarea  <span className="text-[25px] text-[#C9F31D]">*</span></span>
                                </div>
                                <textarea className="textarea textarea-bordered h-32 rounded-xl bg-[#2F2F2F]" placeholder="Write Message..."></textarea>
                            </label>
                            <div className="mt-12">
                                <button className="btn bg-[#C9F31D] border-0 text-black text-[19px] font-medium px-7"> <FaMessage></FaMessage> Send Me Message</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default ContactMe;



{/* */ }