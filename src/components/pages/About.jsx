import profileImg from '../../assets/image.png'
import bootcampBadge from '../../assets/coding-boot-camp-badge.png';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div className="container">
      <div className="card">
      <img className="developer-photo"src={profileImg} alt="developer-photo"></img>
      <p className="col-md-9 p-3">
      Raised in Washington State and now residing in Utah, I am an aspiring software developer currently enrolled in a Full Stack Development course. I’m mastering a wide range of programming languages and technologies, including HTML, CSS, JavaScript, Node.js, SQL, MongoDB, and React among others. My background includes extensive professional experience in sales operations, customer service, and office management. In addition to my technical training, I hold an Associate of Business degree, which has provided me with strong organizational and problem-solving skills that I bring into every project. I'm passionate about merging my business expertise with my growing technical skills to create innovative solutions and efficient systems.
      </p>
      </div>
      </div>
      <div className="container">
      <div className="card">
      <h3 className="col-md-9 p-3">Badges</h3>
      <a href="https://www.credly.com/badges/a8981c6c-2489-48bc-a234-4d1519939df1" target="_blank">
      <img className="badge-photo" src={bootcampBadge} alt="full stack coding bootcamp badge"></img>
      </a>
      </div>
      </div>
    </div>
  );
}
