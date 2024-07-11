import React from 'react';
import '../Styles/homePage.css'
import ContactInfo from './ContactInfo'; // Assurez-vous que le chemin est correct

const Home = () => {
  return (
    <div className="container-fluid">
      <section className="row">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-5">
            <img src="/images/lyna.jpeg" className="card-img" alt="..."/>
          </div>
          <div className="col-md-7">
            <section>
              <h1 className="card-title">Lyna DJELMOUDI</h1>
              <h2 className="card-title">Software engineer </h2>
            </section>
            <section>
             <p>
                              Welcome, <br />
                              My name is Lyna. I am a computer engineer passionate about back-end and full-stack development. With my professional background and skills, I am determined and fully committed to ensuring the successful completion of your projects. <br />

                              Over the years, I have had the opportunity to immerse myself in a variety of creative projects. I have gained extensive skills in software development, web design, and database management through my diverse experiences, which has expanded my proficiency in computer systems. <br />

                              My professional approach is guided by the constant search for improvement. I constantly strive to expand my skills and knowledge to ensure the completion of quality projects and your satisfaction.

                              Transparency is at the heart of my practice. I firmly believe in clear and open communication to ensure the success of each project. <br />

                              Please take the time to peruse my portfolio to gain a deeper understanding of my background and expertise. I am eager to entertain dialogues about potential initiatives, cooperative chances, or to simply banter ideas. Thank you for taking the time to discover my work, and I look forward to connecting with you!
                            </p>
            </section>
            <section className="social-networks">
               <ul className="social-icons">
                   <li>
                       <a href="https://www.instagram.com/lynadjelmoudi_juniordeveloper/" target="_blank" rel="noopener noreferrer">
                         <img src="/images/icons/instagram.png" alt="Instagram" height="50" width="50" />
                       </a>
                   </li>
                   <li>
                       <a href="https://www.linkedin.com/in/lynadjelmoudi/" target="_blank" rel="noopener noreferrer">
                         <img src="/images/icons/linkedin.png" alt="LinkedIn" height="50" width="50" />
                       </a>
                   </li>
                   <li>
                       <a href="https://github.com/lyna26" target="_blank" rel="noopener noreferrer">
                                         <img src="/images/icons/github.png" alt="LinkedIn" height="50" width="50" />
                                       </a>
                   </li>
               </ul>
            </section>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Home;