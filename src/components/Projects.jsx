import "./css/project.css";

const Projects = () => {
  return (
    <>
      <h3 className="heading" id="projects">
        Projects
      </h3>
      <div className="projects_container">
        <div className="project">
            <img src="./images/ecommerce.png" alt="poster" className="poster"/>
          <div>
            <h4>Ecommerce</h4>
          </div>
          <div>
            <p>
            This feature-rich ecommerce website, developed from scratch using ReactJS, Redux, NodeJS, ExpressJS, MongoDB, and Material UI, I created seamless user experiences for product management, order processing, and user authentication and many more features.
            </p>
          </div>
          <div className="view">
            <a
              href="https://ecommerce-pearl-eta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/visit.png" alt="visit" width="45"  />
            </a>
            <a
              href="https://github.com/Vicky-Kushwaha/Ecommerce"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/code.png" alt="code" width="30" />
            </a>
          </div>
        </div>

        <div className="project">
        <img src="./images/school.png" alt="poster" className="poster"/>
          <div>
            <h4>School Management System</h4>
          </div>
          <div>
            
            <p>
              This MERN-based School Management System offers user-specific
              features, allowing seamless login experiences for administrators,
              teachers, and students. Users can access tailored functionalities
              based on their roles, enhancing the overall user experience.
            </p>
          </div>
          <div className="view">
            <a
              href="https://vickyschoolmanagement.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/visit.png" alt="visit" width="45"  />
            </a>
            <a
              href="https://github.com/Vicky-Kushwaha?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/code.png" alt="code" width="30" />
            </a>
          </div>
        </div>

        <div className="project">
        <img src="./images/weather.png" alt="poster" className="poster"/>
          <div>
            <h4>Weather App</h4>
          </div>
          <div>
            <p>
              This Node.js-based Weather App simplifies checking the current
              weather information for any city. By entering the city name, the
              app seamlessly fetches API data, providing you with instant and
              accurate current weather details.
            </p>
          </div>
          <div className="view">
            <a
              href="https://weather-app-tgja.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/visit.png" alt="visit" width="45" />
            </a>
            <a
              href="https://github.com/Vicky-Kushwaha/Weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/code.png" alt="code" width="30" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
