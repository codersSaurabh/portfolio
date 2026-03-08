import './App.css';

import {useState} from "react";
const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    description: `Designed and developed a personal portfolio website to showcase my projects, 
    skills, and development experience. The website provides an interactive interface where 
    visitors can explore my work, learn about my technical skills, and contact me easily. 
    It features
     a responsive layout and modern UI to ensure a smooth experience across different devices.`,

Tech: `React.js, JavaScript, HTML, CSS`,
    github: "https://github.com/yourusername/portfolio"
  },
  {
    id: 2,
    name: "Hospital Management System",
    description: `Developed a full-stack web application that streamlines hospital operations such
     as patient management, appointment scheduling, and record handling. The system helps 
     administrators and
     doctors manage hospital data efficiently while improving workflow and reducing manual 
     processes.`,

Tech: `Django, Python, HTML, CSS, JavaScript, SQLite`,
    live: "https://saurabh544.pythonanywhere.com/",
    github: "https://github.com/codersSaurabh/HMs"
  },
  {
    id:3,
    name:'Library Management System',
    description:`Built an online library seat booking system that allows students to reserve 
    seats for different study shifts. The system includes OTP-based mobile verification and 
    automated booking management to simplify the seat allocation process and reduce manual work 
    for the library administration.`,

Tech: `Django, Python, HTML, CSS, JavaScript, SQLite` ,
    live:"https://shivakunjlibrary.in/",
    github:"https://github.com/codersSaurabh/Shiva-Kunj-Library-"
  },
  {
    id:4,
    name:"E-Commerce Website",
    description:`Developed a full-stack e-commerce web application that allows users to browse 
    products, add items to their cart, place orders, and track purchases using a unique tracking
     ID. The platform includes category-based product browsing and order tracking features to 
     enhance the shopping experience. While the payment gateway integration is planned for 
    future updates, the core shopping and order management functionalities are fully implemented.`,
    Tech:`Python, Django, HTML, CSS, JavaScript, SQLite`,
    live:"https://sumitcoder.pythonanywhere.com/",
    github:"https://github.com/codersSaurabh/E-commerce-website"
  }
]

const skills = [
  { id: 1, name: "DSA" },
  { id: 2, name: "React" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "DBMS" },
  { id: 5, name: "SQL" },
  { id: 6, name: "Git & GitHub" }
];
function App() {
  return (
    <div className="Container" id="home">
     
       <Navbar/>
       <Hero/>
       <Skill/>
       <Projects/>
       <Contact/>
       <Footer/>    </div>
  );
}
function Navbar(){
  const [active,setActive]=useState("Home");
    return(
      <div className="Navbar">
        <div className="left">
           <h3>Saurabh Pandey</h3>
          </div>
          <div className="right">
            <ul>
            <li className={active=="Home"?"active":""}><a href="#home" onClick={()=>setActive("Home")}>Home</a></li>
            <li className={active=="skills"?"active":""}><a href="#skills" onClick={()=>setActive("skills")}>Skills</a></li>
          <li className={active=="projects"?"active":""}><a href="#projects" onClick={()=>setActive("projects")}>Projects</a></li>
          <li className={active=="contact"?"active":""}><a href="#contact" onClick={()=>setActive("contact")}>Contact</a></li>
            </ul>
          </div>
      </div>

    )
}
function Hero(){
  return(
    <div className='hero'>
      <Profile/>
     <Intro/>
    </div>
  )
}
function Intro(){
  return(
    <div className="Intro">
  <h4>Hi, I'm Saurabh 👋</h4>
  <h1>Frontend Developer</h1>

  <p>
    I am a fresher frontend developer with strong problem-solving skills
    in Java and Data Structures & Algorithms. I have built backend
    projects using Django and have a foundational understanding of
    backend development and SQL databases. Currently, I focus on
    building responsive web interfaces using React while continuously
    improving my backend knowledge.
  </p>

  <div className="tech-stack">
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>React</span>
    <span>Java</span>
    <span>DSA</span>
    <span>SQL</span>
    <span>Django (Basics)</span>
  </div>

  <div className="hero-buttons">
    <a href="#projects" className="btn primary">View Projects</a>
    <a href={process.env.PUBLIC_URL + "/saurabhResume26.pdf"} className="btn secondary" download  >
      Download Resume
    </a>
  </div>
</div>
  )
}
function Profile(){
  return(
    <div className="profile">
       <img src={process.env.PUBLIC_URL + "/profile.png"} alt="Saurabh Pandey" />
  
  <h2>Saurabh Pandey</h2>
  <p className="role">Frontend Developer (React)</p>

  <p className="tagline">
    I build responsive and scalable web applications with modern UI.
  </p>

  <div className="icon">

    <a href="https://github.com/yourusername" target="_blank"><i className="fa fa-github"
    ></i></a>
    <a
  href="https://www.linkedin.com/in/yourusername"
  target="_blank"
  rel="noopener noreferrer"
>
<i class="fa fa-linkedin"></i>
</a>
<a href="https://leetcode.com/u/SaurabhPandey121/" target="_blank"><i class="fa fa-code"></i></a>
  </div>
    </div>
  )
}
function Skill(){
  return(
    <div className="skills" id="skills">
       <h2>Skills</h2>

  <div className="skills-grid">
    {skills.map(e=>(<div className="skill-card" key={e.id}>{e.name}</div>))}
    
    
  </div>
    </div>
  )
}
function Projects(){
  return(
    <div className="projects" id="projects">
     <center><h1>Projects</h1></center>
     <div className="project-grid">
      {projects.map((p)=><ProjectCard project={p} key={p.id}/>)}
    
      
    </div>
    </div>
  )
  
}
function ProjectCard({project}) {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>
       {project.description}
      </p>
       <p className="tech">
    <strong>Technologies:</strong> {project.Tech}
  </p>

      <div className="project-buttons">
        <a href={project.live} className="btn live">Live🌐</a>
        <a href={project.github} className="btn github">GitHub <i className="fa fa-github "></i>
</a>
      </div>
    
     </div>
  )
}
function Contact(){
return(
  <div className="contact" id="contact">
     <h2>Contact</h2>

  <div className="contact-box">
    <p>Email: <a href="mailto:saurabh544321@gmail.com">saurabh544321@gmail.com</a></p>
    <p>GitHub: <a href="https://github.com/codersSaurabh" target="_blank">github.com/codersSaurabh</a></p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/saurabh-pandey-4bb192246" target="_blank">linkedin.com/in/saurabh-pandey-4bb192246</a></p>
  </div>
  </div>
)
}
function Footer(){
  return(
    <div className="footer">
      <p>© 2026 Saurabh. All rights reserved.</p>
    </div>
  )
} 
export default App;
