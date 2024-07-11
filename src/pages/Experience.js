import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel} from 'react-bootstrap';
import '../Styles/formationPage.css'

function Experience() {
  return (
  <section id="timeline">

  <article>
        <div class="inner">
          <span class="date">
            <span class="month">August</span>
            <span class="year">2019</span>
          </span>
          <h2>Sowtware engineer consultant </h2>
          <p> Softeam  (LA DEFENSE) </p>
          <p> 2023 </p>
          <p> First mission : java developer for societe générale </p>

          <p> Tools : java, cosmos, python, windows, linux, aks, elasticSearch, grafana, kibana</p>
        </div>
      </article>
<article>
      <div class="inner">
        <span class="date">
          <span class="month">August</span>
          <span class="year">2019</span>
        </span>
        <h2>System and Storage (Apprentice)</h2>
        <p> Dassault systèmes  (VELIZY-VILLACOUBLAY) </p>
        <p> 2019-2022 </p>
        <p> Descriptif :
                         Website development and maintenance

                         Software development

                         Project Management

                         Database development, management and maintenance

                         Writing documentation and various content

                         </p>
        <p> Tools : PowerShell, PHP, JavaScript, Bootstrap, Jquery, Windows, SQL, SSMS, HTML5, CSS3</p>
      </div>
    </article>

    <article>
          <div class="inner">
            <span class="date">
              <span class="month">April</span>
              <span class="year">2019</span>
            </span>
            <h2>full stack developper (trainee)</h2>
            <p> idylis.com  (PARIS 11) </p>
            <p> 2017-2019 </p>
            <p> Descriptif : Maintenance on the idylis.com web site </p>
            <p> Tools : HTML5, CSS3, jquery, javascript, asp.net, bootstrap</p>
          </div>
        </article>
  </section>
 );
}
export default Experience;