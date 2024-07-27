import React from 'react';
import './styles/App.css';
import jyo from './images/jyo.jpg'



function App() {
  return (
    <div className="App">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="intro-box">
        <img src={jyo} alt="My Pic" className="profile-pic" />
        <h2 className="my-name">JYOTHI GUNDEMEDA(she/her)</h2>
      </div>
      <nav className="nav-bar">
        <a href="#About" className="nav-link">About</a>
        <a href="#education" className="nav-link">Education</a>
        <a href="#activities" className="nav-link">Activites</a>
        <a href="skills" className="nav-link">skills</a>
        <a href="#achievements and awards" className="nav-link">Achievements and Awards</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#intrests" className="nav-link">Intrests</a>
        <a href="#certificates" className="nav-link">Certificates</a>
        <a href="#languages" className="nav-link">Languages</a>
        <a href="#contact" className="nav-link">Activites</a>
      </nav>
      <div className="content">
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Email: jyothigundemeda.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/jyothi-gundemeda-b7795028b/">Your LinkedIn</a></p>
          <p>Github: <a href="https://github.com/jyothigundemeda/">Your Github</a></p>
        </section>
        <section id="About" className="section">
          <h2>About me</h2>
          <p>Full Name: Jyothi Nageswari Gundemeda.</p>
          <p>Date of Birth: 22 oct 2004.</p>
          <p>Nationality: Indian.</p>
          <p>female.</p>
          
        </section>
        <section id="education" className="section">
          <h2>Education</h2>
          <p>Currently studying me b.tech 3rd year with branch eof Artificial Intelligence and Data Scienece in KIET engineering college.</p>
          <p>Intermediate in OXFORD jr. college with M.P.C with 95% passed out in 2022.</p>
          <p>Scholling in OXFORD school with 98% passed out in 2020. </p>
        </section>
        <section id="achievements-awards" className="section">
          <h2>Achievements and Awards</h2>
          <p>Winner in TTL teach to learn.</p>
          <p>Parctipated in Projectnest.</p>
          <p>Done as intern in FMML.</p>
          <p>Done as intern in SWECHA.</p>
        


        </section>
        <section id="languages" className="section">
          <h2>Languages</h2>
          <p>Telugu, Hindi, english.</p>
        </section>
        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skill-bar">
            <p>C</p>
            <div className="bar"><div className="progress c"></div></div>
          </div>
          <div className="skill-bar">
            <p>Python</p>
            <div className="bar"><div className="progress python"></div></div>
          </div>
          <div className="skill-bar">
            <p>HTML</p>
            <div className="bar"><div className="progress html"></div></div>
          </div>
          <div className="skill-bar">
            <p>CSS</p>
            <div className="bar"><div className="progress css"></div></div>
          </div>
          <div className="skill-bar">
  <p>JavaScript</p>
  <div className="bar">
    <div className="progress js" style={{ width: '50%' }}>50%</div>
  </div>
</div>
<div className="skill-bar">
  <p>Machine Learning</p>
  <div className="bar">
    <div className="progress ml" style={{ width: '75%' }}>75%</div>
  </div>
</div>
<div className="skill-bar">
  <p>MongoDB</p>
  <div className="bar">
    <div className="progress mongodb" style={{ width: '60%' }}>60%</div>
  </div>
</div>

        </section>
        <section id="interests" className="section">
          <h2>Interests</h2>
          <p>To be Fronted Developer</p>
          <p>Learning new things.</p>
        </section>
        <section id="activities" className="section">
          <h2>Activities</h2>
          <p>Worked as tech lead in 2nd year .</p>
          <p>currently moving with GCC Global Coding Club.</p>
          <p>worked as team lead in project nest in 2nd year.</p>
          <p>Part of TTL Teach TO Learn.</p>
        </section>
        <section id="projects" className="section">
          <h2>Project1 : Personal Blog</h2>
          <p>Its is personal blog website by using technologies HTML, CSS , flask.</p>
          <h2>project2: Giphy Developer</h2>
          <p>It ia an gify deveoper based on Fetch api by using technologies HTML, CSS , React.</p>
          <h2>project3: PhoneBook</h2>
          <p>It is about to enter details for any data like student marks, employee data etc by using node.js, mongodb.</p>
          <h2>Project4: ID card</h2>
          <p>It is about to enter student details for their id card by using Node.js, MongoDb. </p>
          <h2>Project4: Red wine Quality</h2>
          <p>It is about a website to check quality of winw by using M achine Learinng.</p>
        </section>

        <section id="certifiactes" className="Certifiactes">
          <h2>Certifications</h2>
          <p>certified in udemey for python.</p>
          <p>certified for python in GCC.</p>
          <p>Certified for python in edyst.</p>
          <p>certfied in accenture for machine learning.</p>
          <p>certified in FMML for machine learning.</p>
          <p>certified for machine learning in SWECHA. </p>
        </section>
      </div>
    </div>
  );
}

export default App;