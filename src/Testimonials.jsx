import { motion } from "framer-motion";
import "./Testimonials.css";

const reviews = [
  {
    name: "Travis Barker",
    role: "CEO, TechCorp",
    feedback:
      "This company provided outstanding IT support for our business. Their work in cloud computing and cybersecurity made a huge difference. The team was responsive and professional throughout the process. Highly recommended!",
  },
  {
    name: "Ethan Reynolds",
    role: "HR Manager, Innovate Solutions",
    feedback:
      "Their approach to software development is top-notch. They understood our business needs and provided an innovative solution. Communication was smooth, and deadlines were always met. A reliable IT partner!",
  },
  {
    name: "Sophia Müller",
    role: "Vice President, StartupHub",
    feedback:
      "We needed a custom software solution, and they delivered beyond expectations. Their developers are highly skilled and always open to feedback. The final product was smooth, user-friendly, and exactly what we wanted.",
  },
  {
    name: "Sam Bobley",
    role: "Founder, Optomi",
    feedback:
      "Exceptional service! The IT consultants were knowledgeable and helped us optimize our infrastructure. Our system runs faster and more efficiently now. We will definitely work with them again in the future.",
  },
  {
    name: "Olivia Carter",
    role: "CEO, Ocrolus",
    feedback:
      "We had an issue with our database management, and their team fixed it in no time. They also provided excellent training for our staff to prevent future issues. Very professional and great at what they do!",
  },
];

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2 className="reviews-heading">
        Here's what <span className="highlight">others</span> say about us
      </h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="review-card"
            key={index}
          >
            <p className="review-feedback">&quot;{review.feedback}&quot;</p>
            <h3 className="review-name">{review.name}</h3>
            <p className="review-role">{review.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;