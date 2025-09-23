import { motion } from "framer-motion"; // Importing framer-motion
import Container from "../../components/Container";
import Title from "../../components/Title";

const blogPosts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    description: "A beginner's guide to useState, useEffect, and custom hooks in React.",
    image: "https://i.ibb.co/QQWDBk4/pngwing-com-2.png",
    link: "#",
    date: "April 25, 2025"
  },
  {
    id: 2,
    title: "Deploying with Firebase Hosting",
    description: "Step-by-step instructions to deploy your frontend app on Firebase.",
    image: "https://i.ibb.co/hdfF1VZ/pngegg-3.png",
    link: "#",
    date: "April 20, 2025"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="bg-[#060606] pt-16 text-white pb-12">
      <Title first={"My"} last={"Blogs"} />
      <Container>
        <div className="flex justify-around items-center lg:py-16 flex-wrap gap-6">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }} // Initial state
              whileInView={{ opacity: 1, y: 0 }} // Final state
              transition={{ duration: 0.8, ease: "easeOut" }} // Animation properties
              viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the element is in view
              className="bg-[#121212] p-6 rounded-2xl max-w-md w-full shadow-lg hover:shadow-2xl transition-all"
            >
              <img
                src={post.image}
                alt={post.title}
                className="rounded-xl mb-4 h-60 w-60 mx-auto"
              />
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{post.date}</p>
              <p className="text-gray-300 mb-4">{post.description}</p>
              <a
                href={post.link}
                className="text-[#C9F31D] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blog;
