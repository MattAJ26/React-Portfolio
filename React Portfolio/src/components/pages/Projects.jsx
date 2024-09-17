export default function Projects() {
  return (
    <>
      <div>
        <h1>Projects</h1>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Park Explorer </h4>
              <h6>Contributors: Danielle Boenisch, Andrea Fuentes, Savannah Marshall</h6>
              <a href="https://trip-planner-1cxc.onrender.com/login">
                <img src="src/assets/trip-planner-screenshot.png" width="100%"alt="first project" className="btn btn-primary"></img>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Weather Dashboard </h4>
              <a href="https://mattaj26.github.io/Weather-Dashboard/"><img src="src/assets/weather-dashboard.png" width="100%" alt="second project" className="btn btn-primary"></img>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">JATE: Just Another Text Editor </h4>
              <a href="https://just-another-text-editor-aivj.onrender.com/"><img src="src/assets/JATE-screenshot.png" width="100%" alt="third project" className="btn btn-primary"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
