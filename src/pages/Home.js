import React from 'react';

function Contact() {
  return (
     <div>
           <div className="App">
             <div className="container text-center mt-4">
               <h1> Lyna DJELMOUDI </h1>
               <img
                 className="rounded-circle d-inline-block p-3"
                 src="/images/lyna.jpeg" // Use an absolute path to the image
                 alt="Lyna DJELMOUDI"
                 height="395"
                 width="395"/>
             </div>

             <div className="container">
               <h1> A propos de moi </h1>
               <p>
                   Bonjour,

                   <br/><br/>Je suis Lyna, une ingénieure en informatique passionnée par le développement. Avec 4 ans d'expérience dans ce domaine, je suis déterminée à concrétiser vos projets.

                   <br/><br/>Au fil des années, j'ai eu l'opportunité de m'immerger dans une variété de projets passionnants. Ces expériences m'ont permis de développer des compétences solides en développement logiciel, en conception web, en gestion de bases de données, et ont élargi mes connaissances en systèmes informatiques.

                   <br/> <br/>Ma démarche professionnelle est guidée par la recherche constante de l'amélioration. Je m'efforce continuellement d'élargir mes compétences et mes connaissances pour garantir la réalisation de projets de qualité et votre satisfaction.

                   <br/> <br/>La transparence est au cœur de ma pratique professionnelle. Je crois fermement en une communication claire et ouverte pour assurer la réussite de chaque projet.

                   <br/> <br/>N'hésitez pas à explorer mon portfolio pour mieux me connaître. Je suis toujours ouverte pour discuter de projets potentiels, d'opportunités de collaboration ou simplement pour échanger des idées.

                   Merci de prendre le temps de découvrir mon travail, et j'ai hâte de connecter avec vous !
               </p>
             </div>

             <div className="container">
                 <h1> Mes réseaux </h1>
                 <p>

                   <a href="https://www.instagram.com/lynadjelmoudi_juniordeveloper/" target="_blank" rel="noopener noreferrer">
                     <img src="/images/icons/instagram.png" alt="Instagram" height="50" width="50" />
                   </a>
                   {' '}

                   <a href="https://www.linkedin.com/in/lynadjelmoudi/" target="_blank" rel="noopener noreferrer">
                     <img src="/images/icons/linkedin.png" alt="LinkedIn" height="50" width="50" />
                   </a>
                   {' '}

                   <a href="mailto:djelmoudi.lyna@gmail.com" target="_blank" rel="noopener noreferrer">
                                     <img src="/images/icons/gmail.png" alt="LinkedIn" height="50" width="50" />
                   </a>
                   {' '}

                   <a href="https://github.com/lyna26" target="_blank" rel="noopener noreferrer">
                                     <img src="/images/icons/github.png" alt="LinkedIn" height="50" width="50" />
                                   </a>
                 </p>
             </div>
           </div>
       </div>
  );
}

export default Contact;