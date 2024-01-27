

const Projects = () => {
	return(
          <>
        <h3 className="heading" id="projects">Projects</h3>
        <div className="skills_container">
   
                <div className="skills">
                    <div><h4>School Management System</h4></div>
                    <div>
                        <p>This MERN-based School Management System offers user-specific features, allowing seamless login experiences for administrators, teachers, and students. Users can access tailored functionalities based on their roles, enhancing the overall user experience.</p>
                    </div> 
                    <div className="view">
                       <a href="https://vickyschoolmanagement.netlify.app" target="_blank" rel="noopener noreferrer">View...</a>
                       <a href="https://github.com/Vicky-Kushwaha?tab=repositories" target="_blank" rel="noopener noreferrer"><img src="images/code.png" alt="code" width="30" /></a> 
                    </div>                  
               </div>

               <div className="skills">
                    <div><h4>Weather App</h4></div>
                    <div>
                        <p>This Node.js-based Weather App simplifies checking the current weather information for any city. By entering the city name, the app seamlessly fetches API data, providing you with instant and accurate current weather details.</p>
                    </div>
                    <div className="view">
                       <a href="https://weather-app-tgja.onrender.com/" target="_blank" rel="noopener noreferrer">View...</a> 
                       <a href="https://github.com/Vicky-Kushwaha/Weather-app" target="_blank" rel="noopener noreferrer"><img src="images/code.png" alt="code" width="30" /></a> 
                    </div>  
                    
               </div>

           </div>           	

          </>
		)
}

export default Projects;