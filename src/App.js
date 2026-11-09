
import "./App.css";
import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    description:
      "Designed and developed a personal portfolio website to showcase my projects, technical skills, and development journey. Features a responsive interface, smooth navigation, and dedicated sections for projects and contact information.",
    Tech: ["React.js", "JavaScript", "HTML", "CSS"],
    live: "https://coderssaurabh.github.io/portfolio/",
    github: "https://github.com/codersSaurabh/portfolio",
  },
  {
    id: 2,
    name: "Hospital Management System",
    description:
      "Developed a full-stack web application that streamlines hospital operations such as patient management, appointment scheduling, and record handling. Helps administrators and doctors manage hospital data efficiently.",
    Tech: ["Django", "Python", "HTML", "CSS", "JavaScript", "SQLite"],
    live: "https://saurabh544.pythonanywhere.com/",
    github: "https://github.com/codersSaurabh/HMs",
  },
  {
    id: 3,
    name: "Library Management System",
    description:
      "Built an online library seat booking system that allows students to reserve seats for different study shifts. Includes OTP-based mobile verification and automated booking management to simplify seat allocation.",
    Tech: ["Django", "Python", "HTML", "CSS", "JavaScript", "SQLite"],
    live: "https://library-management-one-gules.vercel.app/",
    github: "https://github.com/codersSaurabh/Shiva-Kunj-Library-",
  },
  {
    id: 4,
    name: "E-Commerce Website",
    description:
      "Developed a full-stack e-commerce application that allows users to browse products, add items to their cart, place orders, and track purchases using a unique tracking ID. Includes category-based browsing and order management.",
    Tech: ["Python", "Django", "HTML", "CSS", "JavaScript", "SQLite"],
    live: "https://sumitcoder.pythonanywhere.com/",
    github: "https://github.com/codersSaurabh/E-commerce-website",
  },
  {
    id: 5,
    name: "RideMate",
    featured: true,
    description:
      "Developed a full-stack ride-sharing platform that connects travelers heading to nearby destinations such as colleges and railway stations to coordinate shared rides. Implemented secure authentication, ride creation and management, join requests, notifications, user profiles, and a review system. Integrated automated ride status updates and Cloudinary for profile image uploads.",
    Tech: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
    live: "https://ride-mate-client.vercel.app",
    github: "https://github.com/codersSaurabh/RideMate",
  },
];

const skillGroups = [
  {
    id: 1,
    category: "Frontend Development",
    icon: "🎨",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Responsive Design",
    ],
  },
  {
    id: 2,
    category: "Backend Development",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    id: 3,
    category: "Programming & DSA",
    icon: "💻",
    skills: ["Java","Python", "Data Structures & Algorithms", "Problem Solving"],
  },
  {
    id: 4,
    category: "Databases",
    icon: "🗄️",
    skills: ["MongoDB", "MySQL", "SQLite"],
  },
  {
    id: 5,
    category: "Tools & Deployment",
    icon: "🚀",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Render", "Cloudinary"],
  },
];

function App() {
  return (
    <div className="Container" id="home">
      <Navbar />
      <Hero />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

// ================= NAVBAR =================

function Navbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="Navbar">
      <div className="left">
        <a href="#home" onClick={() => setActive("home")}>
          <h3>Saurabh Pandey<span>.</span></h3>
        </a>
      </div>

      <div className="right">
        <ul>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={active === item.id ? "active" : ""}
            >
              <a
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// ================= HERO =================

function Hero() {
  return (
    <section className="hero">
      <Profile />
      <Intro />
    </section>
  );
}

function Profile() {
  return (
    <div className="profile">
      <img
        src={process.env.PUBLIC_URL + "/profile.png"}
        alt="Saurabh Pandey"
      />

      <h2>Saurabh Pandey</h2>

      <p className="role">MCA Student | Full Stack Developer</p>

      <p className="tagline">
        Building responsive and practical web applications with modern
        technologies.
      </p>

      <div className="icon">
        <a
          href="https://github.com/codersSaurabh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fa fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/saurabh-pandey-4bb192246"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fa fa-linkedin"></i>
        </a>

        <a
          href="https://leetcode.com/u/SaurabhPandey121/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
        >
          <i className="fa fa-code"></i>
        </a>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="Intro">
      <h4>Hi, I'm Saurabh 👋</h4>

      <h1>MCA Student & Full Stack Developer</h1>

      <p>
        I am an MCA student at NIT Agartala with a strong interest in
        software development and problem solving. I work with Java and
        Data Structures & Algorithms and build full-stack web
        applications using React, Node.js, Express.js, and MongoDB.
        I enjoy developing practical solutions and continuously
        improving my technical skills.
      </p>

      <div className="tech-stack">
        <span>Java</span>
        <span>DSA</span>
        <span>React.js</span>
        <span>Node.js</span>
        <span>Express.js</span>
        <span>MongoDB</span>
      </div>

      <div className="hero-buttons">
        <a href="#projects" className="btn primary">
          View Projects ↗
        </a>

        <a
          href={process.env.PUBLIC_URL + "/resume.pdf"}
          className="btn secondary"
          download
        >
          Download Resume ↓
        </a>
      </div>
    </div>
  );
}

// ================= SKILLS =================

function Skill() {
  return (
    <section className="skills" id="skills">
      <div className="section-heading">
        <span>WHAT I WORK WITH</span>
        <h2>Technical Skills</h2>
        <p>
          Technologies and tools I use to develop web applications
          and solve problems.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.id}>
            <div className="skill-heading">
              <span className="skill-icon">{group.icon}</span>
              <h3>{group.category}</h3>
            </div>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ================= PROJECTS =================

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-heading">
        <span>MY RECENT WORK</span>
        <h2>Featured Projects</h2>
        <p>
          Some applications I have designed and developed.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      className={`project-card ${
        project.featured ? "featured-project" : ""
      }`}
    >
      <div className="project-top">
        <span className="project-number">
          PROJECT / {String(project.id).padStart(2, "0")}
        </span>

        {project.featured && (
          <span className="featured-label">
            ⭐ Featured Project
          </span>
        )}
      </div>

      <div className="project-content">
        <h3>{project.name}</h3>

        <p>{project.description}</p>

        <div className="project-tech">
          {project.Tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      <div className="project-buttons">
        <a
          href={project.live}
          className="btn live"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo ↗
        </a>

        <a
          href={project.github}
          className="btn github"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </div>
    </div>
  );
}

// ================= CONTACT =================

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-heading">
        <span>GET IN TOUCH</span>
        <h2>Let's Connect</h2>
        <p>
          Feel free to reach out for opportunities, collaboration,
          or just a conversation.
        </p>
      </div>

      <div className="contact-box">
        <div className="contact-item">
          <span>✉️</span>
          <div>
            <h3>Email</h3>
            <a href="mailto:saurabh544321@gmail.com">
              saurabh544321@gmail.com
            </a>
          </div>
        </div>

        <div className="contact-item">
          <span>💻</span>
          <div>
            <h3>GitHub</h3>
            <a
              href="https://github.com/codersSaurabh"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/codersSaurabh
            </a>
          </div>
        </div>

        <div className="contact-item">
          <span>🔗</span>
          <div>
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/saurabh-pandey-4bb192246"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ================= FOOTER =================

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Saurabh Pandey. All rights reserved.</p>

      <a href="#home">Back to Top ↑</a>
    </footer>
  );
}

export default App;
