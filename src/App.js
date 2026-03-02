import './App.css';

import {useState} from "react";
const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "Personal portfolio built using React.",
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/portfolio"
  },
  {
    id: 2,
    name: "Portfolio Website",
    description: "Personal portfolio built using React.",
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/portfolio"
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
    <a href="saurabhResume26.pdf" className="btn secondary" download  >
      Download Resume
    </a>
  </div>
</div>
  )
}
function Profile(){
  return(
    <div className="profile">
       <img src="/profile.png" alt="Saurabh Pandey" />
  
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
    <p>Email: <a href="mailto:yourname@email.com">yourname@email.com</a></p>
    <p>GitHub: <a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a></p>
    <p>LinkedIn: <a href="https://linkedin.com/in/yourusername" target="_blank">linkedin.com/in/yourusername</a></p>
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
