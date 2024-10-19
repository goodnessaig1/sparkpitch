import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const AboutPage = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="w-full flex items-center justify-center mb-20">
        <div className="w-full lg:max-w-[800px]  px-4 lg:px-20 mt-6">
          <h3 className="text-purple-800 text-lg lg:text-2xl font-semibold text-center py-6">
            Welcome to Sparkpitch
          </h3>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              <strong>Desmond Jordan</strong>, the founder and primary voice
              behind this blog, is a passionate <strong>web developer</strong>{" "}
              with a love for <em>digital innovation and technology</em>. With
              over <strong>6</strong> years of experience in{" "}
              <strong>web development</strong>, I started SparkPitch to share my
              knowledge, experiences, and insights with a wider audience.
            </p>
            <p className="text-gray-600">
              What started as a personal project has grown into a community of
              like-minded individuals interested in staying ahead of trends in
              the tech world, with a focus on user experience, frontend
              development, and emerging technologies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              What We Write About
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Frontend Development</strong> – Deep dives into React,
                Vue.js, and the latest frontend tools.
              </li>
              <li>
                <strong>User Experience Design</strong> – Practical tips and
                tutorials about creating seamless, engaging digital experiences.
              </li>
              <li>
                <strong>Technology Insights</strong> – Personal stories, trends,
                and insights about the evolving tech landscape.
              </li>
            </ul>
            <p className="text-gray-600 mt-4">
              We publish new content weekly to keep you informed and inspired.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4">
              At <strong>SparkPitch</strong>, we believe in the power of
              education and innovation. Our mission is to create content that is
              not only informative but also actionable—helping you stay at the
              forefront of technology and improving your skills as a developer
              or designer.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Education</strong> – Sharing knowledge to empower
                individuals in the tech industry.
              </li>
              <li>
                <strong>Community</strong> – Fostering discussions and building
                a network of like-minded professionals.
              </li>
              <li>
                <strong>Innovation</strong> – Providing fresh, forward-thinking
                content that keeps you ahead of the curve.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Let’s Connect
            </h2>
            <p className="text-gray-600">
              I love engaging with readers and building a community. If you want
              to get in touch, feel free to{" "}
              <a
                href="mailto:contact@sparkpitch.com"
                className="text-blue-500 underline"
              >
                contact me
              </a>
              , leave a comment, or follow us on social media.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Fun Fact
            </h2>
            <p className="text-gray-600">
              When I’m not blogging, I’m usually tinkering with the latest tech
              gadgets or exploring new digital design tools.
            </p>
          </section>
          <div className="text-center text-gray-500 mt-10">
            <p>
              Thank you for visiting SparkPitch! I hope you find something here
              that inspires you.
            </p>
            <p>
              <strong>Desmond Jordan</strong>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
