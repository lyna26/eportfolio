import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel} from 'react-bootstrap';
import '../Styles/formationPage.css'

function ExperienceItem({ experience }) {
  return (
  <section className="row">
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-1">
          <img className="card-img" src={experience.company.logo} alt="..."/>
        </div>

        <div className="col-md-11">
            <section>
              <h3>{experience.contract.title} </h3>
              <p>{experience.company.name} . {experience.contract.type} . {experience.company.location}</p>
              <p>{experience.contract.duration}</p>
            </section>
            <section>
              <ul>
                {experience.description.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </section>
            <section>
              <p>
                 {experience.skills.join(", ")}
              </p>
            </section>
        </div>
    </div>
    </div>
  </section>
  );
}
export default ExperienceItem;