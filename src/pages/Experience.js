import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel} from 'react-bootstrap';
import '../Styles/formationPage.css'
import ExperienceItem from './ExperienceItem';

const experiences =  [
    {
      company: {
        name: "Dassault Systemes",
        location: "velizy-villacoublay",
        logo: "/images/icons/dassaultSystemes.png",
      },

      contract: {
        title:  "Apprentice -System and storage",
        duration: "Aug 2019 - Aug. 2022 • 3years",
        type: "Apprenticeship"
      },

      description: [
        "Website development and maintenance",
        "Software development",
        "Project Management",
        "Database development, management and maintenance",
        "Writing documentation and various content",
        "Automation of process",
      ],
      skills: [
        "Project Management",
        "Powershell",
        "SQL Server",
        "Website Development (PHP, Javascript, jQuery, Bootstrap; CSS, HTML)",
      ],
    },
    {
          company: {
            name: "Idylis.com",
            location: "Paris 11",
            logo: "/images/icons/idylis.png"
          },
          contract: {
            title: "full stack developper",
            duration: "april 2019 - august 2019",
            type: "Stage",
          },
          description: [
            "Maintenance of idylis.com web site"
          ],
          skills: [
            "Cascading Style Sheets (CSS)",
            "Javascript",
            "jQuery",
            "Bootstrap"
          ],
    }
  ]

function Experience() {
  return (
   <div className="container-fluid">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.company.name} experience={experience} />
        ))}
      </div>
  );
};
export default Experience;