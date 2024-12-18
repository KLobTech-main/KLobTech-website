import React from "react";
import "./Testimonials.css"; // Add styles in this file

const reviews = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    feedback:
      "The IT solutions provided by KLobTech have transformed our operations. Excellent service!",
  },
  {
    name: "Jane Smith",
    role: "HR Manager, Innovate Solutions",
    feedback:
      "Their recruitment services helped us find top talent quickly. Truly a reliable partner!",
  },
  {
    name: "Alice Brown",
    role: "Founder, StartupHub",
    feedback:
      "The IT solutions provided by KLobTech have transformed our operations. Excellent service!",
  },
  {
    name: "Alice Brown",
    role: "Founder, StartupHub",
    feedback:
      "The IT solutions provided by KLobTech have transformed our operations. Excellent service!",
  },
  {
    name: "Alice Brown",
    role: "Founder, StartupHub",
    feedback:
      "The IT solutions provided by KLobTech have transformed our operations. Excellent service!",
  },
];

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2 className="reviews-heading">
        Here's what <span style={{ color: "var(--accent-color)" }}>others</span>{" "}
        say about us
      </h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <p className="review-feedback">"{review.feedback}"</p>
            <h3 className="review-name">{review.name}</h3>
            <p className="review-role">{review.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
