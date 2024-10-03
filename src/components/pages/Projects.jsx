import tripPlanner from '../../assets/trip-planner-screenshot.png';
import weatherDash from '../../assets/weather-dashboard.png';
import eirOfRenewal from '../../assets/eir-of-renewal-screenshot.png';

export default function Projects() {
  return (
    <>
      <div>
        <h1>Projects</h1>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Eir of Renewal </h4>
              <h6>Contributors: Maryna Martseniuk, Olivier Ndicunguye, Shobha Ganesh</h6>
              <p>
              We created full stack MERN app for a holistic healing company that 
              I am still working to develop the app further so the client can have more refined styling and improved functionality.
              My roles during the project period included the client relations, wireframe, styling, authentication, and database setup.
              The tools being used include HTML, CSS, Javascript, EmailJS, Express, React, Chakra UI, JWT, GraphQL, MongoDB, and Mongoose ODM.
              </p>
              <a href="https://holistic-healing.onrender.com/" target="_blank">
                <img src={eirOfRenewal} width="100%"alt="first project" className="btn btn-primary"></img>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Park Explorer </h4>
              <h6>Contributors: Danielle Boenisch, Andrea Fuentes, Savannah Marshall</h6>
              <p>
                We created a full stack website for a coding bootcamp. My roles included Front-end design, and routing. 
                Tools used include HTML, CSS, JS, Express, Bootstrap, and Handlebars.
              </p>
              <a href="https://trip-planner-1cxc.onrender.com/login" target="_blank">
                <img src={tripPlanner} width="100%"alt="first project" className="btn btn-primary"></img>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Weather Dashboard </h4>
              <p>
                I created web app with a 3rd party API for a coding bootcamp. I was the sole developer for this project. 
                Tools used include HTML, CSS, JS, OpenWeather API, Node, and Express
              </p>
              <a href="https://mattaj26.github.io/Weather-Dashboard/" target="_blank">
                <img src={weatherDash} width="100%" alt="second project" className="btn btn-primary"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
